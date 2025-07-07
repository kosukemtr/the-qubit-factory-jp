class Token {
  constructor(e, t, i, a, r, s, o, n, l, h) {
    (this._name = e),
      (this._label = t),
      (this._link = i),
      (this._i0 = a),
      (this._j0 = r),
      (this._pathInfo = s),
      (this._isHover = !1),
      (this._isAvailable = o),
      (this._isComplete = n),
      (this._isStar = l),
      (this._isHidden = h);
  }
  get name() {
    return this._name;
  }
  get label() {
    return this._label;
  }
  get link() {
    return this._link;
  }
  get i0() {
    return this._i0;
  }
  get j0() {
    return this._j0;
  }
  get pathInfo() {
    return this._pathInfo;
  }
  get isHover() {
    return this._isHover;
  }
  get isHidden() {
    return this._isHidden;
  }
  get isAvailable() {
    return this._isAvailable;
  }
  set name(e) {
    this._name = e;
  }
  set label(e) {
    this._label = e;
  }
  set link(e) {
    this._link = e;
  }
  set i0(e) {
    this._i0 = e;
  }
  set j0(e) {
    this._j0 = e;
  }
  set pathInfo(e) {
    this._pathInfo = e;
  }
  set isHover(e) {
    this._isHover = e;
  }
  set isAvailable(e) {
    this._isAvailable = e;
  }
}
