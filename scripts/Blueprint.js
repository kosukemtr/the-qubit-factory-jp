/*
 * The Qubit Factory — unofficial Japanese adaptation by kosukemtr.
 * Modified from https://github.com/awslabs/the-qubit-factory:
 * the original scripts.min.js was reformatted and split into source files;
 * this adaptation also includes Japanese localization and related adjustments.
 * Original work: Glen Evenbly (AWS Center for Quantum Computing).
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * Licensed under Apache-2.0; see LICENSE and NOTICE in the repository root.
 */
class Blueprint {
  static draw(e = !0) {
    CANV.blueprint.clear();
    var t = -1;
    e && "blueprint" === STATE.under.type && (t = STATE.under.i0);
    var i = [0.75, 0.75, 0.75];
    i[STATE.blueprint] = 1;
    for (var a = [], r = [], s = 2; s >= 0; s--)
      if (
        ((a =
          ((1 - i[s]) / 2) * FIELD.tileWidth +
          FIELD.tileWidth +
          0.6 * (s - 2) * FIELD.tileWidth),
        (r = ((1 - i[s]) / 2) * FIELD.tileWidth),
        STATE.blueprint != s)
      ) {
        var o = Paths.blueprint(CANV.blueprint.ctx, s, t === s, s);
        o.draw(
          CANV.blueprint.ctx,
          0.5 * FIELD.tileWidth + a,
          r,
          i[s] * FIELD.tileWidth,
          i[s] * FIELD.tileHeight,
        );
      }
    if (STATE.blueprint >= 0) {
      (a =
        ((1 - i[STATE.blueprint]) / 2) * FIELD.tileWidth +
        FIELD.tileWidth +
        0.6 * (STATE.blueprint - 2) * FIELD.tileWidth),
        (r = ((1 - i[STATE.blueprint]) / 2) * FIELD.tileWidth);
      o = Paths.blueprint(
        CANV.blueprint.ctx,
        STATE.blueprint,
        t === STATE.blueprint,
        STATE.blueprint,
      );
      o.draw(
        CANV.blueprint.ctx,
        0.5 * FIELD.tileWidth + a,
        r,
        i[STATE.blueprint] * FIELD.tileWidth,
        i[STATE.blueprint] * FIELD.tileHeight,
      );
    }
  }
}
