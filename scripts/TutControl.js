class TutControl {
  static drawSuperposition() {
    CANV.tutorialExtra.clear();
    var e = CANV.tutorialExtra.ctx,
      t = FIELD.tileWidth,
      i = FIELD.tileHeight,
      a = 0.25 * i;
    (e = CANV.tutorialExtra.ctx),
      e.save(),
      e.translate(0.2 * i, 0),
      e.save(),
      (e.globalCompositeOperation = "lighter"),
      (e.strokeStyle = "black"),
      (e.lineWidth = 1),
      (e.fillStyle = "#00c7f0"),
      e.beginPath(),
      e.ellipse(1.25 * t, 4.5 * i - a, t / 3, i / 2, 0, 0, 2 * Math.PI),
      e.stroke(),
      e.fill(),
      (e.fillStyle = "#0081f0"),
      e.beginPath(),
      e.ellipse(
        3 * t,
        (4.1 + 0.3 * TIMER.blinkRatioDub) * i - a,
        t / 3,
        i / 2,
        0,
        0,
        2 * Math.PI,
      ),
      e.stroke(),
      e.fill(),
      (e.fillStyle = "#004600"),
      e.beginPath(),
      e.ellipse(
        3 * t,
        (4.9 - 0.3 * TIMER.blinkRatioDub) * i - a,
        t / 3,
        i / 2,
        0,
        0,
        2 * Math.PI,
      ),
      e.stroke(),
      e.fill(),
      (e.fillStyle = "#0000f0"),
      e.beginPath(),
      e.ellipse(
        4.75 * t,
        (4.1 + 0.3 * TIMER.blinkRatioDub) * i - a,
        t / 3,
        i / 2,
        0,
        0,
        2 * Math.PI,
      ),
      e.stroke(),
      e.fill(),
      (e.fillStyle = "#00c700"),
      e.beginPath(),
      e.ellipse(
        4.75 * t,
        (4.9 - 0.3 * TIMER.blinkRatioDub) * i - a,
        t / 3,
        i / 2,
        0,
        0,
        2 * Math.PI,
      ),
      e.stroke(),
      e.fill(),
      e.restore();
    var r = [Math.cos(Math.PI / 8), Math.sin(Math.PI / 8)],
      s = Qubit.computeAlfsManual(TIMER.blinkRatio, r),
      o = Paths.newQubit(
        e,
        Math.PI / 4,
        0,
        TIMER.glareRatio,
        0,
        s[1],
        r,
        [0, r[1] ** 2],
        s,
        !1,
      );
    o.draw(e, 1 * t, 7 * i, FIELD.tileWidth, FIELD.tileHeight);
    (r = [1 / Math.sqrt(2), -1 / Math.sqrt(2)]),
      (s = Qubit.computeAlfsManual(TIMER.blinkRatio, r)),
      (o = Paths.newQubit(
        e,
        0,
        0,
        TIMER.glareRatio,
        0,
        s[1],
        r,
        [0, r[1] ** 2],
        s,
        !1,
      ));
    o.draw(e, 2.5 * t, 7 * i, FIELD.tileWidth, FIELD.tileHeight);
    (r = [Math.cos((5.5 * Math.PI) / 8), -Math.sin((5.5 * Math.PI) / 8)]),
      (s = Qubit.computeAlfsManual(TIMER.blinkRatio, r)),
      (o = Paths.newQubit(
        e,
        (3 * Math.PI) / 4,
        0,
        TIMER.glareRatio,
        0,
        s[1],
        r,
        [0, r[1] ** 2],
        s,
        !1,
      ));
    o.draw(e, 4 * t, 7 * i, FIELD.tileWidth, FIELD.tileHeight);
    (r = [1, 0]),
      (s = Qubit.computeAlfsManual(TIMER.blinkRatio, r)),
      (o = Paths.newQubit(
        e,
        0,
        0,
        TIMER.glareRatio,
        0,
        s[1],
        r,
        [0, r[1] ** 2],
        s,
        !1,
      ));
    o.draw(e, 0.5 * t, 9.5 * i, FIELD.tileWidth, FIELD.tileHeight);
    (r = [1 / Math.sqrt(2), 0]),
      (s = Qubit.computeAlfsManual(TIMER.blinkRatio, r)),
      (o = Paths.newQubit(
        e,
        Math.PI / 2,
        0,
        TIMER.glareRatio,
        0,
        s[1],
        r,
        [0, r[1] ** 2],
        s,
        !1,
      ));
    o.draw(
      e,
      1.9 * t,
      (8.9 + 0.2 * TIMER.blinkRatioDub) * i,
      FIELD.tileWidth,
      FIELD.tileHeight,
    );
    (r = [0, 1 / Math.sqrt(2)]),
      (s = Qubit.computeAlfsManual(TIMER.blinkRatio, r)),
      (o = Paths.newQubit(
        e,
        Math.PI / 2,
        0,
        TIMER.glareRatio,
        0,
        s[1],
        r,
        [0, r[1] ** 2],
        s,
        !1,
      ));
    o.draw(
      e,
      1.9 * t,
      (10.1 - 0.2 * TIMER.blinkRatioDub) * i,
      FIELD.tileWidth,
      FIELD.tileHeight,
    );
    (r = [0, 1]),
      (s = Qubit.computeAlfsManual(TIMER.blinkRatio, r)),
      (o = Paths.newQubit(
        e,
        0,
        0,
        TIMER.glareRatio,
        0,
        s[1],
        r,
        [0, r[1] ** 2],
        s,
        !1,
      ));
    o.draw(e, 2.85 * t, 9.5 * i, FIELD.tileWidth, FIELD.tileHeight);
    (r = [1 / Math.sqrt(2), 0]),
      (s = Qubit.computeAlfsManual(TIMER.blinkRatio, r)),
      (o = Paths.newQubit(
        e,
        Math.PI / 2,
        0,
        TIMER.glareRatio,
        0,
        s[1],
        r,
        [0, r[1] ** 2],
        s,
        !1,
      ));
    o.draw(
      e,
      4.25 * t,
      (8.9 + 0.2 * TIMER.blinkRatioDub) * i,
      FIELD.tileWidth,
      FIELD.tileHeight,
    );
    (r = [0, -1 / Math.sqrt(2)]),
      (s = Qubit.computeAlfsManual(TIMER.blinkRatio, r)),
      (o = Paths.newQubit(
        e,
        Math.PI / 2,
        0,
        TIMER.glareRatio,
        0,
        s[1],
        r,
        [0, r[1] ** 2],
        s,
        !1,
      ));
    o.draw(
      e,
      4.25 * t,
      (10.1 - 0.2 * TIMER.blinkRatioDub) * i,
      FIELD.tileWidth,
      FIELD.tileHeight,
    );
    (r = [1, 0]),
      (s = Qubit.computeAlfsManual(TIMER.blinkRatio, r)),
      (o = Paths.newQubit(
        e,
        0,
        0,
        TIMER.glareRatio,
        0,
        s[1],
        r,
        [0, r[1] ** 2],
        s,
        !1,
      ));
    o.draw(e, 0.75 * t, 2.5 * i - 1 * i, FIELD.tileWidth, FIELD.tileHeight);
    (r = [Math.cos(Math.PI / 8), 0]),
      (s = Qubit.computeAlfsManual(TIMER.blinkRatio, r)),
      (o = Paths.newQubit(
        e,
        Math.PI / 4,
        0,
        TIMER.glareRatio,
        0,
        s[1],
        r,
        [0, r[1] ** 2],
        s,
        !1,
      ));
    o.draw(
      e,
      2.5 * t,
      (1.9 + 0.2 * TIMER.blinkRatioDub) * i - 1 * i,
      FIELD.tileWidth,
      FIELD.tileHeight,
    );
    (r = [0, Math.sin(Math.PI / 8)]),
      (s = Qubit.computeAlfsManual(TIMER.blinkRatio, r)),
      (o = Paths.newQubit(
        e,
        Math.PI / 4,
        0,
        TIMER.glareRatio,
        0,
        s[1],
        r,
        [0, r[1] ** 2],
        s,
        !1,
      ));
    o.draw(
      e,
      2.5 * t,
      (3.1 - 0.2 * TIMER.blinkRatioDub) * i - 1 * i,
      FIELD.tileWidth,
      FIELD.tileHeight,
    );
    (r = [1 / Math.sqrt(2), 0]),
      (s = Qubit.computeAlfsManual(TIMER.blinkRatio, r)),
      (o = Paths.newQubit(
        e,
        Math.PI / 2,
        0,
        TIMER.glareRatio,
        0,
        s[1],
        r,
        [0, r[1] ** 2],
        s,
        !1,
      ));
    o.draw(
      e,
      4.25 * t,
      (1.9 + 0.2 * TIMER.blinkRatioDub) * i - 1 * i,
      FIELD.tileWidth,
      FIELD.tileHeight,
    );
    (r = [0, 1 / Math.sqrt(2)]),
      (s = Qubit.computeAlfsManual(TIMER.blinkRatio, r)),
      (o = Paths.newQubit(
        e,
        Math.PI / 2,
        0,
        TIMER.glareRatio,
        0,
        s[1],
        r,
        [0, r[1] ** 2],
        s,
        !1,
      ));
    o.draw(
      e,
      4.25 * t,
      (3.1 - 0.2 * TIMER.blinkRatioDub) * i - 1 * i,
      FIELD.tileWidth,
      FIELD.tileHeight,
    ),
      e.save(),
      e.beginPath(),
      (e.lineWidth = FIELD.tileWidth / 24),
      Helper.squareBracket(e, 2.6, 2),
      Helper.squareBracket(e, 4.35, 2),
      Helper.squareBracket(e, 2, 10),
      Helper.squareBracket(e, 4.35, 10),
      e.stroke(),
      e.restore(),
      e.save(),
      (e.textBaseline = "middle"),
      (e.textAlign = "center"),
      (e.font = FIELD.tileWidth / 2 + "px Verdana, 'Noto Sans JP'"),
      (e.fillStyle = "black"),
      e.fillText("=", 2.1 * t, 3 * i - 1 * i),
      e.fillText("=", 3.9 * t, 3 * i - 1 * i),
      e.fillText("=", 2.1 * t, 4.5 * i - a),
      e.fillText("=", 3.9 * t, 4.5 * i - a),
      e.fillText("=", 1.6 * t, 10 * i),
      e.fillText("=", 3.9 * t, 10 * i),
      (e.font = FIELD.tileWidth / 4 + "px Verdana, 'Noto Sans JP'"),
      e.fillText("0.92", 3 * t, 2 * i - 1 * i),
      e.fillText("0.38", 3 * t, 4 * i - 1 * i),
      e.fillText("0.71", 4.75 * t, 2 * i - 1 * i),
      e.fillText("0.71", 4.75 * t, 4 * i - 1 * i),
      e.fillText("0.71", 4.75 * t, 2 * i + 7 * i),
      e.fillText("-0.71", 4.75 * t, 4 * i + 7 * i),
      e.fillText("0.71", 4.75 * t - 2.35 * t, 2 * i + 7 * i),
      e.fillText("0.71", 4.75 * t - 2.35 * t, 4 * i + 7 * i),
      (e.font = FIELD.tileWidth / 3 + "px Verdana, 'Noto Sans JP'"),
      e.fillText("+", 3 * t, 3 * i - 1 * i),
      e.fillText("+", 4.75 * t, 3 * i - 1 * i),
      e.fillText("+", 3 * t, 4.5 * i - a),
      e.fillText("+", 4.75 * t, 4.5 * i - a),
      e.fillText("+", 4.75 * t - 2.35 * t, 10 * i),
      e.fillText("+", 4.75 * t, 10 * i),
      e.restore(),
      e.restore();
  }
  static draw() {
    CANV.tutorialHeader.clear();
    var e = CANV.tutorialHeader.ctx,
      t = 0,
      i = 0,
      a = 0,
      r = 0;
    if ("tutbutton" === STATE.pressed.type) {
      var s = Date.now() - STATE.pressed.i0;
      s > TIMER.iconMax &&
        (STATE.pressed = { type: "none", i0: 0, j0: 0, k0: 0 });
    }
    if ("tutbutton" === STATE.pressed.type) {
      var o =
        0.5 *
        (1 - Math.cos(2 * Math.PI * (s / TIMER.iconMax))) *
        (FIELD.tileWidth / 48);
      1 === STATE.pressed.k0
        ? ((t = (8 * o) / 4), (a = (8 * o) / 4))
        : 2 === STATE.pressed.k0 && ((i = (8 * o) / 4), (r = (8 * o) / 4));
    }
    var n = "tbutton" === STATE.under.type && 1 === STATE.under.i0,
      l = PathsI.icon(e, "leftRightIcon", { type: 0, hover: n });
    l.draw(
      e,
      2.75 * FIELD.tileWidth,
      0.875 * FIELD.tileHeight,
      FIELD.tileHeight / 2 + t,
      FIELD.tileHeight / 2 + a,
    );
    var h = 10 * FIELD.tileWidth + TUTORIAL.boxWidth;
    (n = "tbutton" === STATE.under.type && 2 === STATE.under.i0),
      (l = PathsI.icon(e, "leftRightIcon", { type: 1, hover: n }));
    l.draw(
      e,
      h - 3.25 * FIELD.tileWidth,
      0.875 * FIELD.tileHeight,
      FIELD.tileHeight / 2 + i,
      FIELD.tileHeight / 2 + r,
    );
    (n = "tbutton" === STATE.under.type && 3 === STATE.under.i0),
      (l = PathsI.icon(e, "leftRightIcon", { type: 2, hover: n }));
    l.draw(
      e,
      h - 1.5 * FIELD.tileWidth,
      0.5 * FIELD.tileHeight,
      FIELD.tileHeight / 2,
      FIELD.tileHeight / 2,
    );
  }
  static click() {
    var e = "tbutton" === STATE.under.type && 1 === STATE.under.i0;
    if (e)
      return (
        SFX.click.play(),
        (TUTORIAL.current -= 1),
        TUTORIAL.current < 0 && (TUTORIAL.current = TUTORIAL.currentMax),
        ResetConsts.tutorial(),
        void (STATE.pressed = {
          type: "tutbutton",
          i0: Date.now(),
          j0: -1,
          k0: 1,
        })
      );
    FIELD.tileWidth,
      TUTORIAL.boxWidth,
      (e = "tbutton" === STATE.under.type && 2 === STATE.under.i0);
    if (e)
      return (
        SFX.click.play(),
        (TUTORIAL.current += 1),
        TUTORIAL.current > TUTORIAL.currentMax && (TUTORIAL.current = 0),
        ResetConsts.tutorial(),
        void (STATE.pressed = {
          type: "tutbutton",
          i0: Date.now(),
          j0: -1,
          k0: 2,
        })
      );
    e = "tbutton" === STATE.under.type && 3 === STATE.under.i0;
    return e ? (SFX.click.play(), void TutControl.close()) : void 0;
  }
  static close() {
    (TUTORIAL.default = TUTORIAL.current),
      (STATE.mode = TUTORIAL.oldMode),
      (TUTORIAL.show = !1),
      (FIELD.cameraX = 0),
      (FIELD.cameraY = 0),
      (SCENARIO.text0 = 0),
      (SCENARIO.text1 = 0),
      (SCENARIO.text2 = 0),
      (OPTS.basis = TUTORIAL.basis),
      (SCENARIO.channelsCol = [...TUTORIAL.channelsCol]),
      ResetConsts.all(),
      ResetConsts.refresh(),
      (TIMER.grey = TIMER.greyMax),
      (document.getElementById("greyoverlay").style.opacity = 0.75),
      (document.getElementById("greyoverlay").style.visibility = "visible"),
      (INPUTS.keydown = 0);
  }
}
