/*
 * The Qubit Factory — unofficial Japanese adaptation by kosukemtr.
 * Modified from https://github.com/awslabs/the-qubit-factory:
 * the original scripts.min.js was reformatted and split into source files;
 * this adaptation also includes Japanese localization and related adjustments.
 * Original work: Glen Evenbly (AWS Center for Quantum Computing).
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * Licensed under Apache-2.0; see LICENSE and NOTICE in the repository root.
 */
function hexToRGB(e) {
  e = colourNameToHex(e);
  let t = 0,
    i = 0,
    a = 0;
  return (
    4 == e.length
      ? ((t = parseInt(e[1] + e[1], 16)),
        (i = parseInt(e[2] + e[2], 16)),
        (a = parseInt(e[3] + e[3], 16)))
      : 7 == e.length &&
        ((t = parseInt(e[1] + e[2], 16)),
        (i = parseInt(e[3] + e[4], 16)),
        (a = parseInt(e[5] + e[6], 16))),
    { r: t, g: i, b: a }
  );
}
