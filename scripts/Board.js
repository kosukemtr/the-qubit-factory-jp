class Board {
  constructor(e, t, i) {
    (this._ctx = e),
      (this._width = t),
      (this._height = i),
      (this._state = new Array(t * i).fill(0)),
      (this._tiles = new Array(t * i).fill(-1)),
      (this._gates = [[], []]),
      (this._gates[0] = new Array(t * i).fill(0)),
      (this._gates[1] = new Array(t * i).fill(0)),
      (this._bits = [[], [], []]),
      (this._bits[0] = new Array(t * i).fill(0)),
      (this._bits[1] = new Array(t * i).fill(0)),
      (this._bits[2] = new Array(t * i).fill(0)),
      (this._qubits = new Array(t * i).fill(0)),
      (this._gateList = []),
      (this._bitList = []),
      (this._qubitList = []),
      (this._success = 0),
      (this._failure = 0),
      (this._entList = []),
      (this._sfx = [!1, !1, !1, !1]);
  }
  get state() {
    return this._state;
  }
  get tiles() {
    return this._tiles;
  }
  get gateList() {
    return this._gateList;
  }
  get qubitList() {
    return this._qubitList;
  }
  get bitList() {
    return this._bitList;
  }
  get x0() {
    return FIELD.leftMargin + FIELD.cameraX;
  }
  get y0() {
    return FIELD.topMargin + FIELD.cameraY;
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  get state() {
    return this._state;
  }
  get success() {
    return this._success;
  }
  get failure() {
    return this._failure;
  }
  get totWidth() {
    return FIELD.tileWidth * this._width;
  }
  get totHeight() {
    return FIELD.tileHeight * this._height;
  }
  get entList() {
    return this._entList;
  }
  get sfx() {
    return this._sfx;
  }
  set sfx(e) {
    this._sfx = e;
  }
  set entList(e) {
    this._entList = e;
  }
  set tiles(e) {
    this._tiles = e;
  }
  set state(e) {
    this._state = e;
  }
  set success(e) {
    this._success = e;
  }
  set failure(e) {
    this._failure = e;
  }
  serialize() {
    for (var e = [], t = 0; t < this._gateList.length; t++)
      e.push(this._gateList[t].pack());
    var i = [];
    for (t = 0; t < this._qubitList.length; t++)
      i.push(this._qubitList[t].pack());
    var a = [];
    for (t = 0; t < this._bitList.length; t++) a.push(this._bitList[t].pack());
    var r = this._tiles;
    return JSON.stringify({
      allTiles: r,
      allGates: e,
      allBits: a,
      allQubits: i,
    });
  }
  checkWhichControl(e, t, i = ["switch", "qControl"]) {
    if (
      SCENARIO.hasEntanglers &&
      e === FIELD.cols - 3 &&
      t === FIELD.rows - 1
    ) {
      var a = this.getGate(FIELD.cols - 3, FIELD.rows - 1);
      return { dir: 5, type: "qControl", action: a.action, gate: a };
    }
    if (e > 0) {
      a = this.getGate(e - 1, t);
      if (a && i.indexOf(a.type) >= 0 && 3 === a.orient)
        return { dir: 0, type: a.type, action: a.action, gate: a };
    }
    if (t > 0) {
      a = this.getGate(e, t - 1);
      if (a && i.indexOf(a.type) >= 0 && 0 === a.orient)
        return { dir: 1, type: a.type, action: a.action, gate: a };
    }
    if (e < this.width - 1) {
      a = this.getGate(e + 1, t);
      if (a && i.indexOf(a.type) >= 0 && 1 === a.orient)
        return { dir: 2, type: a.type, action: a.action, gate: a };
    }
    if (t < this.height - 1) {
      a = this.getGate(e, t + 1);
      if (a && i.indexOf(a.type) >= 0 && 2 === a.orient)
        return { dir: 3, type: a.type, action: a.action, gate: a };
    }
    return { dir: -1, type: "none", action: "none", gate: 0 };
  }
  checkControl(e, t, i = ["switch", "qControl"]) {
    if (e > 0) {
      var a = this.getGate(e - 1, t);
      if (a && i.indexOf(a.type) >= 0 && 3 === a.orient) return 0;
    }
    if (t > 0) {
      a = this.getGate(e, t - 1);
      if (a && i.indexOf(a.type) >= 0 && 0 === a.orient) return 1;
    }
    if (e < this.width - 1) {
      a = this.getGate(e + 1, t);
      if (a && i.indexOf(a.type) >= 0 && 1 === a.orient) return 2;
    }
    if (t < this.height - 1) {
      a = this.getGate(e, t + 1);
      if (a && i.indexOf(a.type) >= 0 && 2 === a.orient) return 3;
    }
    return -1;
  }
  checkAdjacency(e, t) {
    if (e > 0) {
      var i = this.getTile(e - 1, t);
      Math.floor(i / 20);
    }
  }
  computizeQubits() {
    for (var e = 0; e < this.qubitList.length; e++) {
      var t = this.qubitList[e];
      t.rotateBasis(0);
    }
  }
  naturalizeQubits() {
    for (var e = 0; e < this.qubitList.length; e++) {
      var t = this.qubitList[e],
        i = t.computeNaturalBasis();
      t.rotateBasis(i);
    }
  }
  findPos(e, t) {
    var i = e * FIELD.tileWidth + this.x0,
      a = t * FIELD.tileWidth + this.y0;
    return { x0: i, y0: a };
  }
  findTile(e, t) {
    var i = Math.floor((e - this.x0 - FIELD.leftPad) / FIELD.tileWidth),
      a = Math.floor((t - this.y0 - FIELD.topPad) / FIELD.tileHeight);
    return { i0: i, j0: a };
  }
  getState(e, t) {
    var i = e + t * this._width;
    return this.state[i];
  }
  setState(e, t, i) {
    var a = e + t * this._width;
    this.state[a] = i;
    var r = this._gates[i][a];
    r && (this._tiles[a] = MDATA.GATEID[r.type] + r.orient);
  }
  clearAdjacent(e, t, i = -1) {
    var a = Helper.getTileEdge(e, t, this);
    if (a) {
      if (e - 1 >= 0 && (-1 === i || 0 == i)) {
        var r = e - 1 + t * this._width;
        if (SCENARIO.editable[r] > 0) {
          var s = this._tiles[e - 1 + t * this._width],
            o = Math.floor(s / 20),
            n = DESTROYMAPS.R0.indexOf(s);
          if ([0, 1, 5].indexOf(o) >= 0) {
            var l = Helper.getTileEdge(e - 1, t, this),
              h = l[2] > 0,
              d = l[2] === a[0] || 3 === a[0];
            h && !d && (this._tiles[r] = DESTROYMAPS.R1[n]);
          }
        }
      }
      if (e + 1 < FIELD.cols && (-1 === i || 2 == i)) {
        r = e + 1 + t * this._width;
        if (SCENARIO.editable[r] > 0) {
          (s = this._tiles[e + 1 + t * this._width]),
            (o = Math.floor(s / 20)),
            (n = DESTROYMAPS.L0.indexOf(s));
          if ([0, 1, 5].indexOf(o) >= 0) {
            (l = Helper.getTileEdge(e + 1, t, this)),
              (h = l[0] > 0),
              (d = l[0] === a[2] || 3 === a[2]);
            h && !d && (this._tiles[r] = DESTROYMAPS.L1[n]);
          }
        }
      }
      if (t - 1 >= 0 && (-1 === i || 1 == i)) {
        r = e + (t - 1) * this._width;
        if (SCENARIO.editable[r] > 0) {
          (s = this._tiles[e + (t - 1) * this._width]),
            (o = Math.floor(s / 20)),
            (n = DESTROYMAPS.D0.indexOf(s));
          if ([0, 1, 5].indexOf(o) >= 0) {
            (l = Helper.getTileEdge(e, t - 1, this)),
              (h = l[3] > 0),
              (d = l[3] === a[1] || 3 === a[1]);
            h && !d && (this._tiles[r] = DESTROYMAPS.D1[n]);
          }
        }
      }
      if (t + 1 < FIELD.rows && (-1 === i || 3 == i)) {
        r = e + (t + 1) * this._width;
        if (SCENARIO.editable[r] > 0) {
          (s = this._tiles[e + (t + 1) * this._width]),
            (o = Math.floor(s / 20)),
            (n = DESTROYMAPS.U0.indexOf(s));
          if ([0, 1, 5].indexOf(o) >= 0) {
            (l = Helper.getTileEdge(e, t + 1, this)),
              (h = l[1] > 0),
              (d = l[1] === a[3] || 3 === a[3]);
            h && !d && (this._tiles[r] = DESTROYMAPS.U1[n]);
          }
        }
      }
    }
  }
  clearTile(e, t, i = !0) {
    var a = e + t * this._width,
      r = this._tiles[a];
    if (r >= 0 && i) {
      var s = Math.floor(r / 20),
        o = r % 20,
        n = TILE_EDGES[s][o];
      if (n[0] && e - 1 >= 0) {
        var l = e - 1 + t * this._width;
        if (SCENARIO.editable[l] > 0) {
          var h = this._tiles[l],
            d = DESTROYMAPS.R0.indexOf(h);
          d >= 0 && (this._tiles[l] = DESTROYMAPS.R1[d]);
        }
      }
      if (n[1] && t - 1 >= 0) {
        l = e + (t - 1) * this._width;
        if (SCENARIO.editable[l] > 0) {
          (h = this._tiles[l]), (d = DESTROYMAPS.D0.indexOf(h));
          d >= 0 && (this._tiles[l] = DESTROYMAPS.D1[d]);
        }
      }
      if (n[2] && e + 1 < this._width) {
        l = e + 1 + t * this._width;
        if (SCENARIO.editable[l] > 0) {
          (h = this._tiles[l]), (d = DESTROYMAPS.L0.indexOf(h));
          d >= 0 && (this._tiles[l] = DESTROYMAPS.L1[d]);
        }
      }
      if (n[3] && t + 1 < this._height) {
        l = e + (t + 1) * this._width;
        if (SCENARIO.editable[l] > 0) {
          (h = this._tiles[l]), (d = DESTROYMAPS.U0.indexOf(h));
          d >= 0 && (this._tiles[l] = DESTROYMAPS.U1[d]);
        }
      }
    }
    if (this._gates[0][a]) {
      var u = this._gates[0][a],
        c = -1;
      ("sync" !== u.type && "switch" !== u.type) || (c = u.orient);
      var I = this._gates[0][a].id;
      delete this._gates[0][a], (this._gates[0][a] = 0);
      for (var E = 0; E < this._gateList.length; E++)
        if (this._gateList[E].id === I) {
          this._gateList.splice(E, 1);
          break;
        }
      if (c >= 0) {
        var S = e,
          f = t;
        if (
          (0 === c
            ? (f += 1)
            : 1 === c
              ? (S -= 1)
              : 2 === c
                ? (f -= 1)
                : 3 === c && (S += 1),
          "sync" === u.type)
        ) {
          var p = this.getGate(S, f);
          p && "sync" === p.type && this.clearTile(S, f, !0);
        } else if ("switch" === u.type) {
          p = this.getGate(S, f, 1);
          if (p) {
            (l = S + f * this._width), (I = this._gates[1][l].id);
            delete this._gates[1][l], (this._gates[1][l] = 0);
            for (E = 0; E < this._gateList.length; E++)
              if (this._gateList[E].id === I) {
                this._gateList.splice(E, 1);
                break;
              }
            this._state[l] = 0;
          }
        }
      }
    }
    if (this._gates[1][a]) {
      I = this._gates[1][a].id;
      delete this._gates[1][a], (this._gates[1][a] = 0);
      for (E = 0; E < this._gateList.length; E++)
        if (this._gateList[E].id === I) {
          this._gateList.splice(E, 1);
          break;
        }
    }
    (this._state[a] = 0), (this._tiles[a] = -1);
  }
  setTile(e, t, i) {
    var a = e + t * this._width;
    this._tiles[a] = i;
  }
  getTile(e, t) {
    if (e < 0 || e >= this._width) return -1;
    if (t < 0 || t >= this._height) return -1;
    var i = e + t * this._width;
    return this._tiles[i];
  }
  setQubit(e) {
    var t = e.i0 + e.j0 * this._width;
    (this._qubits[t] = e), this._qubitList.push(e);
  }
  setEntGroup(e) {
    this._entList.push(e);
    for (var t = 0; t < e.numQubits; t++)
      e.qubitList[t] && this.setQubit(e.qubitList[t]);
  }
  getQubit(e, t) {
    if (e < 0 || e >= FIELD.cols) return 0;
    if (t < 0 || t >= FIELD.rows) return 0;
    var i = e + t * this._width;
    return this._qubits[i];
  }
  removeQubit(e) {
    var t = e.i0 + e.j0 * this._width;
    this._qubits[t] = 0;
    for (var i = this._qubitList.length - 1; i >= 0; i--)
      this._qubitList[i].id === e.id
        ? this._qubitList.splice(i, 1)
        : this._qubitList[i].i0 === e.i0 &&
          this._qubitList[i].j0 === e.j0 &&
          (this._qubits[t] = this._qubitList[i]);
  }
  moveQubit(e, t, i) {
    (this._qubits[t] = 0), (this._qubits[i] = e);
  }
  setBit(e) {
    var t = e.i0 + e.j0 * this._width;
    (this._bits[e.layer][t] = e), this._bitList.push(e);
  }
  getBit(e, t, i = 0) {
    if (e < 0 || e >= FIELD.cols) return 0;
    if (t < 0 || t >= FIELD.rows) return 0;
    var a = e + t * this._width;
    return this._bits[i][a];
  }
  removeBit(e) {
    var t = e.i0 + e.j0 * this._width;
    this._bits[e.layer][t] = 0;
    for (var i = 0; i < this._bitList.length; i++)
      this._bitList[i].id === e.id && this._bitList.splice(i, 1);
  }
  moveBit(e, t, i, a = 0, r = 0) {
    (this._bits[a][t] = 0), (this._bits[r][i] = e);
  }
  getAllGates() {
    for (var e = [], t = 0; t < this._gateList.length; t++)
      e.push(this._gateList[t].pack());
    return e;
  }
  setAllGates(e) {
    for (var t = 0; t < e.length; t++) {
      var i = e[t].pop(),
        a = new Gate(...e[t]);
      (a.counterMax = i), this.setGate(a);
    }
  }
  setAllBits(e, t, i) {
    for (var a = 0; a < e.length; a++) {
      var r = e[a].pop(),
        s = new Bit(...e[a]);
      (s.isGhost = r), this.setBit(s);
    }
    for (a = 0; a < t.length; a++) {
      r = t[a].pop();
      var o = new Qubit(...t[a]);
      (o.isGhost = r), this.setQubit(o);
    }
    for (a = 0; a < i.length; a++) this.setEntGroup(i[a]);
  }
  setGate(e) {
    var t = e.i0 + e.j0 * this._width;
    if (
      ((this._gates[e.layer][t] = e),
      this._gateList.push(e),
      this._state[t] === e.layer &&
        (this._tiles[t] = MDATA.GATEID[e.type] + e.orient),
      "switch" === e.type)
    ) {
      var i = e.i0,
        a = e.j0;
      0 === e.orient
        ? (a += 1)
        : 1 == e.orient
          ? (i -= 1)
          : 2 == e.orient
            ? (a -= 1)
            : 3 == e.orient && (i += 1);
      this._width;
      this.setState(i, a, e.rot % 2);
    }
  }
  getGate(e, t, i = 0) {
    if (e < 0 || e >= FIELD.cols) return 0;
    if (t < 0 || t >= FIELD.rows) return 0;
    var a = e + t * this._width;
    return this._gates[i][a];
  }
  checkIfEmpty(e, t) {
    return (
      0 === this.getBit(e, t, 0) &&
      0 === this.getBit(e, t, 1) &&
      0 === this.getBit(e, t, 2) &&
      0 === this.getQubit(e, t)
    );
  }
  checkIfMoving(e, t) {
    this._width;
    return (
      (!this.getBit(e, t, 0) || "move" === this.getBit(e, t, 0).action) &&
      (!this.getBit(e, t, 1) || "move" === this.getBit(e, t, 1).action) &&
      (!this.getBit(e, t, 2) || "move" === this.getBit(e, t, 2).action) &&
      (!this.getQubit(e, t) || "move" === this.getQubit(e, t).action)
    );
  }
  copyNoGates() {
    for (
      var e = new Board(this._ctx, this._width, this._height), t = 0;
      t < this._entList.length;
      t++
    )
      this._entList[t].numQubits > 0 && e.setEntGroup(this._entList[t].copy());
    for (t = 0; t < this._qubitList.length; t++) {
      var i = this._qubitList[t].copy();
      if ((e.setQubit(i), i.entGroup))
        for (var a = 0; a < e._entList.length; a++)
          if (i.entID === e._entList[a].id) {
            (i.entGroup = e._entList[a]),
              (e._entList[a].qubitList[i.entInd] = i);
            break;
          }
    }
    for (t = 0; t < this._bitList.length; t++)
      e.setBit(this._bitList[t].copy());
    return (e.success = this.success), (e.failure = this.failure), e;
  }
  copy() {
    var e = new Board(this._ctx, this._width, this._height);
    (e._state = JSON.parse(JSON.stringify(this._state))),
      (e._tiles = JSON.parse(JSON.stringify(this._tiles)));
    for (var t = 0; t < this._gateList.length; t++)
      e.setGate(this._gateList[t].copy());
    for (t = 0; t < this._entList.length; t++)
      this._entList[t].numQubits > 0 && e.setEntGroup(this._entList[t].copy());
    for (t = 0; t < this._qubitList.length; t++) {
      var i = this._qubitList[t].copy();
      if ((e.setQubit(i), i.entGroup))
        for (var a = 0; a < e._entList.length; a++)
          if (i.entID === e._entList[a].id) {
            (i.entGroup = e._entList[a]),
              (e._entList[a].qubitList[i.entInd] = i);
            break;
          }
    }
    for (t = 0; t < this._bitList.length; t++)
      e.setBit(this._bitList[t].copy());
    return (e.success = this.success), (e.failure = this.failure), e;
  }
  findAdjacent(e, t, i) {
    var a = e,
      r = t;
    if (0 === i) a = e - 1;
    else if (1 == i) r = t - 1;
    else if (2 == i) a = e + 1;
    else if (3 == i) r = t + 1;
    return { i1: a, j1: r };
  }
  updateOneStep(e) {
    (RANDS.tick = void 0 === e ? -1 : e), (RANDS.count = 0);
    for (var t = this._bitList.length - 1; t >= 0; t--)
      "halt" === this._bitList[t].action && (this._bitList[t].action = "move");
    for (t = this._qubitList.length - 1; t >= 0; t--)
      "halt" === this._qubitList[t].action
        ? (this._qubitList[t].action = "move")
        : "disappear" === this._qubitList[t].action &&
          this.removeQubit(this._qubitList[t]);
    for (var i = 0; i < this._qubitList.length; i++) {
      var a = this._qubitList[i];
      a.isGhost && "move" === a.action && a.move(this);
    }
    for (
      var r = this._qubitList.length,
        s = this._bitList.length,
        o = r + s,
        n = [...Array(r).keys()],
        l = [...Array(s).keys()],
        h = 0;
      h < o;
      h++
    ) {
      for (t = 0; t < l.length; t++) {
        var d = this._bitList[l[t]];
        if ("move" === d.action) {
          var u = d.move(this);
          u && (l[t] = -1);
        } else l[t] = -1;
      }
      for (t = l.length - 1; t >= 0; t--) l[t] < 0 && l.splice(t, 1);
      for (t = 0; t < n.length; t++) {
        a = this._qubitList[n[t]];
        if ("move" === a.action) {
          u = a.move(this);
          u && (n[t] = -1);
        } else n[t] = -1;
      }
      for (t = n.length - 1; t >= 0; t--) n[t] < 0 && n.splice(t, 1);
      if (0 === n.length && 0 === l.length) break;
    }
    for (t = 0; t < this._gateList.length; t++) {
      var c = this._gateList[t],
        I = this.checkWhichControl(c.i0, c.j0);
      if (
        "qControl" !== I.type &&
        "switch" !== c.type &&
        "qControl" !== c.type
      ) {
        var E = this.getTile(c.i0, c.j0),
          S = Math.floor(E / 20);
        2 === S
          ? c.applyClassic(this)
          : 3 === S
            ? c.applyQuantum(this)
            : 4 === S && c.applyUniversal(this);
      }
    }
    for (t = 0; t < this._gateList.length; t++) {
      c = this._gateList[t];
      "switch" === c.type && c.applySwitch(this),
        "qControl" === c.type && c.applyControl(this);
    }
    return this;
  }
}
