class Timer {
  static initTitle() {
    (TIMER.previousStamp = -1),
      (TIMER.tick = 0),
      (TIMER.totalTime = 0),
      (TIMER.boardTime = 0),
      (TIMER.timePerTick = 800),
      (TIMER.blinkMax = 2e3),
      (TIMER.swirlMax = 1e3),
      (TIMER.dashMax = 200),
      (TIMER.qubitGlowMax = 4e3),
      (TIMER.blobMax = 2e3),
      (TIMER.glareMax = 1500),
      (TIMER.shakeMax = 400),
      (TIMER.wireMax = 4e3),
      (TIMER.resizeMax = 200),
      (TIMER.message = -1),
      (TIMER.messageMax = 1200),
      (TIMER.blinkRatio = 0),
      (TIMER.swirlRatio = 0),
      (TIMER.dashRatio = 0),
      (TIMER.qubitGlowRatio = 0),
      (TIMER.blob = 0),
      (TIMER.shake = -1),
      (TIMER.wireRatio = 0),
      (TIMER.glareRatio = 0),
      (TIMER.glareRatioTrig = 0),
      (TIMER.ratio = 0),
      (TIMER.trigRatio = 0),
      (TIMER.popRatio = 0),
      (TIMER.trigRatioDub = 0),
      (TIMER.resize = 0),
      (TIMER.FPS = 0),
      (TIMER.FPSmid = 0),
      (TIMER.seconds = 0);
  }
  static initialize() {
    (TIMER.previousStamp = -1),
      (TIMER.tick = 0),
      (TIMER.totalTime = 0),
      (TIMER.boardTime = 0),
      (TIMER.defaultTimePerTick = 512),
      (TIMER.timePerTick = TIMER.defaultTimePerTick),
      (TIMER.victoryTick = 99999),
      (TIMER.dt = 0),
      (TIMER.allowWheel = !0),
      (TIMER.totalWheel = 0),
      (TIMER.whiteMax = 400),
      (TIMER.blinkMax = 2e3),
      (TIMER.swirlMax = 1e3),
      (TIMER.wireMax = 4e3),
      (TIMER.dashMax = 300),
      (TIMER.iconMax = 300),
      (TIMER.qubitGlowMax = 4e3),
      (TIMER.blobMax = 2e3),
      (TIMER.shakeMax = 400),
      (TIMER.glareMax = 1500),
      (TIMER.closureMax = 300),
      (TIMER.resizeMax = 200),
      (TIMER.whiteRatio = 0),
      (TIMER.white = -1),
      (TIMER.blinkRatio = 0),
      (TIMER.swirlRatio = 0),
      (TIMER.wireRatio = 0),
      (TIMER.dashRatio = 0),
      (TIMER.qubitGlowRatio = 0),
      (TIMER.blob = 0),
      (TIMER.shake = -1),
      (TIMER.glareRatio = 0),
      (TIMER.glareRatioTrig = 0),
      (TIMER.resize = -1),
      (TIMER.message = -1),
      (TIMER.messageMax = 1500),
      (TIMER.FPS = 0),
      (TIMER.FPSmid = 0),
      (TIMER.seconds = 0),
      (TIMER.time = 0),
      (TIMER.tickEnd = 0),
      (TIMER.subTick = -1),
      (TIMER.subMax = 20),
      (TIMER.ratio = 0),
      (TIMER.trigRatio = 0),
      (TIMER.popRatio = 0),
      (TIMER.trigRatioDub = 0),
      (TIMER.constructMax = 1e3),
      (TIMER.construct = TIMER.constructMax),
      (TIMER.transTick = 0),
      (TIMER.transTime = 0),
      (TIMER.transMax = 400),
      (TIMER.transRatioDub = 0),
      (TIMER.transRatio = 0),
      (TIMER.transRatioTrig = 0),
      (TIMER.finishMax = 1200),
      (TIMER.finishMid = 400),
      (TIMER.finishTime = 0),
      (TIMER.newSubMax = 20),
      (TIMER.subTickLength = 20),
      (TIMER.tickInProgress = !1),
      (TIMER.updateInProgress = !1),
      (TIMER.lastTick = 0);
  }
  static mainStep(e) {
    var t = performance.now();
    if (
      (TIMER.previousStamp < 0 && (TIMER.previousStamp = e),
      (TIMER.dt = Math.min(100, e - TIMER.previousStamp)),
      (TIMER.totalTime += TIMER.dt),
      (TIMER.previousStamp = e),
      SCENARIO.isPaused)
    )
      if (TIMER.boardTime % 1 > 1e-5) {
        var i = TIMER.boardTime + TIMER.dt / TIMER.timePerTick;
        Math.floor(i) > Math.floor(TIMER.boardTime)
          ? (TIMER.boardTime = Math.floor(i))
          : (TIMER.boardTime = i);
      } else TIMER.boardTime = Math.floor(TIMER.boardTime);
    else TIMER.boardTime += TIMER.dt / TIMER.timePerTick;
    if (
      (FIELD.isBlur ||
        ("robot" !== STATE.mode &&
          TIMER.grey > 0 &&
          ((TIMER.grey -= TIMER.dt),
          TIMER.grey <= 0 &&
            (document.getElementById("greyoverlay").style.visibility =
              "hidden"))),
      TIMER.construct >= 0 &&
        ("constructing" === STATE.mode
          ? (TIMER.construct / TIMER.constructMax > 0.8 &&
              (TIMER.construct - TIMER.dt) / TIMER.constructMax <= 0.8 &&
              SFX.finlaser.play(),
            (TIMER.construct -= TIMER.dt),
            TIMER.construct < 0 &&
              ((TIMER.construct = -1),
              CANV.interface.clear(),
              CANV.scenarioMask.clear()))
          : "robot" === STATE.mode || (TIMER.construct = -1)),
      ("running" === STATE.mode || "paused" === STATE.mode) &&
        (TIMER.boardTime >= TIMER.victoryTick ||
          TIMER.boardTime >= SCENARIO.maxTicks))
    )
      if (SCENARIO.repetitions > 1) {
        if (TIMER.boardTime >= SCENARIO.maxTicks) {
          TIMER.victoryTick = SCENARIO.maxTicks;
          for (var a = TIMER.tick; a <= SCENARIO.maxTicks; a++)
            RBOARD[a + 1] = RBOARD[a].copy().updateOneStep(a);
        }
        (TIMER.dt = TIMER.victoryTick - TIMER.boardTime),
          (TIMER.boardTime = TIMER.victoryTick),
          (TIMER.tick = TIMER.victoryTick),
          (SCENARIO.isPaused = !0),
          (SCENARIO.lastWasSuccess = !1),
          (SCENARIO.currentRep += 1),
          RBOARD[TIMER.tick].success >= SCENARIO.numCorrect
            ? ((SCENARIO.lastWasSuccess = !0),
              (SCENARIO.repSuccess = 1),
              (SCENARIO.correctReps += 1))
            : (SCENARIO.retard += 1),
          SCENARIO.currentRep <= SCENARIO.repetitions
            ? (!SFX.rightBeeped &&
                e - SFX.rightLast > 40 &&
                (SFX.right.play(), (SFX.rightBeeped = !0)),
              SFX.wrongBeeped || (SFX.wrong.play(), (SFX.wrongBeeped = !0)),
              ControlState.softReset())
            : Finished.startCelebration();
      } else if (SCENARIO.victory < 0) {
        if (TIMER.boardTime >= SCENARIO.maxTicks) {
          TIMER.victoryTick = SCENARIO.maxTicks;
          for (a = TIMER.tick; a <= SCENARIO.maxTicks; a++)
            RBOARD[a + 1] = RBOARD[a].copy().updateOneStep(a);
        }
        (TIMER.dt = TIMER.victoryTick - TIMER.boardTime),
          (TIMER.boardTime = TIMER.victoryTick),
          (TIMER.tick = TIMER.victoryTick),
          (SCENARIO.isPaused = !0),
          Finished.startCelebration();
      }
    if (
      ((TIMER.wireRatio = (TIMER.totalTime % TIMER.wireMax) / TIMER.wireMax),
      (TIMER.glareRatio = (TIMER.totalTime % TIMER.glareMax) / TIMER.glareMax),
      (TIMER.glareRatioTrig =
        (1 - Math.cos(TIMER.glareRatio * Math.PI) / 2) / 2),
      (TIMER.blob = (TIMER.totalTime % TIMER.blobMax) / TIMER.blobMax),
      (TIMER.blinkRatio = (TIMER.totalTime % TIMER.blinkMax) / TIMER.blinkMax),
      (TIMER.blinkRatioDub =
        (1 - Math.cos(2 * Math.PI * TIMER.blinkRatio)) / 2),
      (TIMER.swirlRatio = (TIMER.totalTime % TIMER.swirlMax) / TIMER.swirlMax),
      (TIMER.qubitGlowRatio =
        (TIMER.totalTime % TIMER.qubitGlowMax) / TIMER.qubitGlowMax),
      (TIMER.dashRatio = (TIMER.totalTime % TIMER.dashMax) / TIMER.dashMax),
      (TIMER.ratio = Math.round((TIMER.boardTime % 1) * 1e3) / 1e3),
      (TIMER.trigRatio = (1 - Math.cos(Math.PI * TIMER.ratio)) / 2),
      (TIMER.trigRatioDub = (1 - Math.cos(2 * Math.PI * TIMER.ratio)) / 2),
      (TIMER.popRatio =
        0.5 * (4 * TIMER.ratio ** 3 - 3 * TIMER.ratio ** 4) +
        0.5 * (5 * TIMER.ratio ** 4 - 4 * TIMER.ratio ** 5)),
      TIMER.resize > TIMER.dt)
    )
      TIMER.resize -= TIMER.dt;
    else if (TIMER.resize >= 0) {
      var r = ResetConsts.resize();
      r !== FIELD.tileWidth &&
        ((FIELD.tileWidth = r),
        (FIELD.tileHeight = r),
        ResetConsts.all(),
        ResetConsts.refresh(),
        "robot" === STATE.mode && ResetConsts.robot(-1, !1)),
        (TIMER.resize = -1);
    }
    if (
      (STATE.newFocus &&
        ((STATE.newFocus = !1),
        ResetConsts.all(),
        ResetConsts.refresh(),
        "robot" === STATE.mode && ResetConsts.robot(-1, !1)),
      TIMER.shake >= 0 &&
        (TIMER.dt > 0 && (TIMER.shake += TIMER.dt),
        TIMER.shake >= TIMER.shakeMax && (TIMER.shake = -1)),
      TIMER.white >= 0 &&
        (TIMER.dt > 0 && (TIMER.white += TIMER.dt),
        (TIMER.whiteRatio =
          (1 - Math.cos(2 * Math.PI * (TIMER.white / TIMER.whiteMax))) / 2),
        TIMER.white >= TIMER.whiteMax &&
          ((TIMER.white = -1), (TIMER.whiteRatio = 0))),
      "finishtrans" === STATE.mode
        ? ((TIMER.finishTime += TIMER.dt),
          TIMER.finishTime >= TIMER.finishMax &&
            ((STATE.mode = "finished"),
            (TIMER.finishTime = TIMER.finishMax),
            1 === SCENARIO.victory &&
              ((ROBOT.oldMode = "finished"),
              (STATE.mode = "robot"),
              ResetConsts.robot())))
        : "backwardTrans" === STATE.mode &&
          TIMER.finishTime > 0 &&
          ((TIMER.finishTime -= TIMER.dt),
          TIMER.finishTime < 0 &&
            ((TIMER.finishTime = 0), (SCENARIO.victory = -1))),
      !FIELD.channelsDir.every((e) => 0 === e))
    )
      for (a = 0; a < 6; a++)
        (FIELD.channels[a] = Math.min(
          Math.max(
            0,
            FIELD.channels[a] +
              (Math.max(TIMER.dt, 1) / 16) * 0.05 * FIELD.channelsDir[a],
          ),
          1,
        )),
          (0 !== FIELD.channels[a] && 1 !== FIELD.channels[a]) ||
            (FIELD.channelsDir[a] = 0),
          (FIELD.channelsTrig[a] =
            0.5 - 0.5 * Math.cos(Math.PI * FIELD.channels[a]));
    if ("forwardTrans" === STATE.mode) {
      if (((TIMER.transTime += TIMER.dt), TIMER.transTime >= TIMER.transMax)) {
        (TIMER.transTime = TIMER.transMax),
          (SCENARIO.isPaused = !1),
          (STATE.mode = "running"),
          (RBOARD[0] = IBOARD.copy());
        for (a = 0; a < RBOARD[0].gateList.length; a++) {
          var s = RBOARD[0].gateList[a];
          "switch" === s.type && 1 === s.state && s.rot < 2 && (s.rot += 2);
        }
        RBOARD[1] = RBOARD[0].copy().updateOneStep(0);
      }
      (TIMER.transRatio = TIMER.transTime / TIMER.transMax),
        (TIMER.transRatioTrig = (1 - Math.cos(Math.PI * TIMER.transRatio)) / 2),
        (TIMER.transRatioDub =
          (1 - Math.cos(2 * Math.PI * TIMER.transRatio)) / 2),
        (TIMER.tick = 0),
        (TIMER.boardTime = 0);
    }
    "backwardTrans" === STATE.mode &&
      ((TIMER.transTime -= TIMER.dt),
      (TIMER.boardTime = 0),
      (TIMER.finishTime -= TIMER.dt),
      TIMER.transTime <= 0 &&
        (RBOARD.fill(0),
        (TIMER.transTime = 0),
        (SCENARIO.isPaused = !0),
        (SCENARIO.victory = -1),
        (STATE.mode = "constructing"),
        (TIMER.tick = 0),
        Ticker.draw(
          CANV.ticker,
          FIELD.tileWidth / 6,
          -FIELD.tileWidth / 6,
          (2 * FIELD.tileWidth) / 3,
          (4 * FIELD.tileWidth) / 3,
          !0,
        )),
      (TIMER.transRatio = TIMER.transTime / TIMER.transMax),
      (TIMER.transRatioTrig = (1 - Math.cos(Math.PI * TIMER.transRatio)) / 2),
      (TIMER.transRatioDub =
        (1 - Math.cos(2 * Math.PI * TIMER.transRatio)) / 2));
    var o = Math.floor(TIMER.boardTime);
    if (
      o > TIMER.tick &&
      -1 === ["constructing", "robot", "confirming"].indexOf(STATE.mode)
    ) {
      var n = Math.floor(TIMER.boardTime) - TIMER.tick,
        l = TIMER.tick;
      TIMER.tick += n;
      for (a = 0; a < n; a++)
        if (
          ((RBOARD[l + a + 2] = RBOARD[l + a + 1]
            .copy()
            .updateOneStep(l + a + 1)),
          l > 1e3 && (RBOARD[l - 1e3 + a] = 0),
          TIMER.victoryTick >= SCENARIO.maxTicks)
        ) {
          if (
            0 === SCENARIO.victoryCond ||
            2 === SCENARIO.victoryCond ||
            4 === SCENARIO.victoryCond
          )
            var h = RBOARD[l + a + 2].success,
              d = RBOARD[l + a + 2].failure,
              u = h + d >= SCENARIO.maxTrials;
          else if (1 === SCENARIO.victoryCond)
            u =
              RBOARD[l + a + 2].qubitList.length +
                RBOARD[l + a + 2].bitList.length ===
              0;
          else if (3 === SCENARIO.victoryCond)
            u = RBOARD[l + a + 2].qubitList.length < 3;
          if (u) {
            (TIMER.victoryTick = l + a + 2),
              (RBOARD[TIMER.victoryTick + 1] = RBOARD[TIMER.victoryTick]
                .copy()
                .updateOneStep(TIMER.victoryTick)),
              console.log("victory tick: " + TIMER.victoryTick);
            break;
          }
        }
      if (
        (TIMER.tick > TIMER.victoryTick &&
          ((TIMER.tick = TIMER.victoryTick),
          (TIMER.boardTime = TIMER.victoryTick)),
        void 0 !== RBOARD[TIMER.tick - n + 1] &&
          (RBOARD[TIMER.tick + 1].success > RBOARD[TIMER.tick - n + 1].success
            ? (SFX.rightBeeped = !1)
            : (SFX.rightBeeped = !0)),
        void 0 !== RBOARD[TIMER.tick - n + 1] &&
          (RBOARD[TIMER.tick + 1].failure > RBOARD[TIMER.tick - n + 1].failure
            ? (SFX.wrongBeeped = !1)
            : (SFX.wrongBeeped = !0)),
        (SFX.tickBeeped = !1),
        (SFX.fireBeeped = !1),
        (SFX.createBeeped = !1),
        (SFX.transformBeeped = !1),
        (SFX.laserBeeped = !1),
        (SFX.anyBeeped = !1),
        ("running" === STATE.mode || "paused" === STATE.mode) &&
          "qubit" === STATE.grab.type)
      ) {
        var c = STATE.grab.k0.id,
          I = RBOARD[TIMER.tick].qubitList,
          E = !1;
        for (a = 0; a < I.length; a++)
          if (I[a].id === c) {
            (STATE.grab.i0 = I[a].i0),
              (STATE.grab.j0 = I[a].j0),
              (STATE.grab.k0 = I[a]),
              (E = !0);
            break;
          }
        E || (STATE.grab = { type: "none", i0: 0, j0: 0, k0: 0 });
      }
    }
    OPTS.sfxOn &&
      (("running" !== STATE.mode && "paused" !== STATE.mode) ||
        (TIMER.boardTime % 1 > 0.4 &&
          (SFX.tickBeeped || (SFX.ntick.play(), (SFX.tickBeeped = !0))),
        TIMER.boardTime % 1 > 0.3 &&
          (SFX.rightBeeped || (SFX.right.play(), (SFX.rightBeeped = !0)),
          SFX.wrongBeeped || (SFX.wrong.play(), (SFX.wrongBeeped = !0)),
          !SFX.laserBeeped &&
            RBOARD[TIMER.tick].sfx[1] &&
            (SFX.laser.play(), (SFX.laserBeeped = !0), (SFX.anyBeeped = !0)),
          !SFX.createBeeped &&
            RBOARD[TIMER.tick].sfx[3] &&
            (SFX.create.play(), (SFX.createBeeped = !0), (SFX.anyBeeped = !0)),
          !SFX.fireBeeped &&
            RBOARD[TIMER.tick].sfx[0] &&
            (SFX.fire.play(), (SFX.fireBeeped = !0), (SFX.anyBeeped = !0))),
        TIMER.boardTime % 1 > 0.1 &&
          (SFX.anyBeeped ||
            SFX.transformBeeped ||
            !RBOARD[TIMER.tick].sfx[2] ||
            (SFX.transform.play(),
            (SFX.transformBeeped = !0),
            (SFX.anyBeeped = !0))))),
      TIMER.message > 0 &&
        ((TIMER.message -= TIMER.dt),
        TIMER.message < 0 && (CANV.FPS.clear(), (TIMER.message = -1))),
      Math.floor(TIMER.totalTime / 1e3) > TIMER.seconds
        ? ((TIMER.FPS = TIMER.FPSmid),
          (TIMER.FPSmid = 0),
          (TIMER.seconds += 1),
          (PERF.otherTot = PERF.otherMid),
          (PERF.loopTot = PERF.loopMid),
          (PERF.renderTot = PERF.renderMid),
          (PERF.otherMid = 0),
          (PERF.loopMid = 0),
          (PERF.renderMid = 0))
        : ((TIMER.FPSmid += 1),
          (PERF.otherMid += PERF.other),
          (PERF.loopMid += PERF.loop),
          (PERF.renderMid += PERF.render)),
      (PERF.other = performance.now() - t);
    t = performance.now();
    Loop.main(),
      (PERF.loop = performance.now() - t),
      "title" === STATE.mode
        ? (TIMER.frame = window.requestAnimationFrame(Timer.titleStep))
        : "levelSelect" === STATE.mode
          ? (TIMER.frame = window.requestAnimationFrame(Timer.selectStep))
          : "tutorial" === STATE.mode
            ? window.requestAnimationFrame(Timer.tutorialStep)
            : (TIMER.frame = window.requestAnimationFrame(Timer.mainStep));
  }
  static titleStep(e) {
    TIMER.previousStamp < 0 && (TIMER.previousStamp = e), Loop.title();
    const t = Math.min(100, e - TIMER.previousStamp);
    (TIMER.totalTime += t),
      (TIMER.previousStamp = e),
      (TIMER.boardTime += t / TIMER.timePerTick);
    var i = Math.floor(TIMER.boardTime);
    if (
      (i > TIMER.tick &&
        ((SFX.anyBeeped = !1),
        (SFX.rightBeeped = !1),
        (TIMER.tick += 1),
        (RBOARD[TIMER.tick + 1] = RBOARD[TIMER.tick]
          .copy()
          .updateOneStep(TIMER.tick)),
        47 === TIMER.tick && ((TIMER.tick = 0), (TIMER.boardTime = 0))),
      SFX.title,
      OPTS.sfxOn &&
        (!SFX.rightBeeped &&
          TIMER.boardTime % 1 > 0.4 &&
          (SFX.ttick.play(), (SFX.rightBeeped = !0)),
        SFX.anyBeeped ||
          (TIMER.boardTime % 1 > 0.3 &&
            (1 === SFX.title[TIMER.tick] &&
              (SFX.laser.play(), (SFX.anyBeeped = !0)),
            0 === SFX.title[TIMER.tick] &&
              (SFX.fire.play(), (SFX.anyBeeped = !0))),
          TIMER.boardTime % 1 > 0.1 &&
            2 === SFX.title[TIMER.tick] &&
            (SFX.transform.play(), (SFX.anyBeeped = !0)))),
      Math.floor(TIMER.totalTime / 1e3) > TIMER.seconds
        ? ((TIMER.FPS = TIMER.FPSmid), (TIMER.FPSmid = 0), (TIMER.seconds += 1))
        : (TIMER.FPSmid += 1),
      (TIMER.wireRatio = (TIMER.totalTime % TIMER.wireMax) / TIMER.wireMax),
      (TIMER.glareRatio = (TIMER.totalTime % TIMER.glareMax) / TIMER.glareMax),
      (TIMER.glareRatioTrig =
        (1 - Math.cos(TIMER.glareRatio * Math.PI) / 2) / 2),
      (TIMER.blob = (TIMER.totalTime % TIMER.blobMax) / TIMER.blobMax),
      (TIMER.blinkRatio = (TIMER.totalTime % TIMER.blinkMax) / TIMER.blinkMax),
      (TIMER.blinkRatioDub =
        (1 - Math.cos(2 * Math.PI * TIMER.blinkRatio)) / 2),
      (TIMER.swirlRatio = (TIMER.totalTime % TIMER.swirlMax) / TIMER.swirlMax),
      (TIMER.qubitGlowRatio =
        (TIMER.totalTime % TIMER.qubitGlowMax) / TIMER.qubitGlowMax),
      (TIMER.dashRatio =
        ((SEL_STYLES.lineGap + SEL_STYLES.lineDash) *
          (TIMER.totalTime % TIMER.dashMax)) /
        TIMER.dashMax),
      (TIMER.ratio = Math.round((TIMER.boardTime % 1) * 1e3) / 1e3),
      (TIMER.trigRatio = (1 - Math.cos(Math.PI * TIMER.ratio)) / 2),
      (TIMER.trigRatioDub = (1 - Math.cos(2 * Math.PI * TIMER.ratio)) / 2),
      (TIMER.popRatio =
        0.5 * (4 * TIMER.ratio ** 3 - 3 * TIMER.ratio ** 4) +
        0.5 * (5 * TIMER.ratio ** 4 - 4 * TIMER.ratio ** 5)),
      TIMER.resize > t)
    )
      TIMER.resize -= t;
    else if (TIMER.resize >= 0) {
      var a = 2 * ResetConsts.resize();
      a !== FIELD.tileWidth &&
        ((FIELD.tileWidth = a), (FIELD.tileHeight = a), ResetConsts.title()),
        (TIMER.resize = -1);
    }
    STATE.newFocus && ((STATE.newFocus = !1), ResetConsts.title()),
      FIELD.isBlur ||
        ("confirming" !== STATE.state &&
          ((TIMER.grey -= t),
          TIMER.grey <= 0 &&
            (document.getElementById("greyoverlay").style.visibility =
              "hidden"))),
      SCENARIO.pauseKey ||
        ("title" === STATE.mode
          ? (TIMER.frame = window.requestAnimationFrame(Timer.titleStep))
          : "levelSelect" === STATE.mode
            ? (TIMER.frame = window.requestAnimationFrame(Timer.selectStep))
            : (TIMER.frame = window.requestAnimationFrame(Timer.mainStep)));
  }
  static selectStep(e) {
    FIELD.neededBrief >= 0 &&
      ((ROBOT.oldMode = "levelSelect"),
      (STATE.mode = "robot"),
      ResetConsts.robot(FIELD.neededBrief),
      (FIELD.neededBrief = -1),
      (STATE.under = { type: "none", i0: -1, j0: -1, k0: -1 }),
      CANV.selectText.clear(),
      SELECTOR.drawText(CANV.selectText)),
      TIMER.previousStamp < 0 && (TIMER.previousStamp = e),
      Loop.select();
    const t = Math.min(100, e - TIMER.previousStamp);
    (TIMER.totalTime += t),
      (TIMER.previousStamp = e),
      (TIMER.boardTime += t / TIMER.timePerTick);
    var i = Math.floor(TIMER.boardTime);
    if (
      (i > TIMER.tick && (TIMER.tick += 1),
      TIMER.message > 0 &&
        ((TIMER.message -= t),
        TIMER.message < 0 && (CANV.FPS.clear(), (TIMER.message = -1))),
      Math.floor(TIMER.totalTime / 1e3) > TIMER.seconds
        ? ((TIMER.FPS = TIMER.FPSmid), (TIMER.FPSmid = 0), (TIMER.seconds += 1))
        : (TIMER.FPSmid += 1),
      (TIMER.wireRatio = (TIMER.totalTime % TIMER.wireMax) / TIMER.wireMax),
      (TIMER.glareRatio = (TIMER.totalTime % TIMER.glareMax) / TIMER.glareMax),
      (TIMER.glareRatioTrig =
        (1 - Math.cos(TIMER.glareRatio * Math.PI) / 2) / 2),
      (TIMER.blob = (TIMER.totalTime % TIMER.blobMax) / TIMER.blobMax),
      (TIMER.blinkRatio = (TIMER.totalTime % TIMER.blinkMax) / TIMER.blinkMax),
      (TIMER.blinkRatioDub =
        (1 - Math.cos(2 * Math.PI * TIMER.blinkRatio)) / 2),
      (TIMER.swirlRatio = (TIMER.totalTime % TIMER.swirlMax) / TIMER.swirlMax),
      (TIMER.qubitGlowRatio =
        (TIMER.totalTime % TIMER.qubitGlowMax) / TIMER.qubitGlowMax),
      (TIMER.dashRatio = (TIMER.totalTime % TIMER.dashMax) / TIMER.dashMax),
      (TIMER.ratio = Math.round((TIMER.boardTime % 1) * 1e3) / 1e3),
      (TIMER.trigRatio = (1 - Math.cos(Math.PI * TIMER.ratio)) / 2),
      (TIMER.trigRatioDub = (1 - Math.cos(2 * Math.PI * TIMER.ratio)) / 2),
      TIMER.resize > t)
    )
      TIMER.resize -= t;
    else if (TIMER.resize >= 0) {
      var a = ResetConsts.resize();
      a !== FIELD.tileWidth &&
        ((FIELD.tileWidth = a),
        (FIELD.tileHeight = a),
        ResetConsts.levelSelect(),
        "robot" === STATE.mode && ResetConsts.robot(-1, !1)),
        (TIMER.resize = -1);
    }
    FIELD.isBlur ||
      ("robot" !== STATE.mode &&
        TIMER.grey > 0 &&
        ((TIMER.grey -= t),
        TIMER.grey <= 0
          ? (document.getElementById("greyoverlay").style.visibility = "hidden")
          : (document.getElementById("greyoverlay").style.opacity =
              (TIMER.grey / TIMER.greyMax) * 0.75))),
      STATE.newFocus &&
        ((STATE.newFocus = !1),
        ResetConsts.levelSelect(),
        "robot" === STATE.mode && ResetConsts.robot(-1, !1)),
      "title" === STATE.mode
        ? (TIMER.frame = window.requestAnimationFrame(Timer.titleStep))
        : "constructing" === STATE.mode
          ? (TIMER.frame = window.requestAnimationFrame(Timer.mainStep))
          : ("levelSelect" === STATE.mode || ROBOT.oldMode,
            (TIMER.frame = window.requestAnimationFrame(Timer.selectStep)));
  }
  static initTutorial() {
    (UTIMER.previousStamp = -1),
      (UTIMER.tick = 0),
      (UTIMER.totalTime = 0),
      (UTIMER.boardTime = 0),
      (UTIMER.timePerTick = TUTORIAL.timePerTick),
      (UTIMER.qubitGlowMax = 4e3),
      (UTIMER.seconds = 0),
      (TIMER.ratio = 0),
      (TIMER.trigRatio = 0),
      (TIMER.popRatio = 0),
      (TIMER.trigRatioDub = 0),
      (TIMER.qubitGlowRatio = 0);
  }
  static confirmStep(e) {
    ConfirmationBox.loop(), window.requestAnimationFrame(Timer.confirmStep);
  }
  static tutorialStep(e) {
    UTIMER.previousStamp < 0 && (UTIMER.previousStamp = e),
      Math.floor(UTIMER.totalTime / 1e3) > UTIMER.seconds
        ? ((TIMER.FPS = TIMER.FPSmid),
          (TIMER.FPSmid = 0),
          (UTIMER.seconds += 1))
        : (TIMER.FPSmid += 1),
      Loop.tutorial();
    const t = Math.min(100, e - UTIMER.previousStamp);
    if (
      ((UTIMER.totalTime += t),
      (UTIMER.previousStamp = e),
      (UTIMER.boardTime += t / UTIMER.timePerTick),
      TIMER.resize > t)
    )
      TIMER.resize -= t;
    else if (TIMER.resize >= 0) {
      var i = ResetConsts.resize();
      i !== FIELD.tileWidth &&
        ((STATE.mode = TUTORIAL.oldMode),
        (TUTORIAL.show = !1),
        (FIELD.cameraX = 0),
        (FIELD.cameraY = 0),
        (SCENARIO.text0 = 0),
        (SCENARIO.text1 = 0),
        (OPTS.basis = TUTORIAL.basis),
        (FIELD.tileWidth = i),
        (FIELD.tileHeight = i),
        ResetConsts.all(),
        ResetConsts.refresh(),
        "running" === STATE.mode
          ? Render.boardDynamic(
              RBOARD[TIMER.tick],
              RBOARD[TIMER.tick + 1],
              0,
              [0, 1, 1],
            )
          : "constructing" === STATE.mode && Render.boardSingle(IBOARD),
        Analysis.updateSlide(CANV.analysis),
        (STATE.mode = "tutorial"),
        ResetConsts.tutorial(),
        (TUTORIAL.show = !0)),
        (TIMER.resize = -1);
    }
    var a = Math.floor(UTIMER.boardTime);
    a > UTIMER.tick &&
      ("free" === TUTORIAL.type
        ? ((UTIMER.tick += 1),
          UBOARD.shift(),
          UBOARD.push(UBOARD[0].copy().updateOneStep()))
        : "fixed" === TUTORIAL.type && (UTIMER.tick += 1)),
      (TIMER.ratio = Math.floor((UTIMER.boardTime % 1) * 1e3) / 1e3),
      (TIMER.trigRatio = (1 - Math.cos(Math.PI * TIMER.ratio)) / 2),
      (TIMER.trigRatioDub = (1 - Math.cos(2 * Math.PI * TIMER.ratio)) / 2),
      (TIMER.popRatio =
        0.5 * (4 * TIMER.ratio ** 3 - 3 * TIMER.ratio ** 4) +
        0.5 * (5 * TIMER.ratio ** 4 - 4 * TIMER.ratio ** 5)),
      (TIMER.qubitGlowRatio =
        (UTIMER.totalTime % UTIMER.qubitGlowMax) / UTIMER.qubitGlowMax),
      (TIMER.glareRatio = (UTIMER.totalTime % TIMER.glareMax) / TIMER.glareMax),
      (TIMER.glareRatioTrig =
        (1 - Math.cos(TIMER.glareRatio * Math.PI) / 2) / 2),
      (TIMER.dashRatio = (UTIMER.totalTime % TIMER.dashMax) / TIMER.dashMax),
      (TIMER.blob = (UTIMER.totalTime % TIMER.blobMax) / TIMER.blobMax),
      (TIMER.blinkRatio = (UTIMER.totalTime % TIMER.blinkMax) / TIMER.blinkMax),
      (TIMER.blinkRatioDub =
        (1 - Math.cos(2 * Math.PI * TIMER.blinkRatio)) / 2),
      (TIMER.swirlRatio = (UTIMER.totalTime % TIMER.swirlMax) / TIMER.swirlMax),
      SCENARIO.pauseKey ||
        ("title" === STATE.mode
          ? (TIMER.frame = window.requestAnimationFrame(Timer.titleStep))
          : "levelSelect" === STATE.mode
            ? (TIMER.frame = window.requestAnimationFrame(Timer.selectStep))
            : "tutorial" === STATE.mode
              ? window.requestAnimationFrame(Timer.tutorialStep)
              : (TIMER.frame = window.requestAnimationFrame(Timer.mainStep)));
  }
  static initRobot() {
    (RTIMER.previousStamp = -1),
      (RTIMER.tick = 0),
      (RTIMER.totalTime = -1e3),
      (RTIMER.pageTime = -1e3),
      (RTIMER.seconds = 0),
      (RTIMER.pulse = 0),
      (RTIMER.pulseMax = 1e3),
      (RTIMER.charTime = 20),
      (RTIMER.sentenceTime = 40),
      (RTIMER.thetaMax = 2e3),
      (RTIMER.theta = 0),
      (RTIMER.stretchMax = 2500),
      (RTIMER.stretch = 0),
      (RTIMER.extendMax = 2500),
      (RTIMER.extend = 0);
  }
  static robotStep(e) {
    RTIMER.previousStamp < 0 && (RTIMER.previousStamp = e),
      Math.floor(RTIMER.totalTime / 1e3) > RTIMER.seconds &&
        (RTIMER.seconds += 1);
    const t = Math.min(100, e - RTIMER.previousStamp);
    (RTIMER.totalTime += t),
      (RTIMER.pageTime += t),
      (RTIMER.previousStamp = e),
      (RTIMER.boardTime += t / RTIMER.timePerTick),
      (RTIMER.theta =
        0.5 *
        Math.sin(
          (2 * Math.PI * (RTIMER.totalTime % RTIMER.thetaMax)) /
            RTIMER.thetaMax,
        )),
      (RTIMER.stretch = Math.sin(
        (2 * Math.PI * (RTIMER.totalTime % RTIMER.stretchMax)) /
          RTIMER.stretchMax,
      )),
      (RTIMER.extend = Math.sin(
        (2 * Math.PI * (RTIMER.totalTime % RTIMER.extendMax)) /
          RTIMER.extendMax,
      )),
      (RTIMER.pulse = Math.sin(
        (2 * Math.PI * (RTIMER.totalTime % RTIMER.pulseMax)) / RTIMER.pulseMax,
      )),
      RTIMER.pageTime / RTIMER.charTime > ROBOT.totTime && (ROBOT.isDone = !0);
  }
}
