class Qubit {
  constructor(e, t, i, a, r, s, o = -1) {
    (this._i0 = e),
      (this._j0 = t),
      (this._last = i),
      (this._next = a),
      (this._action = r),
      (this._isGhost = !1),
      (this._isHovered = !1),
      (this._entGroup = 0),
      (this._entInd = -1),
      (this._entID = -1),
      (this._ent = 0),
      (this._measureRot = 0),
      s > Math.PI && (s -= 2 * Math.PI),
      (this._ampsComp = [Math.cos(s / 2), Math.sin(s / 2)]),
      "natural" === OPTS.basis
        ? ((this._ampsFinal = [1, 0]),
          (this._basisRot = s),
          (this._basisVecs = [
            Math.cos(s / 2),
            Math.sin(s / 2),
            -Math.sin(s / 2),
            Math.cos(s / 2),
          ]),
          (this._ampsRot = [1, 0]),
          (this._lockedBasis = !1))
        : "free" === OPTS.basis
          ? ((this._ampsFinal = [1, 0]),
            (this._basisRot = s),
            (this._basisVecs = [
              Math.cos(s / 2),
              Math.sin(s / 2),
              -Math.sin(s / 2),
              Math.cos(s / 2),
            ]),
            (this._ampsRot = [1, 0]),
            (this._lockedBasis = !1))
          : "comp" === OPTS.basis
            ? ((this._ampsRot = [...this._ampsComp]),
              (this._ampsFinal = [...this._ampsComp]),
              (this._basisRot = 0),
              (this._basisVecs = [1, 0, 0, 1]),
              (this._lockedBasis = !0))
            : ((this._ampsFinal = [1, 0]),
              (this._basisRot = s),
              (this._basisVecs = [
                Math.cos(s / 2),
                Math.sin(s / 2),
                -Math.sin(s / 2),
                Math.cos(s / 2),
              ]),
              (this._ampsRot = [1, 0]),
              (this._lockedBasis = !1)),
      o < 0 ? ((this._id = GLOBAL_ID), (GLOBAL_ID += 1)) : (this._id = o);
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
  get id() {
    return this._id;
  }
  get isGhost() {
    return this._isGhost;
  }
  get ampsComp() {
    return this._ampsComp;
  }
  get basisRot() {
    return (
      this._basisRot > Math.PI && (this._basisRot -= 2 * Math.PI),
      this._basisRot < -Math.PI && (this._basisRot += 2 * Math.PI),
      this._basisRot
    );
  }
  get measureRot() {
    return this._measureRot;
  }
  get ampsRot() {
    return this._ampsRot;
  }
  get ent() {
    return this._ent;
  }
  get ampsFinal() {
    return this.entGroup ? this.entGroup._ampsFinal : this._ampsFinal;
  }
  get isHovered() {
    return this._isHovered;
  }
  get lockedBasis() {
    return this._lockedBasis;
  }
  get entGroup() {
    return this._entGroup;
  }
  get basisVecs() {
    return this._basisVecs;
  }
  get entInd() {
    return this._entInd;
  }
  get entID() {
    return this._entID;
  }
  get offsets() {
    return this.entGroup ? this.entGroup.offsets : [0, this.ampsRot[1] ** 2];
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
  set isGhost(e) {
    this._isGhost = e;
  }
  set entGroup(e) {
    this._entGroup = e;
  }
  set ampsComp(e) {
    this._ampsComp = e;
  }
  set basisRot(e) {
    this._basisRot = e;
  }
  set basisVecs(e) {
    this._basisVecs = e;
  }
  set ampsRot(e) {
    this._ampsRot = e;
  }
  set measureRot(e) {
    this._measureRot = e;
  }
  set ampsFinal(e) {
    this._ampsFinal = e;
  }
  set isHovered(e) {
    this._isHovered = e;
  }
  set lockedBasis(e) {
    this._lockedBasis = e;
  }
  set entGroup(e) {
    this._entGroup = e;
  }
  set entInd(e) {
    this._entInd = e;
  }
  set entID(e) {
    this._entID = e;
  }
  set ent(e) {
    this._ent = e;
  }
  setPolarize(e) {
    e > Math.PI && (e -= 2 * Math.PI),
      (this._basisRot = e),
      (this._basisVecs = [
        Math.cos(e / 2),
        Math.sin(e / 2),
        -Math.sin(e / 2),
        Math.cos(e / 2),
      ]),
      (this._ampsComp = [Math.cos(e / 2), Math.sin(e / 2)]),
      (this._ampsRot = [1, 0]),
      (this._ampsFinal = [1, 0]);
  }
  copy() {
    var e = new Qubit(
      this._i0,
      this._j0,
      this._last,
      this._next,
      this._action,
      this._basisRot,
      this._id,
    );
    return (
      (e.isGhost = this.isGhost),
      (e.basisRot = this.basisRot),
      (e.entGroup = this.entGroup),
      (e.lockedBasis = this.lockedBasis),
      (e.basisVecs = [...this.basisVecs]),
      (e.ampsComp = [...this.ampsComp]),
      (e.ampsRot = [...this.ampsRot]),
      (e.ampsFinal = [...this.ampsFinal]),
      (e.entInd = this.entInd),
      (e.entID = this.entID),
      (e.measureRot = this.measureRot),
      (e.ent = this.ent),
      e
    );
  }
  computeEnt() {
    return (
      this.entGroup
        ? (this.ent = this.entGroup.computeEnt(this.entInd))
        : (this.ent = 0),
      this.ent
    );
  }
  computeNaturalBasis() {
    if (this.entGroup) var e = this.entGroup.computeNaturalBasis(this.entInd);
    else {
      var t = this.ampsComp[0] ** 2,
        i = this.ampsComp[0] * this.ampsComp[1],
        a = Math.sqrt(4 * i ** 2 + 4 * t ** 2 - 4 * t + 1),
        r = (1 + a) / 2,
        s = 0.001;
      if (r < 0.5 + s) e = 0;
      else if (Math.abs(i) >= s) e = 2 * Math.atan((r - t) / i);
      else if (t >= 0.5) e = 0;
      else if (t < 0.5) e = Math.PI;
    }
    return e;
  }
  setEntGroup(e, t) {
    (this.entGroup = e), (this.entInd = t), (this.entID = e.id);
  }
  setAmpsComp(e) {
    (this.ampsComp = [Math.cos(e / 2), Math.sin(e / 2)]), this.computeRotAmps();
  }
  computeMeasureProb() {
    if (this.entGroup) {
      var e = this.measureRot,
        t = this.entGroup.ampsComp,
        i = this.entGroup.allOrders[this.entInd],
        a = 0;
      for (const s of i) {
        var r = s + 2 ** this.entInd;
        a += (Math.cos(e / 2) * t[s] + Math.sin(e / 2) * t[r]) ** 2;
      }
      ANALYSIS.prob = a;
    } else {
      e = this.measureRot;
      var s = [Math.cos(e / 2), Math.sin(e / 2)];
      ANALYSIS.prob = (s[0] * this.ampsComp[0] + s[1] * this.ampsComp[1]) ** 2;
    }
  }
  computeRotAmps() {
    if (this.entGroup) this.entGroup.computeRotAmps();
    else {
      var e = [0, 0];
      (e[0] =
        this.basisVecs[0] * this.ampsComp[0] +
        this.basisVecs[1] * this.ampsComp[1]),
        (e[1] =
          this.basisVecs[2] * this.ampsComp[0] +
          this.basisVecs[3] * this.ampsComp[1]),
        (this.ampsRot = e),
        this.computeFinalAmps();
    }
  }
  rotateBasis(e) {
    if (this.entGroup) this.entGroup.rotateBasis(e, this.entInd);
    else {
      var t = [0, 0];
      (t[0] =
        Math.cos(e / 2) * this.ampsComp[0] +
        Math.sin(e / 2) * this.ampsComp[1]),
        (t[1] =
          -Math.sin(e / 2) * this.ampsComp[0] +
          Math.cos(e / 2) * this.ampsComp[1]),
        (this._ampsRot = t),
        (this.basisVecs = [
          Math.cos(e / 2),
          Math.sin(e / 2),
          -Math.sin(e / 2),
          Math.cos(e / 2),
        ]),
        this.computeFinalAmps();
    }
  }
  static computeFinalAmpsStatic(e, t) {
    var i = 1e-5;
    if (Math.abs(e[0]) < i) var a = 1;
    else a = Math.sign(e[0]);
    if (Math.abs(e[2]) < i) var r = 1;
    else r = Math.sign(e[2]);
    return [t[0] * a, t[1] * r];
  }
  computeFinalAmps() {
    if (this.entGroup) Entangled.computeFinalAmps(this.entGroup);
    else {
      var e = 1e-5;
      if (Math.abs(this.basisVecs[0]) < e) {
        this.basisRot = Math.PI;
        var t = Math.sign(this.basisVecs[1]);
      } else {
        this.basisRot = 2 * Math.atan(this.basisVecs[1] / this.basisVecs[0]);
        t = Math.sign(this.basisVecs[0]);
      }
      if (Math.abs(this.basisVecs[2]) < e) var i = Math.sign(this.basisVecs[3]);
      else i = Math.sign(this.basisVecs[2]);
      this.ampsFinal = [this.ampsRot[0] * t, this.ampsRot[1] * i];
    }
  }
  projectMeasure(e) {
    var t = 1e-5;
    if (
      (e > Math.PI + t && (e -= 2 * Math.PI),
      e < -Math.PI + t && (e += 2 * Math.PI),
      this.entGroup)
    )
      var i = this.entGroup.projectMeasure(this.entInd, e);
    else {
      var a = [Math.cos(e / 2), Math.sin(e / 2)];
      i = (a[0] * this.ampsComp[0] + a[1] * this.ampsComp[1]) ** 2;
    }
    return i;
  }
  applyMeasure(e) {
    var t = 1e-5;
    if (
      (e > Math.PI + t && (e -= 2 * Math.PI),
      e < -Math.PI + t && (e += 2 * Math.PI),
      Math.abs(e) < t && (e = 0),
      this.entGroup)
    ) {
      var i = this.entGroup,
        a = this.entGroup.applyMeasure(this.entInd, e);
      return i.removeUnentangled(), a;
    }
    var r = [Math.cos(e / 2), Math.sin(e / 2)],
      s =
        (Math.sin(e / 2),
        Math.cos(e / 2),
        (r[0] * this.ampsComp[0] + r[1] * this.ampsComp[1]) ** 2);
    if (s > Helper.random()) {
      (this.ampsComp = [Math.cos(e / 2), Math.sin(e / 2)]),
        this.lockedBasis ||
          (this.basisVecs = [
            Math.cos(e / 2),
            Math.sin(e / 2),
            -Math.sin(e / 2),
            Math.cos(e / 2),
          ]),
        this.computeRotAmps();
      a = 0;
    } else {
      (this.ampsComp =
        e <= 0
          ? [-Math.sin(e / 2), Math.cos(e / 2)]
          : [Math.sin(e / 2), -Math.cos(e / 2)]),
        this.lockedBasis ||
          (this.basisVecs = [
            Math.cos(e / 2),
            Math.sin(e / 2),
            -Math.sin(e / 2),
            Math.cos(e / 2),
          ]),
        this.computeRotAmps();
      a = 1;
    }
    return this.computeFinalAmps(), a;
  }
  applyRot(e) {
    var t = 1e-5;
    if (
      (e > Math.PI + t && (e -= 2 * Math.PI),
      e < -Math.PI + t && (e += 2 * Math.PI),
      this.entGroup)
    )
      this.entGroup.applyRot(this.entInd, e);
    else {
      var i = [0, 0];
      if (
        ((i[0] =
          Math.cos(e / 2) * this.ampsComp[0] -
          Math.sin(e / 2) * this.ampsComp[1]),
        (i[1] =
          Math.sin(e / 2) * this.ampsComp[0] +
          Math.cos(e / 2) * this.ampsComp[1]),
        (this._ampsComp = i),
        !this.lockedBasis)
      ) {
        var a = [0, 0, 0, 0];
        (a[0] =
          Math.cos(e / 2) * this.basisVecs[0] -
          Math.sin(e / 2) * this.basisVecs[1]),
          (a[1] =
            Math.sin(e / 2) * this.basisVecs[0] +
            Math.cos(e / 2) * this.basisVecs[1]),
          (a[2] =
            Math.cos(e / 2) * this.basisVecs[2] -
            Math.sin(e / 2) * this.basisVecs[3]),
          (a[3] =
            Math.sin(e / 2) * this.basisVecs[2] +
            Math.cos(e / 2) * this.basisVecs[3]),
          (this.basisVecs = a);
      }
      var r = [0, 0];
      (r[0] =
        this.basisVecs[0] * this.ampsComp[0] +
        this.basisVecs[1] * this.ampsComp[1]),
        (r[1] =
          this.basisVecs[2] * this.ampsComp[0] +
          this.basisVecs[3] * this.ampsComp[1]),
        (this._ampsRot = r),
        this.computeFinalAmps();
    }
  }
  applyFlip(e) {
    var t = 1e-5;
    if (
      (e > Math.PI + t && (e -= 2 * Math.PI),
      e < -Math.PI + t && (e += 2 * Math.PI),
      this.entGroup)
    )
      this.entGroup.applyFlip(this.entInd, e);
    else {
      var i = [0, 0];
      if (
        ((i[0] =
          Math.cos(e) * this.ampsComp[0] + Math.sin(e) * this.ampsComp[1]),
        (i[1] =
          Math.sin(e) * this.ampsComp[0] - Math.cos(e) * this.ampsComp[1]),
        (this._ampsComp = i),
        !this.lockedBasis)
      ) {
        this.basisRot;
        var a = [0, 0, 0, 0];
        (a[0] =
          Math.cos(e) * this.basisVecs[0] + Math.sin(e) * this.basisVecs[1]),
          (a[1] =
            Math.sin(e) * this.basisVecs[0] - Math.cos(e) * this.basisVecs[1]),
          (a[2] =
            Math.cos(e) * this.basisVecs[2] + Math.sin(e) * this.basisVecs[3]),
          (a[3] =
            Math.sin(e) * this.basisVecs[2] - Math.cos(e) * this.basisVecs[3]),
          (this.basisVecs = a);
      }
      var r = [0, 0];
      (r[0] =
        this.basisVecs[0] * this.ampsComp[0] +
        this.basisVecs[1] * this.ampsComp[1]),
        (r[1] =
          this.basisVecs[2] * this.ampsComp[0] +
          this.basisVecs[3] * this.ampsComp[1]),
        (this._ampsRot = r),
        this.computeFinalAmps();
    }
  }
  static computeAlfsManual(e, t) {
    var i = 1e-4;
    if (Math.abs(t[0]) < i) return [0, 1];
    if (Math.abs(t[1]) < i) return [1, 0];
    var a = 0.1,
      r = 2,
      s = [0, t[0] ** 2, 1, 1 + t[0] ** 2];
    e < 0.5 && (e += 1);
    for (var o = e + a / 2, n = e - a / 2, l = 2 * r - 1; l >= 0; l--)
      if (o > s[l]) {
        var h = l;
        break;
      }
    for (l = h; l >= 0; l--)
      if (n > s[l]) {
        var d = l;
        break;
      }
    var u = h - d + 1,
      c = new Array(r).fill(0);
    if (1 === u) d >= r ? (c[d - r] = 1) : (c[d] = 1);
    else {
      var I = (s[d + 1] - n) / a,
        E = (o - s[h]) / a;
      if (
        (d >= r ? (c[d - r] += I) : (c[d] += I),
        h >= r ? (c[h - r] += E) : (c[h] += E),
        u > 2)
      )
        for (l = d + 1; l < h; l++) {
          var S = (s[l + 1] - s[l]) / a;
          l >= r ? (c[l - r] += S) : (c[l] += S);
        }
    }
    return c;
  }
  computeAlfs(e) {
    if (this.entGroup) return this.entGroup.computeAlfs(e);
    var t = 1e-4;
    if (Math.abs(this._ampsRot[0]) < t) return [0, 1];
    if (Math.abs(this._ampsRot[1]) < t) return [1, 0];
    var i = 0.1,
      a = 2,
      r = [0, this._ampsRot[0] ** 2, 1, 1 + this._ampsRot[0] ** 2];
    e < 0.5 && (e += 1);
    for (var s = e + i / 2, o = e - i / 2, n = 2 * a - 1; n >= 0; n--)
      if (s > r[n]) {
        var l = n;
        break;
      }
    for (n = l; n >= 0; n--)
      if (o > r[n]) {
        var h = n;
        break;
      }
    var d = l - h + 1,
      u = new Array(a).fill(0);
    if (1 === d) h >= a ? (u[h - a] = 1) : (u[h] = 1);
    else {
      var c = (r[h + 1] - o) / i,
        I = (s - r[l]) / i;
      if (
        (h >= a ? (u[h - a] += c) : (u[h] += c),
        l >= a ? (u[l - a] += I) : (u[l] += I),
        d > 2)
      )
        for (n = h + 1; n < l; n++) {
          var E = (r[n + 1] - r[n]) / i;
          n >= a ? (u[n - a] += E) : (u[n] += E);
        }
    }
    return u;
  }
  arrow(e) {
    return this.entGroup ? this.entGroup.computeArrow(e, this.entInd) : e[1];
  }
  pack() {
    var e = 1e-5;
    if (Math.abs(this.ampsComp[0]) < e) var t = Math.PI;
    else t = 2 * Math.atan(this.ampsComp[1] / this.ampsComp[0]);
    var i = [
      this._i0,
      this._j0,
      this._last,
      this._next,
      this._action,
      t,
      this._isGhost,
    ];
    return i;
  }
  findNextDir(e) {
    if (this._next >= 0) return this._next;
    var t = e.getTile(this._i0, this._j0);
    return (this._next = DIRQUANTUM.fromTo[this._last][t]), this._next;
  }
  static moveAdjacentCombine(e, t, i, a) {
    if (64 === i)
      var r = a.getQubit(e - 1, t + 1),
        s = a.getQubit(e - 2, t),
        o = a.getQubit(e - 1, t - 1);
    else if (65 === i)
      (r = a.getQubit(e - 1, t - 1)),
        (s = a.getQubit(e, t - 2)),
        (o = a.getQubit(e + 1, t - 1));
    else if (66 === i)
      (r = a.getQubit(e + 1, t - 1)),
        (s = a.getQubit(e + 2, t)),
        (o = a.getQubit(e + 1, t + 1));
    else if (67 === i)
      (r = a.getQubit(e + 1, t + 1)),
        (s = a.getQubit(e, t + 2)),
        (o = a.getQubit(e - 1, t + 1));
    r && "move" === r.action && r.move(a),
      s && "move" === s.action && s.move(a),
      o && "move" === o.action && o.move(a);
  }
  move(e) {
    var t = e.findAdjacent(this.i0, this.j0, this.findNextDir(e)),
      i = t.i1,
      a = t.j1,
      r = (this.next + 2) % 4,
      s = e.getTile(i, a),
      o = e.getTile(this.i0, this.j0),
      n = Math.floor(s / 20);
    if (DIRQUANTUM.fromTo[r][s] < 0 || [74, 75, 76, 77].includes(s))
      return (this.action = "halt"), !0;
    var l = e.getGate(i, a);
    if (l && "qCompare" === l.type) {
      if (i > this.i0) var h = 1;
      else if (i < this.i0) h = 3;
      else if (a > this.j0) h = 2;
      else if (a < this.j0) h = 4;
      else h = 0;
      if (0 === l.state && this.isGhost) {
        l.state = h;
        var d = 1e-5;
        Math.abs(this.ampsComp[0]) < d
          ? (l.rot = Math.PI)
          : (l.rot = 2 * Math.atan(this.ampsComp[1] / this.ampsComp[0]));
        var u = this.i0 + this.j0 * e.width,
          c = i + a * e.width;
        return (
          (this.i0 = i),
          (this.j0 = a),
          (this.last = r),
          (this.next = -1),
          (this.action = "disappear"),
          e.moveQubit(this, u, c),
          [64, 65, 66, 67].includes(o) && Qubit.moveAdjacentCombine(i, a, o, e),
          !0
        );
      }
      if (l.state != h && [1, 2, 3, 4].indexOf(l.state) >= 0) {
        (l.state = 5), (l.action = "precompare");
        (u = this.i0 + this.j0 * e.width), (c = i + a * e.width);
        return (
          (this.i0 = i),
          (this.j0 = a),
          (this.last = r),
          (this.next = -1),
          (this.action = "freeze"),
          e.moveQubit(this, u, c),
          [64, 65, 66, 67].includes(o) && Qubit.moveAdjacentCombine(i, a, o, e),
          !0
        );
      }
      return "freeze" === this.action || ((this.action = "halt"), !0);
    }
    if (!e.checkIfEmpty(i, a))
      return !e.checkIfMoving(i, a) && ((this.action = "halt"), !0);
    (u = this.i0 + this.j0 * e.width), (c = i + a * e.width);
    if (0 === n || 1 === n || 5 === n)
      return (
        (this.i0 = i),
        (this.j0 = a),
        (this.last = r),
        (this.next = -1),
        (this.action = "halt"),
        e.moveQubit(this, u, c),
        [64, 65, 66, 67].includes(o) && Qubit.moveAdjacentCombine(i, a, o, e),
        !0
      );
    if (3 === n || 4 === n) {
      l = e.getGate(i, a, e.state[c]);
      var I = "free" === l.action || "reset" === l.action,
        E = e.checkWhichControl(i, a, "switch").gate;
      return (
        E && 1 === E.state && E.rot > 1 && (I = !1),
        "qCombine" === l.type && 2 === l.state && l.counterMax <= 0 && (I = !1),
        I
          ? ((this.i0 = i),
            (this.j0 = a),
            (this.last = r),
            (this.next = -1),
            (this.action = "wait"),
            e.moveQubit(this, u, c),
            [64, 65, 66, 67].includes(o) &&
              Qubit.moveAdjacentCombine(i, a, o, e),
            (l.action = "pretransform"),
            !0)
          : ((this.action = "halt"), !0)
      );
    }
  }
}
