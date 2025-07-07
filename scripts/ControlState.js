class ControlState {
  constructor() {
    (this._mode = "constructing"),
      (this._state = "free"),
      (this._under = { type: "none", i0: -1, j0: -1, k0: -1 }),
      (this._underLast = { type: "none", i0: -1, j0: -1, k0: -1 }),
      (this._selected = { type: "none", i0: -1, j0: -1, k0: -1 }),
      (this._grab = { type: "none", i0: -1, j0: -1, k0: -1 }),
      (this._pressed = { type: "none", i0: -1, j0: -1, k0: -1 }),
      (this._pos = { x: 0, y: 0 }),
      (this._entLabs = []),
      (this._entGroups = []),
      (this._view = -1),
      (this._tooltip = ""),
      (this._validPlacement = !1),
      (this._validPlacementLoc = !1),
      (this._validPlacementAdj = !1),
      (this._extraOrient = 0),
      (this._blueprint = -1),
      (this._profile = -1),
      (this._lastLetter = 0),
      (this._lastBoop = -1),
      (this._heldKey = -1),
      (this._isDestroy = !1),
      (this._isScrollManip = !1),
      (this._newFocus = !1);
  }
  get newFocus() {
    return this._newFocus;
  }
  get extraOrient() {
    return this._extraOrient;
  }
  get validPlacement() {
    return this._validPlacement;
  }
  get validPlacementLoc() {
    return this._validPlacementLoc;
  }
  get validPlacementAdj() {
    return this._validPlacementAdj;
  }
  get mode() {
    return this._mode;
  }
  get state() {
    return this._state;
  }
  get under() {
    return this._under;
  }
  get underLast() {
    return this._underLast;
  }
  get selected() {
    return this._selected;
  }
  get grab() {
    return this._grab;
  }
  get pressed() {
    return this._pressed;
  }
  get pos() {
    return this._pos;
  }
  get entLabs() {
    return this._entLabs;
  }
  get entGroups() {
    return this._entGroups;
  }
  get view() {
    return this._view;
  }
  get tooltip() {
    return this._tooltip;
  }
  get blueprint() {
    return this._blueprint;
  }
  get profile() {
    return this._profile;
  }
  get lastLetter() {
    return this._lastLetter;
  }
  get lastBoop() {
    return this._lastBoop;
  }
  get heldKey() {
    return this._heldKey;
  }
  get isDestroy() {
    return this._isDestroy;
  }
  get isScrollManip() {
    return this._isScrollManip;
  }
  set newFocus(e) {
    this._newFocus = e;
  }
  set blueprint(e) {
    this._blueprint = e;
  }
  set extraOrient(e) {
    this._extraOrient = e;
  }
  set validPlacement(e) {
    this._validPlacement = e;
  }
  set validPlacementLoc(e) {
    this._validPlacementLoc = e;
  }
  set validPlacementAdj(e) {
    this._validPlacementAdj = e;
  }
  set mode(e) {
    this._mode = e;
  }
  set state(e) {
    this._state = e;
  }
  set under(e) {
    this._under = e;
  }
  set underLast(e) {
    this._underLast = e;
  }
  set selected(e) {
    this._selected = e;
  }
  set grab(e) {
    this._grab = e;
  }
  set pressed(e) {
    this._pressed = e;
  }
  set pos(e) {
    this._pos = e;
  }
  set view(e) {
    this._view = e;
  }
  set tooltip(e) {
    this._tooltip = e;
  }
  set profile(e) {
    this._profile = e;
  }
  set lastLetter(e) {
    this._lastLetter = e;
  }
  set lastBoop(e) {
    this._lastBoop = e;
  }
  set heldKey(e) {
    this._heldKey = e;
  }
  set isDestroy(e) {
    this._isDestroy = e;
  }
  set isScrollManip(e) {
    this._isScrollManip = e;
  }
  static softReset() {
    RBOARD.fill(0),
      LevelRefresh(SCENARIO.whichOne, IBOARD),
      (TIMER.white = 0),
      (TIMER.shake = 0),
      SFX.startup.play(),
      (STATE.mode = "forwardTrans"),
      (STATE.state = "free"),
      (STATE.grab = { type: "none", i0: 0, j0: 0, k0: 0 });
    var e = CTRLMENU.getNamedButton("ctrlPlay"),
      t = CTRLMENU.getNamedButton("ctrlStep"),
      i = CTRLMENU.getNamedButton("ctrlBack");
    (e.transition = { status: !0, start: 1, stop: 0 }),
      (t.transition = { status: !0, start: 1, stop: 0 }),
      (i.transition = { status: !0, start: 1, stop: 0 }),
      (RANDS.locs = Array.from(RANDS.locs, () =>
        Math.floor(1e5 * Math.random()),
      )),
      CANV.baseWires.clear(),
      Render.boardWires(IBOARD, CANV.baseWires.ctx),
      (TIMER.tickEnd = TIMER.tick),
      TIMER.ratio > 0.5 && (TIMER.tickEnd = TIMER.tick + 1),
      (TIMER.victoryTick = 99999),
      (SCENARIO.repSuccess = 0);
  }
  static pos(e) {
    var t = CANV.interface.canv,
      i = t.getBoundingClientRect();
    return { x: e.clientX - i.left, y: e.clientY - i.top };
  }
  setEntLab(e) {
    this.entLabs.push(e);
  }
  setEntGroup(e) {
    this.entGroups.push(e);
  }
  removeEntLab(e) {
    var t = this.entLabs.indexOf(e);
    t >= 0 && this.entLabs.splice(t, 1);
  }
  checkHover() {
    if (POPWINDOW.isOpen) {
      if (
        ((POPWINDOW.isHover = parseInt(
          getComputedStyle(POPWINDOW.movableWindow)
            .getPropertyValue("--is-hovered")
            .trim(),
        )),
        POPWINDOW.isHover)
      )
        return;
    } else POPWINDOW.isHover = 0;
    var e =
      this._under.i0 !== this._underLast.i0 ||
      this._under.j0 !== this._underLast.j0 ||
      this._under.k0 !== this._underLast.k0 ||
      this._under.type !== this._underLast.type;
    if (e) {
      var t = !1,
        i = !1;
      if ("title" === this.mode)
        i = ["titlebutton", "optionbut"].includes(this.under.type);
      else if ("finished" === this.mode)
        i = ["nextbutton"].includes(this.under.type);
      else if ("robot" === this.mode)
        i = ["robbutton", "archiveButton"].includes(this.under.type);
      else if ("levelSelect" === this.mode)
        (t = ["token"].includes(this.under.type)),
          (i = ["selectPlaque", "selectButton", "token"].includes(
            this.under.type,
          ));
      else if ("constructing" === this.mode || "paused" === this.mode) {
        var a = [
            "erasing",
            "placing",
            "qwiring",
            "cwiring",
            "destroying",
          ].includes(this.state),
          r = [
            "qubitbasis",
            "gatedrag",
            "analysisgatecontrolling",
            "premultiplace",
            "multiplace",
          ].includes(this.state);
        if (
          (a
            ? ((t = ["eraser"].includes(this.under.type)),
              (i = [
                "letterButton",
                "blueprint",
                "undobutton",
                "redobutton",
              ].includes(this.under.type)))
            : ((t = ["qubit", "eraser"].includes(this.under.type)),
              (i = [
                "letterButton",
                "blueprint",
                "analysishighlight",
                "analysisgate",
                "undobutton",
                "redobutton",
                "questionicon",
                "archiveButton",
                "journalButton",
              ].includes(this.under.type))),
          "boardtile" === this.under.type &&
            "constructing" === this.mode &&
            !a &&
            !r)
        ) {
          var s = this.under.i0 + this.under.j0 * FIELD.cols;
          if (SCENARIO.editable[s] > 0) {
            var o = IBOARD.getGate(
              STATE.under.i0,
              STATE.under.j0,
              IBOARD.state[s],
            );
            o && o != this.grab.k0 && (t = !0);
          }
        }
        if (
          "menubutton" === this.under.type &&
          "constructing" === this.mode &&
          ("free" === this.state || "placing" === this.state)
        ) {
          var n = MENU.getButton(STATE.under.i0, STATE.under.j0);
          -1 !== n &&
            (n.isGrey || (MENU.selected !== 6 * n.j0 + n.i0 && (t = !0)));
        }
      }
      t ? SFX.hover.play() : i && SFX.hover2.play();
    }
  }
  checkUnder() {
    if (
      (this.checkHover(),
      (this._underLast.type = this._under.type),
      (this._underLast.i0 = this._under.i0),
      (this._underLast.j0 = this._under.j0),
      (this._underLast.k0 = this._under.k0),
      POPWINDOW.isHover)
    )
      this._under = { type: "none", i0: 0, j0: 0, k0: 0 };
    else {
      if ("constructing" === STATE.mode) {
        var e = STATE.pos.y - (FIELD.menu2.y0 + (3 * FIELD.tileWidth) / 4);
        if (e > 0 && e < FIELD.tileWidth / 2) {
          if (UNDOREDO.numAvail > 0) {
            var t =
              STATE.pos.x -
              (FIELD.menu2.x0 - 1.5 * FIELD.tileWidth) -
              FIELD.tileWidth / 4;
            if (t > 0 && t < FIELD.tileWidth)
              return void (this._under = {
                type: "undobutton",
                i0: -1,
                j0: -1,
                k0: -1,
              });
          }
          if (UNDOREDO.numFwd > 0) {
            t =
              STATE.pos.x -
              (FIELD.menu2.x0 - 1.5 * FIELD.tileWidth) -
              6.75 * FIELD.tileWidth;
            if (t > 0 && t < FIELD.tileWidth)
              return void (this._under = {
                type: "redobutton",
                i0: -1,
                j0: -1,
                k0: -1,
              });
          }
        }
      }
      if ("robot" === STATE.mode) {
        var i = STATE.pos.x - ROBOT.leftPad,
          a = STATE.pos.y - ROBOT.topPad - ROBOT.height + 2 * FIELD.tileWidth,
          r = FIELD.tileWidth,
          s = ROBOT.width / 2 - 1.75 * r,
          o = i > s + 0.5 * r && i < s + 3 * r,
          n = a > 0.85 * r && a < 2 * r;
        if (o && n)
          return void (this._under = {
            type: "robbutton",
            i0: 0,
            j0: -1,
            k0: -1,
          });
        if (SCENARIO.archive && "finished" === ROBOT.oldMode) {
          o = i > ROBOT.width - 7.3 * r && i < ROBOT.width - 1.7 * r;
          if (o && n)
            return void (this._under = {
              type: "robbutton",
              i0: 1,
              j0: -1,
              k0: -1,
            });
        }
        if ("levelSelect" === ROBOT.oldMode)
          return void (this._under = { type: "none", i0: -1, j0: -1, k0: -1 });
      }
      if ("tutorial" === STATE.mode) {
        (i = STATE.pos.x - TUTORIAL.leftPad),
          (a = STATE.pos.y - TUTORIAL.topPad);
        var l = 10 * FIELD.tileWidth + TUTORIAL.boxWidth,
          h = 2.75 * FIELD.tileWidth,
          d = ((s = 3.25 * FIELD.tileWidth), 0.875 * FIELD.tileHeight),
          u = 1.375 * FIELD.tileHeight,
          c = l - 3.25 * FIELD.tileWidth,
          I = l - 2.75 * FIELD.tileWidth;
        (n = a >= d && a <= u), (o = i >= h && i <= s);
        if (o && n)
          return void (this._under = {
            type: "tbutton",
            i0: 1,
            j0: -1,
            k0: -1,
          });
        o = i >= c && i <= I;
        if (o && n)
          return void (this._under = {
            type: "tbutton",
            i0: 2,
            j0: -1,
            k0: -1,
          });
        var E = l - 1.5 * FIELD.tileWidth;
        (o = i >= E && i <= E + FIELD.tileHeight / 2),
          (n = a >= 0.5 * FIELD.tileHeight && a <= FIELD.tileHeight);
        return o && n
          ? void (this._under = { type: "tbutton", i0: 3, j0: -1, k0: -1 })
          : void (this._under = { type: "none", i0: -1, j0: -1, k0: -1 });
      }
      if (
        ["constructing", "finished", "running", "paused", "robot"].indexOf(
          STATE.mode,
        ) >= 0 &&
        "qubit" != this._grab.type
      ) {
        a = STATE.pos.y - FIELD.midHeight - 0.6 * FIELD.tileHeight;
        if (PERSIST0[SCENARIO.name].complete && SCENARIO.archive) {
          (i = STATE.pos.x - FIELD.midWidth - 7.75 * FIELD.tileWidth),
            (o = i > 0 && i < FIELD.tileWidth / 2),
            (n = a > 0 && a < FIELD.tileHeight / 2);
          if (o && n)
            return void (this._under = {
              type: "archiveButton",
              i0: 0,
              j0: -1,
              k0: -1,
            });
        }
        if (SCENARIO.journal) {
          (i = STATE.pos.x - FIELD.midWidth - 0.5 * FIELD.tileWidth),
            (o = i > 0 && i < FIELD.tileWidth / 2),
            (n = a > 0 && a < FIELD.tileHeight / 2);
          if (o && n)
            return void (this._under = {
              type: "journalButton",
              i0: 0,
              j0: -1,
              k0: -1,
            });
        }
      }
      if ("constructing" === STATE.mode) {
        (i = STATE.pos.x - FIELD.leftPad), (a = STATE.pos.y - FIELD.topPad);
        var S = FIELD.leftPad + 16.25 * FIELD.tileWidth,
          f = FIELD.topPad + (FIELD.rows - 0.5) * FIELD.tileHeight;
        (o = i >= S && i <= S + (9.5 * FIELD.tileWidth) / 4),
          (n = a >= f && a <= f + (1.2 * FIELD.tileHeight) / 2);
        if (o && n)
          return void (i < S + (2.25 * FIELD.tileWidth) / 4
            ? (this._under = { type: "letterButton", i0: 0, j0: -1, k0: -1 })
            : i < S + (4.75 * FIELD.tileWidth) / 4
              ? (this._under = { type: "letterButton", i0: 1, j0: -1, k0: -1 })
              : i < S + (7.25 * FIELD.tileWidth) / 4
                ? (this._under = {
                    type: "letterButton",
                    i0: 2,
                    j0: -1,
                    k0: -1,
                  })
                : (this._under = {
                    type: "letterButton",
                    i0: 3,
                    j0: -1,
                    k0: -1,
                  }));
      }
      if (
        [
          "constructing",
          "running",
          "paused",
          "finished",
          "levelSelect",
          "title",
          "robot",
        ].indexOf(STATE.mode) >= 0
      ) {
        (i = STATE.pos.x - FIELD.leftPad), (a = STATE.pos.y - FIELD.topPad);
        if ("title" === STATE.mode) r = FIELD.tileWidth / 2;
        else r = FIELD.tileWidth;
        (o = i > r / 3 && i < (2 * r) / 3),
          (n = a > r / 3 && a < (4.4 * r) / 3);
        if (o && n)
          return (
            a < (2.2 * r) / 3
              ? FIELD.forceSingle ||
                (this._under = { type: "escbutton", i0: 0, j0: -1, k0: -1 })
              : (this._under =
                  a < (3.4 * r) / 3
                    ? { type: "escbutton", i0: 1, j0: -1, k0: -1 }
                    : { type: "escbutton", i0: 2, j0: -1, k0: -1 }),
            void (
              "title" === STATE.mode &&
              ((this._under.i0 += 1),
              3 === this._under.i0 &&
                (this._under = { type: "none", i0: -1, j0: -1, k0: -1 }))
            )
          );
      }
      if ("levelSelect" === STATE.mode) {
        SELECTOR.removeHover();
        (i = STATE.pos.x - FIELD.leftPad),
          (a = STATE.pos.y - FIELD.topPad),
          (o = i > 17 * FIELD.tileWidth && i < 21 * FIELD.tileWidth),
          (n = a > 1.5 * FIELD.tileWidth && a < 3.5 * FIELD.tileWidth);
        if (o && n) {
          var p = Math.floor((i - 17 * FIELD.tileWidth) / FIELD.tileWidth),
            T = Math.floor((a - 1.5 * FIELD.tileWidth) / FIELD.tileWidth),
            R =
              ((p = Math.min(Math.max(0, p), 3)),
              (T = Math.min(Math.max(0, T), 1)),
              2 * p + T);
          return (
            (this.under = { type: "selectAward", i0: p, j0: T, k0: R }),
            "selectButton" !== this._selected.type
              ? (CANV.selectText.clear(), SELECTOR.drawText(CANV.selectText))
              : this._selected.k0 !== R &&
                (CANV.selectText.clear(), SELECTOR.drawText(CANV.selectText)),
            void (this._selected = { type: "selectAward", i0: p, j0: T, k0: R })
          );
        }
        (o = i > 5 * FIELD.tileWidth && i < 10 * FIELD.tileWidth),
          (n = a > 2 * FIELD.tileWidth && a < 2.5 * FIELD.tileWidth);
        if (o && n) {
          for (var m = 0; m < 7; m++)
            if (
              (PERSIST0.generic.availableBriefs[m] || FIELD.forceOpen) &&
              i > 5.5 * FIELD.tileWidth &&
              i < 5 * FIELD.tileWidth + (2.5 * (m + 2) * FIELD.tileWidth) / 4
            )
              return (
                (this._under = { type: "selectButton", i0: m, j0: -1, k0: -1 }),
                "selectButton" !== this._selected.type
                  ? (CANV.selectText.clear(),
                    SELECTOR.drawText(CANV.selectText))
                  : this._selected.i0 !== m &&
                    (CANV.selectText.clear(),
                    SELECTOR.drawText(CANV.selectText)),
                void (this._selected = {
                  type: "selectButton",
                  i0: m,
                  j0: -1,
                  k0: -1,
                })
              );
          return (
            (this._selected = { type: "none", i0: -1, j0: -1, k0: -1 }),
            void (this._under = { type: "none", i0: -1, j0: -1, k0: -1 })
          );
        }
        var g = SELECTOR.scale,
          A = SELECTOR.plaqueList.length;
        for (m = 0; m < A; m++) {
          var C = SELECTOR.plaqueList[m];
          (h = C.i0 * g * FIELD.tileWidth),
            (d = C.j0 * g * FIELD.tileWidth),
            (s = h + C.w0 * FIELD.tileWidth),
            (u = d + C.h0 * FIELD.tileWidth),
            (o = i >= h && i <= s),
            (n = a >= d && a <= u);
          if (o && n)
            return (
              (this._under = {
                type: "selectPlaque",
                i0: C.i0,
                j0: C.j0,
                k0: C,
              }),
              "selectPlaque" !== this._selected.type
                ? (CANV.selectText.clear(), SELECTOR.drawText(CANV.selectText))
                : this._selected.k0.name !== this._under.k0.name &&
                  (CANV.selectText.clear(), SELECTOR.drawText(CANV.selectText)),
              (this._selected = {
                type: "selectPlaque",
                i0: C.i0,
                j0: C.j0,
                k0: C,
              }),
              void (C.isHover = !0)
            );
        }
        var L = SELECTOR.tokenList.length;
        for (m = 0; m < L; m++) {
          var D = SELECTOR.tokenList[m];
          if (D.isAvailable) {
            (i = STATE.pos.x - FIELD.leftPad),
              (a = STATE.pos.y - FIELD.topPad),
              (h = D.i0 * g * FIELD.tileWidth),
              (d = D.j0 * g * FIELD.tileWidth),
              (s = h + g * FIELD.tileWidth),
              (u = d + g * FIELD.tileWidth),
              (o = i >= h && i <= s),
              (n = a >= d && a <= u);
            if (o && n)
              return (
                (this._under = { type: "token", i0: D.i0, j0: D.j0, k0: D }),
                "token" !== this._selected.type
                  ? (CANV.selectText.clear(),
                    SELECTOR.drawText(CANV.selectText))
                  : this._selected.k0.name !== this._under.k0.name &&
                    (CANV.selectText.clear(),
                    SELECTOR.drawText(CANV.selectText)),
                (D.isHover = !0),
                void (this._selected = {
                  type: "token",
                  i0: D.i0,
                  j0: D.j0,
                  k0: D,
                })
              );
          }
        }
        return (
          (this._under = { type: "none", i0: -1, j0: -1, k0: -1 }),
          "none" !== this._selected.type &&
            (CANV.selectText.clear(), SELECTOR.drawText(CANV.selectText)),
          void (this._selected = { type: "none", i0: -1, j0: -1, k0: -1 })
        );
      }
      (h = this.pos.x), (d = this.pos.y);
      if ("title" !== STATE.mode) {
        if ("finished" === STATE.mode) {
          var b =
              !RobotSpeech.grab(SCENARIO.name, 0, !0) || FIELD.disableBriefs,
            O = b && 1 === SCENARIO.victory;
          if (O) {
            var M = (9 * FIELD.tileWidth) / 4,
              v = ((u = 1.6 * FIELD.tileWidth), (1.5 * FIELD.tileHeight) / 6),
              w = parseInt(CANV.victoryText.canv.style.left),
              y = parseInt(CANV.victoryText.canv.style.top),
              N = CANV.victoryText.canv.width / 2 - M / 2 - v + w,
              P = CANV.victoryText.canv.width / 2 + M / 2 + v + w;
            (o = h > N && h < P), (n = d > u - v + y && d < u + v + y);
            if (o && n)
              return void (this._under = {
                type: "nextbutton",
                i0: -1,
                j0: -1,
                k0: SCENARIO.victory,
              });
          }
        }
        if (
          !(
            this.checkGateManip(h, d) ||
            ((("paused" === this.mode && -1 === TIMER.subTick) ||
              ("constructing" === this.mode && "qubiting" === this.state)) &&
              this.checkAnalysis(h, d))
          )
        ) {
          if ("constructing" === STATE.mode) {
            (i = STATE.pos.x - (FIELD.menu.x0 + FIELD.tileWidth / 5)),
              (a = STATE.pos.y - (FIELD.menu.y0 + (3 * FIELD.tileHeight) / 8)),
              (o = i > 0 && i < FIELD.tileWidth),
              (n = a > 0 && a < FIELD.tileHeight);
            if (o && n)
              return void (this._under = {
                type: "eraser",
                i0: -1,
                j0: -1,
                k0: -1,
              });
          }
          (o = h > FIELD.menu.x0 && h < FIELD.menu.x0 + MENU.w0),
            (n =
              d > FIELD.menu.y0 &&
              d < FIELD.menu.y0 + MENU.h0 - FIELD.tileWidth / 2);
          if (o && n) {
            var F = MENU.findTile(h - FIELD.menu.x0, d - FIELD.menu.y0);
            if ("constructing" === this.mode) {
              if (MENU.selected >= 0) {
                var k = MENU.buttons[MENU.selected],
                  x = MENU.gridPos(k.i0, k.j0);
                (s = x.x0 + FIELD.tileWidth + FIELD.menu.x0),
                  (u = x.y0 + FIELD.tileHeight + FIELD.menu.y0);
                if (
                  Helper.dist(s - h, u - d) <
                  (1.5 * SEL_STYLES.iconWidth) / 2
                )
                  return (
                    MENU.removeHovered(),
                    void (this._under = {
                      type: "questionicon",
                      i0: MENU.selected,
                      j0: -1,
                      k0: -1,
                    })
                  );
              }
              F.i0 >= 0 && F.i0 < 6 && F.j0 >= 0
                ? (MENU.setHovered(F.i0, F.j0),
                  (this._under = {
                    type: "menubutton",
                    i0: F.i0,
                    j0: F.j0,
                    k0: -1,
                  }))
                : (MENU.removeHovered(),
                  (this._under = { type: "none", i0: -1, j0: -1, k0: -1 }));
            }
          } else {
            if ((MENU.removeHovered(), "constructing" === STATE.mode)) {
              var B = FIELD.topPad + (FIELD.rows - 0.3) * FIELD.tileHeight,
                W = FIELD.leftPad + FIELD.tileWidth;
              (o = h > W && h < W + 2 * FIELD.tileWidth),
                (n = d > B && d < B + FIELD.tileHeight);
              if (o && n)
                return (
                  h < W + 0.6 * FIELD.tileWidth
                    ? ((this._under = {
                        type: "blueprint",
                        i0: 0,
                        j0: -1,
                        k0: -1,
                      }),
                      (BLUEPRINT.hovered = 0))
                    : h < W + 1.2 * FIELD.tileWidth
                      ? ((this._under = {
                          type: "blueprint",
                          i0: 1,
                          j0: -1,
                          k0: -1,
                        }),
                        (BLUEPRINT.hovered = 1))
                      : ((this._under = {
                          type: "blueprint",
                          i0: 2,
                          j0: -1,
                          k0: -1,
                        }),
                        (BLUEPRINT.hovered = 2)),
                  BLUEPRINT.hovered !== BLUEPRINT.lastHovered &&
                    Blueprint.draw(),
                  void (BLUEPRINT.lastHovered = BLUEPRINT.hovered)
                );
              (BLUEPRINT.hovered = -1),
                BLUEPRINT.hovered !== BLUEPRINT.lastHovered &&
                  Blueprint.draw(!1),
                (BLUEPRINT.lastHovered = BLUEPRINT.hovered);
            }
            (o = h > FIELD.menu2.x0 && h < FIELD.menu2.x0 + CTRLMENU.w0),
              (n = d > FIELD.menu2.y0 && d < FIELD.menu2.y0 + CTRLMENU.h0);
            if (o && n) {
              F = CTRLMENU.findTile(h - FIELD.menu2.x0, d - FIELD.menu2.y0);
              return (
                CTRLMENU.setHovered(F.i0, F.j0),
                void (this._under = {
                  type: "ctrlbutton",
                  i0: F.i0,
                  j0: F.j0,
                  k0: CTRLMENU.getButton(F.i0, F.j0),
                })
              );
            }
            if (
              (CTRLMENU.removeHovered(),
              "constructing" === this.mode &&
                ("free" === this.state ||
                  "qubiting" === this.state ||
                  "gatemanip" === this.state) &&
                ["tut1", "tut2", "tut3", "tut4", "tut5"].indexOf(
                  SCENARIO.name,
                ) < 0)
            ) {
              var q = IBOARD;
              for (m = 0; m < q._qubitList.length; m++)
                q._qubitList[m].isHovered = !1;
              if (this.checkQubitManip(h, d)) return;
              (o =
                h > q.x0 + FIELD.leftPad &&
                h < q.x0 + FIELD.leftPad + q.width * FIELD.tileWidth),
                (n =
                  d > q.y0 + FIELD.topPad &&
                  d < q.y0 + FIELD.topPad + q.height * FIELD.tileHeight);
              if (o && n) {
                F = q.findTile(h, d);
                if (
                  "free" === this.state ||
                  "qubiting" === this.state ||
                  "gatemanip" === this.state
                ) {
                  var H = F.i0 + F.j0 * q._width,
                    U = q._qubits[H],
                    _ = !0;
                  if ("free" === this.state) {
                    var G = (h - FIELD.leftPad) / FIELD.tileWidth,
                      V = (d - FIELD.topPad) / FIELD.tileHeight;
                    (Math.abs(G - Math.round(G)) > 0.3 ||
                      Math.abs(V - Math.round(V)) > 0.3) &&
                      (_ = !1);
                  }
                  if (
                    ["quantumAdv1", "quantumAdv2", "quantumAdv3"].indexOf(
                      SCENARIO.name,
                    ) >= 0
                  )
                    var Q = 0 === F.j0 || 13 === F.j0;
                  else
                    Q =
                      0 === F.j0 || (13 === F.j0 && (F.i0 <= 2 || F.i0 >= 16));
                  if (U && !Q && _) {
                    if ("qubiting" === this.state) var $ = q._qubits[H];
                    $ = STATE.grab.k0;
                    var z = $.i0 === U.i0 && $.j0 === U.j0;
                    if (!z && !U.isGhost)
                      return (
                        (U.isHovered = !0),
                        void (this._under = {
                          type: "qubit",
                          i0: F.i0,
                          j0: F.j0,
                          k0: U,
                        })
                      );
                  }
                }
              }
            }
            if ("paused" === this.mode && -1 === TIMER.subTick) {
              for (q = RBOARD[TIMER.tick], m = 0; m < q._qubitList.length; m++)
                q._qubitList[m].isHovered = !1;
              if (this.checkQubitManip(h, d)) return;
              (o =
                h > q.x0 + FIELD.leftPad &&
                h < q.x0 + FIELD.leftPad + q.width * FIELD.tileWidth),
                (n =
                  d > q.y0 + FIELD.topPad &&
                  d < q.y0 + FIELD.topPad + q.height * FIELD.tileHeight);
              if (o && n) {
                F = q.findTile(h, d);
                if ("free" === this.state || "qubiting" === this.state) {
                  (H = F.i0 + F.j0 * q._width), (U = q._qubits[H]);
                  if (U) {
                    if ("qubiting" === this.state) $ = q._qubits[H];
                    ($ = STATE.grab.k0), (z = $.i0 === U.i0 && $.j0 === U.j0);
                    if (!z && !U.isGhost)
                      return (
                        (U.isHovered = !0),
                        void (this._under = {
                          type: "qubit",
                          i0: F.i0,
                          j0: F.j0,
                          k0: U,
                        })
                      );
                  }
                }
                return void (this._under = {
                  type: "boardtile",
                  i0: F.i0,
                  j0: F.j0,
                  k0: -1,
                });
              }
            }
            if ("constructing" === this.mode) {
              (o =
                h > IBOARD.x0 + FIELD.leftPad &&
                h < IBOARD.x0 + FIELD.leftPad + IBOARD.width * FIELD.tileWidth),
                (n =
                  d > IBOARD.y0 + FIELD.topPad &&
                  d <
                    IBOARD.y0 +
                      FIELD.topPad +
                      IBOARD.height * FIELD.tileHeight);
              if (o && n) {
                F = IBOARD.findTile(h, d);
                return (
                  SCENARIO.editable[F.i0 + F.j0 * FIELD.cols],
                  void (this._under = {
                    type: "boardtile",
                    i0: F.i0,
                    j0: F.j0,
                    k0: -1,
                  })
                );
              }
            }
            this._under = { type: "none", i0: 0, j0: 0, k0: 0 };
          }
        }
      } else {
        if ("free" === STATE.state) {
          var j = this.pos.x - CANV.titleLearn.x0,
            Y = this.pos.y - CANV.titleLearn.y0,
            o = j > 0.1 * FIELD.tileWidth && j < 1.1 * FIELD.tileWidth,
            n = Y > 0.1 * FIELD.tileWidth && Y < 0.8 * FIELD.tileWidth;
          if (o && n)
            return void (this._under = {
              type: "learnbutton",
              i0: -1,
              j0: -1,
              k0: -1,
            });
          (j = this.pos.x - CANV.titleLink.x0),
            (Y = this.pos.y - CANV.titleLink.y0);
          var o = j > 0.1 * FIELD.tileWidth && j < 1.5 * FIELD.tileWidth,
            n = Y > 0.1 * FIELD.tileWidth && Y < 0.7 * FIELD.tileWidth;
          if (o && n)
            return void (this._under = {
              type: "linkbutton",
              i0: -1,
              j0: -1,
              k0: -1,
            });
          var X = FIELD.tileWidth;
          if (FIELD.isCleanSlate) var Z = [0, 0, 0];
          else Z = [-0.15 * X, 0.1 * X, 0.1 * X];
          var J = FIELD.tileWidth * (FIELD.cols - 5.25),
            K = FIELD.tileHeight * (FIELD.rows / 2),
            ee = 2 * FIELD.tileWidth,
            te = 1.4 * FIELD.tileHeight,
            ie = 0.4 * FIELD.tileWidth,
            ae = K - te + FIELD.topPad + FIELD.tileHeight / 4,
            re = J / 2 + FIELD.leftPad + FIELD.leftMargin,
            o = h > re - ee / 2 && h < re + ee / 2;
          if (o)
            for (var m = 0; m < 3; m++) {
              var se = ae + m * ie,
                n = d > se - ie / 2 + Z[m] && d < se + ie / 2 + Z[m];
              if (n)
                return void (this._under = {
                  type: "titlebutton",
                  i0: m,
                  j0: -1,
                  k0: -1,
                });
            }
        } else if ("options" === STATE.state) {
          X = FIELD.tileWidth;
          var oe =
              h -
              (FIELD.leftPad +
                (114 * FIELD.tileWidth) / 16 -
                (5 * FIELD.tileWidth) / 2),
            ne =
              d -
              (FIELD.topPad +
                (27.7 * FIELD.tileHeight) / 4 -
                4 * FIELD.tileWidth),
            o = oe > 1.4 * X && oe < 3.6 * X;
          if (o) {
            var n = ne > (8.5 * X) / 3 && ne < (9.5 * X) / 3;
            if (n)
              return void (STATE.under = {
                type: "optionbut",
                i0: 0,
                j0: -1,
                k0: -1,
              });
            var n = ne > (10 * X) / 3 && ne < (11 * X) / 3;
            if (n)
              return void (STATE.under = {
                type: "optionbut",
                i0: 1,
                j0: -1,
                k0: -1,
              });
          }
          var o = oe > 1.8 * X && oe < 4.2 * X,
            le = Math.round((100 * (oe - 1.8 * X)) / (2.4 * X));
          if (o) {
            var n =
              ne > (2 * X) / 3 + (3 * X) / 2 - 0.2 * X &&
              ne < (2 * X) / 3 + (3 * X) / 2 + 0.2 * X;
            if (n)
              return void (this._under = {
                type: "titleslider",
                i0: 0,
                j0: le,
                k0: -1,
              });
            var n =
              ne > X + (3 * X) / 2 - 0.2 * X && ne < X + (3 * X) / 2 + 0.2 * X;
            if (n)
              return void (this._under = {
                type: "titleslider",
                i0: 1,
                j0: le,
                k0: -1,
              });
          }
          var n = ne > (1.5 * X) / 4 - 0.2 * X && ne < (1.5 * X) / 4 + 0.2 * X;
          if (n) {
            var he = oe > 3.03 * X && oe < 3.43 * X,
              de = oe > 4.47 * X && oe < 4.87 * X;
            if (he)
              return void (this._under = {
                type: "titleoption",
                i0: 0,
                j0: 0,
                k0: -1,
              });
            if (de)
              return void (this._under = {
                type: "titleoption",
                i0: 1,
                j0: 0,
                k0: -1,
              });
          }
          n =
            ne > (1.5 * X) / 4 + X / 3 + X / 2 - 0.2 * X &&
            ne < (1.5 * X) / 4 + X / 3 + X / 2 + 0.2 * X;
          if (n) {
            (he = oe > 2.67 * X && oe < (2.87 + 0.2) * X),
              (de = oe > 3.63 * X && oe < 4.03 * X);
            var ue = oe > 4.47 * X && oe < 4.87 * X;
            if (he)
              return void (this._under = {
                type: "titleoption",
                i0: 0,
                j0: 1,
                k0: -1,
              });
            if (de)
              return void (this._under = {
                type: "titleoption",
                i0: 1,
                j0: 1,
                k0: -1,
              });
            if (ue)
              return void (this._under = {
                type: "titleoption",
                i0: 2,
                j0: 1,
                k0: -1,
              });
          }
          n =
            ne > (1.5 * X) / 4 + X / 3 + X - 0.2 * X &&
            ne < (1.5 * X) / 4 + X / 3 + X + 0.2 * X;
          if (n) {
            (he = oe > 3.03 * X && oe < 3.43 * X),
              (de = oe > 4.47 * X && oe < 4.87 * X);
            if (he)
              return void (this._under = {
                type: "titleoption",
                i0: 0,
                j0: 2,
                k0: -1,
              });
            if (de)
              return void (this._under = {
                type: "titleoption",
                i0: 1,
                j0: 2,
                k0: -1,
              });
          }
        }
        this._under = { type: "none", i0: -1, j0: -1, k0: -1 };
      }
    }
  }
  checkGateManip(e, t) {
    if ("gatemanip" === this.state) {
      var i =
          IBOARD.x0 + (STATE.grab.i0 + 0.5) * FIELD.tileWidth + FIELD.leftPad,
        a = IBOARD.y0 + (STATE.grab.j0 + 0.5) * FIELD.tileHeight + FIELD.topPad,
        r = SEL_STYLES.r0,
        s = STATE.grab.type,
        o = STATE.grab.k0;
      if (["cCreate", "qCreate"].indexOf(s) >= 0) {
        var n = i - FIELD.tileWidth / 3,
          l = a + FIELD.tileWidth / 3 + SEL_STYLES.iconWidth / 2,
          h = i + FIELD.tileWidth / 3,
          d = a + FIELD.tileWidth / 3 + SEL_STYLES.iconWidth / 2;
        if (Helper.dist(n - e, l - t) < SEL_STYLES.iconWidth / 2)
          return (
            (this._under = {
              type: "gateicon",
              i0: STATE.grab.i0,
              j0: STATE.grab.j0,
              k0: 0,
            }),
            !0
          );
        if (Helper.dist(h - e, d - t) < SEL_STYLES.iconWidth / 2)
          return (
            (this._under = {
              type: "gateicon",
              i0: STATE.grab.i0,
              j0: STATE.grab.j0,
              k0: 1,
            }),
            !0
          );
        if ("qCreate" === s) {
          var u = a - (1.8 * FIELD.tileWidth) / 3 + SEL_STYLES.iconWidth / 2;
          if (Helper.dist(n - e, u - t) < SEL_STYLES.iconWidth / 2)
            return (
              (this._under = {
                type: "gateicon",
                i0: STATE.grab.i0,
                j0: STATE.grab.j0,
                k0: 2,
              }),
              !0
            );
        }
      } else if (["trash", "cInvert", "qFlip"].indexOf(s) >= 0) {
        (h = i + FIELD.tileWidth / 3),
          (d = a + FIELD.tileWidth / 3 + SEL_STYLES.iconWidth / 2);
        if (Helper.dist(h - e, d - t) < SEL_STYLES.iconWidth / 2)
          return (
            (this._under = {
              type: "gateicon",
              i0: STATE.grab.i0,
              j0: STATE.grab.j0,
              k0: 1,
            }),
            !0
          );
      } else if (["switch"].indexOf(s) >= 0) {
        var c = (3.5 * FIELD.tileWidth) / 12;
        (h = i - FIELD.iconWidth / 2 - c + SEL_STYLES.iconWidth / 2),
          (d = a - c - FIELD.iconWidth / 2 + SEL_STYLES.iconWidth / 2);
        if (Helper.dist(h - e, d - t) < SEL_STYLES.iconWidth / 2)
          return (
            (this._under = {
              type: "gateicon",
              i0: STATE.grab.i0,
              j0: STATE.grab.j0,
              k0: 4,
            }),
            !0
          );
      }
      if (["cCombine", "qCombine", "cSplit"].indexOf(s) >= 0) {
        var I = [-r, 0, r, 0],
          E = [0, -r, 0, r],
          S = (STATE.grab.k0.orient + 2) % 4;
        if (
          Helper.dist(I[S] + i - e, E[S] + a - t) <
          SEL_STYLES.handleTol * SEL_STYLES.handleRad
        )
          return (
            (this._under = {
              type: "gatecontrol",
              i0: STATE.grab.i0,
              j0: STATE.grab.j0,
              k0: S,
            }),
            !0
          );
      } else if (["delay"].indexOf(s) >= 0) {
        S = (STATE.grab.k0.orient + 2) % 2;
        if (
          Helper.dist(
            r * Math.sin(((o.rot + 0.5 * o.state) * Math.PI) / 2) + i - e,
            -r * Math.cos(((o.rot + 0.5 * o.state) * Math.PI) / 2) + a - t,
          ) <
          SEL_STYLES.handleTol * SEL_STYLES.handleRad
        )
          return (
            (this._under = {
              type: "gatecontrol",
              i0: STATE.grab.i0,
              j0: STATE.grab.j0,
              k0: S,
            }),
            !0
          );
      } else if (["measure", "rotate", "upgrade"].indexOf(s) >= 0) {
        S = (STATE.grab.k0.orient + 2) % 2;
        if (
          Helper.dist(
            -r * Math.cos(o.rot + Math.PI / 2) + i - e,
            -r * Math.sin(o.rot + Math.PI / 2) + a - t,
          ) <
          SEL_STYLES.handleTol * SEL_STYLES.handleRad
        )
          return (
            (this._under = {
              type: "gatecontrol",
              i0: STATE.grab.i0,
              j0: STATE.grab.j0,
              k0: S,
            }),
            !0
          );
      } else if (["qControl"].indexOf(s) >= 0) {
        var f = (3 * SEL_STYLES.r0) / 4;
        S = (STATE.grab.k0.orient + 2) % 2;
        if (
          Helper.dist(
            -f * Math.cos(o.rot + Math.PI / 2) + i - e,
            -f * Math.sin(o.rot + Math.PI / 2) + a - t,
          ) <
          SEL_STYLES.handleTol * SEL_STYLES.handleRad
        )
          return (
            (this._under = {
              type: "gatecontrol",
              i0: STATE.grab.i0,
              j0: STATE.grab.j0,
              k0: S,
            }),
            !0
          );
      } else if (["qFlip"].indexOf(s) >= 0) {
        if (0 === o.state) {
          S = (STATE.grab.k0.orient + 2) % 2;
          if (
            Helper.dist(
              -r * Math.cos(o.rot + Math.PI / 2) + i - e,
              -r * Math.sin(o.rot + Math.PI / 2) + a - t,
            ) <
            SEL_STYLES.handleTol * SEL_STYLES.handleRad
          )
            return (
              (this._under = {
                type: "gatecontrol",
                i0: STATE.grab.i0,
                j0: STATE.grab.j0,
                k0: S,
              }),
              !0
            );
        }
      } else if (["compare"].indexOf(s) >= 0) {
        S = (STATE.grab.k0.orient + 2) % 4;
        if (
          Helper.dist(0, -r * Math.cos(o.rot * Math.PI) + a - t) <
          SEL_STYLES.handleTol * SEL_STYLES.handleRad
        )
          return (
            (this._under = {
              type: "gatecontrol",
              i0: STATE.grab.i0,
              j0: STATE.grab.j0,
              k0: S,
            }),
            !0
          );
      } else if (["cCreate"].indexOf(s) >= 0) {
        S = (STATE.grab.k0.orient + 2) % 4;
        if (
          Helper.dist(
            r * Math.sin((2 * o.rot * Math.PI) / 3) + i - e,
            -r * Math.cos((2 * o.rot * Math.PI) / 3) + a - t,
          ) <
          SEL_STYLES.handleTol * SEL_STYLES.handleRad
        )
          return (
            (this._under = {
              type: "gatecontrol",
              i0: STATE.grab.i0,
              j0: STATE.grab.j0,
              k0: S,
            }),
            !0
          );
      } else if (["qCreate"].indexOf(s) >= 0) {
        var p = STATE.grab.k0.numPoints;
        S = (STATE.grab.k0.orient + 2) % 4;
        if (
          Helper.dist(
            r * Math.sin((2 * o.rot * Math.PI) / p) + i - e,
            -r * Math.cos((2 * o.rot * Math.PI) / p) + a - t,
          ) <
          SEL_STYLES.handleTol * SEL_STYLES.handleRad
        )
          return (
            (this._under = {
              type: "gatecontrol",
              i0: STATE.grab.i0,
              j0: STATE.grab.j0,
              k0: S,
            }),
            !0
          );
      }
    }
    return !1;
  }
  checkAnalysis(e, t) {
    if (1 === ANALYSIS.openTrig) {
      var i = FIELD.analysisLeft,
        a = FIELD.topPad,
        r = FIELD.analysisWidth + FIELD.tileWidth,
        s = (1 + FIELD.rows) * FIELD.tileHeight,
        o = e > i && e < i + r,
        n = t > a && t < a + s;
      if (o && n) {
        var l = this.grab.k0;
        if (l.entGroup) var h = l.entGroup.numQubits;
        else h = 1;
        for (
          var d =
              FIELD.topPad +
              ANALYSIS.yPad +
              1.5 * ANALYSIS.basisSpace +
              FIELD.tileHeight +
              (ANALYSIS.basisSpace - ANALYSIS.basisSize) / 2,
            u = 0;
          u < h;
          u++
        ) {
          var c =
              FIELD.analysisLeft +
              ANALYSIS.xPad +
              ANALYSIS.xGap +
              (u + 1) * FIELD.tileWidth +
              (FIELD.tileWidth - ANALYSIS.basisSize) / 2 -
              FIELD.iconWidth / 2,
            I =
              (c - e) ** 2 + (d - t) ** 2 <= ((1.2 * FIELD.iconWidth) / 2) ** 2;
          if (I)
            return (
              (this._under = {
                type: "analysishighlight",
                i0: -1,
                j0: -1,
                k0: u,
              }),
              !0
            );
        }
        if (l.entGroup) {
          var E = l.entGroup,
            S = Math.min(2 ** E.numQubits, 16),
            f =
              ((u = l.entInd),
              FIELD.topPad + ANALYSIS.yMeasure + (S + 2) * ANALYSIS.basisSpace);
          for (u = 0; u < E.numQubits; u++) {
            var p =
              FIELD.analysisLeft +
              ANALYSIS.xPad +
              ANALYSIS.xGap +
              (u + 1) * FIELD.tileWidth;
            if (u === l.entInd) {
              var T = E.qubitList[u].measureRot,
                R = (3 * SEL_STYLES.r0) / 4,
                m = p - R * Math.cos(T + Math.PI / 2),
                g = f - R * Math.sin(T + Math.PI / 2);
              I =
                (m - e) ** 2 + (g - t) ** 2 <=
                (1.5 * SEL_STYLES.handleRad) ** 2;
              if (I)
                return (
                  (this._under = {
                    type: "analysisgatecontrol",
                    i0: -1,
                    j0: -1,
                    k0: u,
                  }),
                  !0
                );
            }
            if (u === l.entInd)
              I = (p - e) ** 2 + (f - t) ** 2 <= (FIELD.tileWidth / 2) ** 2;
            else I = (p - e) ** 2 + (f - t) ** 2 <= (FIELD.tileWidth / 6) ** 2;
            if (I)
              return (
                (this._under = { type: "analysisgate", i0: -1, j0: -1, k0: u }),
                !0
              );
          }
        }
        if (l.entGroup) {
          E = l.entGroup;
          var A =
              FIELD.analysisLeft +
              ANALYSIS.xPad +
              ANALYSIS.xGap +
              (l.entInd + 1) * FIELD.tileWidth,
            C = FIELD.topPad + ANALYSIS.yPad + FIELD.tileHeight / 2,
            L =
              ((R = (3 * SEL_STYLES.r0) / 4),
              (m = R * Math.sin(l.basisRot) + A),
              (g = -R * Math.cos(l.basisRot) + C),
              R * Math.sin(l.basisRot + Math.PI) + A),
            D = -R * Math.cos(l.basisRot + Math.PI) + C,
            b =
              (m - e) ** 2 + (g - t) ** 2 <= (1.5 * SEL_STYLES.handleRad) ** 2;
          b && (this.under.k0 = 2);
          var O =
            (L - e) ** 2 + (D - t) ** 2 <= (1.5 * SEL_STYLES.handleRad) ** 2;
          if ((O && (this.under.k0 = 3), b || O))
            return (this.under.type = "qubitcontrol"), !0;
          for (var M = 0; M < E.numQubits; M++) {
            var v = E.qubitList[M];
            (A =
              FIELD.analysisLeft +
              ANALYSIS.xPad +
              ANALYSIS.xGap +
              (M + 1) * FIELD.tileWidth),
              (C = FIELD.topPad + ANALYSIS.yPad + FIELD.tileHeight / 2);
            if (M != l.entInd) {
              var w =
                (A - e) ** 2 + (C - t) ** 2 <=
                ((0.7 * FIELD.tileWidth) / 2) ** 2;
              if (w)
                return (
                  (v.isHovered = !0),
                  (this._under = { type: "qubit", i0: v.i0, j0: v.j0, k0: v }),
                  !0
                );
              v.isHovered = !1;
            }
          }
        } else {
          (p =
            FIELD.analysisLeft +
            ANALYSIS.xPad +
            ANALYSIS.xGap +
            FIELD.tileWidth),
            (f = FIELD.topPad + ANALYSIS.yMeasure + 4 * ANALYSIS.basisSpace),
            (T = this.grab.k0.measureRot),
            (R = (3 * SEL_STYLES.r0) / 4),
            (m = p - R * Math.cos(T + Math.PI / 2)),
            (g = f - R * Math.sin(T + Math.PI / 2)),
            (I =
              (m - e) ** 2 + (g - t) ** 2 <= (1.5 * SEL_STYLES.handleRad) ** 2);
          if (I)
            return (
              (this._under = {
                type: "analysisgatecontrol",
                i0: -1,
                j0: -1,
                k0: u,
              }),
              !0
            );
          (A =
            FIELD.analysisLeft +
            ANALYSIS.xPad +
            ANALYSIS.xGap +
            FIELD.tileWidth),
            (C = FIELD.topPad + ANALYSIS.yPad + FIELD.tileHeight / 2),
            (R = (3 * SEL_STYLES.r0) / 4),
            (m = R * Math.sin(l.basisRot) + A),
            (g = -R * Math.cos(l.basisRot) + C),
            (L = R * Math.sin(l.basisRot + Math.PI) + A),
            (D = -R * Math.cos(l.basisRot + Math.PI) + C),
            (b =
              (m - e) ** 2 + (g - t) ** 2 <= (1.5 * SEL_STYLES.handleRad) ** 2);
          b && (this.under.k0 = 2);
          O = (L - e) ** 2 + (D - t) ** 2 <= (1.5 * SEL_STYLES.handleRad) ** 2;
          if ((O && (this.under.k0 = 3), b || O))
            return (this.under.type = "qubitcontrol"), !0;
        }
        return (
          (this._under = { type: "analysiswindow", i0: 0, j0: 0, k0: 0 }), !0
        );
      }
    }
    return !1;
  }
  checkQubitManip(e, t) {
    if ("qubiting" === this.state) {
      var i = this.grab.k0,
        a = IBOARD.x0 + (STATE.grab.i0 + 0.5) * FIELD.tileWidth + FIELD.leftPad,
        r = IBOARD.y0 + (STATE.grab.j0 + 0.5) * FIELD.tileHeight + FIELD.topPad,
        s = e >= a - SEL_STYLES.r0 && e <= a + SEL_STYLES.r0,
        o = t >= r - SEL_STYLES.r0 && t <= r + SEL_STYLES.r0;
      if (s && o) {
        var n = a + FIELD.tileWidth / 3.5,
          l = r + FIELD.tileWidth / 6 + SEL_STYLES.iconWidth / 2;
        if (Helper.dist(n - e, l - t) < SEL_STYLES.iconWidth / 2)
          return (
            (this._under = {
              type: "qubiticon",
              i0: STATE.grab.i0,
              j0: STATE.grab.j0,
              k0: 0,
            }),
            !0
          );
        var h = (3 * SEL_STYLES.r0) / 4,
          d = h * Math.sin(i.basisRot) + a,
          u = -h * Math.cos(i.basisRot) + r,
          c = h * Math.sin(i.basisRot + Math.PI) + a,
          I = -h * Math.cos(i.basisRot + Math.PI) + r,
          E = (d - e) ** 2 + (u - t) ** 2 <= (1.5 * SEL_STYLES.handleRad) ** 2;
        E && (this.under.k0 = 0);
        var S =
          (c - e) ** 2 + (I - t) ** 2 <= (1.5 * SEL_STYLES.handleRad) ** 2;
        if ((S && (this.under.k0 = 1), E || S))
          return (this.under.type = "qubitcontrol"), !0;
      }
    }
    return !1;
  }
}
