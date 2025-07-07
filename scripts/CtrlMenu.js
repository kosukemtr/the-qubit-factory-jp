class CtrlMenu {
  constructor(e, t, i, a, r, s) {
    (this._label = e),
      (this._x0 = t),
      (this._y0 = i),
      (this._tileMargin = a),
      (this._numWidth = r),
      (this._numHeight = s),
      (this._hovered = -1),
      (this._selected = -1),
      (this._selRot = 0),
      (this._selState = 0),
      (this._buttons = []),
      (this._closure = 0);
  }
  get closure() {
    return this._closure;
  }
  get label() {
    return this._label;
  }
  get x0() {
    return this._x0;
  }
  get y0() {
    return this._y0;
  }
  get w0() {
    return (FIELD.tileWidth + this.tileMargin) * this.numWidth;
  }
  get h0() {
    return (FIELD.tileHeight + this.tileMargin) * this.numHeight;
  }
  get tileMargin() {
    return this._tileMargin;
  }
  get numWidth() {
    return this._numWidth;
  }
  get numHeight() {
    return this._numHeight;
  }
  get hovered() {
    return this._hovered;
  }
  get selected() {
    return this._selected;
  }
  get buttons() {
    return this._buttons;
  }
  get selRot() {
    return this._selRot;
  }
  get selState() {
    return this._selState;
  }
  set closure(e) {
    this._closure = e;
  }
  set x0(e) {
    this._x0 = e;
  }
  set y0(e) {
    this._y0 = e;
  }
  set tileMargin(e) {
    this._tileMargin = e;
  }
  set numWidth(e) {
    this._numWidth = e;
  }
  set numHeight(e) {
    this._numHeight = e;
  }
  set hovered(e) {
    this._hovered = e;
  }
  set selected(e) {
    (this._selRot = 0), (this._selected = e);
  }
  set buttons(e) {
    this._buttons = e;
  }
  set selRot(e) {
    this._selRot = e;
  }
  set selState(e) {
    this._selState = e;
  }
  addButton(e) {
    this.buttons.push(e);
  }
  gridPos(e, t) {
    var i = this.x0 + e * FIELD.tileWidth + (e + 0.5) * this.tileMargin,
      a = this.y0 + t * FIELD.tileWidth + (t + 0.5) * this.tileMargin;
    return { x0: i, y0: a };
  }
  setSelected(e, t) {
    var i = this.buttons.length;
    this.selected = -1;
    for (var a = 0; a < i; a++)
      this.buttons[a].i0 === e && this.buttons[a].j0 === t
        ? ((this.selected = a),
          (this.selState = this.buttons[a].menuState),
          (this.buttons[a].selected = !0))
        : (this.buttons[a].selected = !1);
  }
  checkTransition() {
    for (var e = this.buttons.length, t = 0; t < e; t++)
      if (!0 === this.buttons[t].transition.status || this.buttons[t].animating)
        return !0;
    return !1;
  }
  getButton(e, t) {
    for (var i = this.buttons.length, a = 0; a < i; a++)
      if (this.buttons[a].i0 === e && this.buttons[a].j0 === t)
        return this.buttons[a];
    return -1;
  }
  getNamedButton(e) {
    for (var t = this.buttons.length, i = 0; i < t; i++)
      if (this.buttons[i].tileType === e) return this.buttons[i];
    return -1;
  }
  setHovered(e, t) {
    var i = this.buttons.length;
    this.hovered = -1;
    for (var a = 0; a < i; a++)
      this.buttons[a].i0 === e && this.buttons[a].j0 === t
        ? ((this.hovered = a), (this.buttons[a].hovered = !0))
        : (this.buttons[a].hovered = !1);
  }
  removeHovered() {
    var e = this.buttons.length;
    this.hovered = -1;
    for (var t = 0; t < e; t++) this.buttons[t].hovered = !1;
  }
  findTile(e, t) {
    var i = Math.floor((e - this.x0) / (FIELD.tileWidth + this.tileMargin)),
      a = Math.floor((t - this.y0) / (FIELD.tileHeight + this.tileMargin));
    return { i0: i, j0: a };
  }
  drawControl(e, t = 0, i = 0) {
    for (var a = e.ctx, r = 0; r < this.buttons.length; r++) {
      var s = this.buttons[r],
        o = this.gridPos(s.i0, s.j0),
        n = s.getPath(a);
      n.draw(a, o.x0 + t, o.y0 + i, FIELD.tileWidth, FIELD.tileHeight);
    }
  }
  reset(e) {
    var t = this.getNamedButton("ctrlStart"),
      i = this.getNamedButton("ctrlPlay"),
      a = this.getNamedButton("ctrlStep"),
      r = this.getNamedButton("ctrlBack"),
      s = this.getNamedButton("ctrlNorm");
    "finished" === STATE.mode || "finished" === ROBOT.oldMode
      ? ((t.tileProperties = {
          flash: 0,
          type: 1,
          depth: 0,
          closure: 0,
          hovered: !1,
        }),
        (i.tileProperties = {
          flash: 0,
          type: 1,
          depth: 0,
          closure: 1,
          hovered: !1,
        }),
        (a.tileProperties = {
          flash: 0,
          type: 0,
          depth: 0,
          closure: 1,
          hovered: !1,
        }),
        (r.tileProperties = {
          flash: 0,
          type: 1,
          depth: 0,
          closure: 0,
          hovered: !1,
        }),
        (s.tileProperties = {
          flash: 0,
          type: 0,
          depth: 0,
          closure: 1,
          hovered: !1,
        }))
      : "running" === STATE.mode
        ? ((t.tileProperties = {
            flash: 0,
            type: 1,
            depth: 0,
            closure: 0,
            hovered: !1,
          }),
          (i.tileProperties = {
            flash: 0,
            type: 0,
            depth: 0,
            closure: 0,
            hovered: !1,
          }),
          (a.tileProperties = {
            flash: 0,
            type: 0,
            depth: 0,
            closure: 0,
            hovered: !1,
          }),
          (r.tileProperties = {
            flash: 0,
            type: 0,
            depth: 0,
            closure: 0,
            hovered: !1,
          }),
          (s.tileProperties = {
            flash: 0,
            type: 0,
            depth: 0,
            closure: 0,
            hovered: !1,
          }))
        : "paused" === STATE.mode
          ? ((t.tileProperties = {
              flash: 0,
              type: 1,
              depth: 0,
              closure: 0,
              hovered: !1,
            }),
            (i.tileProperties = {
              flash: 0,
              type: 1,
              depth: 0,
              closure: 0,
              hovered: !1,
            }),
            (a.tileProperties = {
              flash: 0,
              type: 1,
              depth: 0,
              closure: 0,
              hovered: !1,
            }),
            (r.tileProperties = {
              flash: 0,
              type: 1,
              depth: 0,
              closure: 0,
              hovered: !1,
            }),
            (s.tileProperties = {
              flash: 0,
              type: 1,
              depth: 0,
              closure: 0,
              hovered: !1,
            }))
          : ((t.tileProperties = {
              flash: 0,
              type: 0,
              depth: 0,
              closure: 0,
              hovered: !1,
            }),
            (i.tileProperties = {
              flash: 0,
              type: 0,
              depth: 0,
              closure: 1,
              hovered: !1,
            }),
            (a.tileProperties = {
              flash: 0,
              type: 0,
              depth: 0,
              closure: 1,
              hovered: !1,
            }),
            (r.tileProperties = {
              flash: 0,
              type: 0,
              depth: 0,
              closure: 1,
              hovered: !1,
            }),
            (s.tileProperties = {
              flash: 0,
              type: 0,
              depth: 0,
              closure: 1,
              hovered: !1,
            })),
      (t.transition = { status: !1, start: -1, stop: -1 }),
      (i.transition = { status: !1, start: -1, stop: -1 }),
      (a.transition = { status: !1, start: -1, stop: -1 }),
      (r.transition = { status: !1, start: -1, stop: -1 }),
      (s.transition = { status: !1, start: -1, stop: -1 }),
      e.clear(),
      CTRLMENU.drawControl(e);
  }
  static initialize() {
    var e = new CtrlMenu(0, 0, 0, 0, 5, 1);
    return (
      e.addButton(
        new ControlButton(
          0,
          0,
          0,
          "ctrlStart",
          { flash: 0, type: 0, depth: 0, closure: 0, hovered: !1 },
          "",
          0,
        ),
      ),
      e.addButton(
        new ControlButton(
          0,
          2,
          0,
          "ctrlPlay",
          { flash: 0, type: 0, depth: 0, closure: 1, hovered: !1 },
          "",
          0,
        ),
      ),
      e.addButton(
        new ControlButton(
          0,
          3,
          0,
          "ctrlStep",
          { flash: 0, type: 0, depth: 0, closure: 1, hovered: !1 },
          "",
          0,
        ),
      ),
      e.addButton(
        new ControlButton(
          0,
          1,
          0,
          "ctrlBack",
          { flash: 0, type: 0, depth: 0, closure: 1, hovered: !1 },
          "",
          0,
        ),
      ),
      e.addButton(
        new ControlButton(
          0,
          4,
          0,
          "ctrlNorm",
          { flash: 0, type: 0, depth: 0, closure: 1, hovered: !1 },
          "",
          0,
        ),
      ),
      e
    );
  }
}
