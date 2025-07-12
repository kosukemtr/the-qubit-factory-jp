class ConfirmationBox {
  static openTitle() {
    (document.getElementById("greyoverlay").style.visibility = "visible"),
      (document.getElementById("greyoverlay").style.opacity = 0.75),
      (STATE.state = "confirming"),
      CANV.confirm.activate();
  }
  static open() {
    (STATE.mode = "confirming"), CANV.confirm.activate();
  }
  static close(e, t = 0) {
    if (0 === t) {
      if (0 === e) {
        IBOARD = new Board(CANV.interface.ctx, FIELD.cols, FIELD.rows);
        var i = !1;
        if (
          (2 === STATE.blueprint && FIELD.developerMode && (i = !0),
          FIELD.forceSingle)
        )
          (IBOARD = IBOARD.copyNoGates()),
            IBOARD.setAllGates(
              JSON.parse(
                JSON.stringify(INTERRUPTS.keep[STATE.blueprint].gates),
              ),
            ),
            (IBOARD._tiles = [...INTERRUPTS.keep[STATE.blueprint].tiles]),
            LevelRefresh(SCENARIO.name, IBOARD),
            UNDOREDO.reset(!0),
            Blueprint.draw();
        else {
          var a = LevelGates(SCENARIO.name, i);
          IBOARD.setAllBits(a.allBits, a.allQubits, a.entGroups),
            IBOARD.setAllGates(a.allGates),
            (IBOARD._tiles = a.tiles),
            LevelRefresh(SCENARIO.name, IBOARD);
        }
        return (
          (STATE.mode = "constructing"),
          (TIMER.grey = TIMER.greyMax),
          CANV.confirm.deactivate(),
          (STATE.state = "free"),
          (STATE.selected = { type: "none", i0: -1, j0: -1, k0: -1 }),
          (STATE.grab = { type: "none", i0: -1, j0: -1, k0: -1 }),
          -1 !== MENU.selected && (STATE.state = "placing"),
          UNDOREDO.add(),
          (TIMER.construct = -1),
          CANV.interface.clear(),
          void CANV.controls.clear()
        );
      }
      return 1 === e
        ? ((STATE.mode = "constructing"),
          (TIMER.grey = TIMER.greyMax),
          CANV.confirm.deactivate(),
          (STATE.state = "free"),
          (STATE.selected = { type: "none", i0: -1, j0: -1, k0: -1 }),
          (STATE.grab = { type: "none", i0: -1, j0: -1, k0: -1 }),
          -1 !== MENU.selected && (STATE.state = "placing"),
          (TIMER.construct = -1),
          CANV.interface.clear(),
          void CANV.controls.clear())
        : void 0;
    }
    if (1 === t) {
      if (0 === e)
        return (
          (STATE.state = "options"),
          (TIMER.grey = TIMER.greyMax),
          CANV.confirm.deactivate(),
          localStorage.clear(),
          InitScenario.loadAll(),
          (STATE.selected = { type: "none", i0: -1, j0: -1, k0: -1 }),
          (STATE.under = { type: "none", i0: -1, j0: -1, k0: -1 }),
          (STATE.underLast = { type: "none", i0: -1, j0: -1, k0: -1 }),
          void (STATE.grab = { type: "none", i0: -1, j0: -1, k0: -1 })
        );
      if (1 === e)
        return (
          (STATE.state = "options"),
          (TIMER.grey = TIMER.greyMax),
          void CANV.confirm.deactivate()
        );
    }
  }
  static checkUnder(e, t) {
    STATE.pos = ControlState.pos(e);
    var i = t * FIELD.tileWidth,
      a = STATE.pos.x - 11 * i - FIELD.leftPad,
      r = STATE.pos.y - 7 * i - FIELD.topPad,
      s = r >= 1.5 * i && r <= 2.1 * i;
    return s && a > 1.5 * i && a < 2.5 * i
      ? 0
      : s && a > 3.5 * i && a < 4.5 * i
        ? 1
        : -1;
  }
  static loop(e = 1, t = 0) {
    var i = ConfirmationBox.checkUnder(INPUTS.mousemove, e);
    if (
      (INPUTS.keydown &&
        (27 === INPUTS.keydown.keyCode && ConfirmationBox.close(1, t),
        (INPUTS.keydown = 0)),
      INPUTS.mousedown)
    ) {
      if (((INPUTS.mousedown = 0), 0 === i))
        return SFX.click.play(), void ConfirmationBox.close(i, t);
      if (1 === i) return SFX.click.play(), void ConfirmationBox.close(i, t);
    }
    CANV.confirm.clear();
    var a = CANV.confirm.ctx,
      r = e * FIELD.tileWidth,
      s = r / 24,
      o = r / 2,
      n = [s, s, 6 * r - s, 6 * r - s],
      l = [s, 2.5 * r - s, 2.5 * r - s, s],
      h = [o, o, o, o],
      d = new Path2D(Helper.makeRoundedPath(n, l, h, 1, 0, 0));
    a.save(),
      (a.fillStyle = "#232b24"),
      (a.lineWidth = r / 24),
      (a.strokeStyle = "#000"),
      (a.shadowColor = "transparent"),
      a.fill(d),
      a.stroke(d),
      a.restore(),
      a.save(),
      a.clip(d, "evenodd"),
      "title" === STATE.mode
        ? Textures.drawFiber(a, 0, 0, 6 * r, 2.5 * r, FIELD.tileWidth / 96, 0.5)
        : Textures.drawFiber(
            a,
            0,
            0,
            6 * r,
            2.5 * r,
            FIELD.tileWidth / 48,
            0.5,
          ),
      a.restore(),
      a.save(),
      (a.textBaseline = "top"),
      (a.textAlign = "center"),
      (a.fillStyle = "antiquewhite"),
      (a.font = (1.2 * r) / 3 + "px 'Courier New', 'Noto Sans Mono CJK JP'"),
      (a.shadowBlur = 2),
      (a.shadowOffsetX = 2),
      (a.shadowOffsetY = 2),
      (a.shadowColor = "black"),
      0 === t
        ? (a.fillText("現在のボードをクリアします:", 3 * r, 0.25 * r),
          a.fillText("よろしいですか?", 3 * r, 0.75 * r))
        : 1 === t &&
          (a.fillText("保存データを削除します:", 3 * r, 0.25 * r),
          a.fillText("よろしいですか?", 3 * r, 0.75 * r));
    (n = [1.5 * r, 1.5 * r, 2.5 * r, 2.5 * r]),
      (l = [1.5 * r, 2.1 * r, 2.1 * r, 1.5 * r]),
      (h = [r / 4, r / 4, r / 4, r / 4]),
      (d = new Path2D(Helper.makeRoundedPath(n, l, h, 1, 0, 0)));
    0 === i && ((a.fillStyle = "grey"), a.fill(d)),
      (a.lineWidth = r / 24),
      (a.strokeStyle = "white"),
      a.stroke(d);
    d = new Path2D(Helper.makeRoundedPath(n, l, h, 1, 2 * r, 0));
    return (
      1 === i && ((a.fillStyle = "grey"), a.fill(d)),
      (a.lineWidth = r / 24),
      (a.strokeStyle = "white"),
      a.stroke(d),
      (a.fillStyle = "antiquewhite"),
      a.fillText("はい", 2 * r, 1.6 * r),
      a.fillText("いいえ", 4 * r, 1.6 * r),
      a.restore(),
      -1
    );
  }
}
