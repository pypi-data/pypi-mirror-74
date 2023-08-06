# -------------------------------------------------------------------------
# Copyright (c) Microsoft Corporation. All rights reserved.
# Licensed under the MIT License. See License.txt in the project root for
# license information.
# --------------------------------------------------------------------------

"""
Constants used in the Hummingbird converters are defined here.
"""

BASE_PREDICTION = "base_prediction"
"""Alpha"""

LEARNING_RATE = "learning_rate"
"""Learning Rate"""

GET_PARAMETERS_FOR_TREE_TRAVERSAL = "get_parameters_for_tree_trav"
"""Which function to use to extract the parameters for the tree traversal strategy"""

REORDER_TREES = "reorder_trees"
"""Whether to reorder trees in multiclass tasks"""

ONNX_INPUTS = "onnx_inputs"
"""The inputs to the onnx model"""

ONNX_TEST_INPUT = "onnx_test_input"
"""The test input data for the onnx model"""

OFFSET = "offset_"
"""offset of the sklearn anomaly detection implementation"""

MAX_SAMPLES = "max_samples_"
"""max_samples of sklearn isolation forest implementation"""
