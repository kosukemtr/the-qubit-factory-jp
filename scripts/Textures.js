/*
 * The Qubit Factory — unofficial Japanese adaptation by kosukemtr.
 * Modified from https://github.com/awslabs/the-qubit-factory:
 * the original scripts.min.js was reformatted and split into source files;
 * this adaptation also includes Japanese localization and related adjustments.
 * Original work: Glen Evenbly (AWS Center for Quantum Computing).
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * Licensed under Apache-2.0; see LICENSE and NOTICE in the repository root.
 */
class Textures {
  static drawHazard(e, t, i, a, r, s, o) {
    e.save();
    var n = 40 * s,
      l = 0.9;
    (e.strokeStyle = "khaki"),
      (e.lineWidth = 15 * s),
      e.setLineDash([2 * s, 1.5 * s]),
      (e.globalAlpha = o);
    var h = i,
      d = i;
    for (e.beginPath(); d < i + r && d < i + r; )
      e.moveTo(t, h), e.lineTo(t + a, h - l * a), (d = h - l * a), (h += n);
    e.stroke(), e.restore();
  }
  static drawFiber(e, t, i, a, r, s, o) {
    e.save();
    var n = 15 * s,
      l = 1;
    (e.strokeStyle = "#152424"),
      (e.lineWidth = n),
      e.setLineDash([4 * s, 2 * s]),
      (e.globalAlpha = o);
    var h = i,
      d = i;
    for (e.beginPath(); d < i + r && d < i + r; )
      e.moveTo(t, h), e.lineTo(t + a, h - l * a), (d = h - l * a), (h += n);
    e.stroke(), e.restore();
  }
}
