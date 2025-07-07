class Finished {
  static startCelebration() {
    if (
      ((STATE.grab = { type: "none", i0: 0, j0: 0, k0: 0 }),
      CTRLMENU.getNamedButton("ctrlPlay").close(),
      CTRLMENU.getNamedButton("ctrlStep").close(),
      (CTRLMENU.getNamedButton("ctrlPlay").transition = {
        status: !0,
        start: 0,
        stop: 1,
      }),
      (CTRLMENU.getNamedButton("ctrlStep").transition = {
        status: !0,
        start: 0,
        stop: 1,
      }),
      (CTRLMENU.getNamedButton("ctrlBack").transition = {
        status: !0,
        start: 0,
        stop: 1,
      }),
      CTRLMENU.getNamedButton("ctrlNorm").close(),
      (STATE.mode = "finishtrans"),
      (TIMER.shake = 0),
      (FIELD.channelsDir = [1, 1, 1, 1, 1, 1]),
      CTRLMENU.getNamedButton("ctrlPlay").startAnimation(),
      SCENARIO.repetitions > 1)
    )
      SCENARIO.correctReps >= SCENARIO.successRep
        ? ((SCENARIO.victory = 1), (SCENARIO.starred = SCENARIO.starCond()))
        : ((SCENARIO.victory = 0), (SCENARIO.starred = !1));
    else if (0 === SCENARIO.victoryCond || 4 === SCENARIO.victoryCond) {
      var e = RBOARD[TIMER.tick].success;
      e >= SCENARIO.numCorrect
        ? ((SCENARIO.victory = 1), (SCENARIO.starred = SCENARIO.starCond(e)))
        : ((SCENARIO.victory = 0), (SCENARIO.starred = !1));
    } else if (1 === SCENARIO.victoryCond) {
      e =
        RBOARD[TIMER.tick].qubitList.length + RBOARD[TIMER.tick].bitList.length;
      0 === e
        ? ((SCENARIO.victory = 1), (SCENARIO.starred = SCENARIO.starCond()))
        : ((SCENARIO.victory = 0), (SCENARIO.starred = !1));
    } else if (2 === SCENARIO.victoryCond) {
      if ("chsh" === SCENARIO.name)
        var t = RBOARD[TIMER.tick].getGate(10, 1),
          i = Math.round((t.counter / t.counterMax) * 100),
          a = i >= SCENARIO.outputC[0] && i <= SCENARIO.outputC[1],
          r = !0;
      else {
        t = RBOARD[TIMER.tick].getGate(18, 5);
        var s = RBOARD[TIMER.tick].getGate(18, 8),
          o =
            ((i = Math.round((t.counter / t.counterMax) * 100)),
            Math.round((s.counter / s.counterMax) * 100));
        (a = i >= SCENARIO.outputC[0] && i <= SCENARIO.outputC[1]),
          (r = o >= SCENARIO.outputD[0] && o <= SCENARIO.outputD[1]);
      }
      a && r
        ? ((SCENARIO.victory = 1), (SCENARIO.starred = SCENARIO.starCond()))
        : ((SCENARIO.victory = 0), (SCENARIO.starred = !1));
    } else if (3 === SCENARIO.victoryCond) {
      e = RBOARD[TIMER.tick].success;
      e >= SCENARIO.numCorrect
        ? ((SCENARIO.victory = 1), (SCENARIO.starred = SCENARIO.starCond(e)))
        : ((SCENARIO.victory = 0), (SCENARIO.starred = !1));
    }
    SCENARIO.victory
      ? ((PERSIST0[SCENARIO.name].complete = !0),
        (STATE.lastLetter = 1),
        SFX.success.play())
      : ((STATE.lastLetter = 1), SFX.loser.play()),
      SCENARIO.starred && (PERSIST0[SCENARIO.name].star = !0),
      Storage.save(PERSIST0[SCENARIO.name], SCENARIO.name, 0);
  }
  static draw(e, t) {
    var i = e.ctx,
      a = t.ctx,
      r = RobotSpeech.grab(SCENARIO.name, 0, !0);
    FIELD.disableBriefs && (r = !1);
    var s = !r && 1 === SCENARIO.victory,
      o = FIELD.tileWidth / 6;
    s && (o = 0);
    var n =
      ["finishtrans", "finished", "backwardTrans"].indexOf(STATE.mode) >= 0 ||
      "finished" === ROBOT.oldMode;
    if (!n || SCENARIO.victory < 0) e.clear();
    else {
      var l = Math.min(1, TIMER.finishTime / TIMER.finishMid);
      if ("finishtrans" === STATE.mode)
        var h = (l - 1) * SCENARIO.finishedHeight,
          d = l * SCENARIO.finishedHeight;
      else if ("finished" === STATE.mode || "finished" === ROBOT.oldMode)
        (h = 0), (d = SCENARIO.finishedHeight);
      else if ("backwardTrans" === STATE.mode)
        (h = (l - 1) * SCENARIO.finishedHeight),
          (d = l * SCENARIO.finishedHeight);
      e.clear(), t.clear();
      var u = FIELD.tileHeight / 4,
        c = FIELD.tileHeight / 4,
        I = new Path2D(
          Helper.makeRoundedPath(
            [u, u, e.w0 - u, e.w0 - u],
            [h - 0 * FIELD.tileHeight, d, d, h - 0 * FIELD.tileHeight],
            [0, c, c, 0],
            1,
            0,
            0,
          ),
        ),
        E = i.createLinearGradient(0, 0, e.w0, 0);
      if (
        (E.addColorStop(1, "#444"),
        E.addColorStop(0.45, "#4e7566"),
        E.addColorStop(0.55, "#4e7566"),
        E.addColorStop(0, "#444"),
        i.save(),
        (i.fillStyle = E),
        (i.shadowBlur = 4),
        (i.shadowOffsetX = 4),
        (i.shadowOffsetY = 4),
        (i.shadowColor = "#555"),
        (i.lineStyle = "black"),
        (i.lineWidth = 1),
        i.fill(I),
        i.stroke(I),
        i.restore(),
        "finished" !== STATE.mode &&
          "backwardTrans" !== STATE.mode &&
          "finished" !== ROBOT.oldMode)
      ) {
        if ("finishtrans" === STATE.mode) {
          var S =
            (TIMER.finishTime - TIMER.finishMid) /
            (TIMER.finishMax - TIMER.finishMid);
          if (
            (S > 0 &&
              1 === STATE.lastLetter &&
              (SFX.finlaser.play(), (STATE.lastLetter = 0)),
            S >= 0)
          ) {
            var f =
                0.5 *
                (1 -
                  Math.cos(
                    Math.PI * Math.min(Math.max(0, 1.25 * (S - 0.1)), 1),
                  )),
              p = FIELD.tileWidth / 4;
            if (S <= 0.1)
              var T = 10 * S,
                R = 2 * u,
                m = e.w0 - 2 * u,
                g = 10 * p * S;
            else if (S >= 0.9)
              (T = 10 * (1 - S)),
                (R = e.w0 - 2 * u),
                (m = 2 * u),
                (g = 10 * p * (1 - S));
            else
              (T = 1),
                (R = 2 * u + f * (e.w0 - 4 * u)),
                (m = e.w0 - 2 * u - f * (e.w0 - 4 * u)),
                (g = p);
            v = Paths.scannersFinish(i, T);
            v.draw(i, R - p / 2, d, p, p);
            v = Paths.scannersFinish(i, T);
            if ((v.draw(i, m - p / 2, d, p, p), s)) {
              a.save();
              (L = (9 * FIELD.tileWidth) / 4),
                (h = 1.6 * FIELD.tileWidth),
                (u = (1.5 * FIELD.tileHeight) / 6),
                (c = FIELD.tileHeight / 6),
                (I = new Path2D(
                  Helper.makeRoundedPath(
                    [
                      e.w0 / 2 - L / 2 - u,
                      e.w0 / 2 - L / 2 - u,
                      e.w0 / 2 + L / 2 + u,
                      e.w0 / 2 + L / 2 + u,
                    ],
                    [h - u, h + u, h + u, h - u],
                    [c, c, c, c],
                    1,
                    0,
                    0,
                  ),
                ));
              (a.fillStyle = "#333"),
                (a.strokeStyle = "black"),
                (a.lineWidth = 2),
                a.fill(I),
                a.stroke(I),
                a.restore();
            }
            if (
              (a.save(),
              (a.textBaseline = "top"),
              (a.textAlign = "center"),
              (a.font = (2 * FIELD.tileWidth) / 4 + "px Courier New"),
              (a.fillStyle = "antiquewhite"),
              (a.shadowBlur = 2),
              (a.shadowOffsetX = 2),
              (a.shadowOffsetY = 2),
              (a.shadowColor = "black"),
              (a.font = (1 * FIELD.tileWidth) / 2 + "px Courier New"),
              1 === SCENARIO.victory
                ? (a.fillText("Factory", e.w0 / 2, FIELD.tileWidth / 6 + o),
                  a.fillText(
                    "Successful!",
                    e.w0 / 2,
                    (4.5 * FIELD.tileWidth) / 6 + o,
                  ),
                  s &&
                    ((a.font = (1 * FIELD.tileWidth) / 3 + "px Courier New"),
                    (a.textBaseline = "middle"),
                    a.fillText(
                      "Level select",
                      e.w0 / 2,
                      1.6 * FIELD.tileWidth,
                    )))
                : 0 === SCENARIO.victory &&
                  (a.fillText("Factory", e.w0 / 2, (2 * FIELD.tileWidth) / 6),
                  a.fillText(
                    "Malfunction",
                    e.w0 / 2,
                    (4 * FIELD.tileWidth) / 4,
                  )),
              a.restore(),
              a.save(),
              1 === SCENARIO.victory)
            )
              if (SCENARIO.starred) {
                (D =
                  0.9 *
                  (1 + 0.2 * Math.cos(12 * Math.PI * TIMER.qubitGlowRatio))),
                  (b = (1.4 * FIELD.tileWidth) / 2),
                  (O = e.w0 - (2.4 * FIELD.tileWidth) / 2),
                  (h = (0.8 * FIELD.tileWidth) / 4 + o),
                  (M = 0.4 * Math.sin(2 * Math.PI * TIMER.blinkRatio)),
                  (v = Paths.starBonus(a, 0, M));
                v.draw(
                  a,
                  b - (((D - 1) / 2) * FIELD.tileWidth) / 2,
                  h - (((D - 1) / 2) * FIELD.tileHeight) / 2,
                  (D * FIELD.tileWidth) / 2,
                  (D * FIELD.tileWidth) / 2,
                ),
                  v.draw(
                    a,
                    O - (((D - 1) / 2) * FIELD.tileWidth) / 2,
                    h - (((D - 1) / 2) * FIELD.tileHeight) / 2,
                    (D * FIELD.tileWidth) / 2,
                    (D * FIELD.tileWidth) / 2,
                  );
              } else {
                (D =
                  0.9 *
                  (1 + 0.2 * Math.cos(12 * Math.PI * TIMER.qubitGlowRatio))),
                  (b = (1.4 * FIELD.tileWidth) / 2),
                  (O = e.w0 - (2.4 * FIELD.tileWidth) / 2),
                  (h = (0.8 * FIELD.tileWidth) / 4 + o),
                  (v = Paths.starBonus(a, 1, 0));
                v.draw(
                  a,
                  b - (((D - 1) / 2) * FIELD.tileWidth) / 2,
                  h - (((D - 1) / 2) * FIELD.tileHeight) / 2,
                  (D * FIELD.tileWidth) / 2,
                  (D * FIELD.tileWidth) / 2,
                ),
                  v.draw(
                    a,
                    O - (((D - 1) / 2) * FIELD.tileWidth) / 2,
                    h - (((D - 1) / 2) * FIELD.tileHeight) / 2,
                    (D * FIELD.tileWidth) / 2,
                    (D * FIELD.tileWidth) / 2,
                  );
              }
            else {
              (D =
                0.9 *
                (1 + 0.2 * Math.cos(12 * Math.PI * TIMER.qubitGlowRatio))),
                (b = (1.4 * FIELD.tileWidth) / 2),
                (O = e.w0 - (2.4 * FIELD.tileWidth) / 2),
                (h = (0.8 * FIELD.tileWidth) / 4 + FIELD.tileWidth / 6),
                (M = 0.4 * Math.sin(2 * Math.PI * TIMER.blinkRatio)),
                (v = Paths.sparkBonus(a, 0, M - Math.PI / 8));
              v.draw(
                a,
                b - (((D - 1) / 2) * FIELD.tileWidth) / 2,
                h - (((D - 1) / 2) * FIELD.tileHeight) / 2,
                (D * FIELD.tileWidth) / 2,
                (D * FIELD.tileWidth) / 2,
              );
              v = Paths.sparkBonus(a, 1, -M + Math.PI / 8);
              v.draw(
                a,
                O - (((D - 1) / 2) * FIELD.tileWidth) / 2,
                h - (((D - 1) / 2) * FIELD.tileHeight) / 2,
                (D * FIELD.tileWidth) / 2,
                (D * FIELD.tileWidth) / 2,
              );
            }
            a.restore(),
              a.save(),
              (a.globalCompositeOperation = "destination-out"),
              a.fillRect(R, 0, e.w0, (3 * FIELD.tileWidth) / 4 + o),
              a.fillRect(0, (3 * FIELD.tileWidth) / 4 + o, m, t.h0),
              a.restore(),
              a.save();
            E = i.createLinearGradient(R - g, 0, R + g, 0);
            E.addColorStop(0, "rgba(255,255,255,0.0)"),
              E.addColorStop(0.2, "rgba(0,0,255,0.2)"),
              E.addColorStop(0.5, "cyan"),
              E.addColorStop(0.8, "rgba(0,0,255,0.2)"),
              E.addColorStop(1, "rgba(255,255,255,0.0)"),
              (a.fillStyle = E),
              a.fillRect(R - g, 0, R + g, d);
            var A = i.createLinearGradient(m - g, 0, m + g, 0);
            A.addColorStop(0, "rgba(255,255,255,0.0)"),
              A.addColorStop(0.2, "rgba(0,0,255,0.2)"),
              A.addColorStop(0.5, "cyan"),
              A.addColorStop(0.8, "rgba(0,0,255,0.2)"),
              A.addColorStop(1, "rgba(255,255,255,0.0)"),
              (a.fillStyle = A),
              a.fillRect(m - g, 0, m + g, d),
              a.restore();
          }
        }
      } else {
        var C = 0;
        if (
          ("backwardTrans" === STATE.mode &&
            (C = (l - 1) * SCENARIO.finishedHeight),
          s)
        ) {
          a.save();
          var L = (9 * FIELD.tileWidth) / 4,
            h = 1.6 * FIELD.tileWidth + C,
            u = (1.5 * FIELD.tileHeight) / 6,
            c = FIELD.tileHeight / 6,
            I = new Path2D(
              Helper.makeRoundedPath(
                [
                  e.w0 / 2 - L / 2 - u,
                  e.w0 / 2 - L / 2 - u,
                  e.w0 / 2 + L / 2 + u,
                  e.w0 / 2 + L / 2 + u,
                ],
                [h - u, h + u, h + u, h - u],
                [c, c, c, c],
                1,
                0,
                0,
              ),
            );
          (a.strokeStyle = "black"),
            "nextbutton" === STATE.under.type
              ? (a.fillStyle = "#666")
              : (a.fillStyle = "#333"),
            (a.lineWidth = 2),
            a.fill(I),
            a.stroke(I),
            a.restore();
        }
        if (
          (a.save(),
          (a.textBaseline = "top"),
          (a.textAlign = "center"),
          (a.shadowBlur = 2),
          (a.shadowOffsetX = 2),
          (a.shadowOffsetY = 2),
          (a.shadowColor = "black"),
          (a.font = (1 * FIELD.tileWidth) / 2 + "px Courier New"),
          1 === SCENARIO.victory
            ? ((a.fillStyle = "antiquewhite"),
              a.fillText("Factory", e.w0 / 2, o + FIELD.tileWidth / 6 + C),
              a.fillText(
                "Successful!",
                e.w0 / 2,
                o + (4.5 * FIELD.tileWidth) / 6 + C,
              ),
              s &&
                ((a.font = (1 * FIELD.tileWidth) / 3 + "px Courier New"),
                (a.fillStyle = "antiquewhite"),
                (a.textBaseline = "middle"),
                a.fillText(
                  "Level select",
                  e.w0 / 2,
                  1.6 * FIELD.tileWidth + C,
                )))
            : 0 === SCENARIO.victory &&
              ((a.fillStyle = "antiquewhite"),
              a.fillText("Factory", e.w0 / 2, (2 * FIELD.tileWidth) / 6 + C),
              a.fillText(
                "Malfunction",
                e.w0 / 2,
                (4 * FIELD.tileWidth) / 4 + C,
              )),
          a.restore(),
          a.save(),
          1 === SCENARIO.victory)
        )
          if (SCENARIO.starred) {
            var D =
                0.9 * (1 + 0.2 * Math.cos(12 * Math.PI * TIMER.qubitGlowRatio)),
              b = (1.4 * FIELD.tileWidth) / 2,
              O = e.w0 - (2.4 * FIELD.tileWidth) / 2,
              h = (0.8 * FIELD.tileWidth) / 4 + C + o,
              M = 0.4 * Math.sin(2 * Math.PI * TIMER.blinkRatio),
              v = Paths.starBonus(a, 0, M);
            v.draw(
              a,
              b - (((D - 1) / 2) * FIELD.tileWidth) / 2,
              h - (((D - 1) / 2) * FIELD.tileHeight) / 2,
              (D * FIELD.tileWidth) / 2,
              (D * FIELD.tileWidth) / 2,
            ),
              v.draw(
                a,
                O - (((D - 1) / 2) * FIELD.tileWidth) / 2,
                h - (((D - 1) / 2) * FIELD.tileHeight) / 2,
                (D * FIELD.tileWidth) / 2,
                (D * FIELD.tileWidth) / 2,
              );
          } else {
            var D =
                0.9 * (1 + 0.2 * Math.cos(12 * Math.PI * TIMER.qubitGlowRatio)),
              b = (1.4 * FIELD.tileWidth) / 2,
              O = e.w0 - (2.4 * FIELD.tileWidth) / 2,
              h = (0.8 * FIELD.tileWidth) / 4 + C + o,
              M = 0,
              v = Paths.starBonus(a, 1, M);
            v.draw(
              a,
              b - (((D - 1) / 2) * FIELD.tileWidth) / 2,
              h - (((D - 1) / 2) * FIELD.tileHeight) / 2,
              (D * FIELD.tileWidth) / 2,
              (D * FIELD.tileWidth) / 2,
            ),
              v.draw(
                a,
                O - (((D - 1) / 2) * FIELD.tileWidth) / 2,
                h - (((D - 1) / 2) * FIELD.tileHeight) / 2,
                (D * FIELD.tileWidth) / 2,
                (D * FIELD.tileWidth) / 2,
              );
          }
        else {
          var D =
              0.9 * (1 + 0.2 * Math.cos(12 * Math.PI * TIMER.qubitGlowRatio)),
            b = (1.4 * FIELD.tileWidth) / 2,
            O = e.w0 - (2.4 * FIELD.tileWidth) / 2,
            h = (0.8 * FIELD.tileWidth) / 4 + C + FIELD.tileWidth / 6,
            M = 0.4 * Math.sin(2 * Math.PI * TIMER.blinkRatio),
            v = Paths.sparkBonus(a, 0, M - Math.PI / 8);
          v.draw(
            a,
            b - (((D - 1) / 2) * FIELD.tileWidth) / 2,
            h - (((D - 1) / 2) * FIELD.tileHeight) / 2,
            (D * FIELD.tileWidth) / 2,
            (D * FIELD.tileWidth) / 2,
          );
          var v = Paths.sparkBonus(a, 1, -M + Math.PI / 8);
          v.draw(
            a,
            O - (((D - 1) / 2) * FIELD.tileWidth) / 2,
            h - (((D - 1) / 2) * FIELD.tileHeight) / 2,
            (D * FIELD.tileWidth) / 2,
            (D * FIELD.tileWidth) / 2,
          );
        }
        a.restore();
      }
    }
  }
}
