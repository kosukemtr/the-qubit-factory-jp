class InitScenario {
  static load(e, t = !1) {
    (STATE.mode = "constructing"),
      (STATE.state = "free"),
      (STATE.under = { type: "none", i0: -1, j0: -1, k0: -1 }),
      (FIELD.cols = 19),
      (FIELD.rows = 14),
      (FIELD.topEntry = FIELD.rows / 2 - 2),
      (FIELD.bottomEntry = FIELD.rows / 2),
      (FIELD.entryPoints = [
        5 * FIELD.cols,
        8 * FIELD.cols,
        6 * FIELD.cols - 1,
      ]),
      (FIELD.maxBonusTiles = 2),
      (FIELD.lastLoc = "none"),
      (FIELD.cameraX = 0),
      (FIELD.cameraY = 0),
      (FIELD.channels = [0, 0, 0, 0, 0, 0]),
      (FIELD.channelsTrig = [0, 0, 0, 0, 0, 0]),
      (SCENARIO.name = e),
      (SCENARIO.success = 0),
      (SCENARIO.failure = 0),
      (SCENARIO.victory = -1),
      (SCENARIO.successful = 0),
      (SCENARIO.victoryCond = 0),
      (SCENARIO.text0 = 0),
      (SCENARIO.text1 = 0),
      (SCENARIO.repetitions = 1),
      (SCENARIO.device = 0),
      (SCENARIO.repSuccess = 0),
      (SCENARIO.disableOverlay = !1),
      (SCENARIO.archive = 0),
      (SCENARIO.lastWasSuccess = !1),
      (PERF.otherTot = 0),
      (PERF.loopTot = 0),
      (PERF.renderTot = 0),
      (PERF.otherMid = 0),
      (PERF.loopMid = 0),
      (PERF.renderMid = 0),
      (PERF.other = 0),
      (PERF.loop = 0),
      (PERF.render = 0),
      (ANALYSIS.last = 0),
      (ANALYSIS.openAmount = 0),
      (ANALYSIS.isOpening = !1),
      (ANALYSIS.openSpeed = 0.05),
      (ANALYSIS.openTrig = 1),
      (ANALYSIS.gateProbs = [0, 0, 0, 0]),
      (ANALYSIS.probs = 0),
      (ANALYSIS.bonusTiles = 0),
      (ANALYSIS.bonusOpen = 0),
      (ANALYSIS.highlight = new Array(4 + FIELD.maxBonusTiles).fill(0)),
      (SEL_STYLES.color = "#7ab97a"),
      (SEL_STYLES.color1 = "forestgreen"),
      (SEL_STYLES.color2 = "lemonchiffon"),
      (SEL_STYLES.color4 = "#7ab4b9"),
      (SEL_STYLES.color5 = "#b9827a"),
      (SEL_STYLES.lineGap = FIELD.tileWidth / 12),
      (SEL_STYLES.lineDash = FIELD.tileWidth / 12),
      (SEL_STYLES.handleTol = 1.2),
      (TUTORIAL.leftPad = 4 * FIELD.tileWidth),
      (TUTORIAL.topPad = 4 * FIELD.tileHeight),
      (TUTORIAL.boxHeight = 6 * FIELD.tileHeight),
      (TUTORIAL.margin = FIELD.tileWidth / 3),
      (TUTORIAL.show = !1),
      (OPTS.basis = "natural"),
      (OPTS.displayBoard = !0),
      (DEBUG.show = !1),
      FIELD.forceSingle ||
        (LEVELS.names.indexOf(e) >= 0 &&
          0 === STATE.profile &&
          ((STATE.blueprint = PERSIST0[e].currblue),
          (BLUEPRINT.selected = STATE.blueprint),
          (BLUEPRINT.lastSelected = STATE.blueprint)));
    var i = InitScenario.router(e, t, !1);
    if (!i) {
      (IBOARD = new Board(CANV.interface.ctx, FIELD.cols, FIELD.rows)),
        LevelConsts(e);
      var a = LevelGates(e, t);
      IBOARD.setAllBits(a.allBits, a.allQubits, a.entGroups),
        FIELD.forceSingle
          ? ((IBOARD._tiles = [...INTERRUPTS.data[STATE.blueprint].tiles]),
            IBOARD.setAllGates(
              JSON.parse(
                JSON.stringify(INTERRUPTS.data[STATE.blueprint].gates),
              ),
            ))
          : ((IBOARD._tiles = [...PERSIST0[e].tiles[STATE.blueprint]]),
            IBOARD.setAllGates(
              JSON.parse(JSON.stringify(PERSIST0[e].gates[STATE.blueprint])),
            )),
        LevelRefresh(e, IBOARD),
        UNDOREDO.reset();
    }
    if (!(LEVELS.names.indexOf(e) < 0)) {
      FIELD.channelsDir = [...SCENARIO.channelsDir];
      for (var r = 0; r < 6; r++)
        (FIELD.channels[r] = Math.round((SCENARIO.channelsDir[r] + 1) / 2)),
          (FIELD.channelsTrig[r] = Math.round(
            (SCENARIO.channelsDir[r] + 1) / 2,
          ));
      if (
        (CANV.overlayLeft.clear(),
        Overlay.createLeftGrill(CANV.overlayLeft.ctx),
        CANV.overlayRight.clear(),
        Overlay.createRightGrill(CANV.overlayRight.ctx),
        CANV.overlayBottom.clear(),
        Overlay.createBottomGrill(CANV.overlayBottom.ctx),
        Blueprint.draw(),
        !PERSIST0[SCENARIO.name].briefed)
      ) {
        var s = LEVELS.names.indexOf(SCENARIO.name);
        TUTORIAL.default = LEVELS.briefs[s];
      }
    }
  }
  static router(e, t, i) {
    return "levelSelect" === e
      ? (LevelSelect(), !0)
      : "title" === e && (LevelTitle(), !0);
  }
  static loadAll() {
    for (var e = 0; e < LEVELS.num; e++) {
      var t = Storage.load(PERSIST0, LEVELS.names[e], 0);
      t ||
        ((PERSIST0[LEVELS.names[e]] = {}),
        (PERSIST0[LEVELS.names[e]].star = !1),
        (PERSIST0[LEVELS.names[e]].complete = !1),
        (PERSIST0[LEVELS.names[e]].available = !0),
        LEVELS.briefs[e] >= 0
          ? (PERSIST0[LEVELS.names[e]].briefed = !1)
          : (PERSIST0[LEVELS.names[e]].briefed = !0),
        (PERSIST0[LEVELS.names[e]].hasRobot = !1),
        (PERSIST0[LEVELS.names[e]].currblue = 1),
        (PERSIST0[LEVELS.names[e]].tiles = [[], [], []]),
        (PERSIST0[LEVELS.names[e]].gates = [[], [], []]));
    }
    t = Storage.loadGeneric();
    t
      ? (FIELD.isCleanSlate = !1)
      : ((FIELD.isCleanSlate = !0),
        (PERSIST0.generic = {}),
        (PERSIST0.generic.music = OPTS.music),
        (PERSIST0.generic.sfx = OPTS.sfx),
        (PERSIST0.generic.musicOn = OPTS.musicOn),
        (PERSIST0.generic.sfxOn = OPTS.sfxOn),
        (PERSIST0.generic.nameTag = Helper.generateName()),
        (PERSIST0.generic.disableBriefs = FIELD.disableBriefs),
        (PERSIST0.generic.fancyGraphics = OPTS.fancyGraphics),
        (PERSIST0.generic.fancyFilters = OPTS.fancyFilters),
        (PERSIST0.generic.autoResize = OPTS.autoResize),
        (PERSIST0.generic.availableBriefs = [0, 0, 0, 0, 0, 0, 0]),
        localStorage.setItem("generic", JSON.stringify(PERSIST0.generic))),
      (FIELD.availableBriefs = PERSIST0.generic.availableBriefs);
    for (e = 0; e < LEVELS.num; e++) {
      var i = LEVELS.names[e];
      STATE.blueprint = 0;
      var a = LevelGates(LEVELS.names[e], !1);
      PERSIST0[i].tiles[0].length < 1 &&
        ((PERSIST0[i].tiles[0] = a.tiles), (PERSIST0[i].gates[0] = a.allGates)),
        (STATE.blueprint = 1);
      a = LevelGates(LEVELS.names[e], !1);
      PERSIST0[i].tiles[1].length < 1 &&
        ((PERSIST0[i].tiles[1] = a.tiles), (PERSIST0[i].gates[1] = a.allGates)),
        (STATE.blueprint = 2);
      a = LevelGates(LEVELS.names[e], !1);
      PERSIST0[i].tiles[2].length < 1 &&
        ((PERSIST0[i].tiles[2] = a.tiles), (PERSIST0[i].gates[2] = a.allGates));
    }
  }
}
