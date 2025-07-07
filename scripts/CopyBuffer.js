class CopyBuffer {
  constructor() {
    (this._w0 = -1),
      (this._h0 = -1),
      (this._center = { x: -1, y: -1 }),
      (this._centerType = 0),
      (this._corner = { xL: -1, xR: -1, yT: -1, yB: -1 }),
      (this._tiles = []),
      (this._placeable = []),
      (this._paths = []),
      (this._states = []),
      (this._gates = []);
  }
  get w0() {
    return this._w0;
  }
  get h0() {
    return this._h0;
  }
  get tiles() {
    return this._tiles;
  }
  get placeable() {
    return this._placeable;
  }
  get paths() {
    return this._paths;
  }
  get states() {
    return this._states;
  }
  get gates() {
    return this._gates;
  }
  get corner() {
    return this._corner;
  }
  get center() {
    return this._center;
  }
  get centerType() {
    return this._centerType;
  }
  set w0(e) {
    this._w0 = e;
  }
  set h0(e) {
    this._h0 = e;
  }
  set tiles(e) {
    this._tiles = e;
  }
  set paths(e) {
    this._paths = e;
  }
  set placeable(e) {
    this._placeable = e;
  }
  set states(e) {
    this._states = e;
  }
  set gates(e) {
    this._gates = e;
  }
  set corner(e) {
    this._corner = e;
  }
  set center(e) {
    this._center = e;
  }
  set centerType(e) {
    this._centerType = e;
  }
  reset() {
    (this.tiles = []),
      (this.placeable = []),
      (this.states = []),
      (this.gates = []),
      (this.paths = []),
      (this.corner = { xL: -1, xR: -1, yT: -1, yB: -1 }),
      (this.center = { x: -1, y: -1 }),
      (this.w0 = -1),
      (this.h0 = -1);
  }
  place() {
    if (this.placeable.includes(0))
      return (
        (FIELD.message = "Invalid Paste Region"),
        (TIMER.message = TIMER.messageMax),
        SFX.invalid.play(),
        !1
      );
    SFX.destroy.play();
    for (var e = 0; e < this.h0; e++)
      for (var t = 0; t < this.w0; t++) {
        var i = e * this.w0 + t,
          a = this.corner.xL + t,
          r = this.corner.yT + e;
        1 === this.placeable[i] && IBOARD.clearTile(a, r);
      }
    for (e = 0; e < this.h0; e++)
      for (t = 0; t < this.w0; t++) {
        (i = e * this.w0 + t),
          (a = this.corner.xL + t),
          (r = this.corner.yT + e);
        var s = r * FIELD.cols + a;
        -1 !== this.tiles[i] && (IBOARD.tiles[s] = this.tiles[i]);
      }
    for (var o = 0; o < this.gates.length; o++)
      (this.gates[o][0] += this.corner.xL),
        (this.gates[o][1] += this.corner.yT);
    return (
      IBOARD.setAllGates(JSON.parse(JSON.stringify(this.gates))),
      UNDOREDO.add(),
      !0
    );
  }
  trim() {
    for (var e = 1, t = 0, i = 0; i < this.h0; i++) {
      var a = this.corner.xL + t,
        r = this.corner.yT + i,
        s = IBOARD.getTile(a, r);
      -1 !== s && (e = 0);
    }
    var o = 1;
    for (t = this.w0 - 1, i = 0; i < this.h0; i++) {
      (a = this.corner.xL + t),
        (r = this.corner.yT + i),
        (s = IBOARD.getTile(a, r));
      -1 !== s && (o = 0);
    }
    var n = 1;
    for (i = 0, t = 0; t < this.w0; t++) {
      (a = this.corner.xL + t),
        (r = this.corner.yT + i),
        (s = IBOARD.getTile(a, r));
      -1 !== s && (n = 0);
    }
    var l = 1;
    for (i = this.h0 - 1, t = 0; t < this.w0; t++) {
      (a = this.corner.xL + t),
        (r = this.corner.yT + i),
        (s = IBOARD.getTile(a, r));
      -1 !== s && (l = 0);
    }
    var h = e || o || n || l;
    return (
      !!h &&
      ((this.w0 -= e + o),
      (this.h0 -= n + l),
      this.corner.xL <= this.corner.xR && (this.corner.xL += e),
      this.corner.xR >= this.corner.xL && (this.corner.xR -= o),
      this.corner.yT <= this.corner.yB && (this.corner.yT += n),
      this.corner.yB >= this.corner.yT && (this.corner.yB -= l),
      !0)
    );
  }
  checkPlacement() {
    this.placeable = new Array(this.w0 * this.h0).fill(0);
    for (var e = 0; e < this.h0; e++)
      for (var t = 0; t < this.w0; t++) {
        var i = e * this.w0 + t,
          a = this.corner.xL + t >= 0 && this.corner.xL + t < FIELD.cols,
          r = this.corner.yT + e >= 0 && this.corner.yT + e < FIELD.rows,
          s = this.corner.xL + t,
          o = this.corner.yT + e,
          n = o * FIELD.cols + s,
          l = !1;
        0 === t && (l = l || this.checkEdgeControl(t - 1, e, 3)),
          t === this.w0 - 1 && (l = l || this.checkEdgeControl(t + 1, e, 1)),
          0 === e && (l = l || this.checkEdgeControl(t, e - 1, 0)),
          e === this.h0 - 1 && (l = l || this.checkEdgeControl(t, e + 1, 2)),
          -1 === this.tiles[i]
            ? (this.placeable[i] = 2)
            : a && r
              ? 1 !== SCENARIO.editable[n]
                ? (this.placeable[i] = 0)
                : (this.placeable[i] = l ? 0 : 1)
              : (this.placeable[i] = 0);
      }
  }
  checkEdgeControl(e, t, i) {
    var a = this.corner.xL + e,
      r = this.corner.yT + t,
      s = this.corner.xL + e >= 0 && this.corner.xL + e < FIELD.cols,
      o = this.corner.yT + t >= 0 && this.corner.yT + t < FIELD.rows;
    if (s && o) {
      var n = IBOARD.getGate(a, r);
      if (n && ("switch" === n.type || "qControl" === n.type) && n.orient === i)
        return !0;
    }
    return !1;
  }
  checkUnder() {
    if (
      ((this.placeable = new Array(this.w0 * this.h0).fill(0)),
      1 !== this.h0 || 1 !== this.w0)
    )
      for (var e = 0; e < this.h0; e++)
        for (var t = 0; t < this.w0; t++) {
          (o = this.corner.xL + t), (n = this.corner.yT + e);
          var i = e * this.w0 + t,
            a =
              ((l = n * FIELD.cols + o),
              IBOARD.getGate(o, n, IBOARD.getState(o, n))),
            r = IBOARD.getTile(o, n, IBOARD.getState(o, n)),
            s = Math.floor(r / 20);
          1 !== SCENARIO.editable[l]
            ? (this.placeable[i] = 0)
            : 0 === s || 1 === s || 5 === s
              ? (this.placeable[i] = 1)
              : ["switch", "sync", "qControl"].includes(a.type) &&
                  ((0 === t && 1 === a.orient) ||
                    (t === this.w0 - 1 && 3 === a.orient) ||
                    (0 === e && 2 === a.orient) ||
                    (e === this.h0 - 1 && 0 === a.orient))
                ? (this.placeable[i] = 0)
                : (this.placeable[i] = 1);
        }
    else {
      var o = this.corner.xL + t,
        n = this.corner.yT + e,
        l = n * FIELD.cols + o;
      this.placeable[0] = SCENARIO.editable[l];
    }
  }
  preDraw() {
    for (
      var e = 0.5,
        t = (this.corner.xL + 0.5) * FIELD.tileWidth,
        i = (this.corner.yT + 0.5) * FIELD.tileWidth,
        a = 0;
      a < this.h0;
      a++
    )
      for (var r = 0; r < this.w0; r++) {
        var s = a * this.w0 + r;
        Paths.place(CANV.base.ctx, this.placeable[s]).draw(
          CANV.base.ctx,
          t + r * FIELD.tileWidth,
          i + a * FIELD.tileWidth,
          FIELD.tileWidth,
          FIELD.tileHeight,
          e,
        );
      }
    var o = CANV.base.ctx,
      n = Math.round((this.corner.xL + 0.5) * FIELD.tileWidth) + 0.5,
      l = Math.round((this.corner.yT + 0.5) * FIELD.tileWidth) + 0.5;
    o.save(),
      (o.lineWidth = (1 * FIELD.tileWidth) / 48),
      (o.strokeStyle = "seagreen"),
      o.beginPath(),
      o.stroke(
        Helper.roundRect(
          n,
          l,
          this.w0 * FIELD.tileWidth,
          this.h0 * FIELD.tileWidth,
          FIELD.tileWidth / 4,
        ),
      ),
      o.beginPath();
    var h = [SEL_STYLES.lineDash, SEL_STYLES.lineGap];
    o.setLineDash(h),
      (o.lineDashOffset =
        (SEL_STYLES.lineDash + SEL_STYLES.lineGap) * TIMER.dashRatio),
      (o.lineWidth = (1 * FIELD.tileWidth) / 48),
      (o.strokeStyle = "#555"),
      o.stroke(
        Helper.roundRect(
          n,
          l,
          this.w0 * FIELD.tileWidth,
          this.h0 * FIELD.tileWidth,
          FIELD.tileWidth / 4,
        ),
      ),
      o.restore();
  }
  resize(e, t) {
    (this.corner.xL = Math.min(STATE.under.i0, STATE.pressed.i0)),
      (this.corner.xR = Math.max(STATE.under.i0, STATE.pressed.i0)),
      (this.corner.yT = Math.min(STATE.under.j0, STATE.pressed.j0)),
      (this.corner.yB = Math.max(STATE.under.j0, STATE.pressed.j0)),
      (this.w0 = 1 + this.corner.xR - this.corner.xL),
      (this.h0 = 1 + this.corner.yB - this.corner.yT),
      this.checkUnder();
  }
  copy() {
    if (this.placeable.includes(0))
      return (
        (FIELD.message = "Invalid Copy Region"),
        (TIMER.message = TIMER.messageMax),
        SFX.invalid.play(),
        !1
      );
    for (var e = !0, t = 0; t < FIELD.cols && ((e = this.trim()), e); t++);
    if (this.corner.xL > this.corner.xR || this.corner.yT > this.corner.yB)
      return (
        (FIELD.message = "Empty Copy Region"),
        (TIMER.message = TIMER.messageMax),
        SFX.invalid.play(),
        !1
      );
    var i = new Board(CANV.interface.ctx, FIELD.cols, FIELD.rows);
    i.tiles = [...IBOARD.tiles];
    for (var a = 0; a < this.h0; a++)
      for (var r = 0; r < this.w0; r++) {
        var s = this.corner.xL + r,
          o = this.corner.yT + a;
        0 === r && s > 0 && i.clearTile(s - 1, o),
          r === this.w0 - 1 && s < FIELD.cols - 1 && i.clearTile(s + 1, o),
          0 === a && o > 0 && i.clearTile(s, o - 1),
          a === this.h0 - 1 && o < FIELD.rows - 1 && i.clearTile(s, o + 1);
      }
    (this.gates = []),
      (this.tiles = new Array(this.w0 * this.h0).fill(-1)),
      (this.states = new Array(this.w0 * this.h0).fill(0));
    for (a = 0; a < this.h0; a++)
      for (r = 0; r < this.w0; r++) {
        (s = this.corner.xL + r), (o = this.corner.yT + a);
        var n = a * this.w0 + r,
          l = o * FIELD.cols + s,
          h = IBOARD.getTile(s, o),
          d = Math.floor(h / 20);
        if (((this.states[n] = IBOARD.state[l]), -1 === h));
        else if ([0, 1, 5].includes(d)) this.tiles[n] = i.getTile(s, o);
        else {
          this.tiles[n] = h;
          var u = !1;
          if (0 === r) {
            var c = IBOARD.getGate(s - 1, o);
            c &&
              (("switch" !== c.type && "qControl" !== c.type) ||
                3 !== c.orient ||
                (u = !0));
          } else if (r === this.w0 - 1) {
            c = IBOARD.getGate(s + 1, o);
            c &&
              (("switch" !== c.type && "qControl" !== c.type) ||
                1 !== c.orient ||
                (u = !0));
          } else if (0 === a) {
            c = IBOARD.getGate(s, o - 1);
            c &&
              (("switch" !== c.type && "qControl" !== c.type) ||
                0 !== c.orient ||
                (u = !0));
          } else if (a === this.h0 - 1) {
            c = IBOARD.getGate(s, o + 1);
            c &&
              (("switch" !== c.type && "qControl" !== c.type) ||
                2 !== c.orient ||
                (u = !0));
          }
          var I = IBOARD.getGate(s, o, 0);
          if (I) {
            var E = I.pack();
            (E[0] = r), (E[1] = a), this.gates.push(E);
          }
          u && (this.states[n] = 0);
          var S = IBOARD.getGate(s, o, 1);
          if (S && !u) {
            var f = S.pack();
            (f[0] = r), (f[1] = a), this.gates.push(f);
          }
        }
      }
    if ((COPYBUFFER.initPaths(), "boardtile" === STATE.under.type)) {
      (r = STATE.under.i0), (a = STATE.under.j0);
      r === this.corner.xL
        ? a === this.corner.yT
          ? (this.centerType = 0)
          : a === this.corner.yB && (this.centerType = 3)
        : r === this.corner.xR &&
          (a === this.corner.yT
            ? (this.centerType = 1)
            : a === this.corner.yB && (this.centerType = 2));
    }
    if (STATE.isDestroy) {
      for (a = 0; a < this.h0; a++)
        for (r = 0; r < this.w0; r++) {
          (s = this.corner.xL + r), (o = this.corner.yT + a);
          IBOARD.clearTile(s, o);
        }
      UNDOREDO.add();
    }
    return !0;
  }
  recenter() {
    var e = "justify";
    "justify" === e
      ? (0 === this.centerType || 3 === this.centerType
          ? ((this.center.x = IBOARD.findTile(STATE.pos.x, STATE.pos.y).i0),
            (this.corner.xL = this.center.x),
            (this.corner.xR = this.center.x + this.w0 - 1))
          : (1 !== this.centerType && 2 !== this.centerType) ||
            ((this.center.x = IBOARD.findTile(STATE.pos.x, STATE.pos.y).i0),
            (this.corner.xL = this.center.x - this.w0 + 1),
            (this.corner.xR = this.center.x)),
        0 === this.centerType || 1 === this.centerType
          ? ((this.center.y = IBOARD.findTile(STATE.pos.x, STATE.pos.y).j0),
            (this.corner.yT = this.center.y),
            (this.corner.yB = this.center.y + this.h0 - 1))
          : (2 !== this.centerType && 3 !== this.centerType) ||
            ((this.center.y = IBOARD.findTile(STATE.pos.x, STATE.pos.y).j0),
            (this.corner.yT = this.center.y - this.h0 + 1),
            (this.corner.yB = this.center.y)))
      : (this.w0 % 2
          ? ((this.center.x = IBOARD.findTile(STATE.pos.x, STATE.pos.y).i0),
            (this.corner.xL = this.center.x - (this.w0 - 1) / 2),
            (this.corner.xR = this.center.x + (this.w0 - 1) / 2))
          : ((this.center.x = IBOARD.findTile(
              STATE.pos.x + FIELD.tileWidth / 2,
              STATE.pos.y,
            ).i0),
            (this.corner.xL = this.center.x - this.w0 / 2),
            (this.corner.xR = this.center.x + this.w0 / 2 - 1)),
        this.h0 % 2
          ? ((this.center.y = IBOARD.findTile(STATE.pos.x, STATE.pos.y).j0),
            (this.corner.yT = this.center.y - (this.h0 - 1) / 2),
            (this.corner.yB = this.center.y + (this.h0 - 1) / 2))
          : ((this.center.y = IBOARD.findTile(
              STATE.pos.x,
              STATE.pos.y + FIELD.tileWidth / 2,
            ).j0),
            (this.corner.yT = this.center.y - this.h0 / 2),
            (this.corner.yB = this.center.y + this.h0 / 2 - 1)));
  }
  demo() {
    (this.w0 = 2),
      (this.h0 = 2),
      (this.tiles = [50, 50, 50, 50]),
      (this.states = [0, 0, 0, 0]),
      (this.gates = [
        [0, 0, "cInvert", "free", 0, 1, 0, 0, -1],
        [0, 1, "cInvert", "free", 0, 1, 0, 0, -1],
        [1, 0, "cInvert", "free", 0, 1, 0, 0, -1],
        [1, 1, "cInvert", "free", 0, 1, 0, 0, -1],
      ]),
      (this.corner = { xL: 1, xR: 2, yT: 1, yB: 2 }),
      (this.center = { x: 1, y: 1 });
  }
  initPaths() {
    var e = CANV.base.ctx;
    this.paths = new Array(this.w0 * this.h0).fill(0);
    for (var t = 0; t < this.w0 * this.h0; t++)
      if (this.tiles[t] > -1 && (this.tiles[t] < 40 || this.tiles[t] >= 100)) {
        var i = Math.floor(this.tiles[t] / 20),
          a = this.tiles[t] % 20;
        0 === i
          ? (this.paths[t] = PathsX.qWire(e, a, 0))
          : 1 === i
            ? (this.paths[t] = PathsX.cWire(e, a, 0))
            : 5 === i && (this.paths[t] = PathsX.mWire(e, a, 0));
      }
    for (var r = 0; r < this.gates.length; r++) {
      var s = this.gates[r],
        o = s[0],
        n = s[1],
        l = s[2],
        h = s[4],
        d = s[5],
        u = s[6],
        c = s[7];
      t = n * this.w0 + o;
      if (u === this.states[t])
        if ("switch" === l) this.paths[t] = PathsG.simpleSwitch(h);
        else if ("qControl" === l) this.paths[t] = PathsG.simpleControl(d, h);
        else {
          var I = {
            type: l,
            orient: h,
            rot: d,
            state: c,
            remaining: -1,
            counter: c,
            undercol: ["DarkGoldenRod", "GoldenRod"],
            basecol: GRADS.gates,
            ctx: e,
          };
          this.paths[t] = PathsG.make(e, I, !0);
        }
    }
  }
  draw() {
    for (
      var e = CANV.base.ctx,
        t = 0.5,
        i = this.corner.xL,
        a = this.corner.yT,
        r = 0;
      r < this.h0;
      r++
    )
      for (var s = 0; s < this.w0; s++) {
        var o = r * this.w0 + s;
        if (2 !== this.placeable[o]) {
          var n = this.corner.xL + s >= 0 && this.corner.xL + s < FIELD.cols,
            l = this.corner.yT + r >= 0 && this.corner.yT + r < FIELD.rows;
          n &&
            l &&
            Paths.place(CANV.base.ctx, this.placeable[o]).draw(
              CANV.base.ctx,
              (i + s + 0.5) * FIELD.tileWidth,
              (a + r + 0.5) * FIELD.tileWidth,
              FIELD.tileWidth,
              FIELD.tileHeight,
              t,
            );
        }
      }
    var h = PathsG.targetRing(new PathSet("", 32, 32), [
      "DarkGoldenRod",
      "GoldenRod",
    ]);
    h.isFancy = !0;
    for (var d = 0; d < this.gates.length; d++) {
      var u = this.gates[d];
      if ("switch" === u[2] || "qControl" === u[2]) {
        var c = i + u[0],
          I = a + u[1];
        0 === u[4] && (I += 1),
          1 === u[4] && (c -= 1),
          2 === u[4] && (I -= 1),
          3 === u[4] && (c += 1);
        (n = c >= 0 && c < FIELD.cols), (l = I >= 0 && I < FIELD.rows);
        n &&
          l &&
          h.draw(
            e,
            (c + 0.5) * FIELD.tileWidth,
            (I + 0.5) * FIELD.tileWidth,
            FIELD.tileWidth,
            FIELD.tileHeight,
            t,
          );
      }
    }
    for (r = 0; r < this.h0; r++)
      for (s = 0; s < this.w0; s++) {
        o = r * this.w0 + s;
        var E = this.tiles[o],
          S = Math.floor(E / 20);
        (n = this.corner.xL + s >= 0 && this.corner.xL + s < FIELD.cols),
          (l = this.corner.yT + r >= 0 && this.corner.yT + r < FIELD.rows);
        n &&
          l &&
          -1 !== E &&
          this.paths[o] &&
          (0 === S || 1 === S || 5 === S
            ? RenderLoops.drawWireSingle(
                e,
                this.paths[o],
                (i + s + 0.5) * FIELD.tileWidth,
                (a + r + 0.5) * FIELD.tileWidth,
                FIELD.tileWidth,
                FIELD.tileWidth,
                32,
                32,
                t,
              )
            : this.paths[o].draw(
                e,
                (i + s + 0.5) * FIELD.tileWidth,
                (a + r + 0.5) * FIELD.tileWidth,
                FIELD.tileWidth,
                FIELD.tileHeight,
                t,
              ));
      }
  }
}
