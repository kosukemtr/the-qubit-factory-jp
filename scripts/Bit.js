class Bit {
  constructor(e, t, i, a, r, s, o, n = -1) {
    (this._i0 = e),
      (this._j0 = t),
      (this._last = i),
      (this._next = a),
      (this._action = r),
      (this._value = s),
      (this._layer = o),
      (this._isGhost = !1),
      n < 0 ? ((this._id = GLOBAL_ID), (GLOBAL_ID += 1)) : (this._id = n);
  }
  get i0() {
    return this._i0;
  }
  get j0() {
    return this._j0;
  }
  get last() {
    return this._last;
  }
  get next() {
    return this._next;
  }
  get action() {
    return this._action;
  }
  get value() {
    return this._value;
  }
  get layer() {
    return this._layer;
  }
  get id() {
    return this._id;
  }
  get isGhost() {
    return this._isGhost;
  }
  set i0(e) {
    this._i0 = e;
  }
  set j0(e) {
    this._j0 = e;
  }
  set last(e) {
    this._last = e;
  }
  set next(e) {
    this._next = e;
  }
  set action(e) {
    this._action = e;
  }
  set value(e) {
    this._value = e;
  }
  set layer(e) {
    this._layer = e;
  }
  set isGhost(e) {
    this._isGhost = e;
  }
  pack() {
    var e = [
      this._i0,
      this._j0,
      this._last,
      this._next,
      this._action,
      this._value,
      this._layer,
      this._isGhost,
    ];
    return e;
  }
  copy() {
    var e = new Bit(
      this._i0,
      this._j0,
      this._last,
      this._next,
      this._action,
      this._value,
      this._layer,
      this._id,
    );
    return (e.isGhost = this.isGhost), e;
  }
  static moveAdjacentCombine(e, t, i, a) {
    if (44 === i)
      var r = a.getBit(e - 1, t + 1),
        s = a.getBit(e - 2, t),
        o = a.getBit(e - 1, t - 1);
    else if (45 === i)
      (r = a.getBit(e - 1, t - 1)),
        (s = a.getBit(e, t - 2)),
        (o = a.getBit(e + 1, t - 1));
    else if (46 === i)
      (r = a.getBit(e + 1, t - 1)),
        (s = a.getBit(e + 2, t)),
        (o = a.getBit(e + 1, t + 1));
    else if (47 === i)
      (r = a.getBit(e + 1, t + 1)),
        (s = a.getBit(e, t + 2)),
        (o = a.getBit(e - 1, t + 1));
    r && "move" === r.action && r.move(a),
      s && "move" === s.action && s.move(a),
      o && "move" === o.action && o.move(a);
  }
  findNextDir(e) {
    if (this._next >= 0) return this._next;
    var t = e.getTile(this._i0, this._j0);
    return (this._next = DIRCLASSIC.fromTo[this._last][t]), this._next;
  }
  move(e) {
    if ("halt" === this.action) return !0;
    var t = this.findNextDir(e),
      i = e.findAdjacent(this.i0, this.j0, this.findNextDir(t)),
      a = i.i1,
      r = i.j1,
      s = (this.next + 2) % 4,
      o = e.getTile(a, r),
      n = e.getTile(this.i0, this.j0),
      l = Math.floor(o / 20);
    if (DIRCLASSIC.fromTo[s][o] < 0 || [54, 55, 56, 57].includes(o))
      return (this.action = "halt"), !0;
    var h = e.getGate(a, r);
    if (h && "compare" === h.type) {
      if (a > this.i0) var d = 1;
      else if (a < this.i0) d = 3;
      if (r > this.j0) d = 2;
      else if (r < this.j0) d = 4;
      if (0 === h.state && this.isGhost) {
        h.state = d;
        var u = this.i0 + this.j0 * e.width,
          c = a + r * e.width;
        return (
          (this.i0 = a),
          (this.j0 = r),
          (this.last = s),
          (this.next = -1),
          (this.action = "freeze"),
          e.moveBit(this, u, c, this.layer, 0),
          (this.layer = 0),
          !0
        );
      }
      if (0 === h.state && !this.isGhost) {
        var I = !1;
        if (1 === d || 3 === d)
          var E = e.getBit(a, r + 1),
            S = e.getBit(a, r - 1);
        else (E = e.getBit(a + 1, r)), (S = e.getBit(a - 1, r));
        return (
          E && "move" === E.action && (I = !0),
          S && "move" === S.action && (I = !0),
          !I && ((this.action = "halt"), !0)
        );
      }
      if (h.state != d && h.state < 5) {
        (h.state = 5), (h.action = "precompare");
        (u = this.i0 + this.j0 * e.width), (c = a + r * e.width);
        return (
          (this.i0 = a),
          (this.j0 = r),
          (this.last = s),
          (this.next = -1),
          (this.action = "freeze"),
          e.moveBit(this, u, c, this.layer, 1),
          (this.layer = 1),
          [44, 45, 46, 47].includes(n) && Bit.moveAdjacentCombine(a, r, n, e),
          !0
        );
      }
    }
    if (!e.checkIfEmpty(a, r))
      return !e.checkIfMoving(a, r) && ((this.action = "halt"), !0);
    (u = this.i0 + this.j0 * e.width), (c = a + r * e.width);
    if (0 === l || 1 === l || 5 === l)
      return (
        (this.i0 = a),
        (this.j0 = r),
        (this.last = s),
        (this.next = -1),
        (this.action = "halt"),
        e.moveBit(this, u, c, this.layer),
        (this.layer = 0),
        [44, 45, 46, 47].includes(n) && Bit.moveAdjacentCombine(a, r, n, e),
        !0
      );
    if (2 === l || 4 === l) {
      h = e.getGate(a, r, e.state[c]);
      var f = "free" === h.action || "reset" === h.action;
      if ("switch" === h.type && 1 === h.state) h.rot < 2 && (f = !1);
      else {
        var p = e.checkWhichControl(a, r, "switch").gate;
        p && 1 === p.state && p.rot > 1 && (f = !1);
      }
      if (f) {
        if (
          ((this.i0 = a),
          (this.j0 = r),
          (this.last = s),
          (this.next = -1),
          (this.action = "wait"),
          (h.action = "pretransform"),
          e.moveBit(this, u, c, this.layer),
          (this.layer = 0),
          [44, 45, 46, 47].includes(n) && Bit.moveAdjacentCombine(a, r, n, e),
          "cSplit" === h.type)
        ) {
          I = [0, 0, 0, 0];
          var T = e.getTile(this.i0 - 1, this.j0),
            R = e.getTile(this.i0, this.j0 - 1),
            m = e.getTile(this.i0 + 1, this.j0),
            g = e.getTile(this.i0, this.j0 + 1),
            A = [54, 55, 56, 57];
          (I[0] = !A.includes(T) && DIRCLASSIC.enterR.indexOf(T) >= 0),
            (I[1] = !A.includes(R) && DIRCLASSIC.enterB.indexOf(R) >= 0),
            (I[2] = !A.includes(m) && DIRCLASSIC.enterL.indexOf(m) >= 0),
            (I[3] = !A.includes(g) && DIRCLASSIC.enterT.indexOf(g) >= 0);
          for (var C = 0, L = 0; L < 4; L++)
            if (L !== h.orient && I[L]) {
              if (0 === C) this.next = L;
              else {
                var D = new Bit(
                  this._i0,
                  this._j0,
                  this._last,
                  this._next,
                  this._action,
                  this._value,
                  C,
                );
                (D.next = L), e.setBit(D);
              }
              C++;
            }
        }
        return !0;
      }
      return (this.action = "halt"), !0;
    }
  }
}
