# cython: cdivision=True
# cython: boundscheck=False
# cython: wraparound=False

import numpy as np
cimport numpy as np
cimport cython

from cython cimport floating
from libc.math cimport sqrt
from libc.stdio cimport printf
from ..utils import pairwise_euclidean_distances
from ..utils import flush_progress_bar

cdef floating euclidean_distance(floating* a, floating* b, int n_features) nogil:
    """
    Compute the euclidean distance between `a` and `b`. (Each data has the `n_features` features.)
    As the function start with `nogil`, this function will be executed without GIL.
    """
    cdef floating result, diff
    result = 0
    cdef int i
    for i in range(n_features):
        diff = (a[i] - b[i])
        result += diff * diff
    return sqrt(result)

cdef update_for_elkan(
        floating* X, floating* centers, floating[:, :] half_cent2cent,
        int[:] labels, floating[:, :] lower_bounds, floating[:] upper_bounds,
        Py_ssize_t n_samples, int n_features, int n_clusters):
    """
    @params X              : The input data. shape=(n_samples, n_features)
    @params centers        : The cluster centers. shape=(n_clusters, n_features)
    @params half_cent2cent : The half of the distance between any 2 clusters centers. shape=(n_clusters, n_clusters)
    @params labels         : The label for each sample. shape(n_samples)
    @params lower_bounds   : The lower bound on the distance between a sample and each cluster center. shape=(n_samples, n_clusters)
    @params upper_bounds   : The upper bound on the distance of each sample from its closest cluster center. shape=(n_samples,)
    @params n_samples      : The number of samples.
    @params n_features     : The number of features.
    @params n_clusters     : The number of clusters.
    """
    cdef floating* x
    cdef floating* c
    cdef floating d_c, dist
    cdef int c_x, k
    cdef Py_ssize_t idx
    for idx in range(n_samples):
        # first cluster (exception)
        c_x = 0
        x = X + idx * n_features
        d_c = euclidean_distance(x, centers, n_features) # temporal upper bound.
        lower_bounds[idx, 0] = d_c
        for k in range(1, n_clusters):
            # If this hold, then k is a good candidate fot the sample to be relabeled.
            if d_c > half_cent2cent[c_x, k]:
                c = centers + k * n_features
                dist = euclidean_distance(x, c, n_features)
                lower_bounds[idx, k] = dist
                if dist < d_c:
                    d_c = dist
                    c_x = k
        labels[idx] = c_x
        upper_bounds[idx] = d_c

def _kmeans_Estep(
        np.ndarray[floating, ndim=2, mode='c'] X,
        np.ndarray[floating, ndim=2, mode='c'] centers,
        np.ndarray[int, ndim=1] labels,
        np.ndarray[floating, ndim=1, mode='c'] distances):
    """
    Assign the labels inplace. (dense matrix)
    @params X               : Input data.               shape=(n_samples, n_features)
    @params centers         : The current centers.      shape=(n_clusters, n_features)
    @params labels          : Current label assignment. shape=(n_samples,)
    @params distances       : Distance to closest cluster for each sample. if shape=(n_samples), store the distances.
    @return inertia         :
    """
    cdef int n_clusters = centers.shape[0]
    cdef int n_features = centers.shape[1]
    cdef int n_samples  = X.shape[0]
    cdef floating* centers_p = <floating*>centers.data
    cdef floating* X_p = <floating*>X.data
    cdef Py_ssize_t idx, k
    cdef float inertia = 0.0
    cdef float min_dist, dist
    cdef int store_dist = 0
    # if shape=(n_samples), store the distances.
    if n_samples == distances.shape[0]:
        store_dist = 1

    for idx in range(n_samples):
        min_dist = -1
        for k in range(n_clusters):
            dist = euclidean_distance(X_p+idx*n_features, centers_p+k*n_features, n_features)
            if min_dist == -1 or dist < min_dist:
                min_dist = dist
                labels[idx] = k
        if store_dist:
            distances[idx] = min_dist
        inertia += min_dist

    return inertia

def _kmeans_Mstep(
        np.ndarray[floating,   ndim=2] X,
        np.ndarray[floating,   ndim=1] sample_weight,
        np.ndarray[np.int32_t, ndim=1] labels,
        int n_clusters,
        np.ndarray[floating,   ndim=1] distances):
    """ M step of the K-means EM algorithm
    @params X             : Input data. shape=(n_samples, n_features)
    @params sample_weight : The weights for each observation in X. shape=(n_samples,)
    @params labels        : Current label assignment. shape=(n_samples,)
    @params n_clusters    : Number of desired clusters.
    @params distances     : Distance to closest cluster for each sample. shape=(n_samples)
    @return centers       : The resulting centers. shape=(n_clusters, n_features)
    """
    dtype = np.float32 if floating is float else np.float64
    cdef int n_samples = X.shape[0]
    cdef int n_features = X.shape[1]
    cdef int i, j, c
    cdef np.ndarray[floating, ndim=2] centers = np.zeros((n_clusters, n_features), dtype=dtype)
    cdef np.ndarray[floating, ndim=1] weight_in_cluster = np.zeros((n_clusters,), dtype=dtype)

    for i in range(n_samples):
        weight_in_cluster[labels[i]] += sample_weight[i]
    empty_clusters = np.where(weight_in_cluster==0)[0]

    # If there is a cluster to which no data belongs, the furthest data is considered to be the new center.
    if len(empty_clusters):
        far_from_centers = distances.argsort()[::-1]
        for i,k in enumerate(empty_clusters):
            far_index = far_from_centers[i]
            new_center = X[far_index] * sample_weight[far_index]
            centers[k] = new_center
            weight_in_cluster[k] = sample_weight[far_index]

    for i in range(n_samples):
        for j in range(n_features):
            centers[labels[i], j] += X[i,j]*sample_weight[i]

    centers /= weight_in_cluster[:, np.newaxis]
    return centers

