class Button {
  constructor(e, t, i, a, r, s = 0, o = {}, n = !1) {
    (this._label = e),
      (this._i0 = t),
      (this._j0 = i),
      (this._hovered = !1),
      (this._selected = !1),
      (this._isGrey = n),
      (this._tile = a),
      (this._tooltip = r),
      (this._menuState = s),
      (this._defaultProperties = o);
  }
  get isGrey() {
    return this._isGrey;
  }
  get label() {
    return this._label;
  }
  get i0() {
    return this._i0;
  }
  get j0() {
    return this._j0;
  }
  get hovered() {
    return this._hovered;
  }
  get selected() {
    return this._selected;
  }
  get tile() {
    return this._tile;
  }
  get tooltip() {
    return this._tooltip;
  }
  get menuState() {
    return this._menuState;
  }
  get defaultProperties() {
    return this._defaultProperties;
  }
  set isGrey(e) {
    this._isGrey = e;
  }
  set label(e) {
    this._label = e;
  }
  set i0(e) {
    this._i0 = e;
  }
  set j0(e) {
    this._j0 = e;
  }
  set hovered(e) {
    this._hovered = e;
  }
  set selected(e) {
    this._selected = e;
  }
  set tile(e) {
    this._tile = e;
  }
  set tooltip(e) {
    this._tooltip = e;
  }
  set menuState(e) {
    this._menuState = e;
  }
  gridPos(e, t) {
    var i = this.x0 + e * this.tileWidth + (e + 1) * this.tileMargin,
      a = this.y0 + t * this.tileWidth + (t + 1) * this.tileMargin;
    return { x0: i, y0: a };
  }
  clear() {
    this._defaultProperties = {};
  }
}
