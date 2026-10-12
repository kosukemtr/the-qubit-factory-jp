/*
 * The Qubit Factory — unofficial Japanese adaptation by kosukemtr.
 * Modified from https://github.com/awslabs/the-qubit-factory:
 * the original scripts.min.js was reformatted and split into source files;
 * this adaptation also includes Japanese localization and related adjustments.
 * Original work: Glen Evenbly (AWS Center for Quantum Computing).
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * Licensed under Apache-2.0; see LICENSE and NOTICE in the repository root.
 */
function RGBToHex(e, t, i) {
  return (
    (e = Math.min(Math.max(Math.round(e), 0), 255).toString(16)),
    (t = Math.min(Math.max(Math.round(t), 0), 255).toString(16)),
    (i = Math.min(Math.max(Math.round(i), 0), 255).toString(16)),
    1 == e.length && (e = "0" + e),
    1 == t.length && (t = "0" + t),
    1 == i.length && (i = "0" + i),
    "#" + e + t + i
  );
}
