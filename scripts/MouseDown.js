class MouseDown {
  static main(e) {
    (FIELD.isBlur = !1),
      (STATE.isScrollManip = !1),
      (STATE.pos = ControlState.pos(e)),
      STATE.checkUnder(),
      0 !== e.button ? 2 !== e.button || MouseDown.right(e) : MouseDown.left(e);
  }
  static right(e) {
    if ("ctrlbutton" !== STATE.under.type)
      if (MENU.selected >= 0) MENU.setSelected(-1, -1), (STATE.state = "free");
      else if ("erasing" === STATE.state) STATE.state = "free";
      else if ("gatemanip" === STATE.state)
        (STATE.state = "free"),
          (STATE.grab = { type: "free", i0: -1, j0: -1, k0: -1 });
      else {
        if ("gatedrag" === STATE.state) return;
        if ("constructing" === STATE.mode)
          return (STATE.underLast.type = "none"), void MouseDown.beginDestroy();
      }
    else MouseDown.clickCtrl(e, !0);
  }
  static beginDestroy() {
    (STATE.state = "destroying"),
      (STATE.grab = { type: "none", i0: 0, j0: 0, k0: 0 });
    var e = STATE.under.i0 + STATE.under.j0 * FIELD.cols;
    if (
      "boardtile" === STATE.under.type &&
      SCENARIO.editable[e] > 0 &&
      2 !== SCENARIO.editable[e]
    ) {
      var t = IBOARD.getTile(STATE.under.i0, STATE.under.j0);
      t > -1 && SFX.destroy.play(),
        IBOARD.clearTile(STATE.under.i0, STATE.under.j0);
    }
  }
  static left(e) {
    STATE.pos.x, STATE.pos.y;
    if ("constructing" === STATE.mode && "none" === STATE.under.type)
      return (
        (STATE.state = "free"),
        (STATE.grab = { type: "none", i0: 0, j0: 0, k0: 0 }),
        void MENU.setSelected(-1, -1)
      );
    if ("escbutton" === STATE.under.type)
      return (
        0 === STATE.under.i0
          ? Helper.esc()
          : 1 === STATE.under.i0 ||
            (2 === STATE.under.i0 && (OPTS.sfxOn = !OPTS.sfxOn)),
        void Helper.drawToggles()
      );
    if ("robbutton" !== STATE.under.type) {
      if ("journalButton" === STATE.under.type)
        return (
          SFX.click.play(),
          PopWindow.setText(),
          (POPWINDOW.movableWindow.style.display = "block"),
          (POPWINDOW.isOpen = !0),
          void (POPWINDOW.text.scrollTop = 0)
        );
      if (
        ("constructing" === STATE.mode &&
          "eraser" === STATE.under.type &&
          (SFX.click2.play(),
          (STATE.state = "erasing"),
          (STATE.grab = { type: "free", i0: -1, j0: -1, k0: -1 }),
          MENU.setSelected(-1, -1)),
        "constructing" === STATE.mode &&
          "erasing" === STATE.state &&
          "boardtile" === STATE.under.type)
      )
        return (STATE.underLast.type = "none"), void MouseDown.beginDestroy();
      if (
        "constructing" !== STATE.mode ||
        "letterButton" !== STATE.under.type
      ) {
        if ("levelSelect" === STATE.mode) {
          if ("selectButton" === STATE.under.type)
            return (
              (FIELD.neededBrief = STATE.under.i0), void (FIELD.forced = !0)
            );
          if ("token" === STATE.under.type) {
            Storage.saveGeneric(),
              SFX.select2.play(),
              (TIMER.grey = TIMER.greyMax),
              (document.getElementById("greyoverlay").style.opacity = 0.75),
              (document.getElementById("greyoverlay").style.visibility =
                "visible");
            var t = STATE.under.k0;
            (SCENARIO.whichOne = t.link),
              (t.isHover = !1),
              console.log(t.link),
              InitScenario.load(t.link, !1);
            var i = !0;
            return (
              RobotSpeech.grab(SCENARIO.whichOne, 0) || (i = !1),
              PERSIST0[SCENARIO.whichOne].hasRobot && (i = !1),
              FIELD.disableBriefs && (i = !1),
              void (
                i &&
                ((PERSIST0[SCENARIO.whichOne].hasRobot = !0),
                Render.boardSingle(IBOARD),
                (ROBOT.oldMode = "constructing"),
                (STATE.mode = "robot"),
                ResetConsts.robot())
              )
            );
          }
        }
        if ("tutorial" !== STATE.mode)
          if ("title" !== STATE.mode) {
            if ("finished" === STATE.mode) {
              if ("nextbutton" === STATE.under.type && 0 === STATE.under.k0)
                return void MouseDown.resetFromFinished(e);
              if ("nextbutton" === STATE.under.type && 1 === STATE.under.k0)
                return SFX.select2.play(), void Helper.esc();
            }
            if ("forwardTrans" !== STATE.mode && "backwardTrans" !== STATE.mode)
              if (
                "constructing" !== STATE.mode ||
                "blueprint" !== STATE.under.type
              ) {
                if ("constructing" === STATE.mode) {
                  if ("undobutton" === STATE.under.type)
                    return void UNDOREDO.retreat();
                  if ("redobutton" === STATE.under.type)
                    return void UNDOREDO.advance();
                }
                if ("ctrlbutton" !== STATE.under.type) {
                  if (
                    "constructing" === STATE.mode &&
                    "questionicon" === STATE.under.type
                  ) {
                    SFX.click.play();
                    for (
                      var a = MENU.buttons[MENU.selected],
                        r = a.tile.name,
                        s = 0;
                      s < MDATA.tutsLink.length;
                      s++
                    )
                      if (MDATA.tutsLink[s].indexOf(r) >= 0)
                        return (
                          (TUTORIAL.current = s),
                          (TUTORIAL.oldMode = STATE.mode),
                          (TUTORIAL.channelsCol = [...SCENARIO.channelsCol]),
                          (STATE.mode = "tutorial"),
                          ResetConsts.tutorial(),
                          void (TUTORIAL.show = !0)
                        );
                  }
                  if (
                    "constructing" !== STATE.mode ||
                    "menubutton" !== STATE.under.type
                  ) {
                    if ("constructing" === STATE.mode) {
                      if ("qubiting" === STATE.state) {
                        if (MouseDown.clickAnalysis(e)) return;
                        "boardtile" === STATE.under.type &&
                          MouseDown.clickFreeBoard(e);
                      } else {
                        if ("destroying" === STATE.state)
                          return void (STATE.state = "free");
                        if ("gatemanip" === STATE.state)
                          return "qubit" === STATE.under.type
                            ? void MouseDown.clickQubit(e)
                            : void MouseDown.clickGateManip(e);
                        if (
                          "free" === STATE.state &&
                          "qubit" === STATE.under.type
                        )
                          return void MouseDown.clickQubit(e);
                        if (
                          "free" === STATE.state &&
                          "boardtile" === STATE.under.type &&
                          e.altKey
                        )
                          return (
                            SFX.click2.play(),
                            void MouseDown.quickToggleSwitch(e)
                          );
                        if (
                          "free" === STATE.state &&
                          "boardtile" === STATE.under.type
                        )
                          return void MouseDown.clickFreeBoard(e);
                        if ("placing" === STATE.state) {
                          if ("boardtile" === STATE.under.type)
                            return void MouseDown.clickPlace(e);
                        } else if ("multiplace" === STATE.state)
                          return (
                            COPYBUFFER.place(),
                            COPYBUFFER.reset(),
                            void (STATE.state = "free")
                          );
                      }
                      if (MouseDown.clickQubit(e)) return;
                    }
                    if (["running", "paused"].indexOf(STATE.mode) >= 0) {
                      if (
                        "qubiting" === STATE.state &&
                        MouseDown.clickAnalysis(e)
                      )
                        return;
                      if (MouseDown.clickQubit(e)) return;
                      return (
                        (STATE.state = "free"),
                        void (STATE.grab = {
                          type: "none",
                          i0: 0,
                          j0: 0,
                          k0: 0,
                        })
                      );
                    }
                  } else {
                    a = MENU.getButton(STATE.under.i0, STATE.under.j0);
                    -1 !== a &&
                      (a.isGrey ||
                        (SFX.click2.play(),
                        (STATE.state = "placing"),
                        (MENU.selProperties = JSON.parse(
                          JSON.stringify(
                            MENU.getButton(STATE.under.i0, STATE.under.j0)
                              .defaultProperties,
                          ),
                        )),
                        MENU.setSelected(STATE.under.i0, STATE.under.j0)));
                  }
                } else MouseDown.clickCtrl(e, !1);
              } else if (
                ((STATE.selected = { type: "none", i0: -1, j0: -1, k0: -1 }),
                (STATE.grab = { type: "none", i0: -1, j0: -1, k0: -1 }),
                STATE.blueprint !== STATE.under.i0)
              )
                if ((SFX.click.play(), FIELD.forceSingle)) {
                  (INTERRUPTS.data[STATE.blueprint].tiles = [...IBOARD._tiles]),
                    (INTERRUPTS.data[STATE.blueprint].gates =
                      IBOARD.getAllGates());
                  var o = INTERRUPTS.data[STATE.blueprint].tag;
                  (STATE.blueprint = STATE.under.i0),
                    (SCENARIO.whichOne = INTERRUPTS.data[STATE.blueprint].tag),
                    o !== SCENARIO.whichOne &&
                      InitScenario.load(SCENARIO.whichOne, !1),
                    (IBOARD = IBOARD.copyNoGates()),
                    IBOARD.setAllGates(
                      JSON.parse(
                        JSON.stringify(INTERRUPTS.data[STATE.blueprint].gates),
                      ),
                    ),
                    (IBOARD._tiles = [
                      ...INTERRUPTS.data[STATE.blueprint].tiles,
                    ]),
                    LevelRefresh(SCENARIO.name, IBOARD),
                    UNDOREDO.reset(!0),
                    Blueprint.draw();
                } else
                  (PERSIST0[SCENARIO.name].tiles[STATE.blueprint] = [
                    ...IBOARD._tiles,
                  ]),
                    (PERSIST0[SCENARIO.name].gates[STATE.blueprint] =
                      IBOARD.getAllGates()),
                    (STATE.blueprint = STATE.under.i0),
                    (PERSIST0[SCENARIO.name].currblue = STATE.under.i0),
                    (IBOARD = IBOARD.copyNoGates()),
                    IBOARD.setAllGates(
                      JSON.parse(
                        JSON.stringify(
                          PERSIST0[SCENARIO.name].gates[STATE.blueprint],
                        ),
                      ),
                    ),
                    (IBOARD._tiles = [
                      ...PERSIST0[SCENARIO.name].tiles[STATE.blueprint],
                    ]),
                    LevelRefresh(SCENARIO.name, IBOARD),
                    UNDOREDO.reset(!0),
                    Blueprint.draw();
          } else
            "optionbut" === STATE.under.type
              ? 0 === STATE.under.i0
                ? ConfirmationBox.openTitle()
                : 1 === STATE.under.i0 && Helper.esc()
              : "titlebutton" === STATE.under.type
                ? 0 === STATE.under.i0
                  ? ((TIMER.grey = TIMER.greyMax),
                    (document.getElementById("greyoverlay").style.opacity =
                      0.75),
                    (document.getElementById("greyoverlay").style.visibility =
                      "visible"),
                    SFX.select2.play(),
                    (SCENARIO.whichOne = SCENARIO.default),
                    (SCENARIO.solution = !1),
                    InitScenario.load(SCENARIO.whichOne, SCENARIO.solution),
                    Storage.saveGeneric())
                  : 1 === STATE.under.i0 &&
                    (SFX.select2.play(),
                    (STATE.state = "options"),
                    Overlay.createTitleOptions(CANV.titleAbout.ctx),
                    (STATE.grab = { type: "none", i0: -1, j0: -1, k0: -1 }))
                : "titleslider" === STATE.under.type
                  ? (0 === STATE.under.i0
                      ? ((OPTS.music = Math.min(
                          Math.max(0, STATE.under.j0 / 100),
                          1,
                        )),
                        (SFX.background.volume = OPTS.music),
                        (STATE.grab.type = "titleslider"),
                        (STATE.grab.i0 = 0),
                        (PERSIST0.generic.music = OPTS.music))
                      : 1 === STATE.under.i0 &&
                        ((OPTS.sfx = Math.min(
                          Math.max(0, STATE.under.j0 / 100),
                          1,
                        )),
                        (STATE.grab.type = "titleslider"),
                        (STATE.grab.i0 = 1),
                        (PERSIST0.generic.sfx = OPTS.sfx)),
                    Storage.saveGeneric())
                  : "titleoption" === STATE.under.type &&
                    (0 === STATE.under.j0
                      ? 0 === STATE.under.i0
                        ? ((OPTS.autoResize = !0),
                          (document.body.style.overflow = "hidden"),
                          (PERSIST0.generic.autoResize = OPTS.autoResize),
                          (TIMER.resize = 1))
                        : 1 === STATE.under.i0 &&
                          ((OPTS.autoResize = !1),
                          (PERSIST0.generic.autoResize = OPTS.autoResize))
                      : 1 === STATE.under.j0
                        ? (0 === STATE.under.i0
                            ? ((OPTS.fancyGraphics = !0),
                              (OPTS.fancyFilters = !0))
                            : 1 === STATE.under.i0
                              ? ((OPTS.fancyGraphics = !0),
                                (OPTS.fancyFilters = !1))
                              : 2 === STATE.under.i0 &&
                                ((OPTS.fancyGraphics = !1),
                                (OPTS.fancyFilters = !1)),
                          (PERSIST0.generic.fancyGraphics = OPTS.fancyGraphics),
                          (PERSIST0.generic.fancyFilters = OPTS.fancyFilters),
                          Graphics.init(),
                          ResetConsts.picky())
                        : 2 === STATE.under.j0 &&
                          (0 === STATE.under.i0
                            ? ((FIELD.disableBriefs = !1),
                              (PERSIST0.generic.disableBriefs =
                                FIELD.disableBriefs))
                            : 1 === STATE.under.i0 &&
                              ((FIELD.disableBriefs = !0),
                              (PERSIST0.generic.disableBriefs =
                                FIELD.disableBriefs))),
                    Storage.saveGeneric());
        else TutControl.click();
      } else {
        if (0 === STATE.under.i0)
          return (
            SFX.click.play(),
            (TUTORIAL.current = TUTORIAL.default),
            (TUTORIAL.oldMode = STATE.mode),
            (TUTORIAL.channelsCol = [...SCENARIO.channelsCol]),
            (STATE.mode = "tutorial"),
            ResetConsts.tutorial(),
            void (TUTORIAL.show = !0)
          );
        if (1 === STATE.under.i0) {
          (ROBOT.oldMode = STATE.mode),
            (STATE.mode = "robot"),
            (FIELD.forced = !0),
            (RTIMER.pageTime = 0);
          var n = ResetConsts.robot();
          n
            ? (SFX.click.play(),
              (TIMER.grey = TIMER.greyMax),
              (document.getElementById("greyoverlay").style.opacity = 0.75),
              (document.getElementById("greyoverlay").style.visibility =
                "visible"))
            : SFX.invalid.play();
        } else
          2 === STATE.under.i0
            ? (SFX.click.play(),
              UNDOREDO.add(),
              LevelRefresh(SCENARIO.name, IBOARD))
            : 3 === STATE.under.i0 &&
              (SFX.click.play(),
              (document.getElementById("greyoverlay").style.opacity = 0.75),
              (document.getElementById("greyoverlay").style.visibility =
                "visible"),
              ConfirmationBox.open());
      }
    } else
      0 === STATE.under.i0 && (SFX.click.play(), RobotSpeech.advanceText());
  }
  static clickCtrl(e, t) {
    var i = STATE.under.k0;
    if ("ctrlStart" === i.tileType) {
      if (
        ((STATE.state = "free"),
        (STATE.grab = { type: "none", i0: 0, j0: 0, k0: 0 }),
        "constructing" === STATE.mode)
      ) {
        if (TIMER.construct >= 0) return !0;
        (RANDS.locs = Array.from(RANDS.locs, () =>
          Math.floor(1e5 * Math.random()),
        )),
          FIELD.forceSingle ||
            ((PERSIST0[SCENARIO.name].tiles[STATE.blueprint] = [
              ...IBOARD._tiles,
            ]),
            (PERSIST0[SCENARIO.name].gates[STATE.blueprint] =
              IBOARD.getAllGates()),
            Storage.save(PERSIST0[SCENARIO.name], SCENARIO.name, 0)),
          (TIMER.finishTime = 0),
          (TIMER.shake = 0),
          (STATE.mode = "forwardTrans"),
          (STATE.grab = { type: "none", i0: 0, j0: 0, k0: 0 }),
          (i.transition = { status: !0, start: 0, stop: 1 }),
          i.startAnimation(),
          (TIMER.victoryTick = 99999),
          (SCENARIO.currentRep = 1),
          (SCENARIO.correctReps = 0),
          (SCENARIO.repSuccess = 0),
          (SCENARIO.retard = 0),
          CANV.baseWires.clear(),
          Render.boardWires(IBOARD, CANV.baseWires.ctx);
        var a = CTRLMENU.getNamedButton("ctrlPlay"),
          r = CTRLMENU.getNamedButton("ctrlStep"),
          s = CTRLMENU.getNamedButton("ctrlBack"),
          o = CTRLMENU.getNamedButton("ctrlNorm");
        (a.tileProperties.type = 0),
          (r.tileProperties.type = 0),
          (s.tileProperties.type = 0),
          (o.tileProperties.type = 0),
          a.open(),
          r.open(),
          s.open(),
          o.open(),
          (FIELD.cleanTiles = Helper.countCleanTiles(IBOARD.tiles)),
          SFX.startup.play(),
          (SFX.rightBeeped = !0),
          (SFX.wrongBeeped = !0),
          (SFX.tickBeeped = !1),
          t && (TIMER.timePerTick = 1);
      } else
        "running" === STATE.mode || "paused" === STATE.mode
          ? ((STATE.grab = { type: "none", i0: 0, j0: 0, k0: 0 }),
            (TIMER.timePerTick = TIMER.defaultTimePerTick),
            (TIMER.shake = 0),
            (SCENARIO.currentRep = 1),
            (STATE.mode = "backwardTrans"),
            (STATE.state = "free"),
            (i.transition = { status: !0, start: 1, stop: 0 }),
            i.startAnimation(),
            (TIMER.tickEnd = TIMER.tick),
            TIMER.ratio > 0.5 && (TIMER.tickEnd = TIMER.tick + 1),
            CTRLMENU.getNamedButton("ctrlPlay").close(),
            CTRLMENU.getNamedButton("ctrlStep").close(),
            CTRLMENU.getNamedButton("ctrlBack").close(),
            CTRLMENU.getNamedButton("ctrlNorm").close(),
            SFX.stopdown.play())
          : ("finished" !== STATE.mode && "finished" !== ROBOT.oldMode) ||
            ((i.transition = { status: !0, start: 1, stop: 0 }),
            i.startAnimation(),
            "robot" === STATE.mode && Helper.esc(),
            MouseDown.resetFromFinished(e),
            SFX.stopdown.play());
      return !0;
    }
    if ("ctrlNorm" === i.tileType)
      return (
        i.startAnimation(), (TIMER.timePerTick = TIMER.defaultTimePerTick), !0
      );
    if ("ctrlBack" === i.tileType) {
      if ("finished" === STATE.mode || "finished" === ROBOT.oldMode)
        return (
          "robot" === STATE.mode && Helper.esc(),
          SFX.stopdown.play(),
          void MouseDown.backFromFinished(e)
        );
      if ((i.startAnimation(), "running" === STATE.mode))
        TIMER.timePerTick = Math.min(
          2 * TIMER.timePerTick,
          4 * TIMER.defaultTimePerTick,
        );
      else if ("paused" === STATE.mode && TIMER.boardTime % 1 < 1e-5) {
        var n = Math.max(
          1,
          Math.round(TIMER.defaultTimePerTick / (16 * TIMER.timePerTick)),
        );
        if (0 === RBOARD[Math.max(0, TIMER.tick - n)]) return;
        if (
          ((TIMER.tick = Math.max(0, TIMER.tick - n)),
          (TIMER.boardTime = Math.max(0, TIMER.boardTime - n)),
          "qubit" === STATE.grab.type)
        ) {
          for (
            var l = STATE.grab.k0.id,
              h = RBOARD[TIMER.tick].qubitList,
              d = !1,
              u = 0;
            u < h.length;
            u++
          )
            if (h[u].id === l) {
              (STATE.grab.i0 = h[u].i0),
                (STATE.grab.j0 = h[u].j0),
                (STATE.grab.k0 = h[u]),
                (d = !0);
              break;
            }
          d || (STATE.grab = { type: "none", i0: 0, j0: 0, k0: 0 });
        }
      }
      return !0;
    }
    if ("ctrlStep" === i.tileType)
      return (
        i.startAnimation(),
        "running" === STATE.mode
          ? (TIMER.timePerTick = Math.max(TIMER.timePerTick / 2, 1))
          : "paused" === STATE.mode &&
            ((TIMER.boardTime += 1e-4),
            (RBOARD[TIMER.tick + 1] = RBOARD[TIMER.tick]
              .copy()
              .updateOneStep(TIMER.tick))),
        !0
      );
    if ("ctrlPlay" === i.tileType) {
      i.startAnimation();
      (r = CTRLMENU.getNamedButton("ctrlStep")),
        (s = CTRLMENU.getNamedButton("ctrlBack"));
      return (
        "paused" === STATE.mode
          ? ((SCENARIO.isPaused = !1),
            (RBOARD[TIMER.tick + 1] = RBOARD[TIMER.tick]
              .copy()
              .updateOneStep(TIMER.tick)),
            (i.transition = { status: !0, start: 1, stop: 0 }),
            (r.transition = { status: !0, start: 1, stop: 0 }),
            (s.transition = { status: !0, start: 1, stop: 0 }),
            (STATE.mode = "running"))
          : "running" === STATE.mode &&
            ((SCENARIO.isPaused = !0),
            (i.transition = { status: !0, start: 0, stop: 1 }),
            (r.transition = { status: !0, start: 0, stop: 1 }),
            (s.transition = { status: !0, start: 0, stop: 1 }),
            (STATE.mode = "paused")),
        !0
      );
    }
  }
  static clickAnalysis(e) {
    if ("qubiting" === STATE.state) {
      if ("analysiswindow" === STATE.under.type) return !0;
      if ("analysishighlight" === STATE.under.type)
        return (
          SFX.click2.play(),
          (ANALYSIS.highlight[STATE.under.k0] =
            (ANALYSIS.highlight[STATE.under.k0] + 1) % 3),
          (STATE.pressed = {
            type: "analysisicon",
            i0: TIMER.totalTime,
            j0: 0,
            k0: STATE.under.k0,
          }),
          !0
        );
      if ("analysisgatecontrol" === STATE.under.type)
        return (STATE.state = "analysisgatecontrolling"), !0;
      if ("analysisgate" === STATE.under.type) {
        var t = STATE.grab.k0;
        if (t.entGroup) {
          var i = t.entGroup.qubitList[STATE.under.k0];
          return (
            (STATE.grab = { type: "qubit", i0: i.i0, j0: i.j0, k0: i }),
            i.computeMeasureProb(),
            !0
          );
        }
        return !0;
      }
    }
    return !1;
  }
  static clickQubit(e) {
    if ("qubiticon" === STATE.under.type) {
      var t = STATE.grab.k0;
      return (
        t &&
          (SFX.click2.play(),
          (STATE.pressed = {
            type: "qubiticon",
            i0: TIMER.totalTime,
            j0: 0,
            k0: 0,
          }),
          (t.lockedBasis = !t.lockedBasis)),
        !0
      );
    }
    if ("qubitcontrol" === STATE.under.type)
      return (
        (STATE.state = "qubitbasis"),
        (STATE.grab.type = "qubitcontrol"),
        (STATE.grab.l0 = STATE.under.k0),
        !0
      );
    if ("qubit" === STATE.under.type) {
      t = STATE.under.k0;
      if (!t.isGhost) {
        SFX.click2.play();
        var i = !1,
          a = !1;
        if ("qubiting" === STATE.state) {
          var r = STATE.grab.k0;
          t.id === r.id
            ? ((i = !0), (a = !0))
            : t.entGroup &&
              r.entGroup &&
              t.entGroup.id === r.entGroup.id &&
              (a = !0);
        }
        return (
          i || t.computeMeasureProb(),
          a || (ANALYSIS.highlight = ANALYSIS.highlight.fill(0)),
          (STATE.state = "qubiting"),
          (STATE.under.k0.isHovered = !1),
          (STATE.grab = {
            type: STATE.under.type,
            i0: STATE.under.i0,
            j0: STATE.under.j0,
            k0: STATE.under.k0,
          }),
          !0
        );
      }
    }
    return !1;
  }
  static clickGateIcon(e) {
    var t = STATE.grab.type;
    if (
      ((STATE.pressed = {
        type: "gateicon",
        i0: TIMER.totalTime,
        j0: 0,
        k0: STATE.under.k0,
      }),
      4 === STATE.under.k0 || 5 === STATE.under.k0)
    ) {
      if ("switch" === t) {
        var i = STATE.grab.k0;
        if (
          (1 === i.state ? (i.rot = 1 - i.rot) : (i.rot = STATE.under.k0 - 4),
          i.rot < 2)
        ) {
          var a = i.orient,
            r = STATE.grab.i0,
            s = STATE.grab.j0;
          0 == a
            ? (s += 1)
            : 1 == a
              ? (r -= 1)
              : 2 == a
                ? (s -= 1)
                : 3 == a && (r += 1),
            IBOARD.setState(r, s, i.rot);
        }
        return;
      }
      var o = STATE.under.k0 - 4,
        n = IBOARD.checkWhichControl(STATE.grab.i0, STATE.grab.j0),
        l = (STATE.grab.k0, STATE.grab.i0),
        h = STATE.grab.j0;
      (r = STATE.grab.i0), (s = STATE.grab.j0);
      0 === n.dir
        ? (r -= 1)
        : 1 === n.dir
          ? (s -= 1)
          : 2 === n.dir
            ? (r += 1)
            : 3 === n.dir && (s += 1);
      var d = IBOARD.getGate(r, s);
      return (
        (d.rot = o),
        IBOARD.setState(l, h, o),
        void (STATE.grab = {
          type: STATE.grab.type,
          i0: l,
          j0: h,
          k0: IBOARD.getGate(l, h, o),
        })
      );
    }
    if (["qCreate", "cCreate"].indexOf(t) >= 0) {
      i = STATE.grab.k0;
      0 === STATE.under.k0
        ? -1 === i.counterMax
          ? (i.counterMax = 9)
          : (i.counterMax -= 1)
        : 1 === STATE.under.k0
          ? 9 === i.counterMax
            ? (i.counterMax = -1)
            : (i.counterMax += 1)
          : "qCreate" === t &&
            2 === STATE.under.k0 &&
            (5 === i.state ? (i.state = 0) : (i.state = 5));
    } else if (["trash"].indexOf(t) >= 0) {
      i = STATE.grab.k0;
      i.state = 1 - i.state;
    } else if (["qFlip"].indexOf(t) >= 0) {
      i = STATE.grab.k0;
      i.state = 1 - i.state;
    } else if (["cInvert"].indexOf(t) >= 0) {
      i = STATE.grab.k0;
      i.rot = 1 - i.rot;
    } else if (["qControl"].indexOf(t) >= 0) {
      i = STATE.grab.k0;
      i.state = 1 - i.state;
      (r = STATE.grab.i0), (s = STATE.grab.j0);
      0 == i.orient
        ? (s += 1)
        : 1 == i.orient
          ? (r -= 1)
          : 2 == i.orient
            ? (s -= 1)
            : 3 == i.orient && (r += 1),
        IBOARD.setState(r, s, i.state);
    } else if (["switch"].indexOf(t) >= 0) {
      i = STATE.grab.k0;
      i.rot = 1 - i.rot;
      (a = i.orient), (r = STATE.grab.i0), (s = STATE.grab.j0);
      0 == a
        ? (s += 1)
        : 1 == a
          ? (r -= 1)
          : 2 == a
            ? (s -= 1)
            : 3 == a && (r += 1),
        IBOARD.setState(r, s, i.rot);
    }
    return t;
  }
  static resetFromFinished(e) {
    (ROBOT.oldMode = "none"),
      (STATE.grab = { type: "none", i0: 0, j0: 0, k0: 0 }),
      (TIMER.timePerTick = TIMER.defaultTimePerTick),
      (TIMER.victoryTick = 9999),
      (TIMER.tickEnd = TIMER.tick),
      (TIMER.shake = 0),
      (TIMER.tick = 0),
      (TIMER.boardTime = 0),
      (FIELD.channelsDir = [...SCENARIO.channelsDir]),
      (STATE.mode = "backwardTrans"),
      (STATE.state = "free"),
      (TIMER.finishTime = TIMER.finishMid);
    var t = CTRLMENU.getNamedButton("ctrlBack");
    t.close();
    var i = CTRLMENU.getNamedButton("ctrlStart");
    i.transition = { status: !0, start: 1, stop: 0 };
  }
  static backFromFinished(e) {
    return (
      (ROBOT.oldMode = "none"),
      (STATE.grab = { type: "none", i0: 0, j0: 0, k0: 0 }),
      (FIELD.channelsDir = [...SCENARIO.channelsDir]),
      (TIMER.shake = 0),
      STATE.under.k0.startAnimation(),
      (STATE.mode = "paused"),
      (TIMER.tick -= 2),
      (TIMER.boardTime = TIMER.tick),
      (TIMER.finishTime = 0),
      (TIMER.timePerTick = TIMER.defaultTimePerTick),
      (TIMER.victoryTick = 9999),
      (STATE.grab = { type: "none", i0: 0, j0: 0, k0: 0 }),
      (SCENARIO.victory = -1),
      CTRLMENU.getNamedButton("ctrlPlay").open(),
      CTRLMENU.getNamedButton("ctrlStep").open(),
      CTRLMENU.getNamedButton("ctrlNorm").open(),
      CANV.victoryBase.clear(),
      CANV.victoryText.clear(),
      Ticker.draw(
        CANV.ticker,
        FIELD.tileWidth / 6,
        -FIELD.tileWidth / 6,
        (2 * FIELD.tileWidth) / 3,
        (4 * FIELD.tileWidth) / 3,
      ),
      (SCENARIO.currentRep -= 1),
      (SCENARIO.correctReps -= SCENARIO.repSuccess),
      !0
    );
  }
  static quickToggleSwitch(e) {
    var t = STATE.under.i0,
      i = STATE.under.j0,
      a = t + i * FIELD.cols,
      r = IBOARD.getGate(t, i, IBOARD.getState(t, i)),
      s = IBOARD.checkControl(t, i, ["switch"]);
    if ("switch" === r.type) {
      if (SCENARIO.editable[a] >= 1 && STATE.under.k0 < 4) {
        r.rot = 1 - r.rot;
        var o = r.orient,
          n = t,
          l = i;
        return (
          0 == o
            ? (l += 1)
            : 1 == o
              ? (n -= 1)
              : 2 == o
                ? (l -= 1)
                : 3 == o && (n += 1),
          IBOARD.setState(n, l, r.rot),
          (STATE.state = "free"),
          void (STATE.grab = { type: "free", i0: -1, j0: -1, k0: -1 })
        );
      }
    } else if (s >= 0 && SCENARIO.editable[a] >= 1) {
      (n = t), (l = i);
      0 == s
        ? (n -= 1)
        : 1 == s
          ? (l -= 1)
          : 2 == s
            ? (n += 1)
            : 3 == s && (l += 1);
      r = IBOARD.getGate(n, l, IBOARD.getState(n, l));
      return (
        (r.rot = 1 - r.rot),
        IBOARD.setState(t, i, r.rot),
        (STATE.state = "free"),
        void (STATE.grab = { type: "free", i0: -1, j0: -1, k0: -1 })
      );
    }
  }
  static clickFreeBoard(e) {
    var t = STATE.under.i0,
      i = STATE.under.j0,
      a = t + i * FIELD.cols,
      r = IBOARD.getGate(t, i, IBOARD.getState(t, i)),
      s = IBOARD.getTile(t, i, IBOARD.getState(t, i)),
      o = Math.floor(s / 20);
    if (!r)
      return e.shiftKey || e.ctrlKey || e.metaKey
        ? (e.shiftKey ? (STATE.isDestroy = !1) : (STATE.isDestroy = !0),
          SFX.click2.play(),
          void (
            SCENARIO.editable[a] >= 1 &&
            ((STATE.state = "premultiplace"),
            (STATE.pressed = { type: "board", i0: t, j0: i, k0: 0 }),
            COPYBUFFER.reset(),
            (COPYBUFFER.w0 = 1),
            (COPYBUFFER.h0 = 1),
            (COPYBUFFER.center = { x: t, y: i }),
            (COPYBUFFER.corner = { xL: t, xR: t, yT: i, yB: i }),
            COPYBUFFER.checkUnder())
          ))
        : 5 === o || [12, 13, 32, 33].includes(s)
          ? SCENARIO.menuGrey && SCENARIO.menuGrey[0][0]
            ? void (STATE.grab = { type: "none", i0: -1, j0: -1, k0: -1 })
            : ((STATE.state = "prewiring"),
              void (STATE.grab = {
                type: o,
                i0: STATE.under.i0,
                j0: STATE.under.j0,
                k0: s,
              }))
          : 0 === o
            ? SCENARIO.menuGrey && SCENARIO.menuGrey[1][0]
              ? void (STATE.grab = { type: "none", i0: -1, j0: -1, k0: -1 })
              : ((STATE.state = "preqwiring"),
                void (STATE.grab = {
                  type: o,
                  i0: STATE.under.i0,
                  j0: STATE.under.j0,
                  k0: s,
                }))
            : 1 === o
              ? SCENARIO.menuGrey && SCENARIO.menuGrey[0][0]
                ? void (STATE.grab = { type: "none", i0: -1, j0: -1, k0: -1 })
                : ((STATE.state = "precwiring"),
                  void (STATE.grab = {
                    type: o,
                    i0: STATE.under.i0,
                    j0: STATE.under.j0,
                    k0: s,
                  }))
              : void (STATE.grab = { type: "none", i0: -1, j0: -1, k0: -1 });
    SFX.click2.play(), (STATE.pressed = { type: "none", i0: 0, j0: 0, k0: 0 });
    var n = !0;
    return (
      SCENARIO.editable[a] < 1 && !1,
      ["sync"].indexOf(r.type) >= 0 && (n = !1),
      e.shiftKey || e.ctrlKey || e.metaKey
        ? (e.shiftKey ? (STATE.isDestroy = !1) : (STATE.isDestroy = !0),
          void (
            SCENARIO.editable[a] >= 1 &&
            ((STATE.state = "premultiplace"),
            (STATE.pressed = { type: "board", i0: t, j0: i, k0: 0 }),
            COPYBUFFER.reset(),
            (COPYBUFFER.w0 = 1),
            (COPYBUFFER.h0 = 1),
            (COPYBUFFER.center = { x: t, y: i }),
            (COPYBUFFER.corner = { xL: t, xR: t, yT: i, yB: i }),
            COPYBUFFER.checkUnder())
          ))
        : n
          ? ((STATE.state = "pregatemanip"),
            void (STATE.grab = {
              type: r.type,
              i0: STATE.under.i0,
              j0: STATE.under.j0,
              k0: r,
            }))
          : void 0
    );
  }
  static clickPlace(e) {
    var t = MENU.buttons[MENU.selected],
      i = "cWire" === t.tile.name || "qWire" === t.tile.name;
    t.defaultProperties;
    if (!i) {
      if (!STATE.validPlacement) return void SFX.invalid.play();
      if ("sync" === t.tile.name) {
        var a = IBOARD.getGate(STATE.under.i0, STATE.under.j0);
        if ("sync" === a.type && a.orient === MENU.selProperties.orient) return;
      }
      var r = JSON.parse(JSON.stringify(MENU.selProperties));
      [
        "cCombine",
        "qCombine",
        "cSplit",
        "cCreate",
        "qCreate",
        "switch",
        "compare",
        "sync",
        "qControl",
        "upgrade",
      ].indexOf(t.tile.name) >= 0
        ? (r.orient = (MENU.selProperties.orient + STATE.extraOrient) % 4)
        : [
            "cInvert",
            "cCompare",
            "cCompare",
            "delay",
            "measure",
            "qFlip",
            "rotate",
          ].indexOf(t.tile.name) >= 0 &&
          (r.orient = (MENU.selProperties.orient + STATE.extraOrient) % 2),
        IBOARD.clearTile(STATE.under.i0, STATE.under.j0, !1);
      var s = new Gate(
        STATE.under.i0,
        STATE.under.j0,
        t.tile.name,
        "free",
        0,
        0,
        0,
        0,
      );
      s.setProperties(r), IBOARD.setGate(s), SFX.wire.play();
      var o = 0,
        n = IBOARD.checkWhichControl(STATE.under.i0, STATE.under.j0);
      if (n.dir >= 0) {
        o = new Gate(
          STATE.under.i0,
          STATE.under.j0,
          t.tile.name,
          "free",
          0,
          0,
          1,
          0,
        );
        if (
          (o.setProperties(JSON.parse(JSON.stringify(r))),
          IBOARD.setGate(o),
          "switch" === n.type)
        ) {
          var l = Helper.coordFromDir(
              { i0: STATE.under.i0, j0: STATE.under.j0 },
              n.dir,
            ),
            h = IBOARD.getGate(l.i1, l.j1);
          IBOARD.setState(STATE.under.i0, STATE.under.j0, h.rot),
            0 === h.rot
              ? "rotate" === o.type
                ? (o.rot = 0)
                : "qFlip" === o.type
                  ? (o.state = 1)
                  : "cInvert" === o.type && (o.rot = 1)
              : "rotate" === s.type
                ? (s.rot = 0)
                : "qFlip" === s.type
                  ? (s.state = 1)
                  : "cInvert" === s.type && (s.rot = 1);
        }
      }
      IBOARD.clearAdjacent(STATE.under.i0, STATE.under.j0);
    }
    if (["cCreate", "qCreate"].indexOf(t.tile.name) >= 0)
      1 === s.state &&
        ("cCreate" === s.type
          ? (s.counterMax = SCENARIO.CINPUTS[s.rot].length)
          : "qCreate" === s.type &&
            (s.counterMax = SCENARIO.QINPUTS[s.rot].length));
    else if (["switch", "qControl"].indexOf(t.tile.name) >= 0) {
      var d = MENU.selProperties.orient,
        u = STATE.under.i0,
        c = STATE.under.j0;
      0 == d
        ? (c += 1)
        : 1 == d
          ? (u -= 1)
          : 2 == d
            ? (c -= 1)
            : 3 == d && (u += 1);
      var I = IBOARD.getGate(u, c);
      if (I) {
        var E = I.copy();
        if (((E.layer = 1), IBOARD.setGate(E), "switch" === t.tile.name)) {
          var S = s.rot;
          IBOARD.setState(u, c, S),
            1 === S
              ? "rotate" === I.type
                ? (I.rot = 0)
                : "qFlip" === I.type
                  ? (I.state = 1)
                  : "cInvert" === I.type && (I.rot = 1 - I.rot)
              : 0 === S &&
                ("rotate" === E.type
                  ? (E.rot = 0)
                  : "qFlip" === E.type
                    ? (E.state = 1)
                    : "cInvert" === E.type && (E.rot = 1 - E.rot));
        }
      }
    } else if (["sync"].indexOf(t.tile.name) >= 0) {
      (d = MENU.selProperties.orient),
        (u = STATE.under.i0),
        (c = STATE.under.j0);
      0 == d
        ? (c += 1)
        : 1 == d
          ? (u -= 1)
          : 2 == d
            ? (c -= 1)
            : 3 == d && (u += 1),
        IBOARD.clearTile(u, c, !1),
        IBOARD.setGate(new Gate(u, c, "sync", "free", (d + 2) % 4, 0, 0)),
        IBOARD.clearAdjacent(u, c);
    }
    if ((UNDOREDO.add(), "cWire" === t.tile.name)) {
      if (IBOARD.getTile(STATE.under.i0, STATE.under.j0) < 0) {
        var f = STATE.under.i0 + STATE.under.j0 * FIELD.cols;
        1 === SCENARIO.editable[f] &&
          (SFX.wire.play(), IBOARD.setTile(STATE.under.i0, STATE.under.j0, 20));
      }
      (STATE.state = "cwiring"),
        (STATE.grab = {
          type: STATE.under.type,
          i0: STATE.under.i0,
          j0: STATE.under.j0,
          k0: STATE.under.k0,
        });
    } else if ("qWire" === t.tile.name) {
      if (IBOARD.getTile(STATE.under.i0, STATE.under.j0) < 0) {
        f = STATE.under.i0 + STATE.under.j0 * FIELD.cols;
        1 === SCENARIO.editable[f] &&
          (SFX.wire.play(), IBOARD.setTile(STATE.under.i0, STATE.under.j0, 0));
      }
      (STATE.state = "qwiring"),
        (STATE.grab = {
          type: STATE.under.type,
          i0: STATE.under.i0,
          j0: STATE.under.j0,
          k0: STATE.under.k0,
        });
    }
  }
  static clickGateManip(e) {
    if ("gateicon" === STATE.under.type) {
      var t = MouseDown.clickGateIcon(e);
      return (
        SFX.click2.play(),
        void ("qCreate" !== t && "cCreate" !== t && UNDOREDO.add())
      );
    }
    if ("gatecontrol" === STATE.under.type) {
      STATE.state = "gatedrag";
      var i = STATE.grab.k0;
      "delay" === i.type &&
        ((i.rot = i.state), (STATE.lastDelay = i.state), (i.state = 0));
      var a = STATE.grab.type;
      return (
        ["cCombine", "qCombine", "cSplit"].indexOf(a) >= 0 &&
          ((i.rot = (i.orient * Math.PI) / 2), (i.orient = 0)),
        void SFX.manip.play()
      );
    }
    if (
      ((STATE.state = "free"),
      (STATE.grab = { type: "none", i0: 0, j0: 0, k0: 0 }),
      "boardtile" === STATE.under.type)
    ) {
      var r = STATE.under.i0,
        s = STATE.under.j0,
        o = IBOARD.getGate(r, s, IBOARD.getState(r, s));
      if (o && (SFX.click2.play(), ["sync"].indexOf(o.type) < 0)) {
        var n = r + s * FIELD.cols;
        if (SCENARIO.editable[n] > 0)
          return (
            (STATE.state = "gatemanip"),
            void (STATE.grab = {
              type: o.type,
              i0: STATE.under.i0,
              j0: STATE.under.j0,
              k0: o,
            })
          );
      }
    }
  }
}
