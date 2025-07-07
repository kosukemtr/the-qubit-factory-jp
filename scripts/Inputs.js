class Inputs {
  static resolve() {
    INPUTS.mousemove &&
      (MouseMove.main(INPUTS.mousemove), (INPUTS.mousemove = 0)),
      INPUTS.mousedown &&
        (MouseDown.main(INPUTS.mousedown), (INPUTS.mousedown = 0)),
      INPUTS.mouseup && (MouseUp.main(INPUTS.mouseup), (INPUTS.mouseup = 0)),
      INPUTS.wheel && (Inputs.onWheel(INPUTS.wheel), (INPUTS.wheel = 0)),
      INPUTS.keydown &&
        (Inputs.onKeyDown(INPUTS.keydown), (INPUTS.keydown = 0)),
      INPUTS.resize && ((TIMER.resize = TIMER.resizeMax), (INPUTS.resize = 0)),
      INPUTS.dblclick &&
        (INPUTS.dblclick.altKey ||
          "constructing" !== STATE.mode ||
          "boardtile" !== STATE.under.type ||
          ("free" !== STATE.state && "gatemanip" !== STATE.state) ||
          MouseDown.quickToggleSwitch(INPUTS.dblclick),
        (INPUTS.dblclick = 0));
  }
  static onKeyDown(e) {
    if (
      ("constructing" === STATE.mode || "paused" === STATE.mode) &&
      "qubit" === STATE.grab.type
    ) {
      var t = STATE.grab.k0;
      if (t.entGroup) {
        if (37 === e.keyCode) {
          var i = t.entGroup.numQubits,
            a = t.entInd;
          if (a > 0) {
            var r = [...Array(i).keys()];
            (r[a - 1] = a), (r[a] = a - 1), t.entGroup.reorder(r);
          }
          return SFX.click2.play(), void e.preventDefault();
        }
        if (39 === e.keyCode) {
          (i = t.entGroup.numQubits), (a = t.entInd);
          if (a < i - 1) {
            r = [...Array(i).keys()];
            (r[a + 1] = a), (r[a] = a + 1), t.entGroup.reorder(r);
          }
          return SFX.click2.play(), void e.preventDefault();
        }
      }
    }
    if (FIELD.developerMode) {
      if (
        "constructing" === STATE.mode &&
        (220 === e.keyCode &&
          (console.log(Helper.makeCheckDigit()),
          console.log(Helper.countCleanTiles(IBOARD._tiles))),
        49 === e.keyCode &&
          console.log(UNDOREDO.boardStorage[UNDOREDO.numCurr].serialize()),
        192 === e.keyCode)
      ) {
        for (var s = [], o = 0; o < IBOARD._gateList.length; o++)
          s.push(IBOARD._gateList[o].pack());
        var n = [];
        for (o = 0; o < IBOARD._qubitList.length; o++)
          n.push(IBOARD._qubitList[o].pack());
        var l = [];
        for (o = 0; o < IBOARD._bitList.length; o++)
          l.push(IBOARD._bitList[o].pack());
        var h = IBOARD._tiles;
        console.log(JSON.stringify(h)),
          console.log(JSON.stringify(s)),
          console.log(JSON.stringify(n)),
          console.log(JSON.stringify(l));
      }
      if (
        ("title" === STATE.mode && 72 === e.keyCode && Storage.loadFromAll(),
        71 === e.keyCode && console.log(JSON.stringify(PERSIST0)),
        76 === e.keyCode)
      ) {
        console.log(PERSIST0), console.log(PERSIST0.generic.availableBriefs);
        var d = localStorage.getItem("generic");
        null != d && console.log(JSON.parse(d).availableBriefs);
      }
      187 === e.keyCode && e.shiftKey && (DEBUG.show = !DEBUG.show),
        67 === e.keyCode && Canvs.displayAll(CANV);
    }
    if (
      (70 === e.keyCode &&
        ((OPTS.showFPS = !OPTS.showFPS), OPTS.showFPS || CANV.FPS.clear()),
      71 === e.keyCode &&
        ((OPTS.fancyFilters = !OPTS.fancyFilters), ResetConsts.picky()),
      186 === e.keyCode &&
        (OPTS.autoResize || (OPTS.isScrollable = !OPTS.isScrollable),
        OPTS.isScrollable
          ? (document.body.style.overflow = "auto")
          : (document.body.style.overflow = "hidden")),
      190 === e.keyCode &&
        ((FIELD.defaultWidth = Math.round(1.25 * FIELD.defaultWidth)),
        (TIMER.resize = 1)),
      188 === e.keyCode &&
        ((FIELD.defaultWidth = Math.round(0.8 * FIELD.defaultWidth)),
        (TIMER.resize = 1)),
      27 === e.keyCode && Helper.esc(),
      "levelSelect" === STATE.mode)
    ) {
      85 === e.keyCode &&
        e.shiftKey &&
        FIELD.developerMode &&
        (e.ctrlKey || e.metaKey) &&
        ((FIELD.forceOpen = !FIELD.forceOpen),
        SELECTOR.unlockCheck(),
        SELECTOR.initialize(),
        SELECTOR.drawBase(CANV.selectBase),
        SELECTOR.draw(CANV.select, CANV.selectText),
        SELECTOR.drawText(CANV.selectText));
      var u = [49, 50, 51, 52, 53, 54, 55, 56, 57];
      if (u.includes(e.keyCode) && e.shiftKey && e.altKey) {
        var c = e.keyCode - 48;
        (FIELD.forceOpenRing[c] = !FIELD.forceOpenRing[c]),
          SELECTOR.unlockCheck(),
          SELECTOR.initialize(),
          SELECTOR.drawBase(CANV.selectBase),
          SELECTOR.draw(CANV.select, CANV.selectText),
          SELECTOR.drawText(CANV.selectText);
      }
      if (85 === e.keyCode && e.shiftKey && e.altKey) {
        for (var I = 1; I < 10; I++) FIELD.forceOpenRing[I] = !0;
        SELECTOR.unlockCheck(),
          SELECTOR.initialize(),
          SELECTOR.drawBase(CANV.selectBase),
          SELECTOR.draw(CANV.select, CANV.selectText),
          SELECTOR.drawText(CANV.selectText);
      }
    }
    if ("constructing" === STATE.mode) {
      219 === e.keyCode || 81 === e.keyCode
        ? MENU.selectNext(-1)
        : (221 !== e.keyCode && 87 !== e.keyCode) || MENU.selectNext(1);
      u = [49, 50, 51, 52, 53, 54];
      if (
        (u.includes(e.keyCode) &&
          (e.shiftKey
            ? MENU.selectHot(e.keyCode - 49, 1)
            : e.ctrlKey || e.metaKey
              ? MENU.selectHot(e.keyCode - 49, 2)
              : MENU.selectHot(e.keyCode - 49, 0)),
        37 === e.keyCode &&
          (SFX.click2.play(),
          e.preventDefault(),
          (MENU.selProperties.orient = (MENU.selProperties.orient + 3) % 4)),
        39 === e.keyCode &&
          (SFX.click2.play(),
          e.preventDefault(),
          (MENU.selProperties.orient = (MENU.selProperties.orient + 1) % 4)),
        72 === e.keyCode &&
          (SFX.click.play(),
          (TUTORIAL.current = TUTORIAL.default),
          (TUTORIAL.oldMode = STATE.mode),
          (TUTORIAL.channelsCol = [...SCENARIO.channelsCol]),
          (STATE.mode = "tutorial"),
          ResetConsts.tutorial(),
          (TUTORIAL.show = !0)),
        112 === e.keyCode &&
          (SFX.click.play(),
          (TUTORIAL.current = 16),
          (TUTORIAL.oldMode = STATE.mode),
          (TUTORIAL.channelsCol = [...SCENARIO.channelsCol]),
          (STATE.mode = "tutorial"),
          ResetConsts.tutorial(),
          (TUTORIAL.show = !0)),
        66 === e.keyCode)
      ) {
        (ROBOT.oldMode = STATE.mode),
          (STATE.mode = "robot"),
          (FIELD.forced = !0);
        var E = ResetConsts.robot();
        E
          ? (SFX.click.play(),
            (TIMER.grey = TIMER.greyMax),
            (document.getElementById("greyoverlay").style.opacity = 0.75),
            (document.getElementById("greyoverlay").style.visibility =
              "visible"))
          : SFX.invalid.play();
      }
      82 === e.keyCode &&
        (SFX.click.play(), UNDOREDO.add(), LevelRefresh(SCENARIO.name, IBOARD)),
        69 === e.keyCode &&
          (SFX.click2.play(),
          "destroying" !== STATE.state &&
            ((STATE.state = "erasing"),
            (STATE.grab = { type: "free", i0: -1, j0: -1, k0: -1 }),
            MENU.setSelected(-1, -1))),
        SCENARIO.journal &&
          74 === e.keyCode &&
          (SFX.click.play(),
          PopWindow.setText(),
          (POPWINDOW.movableWindow.style.display = "block"),
          (POPWINDOW.isOpen = !0),
          (POPWINDOW.text.scrollTop = 0)),
        90 === e.keyCode && UNDOREDO.retreat(),
        (89 !== e.keyCode && 88 !== e.keyCode) || UNDOREDO.advance();
    }
    if (
      ("robot" === STATE.mode &&
        32 === INPUTS.keydown.keyCode &&
        RobotSpeech.advanceText(),
      ("running" !== STATE.mode && "paused" !== STATE.mode) ||
        (219 === e.keyCode
          ? (TIMER.timePerTick = Math.min(
              2 * TIMER.timePerTick,
              4 * TIMER.defaultTimePerTick,
            ))
          : 221 === e.keyCode &&
            (TIMER.timePerTick = Math.max(TIMER.timePerTick / 2, 1))),
      "paused" === STATE.mode && FIELD.developerMode && 192 === e.keyCode)
    ) {
      console.log(RBOARD[TIMER.tick]);
      for (s = [], o = 0; o < RBOARD[TIMER.tick]._gateList.length; o++)
        s.push(RBOARD[TIMER.tick]._gateList[o].pack());
      for (n = [], o = 0; o < RBOARD[TIMER.tick]._qubitList.length; o++)
        n.push(RBOARD[TIMER.tick]._qubitList[o].pack());
      for (l = [], o = 0; o < RBOARD[TIMER.tick]._bitList.length; o++)
        l.push(RBOARD[TIMER.tick]._bitList[o].pack());
      h = RBOARD[TIMER.tick]._tiles;
      console.log(JSON.stringify(h)),
        console.log(JSON.stringify(s)),
        console.log(JSON.stringify(n)),
        console.log(JSON.stringify(l)),
        console.log(RBOARD[TIMER.tick - 1].entList);
    }
    FIELD.developerMode && console.log(e.keyCode);
  }
  static onWheel(e) {
    if (MENU.selected >= 0 && "placing" === STATE.state)
      (TIMER.totalWheel += e.deltaY),
        TIMER.allowWheel &&
          Math.abs(TIMER.totalWheel) >= 4 &&
          (SFX.click2.play(),
          "trash" === MENU.selProperties.type
            ? (MENU.selProperties.orient = 0)
            : e.deltaY > 0
              ? ((MENU.selProperties.orient += 1),
                MENU.selProperties.orient > 3 &&
                  (MENU.selProperties.orient = 0))
              : e.deltaY < 0 &&
                ((MENU.selProperties.orient -= 1),
                MENU.selProperties.orient < 0 &&
                  (MENU.selProperties.orient = 3)),
          (TIMER.allowWheel = !1),
          (TIMER.totalWheel = 0),
          setTimeout(function () {
            TIMER.allowWheel = !0;
          }, 100));
    else if (
      "gatemanip" === STATE.state &&
      ((TIMER.totalWheel += e.deltaY),
      TIMER.allowWheel && Math.abs(TIMER.totalWheel) >= 4)
    ) {
      SFX.click2.play();
      var t = STATE.grab.k0;
      if (t) {
        if (["cCombine", "qCombine", "cSplit"].includes(STATE.grab.type)) {
          var i = t.orient;
          e.deltaY > 0
            ? ((i += 1), i >= 4 && (i -= 4))
            : e.deltaY < 0 && ((i -= 1), i < 0 && (i += 4)),
            (t.orient = i);
          var a = t.i0 + t.j0 * FIELD.cols;
          IBOARD.tiles[a] = MDATA.GATEID[STATE.grab.type] + t.orient;
        } else if (["switch"].includes(STATE.grab.type)) {
          t.rot = 1 - t.rot;
          i = t.orient;
          var r = STATE.grab.i0,
            s = STATE.grab.j0;
          0 == i
            ? (s += 1)
            : 1 == i
              ? (r -= 1)
              : 2 == i
                ? (s -= 1)
                : 3 == i && (r += 1),
            IBOARD.setState(r, s, t.rot);
        } else if (["trash"].includes(STATE.grab.type)) t.state = 1 - t.state;
        else if (["cInvert"].includes(STATE.grab.type)) t.rot = 1 - t.rot;
        else if (
          ["measure", "rotate", "qFlip", "upgrade"].includes(STATE.grab.type)
        ) {
          i = Math.round(t.rot / (Math.PI / 8)) % 16;
          e.deltaY > 0
            ? ((i += 1), i >= 16 && (i -= 16))
            : e.deltaY < 0 && ((i -= 1), i < 0 && (i += 16)),
            (t.rot = (i * Math.PI) / 8);
        } else if (["delay"].includes(STATE.grab.type)) {
          i = t.state;
          e.deltaY > 0
            ? ((i += 1), i > 80 && (i = 80))
            : e.deltaY < 0 && ((i -= 1), i < 0 && (i = 0)),
            (t.state = Math.round(i));
        } else if (["qControl"].includes(STATE.grab.type)) {
          var o = Math.round((8 * t.rot) / Math.PI);
          e.deltaY > 0
            ? ((o += 1), o > 8 && (o -= 16))
            : e.deltaY < 0 && ((o -= 1), o <= -8 && (o += 16)),
            (t.rot = (Math.PI * o) / 8);
        } else if (["cCreate", "qCreate"].includes(STATE.grab.type)) {
          o = Math.round(Math.abs(t.rot));
          e.deltaY > 0
            ? ((o += 1), o > 2 && (o = 0))
            : e.deltaY < 0 && ((o -= 1), o < 0 && (o = 2)),
            (t.rot = o);
        }
        var n = [
          "trash",
          "cInvert",
          "cCombine",
          "qCombine",
          "cSplit",
          "cCreate",
          "qCreate",
          "qControl",
          "delay",
          "measure",
          "rotate",
          "qFlip",
          "upgrade",
        ];
        n.includes(STATE.grab.type) &&
          (STATE.isScrollManip ? UNDOREDO.replace() : UNDOREDO.add(),
          (STATE.isScrollManip = !0));
      }
      (TIMER.allowWheel = !1),
        (TIMER.totalWheel = 0),
        setTimeout(function () {
          TIMER.allowWheel = !0;
        }, 100);
    }
  }
}
