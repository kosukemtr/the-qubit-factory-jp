class Halo {
  static drawReduced(e, t, i, a) {
    e.save();
    var r = (3 * SEL_STYLES.r0) / 4;
    Halo.drawRing(e, t, i, r),
      Halo.drawRingDivs(e, t, i, r, 16),
      "analysisgatecontrol" === STATE.under.type ||
      "analysisgatecontrolling" === STATE.state
        ? (e.fillStyle = SEL_STYLES.color2)
        : (e.fillStyle = SEL_STYLES.color),
      e.beginPath(),
      (e.strokeStyle = "black"),
      (e.lineWidth = 1),
      e.arc(
        -r * Math.cos(a + Math.PI / 2) + t,
        -r * Math.sin(a + Math.PI / 2) + i,
        SEL_STYLES.handleRad,
        0,
        2 * Math.PI,
      ),
      e.fill(),
      e.stroke(),
      e.restore();
  }
  static drawRing(e, t, i, a) {
    e.save(),
      e.beginPath(),
      (e.lineWidth = (1 * FIELD.tileWidth) / 48),
      (e.strokeStyle = "seagreen"),
      e.arc(t, i, a, 0, 2 * Math.PI),
      e.stroke(),
      e.beginPath();
    var r = [SEL_STYLES.lineDash, SEL_STYLES.lineGap];
    e.setLineDash(r),
      (e.lineDashOffset =
        (SEL_STYLES.lineDash + SEL_STYLES.lineGap) * TIMER.dashRatio),
      (e.lineWidth = (1 * FIELD.tileWidth) / 48),
      (e.strokeStyle = "#333"),
      e.arc(t, i, a, 0, 2 * Math.PI),
      e.stroke(),
      e.restore();
  }
  static drawRingDivs(e, t, i, a, r) {
    e.save(),
      (e.strokeStyle = SEL_STYLES.color1),
      (e.lineCap = "round"),
      (e.lineWidth = FIELD.tileWidth / 8),
      e.beginPath();
    for (var s = 0; s < r; s++) {
      var o = (2 * s * Math.PI) / r;
      e.moveTo(-a * Math.sin(o) + t, -a * Math.cos(o) + i),
        e.lineTo(-(a - 0.5) * Math.sin(o) + t, -(a - 0.5) * Math.cos(o) + i);
    }
    e.stroke(), e.restore();
  }
  static drawRingControl(e, t, i, a, r, s) {
    var o = 1 + 0.1 * Math.cos(8 * Math.PI * TIMER.qubitGlowRatio);
    e.save(),
      e.beginPath(),
      (e.fillStyle = s),
      (e.strokeStyle = "black"),
      (e.lineWidth = FIELD.tileWidth / 48),
      e.arc(
        t + a * Math.sin(r),
        i - a * Math.cos(r),
        o * SEL_STYLES.handleRad,
        0,
        2 * Math.PI,
      ),
      e.fill(),
      e.stroke(),
      e.restore();
  }
  static drawSwitchIconSimple(e, t, i) {
    var a = 1 + 0.1 * Math.cos(8 * Math.PI * TIMER.qubitGlowRatio),
      r = (-(a - 1) / 2) * FIELD.iconWidth,
      s = (-(a - 1) / 2) * FIELD.iconHeight,
      o = (3.5 * FIELD.tileWidth) / 12,
      n = PathsI.icon(e, "switchIcon", { hover: !1 });
    n.draw(
      e,
      t - FIELD.iconWidth / 2 - o + r,
      i - o - FIELD.iconWidth / 2 + s,
      a * FIELD.iconWidth,
      a * FIELD.iconHeight,
    );
  }
  static drawIcons(e, t, i, a = 0) {
    var r = 0,
      s = 0,
      o = 0,
      n = 0,
      l = 0,
      h = 0,
      d = 0,
      u = 0;
    if ("gateicon" === STATE.pressed.type) {
      var c = TIMER.totalTime - STATE.pressed.i0;
      c > TIMER.iconMax &&
        (STATE.pressed = { type: "none", i0: 0, j0: 0, k0: 0 });
    }
    if ("gateicon" === STATE.pressed.type) {
      var I =
        0.5 *
        (1 - Math.cos(2 * Math.PI * (c / TIMER.iconMax))) *
        (FIELD.tileWidth / 48);
      0 === STATE.pressed.k0
        ? ((r = (3 * I) / 4), (l = (7 * I) / 4))
        : 1 === STATE.pressed.k0
          ? ((s = (3 * I) / 4), (h = (7 * I) / 4))
          : 2 === STATE.pressed.k0
            ? ((o = (3 * I) / 4), (d = (7 * I) / 4))
            : 4 === STATE.pressed.k0
              ? ((n = (3 * I) / 4), (u = (7 * I) / 4))
              : 5 === STATE.pressed.k0 && ((3 * I) / 4, (7 * I) / 4);
    }
    if (a) var E = a;
    else E = STATE.grab;
    var S = 1 + 0.1 * Math.cos(8 * Math.PI * TIMER.qubitGlowRatio),
      f = (-(S - 1) / 2) * FIELD.iconWidth,
      p = (-(S - 1) / 2) * FIELD.iconHeight;
    if ("cCreate" === E.type || "qCreate" === E.type) {
      var T = !1,
        R = !1,
        m = !1;
      "gateicon" === STATE.under.type &&
        (0 === STATE.under.k0
          ? (T = !0)
          : 1 === STATE.under.k0
            ? (R = !0)
            : 2 === STATE.under.k0 && (m = !0));
      var g = PathsI.icon(e, "minusIcon", { hover: T });
      g.draw(
        e,
        r + t - FIELD.iconWidth / 2 - FIELD.tileWidth / 3 + f,
        l + i + FIELD.tileWidth / 3 + p,
        S * FIELD.iconWidth,
        S * FIELD.iconHeight,
      );
      g = PathsI.icon(e, "plusIcon", { hover: R });
      if (
        (g.draw(
          e,
          s + t - FIELD.iconWidth / 2 + FIELD.tileWidth / 3 + f,
          h + i + FIELD.tileWidth / 3 + p,
          S * FIELD.iconWidth,
          S * FIELD.iconHeight,
        ),
        "qCreate" === E.type)
      ) {
        var A = 5 === E.k0.state;
        g = PathsI.icon(e, "lockIcon", { hover: m, state: A });
        g.draw(
          e,
          o + t - FIELD.iconWidth / 2 - FIELD.tileWidth / 3 + f,
          d + i - (1.8 * FIELD.tileWidth) / 3 + p,
          (S * FIELD.tileWidth) / 3,
          (S * FIELD.tileHeight) / 3,
        );
      }
    } else if (["cInvert", "trash", "qFlip"].indexOf(E.type) >= 0) {
      var C = !1;
      "gateicon" === STATE.under.type && 1 === STATE.under.k0 && (C = !0);
      g = PathsI.icon(e, "switchIcon", { hover: C });
      g.draw(
        e,
        s + t - FIELD.iconWidth / 2 + FIELD.tileWidth / 3 + f,
        h + i + FIELD.tileWidth / 3 + p,
        S * FIELD.iconWidth,
        S * FIELD.iconHeight,
      );
    } else if ("qControl" === E.type);
    else if ("switch" === E.type) {
      C = !1;
      "gateicon" === STATE.under.type && 4 === STATE.under.k0 && (C = !0);
      var L = (3.5 * FIELD.tileWidth) / 12;
      g = PathsI.icon(e, "switchIcon", { hover: C });
      g.draw(
        e,
        n + t - FIELD.iconWidth / 2 - L + f,
        u + i - L - FIELD.iconWidth / 2 + p,
        S * FIELD.iconWidth,
        S * FIELD.iconHeight,
      );
    }
  }
  static draw(e, t = 0) {
    var i = "gatemanip" === STATE.state || "gatedrag" === STATE.state;
    if (i || 0 !== t) {
      if (t) var a = t;
      else a = STATE.grab;
      if ("switch" === a.type) var r = (3 * SEL_STYLES.r0) / 4;
      else if ("qControl" === a.type) r = (3 * SEL_STYLES.r0) / 4;
      else r = SEL_STYLES.r0;
      var s = IBOARD.x0 + (a.i0 + 0.5) * FIELD.tileWidth,
        o = IBOARD.y0 + (a.j0 + 0.5) * FIELD.tileHeight;
      Halo.drawRing(e, s, o, r), Halo.drawIcons(e, s, o, t);
      var n = a.k0,
        l = n.numPoints;
      Halo.drawRingDivs(e, s, o, r, l);
      var h = !0;
      if (
        (["cInvert", "switch", "trash"].indexOf(a.type) >= 0 && (h = !1),
        "qFlip" === a.type && 1 === n.state && (h = !1),
        h)
      )
        if ("gatedrag" === STATE.state) {
          if (["cCombine", "qCombine", "cSplit"].indexOf(a.type) >= 0)
            var d = n.rot + Math.PI / 2;
          else if (["cCreate", "qCreate"].indexOf(a.type) >= 0)
            d = (2 * n.rot * Math.PI) / 3;
          else if (["delay"].indexOf(a.type) >= 0)
            d = ((0.5 * n.rot + 0.5 * n.state) * Math.PI) / 2;
          else d = n.rot;
          Halo.drawRingControl(e, s, o, r, d, SEL_STYLES.color2);
        } else {
          if (["cCombine", "qCombine", "cSplit"].indexOf(a.type) >= 0) {
            var u = (n.orient + 2) % 4;
            d = ((u - 1) * Math.PI) / 2;
          } else if (["cCreate", "qCreate"].indexOf(a.type) >= 0)
            d = (2 * n.rot * Math.PI) / 3;
          else if (["delay"].indexOf(a.type) >= 0) d = (n.state * Math.PI) / 4;
          else d = n.rot;
          "gatecontrol" === STATE.under.type
            ? Halo.drawRingControl(e, s, o, r, d, SEL_STYLES.color2)
            : Halo.drawRingControl(e, s, o, r, d, SEL_STYLES.color);
        }
    }
  }
}