def k_means_elkan(np.ndarray[floating, ndim=2, mode='c'] X,
                  np.ndarray[floating, ndim=1, mode='c'] sample_weight,
                  int n_clusters,
                  np.ndarray[floating, ndim=2, mode='c'] centers,
                  float tol=1e-4, int max_iter=300, verbose=1):
    """Run Elkan's k-means.
    @params X             : The input data. shape=(n_samples, n_features)
    @params sample_weight : The weights for each observation in X. shape=(n_samples,)
    @params n_clusters    : Number of clusters to find.
    @params centers       : Initial position of centers.
    @params tol           : The relative increment in cluster means before declaring convergence.
    @params max_iter      : Maximum number of iterations of the k-means algorithm. (>0)
    @params verbose       : Whether to be verbose.
    """
    dtype = np.float32 if floating is float else np.float64

    # Initialization.
    cdef np.ndarray[floating, ndim=2, mode='c'] new_centers
    cdef floating* centers_p = <floating*>centers.data
    cdef floating* X_p = <floating*>X.data
    cdef floating* x_p
    cdef Py_ssize_t n_samples = X.shape[0]
    cdef Py_ssize_t n_features = X.shape[1]
    cdef Py_ssize_t idx
    cdef int k, label
    cdef floating ub, dist
    cdef floating[:, :] half_cent2cent = pairwise_euclidean_distances(centers) / 2.
    cdef floating[:] nearest_center_half_dist
    cdef floating[:, :] lower_bounds = np.zeros((n_samples, n_clusters), dtype=dtype)
    upper_bounds_ = np.empty(n_samples, dtype=dtype)
    cdef floating[:] upper_bounds = upper_bounds_
    cdef np.uint8_t[:] is_tight = np.ones(n_samples, dtype=np.uint8)
    labels_ = np.empty(n_samples, dtype=np.int32)
    cdef int[:] labels = labels_

    # Get the initial set of upper bounds and lower bounds for each sample.
    update_for_elkan(X_p, centers_p, half_cent2cent, labels, lower_bounds,
                     upper_bounds, n_samples, n_features, n_clusters)
    for it in range(max_iter):
        # START) Elkan's Estep
        # 1) For all clusters c and c', compute d(c,c').
        # nearest_center_half_dist[k] means the distance from center k to nearest center j(≠k)
        nearest_center_half_dist = np.partition(half_cent2cent, kth=1, axis=0)[1]
        for idx in range(n_samples):
            ub = upper_bounds[idx]
            label = labels[idx]
            # 2) This means that the nearlest center is far away from the currently assigned center.
            if nearest_center_half_dist[label] >= ub:
                continue

            x_p = X_p + idx * n_features
            for k in range(n_clusters):
                # 3) If this hold, then k is a good candidate fot the sample to be relabeled.
                if (k!=label and (ub > lower_bounds[idx, k]) and (ub > half_cent2cent[k, label])):
                    # 3.a Recomputing the actual distance between sample and label.
                    if not is_tight[idx]:
                        ub = euclidean_distance(x_p, centers_p + label*n_features, n_features)
                        lower_bounds[idx, label] = ub
                        is_tight[idx] = 1

                    # 3.b
                    if (ub > lower_bounds[idx, k] or (ub > half_cent2cent[label, k])):
                        dist = euclidean_distance(x_p, centers_p + k*n_features, n_features)
                        lower_bounds[idx, k] = dist
                        if dist < ub:
                            label = k
                            ub = dist
            upper_bounds[idx] = ub
            labels[idx] = label
        # END) Elkan's Estep

        # compute new centers
        new_centers = _kmeans_Mstep(X, sample_weight, labels_, n_clusters, upper_bounds_)
        is_tight[:] = 0

        center_shift = np.sqrt(np.sum((centers-new_centers)**2, axis=1))
        center_shift_total = np.sum(center_shift**2)

        # Update lower bounds and upper bounds.
        lower_bounds = np.maximum(lower_bounds - center_shift, 0)
        upper_bounds += center_shift[labels_]

        # Reassign centers
        centers = new_centers
        centers_p = <floating*>new_centers.data

        inertia = np.sum((X-centers[labels])**2*sample_weight[:,np.newaxis])
        flush_progress_bar(
            it, max_iter, verbose=verbose, barname="KMeans Elkan",
            metrics={
                "average inertia"    : "{:.3f}".format(inertia/n_samples),
                "center shift total" : "{:.3f}".format(center_shift_total),
            }
        )
        if center_shift_total < tol:
            break

        half_cent2cent = pairwise_euclidean_distances(centers) / 2.

    if center_shift_total != 0:
        update_for_elkan(X_p, centers_p, half_cent2cent, labels, lower_bounds,
                         upper_bounds, n_samples, n_features, n_clusters)
    if verbose>0:
        printf("\n")
    return centers, inertia, labels_, it+1

