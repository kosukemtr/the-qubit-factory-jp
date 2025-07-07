class Entangled {
  constructor(e, t = -1) {
    (this._numQubits = e),
      (this._ampsComp = new Array(2 ** e).fill(0)),
      (this._ampsRot = new Array(2 ** e).fill(0)),
      (this._ampsFinal = new Array(2 ** e).fill(0)),
      (this._qubitList = new Array(e).fill(0)),
      (this._qubitID = new Array(e).fill(-1)),
      (this._offsets = new Array(2 ** e).fill(0)),
      (this._enums = Entangled.findEnums(e)),
      (this._allOrders = Entangled.findAllOrders(e)),
      (this._ents = new Array(e).fill(0)),
      t < 0 ? ((this._id = GLOBAL_IDE), (GLOBAL_IDE += 1)) : (this._id = t);
  }
  get numQubits() {
    return this._numQubits;
  }
  get ampsComp() {
    return this._ampsComp;
  }
  get ampsRot() {
    return this._ampsRot;
  }
  get ampsFinal() {
    return this._ampsFinal;
  }
  get qubitList() {
    return this._qubitList;
  }
  get qubitID() {
    return this._qubitID;
  }
  get offsets() {
    return this._offsets;
  }
  get enums() {
    return this._enums;
  }
  get allOrders() {
    return this._allOrders;
  }
  get id() {
    return this._id;
  }
  get ents() {
    return this._ents;
  }
  set numQubits(e) {
    this._numQubits = e;
  }
  set ampsComp(e) {
    this._ampsComp = e;
  }
  set ampsRot(e) {
    this._ampsRot = e;
  }
  set ampsFinal(e) {
    this._ampsFinal = e;
  }
  set qubitList(e) {
    this._qubitList = e;
  }
  set qubitID(e) {
    this._qubitID = e;
  }
  set offsets(e) {
    this._offsets = e;
  }
  set enums(e) {
    this._enums = e;
  }
  set allOrders(e) {
    this._allOrders = e;
  }
  set id(e) {
    this._id = e;
  }
  set ents(e) {
    this._ents = e;
  }
  copy() {
    var e = new Entangled(this.numQubits, this.id);
    return (
      (e.ampsComp = [...this.ampsComp]),
      (e.ampsRot = [...this.ampsRot]),
      (e.ampsFinal = [...this.ampsFinal]),
      (e.offsets = [...this.offsets]),
      (e.enums = [...this.enums]),
      (e.qubitID = [...this.qubitID]),
      (e.allOrders = Entangled.findAllOrders(this.numQubits)),
      e
    );
  }
  reorder(e) {
    for (
      var t = new Array(2 ** this.numQubits).fill(0), i = 0;
      i < this.numQubits;
      i++
    )
      t = t.map((t, a) => t + 2 ** e[i] * this.enums[i][a]);
    (this.ampsComp = Entangled.reorderMid(this.ampsComp, t)),
      (this.ampsRot = Entangled.reorderMid(this.ampsRot, t)),
      (this.ampsFinal = Entangled.reorderMid(this.ampsFinal, t)),
      (this.offsets = Entangled.reorderMid(this.offsets, t));
    for (i = 0; i < this.numQubits; i++) this.qubitList[i].entInd = e[i];
    (this.qubitList = Entangled.reorderMid(this.qubitList, e)),
      (this.qubitID = Entangled.reorderMid(this.qubitID, e)),
      (this.ents = Entangled.reorderMid(this.ents, e)),
      this.computeOffsets();
  }
  static reorderMid(e, t) {
    return e.map((i, a) => e[t[a]]);
  }
  static joinStatesQQ(e, t) {
    for (var i = 2, a = 2, r = new Array(i * a).fill(0), s = 0; s < i; s++)
      for (var o = 0; o < i; o++) r[o + s * i] = e.ampsComp[o] * t.ampsComp[s];
    var n = new Entangled(2);
    return n.setQubits([e, t]), (n.ampsComp = r), n.computeRotAmps(), n;
  }
  static joinStatesQE(e, t) {
    var i = 1,
      a = t.numQubits,
      r = 2,
      s = 2 ** a;
    if (!(i + a > 4 + FIELD.maxBonusTiles)) {
      for (var o = new Array(r * s).fill(0), n = 0; n < s; n++)
        for (var l = 0; l < r; l++)
          o[l + n * r] = e.ampsComp[l] * t.ampsComp[n];
      (t.ampsComp = o),
        (t.numQubits = i + a),
        t.qubitList.unshift(e),
        t.qubitID.unshift(e.id),
        (t.enums = Entangled.findEnums(i + a)),
        (t.allOrders = Entangled.findAllOrders(i + a)),
        t.computeRotAmps(),
        t.computeAllEnts();
      for (var h = 0; h < t.numQubits; h++) {
        var d = t.qubitList[h];
        (d.entGroup = t), (d.entInd = h), (d.entID = t.id);
      }
      return t;
    }
    console.log("above max entangled threshold");
  }
  static joinStatesEQ(e, t) {
    var i = e.numQubits,
      a = 1,
      r = 2 ** i,
      s = 2;
    if (!(i + a > 4 + FIELD.maxBonusTiles)) {
      for (var o = new Array(r * s).fill(0), n = 0; n < s; n++)
        for (var l = 0; l < r; l++)
          o[l + n * r] = e.ampsComp[l] * t.ampsComp[n];
      (e.ampsComp = o),
        (e.numQubits = i + a),
        e.qubitList.push(t),
        e.qubitID.push(t.id),
        (e.enums = Entangled.findEnums(i + a)),
        (e.allOrders = Entangled.findAllOrders(i + a)),
        e.computeRotAmps(),
        e.computeAllEnts();
      for (var h = 0; h < e.numQubits; h++) {
        var d = e.qubitList[h];
        (d.entGroup = e), (d.entInd = h), (d.entID = e.id);
      }
      return e;
    }
    console.log("above max entangled threshold");
  }
  static joinStatesEE(e, t) {
    var i = e.numQubits,
      a = t.numQubits,
      r = 2 ** i,
      s = 2 ** a;
    if (i + a > 4 + FIELD.maxBonusTiles)
      return (
        console.log("above max entangled threshold"),
        void console.log(i + a, 4 + FIELD.maxBonusTiles)
      );
    for (var o = new Array(r * s).fill(0), n = 0; n < s; n++)
      for (var l = 0; l < r; l++) o[l + n * r] = e.ampsComp[l] * t.ampsComp[n];
    (e.ampsComp = o), (e.numQubits = i + a);
    for (var h = 0; h < a; h++) {
      var d = t.qubitList.shift();
      e.qubitList.push(d),
        e.qubitID.push(d.id),
        (d.entInd = i + h),
        (d.entID = e.id),
        (d.entGroup = e);
    }
    return (
      (e.enums = Entangled.findEnums(i + a)),
      (e.allOrders = Entangled.findAllOrders(i + a)),
      e.computeRotAmps(),
      e.computeAllEnts(),
      (t.numQubits = 0),
      e
    );
  }
  static findEnums(e) {
    for (var t = [...Array(2 ** e).keys()], i = [], a = 0; a < e; a++)
      i.push(t.map((e) => Math.floor(e / 2 ** a) % 2));
    return i;
  }
  static findAllOrders(e) {
    for (var t = new Array(e), i = 0; i < e; i++) {
      var a = [...Array(e).keys()].map((e) => 2 ** e);
      a.splice(i, 1), (t[i] = Entangled.findOrder(a));
    }
    return t;
  }
  static findOrder(e) {
    for (var t = e.length, i = [0, e[0]], a = 1; a < t; a++)
      i = i.concat(i.map((t) => t + e[a]));
    return i;
  }
  applyControl(e, t, i, a) {
    var r = this.qubitList[t];
    if ("qFlip" === a.type)
      if (0 === a.state) var s = Gate.getFlipMatrix(a.rot);
      else s = [1, 0, 0, 1];
    else if ("rotate" === a.type)
      if (0 === r.last || 1 === r.last) s = Gate.getRotMatrix(a.rot);
      else if (2 === r.last || 3 === r.last) s = Gate.getRotMatrix(a.rot);
    var o = Math.cos(i / 2) ** 2,
      n = Math.sin(i / 2) ** 2,
      l = Math.cos(i / 2) * Math.sin(i / 2),
      h = new Array(2 ** this.numQubits).fill(0),
      d = new Array(2 ** this.numQubits).fill(0);
    for (const t of this.allOrders[e]) {
      var u = t + 2 ** e;
      (h[t] = this.ampsComp[t] * o + this.ampsComp[u] * l),
        (h[u] = this.ampsComp[t] * l + this.ampsComp[u] * n),
        (d[t] = this.ampsComp[t] * n - this.ampsComp[u] * l),
        (d[u] = -this.ampsComp[t] * l + this.ampsComp[u] * o);
    }
    var c = new Array(2 ** this.numQubits).fill(0);
    for (const e of this.allOrders[t]) {
      u = e + 2 ** t;
      (c[e] = s[0] * d[e] + s[2] * d[u]), (c[u] = s[1] * d[e] + s[3] * d[u]);
    }
    for (
      var I = new Array(2 ** this.numQubits).fill(0), E = 0;
      E < 2 ** this.numQubits;
      E++
    )
      I[E] = h[E] + c[E];
    if (!this.qubitList[t].lockedBasis)
      if ("rotate" === a.type) {
        var S = this.qubitList[t].basisVecs,
          f = [0, 0, 0, 0];
        (f[0] = Math.cos(a.rot / 2) * S[0] - Math.sin(a.rot / 2) * S[1]),
          (f[1] = Math.sin(a.rot / 2) * S[0] + Math.cos(a.rot / 2) * S[1]),
          (f[2] = Math.cos(a.rot / 2) * S[2] - Math.sin(a.rot / 2) * S[3]),
          (f[3] = Math.sin(a.rot / 2) * S[2] + Math.cos(a.rot / 2) * S[3]),
          (this.qubitList[t].basisVecs = f);
      } else if ("qFlip" === a.type) {
        (S = this.qubitList[t].basisVecs), (f = [0, 0, 0, 0]);
        (f[0] = Math.cos(a.rot) * S[0] + Math.sin(a.rot) * S[1]),
          (f[1] = Math.sin(a.rot) * S[0] - Math.cos(a.rot) * S[1]),
          (f[2] = Math.cos(a.rot) * S[2] + Math.sin(a.rot) * S[3]),
          (f[3] = Math.sin(a.rot) * S[2] - Math.cos(a.rot) * S[3]),
          (this.qubitList[t].basisVecs = f);
      }
    (this.ampsComp = I),
      this.computeRotAmps(),
      this.computeAllEnts(),
      this.removeUnentangled();
  }
  removeUnentangled() {
    for (var e = 0.01, t = this.numQubits - 1; t >= 0; t--)
      if (this.ents[t] < e && this.numQubits > 1) {
        var i = this.computeNaturalBasis(t);
        this.applyMeasure(t, i);
      }
  }
  setQubits(e) {
    for (var t = 0; t < e.length; t++) {
      var i = e[t];
      (this._qubitList[t] = i), i.setEntGroup(this, t);
    }
  }
  computeAllEnts() {
    for (var e = 0; e < this.numQubits; e++) this.computeEnt(e);
  }
  computeEnt(e) {
    for (
      var t = [...this.ampsComp],
        i = this.allOrders[e],
        a = 2 ** (this.numQubits - 1),
        r = new Array(a).fill(0),
        s = new Array(a).fill(0),
        o = 0;
      o < a;
      o++
    )
      (r[o] = t[i[o]]), (s[o] = t[i[o] + 2 ** e]);
    var n = Helper.inner(r, r),
      l = 1 - n,
      h = Helper.inner(r, s),
      d = Math.sqrt(4 * h ** 2 + (n - l) ** 2),
      u = (n + l - d) / 2,
      c = (n + l + d) / 2,
      I = 0;
    return (
      u > 0.001 && (I += -u * Math.log2(u)),
      c > 0.001 && (I += -c * Math.log2(c)),
      (I = Math.max(Math.min(I, 1), 0)),
      (this.ents[e] = I),
      (this.qubitList[e].ent = I),
      I
    );
  }
  computeNaturalBasis(e) {
    for (
      var t = [...this.ampsComp],
        i = this.allOrders[e],
        a = 2 ** (this.numQubits - 1),
        r = new Array(a).fill(0),
        s = new Array(a).fill(0),
        o = 0;
      o < a;
      o++
    )
      (r[o] = t[i[o]]), (s[o] = t[i[o] + 2 ** e]);
    var n = Helper.inner(r, r),
      l = Helper.inner(r, s),
      h = Math.sqrt(4 * l ** 2 + 4 * n ** 2 - 4 * n + 1),
      d = (1 + h) / 2,
      u = 0.001;
    if (d < 0.5 + u) var c = 0;
    else if (Math.abs(l) >= u) c = 2 * Math.atan((d - n) / l);
    else if (n >= 0.5) c = 0;
    else if (n < 0.5) c = Math.PI;
    return c;
  }
  computeOffsets() {
    for (
      var e = new Array(2 ** this.numQubits).fill(0), t = this.ampsRot, i = 1;
      i < 2 ** this.numQubits;
      i++
    )
      e[i] = e[i - 1] + t[i - 1] ** 2;
    this.offsets = e;
  }
  rotateBasis(e, t) {
    e <= -Math.PI && (e += 2 * Math.PI),
      e > Math.PI && (e -= 2 * Math.PI),
      (this.qubitList[t].basisRot = e),
      (this.qubitList[t].basisVecs = [
        Math.cos(e / 2),
        Math.sin(e / 2),
        -Math.sin(e / 2),
        Math.cos(e / 2),
      ]),
      this.computeRotAmps();
  }
  applyFlip(e, t) {
    var i = this.qubitList[e],
      a = 1e-5;
    t > Math.PI + a && (t -= 2 * Math.PI),
      t < -Math.PI + a && (t += 2 * Math.PI);
    var r = new Array(2 ** this.numQubits).fill(0);
    for (const i of this.allOrders[e]) {
      var s = i + 2 ** e;
      (r[i] = Math.cos(t) * this.ampsComp[i] + Math.sin(t) * this.ampsComp[s]),
        (r[s] =
          Math.sin(t) * this.ampsComp[i] - Math.cos(t) * this.ampsComp[s]);
    }
    if (((this._ampsComp = r), !i.lockedBasis)) {
      var o = [0, 0, 0, 0];
      (o[0] = Math.cos(t) * i.basisVecs[0] + Math.sin(t) * i.basisVecs[1]),
        (o[1] = Math.sin(t) * i.basisVecs[0] - Math.cos(t) * i.basisVecs[1]),
        (o[2] = Math.cos(t) * i.basisVecs[2] + Math.sin(t) * i.basisVecs[3]),
        (o[3] = Math.sin(t) * i.basisVecs[2] - Math.cos(t) * i.basisVecs[3]),
        (i.basisVecs = o);
    }
    this.computeRotAmps();
  }
  applyRot(e, t) {
    var i = this.qubitList[e],
      a = 1e-5;
    t > Math.PI + a && (t -= 2 * Math.PI),
      t < -Math.PI + a && (t += 2 * Math.PI);
    var r = new Array(2 ** this.numQubits).fill(0);
    for (const i of this.allOrders[e]) {
      var s = i + 2 ** e;
      (r[i] =
        Math.cos(t / 2) * this.ampsComp[i] -
        Math.sin(t / 2) * this.ampsComp[s]),
        (r[s] =
          Math.sin(t / 2) * this.ampsComp[i] +
          Math.cos(t / 2) * this.ampsComp[s]);
    }
    if (((this._ampsComp = r), !i.lockedBasis)) {
      var o = [0, 0, 0, 0];
      (o[0] =
        Math.cos(t / 2) * i.basisVecs[0] - Math.sin(t / 2) * i.basisVecs[1]),
        (o[1] =
          Math.sin(t / 2) * i.basisVecs[0] + Math.cos(t / 2) * i.basisVecs[1]),
        (o[2] =
          Math.cos(t / 2) * i.basisVecs[2] - Math.sin(t / 2) * i.basisVecs[3]),
        (o[3] =
          Math.sin(t / 2) * i.basisVecs[2] + Math.cos(t / 2) * i.basisVecs[3]),
        (i.basisVecs = o);
    }
    this.computeRotAmps();
  }
  projectMeasure(e, t) {
    this.qubitList[e];
    var i = 1e-5;
    t > Math.PI + i && (t -= 2 * Math.PI),
      t < -Math.PI + i && (t += 2 * Math.PI);
    var a = this.ampsComp,
      r = this.allOrders[e],
      s = 0;
    for (const i of r) {
      var o = i + 2 ** e;
      s += (Math.cos(t / 2) * a[i] + Math.sin(t / 2) * a[o]) ** 2;
    }
    return s;
  }
  applyMeasure(e, t) {
    var i = this.qubitList[e],
      a = 1e-5;
    t > Math.PI + a && (t -= 2 * Math.PI),
      t < -Math.PI + a && (t += 2 * Math.PI),
      Math.abs(t) < a && (t = 0);
    var r = this.ampsComp,
      s = this.allOrders[e],
      o = 0;
    for (const i of s) {
      var n = i + 2 ** e;
      o += (Math.cos(t / 2) * r[i] + Math.sin(t / 2) * r[n]) ** 2;
    }
    var l = [Math.cos(t / 2), Math.sin(t / 2)];
    Math.sin(t / 2), Math.cos(t / 2);
    if (o > Helper.random()) {
      (i.ampsComp = [...l]),
        i.lockedBasis ||
          (i.basisVecs = [
            Math.cos(t / 2),
            Math.sin(t / 2),
            -Math.sin(t / 2),
            Math.cos(t / 2),
          ]);
      var h = 0,
        d = 0,
        u = new Array(2 ** (this.numQubits - 1)).fill(0);
      for (const i of s) {
        var c = i + 2 ** e;
        (u[d] +=
          (Math.cos(t / 2) * r[i] + Math.sin(t / 2) * r[c]) / Math.sqrt(o)),
          (d += 1);
      }
    } else {
      if (t <= 0) {
        i.ampsComp = [-Math.sin(t / 2), Math.cos(t / 2)];
        var I = 1;
      } else {
        i.ampsComp = [Math.sin(t / 2), -Math.cos(t / 2)];
        I = -1;
      }
      i.lockedBasis ||
        (i.basisVecs = [
          Math.cos(t / 2),
          Math.sin(t / 2),
          -Math.sin(t / 2),
          Math.cos(t / 2),
        ]);
      (h = 1), (d = 0), (u = new Array(2 ** (this.numQubits - 1)).fill(0));
      for (const i of s) {
        c = i + 2 ** e;
        (u[d] +=
          (I * (-Math.sin(t / 2) * r[i] + Math.cos(t / 2) * r[c])) /
          Math.sqrt(1 - o)),
          (d += 1);
      }
    }
    if (
      ((this.numQubits = this.numQubits - 1),
      this.qubitList.splice(i.entInd, 1),
      this.qubitID.splice(i.entInd, 1),
      (this.ampsComp = u),
      (this.enums = Entangled.findEnums(this.numQubits)),
      (this.allOrders = Entangled.findAllOrders(this.numQubits)),
      this.computeRotAmps(),
      this.computeAllEnts(),
      (i.entGroup = 0),
      (i.entInd = -1),
      (i.entID = -1),
      (i.ent = 0),
      i.computeRotAmps(),
      1 === this.numQubits)
    ) {
      this.numQubits = 0;
      var E = this.qubitList.splice(0, 1)[0];
      this.qubitID.splice(0, 1),
        (E.entGroup = 0),
        (E.entInd = -1),
        (E.entID = -1),
        (E.ent = 0),
        (E.ampsComp = u);
      a = 1e-5;
      if (Math.abs(u[0]) < a) var S = Math.PI;
      else S = 2 * Math.atan(u[1] / u[0]);
      (E.basisVecs = [
        Math.cos(S / 2),
        Math.sin(S / 2),
        -Math.sin(S / 2),
        Math.cos(S / 2),
      ]),
        E.computeRotAmps();
    } else
      for (var f = 0; f < this.numQubits; f++) this.qubitList[f].entInd = f;
    return h;
  }
  computeRotAmps() {
    for (var e = [...this.ampsComp], t = 0; t < this.numQubits; t++) {
      var i = this.qubitList[t].basisVecs,
        a = [...e];
      for (const s of this.allOrders[t]) {
        var r = s + 2 ** t;
        (a[s] = i[0] * e[s] + i[1] * e[r]), (a[r] = i[2] * e[s] + i[3] * e[r]);
      }
      e = [...a];
    }
    (this.ampsRot = e), this.computeFinalAmps(), this.computeOffsets();
  }
  computeFinalAmps() {
    for (var e = 1e-5, t = [], i = 0; i < this.numQubits; i++) {
      t.push([0, 0]);
      var a = this.qubitList[i];
      Math.abs(a.basisVecs[0]) < e
        ? ((a.basisRot = Math.PI), (t[i][0] = Math.sign(a.basisVecs[1])))
        : ((a.basisRot = 2 * Math.atan(a.basisVecs[1] / a.basisVecs[0])),
          (t[i][0] = Math.sign(a.basisVecs[0]))),
        Math.abs(a.basisVecs[2]) < e
          ? (t[i][1] = Math.sign(a.basisVecs[3]))
          : (t[i][1] = Math.sign(a.basisVecs[2]));
    }
    for (var r = [...this.ampsRot], s = 0; s < 2 ** this.numQubits; s++) {
      var o = 1;
      for (i = 0; i < this.numQubits; i++) {
        var n = this.enums[i];
        o *= t[i][n[s]];
      }
      r[s] = o * r[s];
    }
    this.ampsFinal = r;
  }
  setQubit(e, t) {
    this.qubitsList[t] = e;
  }
  computeArrow(e, t) {
    for (var i = 0, a = this._enums[t], r = 0; r < e.length; r++)
      i += a[r] * e[r];
    return i;
  }
  computeAlfs(e) {
    for (
      var t = 0.1,
        i = 2 ** this.numQubits,
        a = new Array(2 ** this.numQubits).fill(0),
        r = 1;
      r < i;
      r++
    )
      a[r] = a[r - 1] + this.ampsRot[r - 1] ** 2;
    var s = a.concat(a.map((e) => e + 1));
    e < 0.5 && (e += 1);
    var o = e - t / 2,
      n = e + t / 2;
    for (r = 2 * i - 1; r >= 0; r--)
      if (n > s[r]) {
        var l = r;
        break;
      }
    for (r = l; r >= 0; r--)
      if (o > s[r]) {
        var h = r;
        break;
      }
    var d = l - h + 1,
      u = new Array(i).fill(0);
    if (1 === d) h >= i ? (u[h - i] = 1) : (u[h] = 1);
    else {
      var c = (s[h + 1] - o) / t,
        I = (n - s[l]) / t;
      if (
        (h >= i ? (u[h - i] += c) : (u[h] += c),
        l >= i ? (u[l - i] += I) : (u[l] += I),
        d > 2)
      )
        for (r = h + 1; r < l; r++) {
          var E = (s[r + 1] - s[r]) / t;
          r >= i ? (u[r - i] += E) : (u[r] += E);
        }
    }
    return u;
  }
}
