#     Copyright 2020 Optimizely Inc.
#
#     Licensed under the Apache License, Version 2.0 (the "License");
#     you may not use this file except in compliance with the License.
#     You may obtain a copy of the License at
#
#         http://www.apache.org/licenses/LICENSE-2.0
#
#     Unless required by applicable law or agreed to in writing, software
#     distributed under the License is distributed on an "AS IS" BASIS,
#     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#     See the License for the specific language governing permissions and
#     limitations under the License.

import warnings
from functools import reduce

import numpy as np
from pytest import approx
from scipy.stats import multinomial

from . import constants as const
from .ssrm_test import (
    _is_integer,
    _validate_data,
    bayes_factor,
    log_posterior_predictive,
    multinomiallogpmf,
    posterior_probability,
    sequential_bayes_factors,
    sequential_p_values,
    sequential_posterior_probabilities,
    sequential_posteriors,
    srm_test,
)


def test_accumulator():
    """
    Tests that the posterior probability computed sequentially
    via accumulation is equal to the posterior probability
    computed in a batch manner.
    """
    theta = np.array([1 / 3, 1 / 3, 1 / 3])
    dirichlet_probability = np.array([1, 3, 2])
    dirichlet_concentration = 1
    dirichlet_alpha = dirichlet_probability * dirichlet_concentration
    sample_size = 40
    observations = multinomial.rvs(1, theta, size=sample_size)
    observations_sum = reduce(lambda x, y: x + y, observations)
    final_posterior = sequential_posteriors(
        observations,
        theta,
        dirichlet_probability=dirichlet_probability,
        dirichlet_concentration=dirichlet_concentration,
    )[-1]
    final_bf = bayes_factor(final_posterior)
    post_prob = posterior_probability(final_bf)
    log_marginal_likelihood_M1 = log_posterior_predictive(
        observations_sum, dirichlet_alpha
    )
    log_marginal_likelihood_M0 = multinomial.logpmf(
        observations_sum, observations_sum.sum(), theta
    )
    log_odds = log_marginal_likelihood_M1 - log_marginal_likelihood_M0
    odds = np.exp(log_odds)
    assert post_prob == approx(odds / (1 + odds))


def test_overflow():
    posterior = {
        const.LOG_MARGINAL_LIKELIHOOD_M1: -23.585991739528254,
        const.LOG_MARGINAL_LIKELIHOOD_M0: -76546.65811250894,
        const.POSTERIOR_M1: [88519.5, 12540.25, 13002.25],
        const.POSTERIOR_M0: [0.75, 0.125, 0.125],
    }
    # Assert there are no warnings in code exec
    with warnings.catch_warnings(record=True) as w:
        warnings.simplefilter("always")
        bf = bayes_factor(posterior)
        assert np.isinf(bf)
        assert posterior_probability(bf) == approx(1)
        assert len(w) == 0


def test_multinomiallogpmf():
    xs = [[10, 20, 30], [1, 1, 1], [0, 0, 1], [12, 30, 8]]
    ns = [sum(x) for x in xs]
    ps = [[0.2, 0.4, 0.4], [1 / 3, 1 / 3, 1 / 3], [0.3, 0.4, 0.3], [0, 0, 1]]
    for x, n, p in zip(xs, ns, ps):
        assert multinomial.logpmf(x, n, p) == approx(multinomiallogpmf(x, n, p))


