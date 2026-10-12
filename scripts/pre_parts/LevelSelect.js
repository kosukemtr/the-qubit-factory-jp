/*
 * The Qubit Factory — unofficial Japanese adaptation by kosukemtr.
 * Modified from https://github.com/awslabs/the-qubit-factory:
 * the original scripts.min.js was reformatted and split into source files;
 * this adaptation also includes Japanese localization and related adjustments.
 * Original work: Glen Evenbly (AWS Center for Quantum Computing).
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * Licensed under Apache-2.0; see LICENSE and NOTICE in the repository root.
 */
function LevelSelect() {
  (STATE.mode = "levelSelect"),
    (FIELD.tileWidth = ResetConsts.resize()),
    (FIELD.tileHeight = FIELD.tileWidth),
    ResetConsts.levelSelect();
}
