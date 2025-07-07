class Gate {
  constructor(e, t, i, a, r, s, o, n = 0, l = -1) {
    (this._i0 = e),
      (this._j0 = t),
      (this._orient = r),
      (this._action = a),
      (this._type = i),
      (this._rot = s),
      (this._layer = o),
      (this._state = n),
      (this._counter = 0),
      (this._counterMax = -2),
      (this._qubitStore = 0),
      ["compare"].indexOf(i) >= 0
        ? (this._numPoints = 2)
        : ["measure", "rotate", "qFlip", "upgrade", "qControl"].indexOf(i) >= 0
          ? (this._numPoints = 16)
          : ["delay"].indexOf(i) >= 0
            ? (this._numPoints = 8)
            : ["cCombine", "qCombine", "cSplit"].indexOf(i) >= 0
              ? (this._numPoints = 4)
              : ["cCreate", "qCreate"].indexOf(i) >= 0
                ? (this._numPoints = 3)
                : (this._numPoints = 0),
      l < 0 ? ((this._id = GLOBAL_IDG), (GLOBAL_IDG += 1)) : (this._id = l);
  }
  get i0() {
    return this._i0;
  }
  get j0() {
    return this._j0;
  }
  get orient() {
    return this._orient;
  }
  get action() {
    return this._action;
  }
  get type() {
    return this._type;
  }
  get rot() {
    return Math.round(1e13 * this._rot) / 1e13;
  }
  get layer() {
    return this._layer;
  }
  get state() {
    return this._state;
  }
  get id() {
    return this._id;
  }
  get counter() {
    return this._counter;
  }
  get counterMax() {
    return this._counterMax;
  }
  get qubitStore() {
    return this._qubitStore;
  }
  get numPoints() {
    return this._numPoints;
  }
  set i0(e) {
    this._i0 = e;
  }
  set j0(e) {
    this._j0 = e;
  }
  set action(e) {
    this._action = e;
  }
  set orient(e) {
    this._orient = e;
  }
  set rot(e) {
    this._rot = e;
  }
  set layer(e) {
    this._layer = e;
  }
  set state(e) {
    this._state = e;
  }
  set counter(e) {
    this._counter = e;
  }
  set counterMax(e) {
    this._counterMax = e;
  }
  set qubitStore(e) {
    this._qubitStore = e;
  }
  static getFlipMatrix(e) {
    var t = 1e-5;
    return (
      e > Math.PI + t && (e -= 2 * Math.PI),
      e < -Math.PI + t && (e += 2 * Math.PI),
      [Math.cos(e), Math.sin(e), Math.sin(e), -Math.cos(e)]
    );
  }
  static getRotMatrix(e) {
    var t = 1e-5;
    return (
      e > Math.PI + t && (e -= 2 * Math.PI),
      e < -Math.PI + t && (e += 2 * Math.PI),
      [Math.cos(e / 2), Math.sin(e / 2), -Math.sin(e / 2), Math.cos(e / 2)]
    );
  }
  setProperties(e) {
    (this._orient = e.orient),
      (this._rot = e.rot),
      (this._state = e.state),
      (this._counter = e.counter),
      (this._counterMax = e.counterMax);
  }
  getProperties() {
    var e = {
      type: this._type,
      orient: this._orient,
      rot: this._rot,
      state: this._state,
      counter: this._counter,
      counterMax: this._counterMax,
      remaining: this._counterMax,
    };
    return e;
  }
  getRotDeg() {
    var e = (16 + Math.round((this.rot / Math.PI) * 8)) % 16;
    e > 8 && (e -= 16);
    var t = String(22.5 * e);
    return e % 2 == 0 && (t += ".0"), t + "°";
  }
  getRotRad(e = !0) {
    var t = (16 + Math.round((this.rot / Math.PI) * 8)) % 16,
      i = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "-7",
        "-6",
        "-5",
        "-4",
        "-3",
        "-2",
        "-1",
      ],
      a = i[t] + "π/8";
    return e && t <= 8 && (a = " " + a), a;
  }
  pack() {
    return [
      this._i0,
      this._j0,
      this._type,
      this._action,
      this._orient,
      Math.round(1e12 * this._rot) / 1e12,
      this._layer,
      this._state,
      this._counterMax,
    ];
  }
  copy() {
    var e = new Gate(
      this._i0,
      this._j0,
      this._type,
      this._action,
      this._orient,
      this._rot,
      this._layer,
      this._state,
    );
    return (
      (e.counter = this.counter),
      (e.counterMax = this.counterMax),
      (e.qubitStore = this.qubitStore),
      e
    );
  }
  applyQuantum(e) {
    var t = this.i0 + this.j0 * e.width;
    if (e.state[t] === this.layer) {
      var i = e.getQubit(this.i0, this.j0);
      if ("pretransform" !== this.action)
        if ("transform" === this.action) {
          g = e.checkWhichControl(this.i0, this.j0, "switch").gate;
          if ((g && 1 === g.state && (g.rot += 2), "rotate" === this.type)) {
            if (((this.action = "free"), (i.action = "move"), 0 === this.state))
              i.applyRot(this.rot);
            else if (1 === this.state) {
              var a = Helper.random();
              if (a > 0.75) {
                var r = Math.floor(3 * Helper.random());
                0 === r && (r = -1);
                var s = r * (Math.PI / 2);
                i.applyRot(s);
              } else i.applyRot(0);
            } else if (2 === this.state) {
              (r = Math.floor(16 * Helper.random()) - 7),
                (s = r * (Math.PI / 8));
              i.applyRot(s);
            }
            return;
          }
          if ("qFlip" === this.type)
            return (
              (this.action = "free"),
              (i.action = "move"),
              void (0 === this.state
                ? i.applyFlip(this.rot)
                : 1 === this.state ||
                  (2 === this.state
                    ? (i.rotateBasis(0), (i.lockedBasis = !0))
                    : 3 === this.state &&
                      (i.rotateBasis(this.rot), (i.lockedBasis = !0))))
            );
          if ("measure" === this.type) {
            (this.action = "free"), (i.action = "move");
            var o = i.applyMeasure(this.rot),
              n = [54, 55, 56, 57];
            if (0 === this.orient)
              var l = e.getTile(this.i0, this.j0 - 1),
                h = e.getTile(this.i0, this.j0 + 1),
                d = !n.includes(l) && DIRCLASSIC.enterB.indexOf(l) >= 0,
                u = !n.includes(h) && DIRCLASSIC.enterT.indexOf(h) >= 0;
            else if (1 === this.orient) {
              (l = e.getTile(this.i0 - 1, this.j0)),
                (h = e.getTile(this.i0 + 1, this.j0));
              var c = !n.includes(l) && DIRCLASSIC.enterR.indexOf(l) >= 0,
                I = !n.includes(h) && DIRCLASSIC.enterL.indexOf(h) >= 0;
            }
            if (d) {
              var E = new Bit(this.i0, this.j0, 0, 1, "move", o, 0);
              e.setBit(E);
            }
            if (u) {
              E = new Bit(this.i0, this.j0, 0, 3, "move", o, 1);
              e.setBit(E);
            }
            if (c) {
              E = new Bit(this.i0, this.j0, 0, 0, "move", o, 0);
              e.setBit(E);
            }
            if (I) {
              E = new Bit(this.i0, this.j0, 0, 2, "move", o, 1);
              e.setBit(E);
            }
            return;
          }
        } else if ("nullswitch" === this.action) {
          if (e.checkIfEmpty(this.i0, this.j0))
            return void (this.action = "free");
        } else if ("switch" === this.action) {
          if (e.checkIfEmpty(this.i0, this.j0))
            return (
              (this.action = "free"),
              (e.state[t] = !e.state[t] + 0),
              void e.setState(this.i0, this.j0, e.state[t])
            );
        } else {
          if ("free" !== this.action) {
            if ("create" === this.action) {
              if (0 === this.state || 5 === this.state) {
                if (0 === this.rot) var S = 0;
                else if (1 === this.rot)
                  S = 8 * Math.floor(2 * Helper.random());
                else if (2 === this.rot) S = Math.floor(16 * Helper.random());
                else if (3 === this.rot) S = 4;
                var f = new Qubit(
                  this.i0,
                  this.j0,
                  this.orient,
                  -1,
                  "move",
                  (S * Math.PI) / 8,
                );
                3 === this.rot && f.rotateBasis(0),
                  5 === this.state && (f.rotateBasis(0), (f.lockedBasis = !0)),
                  e.setQubit(f),
                  (this.counter = this.counter + 1);
              } else if (SCENARIO.QINPUTS[this.rot].length > this.counter) {
                s = (Math.PI * SCENARIO.QINPUTS[this.rot][this.counter]) / 8;
                this.counter = this.counter + 1;
                f = new Qubit(this.i0, this.j0, this.orient, -1, "move", s);
                2 === this.state && (f.isGhost = !0),
                  3 === this.state && (f.rotateBasis(0), (f.lockedBasis = !0)),
                  4 === this.state && (f.lockedBasis = !0),
                  e.setQubit(f);
              }
              return void (this.action = "free");
            }
            if ("precompare" === this.action)
              return void (this.action = "compare");
            if ("compare" === this.action) {
              var p = 0;
              if (0 === p) {
                var T = 0.001,
                  R = i.projectMeasure(this.rot);
                1 - R < T
                  ? ((e.success += 1), (this.rot = 1), (this.counter = 1))
                  : ((e.failure += 1), (this.rot = 0), (this.counter = 2)),
                  i.applyMeasure(this.rot);
              } else if (1 === p) {
                i.applyMeasure(this.rot);
                var m = Math.abs(
                  i.ampsComp[0] * Math.cos(this.rot / 2) +
                    i.ampsComp[1] * Math.sin(this.rot / 2),
                );
                T = 1e-5;
                1 - m ** 2 < T
                  ? ((e.success += 1), (this.rot = 1), (this.counter = 1))
                  : ((e.failure += 1), (this.rot = 0), (this.counter = 2));
              }
              return (
                e.removeQubit(i), (this.action = "free"), void (this.state = 0)
              );
            }
            return (this.action = "free"), void (i && (i.action = "move"));
          }
          if ("qCreate" === this.type)
            return void (
              e.checkIfEmpty(this.i0, this.j0) &&
              (0 === this.state || 5 === this.state
                ? (this.counter < this.counterMax || this.counterMax < 0) &&
                  ((this.action = "create"),
                  this.j0 > 0 && this.j0 < 13 && (e.sfx[0] = !0))
                : SCENARIO.QINPUTS[this.rot].length > this.counter &&
                  (this.counter < this.counterMax || this.counterMax < 0) &&
                  (this.action = "create"))
            );
        }
      else {
        if ("rotate" === this.type)
          return (
            (this.action = "transform"),
            (i.action = "rotate"),
            void (e.sfx[2] = !0)
          );
        if ("qFlip" === this.type)
          return void (0 === this.state
            ? ((this.action = "transform"),
              (i.action = "flip"),
              (e.sfx[2] = !0))
            : ((i.action = "wait"), (this.action = "transform")));
        if ("measure" === this.type)
          return (
            (this.action = "transform"),
            (i.action = "measure"),
            void (e.sfx[1] = !0)
          );
        if ("qCombine" === this.type) {
          var g = e.checkWhichControl(this.i0, this.j0, "switch").gate;
          return (
            g && 1 === g.state && (g.rot += 2),
            2 === this.state && (this.counterMax -= 1),
            (this.action = "free"),
            void (i.action = "move")
          );
        }
        this.action = "transform";
      }
    }
  }
  applyClassic(e) {
    var t = this.i0 + this.j0 * e.width;
    if (e.state[t] === this.layer) {
      var i = e.getBit(this.i0, this.j0, 0),
        a = e.getBit(this.i0, this.j0, 1),
        r = e.getBit(this.i0, this.j0, 2);
      if ("pretransform" === this.action) {
        if ("cCombine" === this.type) {
          var s = e.checkWhichControl(this.i0, this.j0, "switch").gate;
          return (
            s && 1 === s.state && (s.rot += 2),
            (this.action = "free"),
            void (i.action = "move")
          );
        }
        if ("cInvert" === this.type) {
          if (((this.action = "transform"), 0 === this.state))
            0 === this.rot
              ? (i.action = "flip")
              : 1 === this.rot && (i.action = "nullflip"),
              (e.sfx[2] = !0);
          else if (1 === this.state)
            0 === this.rot
              ? 0 === i.value
                ? (i.action = "nullflip")
                : 1 === i.value && (i.action = "flip")
              : 1 === this.rot && (i.action = "nullflip"),
              (e.sfx[2] = !0);
          else if (2 === this.state) (i.action = "nullflip"), (i.isGhost = !0);
          else if (3 === this.state) {
            var o = Math.floor(5 * Helper.random());
            (i.action = 0 === o ? "flip" : "nullflip"), (e.sfx[2] = !0);
          }
          return;
        }
        return "cSplit" === this.type
          ? ((this.action = "free"),
            i && (i.action = "move"),
            a && (a.action = "move"),
            void (r && (r.action = "move")))
          : "cTrash" === this.type
            ? ((this.action = "transform"), void (i.action = "delete"))
            : void (this.action = "transform");
      }
      if ("transform" === this.action) {
        s = e.checkWhichControl(this.i0, this.j0, "switch").gate;
        return (
          s && 1 === s.state && (s.rot += 2),
          "cTrash" === this.type
            ? (e.removeBit(i), void (this.action = "free"))
            : "cInvert" === this.type
              ? (0 === this.state
                  ? 0 === this.rot && (i.value = !i.value + 0)
                  : 1 === this.state
                    ? 0 === this.rot && (i.value = 0)
                    : "flip" === i.action && (i.value = !i.value + 0),
                (i.action = "move"),
                void (this.action = "free"))
              : void (i.action = "move")
        );
      }
      if ("nullswitch" === this.action) {
        if (e.checkIfEmpty(this.i0, this.j0))
          return void (this.action = "free");
      } else if ("switch" === this.action) {
        if (e.checkIfEmpty(this.i0, this.j0))
          return (
            (this.action = "free"),
            (e.state[t] = !e.state[t] + 0),
            void e.setState(this.i0, this.j0, e.state[t])
          );
      } else {
        if ("create" === this.action) {
          if (((this.action = "free"), 0 === this.state)) {
            if (0 === this.rot) o = 0;
            else if (1 === this.rot) o = this.counter % 2;
            else if (2 === this.rot) o = Math.floor(2 * Helper.random());
            var n = new Bit(this.i0, this.j0, this.orient, -1, "move", o, 0);
            e.setBit(n), (this.counter = this.counter + 1);
          } else if (SCENARIO.CINPUTS[this.rot].length > this.counter) {
            o = SCENARIO.CINPUTS[this.rot][this.counter];
            this.counter = this.counter + 1;
            n = new Bit(this.i0, this.j0, this.orient, -1, "move", o, 0);
            2 === this.state && (n.isGhost = !0), e.setBit(n);
          }
          return;
        }
        if (
          "free" === this.action &&
          "cCreate" === this.type &&
          e.checkIfEmpty(this.i0, this.j0)
        )
          return void (0 === this.state
            ? (this.counter < this.counterMax || this.counterMax < 0) &&
              ((this.action = "create"), (e.sfx[0] = !0))
            : SCENARIO.CINPUTS[this.rot].length > this.counter &&
              (this.counter < this.counterMax || this.counterMax < 0) &&
              (this.action = "create"));
      }
    }
  }
  applyUniversal(e) {
    if ("free" !== this.action) {
      var t = this.i0 + this.j0 * e.width;
      if (e.state[t] === this.layer) {
        var i = e.getQubit(this.i0, this.j0, 0);
        if (i) var a = !0;
        else
          for (var r = 0; r < 3; r++) {
            var s = e.getBit(this.i0, this.j0, r);
            if (s) {
              var o = s;
              a = !1;
              break;
            }
          }
        if ("precompare" === this.action) {
          var n = e.getBit(this.i0, this.j0, 0),
            l = e.getBit(this.i0, this.j0, 1);
          return (
            (n.action = "ghost"),
            (l.action = "ghost"),
            void (this.action = "compare")
          );
        }
        if ("compare" === this.action) {
          if (a);
          else {
            (n = e.getBit(this.i0, this.j0, 0)),
              (l = e.getBit(this.i0, this.j0, 1));
            n.value === l.value
              ? ((e.success += 1), (this.rot = 1), (this.counter = 1))
              : ((e.failure += 1), (this.rot = 0), (this.counter = 2)),
              e.removeBit(n),
              e.removeBit(l);
          }
          return (this.action = "free"), void (this.state = 0);
        }
        if ("pretransform" === this.action) {
          if ("cOneCompare" === this.type)
            return (
              (o.action = "delete"),
              (this.action = "transform"),
              void (this.state = 5)
            );
          if ("qDubCompare" === this.type) {
            if (0 === this.state)
              var h = e.getQubit(18, 5),
                d = e.getQubit(18, 8);
            else if (1 === this.state)
              (h = e.getQubit(0, 5)), (d = e.getQubit(18, 5));
            return void (
              h &&
              d &&
              ((this.action = "transform"),
              (h.action = "qDubCompare"),
              (d.action = "qDubCompare"))
            );
          }
          if ("trash" === this.type)
            return (
              (this.action = "transform"),
              this.counter >= 0 && (this.counter += 1),
              a ? (i.action = "delete") : (o.action = "delete"),
              void (e.sfx[0] = !0)
            );
          if ("sync" === this.type) {
            var u = this.i0,
              c = this.j0;
            0 === this.orient
              ? (c += 1)
              : 1 === this.orient
                ? (u -= 1)
                : 2 === this.orient
                  ? (c -= 1)
                  : 3 === this.orient && (u += 1);
            var I = e.getGate(u, c);
            if ("pretransform" === I.action) {
              (this.action = "reset"),
                (I.action = "prereset"),
                a ? (i.action = "move") : (o.action = "move");
              var E = e.getQubit(u, c);
              if (E) E.action = "move";
              else {
                var S = e.getBit(u, c, 0);
                S.action = "move";
              }
              return;
            }
            return;
          }
          return "upgrade" === this.type
            ? ((o.action = "upgrade"),
              (this.action = "transform"),
              void (e.sfx[2] = !0))
            : "delay" === this.type
              ? void (a
                  ? 0 === this.state
                    ? ((i.action = "move"), (this.action = "free"))
                    : ((i.action = "wait"),
                      (this.action = "transform"),
                      (e.sfx[2] = !0))
                  : 0 === this.state
                    ? ((o.action = "move"), (this.action = "free"))
                    : ((o.action = "wait"),
                      (this.action = "transform"),
                      this.j0 > 0 && this.j0 < 13 && (e.sfx[2] = !0)))
              : void (this.action = "transform");
        }
        if ("transform" === this.action) {
          var f = e.checkWhichControl(this.i0, this.j0, "switch").gate;
          if ((f && (f.rot += 2), "cOneCompare" !== this.type)) {
            if ("qDubCompare" === this.type) {
              if (0 === this.state) {
                var p = 18,
                  T = 8;
                (u = 18), (c = 5);
              } else if (1 === this.state) (p = 0), (T = 5), (u = 18), (c = 5);
              var R = e.getGate(p, T),
                m = e.getGate(u, c),
                g = e.getQubit(p, T),
                A = e.getQubit(u, c),
                C = !1,
                L = g.entGroup;
              if (L) {
                var D = 1e-5;
                if (2 === L.numQubits) {
                  var b = L.qubitList[0].i0 === u || L.qubitList[0].i0 === p,
                    O = L.qubitList[0].j0 === c || L.qubitList[0].j0 === T,
                    M = L.qubitList[1].i0 === u || L.qubitList[1].i0 === p,
                    v = L.qubitList[1].j0 === c || L.qubitList[1].j0 === T;
                  if (0 === this.state)
                    var w = 0.5 - L.ampsComp[0] ** 2 < D,
                      y = 0.5 - L.ampsComp[3] ** 2 < D;
                  else if (1 === this.state)
                    (w = L.computeEnt(0) >= 0.85),
                      (y = L.computeEnt(1) >= 0.85);
                  w && y && b && O && M && v && (C = !0);
                }
                var N = g.computeNaturalBasis();
                g.applyMeasure(N);
                var P = A.computeNaturalBasis();
                A.applyMeasure(P);
              }
              return (
                C
                  ? ((e.success += 1), (R.counter = 1), (m.counter = 1))
                  : ((e.failure += 1), (R.counter = 0), (m.counter = 0)),
                e.removeQubit(g),
                e.removeQubit(A),
                (R.action = "free"),
                void (m.action = "free")
              );
            }
            if ("trash" === this.type) {
              if (a) {
                if (i.entGroup) {
                  var F = i.computeNaturalBasis();
                  i.applyMeasure(F);
                }
                e.removeQubit(i);
              } else e.removeBit(o);
              return void (this.action = "free");
            }
            if ("upgrade" === this.type) {
              if ((e.removeBit(o), 2 === this.state))
                var k = 1 + Math.floor(7 * Helper.random()),
                  x = k * (Math.PI / 8) + Math.PI * o.value;
              else x = this.rot - Math.PI * o.value;
              i = new Qubit(
                o.i0,
                o.j0,
                o.last,
                (this.orient + 2) % 4,
                "move",
                x,
                o.id,
              );
              return (
                (1 !== this.state && 2 !== this.state) || i.rotateBasis(0),
                e.setQubit(i),
                void (this.action = "free")
              );
            }
            return "delay" === this.type
              ? (this.j0 > 0 && this.j0 < 13 && (e.sfx[2] = !0),
                (this.rot += 1),
                void (
                  this.rot === this.state &&
                  ((this.rot = 0),
                  (this.action = "reset"),
                  a ? (i.action = "move") : (o.action = "move"))
                ))
              : void (a ? (i.action = "move") : (o.action = "move"));
          }
          (this.counter += o.value),
            (this.counterMax += 1),
            (e.success += 1),
            e.removeBit(o),
            (this.action = "free"),
            (this.state = 0);
        } else if ("nullswitch" === this.action) {
          if (e.checkIfEmpty(this.i0, this.j0))
            return void (this.action = "free");
        } else {
          if ("reset" === this.action) return void (this.action = "free");
          if ("prereset" === this.action) return void (this.action = "reset");
          if ("switch" === this.action && e.checkIfEmpty(this.i0, this.j0))
            return (
              (this.action = "free"),
              (e.state[t] = !e.state[t] + 0),
              void e.setState(this.i0, this.j0, e.state[t])
            );
        }
      }
    }
  }
  applySwitch(e) {
    this.i0, this.j0, e.width;
    var t = e.getBit(this.i0, this.j0, 0);
    if ("transform" === this.action)
      return (
        (this.action = "free"), (this.rot = t.value), void (t.action = "move")
      );
    if ("pretransform" === this.action) {
      var i = this.i0,
        a = this.j0;
      0 === this.orient
        ? (a += 1)
        : 1 == this.orient
          ? (i -= 1)
          : 2 == this.orient
            ? (a -= 1)
            : 3 == this.orient && (i += 1);
      var r = i + a * e.width,
        s = e.state[r],
        o = e.getGate(i, a, 0),
        n = e.getGate(i, a, 1);
      if (0 === o || 0 === n)
        return (this.action = "free"), void (t.action = "move");
      if ("free" === o.action && "free" === n.action)
        e.checkIfEmpty(i, a)
          ? ((this.action = "transform"),
            (t.action = "transform"),
            s === t.value
              ? 0 === s
                ? ((o.action = "nullswitch"), (e.sfx[1] = !0))
                : ((n.action = "nullswitch"), (e.sfx[1] = !0))
              : 0 === s
                ? ((o.action = "switch"), (e.sfx[1] = !0))
                : ((n.action = "switch"), (e.sfx[1] = !0)))
          : 0 === s
            ? (o.action = "hold")
            : (n.action = "hold");
      else if ("hold" === o.action || "hold" === n.action)
        return void (
          e.checkIfEmpty(i, a) &&
          ((t.action = "transform"),
          (this.action = "transform"),
          s === t.value
            ? 0 === s
              ? (o.action = "nullswitch")
              : (n.action = "nullswitch")
            : 0 === s
              ? (o.action = "switch")
              : (n.action = "switch"))
        );
    }
  }
  applyControl(e) {
    this.i0, this.j0, e.width;
    var t = e.getQubit(this.i0, this.j0);
    if (2 === this.state)
      var i = FIELD.cols - 3,
        a = FIELD.rows - 1;
    else {
      (i = this.i0), (a = this.j0);
      0 === this.orient
        ? (a += 1)
        : 1 === this.orient
          ? (i -= 1)
          : 2 === this.orient
            ? (a -= 1)
            : 3 === this.orient && (i += 1);
    }
    var r = e.getQubit(i, a),
      s = e.getGate(i, a, 0),
      o = e.getGate(i, a, 1);
    if (t && r) {
      if ("entangle" === this.action) {
        var n = !1;
        if (
          (t.entGroup &&
            r.entGroup &&
            t.entGroup.id === r.entGroup.id &&
            (n = !0),
          n)
        )
          var l = t.entGroup.numQubits;
        else {
          var h = 1;
          t.entGroup && (h = t.entGroup.numQubits);
          var d = 1;
          r.entGroup && (d = r.entGroup.numQubits);
          l = h + d;
        }
        if (l > 4 + FIELD.maxBonusTiles) {
          var u = l - (4 + FIELD.maxBonusTiles);
          if (t.entGroup) {
            t.entGroup.computeAllEnts();
            var c = t.entGroup.ents,
              I = t.entInd;
          } else (c = [0]), (I = 0);
          if (r.entGroup) {
            r.entGroup.computeAllEnts();
            var E = r.entGroup.ents,
              S = h + r.entInd;
          } else (E = [0]), (S = h);
          var f = c.concat(E),
            p = [...Array(l).keys()];
          p.sort(function (e, t) {
            return f[e] < f[t] ? -1 : f[e] > f[t] ? 1 : 0;
          });
          for (
            var T = [], R = 0;
            R < l &&
            (p[R] !== I && p[R] !== S && T.push(p[R]), !(T.length >= u));
            R++
          );
          var m = [],
            g = [];
          for (R = 0; R < u; R++) T[R] < h ? m.push(T[R]) : g.push(T[R] - h);
          (m = m.sort(function (e, t) {
            return e - t;
          })),
            (g = g.sort(function (e, t) {
              return e - t;
            }));
          for (R = m.length - 1; R >= 0; R--) {
            var A = t.entGroup.computeNaturalBasis(m[R]);
            t.entGroup.applyMeasure(m[R], A);
          }
          for (R = g.length - 1; R >= 0; R--) {
            A = r.entGroup.computeNaturalBasis(g[R]);
            r.entGroup.applyMeasure(g[R], A);
          }
        }
        var C = !0;
        if (
          ("qFlip" === s.type && 1 === s.state && (C = !1),
          "rotate" === s.type && 0 === s.rot && (C = !1),
          n)
        )
          return (
            t.entGroup.applyControl(t.entInd, r.entInd, this.rot, s, o),
            (t.action = "halt"),
            (r.action = "halt"),
            (this.action = "free"),
            void (s.action = "free")
          );
        if (t.entGroup) {
          if (r.entGroup) {
            if (C) {
              var L = Entangled.joinStatesEE(t.entGroup, r.entGroup);
              L.applyControl(t.entInd, r.entInd, this.rot, s, o);
            }
            return (
              (t.action = "halt"),
              (r.action = "halt"),
              (this.action = "free"),
              void (s.action = "free")
            );
          }
          if (C) {
            L = Entangled.joinStatesEQ(t.entGroup, r);
            L.applyControl(t.entInd, r.entInd, this.rot, s, o);
          }
          return (
            (t.action = "halt"),
            (r.action = "halt"),
            (this.action = "free"),
            void (s.action = "free")
          );
        }
        if (r.entGroup) {
          if (C) {
            L = Entangled.joinStatesQE(t, r.entGroup);
            L.applyControl(t.entInd, r.entInd, this.rot, s, o);
          }
          return (
            (t.action = "halt"),
            (r.action = "halt"),
            (this.action = "free"),
            void (s.action = "free")
          );
        }
        if (C) {
          L = Entangled.joinStatesQQ(t, r);
          L.applyControl(0, 1, this.rot, s, o), e.entList.push(L);
        }
        return (
          (t.action = "halt"),
          (r.action = "halt"),
          (this.action = "free"),
          void (s.action = "free")
        );
      }
      "wait" === t.action &&
        "wait" === r.action &&
        "pretransform" === this.action &&
        "pretransform" === s.action &&
        ((t.action = "controlled"),
        "qFlip" === s.type
          ? (r.action = "flip")
          : "rotate" === s.type
            ? (r.action = "rotate")
            : (r.action = "halt"),
        (this.action = "entangle"),
        this.j0 > 0 && this.j0 < 13 && (e.sfx[1] = !0));
    } else
      t
        ? "pretransform" === this.action
          ? (t.action = "wait")
          : (t.action = "halt")
        : r &&
          ("pretransform" === s.action
            ? (r.action = "wait")
            : (r.action = "halt"));
  }
}