def test_sequential_posteriors():
    # Testing unit-level data, where the counts across all variations are represented as one-hot vectors.
    expected_posteriors_dict = [
        {
            const.LOG_MARGINAL_LIKELIHOOD_M1: -1.0986122886681096,
            const.LOG_MARGINAL_LIKELIHOOD_M0: -0.916290731874155,
            const.POSTERIOR_M1: np.array([2, 1, 1]),
            const.POSTERIOR_M0: np.array([0.4, 0.4, 0.2]),
        },
        {
            const.LOG_MARGINAL_LIKELIHOOD_M1: -2.4849066497880004,
            const.LOG_MARGINAL_LIKELIHOOD_M0: -1.83258146374831,
            const.POSTERIOR_M1: np.array([2, 2, 1]),
            const.POSTERIOR_M0: np.array([0.4, 0.4, 0.2]),
        },
        {
            const.LOG_MARGINAL_LIKELIHOOD_M1: -3.401197381662155,
            const.LOG_MARGINAL_LIKELIHOOD_M0: -2.748872195622465,
            const.POSTERIOR_M1: np.array([3, 2, 1]),
            const.POSTERIOR_M0: np.array([0.4, 0.4, 0.2]),
        },
        {
            const.LOG_MARGINAL_LIKELIHOOD_M1: -4.499809670330265,
            const.LOG_MARGINAL_LIKELIHOOD_M0: -3.66516292749662,
            const.POSTERIOR_M1: np.array([3, 3, 1]),
            const.POSTERIOR_M0: np.array([0.4, 0.4, 0.2]),
        },
        {
            const.LOG_MARGINAL_LIKELIHOOD_M1: -6.4457198193855785,
            const.LOG_MARGINAL_LIKELIHOOD_M0: -5.27460083993072,
            const.POSTERIOR_M1: np.array([3, 3, 2]),
            const.POSTERIOR_M0: np.array([0.4, 0.4, 0.2]),
        },
    ]
    datapoints = np.array([[1, 0, 0], [0, 1, 0], [1, 0, 0], [0, 1, 0], [0, 0, 1]])
    null_probabilities = np.array([0.4, 0.4, 0.2])
    posteriors_dict = sequential_posteriors(
        datapoints,
        null_probabilities,
        dirichlet_probability=np.array([1, 1, 1]),
        dirichlet_concentration=1,
    )
    assert len(posteriors_dict) == len(datapoints)
    for acc_dict, expected_acc_dict in zip(posteriors_dict, expected_posteriors_dict):
        assert acc_dict[const.LOG_MARGINAL_LIKELIHOOD_M1] == approx(
            expected_acc_dict[const.LOG_MARGINAL_LIKELIHOOD_M1]
        )
        assert acc_dict[const.LOG_MARGINAL_LIKELIHOOD_M0] == approx(
            expected_acc_dict[const.LOG_MARGINAL_LIKELIHOOD_M0]
        )
        assert acc_dict[const.POSTERIOR_M1] == approx(
            expected_acc_dict[const.POSTERIOR_M1]
        )
        assert acc_dict[const.POSTERIOR_M0] == approx(
            expected_acc_dict[const.POSTERIOR_M0]
        )

    # Testing time-aggregated data, where each entry represents an aggregate count across all variations for that time.
    datapoints = np.array([[20, 17, 9], [18, 21, 8], [4, 6, 4], [18, 19, 11]])
    null_probabilities = np.array([0.4, 0.4, 0.2])
    posteriors_dict = sequential_posteriors(
        datapoints,
        null_probabilities,
        dirichlet_probability=np.array([1, 1, 1]),
        dirichlet_concentration=1,
    )
    expected_posteriors_dict = [
        {
            const.LOG_MARGINAL_LIKELIHOOD_M1: -7.028201432058012,
            const.LOG_MARGINAL_LIKELIHOOD_M0: -4.0776406466061985,
            const.POSTERIOR_M1: np.array([21, 18, 10]),
            const.POSTERIOR_M0: np.array([0.4, 0.4, 0.2]),
        },
        {
            const.LOG_MARGINAL_LIKELIHOOD_M1: -11.947847738358888,
            const.LOG_MARGINAL_LIKELIHOOD_M0: -8.265946861099877,
            const.POSTERIOR_M1: np.array([39, 39, 18]),
            const.POSTERIOR_M0: np.array([0.4, 0.4, 0.2]),
        },
        {
            const.LOG_MARGINAL_LIKELIHOOD_M1: -15.471401950257842,
            const.LOG_MARGINAL_LIKELIHOOD_M0: -11.610743519545139,
            const.POSTERIOR_M1: np.array([43, 45, 22]),
            const.POSTERIOR_M0: np.array([0.4, 0.4, 0.2]),
        },
        {
            const.LOG_MARGINAL_LIKELIHOOD_M1: -19.96484521090386,
            const.LOG_MARGINAL_LIKELIHOOD_M0: -15.781031228536165,
            const.POSTERIOR_M1: np.array([61, 64, 33]),
            const.POSTERIOR_M0: np.array([0.4, 0.4, 0.2]),
        },
    ]
    assert len(posteriors_dict) == len(datapoints)
    for acc_dict, expected_acc_dict in zip(posteriors_dict, expected_posteriors_dict):
        assert acc_dict[const.LOG_MARGINAL_LIKELIHOOD_M1] == approx(
            expected_acc_dict[const.LOG_MARGINAL_LIKELIHOOD_M1]
        )
        assert acc_dict[const.LOG_MARGINAL_LIKELIHOOD_M0] == approx(
            expected_acc_dict[const.LOG_MARGINAL_LIKELIHOOD_M0]
        )
        assert acc_dict[const.POSTERIOR_M1] == approx(
            expected_acc_dict[const.POSTERIOR_M1]
        )
        assert acc_dict[const.POSTERIOR_M0] == approx(
            expected_acc_dict[const.POSTERIOR_M0]
        )


