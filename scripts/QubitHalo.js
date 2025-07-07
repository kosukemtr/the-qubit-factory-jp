class QubitHalo {
  static draw(e) {
    if (
      !(
        ["qubiting", "qubitbasis", "analysisgatecontrolling"].indexOf(
          STATE.state,
        ) < 0 ||
        (("running" === STATE.mode || "paused" === STATE.mode) &&
          TIMER.boardTime % 1 > 1e-5)
      )
    ) {
      var t = STATE.grab.k0.id;
      if ("constructing" === STATE.mode) var i = IBOARD;
      else i = RBOARD[TIMER.tick];
      for (var a = 0, r = i._qubitList, s = 0; s < r.length; s++)
        if (r[s].id === t) {
          a = r[s];
          break;
        }
      if (0 === a)
        return (
          (STATE.state = "free"),
          void (STATE.grab = { type: "free", i0: -1, j0: -1, k0: -1 })
        );
      e.save();
      SEL_STYLES.r0;
      var o = IBOARD.x0 + (a.i0 + 0.5) * FIELD.tileWidth,
        n = IBOARD.y0 + (a.j0 + 0.5) * FIELD.tileHeight,
        l = 1 + 0.1 * Math.cos(8 * Math.PI * TIMER.qubitGlowRatio),
        h = ((-(l - 1) / 2) * FIELD.iconWidth) / 3,
        d = ((-(l - 1) / 2) * FIELD.iconHeight) / 3;
      if ("qubitbasis" !== STATE.state) {
        var u = 0,
          c = 0;
        if ("qubiticon" === STATE.pressed.type) {
          var I = TIMER.totalTime - STATE.pressed.i0;
          I > TIMER.iconMax &&
            (STATE.pressed = { type: "none", i0: 0, j0: 0, k0: 0 });
        }
        if ("qubiticon" === STATE.pressed.type) {
          var E =
            0.5 *
            (1 - Math.cos(2 * Math.PI * (I / TIMER.iconMax))) *
            (FIELD.tileWidth / 48);
          (u = (3 * E) / 4), (c = (7 * E) / 4);
        }
        var S = !1;
        "qubiticon" === STATE.under.type && (S = !0);
        var f = PathsI.icon(e, "lockIcon", { hover: S, state: a.lockedBasis });
        if (
          (f.draw(
            e,
            u + o - FIELD.tileWidth / 6 + FIELD.tileWidth / 3.5 + h,
            c + n + FIELD.tileWidth / 6 + d,
            (l * FIELD.tileWidth) / 3,
            (l * FIELD.tileHeight) / 3,
          ),
          a.entGroup)
        ) {
          var p = a.entGroup,
            T = p.numQubits;
          for (s = 0; s < T; s++) {
            var R = p.qubitList[s],
              m = IBOARD.x0 + (R.i0 + 0.5) * FIELD.tileWidth,
              g = IBOARD.y0 + (R.j0 + 0.5) * FIELD.tileHeight;
            f = PathsI.icon(e, "tagIcon", { counter: R.entInd + 1 });
            f.draw(
              e,
              m - FIELD.tileWidth / 2,
              g - FIELD.tileHeight / 2,
              FIELD.tileHeight / 3,
              FIELD.tileHeight / 3,
            );
          }
        }
      }
      e.restore(), QubitHalo.ring(e, o, n, a.basisRot);
    }
  }
  static ring(e, t, i, a) {
    var r = SEL_STYLES.color5,
      s = SEL_STYLES.color4,
      o = (3 * SEL_STYLES.r0) / 4;
    e.save(),
      e.beginPath(),
      e.arc(t, i, o, 0, 2 * Math.PI),
      (e.lineWidth = (1 * FIELD.tileWidth) / 48),
      (e.strokeStyle = "seagreen"),
      e.stroke(),
      e.beginPath(),
      e.setLineDash([SEL_STYLES.lineDash, SEL_STYLES.lineGap]),
      (e.lineDashOffset =
        (SEL_STYLES.lineDash + SEL_STYLES.lineGap) * TIMER.dashRatio),
      (e.lineWidth = (1 * FIELD.tileWidth) / 48),
      (e.strokeStyle = "#333"),
      e.arc(t, i, o, 0, 2 * Math.PI),
      e.stroke(),
      e.restore();
    var n = 1 + 0.1 * Math.cos(8 * Math.PI * TIMER.qubitGlowRatio);
    e.save(),
      e.beginPath(),
      e.arc(
        o * Math.sin(a) + t,
        -o * Math.cos(a) + i,
        0.9 * n * SEL_STYLES.handleRad,
        0,
        2 * Math.PI,
      );
    var l =
        "qubiting" === STATE.state &&
        "qubitcontrol" === STATE.under.type &&
        STATE.under.k0 % 2 == 0,
      h = "qubitbasis" === STATE.state && 0 === STATE.grab.l0;
    (e.fillStyle = l || h ? "lemonchiffon" : r),
      e.fill(),
      (e.lineWidth = FIELD.tileWidth / 48),
      (e.strokeStyle = "black"),
      e.stroke(),
      e.restore(),
      e.save(),
      e.beginPath(),
      e.arc(
        o * Math.sin(a + Math.PI) + t,
        -o * Math.cos(a + Math.PI) + i,
        0.9 * n * SEL_STYLES.handleRad,
        0,
        2 * Math.PI,
      );
    (l =
      "qubiting" === STATE.state &&
      "qubitcontrol" === STATE.under.type &&
      STATE.under.k0 % 2 == 1),
      (h = "qubitbasis" === STATE.state && 1 === STATE.grab.l0);
    (e.fillStyle = l || h ? "lemonchiffon" : s),
      e.fill(),
      (e.lineWidth = FIELD.tileWidth / 48),
      (e.strokeStyle = "black"),
      e.stroke(),
      e.restore();
  }
}