def k_means_hamerly(np.ndarray[floating, ndim=2, mode='c'] X,
                    np.ndarray[floating, ndim=1, mode='c'] sample_weight,
                    int n_clusters,
                    np.ndarray[floating, ndim=2, mode='c'] centers,
                    float tol=1e-4, int max_iter=300, verbose=1):
    """Run Hamerly's k-means.
    @params X             : The input data. shape=(n_samples, n_features)
    @params sample_weight : The weights for each observation in X. shape=(n_samples,)
    @params n_clusters    : Number of clusters to find.
    @params centers       : Initial position of centers.
    @params tol           : The relative increment in cluster means before declaring convergence.
    @params max_iter      : Maximum number of iterations of the k-means algorithm. (>0)
    @params verbose       : Whether to be verbose.
    """
    dtype = np.float32 if floating is float else np.float64
    # Initialization.
    cdef np.ndarray[floating, ndim=2, mode='c'] new_centers
    cdef floating* centers_p = <floating*>centers.data
    cdef floating* X_p = <floating*>X.data
    cdef floating* x_p
    cdef Py_ssize_t n_samples = X.shape[0]
    cdef Py_ssize_t n_features = X.shape[1]
    cdef Py_ssize_t idx, k, label
    cdef floating ub, rhs, dist
    cdef floating[:, :] half_cent2cent = pairwise_euclidean_distances(centers) / 2.
    cdef floating[:] nearest_center_half_dist
    cdef floating[:] lower_bounds = np.partition(pairwise_euclidean_distances(X, centers), kth=1, axis=1)[:,1]
    upper_bounds_ = np.empty(n_samples, dtype=dtype)
    cdef floating[:] upper_bounds = upper_bounds_
    labels_ = np.empty(n_samples, dtype=np.int32)
    cdef int[:] labels = labels_
    # Initialize upper bounds
    cdef float inertia = _kmeans_Estep(X, centers, labels_, upper_bounds_)

    for it in range(max_iter):
        # START) Hamerly's Estep
        # nearest_center_half_dist[k] means the distance from center k to nearest center j(≠k)
        nearest_center_half_dist = np.partition(half_cent2cent, kth=1, axis=0)[1]
        for idx in range(n_samples):
            ub = upper_bounds[idx]
            label = labels[idx]
            rhs = np.maximum(nearest_center_half_dist[label], lower_bounds[idx])
            # Hamerly' Proposition (step.1)
            if ub <= rhs: continue
            # Update the upper bound.
            x_p = X_p + idx * n_features
            ub = euclidean_distance(x_p, centers_p + label*n_features, n_features)
            # Hamerly' Proposition (step.2)
            if ub <= rhs: continue
            min_dist = -1
            for k in range(n_clusters):
                dist = euclidean_distance(x_p, centers_p + k*n_features, n_features)
                if min_dist == -1 or dist < min_dist:
                    min_dist = dist
                    label = k
                    ub = dist
            upper_bounds[idx] = ub
            labels[idx] = label
        # END) Hamerly's Estep

        # compute new centers
        new_centers = _kmeans_Mstep(X, sample_weight, labels_, n_clusters, upper_bounds_)
        center_shift = np.sqrt(np.sum((centers-new_centers)**2, axis=1))
        center_shift_total = np.sum(center_shift**2)

        # Update lower bounds and upper bounds.
        nd,st = np.partition(center_shift, kth=-2)[-2:]
        upper_bounds += center_shift[labels_]
        center_shift_most_other = np.where(center_shift==st, nd, st)
        lower_bounds = np.maximum(lower_bounds - center_shift_most_other[labels_], 0)

        # Reassign centers
        centers = new_centers
        centers_p = <floating*>new_centers.data

        inertia = np.sum((X-centers[labels])**2*sample_weight[:,np.newaxis])
        flush_progress_bar(
            it, max_iter, verbose=verbose, barname="KMeans Hamerly",
            metrics={
                "average inertia"    : "{:.3f}".format(inertia/n_samples),
                "center shift total" : "{:.3f}".format(center_shift_total),
            }
        )
        if center_shift_total < tol:
            break

        half_cent2cent = pairwise_euclidean_distances(centers) / 2.

    if verbose>0:
        printf("\n")

    return centers, inertia, labels_, it+1
