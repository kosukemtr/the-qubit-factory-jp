class ResetConsts {
  static resize(e = !1) {
    if (OPTS.autoResize || e) {
      var t = Math.floor(window.innerWidth / 31.25),
        i = Math.floor(window.innerHeight / 15.25),
        a = Math.max(16, Math.min(t, i));
      return (FIELD.defaultWidth = a), a;
    }
    return FIELD.defaultWidth;
  }
  static picky() {
    "title" === STATE.mode
      ? (ResetConsts.all(), ResetConsts.title())
      : "levelSelect" === STATE.mode || "levelSelect" === ROBOT.oldMode
        ? (ResetConsts.all(),
          ResetConsts.levelSelect(),
          "robot" === STATE.mode && ResetConsts.robot(-1, !1))
        : "tutorial" === STATE.mode
          ? ((STATE.mode = TUTORIAL.oldMode),
            (TUTORIAL.show = !1),
            (FIELD.cameraX = 0),
            (FIELD.cameraY = 0),
            (SCENARIO.text0 = 0),
            (SCENARIO.text1 = 0),
            (OPTS.basis = TUTORIAL.basis),
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
            (TUTORIAL.show = !0))
          : (ResetConsts.all(),
            ResetConsts.refresh(),
            "robot" === STATE.mode && ResetConsts.robot(-1, !1));
  }
  static all() {
    (FIELD.leftPad0 = FIELD.tileWidth / 2),
      (FIELD.topPad0 = FIELD.tileHeight / 4),
      (FIELD.midPad = 0),
      (FIELD.divPad = 0),
      (FIELD.leftPad = FIELD.leftPad0),
      (FIELD.topPad = FIELD.topPad0),
      (FIELD.iconWidth = FIELD.tileWidth / 3),
      (FIELD.iconHeight = FIELD.tileHeight / 3),
      (FIELD.leftMargin = FIELD.tileWidth / 2),
      (FIELD.topMargin = FIELD.tileHeight / 2),
      (FIELD.tempRows = 0),
      SCENARIO.menuGrey && (FIELD.tempRows = SCENARIO.menuGrey.length),
      (FIELD.menu = {
        x0: FIELD.leftPad + (FIELD.cols + 1) * FIELD.tileWidth + FIELD.midPad,
        y0: FIELD.topPad,
        pad: FIELD.tileWidth / 4,
        cols: 6,
        rows: FIELD.tempRows,
        topPad: FIELD.tileHeight,
      }),
      (FIELD.menu2 = {
        x0: FIELD.leftPad + (FIELD.cols / 2 - 2) * FIELD.tileWidth,
        y0: FIELD.topPad + (FIELD.rows - 0.4) * FIELD.tileHeight,
      }),
      (FIELD.iconWidth = FIELD.tileWidth / 3),
      (FIELD.iconHeight = FIELD.tileHeight / 3),
      (FIELD.menuHeight =
        FIELD.menu.topPad +
        (FIELD.tileHeight + FIELD.menu.pad) * (FIELD.menu.rows + 1)),
      (FIELD.menuWidth =
        (FIELD.menu.cols + 1) * (FIELD.tileWidth + FIELD.menu.pad)),
      (FIELD.totWidth =
        FIELD.leftPad +
        FIELD.tileWidth * (FIELD.cols + 1) +
        FIELD.midPad +
        (FIELD.menu.cols + 1) * (FIELD.tileWidth + FIELD.menu.pad)),
      (FIELD.totHeight = FIELD.topPad + FIELD.tileHeight * (FIELD.rows + 1)),
      (FIELD.midWidth =
        FIELD.leftPad + FIELD.tileWidth * (FIELD.cols + 1) + FIELD.midPad),
      (FIELD.midHeight = FIELD.topPad + FIELD.menuHeight + FIELD.divPad),
      (FIELD.scoreHeight = FIELD.totHeight - FIELD.midHeight),
      (FIELD.analysisLeft =
        FIELD.leftPad +
        FIELD.tileWidth * (FIELD.cols + 1) -
        FIELD.tileWidth / 2),
      (FIELD.analysisWidth = FIELD.menuWidth),
      (STATE.selected = { type: "none", i0: -1, j0: -1, k0: -1 }),
      (STATE.under = { type: "none", i0: -1, j0: -1, k0: -1 }),
      (STATE.grab = { type: "none", i0: -1, j0: -1, k0: -1 }),
      (INPUTS.mousemove = 0),
      (INPUTS.mousedown = 0),
      (INPUTS.mouseup = 0),
      (INPUTS.wheel = 0),
      (INPUTS.keydown = 0),
      (INPUTS.resize = 0),
      (ANALYSIS.xPad = (5 / 8) * FIELD.tileWidth),
      (ANALYSIS.xMid = (3 * FIELD.tileWidth) / 4),
      (ANALYSIS.xGap = (0 * FIELD.tileWidth) / 3),
      (ANALYSIS.yPad = 1 * FIELD.tileHeight),
      (ANALYSIS.yGap = (2 * FIELD.tileHeight) / 4),
      (ANALYSIS.basisSpace = (24 * FIELD.tileWidth) / 48),
      (ANALYSIS.basisSize = (2 * FIELD.tileWidth) / 3),
      (ANALYSIS.barSize = 2 * FIELD.tileWidth),
      (ANALYSIS.barPad = 0.18 * FIELD.tileWidth),
      (ANALYSIS.yMeasure =
        ANALYSIS.yPad +
        2 * FIELD.tileHeight +
        2 * ANALYSIS.basisSpace +
        FIELD.tileHeight / 4),
      (OVERLAY.scale = (48 / FIELD.tileWidth) * 8),
      (OVERLAY.margin = FIELD.tileWidth / 3),
      (OVERLAY.border = FIELD.tileWidth / 5.5),
      (SCENARIO.xPad = (7 * FIELD.tileWidth) / 8),
      (SCENARIO.yPad = (7 * FIELD.tileHeight) / 8),
      (SCENARIO.yPad2 = (8 * FIELD.tileHeight) / 16),
      (SCENARIO.scoreWidth = 6.4 * FIELD.tileWidth),
      (SCENARIO.finishedHeight = 2 * FIELD.tileHeight),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SEL_STYLES.iconWidth = FIELD.iconWidth),
      (SEL_STYLES.handleRad = FIELD.tileWidth / 9),
      (SEL_STYLES.r0 = 0.85 * FIELD.tileHeight),
      Canvs.deactivateAll(CANV),
      CANV.interface.activate(),
      CANV.base.activate(),
      CANV.baseWires.activate(),
      CANV.effects.activate(),
      CANV.controls.activate(),
      CANV.blueprint.activate(),
      CANV.letterButton.activate(),
      CANV.overlay.activate(),
      CANV.overlayLeft.activate(),
      CANV.overlayRight.activate(),
      CANV.overlayBottom.activate(),
      CANV.FPS.activate(),
      CANV.debug.activate(),
      CANV.tooltip.activate(),
      CANV.ticker.activate(),
      CANV.victoryText.activate(),
      CANV.victoryBase.activate(),
      CANV.menu2.activate(),
      CANV.analysisOverlay.activate(),
      CANV.analysis.activate(),
      CANV.menuText.activate(),
      CANV.scenario.activate(),
      CANV.scenarioMask.activate(),
      CANV.menuOverlay.activate(),
      CANV.scenarioOverlay.activate(),
      CANV.score.activate(),
      CANV.scoreBase.activate(),
      CANV.menu.activate(),
      CANV.menuBack.activate(),
      CANV.archive.activate(),
      CANV.journal.activate(),
      CANV.toggles.activate(),
      CANV.undos.activate(),
      CANV.menuEraser.activate(),
      Helper.drawToggles(),
      Svgs.deactivateAll(SVG),
      SVG.board.activate(),
      SVG.menu.activate(),
      SVG.analysis.activate(),
      (SVG.analysis.svg.style.width = 0),
      OPTS.fancyGraphics &&
        OPTS.fancyFilters &&
        (SVG.tiledA.activate(),
        SVG.tiledB.activate(),
        SVG.tiledC.activate(),
        SVG.tiledD.activate(),
        SVG.tiledE.activate(),
        SVG.tiledF.activate(),
        SVG.tiledL.activate(),
        SVG.tiledM.activate()),
      CTRLMENU.reset(CANV.menu2),
      CTRLMENU.drawControl(CANV.menu2),
      PopWindow.setText(),
      PopWindow.reset();
  }
  static title() {
    (FIELD.leftPad0 = FIELD.tileWidth / 4),
      (FIELD.topPad0 = FIELD.tileHeight / 8),
      (FIELD.leftPad = FIELD.tileWidth / 4),
      (FIELD.topPad = FIELD.tileHeight / 8),
      (FIELD.leftMargin = FIELD.tileWidth / 4),
      (FIELD.topMargin = FIELD.tileHeight / 4),
      (FIELD.totWidth = 10 * FIELD.tileWidth + (35 * FIELD.tileWidth) / 8),
      (FIELD.totHeight = (15 * FIELD.tileHeight) / 2),
      Canvs.deactivateAll(CANV),
      CANV.interface.activate(),
      CANV.title.activate(),
      CANV.titleAbout.activate(),
      CANV.titleText.activate(),
      CANV.titleLearn.activate(),
      CANV.titleLink.activate(),
      CANV.underlay.activate(),
      CANV.effects.activate(),
      CANV.base.activate(),
      CANV.overlay.activate(),
      CANV.FPS.activate(),
      CANV.debug.activate(),
      CANV.toggles.activate(),
      Helper.drawToggles(),
      Svgs.deactivateAll(SVG),
      SVG.title.activate(),
      FIELD.showTitleMenu &&
        (SVG.chromeicon.activate(),
        SVG.edgeicon.activate(),
        SVG.braveicon.activate(),
        SVG.operaicon.activate(),
        SVG.fireicon.activate(),
        SVG.safariicon.activate()),
      OPTS.fancyGraphics && OPTS.fancyFilters && SVG.tiledR.activate(),
      (OVERLAY.scale = (48 / FIELD.tileWidth) * 16),
      (OVERLAY.margin = FIELD.tileWidth / 6),
      (OVERLAY.marginInner = FIELD.tileWidth / 3),
      (OVERLAY.border = FIELD.tileWidth / 11),
      (INPUTS.mousemove = 0),
      (INPUTS.mousedown = 0),
      (INPUTS.mouseup = 0),
      (INPUTS.wheel = 0),
      (INPUTS.keydown = 0),
      (INPUTS.resize = 0),
      Overlay.createTitle(CANV.overlay.ctx),
      Overlay.createUnderTitle(CANV.underlay.ctx),
      Overlay.createTitleOptions(CANV.titleAbout.ctx),
      (TIMER.grey = TIMER.greyMax),
      (document.getElementById("greyoverlay").style.visibility = "visible"),
      (document.getElementById("greyoverlay").style.opacity =
        (TIMER.grey / TIMER.greyMax) * 0.75);
  }
  static tutorial() {
    for (
      TUTORIAL.leftPad = 6 * FIELD.tileWidth,
        TUTORIAL.topPad = (1 * FIELD.tileHeight) / 2,
        TUTORIAL.boxHeight = 5 * FIELD.tileHeight,
        TUTORIAL.boxWidth = 9 * FIELD.tileHeight,
        TUTORIAL.margin = FIELD.tileWidth / 4,
        SCENARIO.text0 = 0,
        SCENARIO.text1 = 0,
        SCENARIO.text2 = 0,
        CANV.tutorialBase.activate(),
        CANV.tutorialExtra.activate(),
        CANV.tutorialGates.activate(),
        CANV.tutorialEffects.activate(),
        CANV.tutorialControls.activate(),
        CANV.tutorialHeader.activate(),
        SVG.tutorialB.deactivate(),
        SVG.tutorial.activate(),
        SVG.tutorial.svg.style.zIndex = "30",
        OPTS.fancyGraphics &&
          OPTS.fancyFilters &&
          (SVG.tiledG.activate(), SVG.tiledH.activate()),
        CANV.interface.clear(),
        document.getElementById("greyoverlay").style.opacity = 0.75,
        document.getElementById("greyoverlay").style.visibility = "visible";
      UBOARD.length > 2;

    )
      UBOARD.pop();
    (INPUTS.mousemove = 0),
      (INPUTS.mousedown = 0),
      (INPUTS.mouseup = 0),
      (INPUTS.wheel = 0),
      (INPUTS.keydown = 0),
      (INPUTS.resize = 0),
      (FIELD.cameraX = -1 * FIELD.tileWidth),
      (FIELD.cameraY = -1 * FIELD.tileHeight),
      (STATE.selected = { type: "none", i0: -1, j0: -1, k0: -1 }),
      (STATE.grab = { type: "none", i0: -1, j0: -1, k0: -1 }),
      (PERSIST0[SCENARIO.name].briefed = !0),
      TutsOpen(),
      Timer.initTutorial(),
      Overlay.createTutorial(CANV.tutorialBase.ctx, CANV.tutorialControls.ctx);
  }
  static robot(e = 1, t = !0) {
    if (
      ((ROBOT.lipMove = !0),
      (ROBOT.lipMax = 1),
      (ROBOT.bob = 0.5 + Math.random()),
      (ROBOT.isDone = !1),
      CANV.robotText.clear(),
      FIELD.disableBriefs && !FIELD.forced)
    )
      return (STATE.mode = ROBOT.oldMode), !1;
    if (
      ((FIELD.forced = !1),
      ("constructing" === ROBOT.oldMode || "finished" === ROBOT.oldMode) &&
        !RobotSpeech.grab(SCENARIO.name, 0, !0))
    )
      return (STATE.mode = ROBOT.oldMode), !1;
    "levelSelect" === ROBOT.oldMode
      ? (ROBOT.leftPad = 1.3 * FIELD.tileWidth)
      : (ROBOT.leftPad = 0.5 * FIELD.tileWidth),
      (ROBOT.topPad = (10 * FIELD.tileHeight) / 2),
      (ROBOT.margin = (3 * FIELD.tileWidth) / 4),
      (ROBOT.screenW = 3 * FIELD.tileWidth),
      (ROBOT.screenH = 5 * FIELD.tileWidth),
      (ROBOT.viewH = 3 * FIELD.tileWidth),
      (ROBOT.textW = 14 * FIELD.tileHeight),
      (ROBOT.screenGap = FIELD.tileWidth),
      (ROBOT.lineGap = 0.6 * FIELD.tileWidth),
      (ROBOT.paraGap = SCENARIO.yPad),
      (ROBOT.height =
        2 * ROBOT.margin + ROBOT.screenH + 1.5 * FIELD.tileHeight),
      (ROBOT.width =
        2.5 * ROBOT.margin + ROBOT.screenGap + ROBOT.textW + ROBOT.screenW),
      CANV.robotBase.activate(),
      CANV.robotScreen.activate(),
      CANV.robotScreenBase.activate(),
      CANV.robotText.activate(),
      CANV.robotButton.activate();
    var i = !1;
    if (
      (SCENARIO.archive && "finished" === ROBOT.oldMode && (i = !0),
      Overlay.createRobot(CANV.robotBase.ctx, i),
      Overlay.createRobotScreen(CANV.robotScreenBase.ctx),
      OPTS.fancyGraphics &&
        OPTS.fancyFilters &&
        (SVG.tiledN.activate(), SVG.tiledO.activate(), SVG.tiledP.activate()),
      (INPUTS.mousemove = 0),
      (INPUTS.mousedown = 0),
      (INPUTS.mouseup = 0),
      (INPUTS.wheel = 0),
      (INPUTS.keydown = 0),
      (INPUTS.resize = 0),
      (STATE.selected = { type: "none", i0: -1, j0: -1, k0: -1 }),
      (STATE.grab = { type: "none", i0: -1, j0: -1, k0: -1 }),
      (CANV.robotText.ctx.font =
        (1.2 / 3) * FIELD.tileWidth + "px Courier New"),
      (CANV.robotText.ctx.textBaseline = "top"),
      (CANV.robotText.ctx.textAlign = "left"),
      (CANV.robotText.ctx.shadowBlur = 2),
      (CANV.robotText.ctx.shadowOffsetX = 2),
      (CANV.robotText.ctx.shadowOffsetY = 2),
      (CANV.robotText.ctx.shadowColor = "black"),
      (CANV.robotText.ctx.fillStyle = "antiquewhite"),
      CANV.robotText.clear(),
      RTIMER.pageTime &&
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
        ),
      !t)
    )
      return !0;
    if ((Timer.initRobot(), "levelSelect" === ROBOT.oldMode))
      (TIMER.grey = TIMER.greyMax),
        (document.getElementById("greyoverlay").style.opacity = 0.75),
        (document.getElementById("greyoverlay").style.visibility = "visible"),
        (ROBOT.currSpeech = 0),
        (ROBOT.currName = "intro" + String(e)),
        RobotSpeech.grab(ROBOT.currName, ROBOT.currSpeech);
    else if ("constructing" === ROBOT.oldMode)
      (TIMER.grey = TIMER.greyMax),
        (document.getElementById("greyoverlay").style.opacity = 0.75),
        (document.getElementById("greyoverlay").style.visibility = "visible"),
        RobotSpeech.grab(SCENARIO.name, 0);
    else if ("finished" === ROBOT.oldMode)
      if (SCENARIO.starred) {
        var a = RobotSpeech.grab(SCENARIO.name, 2, !0);
        a
          ? RobotSpeech.grab(SCENARIO.name, 2)
          : RobotSpeech.grab(SCENARIO.name, 1);
      } else RobotSpeech.grab(SCENARIO.name, 1);
    return !0;
  }
  static levelSelect() {
    (TIMER.grey = TIMER.greyMax),
      (document.getElementById("greyoverlay").style.visibility = "visible"),
      (document.getElementById("greyoverlay").style.opacity =
        (TIMER.grey / TIMER.greyMax) * 0.75),
      (FIELD.leftPad0 = FIELD.tileWidth / 4),
      (FIELD.topPad0 = FIELD.tileHeight / 8),
      (FIELD.leftPad = FIELD.tileWidth / 4),
      (FIELD.topPad = FIELD.tileHeight / 8),
      (FIELD.leftMargin = FIELD.tileWidth / 4),
      (FIELD.topMargin = FIELD.tileHeight / 4),
      (FIELD.totWidth = 31 * FIELD.tileWidth),
      (FIELD.totHeight = 15 * FIELD.tileHeight),
      (FIELD.selBoxW = 8.5 * FIELD.tileWidth),
      (FIELD.selBoxH = 13 * FIELD.tileHeight),
      (FIELD.selBoxM = FIELD.tileWidth / 2),
      Canvs.deactivateAll(CANV),
      CANV.selectAward.activate(),
      CANV.selectOverlay.activate(),
      CANV.select.activate(),
      CANV.selectBase.activate(),
      CANV.selectText.activate(),
      CANV.selectButtons.activate(),
      CANV.debug.activate(),
      CANV.FPS.activate(),
      CANV.interface.activate(),
      CANV.toggles.activate(),
      Helper.drawToggles(),
      Svgs.deactivateAll(SVG),
      SVG.select.activate(),
      OPTS.fancyGraphics &&
        OPTS.fancyFilters &&
        (SVG.tiledI.activate(), SVG.tiledJ.activate(), SVG.tiledK.activate()),
      (OVERLAY.scale = (48 / FIELD.tileWidth) * 8),
      (OVERLAY.margin = FIELD.tileWidth / 3),
      (OVERLAY.border = FIELD.tileWidth / 5.5),
      (SCENARIO.yPad = (7 * FIELD.tileHeight) / 8),
      (SCENARIO.yPad2 = (8 * FIELD.tileHeight) / 16),
      (INPUTS.mousemove = 0),
      (INPUTS.mousedown = 0),
      (INPUTS.mouseup = 0),
      (INPUTS.wheel = 0),
      (INPUTS.keydown = 0),
      (INPUTS.resize = 0),
      (STATE.selected = { type: "none", i0: -1, j0: -1, k0: -1 }),
      (STATE.under = { type: "none", i0: -1, j0: -1, k0: -1 }),
      (STATE.grab = { type: "none", i0: -1, j0: -1, k0: -1 }),
      Overlay.createSelect(CANV.selectOverlay.ctx),
      (TIMER.timePerTick = 1500),
      SELECTOR.unlockCheck(),
      SELECTOR.initialize(),
      SELECTOR.drawBase(CANV.selectBase),
      SELECTOR.draw(CANV.select, CANV.selectText),
      SELECTOR.drawText(CANV.selectText),
      PopWindow.reset(),
      (POPWINDOW.movableWindow.style.display = "none"),
      (POPWINDOW.isOpen = !1),
      (POPWINDOW.isHover = 0);
    for (var e = [1, 2, 3, 6, 8], t = 0; t < e.length; t++) {
      var i = LEVELS.unlocked[e[t]],
        a = FIELD.availableBriefs[t];
      if (i && !a)
        return (FIELD.availableBriefs[t] = 1), void (FIELD.neededBrief = t);
    }
    if (FIELD.totComplete >= LEVELS.numStandard - 5) {
      if (!FIELD.availableBriefs[5])
        return (FIELD.availableBriefs[5] = 1), void (FIELD.neededBrief = 5);
    } else FIELD.availableBriefs[5] = 0;
    if (FIELD.totComplete + FIELD.totStar === 2 * LEVELS.numStandard) {
      if (!FIELD.availableBriefs[6])
        return (FIELD.availableBriefs[6] = 1), void (FIELD.neededBrief = 6);
    } else FIELD.availableBriefs[6] = 0;
    FIELD.neededBrief = -1;
  }
  static refresh() {
    var e = "constructing" === STATE.mode;
    Ticker.draw(
      CANV.ticker,
      FIELD.tileWidth / 6,
      -FIELD.tileWidth / 6,
      (2 * FIELD.tileWidth) / 3,
      (4 * FIELD.tileWidth) / 3,
      e,
    ),
      (FIELD.menu.rows = SCENARIO.menuGrey.length),
      CANV.menu.clear(),
      CANV.menuText.clear(),
      Menu.resize(),
      "constructing" === STATE.mode
        ? (MENU.closure =
            Math.max(
              0,
              Math.min(
                1,
                (TIMER.construct - 0.2 * TIMER.constructMax) /
                  (0.8 * TIMER.constructMax),
              ),
            ) ** 2)
        : (MENU.closure = 1),
      MENU.draw(CANV.menu, CANV.menuText);
    for (var t = MENU.buttons.length, i = 0; i < t; i++) {
      var a = MENU.buttons[i];
      a.isGrey = SCENARIO.menuGrey[a.j0][a.i0];
    }
    Overlay.createRightGrill(CANV.overlayRight.ctx),
      Overlay.createLeftGrill(CANV.overlayLeft.ctx),
      Overlay.createBottomGrill(CANV.overlayBottom.ctx),
      Overlay.create(CANV.overlay.ctx),
      Overlay.createAnalysis(
        CANV.analysisOverlay.ctx,
        CANV.analysisOverlay.w0,
        CANV.analysisOverlay.h0,
      ),
      Overlay.createMenu(
        CANV.menuOverlay.ctx,
        CANV.menuOverlay.w0,
        CANV.menuOverlay.h0,
        CANV.menuBack.ctx,
        CANV.menuBack.w0,
        CANV.menuBack.h0,
      ),
      Overlay.createInstruct(
        CANV.scenarioOverlay.ctx,
        CANV.scenarioOverlay.w0,
        CANV.scenarioOverlay.h0,
      ),
      Overlay.createScenarioNew(
        CANV.scenario.ctx,
        CANV.scenario.w0,
        CANV.scenario.h0,
      ),
      Overlay.createInstruct(
        CANV.scenarioMask.ctx,
        CANV.scenarioMask.w0,
        CANV.scenarioMask.h0,
        !0,
      ),
      Tooltip.draw(),
      CANV.menu2.clear(),
      CTRLMENU.drawControl(CANV.menu2),
      Score.drawBase(CANV.scoreBase, !0),
      Score.draw(CANV.score, CANV.menuText),
      CANV.baseWires.clear(),
      "constructing" === STATE.mode
        ? CANV.baseWires.clear()
        : Render.boardWires(IBOARD, CANV.baseWires.ctx),
      POPWINDOW.isOpen && (POPWINDOW.movableWindow.style.display = "block"),
      Blueprint.draw();
  }
  static translate() {
    var e = FIELD.menu.cols,
      t = FIELD.menu.rows;
    (FIELD.menu = {
      x0: FIELD.leftPad + (FIELD.cols + 1) * FIELD.tileWidth + FIELD.midPad,
      y0: FIELD.topPad,
      pad: FIELD.tileWidth / 4,
      cols: e,
      rows: t,
      topPad: FIELD.tileHeight,
    }),
      (FIELD.menu2 = {
        x0: FIELD.leftPad + (FIELD.cols / 2 - 2) * FIELD.tileWidth,
        y0: FIELD.topPad + (FIELD.rows - 0.4) * FIELD.tileHeight,
      }),
      (FIELD.totWidth =
        FIELD.leftPad +
        FIELD.tileWidth * (FIELD.cols + 1) +
        FIELD.midPad +
        (FIELD.menu.cols + 1) * (FIELD.tileWidth + FIELD.menu.pad)),
      (FIELD.totHeight = FIELD.topPad + FIELD.tileHeight * (FIELD.rows + 1)),
      (FIELD.midWidth =
        FIELD.leftPad + FIELD.tileWidth * (FIELD.cols + 1) + FIELD.midPad),
      (FIELD.midHeight = FIELD.topPad + FIELD.menuHeight + FIELD.divPad),
      (FIELD.scoreHeight = FIELD.totHeight - FIELD.midHeight),
      (FIELD.analysisLeft =
        FIELD.leftPad +
        FIELD.tileWidth * (FIELD.cols + 1) -
        FIELD.tileWidth / 2),
      (FIELD.analysisWidth = FIELD.menuWidth),
      Canvs.translateAll(CANV),
      Svgs.translateAll(SVG);
  }
}
