/*
 * The Qubit Factory — unofficial Japanese adaptation by kosukemtr.
 * Modified from https://github.com/awslabs/the-qubit-factory:
 * the original scripts.min.js was reformatted and split into source files;
 * this adaptation also includes Japanese localization and related adjustments.
 * Original work: Glen Evenbly (AWS Center for Quantum Computing).
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * Licensed under Apache-2.0; see LICENSE and NOTICE in the repository root.
 */
function flashColor(e, t) {
  if (0 === t) return e;
  t = Math.min(t, 1);
  var i = hexToRGB(e);
  return (
    (i.r = i.r + t * (255 - i.r)),
    (i.g = i.g + t * (255 - i.g)),
    (i.b = i.b + t * (255 - i.b)),
    RGBToHex(i.r, i.g, i.b)
  );
}
