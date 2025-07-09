class Loop {
  static main() {
    if (
      (OPTS.useGrads &&
        ((GRADS.flame = CANV.base.ctx.createLinearGradient(0, 0, 32, 32)),
        GRADS.flame.addColorStop(0, "CornflowerBlue"),
        GRADS.flame.addColorStop(
          0.4 + 0.05 * TIMER.blinkRatioDub,
          "CornflowerBlue",
        ),
        GRADS.flame.addColorStop(
          0.6 + 0.05 * TIMER.glareRatioTrig * TIMER.blinkRatioDub,
          "#d92b2b",
        ),
        GRADS.flame.addColorStop(1, "#d92b2b")),
      "robot" !== STATE.mode &&
        TIMER.grey > 0 &&
        (document.getElementById("greyoverlay").style.opacity =
          (TIMER.grey / TIMER.greyMax) * 0.75),
      0 === STATE.heldKey &&
        "free" === STATE.state &&
        "constructing" === STATE.mode &&
        (STATE.state = "erasing"),
      CANV.menuEraser.clear(),
      "constructing" === STATE.mode)
    ) {
      if ("erasing" === STATE.state || "destroying" === STATE.state)
        var e = 0.7 + 0.1 * Math.cos(8 * Math.PI * TIMER.qubitGlowRatio);
      else e = 0.75;
      if (
        (PathsI.eraserIcon(CANV.menuEraser.ctx).draw(
          CANV.menuEraser.ctx,
          ((1 - e) * FIELD.tileWidth) / 2,
          ((1 - e) * FIELD.tileHeight) / 2,
          e * FIELD.tileWidth,
          e * FIELD.tileHeight,
        ),
        "constructing" === STATE.mode &&
          "eraser" === STATE.under.type &&
          "erasing" !== STATE.state)
      ) {
        e = 0.8 + 0.07 * Math.cos(8 * Math.PI * TIMER.qubitGlowRatio);
        Paths.qubitHalo(CANV.menuEraser.ctx).draw(
          CANV.menuEraser.ctx,
          ((1 - e) * FIELD.tileWidth) / 2,
          ((1 - e) * FIELD.tileHeight) / 2,
          e * FIELD.tileWidth,
          e * FIELD.tileHeight,
        );
      }
    } else {
      e = 0.75;
      PathsI.eraserIcon(CANV.menuEraser.ctx).draw(
        CANV.menuEraser.ctx,
        ((1 - e) * FIELD.tileWidth) / 2,
        ((1 - e) * FIELD.tileHeight) / 2,
        e * FIELD.tileWidth,
        e * FIELD.tileHeight,
      );
    }
    if (
      (("escbutton" !== STATE.under.type &&
        "escbutton" !== STATE.underLast.type) ||
        Helper.drawToggles(),
      "constructing" === STATE.mode)
    ) {
      var t = 0 === UNDOREDO.numAvail && 0 === UNDOREDO.numFwd,
        i = UNDOREDO.leftExtend > 0 || UNDOREDO.rightExtend > 0;
      if (!t || i) {
        CANV.undos.clear(),
          0 === UNDOREDO.numAvail
            ? (UNDOREDO.leftExtend = Math.max(
                0,
                UNDOREDO.leftExtend - TIMER.dt / 200,
              ))
            : (UNDOREDO.leftExtend = Math.min(
                1,
                UNDOREDO.leftExtend + TIMER.dt / 200,
              )),
          0 === UNDOREDO.numFwd
            ? (UNDOREDO.rightExtend = Math.max(
                0,
                UNDOREDO.rightExtend - TIMER.dt / 200,
              ))
            : (UNDOREDO.rightExtend = Math.min(
                1,
                UNDOREDO.rightExtend + TIMER.dt / 200,
              ));
        var a = FIELD.tileWidth;
        Paths.undoButton(
          CANV.undos.ctx,
          UNDOREDO.numAvail,
          "undobutton" === STATE.under.type,
        ).draw(
          CANV.undos.ctx,
          a / 4,
          (3 * a) / 4 - (UNDOREDO.leftExtend * a) / 2,
          a,
          a,
        ),
          Paths.redoButton(
            CANV.undos.ctx,
            UNDOREDO.numFwd,
            "redobutton" === STATE.under.type,
          ).draw(
            CANV.undos.ctx,
            6.75 * a,
            (3 * a) / 4 - (UNDOREDO.rightExtend * a) / 2,
            a,
            a,
          );
      }
    }
    if (
      (OPTS.sfxOn &&
        ("gatedrag" === STATE.state
          ? SFX.manip.play()
          : "qubitbasis" === STATE.state
            ? SFX.manip2.play()
            : "analysisgatecontrolling" === STATE.state && SFX.manip.play()),
      "confirming" !== STATE.mode)
    ) {
      if (
        PERSIST0[SCENARIO.name] &&
        PERSIST0[SCENARIO.name].complete &&
        SCENARIO.archive
      ) {
        CANV.archive.clear();
        var r = !1;
        "archiveButton" === STATE.under.type && (r = !0);
        var s = Paths.archiveButton(CANV.archive.ctx, r);
        s.draw(
          CANV.archive.ctx,
          1.25 * FIELD.tileWidth,
          1.25 * FIELD.tileHeight,
          FIELD.tileWidth / 2,
          FIELD.tileHeight / 2,
        );
      }
      if (SCENARIO.journal) {
        CANV.journal.clear();
        r = !1;
        "journalButton" === STATE.under.type && (r = !0);
        s = Paths.journalButton(CANV.journal.ctx, r);
        s.draw(
          CANV.journal.ctx,
          1.25 * FIELD.tileWidth,
          1.25 * FIELD.tileHeight,
          FIELD.tileWidth / 2,
          FIELD.tileHeight / 2,
        );
      }
      CANV.letterButton.clear();
      var o = [0, 0, 0, 0];
      if (
        ("letterButton" === STATE.under.type && (o[STATE.under.i0] = 1),
        "robot" === STATE.mode &&
          (Timer.robotStep(performance.now()),
          Robot.drawButton(),
          (CANV.robotScreen.ctx.fillStyle = "black"),
          CANV.robotScreen.clear(),
          CANV.robotScreen.fill(),
          Robot.draw(
            CANV.robotScreen.ctx,
            ROBOT.screenW / 16,
            RTIMER.theta,
            RTIMER.stretch,
            RTIMER.extend,
          ),
          ROBOT.isDone ||
            (CANV.robotText.clear(),
            TextParser.draw(
              CANV.robotText.ctx,
              0,
              0,
              ROBOT.lineGap,
              RTIMER.pageTime / RTIMER.charTime,
              ROBOT.lines,
              ROBOT.lineTime,
              ROBOT.wordTime,
              ROBOT.paraGaps,
            ))),
        PERSIST0[SCENARIO.name])
      ) {
        if (PERSIST0[SCENARIO.name].briefed)
          var n = 1,
            l = 0,
            h = 0;
        else
          (n = 1.1 + 0.2 * Math.cos(8 * Math.PI * TIMER.qubitGlowRatio)),
            (l = (((1 - n) / 2) * FIELD.tileWidth) / 2),
            (h = (((1 - n) / 2) * FIELD.tileWidth) / 2);
        s = Paths.letterButton(CANV.letterButton.ctx, 0, o[0]);
        s.draw(
          CANV.letterButton.ctx,
          l + FIELD.tileWidth / 4,
          h + FIELD.tileHeight / 4,
          (n * FIELD.tileWidth) / 2,
          (n * FIELD.tileHeight) / 2,
        );
        s = Paths.letterButton(CANV.letterButton.ctx, 1, o[1]);
        s.draw(
          CANV.letterButton.ctx,
          (3.5 * FIELD.tileWidth) / 4,
          FIELD.tileHeight / 4,
          FIELD.tileWidth / 2,
          FIELD.tileHeight / 2,
        );
        s = Paths.letterButton(CANV.letterButton.ctx, 2, o[2]);
        s.draw(
          CANV.letterButton.ctx,
          (6 * FIELD.tileWidth) / 4,
          FIELD.tileHeight / 4,
          FIELD.tileWidth / 2,
          FIELD.tileHeight / 2,
        );
        s = Paths.letterButton(CANV.letterButton.ctx, 3, o[3]);
        s.draw(
          CANV.letterButton.ctx,
          (8.5 * FIELD.tileWidth) / 4,
          FIELD.tileHeight / 4,
          FIELD.tileWidth / 2,
          FIELD.tileHeight / 2,
        );
      }
      if (TIMER.shake >= 0) {
        var d = TIMER.shake / TIMER.shakeMax;
        e = FIELD.tileWidth / 48;
        (FIELD.leftPad =
          FIELD.leftPad0 +
          4 *
            e *
            Math.sin(Math.PI * d) *
            Math.cos(Math.PI * (5 * d + Math.random()))),
          (FIELD.topPad =
            FIELD.topPad0 +
            4 *
              e *
              Math.sin(Math.PI * d) *
              Math.sin(Math.PI * (6 * d + Math.random()))),
          ResetConsts.translate();
      }
      TIMER.construct < 0 && (CANV.controls.clear(), CANV.scenarioMask.clear()),
        TIMER.message > 0
          ? (CANV.FPS.clear(),
            (CANV.FPS.ctx.globalAlpha = Math.min(
              1,
              Math.max(0, TIMER.message / TIMER.messageMax),
            )),
            CANV.FPS.ctx.fillText(FIELD.message, 0, 0))
          : OPTS.showFPS &&
            (CANV.FPS.clear(),
            (CANV.FPS.ctx.globalAlpha = 1),
            CANV.FPS.ctx.fillText(
              "FPS: " +
                TIMER.FPS +
                " " +
                Math.round(PERF.otherTot) +
                " " +
                Math.round(PERF.loopTot) +
                " " +
                Math.round(PERF.renderTot),
              0,
              0,
            )),
        Placement.check(),
        Tooltip.draw(),
        [
          "running",
          "paused",
          "backwardTrans",
          "forwardTrans",
          "finishtrans",
          "finished",
        ].indexOf(STATE.mode) >= 0 || "finished" === ROBOT.oldMode
          ? (Score.drawBase(CANV.scoreBase),
            Score.draw(CANV.score, CANV.menuText))
          : (CANV.scoreBase.clear(), CANV.score.clear()),
        "running" === STATE.mode ||
        "paused" === STATE.mode ||
        "finishtrans" === STATE.mode
          ? Ticker.draw(
              CANV.ticker,
              FIELD.tileWidth / 6,
              -FIELD.tileWidth / 6,
              (2 * FIELD.tileWidth) / 3,
              (4 * FIELD.tileWidth) / 3,
            )
          : "backwardTrans" === STATE.mode &&
            Ticker.reset(
              CANV.ticker,
              FIELD.tileWidth / 6,
              -FIELD.tileWidth / 6,
              (2 * FIELD.tileWidth) / 3,
              (4 * FIELD.tileWidth) / 3,
              1 - TIMER.transRatio,
            );
      var u = performance.now();
      "running" === STATE.mode || "paused" === STATE.mode
        ? Render.boardDynamic(
            RBOARD[TIMER.tick],
            RBOARD[TIMER.tick + 1],
            0,
            [0, 1, 1],
          )
        : "finishtrans" === STATE.mode ||
            "finished" === STATE.mode ||
            "finished" === ROBOT.oldMode
          ? Render.boardDynamic(
              RBOARD[TIMER.tick],
              RBOARD[TIMER.tick],
              0,
              [0, 1, 1],
            )
          : "constructing" === STATE.mode
            ? ("boardtile" === STATE.under.type
                ? Render.boardSingle(IBOARD, STATE.under.i0, STATE.under.j0)
                : Render.boardSingle(IBOARD),
              CANV.menu.clear(),
              CANV.menuText.clear(),
              TIMER.construct < 0 &&
                ((MENU.closure = 0), MENU.draw(CANV.menu, CANV.menuText)))
            : "backwardTrans" === STATE.mode
              ? (TIMER.transRatio > 0.5
                  ? RBOARD[TIMER.tick] && RBOARD[TIMER.tick + 1]
                    ? Render.boardDynamic(
                        RBOARD[TIMER.tick],
                        RBOARD[TIMER.tick + 1],
                      )
                    : Render.boardSingle(IBOARD)
                  : ((TIMER.tick = 0),
                    CANV.baseWires.clear(),
                    Render.boardSingle(IBOARD)),
                CANV.effects.ctx.save(),
                (CANV.effects.ctx.globalAlpha = 0.7 * TIMER.transRatioDub),
                (CANV.effects.ctx.fillStyle = "aliceblue"),
                CANV.effects.ctx.fillRect(
                  IBOARD.x0,
                  IBOARD.y0,
                  IBOARD.width * FIELD.tileWidth,
                  IBOARD.height * FIELD.tileHeight,
                ),
                CANV.effects.ctx.restore(),
                CANV.menu.clear(),
                CANV.menuText.clear(),
                (MENU.closure = TIMER.transRatioTrig),
                MENU.draw(CANV.menu, CANV.menuText))
              : "forwardTrans" === STATE.mode &&
                (CANV.menu.clear(),
                CANV.menuText.clear(),
                MENU.setSelected(-1, -1),
                (MENU.closure = TIMER.transRatioTrig),
                MENU.draw(CANV.menu, CANV.menuText),
                Render.boardSingle(IBOARD)),
        (PERF.render = performance.now() - u),
        CANV.debug.clear(),
        DEBUG.show &&
          ((CANV.debug.ctx.fillStyle = "white"),
          CANV.debug.fill(),
          (CANV.debug.ctx.fillStyle = "black"),
          (CANV.debug.ctx.font = "14px Verdana"),
          CANV.debug.ctx.fillText(String(STATE.mode), 10, 20),
          CANV.debug.ctx.fillText(String(STATE.state), 10, 40),
          CANV.debug.ctx.fillText(
            "grab: " +
              String(STATE.grab.type) +
              ", i0: " +
              String(STATE.grab.i0) +
              ", j0: " +
              String(STATE.grab.j0) +
              ", k0: " +
              String(STATE.grab.k0),
            10,
            60,
          ),
          CANV.debug.ctx.fillText(
            "under: " +
              String(STATE.under.type) +
              ", i0: " +
              String(STATE.under.i0) +
              ", j0: " +
              String(STATE.under.j0) +
              ", k0: " +
              String(STATE.under.i0 + STATE.under.j0 * FIELD.cols),
            10,
            80,
          ),
          CANV.debug.ctx.fillText(
            "underLast: " +
              String(STATE.underLast.type) +
              ", i0: " +
              String(STATE.underLast.i0) +
              ", j0: " +
              String(STATE.underLast.j0) +
              ", k0: " +
              String(STATE.underLast.k0),
            10,
            100,
          ),
          CANV.debug.ctx.fillText(
            "selected: " +
              String(MENU.selected) +
              ", i0: " +
              String(STATE.selected.i0) +
              ", j0: " +
              String(STATE.selected.j0) +
              ", k0: " +
              String(STATE.selected.i0 + STATE.selected.j0 * FIELD.cols),
            10,
            120,
          ),
          "running" === STATE.mode
            ? CANV.debug.ctx.fillText(
                "success: " +
                  RBOARD[TIMER.tick].success +
                  ", failure: " +
                  RBOARD[TIMER.tick].failure,
                10,
                140,
              )
            : CANV.debug.ctx.fillText(
                "success: " + IBOARD.success + ", failure: " + IBOARD.failure,
                10,
                140,
              ),
          CANV.debug.ctx.fillText(
            "sel state: " + MENU.selProperties.state,
            10,
            160,
          ),
          CANV.debug.ctx.fillText(
            "State X: " + STATE.pos.x + ", State Y: " + STATE.pos.y,
            10,
            180,
          ),
          CANV.debug.ctx.fillText("Wheel: " + TIMER.allowWheel, 10, 200)),
        "ctrlbutton" === STATE.under.type || CTRLMENU.checkTransition()
          ? (CANV.menu2.clear(),
            CTRLMENU.drawControl(CANV.menu2),
            (FIELD.lastLoc = "ctrlbutton"))
          : "backwardTrans" === STATE.mode
            ? (CANV.menu2.clear(), CTRLMENU.drawControl(CANV.menu2))
            : ("ctrlbutton" !== STATE.under.type &&
                "ctrlbutton" === FIELD.lastLoc &&
                (CTRLMENU.removeHovered(),
                CANV.menu2.clear(),
                CTRLMENU.drawControl(CANV.menu2)),
              (FIELD.lastLoc = "none")),
        Placement.draw(),
        "multiplace" === STATE.state && "boardtile" === STATE.under.type
          ? COPYBUFFER.draw()
          : "premultiplace" === STATE.state && COPYBUFFER.preDraw(),
        TIMER.construct < 0 &&
          ((CANV.controls.ctx.globalCompositeOperation = "source-over"),
          Halo.draw(CANV.controls.ctx),
          QubitHalo.draw(CANV.controls.ctx)),
        Analysis.updateSlide(CANV.analysis),
        (0 === FIELD.channelsDir[0] && 0 === FIELD.channelsDir[1]) ||
          (CANV.overlayLeft.clear(),
          Overlay.createLeftGrill(CANV.overlayLeft.ctx)),
        (0 === FIELD.channelsDir[2] && 0 === FIELD.channelsDir[3]) ||
          (CANV.overlayRight.clear(),
          Overlay.createRightGrill(CANV.overlayRight.ctx)),
        (0 === FIELD.channelsDir[4] && 0 === FIELD.channelsDir[5]) ||
          (CANV.overlayBottom.clear(),
          Overlay.createBottomGrill(CANV.overlayBottom.ctx)),
        FIELD.forceSingle && (TIMER.construct = -1),
        TIMER.construct >= 0 &&
          (CANV.interface.clear(),
          Helper.introLaser(CANV.controls, CANV.interface),
          Helper.sideIntroLaser(CANV.scenarioMask, CANV.interface),
          CANV.menu.clear(),
          CANV.menuText.clear(),
          (MENU.closure =
            Math.max(
              0,
              Math.min(
                1,
                (TIMER.construct - 0.2 * TIMER.constructMax) /
                  (0.8 * TIMER.constructMax),
              ),
            ) ** 2),
          MENU.draw(CANV.menu, CANV.menuText)),
        Inputs.resolve(),
        Finished.draw(CANV.victoryBase, CANV.victoryText),
        TIMER.white >= 0 &&
          (CANV.effects.ctx.save(),
          (CANV.effects.ctx.globalAlpha = 0.6 * TIMER.whiteRatio),
          SCENARIO.lastWasSuccess
            ? (CANV.effects.ctx.fillStyle = "lightgreen")
            : (CANV.effects.ctx.fillStyle = "lightcoral"),
          CANV.effects.ctx.fillRect(
            IBOARD.x0,
            IBOARD.y0,
            IBOARD.width * FIELD.tileWidth,
            IBOARD.height * FIELD.tileHeight,
          ),
          CANV.effects.ctx.restore());
    } else ConfirmationBox.loop();
  }
  static title() {
    if ("confirming" !== STATE.state) {
      if (
        (("escbutton" !== STATE.under.type &&
          "escbutton" !== STATE.underLast.type) ||
          Helper.drawToggles(),
        TIMER.tick < SCENARIO.xCameraLocs.length - 1)
      ) {
        var e =
            -1 * FIELD.tileWidth * SCENARIO.xCameraLocs[TIMER.tick] +
            6 * FIELD.tileWidth +
            FIELD.leftMargin,
          t =
            -1 * FIELD.tileHeight * SCENARIO.yCameraLocs[TIMER.tick] +
            2.5 * FIELD.tileHeight,
          i =
            -1 * FIELD.tileWidth * SCENARIO.xCameraLocs[TIMER.tick + 1] +
            6 * FIELD.tileWidth +
            FIELD.leftMargin,
          a =
            -1 * FIELD.tileHeight * SCENARIO.yCameraLocs[TIMER.tick + 1] +
            2.5 * FIELD.tileHeight,
          r = (1 - TIMER.popRatio) * e + TIMER.popRatio * i,
          s = (1 - TIMER.popRatio) * t + TIMER.popRatio * a;
        (FIELD.cameraX = r), (FIELD.cameraY = s);
        var o = 4e3 / (13.875 * FIELD.tileWidth),
          n = 2e3 / (7.25 * FIELD.tileHeight),
          l = 150 - o * Math.round(Math.abs(r + 1500) % (150 / o)),
          h = 130 - n * Math.round(Math.abs(s + 1300) % (130 / n));
        SVG.title.svg.setAttribute(
          "viewBox",
          l - 75 + " " + (h - 65) + " 4000 2000",
        );
      }
      OPTS.showFPS &&
        (CANV.FPS.clear(),
        CANV.FPS.ctx.fillText(
          "FPS: " + TIMER.FPS + " " + FIELD.tileWidth,
          0,
          0,
        )),
        2 === TIMER.tick && (OPTS.fancyGears = TIMER.FPS > 20),
        3 === TIMER.tick &&
          OPTS.attemptDowngrade &&
          ((OPTS.attemptDowngrade = !1),
          OPTS.fancyGraphics &&
            ((OPTS.fancyGraphics = TIMER.FPS > 20), Graphics.init()));
      var d = SCENARIO.xCameraLocs[TIMER.tick],
        u = SCENARIO.xCameraLocs[TIMER.tick + 1],
        c = SCENARIO.yCameraLocs[TIMER.tick],
        I = SCENARIO.yCameraLocs[TIMER.tick + 1],
        E = Math.max(Math.min(d, u) - 7, 0),
        S = Math.min(Math.max(d, u) + 7, FIELD.cols),
        f = Math.max(Math.min(c, I) - 4, 0),
        p = Math.min(Math.max(c, I) + 4, FIELD.rows);
      if (
        (Render.boardDynamic(
          RBOARD[TIMER.tick],
          RBOARD[TIMER.tick + 1],
          [E, f, S, p],
          [1, 1, 1],
        ),
        CANV.title.clear(),
        Gears.findPath(CANV.title.ctx),
        FIELD.showTitleMenu &&
          ("free" === STATE.state
            ? (CANV.titleAbout.clear(),
              CANV.titleText.clear(),
              Gears.drawOptions(CANV.title.ctx))
            : "options" === STATE.state &&
              (CANV.titleText.clear(),
              Gears.drawOptionsMenu(CANV.titleText.ctx))),
        FIELD.showTitleMenu)
      ) {
        CANV.titleLearn.clear();
        var T = CANV.titleLearn.ctx;
        T.save(),
          T.translate(0.05 * FIELD.tileWidth, 0.45 * FIELD.tileHeight),
          T.rotate((-23 * Math.PI) / 180);
        var R = 1 + 0.05 * Math.cos(4 * TIMER.blinkRatio * Math.PI);
        T.scale(R, R),
          "learnbutton" === STATE.under.type
            ? (T.fillStyle = "rgba(60,60,100,0.7)")
            : (T.fillStyle = "rgba(0,0,40,0.7)"),
          (T.strokeStyle = "black"),
          (T.lineWidth = 2),
          T.beginPath();
        var m = FIELD.tileWidth,
          g = [0.2 * m, 0.95 * m, 1.15 * m, 1.15 * m, 0, 0],
          A = [0, 0, 0.25 * m, 0.5 * m, 0.5 * m, 0.25 * m],
          C = [0.1 * m, 0.1 * m, 0.1 * m, 0.1 * m, 0.1 * m, 0.1 * m],
          L = new Path2D(Helper.makeRoundedPath(g, A, C));
        T.fill(L),
          T.stroke(L),
          (T.textBaseline = "top"),
          (T.textAlign = "left"),
          (T.font = (0.7 * FIELD.tileWidth) / 6 + "px Verdana"),
          (T.shadowBlur = 2),
          (T.shadowOffsetX = 2),
          (T.shadowOffsetY = 2),
          (T.shadowColor = "black"),
          (T.fillStyle = "antiquewhite"),
          T.fillText(
            "Walkthrough",
            0.2 * FIELD.tileWidth,
            (0.2 * FIELD.tileHeight) / 2,
          ),
          T.fillText(
            "Available Here!",
            0.15 * FIELD.tileWidth,
            (0.6 * FIELD.tileHeight) / 2,
          ),
          T.restore(),
          CANV.titleLink.clear();
        T = CANV.titleLink.ctx;
        T.save();
        R = 1 + 0.02 * Math.cos(4 * TIMER.blinkRatio * Math.PI);
        T.scale(R, R),
          "linkbutton" === STATE.under.type
            ? (T.fillStyle = "#175751")
            : (T.fillStyle = "#0f3b37"),
          (T.strokeStyle = "black"),
          (T.lineWidth = 2),
          T.beginPath();
        (m = FIELD.tileWidth),
          (g = [0.1 * m, 1.5 * m, 1.5 * m, 0.1 * m]),
          (A = [0, 0, 0.7 * m, 0.7 * m]),
          (C = [0.3 * m, 0.3 * m, 0.3 * m, 0.3 * m]),
          (L = new Path2D(Helper.makeRoundedPath(g, A, C)));
        T.fill(L),
          T.stroke(L),
          (T.textBaseline = "top"),
          (T.textAlign = "center"),
          (T.shadowBlur = 2),
          (T.shadowOffsetX = 2),
          (T.shadowOffsetY = 2),
          (T.shadowColor = "black"),
          (T.fillStyle = "antiquewhite"),
          (T.font = (1 * FIELD.tileWidth) / 6 + "px Verdana"),
          T.fillText(
            "Try QCoder:",
            0.8 * FIELD.tileWidth,
            (0.2 * FIELD.tileHeight) / 2,
          ),
          (T.font = (0.7 * FIELD.tileWidth) / 6 + "px Verdana"),
          T.fillText(
            "量子競技プログラミング",
            0.8 * FIELD.tileWidth,
            (0.9 * FIELD.tileHeight) / 2,
          ),
          // T.fillText(
          //   "Programming",
          //   0.8 * FIELD.tileWidth,
          //   (1 * FIELD.tileHeight) / 2,
          // ),
          T.restore();
      }
      DEBUG.show &&
        (CANV.debug.clear(),
        (CANV.debug.ctx.fillStyle = "white"),
        CANV.debug.fill(),
        (CANV.debug.ctx.fillStyle = "black"),
        (CANV.debug.ctx.font = "14px Verdana"),
        CANV.debug.ctx.fillText(String(STATE.mode), 10, 20),
        CANV.debug.ctx.fillText(String(STATE.state), 10, 40),
        CANV.debug.ctx.fillText(
          "grab: " +
            String(STATE.grab.type) +
            ", i0: " +
            String(STATE.grab.i0) +
            ", j0: " +
            String(STATE.grab.j0) +
            ", k0: " +
            String(STATE.grab.k0),
          10,
          60,
        ),
        CANV.debug.ctx.fillText(
          "under: " +
            String(STATE.under.type) +
            ", i0: " +
            String(STATE.under.i0) +
            ", j0: " +
            String(STATE.under.j0) +
            ", k0: " +
            String(STATE.under.k0),
          10,
          80,
        ),
        CANV.debug.ctx.fillText(
          "underLast: " +
            String(STATE.underLast.type) +
            ", i0: " +
            String(STATE.underLast.i0) +
            ", j0: " +
            String(STATE.underLast.j0) +
            ", k0: " +
            String(STATE.underLast.k0),
          10,
          100,
        ),
        CANV.debug.ctx.fillText(
          "State X: " + STATE.pos.x + ", State Y: " + STATE.pos.y,
          10,
          140,
        )),
        TIMER.grey > 0 &&
          (document.getElementById("greyoverlay").style.opacity =
            (TIMER.grey / TIMER.greyMax) * 0.75),
        Inputs.resolve();
    } else ConfirmationBox.loop(0.5, 1);
  }
  static select() {
    ("escbutton" !== STATE.under.type &&
      "escbutton" !== STATE.underLast.type) ||
      Helper.drawToggles(),
      TIMER.message > 0
        ? (CANV.FPS.clear(),
          (CANV.FPS.ctx.globalAlpha = Math.min(
            1,
            Math.max(0, TIMER.message / TIMER.messageMax),
          )),
          CANV.FPS.ctx.fillText(FIELD.message, 0, 0))
        : OPTS.showFPS &&
          (CANV.FPS.clear(),
          CANV.FPS.ctx.fillText(
            "FPS: " + TIMER.FPS + " " + FIELD.tileWidth,
            0,
            0,
          )),
      CANV.selectButtons.clear();
    var e = [0, 0, 0, 0, 0, 0];
    "selectButton" === STATE.under.type && (e[STATE.under.i0] = 1);
    var t = 0 * FIELD.tileWidth,
      i = 0 * FIELD.tileHeight;
    CANV.selectButtons.ctx.save(),
      (CANV.selectButtons.ctx.font =
        (1.2 * FIELD.tileWidth) / 4 + "px Verdana"),
      (CANV.selectButtons.ctx.fillStyle = "black"),
      (CANV.selectButtons.ctx.textAlign = "left"),
      (CANV.selectButtons.ctx.textBaseline = "middle"),
      CANV.selectButtons.ctx.fillText(
        "Inbox:",
        (2 * FIELD.tileWidth) / 4 + t,
        FIELD.tileHeight / 4 + i,
      ),
      CANV.selectButtons.ctx.beginPath(),
      (CANV.selectButtons.ctx.lineWidth = 1.5),
      (CANV.selectButtons.ctx.lineStyle = "#888"),
      CANV.selectButtons.ctx.stroke(
        Helper.roundRect(
          (1.7 * FIELD.tileWidth) / 4 + t,
          (0.2 * FIELD.tileHeight) / 4 + i,
          4.6 * FIELD.tileWidth,
          1.1 * FIELD.tileWidth,
          FIELD.tileWidth / 8,
        ),
      ),
      CANV.selectButtons.ctx.restore();
    for (var a = 0; a < 7; a++)
      if (PERSIST0.generic.availableBriefs[a] || FIELD.forceOpen) {
        var r = Paths.selectButtons(
          CANV.selectButtons.ctx,
          (a + 1).toString(),
          e[a],
        );
        r.draw(
          CANV.selectButtons.ctx,
          (2.5 * (a + 1) * FIELD.tileWidth) / 4,
          (2 * FIELD.tileHeight) / 4,
          FIELD.tileWidth / 2,
          FIELD.tileHeight / 2,
        );
      }
    if (
      ("robot" === STATE.mode &&
        (Timer.robotStep(performance.now()),
        Robot.drawButton(),
        (CANV.robotScreen.ctx.fillStyle = "black"),
        CANV.robotScreen.clear(),
        CANV.robotScreen.fill(),
        Robot.draw(
          CANV.robotScreen.ctx,
          ROBOT.screenW / 16,
          RTIMER.theta,
          RTIMER.stretch,
          RTIMER.extend,
        ),
        ROBOT.isDone ||
          (CANV.robotText.clear(),
          TextParser.draw(
            CANV.robotText.ctx,
            0,
            0,
            ROBOT.lineGap,
            RTIMER.pageTime / RTIMER.charTime,
            ROBOT.lines,
            ROBOT.lineTime,
            ROBOT.wordTime,
            ROBOT.paraGaps,
          ))),
      CANV.select.clear(),
      SELECTOR.draw(CANV.select),
      Achievements.draw(CANV.select, CANV.selectAward),
      CANV.debug.clear(),
      DEBUG.show)
    ) {
      (CANV.debug.ctx.fillStyle = "white"),
        CANV.debug.fill(),
        (CANV.debug.ctx.fillStyle = "black"),
        (CANV.debug.ctx.font = "14px Verdana"),
        CANV.debug.ctx.fillText(String(STATE.mode), 10, 20),
        CANV.debug.ctx.fillText(String(STATE.state), 10, 40),
        CANV.debug.ctx.fillText(
          "grab: " +
            String(STATE.grab.type) +
            ", i0: " +
            String(STATE.grab.i0) +
            ", j0: " +
            String(STATE.grab.j0) +
            ", k0: " +
            String(STATE.grab.k0),
          10,
          60,
        ),
        CANV.debug.ctx.fillText(
          "under: " +
            String(STATE.under.type) +
            ", i0: " +
            String(STATE.under.i0) +
            ", j0: " +
            String(STATE.under.j0) +
            ", k0: " +
            String(STATE.under.k0),
          10,
          80,
        ),
        "running" === STATE.mode
          ? CANV.debug.ctx.fillText(
              "success: " +
                RBOARD[TIMER.tick].success +
                ", failure: " +
                RBOARD[TIMER.tick].failure,
              10,
              100,
            )
          : CANV.debug.ctx.fillText(
              "success: " + IBOARD.success + ", failure: " + IBOARD.failure,
              10,
              100,
            ),
        CANV.debug.ctx.fillText(
          "sel state: " + MENU.selProperties.state,
          10,
          120,
        );
      var s = Math.round((10 * STATE.pos.x) / FIELD.tileWidth - 3) / 10,
        o = Math.round((10 * STATE.pos.y) / FIELD.tileHeight - 3) / 10;
      if (
        (CANV.debug.ctx.fillText("State X: " + s + ", State Y: " + o, 10, 140),
        CANV.debug.ctx.fillText("Wheel: " + TIMER.allowWheel, 10, 160),
        "qubiting" === STATE.state || "qubitbasis" === STATE.state)
      ) {
        var n = STATE.grab.k0;
        CANV.debug.ctx.fillText(
          "compAmps: " +
            Math.round(100 * n.ampsComp[0]) / 100 +
            ", " +
            Math.round(100 * n.ampsComp[1]) / 100 +
            " rot: " +
            Math.round((8 * n.rot) / Math.PI) +
            ", basis: " +
            Math.round((8 * n.basisRot) / Math.PI),
          10,
          180,
        );
      }
    }
    Inputs.resolve();
  }
  static tutorial() {
    if (
      (OPTS.showFPS &&
        (CANV.FPS.clear(),
        CANV.FPS.ctx.fillText(
          "FPS: " + TIMER.FPS + " " + FIELD.tileWidth,
          0,
          0,
        ),
        CANV.FPS.ctx.fillText(STATE.pos.x + ", " + STATE.pos.y, 0, 20)),
      "free" === TUTORIAL.type
        ? Render.boardDynamicTutorial(UBOARD[0], UBOARD[1])
        : "fixed" === TUTORIAL.type &&
          Render.boardSingleTutorial(UBOARD[UTIMER.tick % TUTORIAL.nFrames]),
      Inputs.resolve(),
      TUTORIAL.grab &&
        (CANV.tutorialControls.clear(),
        Halo.draw(CANV.tutorialControls.ctx, TUTORIAL.grab)),
      TutControl.draw(),
      12 === TUTORIAL.current)
    )
      TutControl.drawSuperposition();
    else if (14 === TUTORIAL.current)
      CANV.tutorialExtra.clear(),
        Analysis.draw(
          CANV.tutorialExtra,
          TUTORIAL.entStateQ0,
          -0.2 * FIELD.tileWidth,
          0.5,
        );
    else if (15 === TUTORIAL.current)
      CANV.tutorialExtra.clear(),
        Analysis.draw(
          CANV.tutorialExtra,
          TUTORIAL.entStateQ0,
          -0.2 * FIELD.tileWidth,
          0.5,
          !1,
          [1, 0, 0, 0, 0, 0],
        ),
        Analysis.draw(
          CANV.tutorialExtra,
          TUTORIAL.entStateQ0,
          -0.2 * FIELD.tileWidth,
          0.5,
          !1,
          [2, 0, 0, 0, 0, 0],
          5.6 * FIELD.tileHeight,
          !1,
        );
    else if (1 === TUTORIAL.current) {
      CANV.tutorialExtra.clear();
      var e = 0.8 * FIELD.tileWidth,
        t = 8.5 * FIELD.tileHeight,
        i = Paths.qubitHalo(CANV.tutorialExtra.ctx),
        a = 1 * (1.1 + 0.1 * Math.cos(8 * Math.PI * TIMER.qubitGlowRatio));
      i.draw(
        CANV.tutorialExtra.ctx,
        e - ((a - 1) / 2) * FIELD.tileWidth,
        t - ((a - 1) / 2) * FIELD.tileHeight,
        a * FIELD.tileWidth,
        a * FIELD.tileHeight,
      );
    } else if (6 === TUTORIAL.current) {
      CANV.tutorialExtra.clear();
      (e = 2.3 * FIELD.tileWidth), (t = 4 * FIELD.tileHeight);
      var r = (3 * SEL_STYLES.r0) / 4;
      Halo.drawRing(CANV.tutorialExtra.ctx, e, t, r),
        Halo.drawRing(CANV.tutorialExtra.ctx, e + 2 * FIELD.tileHeight, t, r),
        Halo.drawSwitchIconSimple(CANV.tutorialExtra.ctx, e, t),
        Halo.drawSwitchIconSimple(
          CANV.tutorialExtra.ctx,
          e + 2 * FIELD.tileHeight,
          t,
        );
    }
  }
}