def test_srm_test():
    # Testing unit-level data, where the counts across all variations are represented as one-hot vectors.
    datapoints = np.array([[1, 0, 0], [0, 1, 0], [1, 0, 0], [0, 1, 0], [0, 0, 1]])
    null_probabilities = np.array([0.4, 0.4, 0.2])
    mismatch_prob = srm_test(datapoints, null_probabilities)
    assert mismatch_prob >= 0 and mismatch_prob <= 1

    # Testing time-aggregated data, where each entry represents an aggregate count across all variations for that time.
    datapoints = np.array([[20, 17, 9], [18, 21, 8], [4, 6, 4], [18, 19, 11]])
    null_probabilities = np.array([0.4, 0.4, 0.2])
    mismatch_prob = srm_test(datapoints, null_probabilities)
    assert mismatch_prob >= 0 and mismatch_prob <= 1


def test_p_values_decreasing_and_in_range():
    p_0 = np.array([1 / 3, 1 / 3, 1 / 3])
    p_1 = np.array([2 / 9, 4 / 9, 3 / 9])
    sample_size = 40
    data = multinomial.rvs(1, p_1, size=sample_size)
    pvals = sequential_p_values(data, p_0)
    for ix in range(1, sample_size):
        assert pvals[ix] <= pvals[ix - 1]  # pvals should be non increasing
    for pval in pvals:
        assert 0.0 <= pval and pval <= 1.0


def test_is_integer():
    assert _is_integer(4.0)
    assert _is_integer(4)
    assert not _is_integer(4.5)
    assert not _is_integer("hello")


def test_data_validator():
    assert _validate_data(np.array([[1.0, 3.0], [4.0, 3.0]]))
    assert _validate_data(np.array([[1, 3], [4, 3]]))
    assert not _validate_data(np.array([[1, 3], [4, 3.5]]))
    assert not _validate_data(np.array([[1, 3], [4, "hello"]]))


def test_regression():
    # Set the seed of our random number generator for reproducibility. Don't worry about this.
    np.random.seed(0)
    # Our intended allocation probabilities.
    p_0 = [0.1, 0.5, 0.4]
    # The actual allocation probabilities,
    p = [0.1, 0.49, 0.41]
    # Specify number of visitors.
    n = 10
    # Generate allocations.
    data = multinomial.rvs(1, p, size=n)
    pvals = sequential_p_values(data, p_0)
    post_probs = sequential_posterior_probabilities(data, p_0)
    bfs = sequential_bayes_factors(data, p_0)
    assert (post_probs[-1] / (1 - post_probs[-1])) == approx(bfs[-1])
    assert pvals[-1] == approx(0.9980534145723241)
    assert post_probs[-1] == approx(0.5004370206949569)
    assert bfs[-1] == approx(1.0017496120131435)

    post_probs = sequential_posterior_probabilities(data, p_0, prior_odds=0.1)
    assert (post_probs[-1] / (1 - post_probs[-1])) != approx(bfs[-1])
