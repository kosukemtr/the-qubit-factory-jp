class Render {
  static dynamicGatesCheap(e, t, i, a, r = 0, s = !1) {
    r || (r = [0, 0, e._width, e._height]);
    var o = e.gateList.length,
      n = ["DarkGoldenRod", "GoldenRod"],
      l = [
        flashColor("DarkGoldenRod", TIMER.trigRatioDub),
        flashColor("GoldenRod", TIMER.trigRatioDub),
      ];
    if (s) {
      var h = ["black", "#444", "#666"],
        d = i.createRadialGradient(8, 8, 1, 16, 16, 16);
      d.addColorStop(0, h[2]),
        d.addColorStop(0.2, h[1]),
        d.addColorStop(1, h[0]);
    } else d = GRADS.gates;
    if (TIMER.trigRatioDub < 1e-5) var u = d;
    else if (OPTS.fancyGraphics) {
      (h = [
        flashColor("black", TIMER.trigRatioDub),
        flashColor("#444", TIMER.trigRatioDub),
        flashColor("#666", TIMER.trigRatioDub),
      ]),
        (u = i.createRadialGradient(8, 8, 1, 16, 16, 16));
      u.addColorStop(0, h[2]),
        u.addColorStop(0.2, h[1]),
        u.addColorStop(1, h[0]);
    } else u = flashColor("black", TIMER.trigRatioDub);
    for (var c = d, I = 0; I < o; I++) {
      var E = e.gateList[I],
        S = E.j0 * e.width + E.i0,
        f = E.i0 >= r[0] && E.i0 <= r[2],
        p = E.j0 >= r[1] && E.j0 <= r[3];
      if (E.layer === e.state[S] && f && p) {
        var T = e.checkWhichControl(E.i0, E.j0),
          R = e.x0 + E.i0 * FIELD.tileWidth,
          m = e.y0 + E.j0 * FIELD.tileHeight,
          g = {
            type: E.type,
            orient: E.orient,
            rot: E.rot,
            state: E.state,
            remaining: -1,
            counter: E.counter,
            isControlled: T.dir >= 0,
            ctx: i,
            counterMax: E.counterMax,
            cdir: T.dir,
            talpha: 0,
          };
        if (
          (("qCreate" === E.type || "cCreate" === E.type) && E.counterMax >= 0
            ? (g.remaining = E.counterMax - E.counter)
            : "delay" === E.type &&
              ("transform" === E.action
                ? ((g.rot = E.state - E.rot - TIMER.trigRatio), (g.state = 0))
                : "reset" === E.action
                  ? ((g.rot = E.state * TIMER.trigRatio), (g.state = 0))
                  : "free" === E.action && ((g.rot = E.state), (g.state = 0))),
          "sync" === E.type
            ? (Render.resolveSync(e, t, E) > 0
                ? (g.undercol = l)
                : (g.undercol = n),
              (g.basecol = c))
            : "switch" === E.type || "qControl" === E.type
              ? ("transform" === E.action || "entangle" === E.action
                  ? (g.undercol = l)
                  : (g.undercol = n),
                (g.basecol = c))
              : "compare" === E.action
                ? TIMER.ratio > 0.5 && (g.state = 0)
                : "cCombine" === E.type || "qCombine" === E.type
                  ? (g.basecol = c)
                  : "free" === E.action
                    ? (g.basecol = c)
                    : "transform" === E.action ||
                        "pretransform" === E.action ||
                        "reset" === E.action
                      ? (g.basecol = u)
                      : (g.basecol = c),
          "switch" === E.type && 1 === E.state)
        ) {
          var A = t.getGate(E.i0, E.j0),
            C = E.rot > 1,
            L = A.rot > 1;
          g.talpha = L * TIMER.trigRatio + (1 - TIMER.trigRatio) * C;
        }
        if ("switch" === T.type) {
          A = e.getGate(E.i0, E.j0, t.getState(E.i0, E.j0));
          g = Render.resolveSwitch(i, E, A, g);
        } else
          "qControl" === T.type &&
            ("entangle" === T.action ? (g.basecol = u) : (g.basecol = c));
        if (
          (PathsG.make(i, g).draw(i, R, m, FIELD.tileWidth, FIELD.tileHeight),
          "switch" === E.type && 1 === E.state)
        ) {
          (C = E.rot > 1), (L = A.rot > 1);
          var D = L * TIMER.trigRatio + (1 - TIMER.trigRatio) * C;
          PathsX.snappersSwitch(a, E.orient + 1, R, m, 1 - D, 1);
        }
        if ("cCreate" === E.type) {
          if ("create" === E.action) {
            if (TIMER.ratio >= 0.5) {
              var b = t.getBit(E.i0, E.j0),
                O = Paths.bit(i, b.value, TIMER.trigRatioDub, TIMER.glareRatio);
              O.draw(i, R, m, FIELD.tileWidth, FIELD.tileHeight);
            }
            O = Paths.wormholes(a, TIMER.trigRatio);
            O.draw(a, R, m, FIELD.tileWidth, FIELD.tileHeight);
          }
        } else if ("qCreate" === E.type) {
          if ("create" === E.action) {
            if (TIMER.ratio >= 0.5) {
              var M = t.getQubit(E.i0, E.j0);
              if (M) {
                var v = M.computeAlfs(TIMER.blinkRatio);
                O = Paths.newQubit(
                  i,
                  M.basisRot,
                  TIMER.trigRatioDub,
                  TIMER.glareRatio,
                  0,
                  v[1],
                  M.ampsFinal,
                  [0, M.ampsFinal[0] ** 2],
                  v,
                );
                O.draw(i, R, m, FIELD.tileWidth, FIELD.tileHeight);
              }
            }
            O = Paths.wormholes(a, TIMER.trigRatio, 1);
            O.draw(a, R, m, FIELD.tileWidth, FIELD.tileHeight);
          }
        } else if ("sync" === E.type) {
          if (OPTS.useSnappers) {
            var w = Render.resolveSyncSnappers(e, t, E);
            PathsX.snappersSync(a, w.snapRot, E.orient % 2, w.snapExtend, R, m);
          }
        } else if ("delay" === E.type) {
          if (OPTS.useSnappers) {
            w = Render.resolveDelay(e, t, E);
            PathsX.snappersDelay(
              a,
              w.snapRot,
              E.orient % 2,
              w.snapExtend,
              R,
              m,
            );
          }
        } else if ("switch" === E.type) {
          if ("transform" === E.action) {
            O = Paths.scannersSmall(
              a,
              TIMER.trigRatio,
              ((E.orient % 2) * Math.PI) / 2,
            );
            O.draw(a, R, m, FIELD.tileWidth, FIELD.tileHeight);
          }
        } else if ("qControl" === E.type) {
          if ("entangle" === E.action) {
            O = Paths.scannersSmall(a, TIMER.trigRatio, E.rot, 1);
            O.draw(a, R, m, FIELD.tileWidth, FIELD.tileHeight);
          }
        } else if ("measure" === E.type) {
          if ("transform" === E.action) {
            O = Paths.scanners(a, TIMER.trigRatio, E.rot);
            O.draw(a, R, m, FIELD.tileWidth, FIELD.tileHeight);
          }
        } else if ("compare" === E.type || "qCompare" === E.type) {
          if ("compare" === E.action && TIMER.ratio > 0.5) {
            A = t.getGate(E.i0, E.j0);
            PathsX.flare(a, TIMER.tick, TIMER.ratio, R, m, 1 === A.counter);
          }
        } else if ("qDubCompare" === E.type) {
          if ("transform" === E.action && TIMER.ratio > 0.5) {
            A = t.getGate(E.i0, E.j0);
            PathsX.flare(a, TIMER.tick, TIMER.ratio, R, m, 1 === A.counter);
          }
        } else if (
          "cOneCompare" === E.type &&
          "transform" === E.action &&
          TIMER.ratio > 0.5
        ) {
          A = t.getGate(E.i0, E.j0);
          PathsX.flare(a, TIMER.tick, TIMER.ratio, R, m, !0);
        }
      }
    }
  }
  static singleGatesCheap(e, t, i, a = -1, r = -1) {
    for (
      var s = e.gateList.length,
        o = ["DarkGoldenRod", "GoldenRod"],
        n = GRADS.gates,
        l = (GRADS.flame, 0);
      l < s;
      l++
    ) {
      var h = e.gateList[l],
        d = h.j0 * e.width + h.i0;
      if (h.layer === e.state[d]) {
        var u = e.checkWhichControl(h.i0, h.j0),
          c = e.x0 + h.i0 * FIELD.tileWidth,
          I = e.y0 + h.j0 * FIELD.tileHeight,
          E = {
            type: h.type,
            orient: h.orient,
            rot: h.rot,
            state: h.state,
            remaining: -1,
            counter: h.counter,
            isControlled: u.dir >= 0,
            undercol: o,
            basecol: n,
            ctx: t,
            counterMax: h.counterMax,
            cdir: u.dir,
            talpha: 0,
          };
        ("qCreate" === h.type || "cCreate" === h.type) &&
          h.counterMax >= 0 &&
          (E.remaining = h.counterMax - h.counter),
          "forwardTrans" === STATE.mode && (E.talpha = TIMER.transRatio),
          PathsG.make(t, E).draw(t, c, I, FIELD.tileWidth, FIELD.tileHeight);
        var S = !1;
        if (h.i0 === a && h.j0 === r) {
          S = !0;
          var f =
            ("gatemanip" === STATE.state || "free" === STATE.state) &&
            STATE.grab.i0 === a &&
            STATE.grab.j0 === r;
          f && (S = !1),
            "free" !== STATE.state &&
              "gatemanip" !== STATE.state &&
              "qubiting" !== STATE.state &&
              (S = !1),
            SCENARIO.editable[d] < 1 && (S = !1);
        }
        if (S) {
          var p =
              1 * (1.2 + 0.15 * Math.cos(8 * Math.PI * TIMER.qubitGlowRatio)),
            T = Paths.qubitHalo(i);
          T.draw(
            i,
            c - ((p - 1) / 2) * FIELD.tileWidth,
            I - ((p - 1) / 2) * FIELD.tileHeight,
            p * FIELD.tileWidth,
            p * FIELD.tileHeight,
          );
        }
        "switch" === h.type &&
          1 === h.state &&
          "forwardTrans" === STATE.mode &&
          PathsX.snappersSwitch(i, h.orient + 1, c, I, 0, TIMER.transRatio),
          "forwardTrans" === STATE.mode &&
            OPTS.useSnappers &&
            ("sync" === h.type
              ? OPTS.useSnappers &&
                PathsX.snappersSync(
                  i,
                  0,
                  h.orient % 2,
                  1,
                  c,
                  I,
                  TIMER.transRatio,
                )
              : "delay" === h.type &&
                OPTS.useSnappers &&
                PathsX.snappersDelay(
                  i,
                  0,
                  h.orient % 2,
                  1,
                  c,
                  I,
                  TIMER.transRatio,
                ));
      }
    }
  }
  static boardWires(e, t, i = 0, a = 0, r = !0) {
    a || (a = [0, 0, e._width, e._height]);
    for (var s = [], o = [], n = [], l = 0; l < e._height; l++)
      for (var h = 0; h < e._width; h++) {
        var d = l * e._width + h;
        if (e._tiles[d] >= 0) {
          var u = (i - h - l) / 6,
            c = Math.floor(e._tiles[d] / 20),
            I = e._tiles[d] % 20,
            E = !0;
          0 === c
            ? s.push(PathsX.qWire(t, I, u))
            : 1 === c
              ? s.push(PathsX.cWire(t, I, u))
              : 5 === c
                ? s.push(PathsX.mWire(t, I, u))
                : 40 === e._tiles[d] || 42 === e._tiles[d]
                  ? s.push(PathsX.cWire(t, 2, u))
                  : 41 === e._tiles[d] || 43 === e._tiles[d]
                    ? s.push(PathsX.cWire(t, 1, u))
                    : 70 === e._tiles[d] || 72 === e._tiles[d]
                      ? s.push(PathsX.qWire(t, 2, u))
                      : 71 === e._tiles[d] || 73 === e._tiles[d]
                        ? s.push(PathsX.qWire(t, 1, u))
                        : (E = !1),
            E &&
              (o.push(e.x0 + h * FIELD.tileWidth),
              n.push(e.y0 + l * FIELD.tileHeight));
        }
      }
    if (
      (RenderLoops.drawWires(t, s, o, n, FIELD.tileWidth, FIELD.tileHeight), r)
    )
      for (
        var S = [0, 0, 18, 18, 5, 13], f = [5, 8, 5, 8, 13, 13], p = 0;
        p < 6;
        p++
      )
        if (SCENARIO.channelsCol[p]) {
          var T = e.x0 + S[p] * FIELD.tileWidth,
            R = e.y0 + f[p] * FIELD.tileHeight;
          u = (i - S[p] - f[p]) / 6;
          if (p < 2) var m = 2;
          else if (p < 4) m = 0;
          else m = 1;
          m *= Math.sign(SCENARIO.channelsCol[p]);
          var g = PathsX.boardArrow(t, Math.abs(SCENARIO.channelsCol[p]), m, u);
          RenderLoops.drawSimple(t, g, T, R, FIELD.tileWidth, FIELD.tileHeight);
        }
    if (SCENARIO.text0) {
      (T = e.x0 + (SCENARIO.text0.i0 + 0.5) * FIELD.tileWidth),
        (R = e.y0 + (SCENARIO.text0.j0 + 0.5) * FIELD.tileHeight);
      t.save(),
        (t.textBaseline = "middle"),
        (t.textAlign = "center"),
        (t.font = FIELD.tileWidth / 3 + "px Verdana"),
        (t.fillStyle = "black"),
        t.fillText(SCENARIO.text0.text, T, R),
        t.restore();
    }
    if (SCENARIO.text1) {
      (T = e.x0 + (SCENARIO.text1.i0 + 0.5) * FIELD.tileWidth),
        (R = e.y0 + (SCENARIO.text1.j0 + 0.5) * FIELD.tileHeight);
      t.save(),
        (t.textBaseline = "middle"),
        (t.textAlign = "center"),
        (t.font = FIELD.tileWidth / 3 + "px Verdana"),
        (t.fillStyle = "black"),
        t.fillText(SCENARIO.text1.text, T, R),
        t.restore();
    }
    if (SCENARIO.text2) {
      (T = e.x0 + (SCENARIO.text2.i0 + 0.5) * FIELD.tileWidth),
        (R = e.y0 + (SCENARIO.text2.j0 + 0.5) * FIELD.tileHeight);
      t.save(),
        (t.textBaseline = "middle"),
        (t.textAlign = "center"),
        (t.font = FIELD.tileWidth / 3 + "px Verdana"),
        (t.fillStyle = "black"),
        t.fillText(SCENARIO.text2.text, T, R),
        t.restore();
    }
  }
  static boardDynamic(e, t, i = 0, a = [1, 1, 1]) {
    i || (i = [0, 0, e._width, e._height]);
    var r = a[0],
      s = a[1],
      o = a[2],
      n = CANV.base.ctx,
      l = CANV.effects.ctx,
      h = CANV.controls.ctx;
    if (
      (CANV.base.clear(),
      CANV.effects.clear(),
      (n.imageSmoothingEnabled = !1),
      (l.imageSmoothingEnabled = !1),
      (h.imageSmoothingEnabled = !1),
      OPTS.displayBoard)
    )
      if (0 !== e && 0 !== t) {
        var d = 20,
          u = (e.width + d) * TIMER.wireRatio;
        r && Render.boardWires(e, n, u, i),
          Render.controlTarget(e, n),
          s && Render.dynamicGatesCheap(e, t, n, l, i),
          o && Render.dynamicQubits(e, t, n, l, h, i);
      } else Render.boardSingle(IBOARD);
  }
  static boardDynamicTutorial(e, t) {
    var i = [0, 0, e._width, e._height],
      a = 1,
      r = 1,
      s = 1,
      o = CANV.tutorialGates.ctx,
      n = CANV.tutorialEffects.ctx,
      l = CANV.tutorialControls.ctx;
    CANV.tutorialGates.clear(),
      CANV.tutorialEffects.clear(),
      CANV.tutorialControls.clear(),
      a && Render.boardWires(e, o, 0, i),
      Render.controlTarget(e, o),
      r && Render.dynamicGatesCheap(e, t, o, n, i, !0),
      s && Render.dynamicQubits(e, t, o, n, l, i);
  }
  static boardSingle(e, t = -1, i = -1) {
    CANV.base.clear(),
      CANV.effects.clear(),
      TIMER.construct < 0 && CANV.controls.clear();
    var a = CANV.base.ctx,
      r = CANV.effects.ctx,
      s = CANV.controls.ctx,
      o = 20,
      n = (e.width + o) * TIMER.wireRatio;
    Render.boardWires(e, a, n, 0),
      Render.controlTarget(e, a),
      Render.singleGatesCheap(e, a, r, t, i),
      Render.singleQubits(e, a, s);
  }
  static boardSingleTutorial(e) {
    var t = CANV.tutorialGates.ctx,
      i = CANV.tutorialEffects.ctx;
    CANV.tutorialGates.clear(),
      CANV.tutorialEffects.clear(),
      Render.boardWires(e, t, 0, 0, !1),
      Render.controlTarget(e, t),
      Render.singleGatesCheap(e, t, i, TUTORIAL.i0High, TUTORIAL.j0High),
      Render.singleQubits(e, t);
  }
  static singleQubits(e, t, i = 0) {
    i || (i = t);
    for (var a = 0; a < e._height; a++)
      for (var r = 0; r < e._width; r++) {
        var s = a * e._width + r;
        if (e._bits[0][s]) {
          var o = e.x0 + r * FIELD.tileWidth,
            n = e.y0 + a * FIELD.tileHeight,
            l = e._bits[0][s],
            h = Paths.bit(t, l.value, 0, TIMER.glareRatio, 1, l.isGhost);
          h.draw(t, o, n, FIELD.tileWidth, FIELD.tileHeight);
        }
        if (e._qubits[s]) {
          (o = e.x0 + r * FIELD.tileWidth), (n = e.y0 + a * FIELD.tileHeight);
          var d = e._qubits[s];
          if (
            d.isHovered &&
            "qubit" === STATE.under.type &&
            TIMER.construct < 0
          ) {
            var u = 1 + 0.2 * Math.cos(8 * Math.PI * TIMER.qubitGlowRatio),
              c =
                ((h = Paths.qubitHalo(i, this.basisRot, !0, -1)),
                0.9 * (1 + 0.1 * Math.cos(8 * Math.PI * TIMER.qubitGlowRatio)));
            h.draw(
              i,
              o - ((c - 1) / 2) * FIELD.tileWidth,
              n - ((c - 1) / 2) * FIELD.tileHeight,
              c * FIELD.tileWidth,
              c * FIELD.tileHeight,
            );
          } else u = 1;
          var I = ((u - 1) / 2) * FIELD.tileWidth,
            E = ((u - 1) / 2) * FIELD.tileWidth;
          if (d.entGroup) {
            var S = d.entGroup.id % ENTBLOBS._colors.length,
              f = (2 * d.entGroup.id) % ENTBLOBS.numBlobs,
              p = (2 * d.entGroup.id + 1) % ENTBLOBS.numBlobs;
            ENTBLOBS.draw(t, f, S, o, n, 1, e._qubits[s].ent),
              ENTBLOBS.draw(t, p, S, o, n, -1, e._qubits[s].ent);
          }
          var T = d.computeAlfs(TIMER.blinkRatio);
          h = Paths.newQubit(
            t,
            d.basisRot,
            0,
            TIMER.glareRatio,
            0,
            d.arrow(T),
            d.ampsFinal,
            d.offsets,
            T,
            d.isGhost,
          );
          h.draw(t, o - I, n - E, u * FIELD.tileWidth, u * FIELD.tileHeight);
        }
      }
  }
  static dynamicQubits(e, t, i, a, r, s) {
    for (
      var o = TIMER.ratio,
        n = TIMER.glareRatio,
        l = TIMER.trigRatio,
        h = TIMER.popRatio,
        d = TIMER.trigRatioDub,
        u = TIMER.defaultTimePerTick / TIMER.timePerTick,
        c = [],
        I = 0;
      I < t._bitList.length;
      I++
    )
      c.push(t._bitList[I].id);
    var E = [];
    for (I = 0; I < t._qubitList.length; I++) E.push(t._qubitList[I].id);
    for (var S = s[1]; S < s[3]; S++)
      for (var f = s[0]; f < s[2]; f++) {
        var p = S * e._width + f;
        if (e._bits[0][p]) {
          var T = e.x0 + f * FIELD.tileWidth,
            R = e.y0 + S * FIELD.tileHeight,
            m = e._bits[0][p];
          if ("freeze" === m.action) {
            var g = Paths.bit(i, m.value, 0, n, 0);
            g.draw(i, T, R, FIELD.tileWidth, FIELD.tileHeight);
          } else if ("ghost" === m.action) {
            if (TIMER.ratio < 0.5) {
              g = Paths.bit(i, m.value, d, n, 0);
              g.draw(i, T, R, FIELD.tileWidth, FIELD.tileHeight);
            }
          } else if ("move" === m.action || "halt" === m.action) {
            var A = c.indexOf(m.id),
              C = t._bitList[A],
              L = m.findNextDir(e),
              D =
                C.i0 === f &&
                C.j0 === S &&
                L >= 0 &&
                !m.isGhost &&
                u < 3 &&
                "tutorial" != STATE.mode;
            if (D) {
              var b = 0,
                O = 0;
              if (0 === L) b = -FIELD.tileWidth;
              else if (1 === L) O = -FIELD.tileHeight;
              else if (2 === L) b = FIELD.tileWidth;
              else if (3 === L) O = FIELD.tileHeight;
              var M = T + 0.15 * l * d * b,
                v = R + 0.15 * l * d * O;
            } else {
              var w = e.x0 + C.i0 * FIELD.tileWidth,
                y = e.y0 + C.j0 * FIELD.tileHeight;
              (M = h * w + (1 - h) * T), (v = h * y + (1 - h) * R);
            }
            g = Paths.bit(i, m.value, 0, n, 1, m.isGhost);
            g.draw(i, M, v, FIELD.tileWidth, FIELD.tileHeight);
          } else if ("transform" === m.action) {
            g = Paths.bit(i, m.value, d, n);
            g.draw(i, T, R, FIELD.tileWidth, FIELD.tileHeight);
          } else if ("upgrade" === m.action) {
            A = E.indexOf(m.id);
            var N = t._qubitList[A];
            if (o <= 0.5) {
              g = Paths.bit(i, m.value, d, n);
              g.draw(i, T, R, FIELD.tileWidth, FIELD.tileHeight);
            } else {
              var P = N.computeAlfs(TIMER.blinkRatio);
              g = Paths.newQubit(
                i,
                N.basisRot,
                0,
                n,
                0,
                P[1],
                N.ampsFinal,
                [0, N.ampsFinal[0] ** 2],
                P,
                N.isGhost,
              );
              g.draw(i, T, R, FIELD.tileWidth, FIELD.tileHeight);
            }
          } else if ("flip" === m.action)
            if (o <= 0.5) {
              g = Paths.bit(i, m.value, d, n);
              g.draw(i, T, R, FIELD.tileWidth, FIELD.tileHeight);
            } else {
              g = Paths.bit(i, 1 - m.value, d, n);
              g.draw(i, T, R, FIELD.tileWidth, FIELD.tileHeight);
            }
          else if ("nullflip" === m.action) {
            g = Paths.bit(i, m.value, 0, n);
            g.draw(i, T, R, FIELD.tileWidth, FIELD.tileHeight);
          } else if ("delete" === m.action) {
            if (o < 0.5) {
              g = Paths.bit(i, m.value, d, n);
              g.draw(i, T, R, FIELD.tileWidth, FIELD.tileHeight);
            } else if ("tutorial" !== STATE.mode) {
              g = Paths.fireRing(i, l);
              g.draw(i, T, R, FIELD.tileWidth, FIELD.tileHeight);
            }
          } else {
            g = Paths.bit(i, m.value, 0, n);
            g.draw(i, T, R, FIELD.tileWidth, FIELD.tileHeight);
          }
        }
        if (e._bits[1][p]) {
          (T = e.x0 + f * FIELD.tileWidth),
            (R = e.y0 + S * FIELD.tileHeight),
            (m = e._bits[1][p]);
          if ("ghost" === m.action) {
            if (TIMER.ratio < 0.5) {
              g = Paths.bit(i, m.value, d, n, 0);
              g.draw(i, T, R, FIELD.tileWidth, FIELD.tileHeight);
            }
          } else if ("move" === m.action || "halt" === m.action) {
            (A = c.indexOf(m.id)),
              (C = t._bitList[A]),
              (L = m.findNextDir(e)),
              (D =
                C.i0 === f &&
                C.j0 === S &&
                L >= 0 &&
                !m.isGhost &&
                u < 3 &&
                "tutorial" != STATE.mode);
            if (D) {
              (b = 0), (O = 0);
              if (0 === L) b = -FIELD.tileWidth;
              else if (1 === L) O = -FIELD.tileHeight;
              else if (2 === L) b = FIELD.tileWidth;
              else if (3 === L) O = FIELD.tileHeight;
              (M = T + 0.15 * l * d * b), (v = R + 0.15 * l * d * O);
            } else
              (w = e.x0 + C.i0 * FIELD.tileWidth),
                (y = e.y0 + C.j0 * FIELD.tileHeight),
                (M = h * w + (1 - h) * T),
                (v = h * y + (1 - h) * R);
            g = Paths.bit(i, m.value, 0, n);
            g.draw(i, M, v, FIELD.tileWidth, FIELD.tileHeight);
          } else if ("transform" === m.action) {
            g = Paths.bit(i, m.value, d, n);
            g.draw(i, T, R, FIELD.tileWidth, FIELD.tileHeight);
          } else if ("freeze" === m.action) {
            g = Paths.bit(i, m.value, 0, n, 0);
            g.draw(i, T, R, FIELD.tileWidth, FIELD.tileHeight);
          } else {
            g = Paths.bit(i, m.value, 0, n);
            g.draw(i, T, R, FIELD.tileWidth, FIELD.tileHeight);
          }
        }
        if (e._bits[2][p]) {
          (T = e.x0 + f * FIELD.tileWidth),
            (R = e.y0 + S * FIELD.tileHeight),
            (m = e._bits[2][p]);
          if ("move" === m.action || "halt" === m.action) {
            (A = c.indexOf(m.id)),
              (C = t._bitList[A]),
              (L = m.findNextDir(e)),
              (D =
                C.i0 === f &&
                C.j0 === S &&
                L >= 0 &&
                !m.isGhost &&
                u < 3 &&
                "tutorial" != STATE.mode);
            if (D) {
              (b = 0), (O = 0);
              if (0 === L) b = -FIELD.tileWidth;
              else if (1 === L) O = -FIELD.tileHeight;
              else if (2 === L) b = FIELD.tileWidth;
              else if (3 === L) O = FIELD.tileHeight;
              (M = T + 0.15 * l * d * b), (v = R + 0.15 * l * d * O);
            } else
              (w = e.x0 + C.i0 * FIELD.tileWidth),
                (y = e.y0 + C.j0 * FIELD.tileHeight),
                (M = h * w + (1 - h) * T),
                (v = h * y + (1 - h) * R);
            g = Paths.bit(i, m.value, 0, n);
            g.draw(i, M, v, FIELD.tileWidth, FIELD.tileHeight);
          } else if ("transform" === m.action) {
            g = Paths.bit(i, m.value, d, n);
            g.draw(i, T, R, FIELD.tileWidth, FIELD.tileHeight);
          } else {
            g = Paths.bit(i, m.value, 0, n);
            g.draw(i, T, R, FIELD.tileWidth, FIELD.tileHeight);
          }
        }
        if (e._qubits[p]) {
          (T = e.x0 + f * FIELD.tileWidth),
            (R = e.y0 + S * FIELD.tileHeight),
            (N = e._qubits[p]);
          if (N.isHovered) {
            var F = 1 + 0.2 * Math.cos(8 * Math.PI * TIMER.qubitGlowRatio),
              k =
                ((g = Paths.qubitHalo(r, this.basisRot, !0, -1)),
                0.9 * (1 + 0.1 * Math.cos(8 * Math.PI * TIMER.qubitGlowRatio)));
            g.draw(
              r,
              T - ((k - 1) / 2) * FIELD.tileWidth,
              R - ((k - 1) / 2) * FIELD.tileHeight,
              k * FIELD.tileWidth,
              k * FIELD.tileHeight,
            );
          } else F = 1;
          var x = ((F - 1) / 2) * FIELD.tileWidth,
            B = ((F - 1) / 2) * FIELD.tileWidth;
          if ("move" === N.action || "halt" === N.action) {
            A = E.indexOf(N.id);
            var W = t._qubitList[A];
            (L = N.findNextDir(e)),
              (D =
                W.i0 === f &&
                W.j0 === S &&
                L >= 0 &&
                !N.isGhost &&
                u < 3 &&
                "tutorial" != STATE.mode);
            if (D) {
              (b = 0), (O = 0);
              if (0 === L) b = -FIELD.tileWidth;
              else if (1 === L) O = -FIELD.tileHeight;
              else if (2 === L) b = FIELD.tileWidth;
              else if (3 === L) O = FIELD.tileHeight;
              (M = T + 0.15 * l * d * b), (v = R + 0.15 * l * d * O);
            } else
              (w = e.x0 + W.i0 * FIELD.tileWidth),
                (y = e.y0 + W.j0 * FIELD.tileHeight),
                (M = h * w + (1 - h) * T),
                (v = h * y + (1 - h) * R);
            if (N.entGroup) var q = N.ent;
            else q = 0;
            if (W.entGroup) var H = W.ent;
            else H = 0;
            if (q || H) {
              var U = N.entGroup.id % ENTBLOBS._colors.length,
                _ = (2 * N.entGroup.id) % ENTBLOBS.numBlobs,
                G = (2 * N.entGroup.id + 1) % ENTBLOBS.numBlobs;
              ENTBLOBS.draw(i, _, U, M, v, 1, H * o + q * (1 - o)),
                ENTBLOBS.draw(i, G, U, M, v, -1, H * o + q * (1 - o));
            }
            (P = N.computeAlfs(TIMER.blinkRatio)),
              (g = Paths.newQubit(
                i,
                N.basisRot,
                0,
                n,
                0,
                N.arrow(P),
                N.ampsFinal,
                N.offsets,
                P,
                N.isGhost,
              ));
            g.draw(i, M - x, v - B, F * FIELD.tileWidth, F * FIELD.tileHeight);
          } else if ("disappear" === N.action);
          else if ("qDubCompare" === N.action) {
            if (o < 0.5) {
              (W = t.getQubit(N.i0, N.j0)), (q = N.entGroup ? N.ent : 0);
              if (N.entGroup) {
                (U = N.entGroup.id % ENTBLOBS._colors.length),
                  (_ = (2 * N.entGroup.id) % ENTBLOBS.numBlobs),
                  (G = (2 * N.entGroup.id + 1) % ENTBLOBS.numBlobs);
                ENTBLOBS.draw(i, _, U, T, R, 1, H * o + q * (1 - o)),
                  ENTBLOBS.draw(i, G, U, T, R, -1, H * o + q * (1 - o));
              }
              (P = N.computeAlfs(TIMER.blinkRatio)),
                (g = Paths.newQubit(
                  i,
                  N.basisRot,
                  l,
                  n,
                  0,
                  N.arrow(P),
                  N.ampsFinal,
                  N.offsets,
                  P,
                ));
              g.draw(
                i,
                T - x,
                R - B,
                F * FIELD.tileWidth,
                F * FIELD.tileHeight,
              );
            }
          } else if ("freeze" === N.action) {
            var V = 1 - l;
            (P = N.computeAlfs(TIMER.blinkRatio)),
              (g = Paths.newQubit(
                i,
                N.basisRot,
                0,
                n,
                0,
                P[1],
                N.ampsFinal,
                [0, N.ampsFinal[0] ** 2],
                P,
                N.isGhost,
                !0,
                V,
              ));
            g.draw(i, T - x, R - B, F * FIELD.tileWidth, F * FIELD.tileHeight);
          } else if ("controlled" === N.action) {
            W = t.getQubit(N.i0, N.j0);
            if (N.entGroup) q = N.ent;
            else q = 0;
            if (W.entGroup) H = W.ent;
            else H = 0;
            if (q || H)
              if (N.entGroup) {
                (U = N.entGroup.id % ENTBLOBS._colors.length),
                  (_ = (2 * N.entGroup.id) % ENTBLOBS.numBlobs),
                  (G = (2 * N.entGroup.id + 1) % ENTBLOBS.numBlobs);
                ENTBLOBS.draw(i, _, U, T, R, 1, H * o + q * (1 - o)),
                  ENTBLOBS.draw(i, G, U, T, R, -1, H * o + q * (1 - o));
              } else if (W.entGroup) {
                (U = W.entGroup.id % ENTBLOBS._colors.length),
                  (_ = (2 * W.entGroup.id) % ENTBLOBS.numBlobs),
                  (G = (2 * W.entGroup.id + 1) % ENTBLOBS.numBlobs);
                ENTBLOBS.draw(i, _, U, T, R, 1, H * o + q * (1 - o)),
                  ENTBLOBS.draw(i, G, U, T, R, -1, H * o + q * (1 - o));
              }
            if (o < 0.5)
              (P = N.computeAlfs(TIMER.blinkRatio)),
                (g = Paths.newQubit(
                  i,
                  N.basisRot,
                  0,
                  n,
                  0,
                  N.arrow(P),
                  N.ampsFinal,
                  N.offsets,
                  P,
                ));
            else
              (P = W.computeAlfs(TIMER.blinkRatio)),
                (g = Paths.newQubit(
                  i,
                  W.basisRot,
                  0,
                  n,
                  0,
                  W.arrow(P),
                  W.ampsFinal,
                  W.offsets,
                  P,
                ));
            g.draw(i, T - x, R - B, F * FIELD.tileWidth, F * FIELD.tileHeight);
          } else if ("flip" === N.action) {
            W = t.getQubit(N.i0, N.j0);
            if (N.entGroup) q = N.ent;
            else q = 0;
            if (W.entGroup) H = W.ent;
            else H = 0;
            if (q || H)
              if (N.entGroup) {
                (U = N.entGroup.id % ENTBLOBS._colors.length),
                  (_ = (2 * N.entGroup.id) % ENTBLOBS.numBlobs),
                  (G = (2 * N.entGroup.id + 1) % ENTBLOBS.numBlobs);
                ENTBLOBS.draw(i, _, U, T, R, 1, H * o + q * (1 - o)),
                  ENTBLOBS.draw(i, G, U, T, R, -1, H * o + q * (1 - o));
              } else if (W.entGroup) {
                (U = W.entGroup.id % ENTBLOBS._colors.length),
                  (_ = (2 * W.entGroup.id) % ENTBLOBS.numBlobs),
                  (G = (2 * W.entGroup.id + 1) % ENTBLOBS.numBlobs);
                ENTBLOBS.draw(i, _, U, T, R, 1, H * o + q * (1 - o)),
                  ENTBLOBS.draw(i, G, U, T, R, -1, H * o + q * (1 - o));
              }
            (A = E.indexOf(N.id)), (W = t._qubitList[A]);
            var Q = e.getGate(N.i0, N.j0, e.getState(N.i0, N.j0));
            if (o < 0.5)
              (P = N.computeAlfs(TIMER.blinkRatio)),
                (g = Paths.newQubit(
                  i,
                  N.basisRot,
                  0,
                  n,
                  { ratio: 1 - d, rot: Q.rot },
                  N.arrow(P),
                  N.ampsFinal,
                  N.offsets,
                  P,
                ));
            else
              (P = W.computeAlfs(TIMER.blinkRatio)),
                (g = Paths.newQubit(
                  i,
                  W.basisRot,
                  0,
                  n,
                  { ratio: 1 - d, rot: Q.rot },
                  W.arrow(P),
                  W.ampsFinal,
                  W.offsets,
                  P,
                ));
            g.draw(i, T - x, R - B, F * FIELD.tileWidth, F * FIELD.tileHeight);
          } else if ("rotate" === N.action) {
            W = t.getQubit(N.i0, N.j0);
            if (N.entGroup) q = N.ent;
            else q = 0;
            if (W.entGroup) H = W.ent;
            else H = 0;
            if (q || H)
              if (N.entGroup) {
                (U = N.entGroup.id % ENTBLOBS._colors.length),
                  (_ = (2 * N.entGroup.id) % ENTBLOBS.numBlobs),
                  (G = (2 * N.entGroup.id + 1) % ENTBLOBS.numBlobs);
                ENTBLOBS.draw(i, _, U, T, R, 1, H * o + q * (1 - o)),
                  ENTBLOBS.draw(i, G, U, T, R, -1, H * o + q * (1 - o));
              } else if (W.entGroup) {
                (U = W.entGroup.id % ENTBLOBS._colors.length),
                  (_ = (2 * W.entGroup.id) % ENTBLOBS.numBlobs),
                  (G = (2 * W.entGroup.id + 1) % ENTBLOBS.numBlobs);
                ENTBLOBS.draw(i, _, U, T, R, 1, H * o + q * (1 - o)),
                  ENTBLOBS.draw(i, G, U, T, R, -1, H * o + q * (1 - o));
              }
            var $ = e.checkControl(f, S, ["qControl"]);
            if (0 === o) {
              (P = N.computeAlfs(TIMER.blinkRatio)),
                (g = Paths.newQubit(
                  i,
                  N.basisRot,
                  0,
                  n,
                  0,
                  N.arrow(P),
                  N.ampsFinal,
                  N.offsets,
                  P,
                ));
              g.draw(
                i,
                T - x,
                R - B,
                F * FIELD.tileWidth,
                F * FIELD.tileHeight,
              );
            } else if (N.entGroup || $ >= 0) {
              var z = N.basisRot,
                j = W.basisRot;
              z - j > Math.PI && (j += 2 * Math.PI),
                j - z > Math.PI && (z += 2 * Math.PI);
              var Y = z + l * (j - z);
              if (o <= 0.5) {
                (P = N.computeAlfs(TIMER.blinkRatio)),
                  (g = Paths.newQubit(
                    i,
                    Y,
                    0,
                    n,
                    0,
                    N.arrow(P),
                    N.ampsFinal,
                    N.offsets,
                    P,
                  ));
                g.draw(
                  i,
                  T - x,
                  R - B,
                  F * FIELD.tileWidth,
                  F * FIELD.tileHeight,
                );
              } else {
                (P = W.computeAlfs(TIMER.blinkRatio)),
                  (g = Paths.newQubit(
                    i,
                    Y,
                    0,
                    n,
                    0,
                    W.arrow(P),
                    W.ampsFinal,
                    W.offsets,
                    P,
                  ));
                g.draw(
                  i,
                  T - x,
                  R - B,
                  F * FIELD.tileWidth,
                  F * FIELD.tileHeight,
                );
              }
            } else {
              if (N.lockedBasis) {
                (Q = e.getGate(N.i0, N.j0)), (z = N.basisRot), (j = z + Q.rot);
                z - j > Math.PI && (j += 2 * Math.PI);
              } else {
                (p = N.j0 * e.width + N.i0),
                  (Q = e.getGate(N.i0, N.j0, e.state[p]));
                if (Q.rot >= 0) {
                  z = N.basisRot;
                  if (Q.state > 0) j = W.basisRot;
                  else j = z + Q.rot;
                } else if (Q.rot < 0) {
                  z = N.basisRot;
                  if (Q.state > 0) j = W.basisRot;
                  else j = z + Q.rot;
                }
                z - j > Math.PI + 1e-5 && (j += 2 * Math.PI),
                  j - z > Math.PI + 1e-5 && (z += 2 * Math.PI);
              }
              var X = N.copy();
              X.applyRot(l * (j - z));
              (P = X.computeAlfs(TIMER.blinkRatio)),
                (g = Paths.newQubit(
                  i,
                  X.basisRot,
                  0,
                  n,
                  0,
                  P[1],
                  X.ampsFinal,
                  [0, X.ampsFinal[0] ** 2],
                  P,
                ));
              g.draw(
                i,
                T - x,
                R - B,
                F * FIELD.tileWidth,
                F * FIELD.tileHeight,
              );
            }
          } else if ("measure" === N.action)
            if (N.entGroup) {
              if (o < 0.5) {
                (U = N.entGroup.id % ENTBLOBS._colors.length),
                  (_ = (2 * N.entGroup.id) % ENTBLOBS.numBlobs),
                  (G = (2 * N.entGroup.id + 1) % ENTBLOBS.numBlobs);
                ENTBLOBS.draw(i, _, U, T, R, 1, N.ent),
                  ENTBLOBS.draw(i, G, U, T, R, -1, N.ent);
              }
              W = t.getQubit(N.i0, N.j0);
              if (o <= 0.5) {
                (P = N.computeAlfs(TIMER.blinkRatio)),
                  (g = Paths.newQubit(
                    i,
                    N.basisRot,
                    0,
                    n,
                    0,
                    N.arrow(P),
                    N.ampsFinal,
                    N.offsets,
                    P,
                  ));
                g.draw(
                  i,
                  T - x,
                  R - B,
                  F * FIELD.tileWidth,
                  F * FIELD.tileHeight,
                );
              } else {
                (P = W.computeAlfs(TIMER.blinkRatio)),
                  (g = Paths.newQubit(
                    i,
                    W.basisRot,
                    0,
                    n,
                    0,
                    W.arrow(P),
                    W.ampsFinal,
                    W.offsets,
                    P,
                  ));
                g.draw(
                  i,
                  T - x,
                  R - B,
                  F * FIELD.tileWidth,
                  F * FIELD.tileHeight,
                );
              }
            } else {
              (A = E.indexOf(N.id)), (W = t._qubitList[A]);
              if (o <= 0.5) {
                (P = N.computeAlfs(TIMER.blinkRatio)),
                  (g = Paths.newQubit(
                    i,
                    N.basisRot,
                    0,
                    n,
                    0,
                    P[1],
                    N.ampsFinal,
                    [0, N.ampsFinal[0] ** 2],
                    P,
                  ));
                g.draw(
                  i,
                  T - x,
                  R - B,
                  F * FIELD.tileWidth,
                  F * FIELD.tileHeight,
                );
              } else {
                (P = W.computeAlfs(TIMER.blinkRatio)),
                  (g = Paths.newQubit(
                    i,
                    W.basisRot,
                    0,
                    n,
                    0,
                    P[1],
                    W.ampsFinal,
                    [0, W.ampsFinal[0] ** 2],
                    P,
                  ));
                g.draw(
                  i,
                  T - x,
                  R - B,
                  F * FIELD.tileWidth,
                  F * FIELD.tileHeight,
                );
              }
            }
          else if ("delete" === N.action) {
            if (N.entGroup) {
              if (o < 0.5) {
                (U = N.entGroup.id % ENTBLOBS._colors.length),
                  (_ = (2 * N.entGroup.id) % ENTBLOBS.numBlobs),
                  (G = (2 * N.entGroup.id + 1) % ENTBLOBS.numBlobs);
                ENTBLOBS.draw(i, _, U, T, R, 1, (1 - o) * N.ent),
                  ENTBLOBS.draw(i, G, U, T, R, -1, (1 - o) * N.ent);
              }
              if (o <= 0.5) {
                (P = N.computeAlfs(TIMER.blinkRatio)),
                  (g = Paths.newQubit(
                    i,
                    N.basisRot,
                    0,
                    n,
                    0,
                    N.arrow(P),
                    N.ampsFinal,
                    N.offsets,
                    P,
                  ));
                g.draw(
                  i,
                  T - x,
                  R - B,
                  F * FIELD.tileWidth,
                  F * FIELD.tileHeight,
                );
              } else if ("tutorial" !== STATE.mode) {
                g = Paths.fireRing(i, l);
                g.draw(i, T, R, FIELD.tileWidth, FIELD.tileHeight);
              }
            } else if (o <= 0.5) {
              (P = N.computeAlfs(TIMER.blinkRatio)),
                (g = Paths.newQubit(
                  i,
                  N.basisRot,
                  d,
                  n,
                  0,
                  P[1],
                  N.ampsFinal,
                  [0, N.ampsFinal[0] ** 2],
                  P,
                ));
              g.draw(
                i,
                T - x,
                R - B,
                F * FIELD.tileWidth,
                F * FIELD.tileHeight,
              );
            } else if ("tutorial" !== STATE.mode) {
              g = Paths.fireRing(i, l);
              g.draw(i, T, R, FIELD.tileWidth, FIELD.tileHeight);
            }
          } else if ("wait" === N.action) {
            W = t.getQubit(N.i0, N.j0);
            if (N.entGroup) q = N.ent;
            else q = 0;
            if (W.entGroup) H = W.ent;
            else H = 0;
            if (q || H)
              if (N.entGroup) {
                (U = N.entGroup.id % ENTBLOBS._colors.length),
                  (_ = (2 * N.entGroup.id) % ENTBLOBS.numBlobs),
                  (G = (2 * N.entGroup.id + 1) % ENTBLOBS.numBlobs);
                ENTBLOBS.draw(i, _, U, T, R, 1, H * o + q * (1 - o)),
                  ENTBLOBS.draw(i, G, U, T, R, -1, H * o + q * (1 - o));
              } else if (W.entGroup) {
                (U = W.entGroup.id % ENTBLOBS._colors.length),
                  (_ = (2 * W.entGroup.id) % ENTBLOBS.numBlobs),
                  (G = (2 * W.entGroup.id + 1) % ENTBLOBS.numBlobs);
                ENTBLOBS.draw(i, _, U, T, R, 1, H * o + q * (1 - o)),
                  ENTBLOBS.draw(i, G, U, T, R, -1, H * o + q * (1 - o));
              }
            (P = N.computeAlfs(TIMER.blinkRatio)),
              (g = Paths.newQubit(
                i,
                N.basisRot,
                0,
                n,
                0,
                N.arrow(P),
                N.ampsFinal,
                N.offsets,
                P,
              ));
            g.draw(i, T - x, R - B, F * FIELD.tileWidth, F * FIELD.tileHeight);
          } else {
            (P = N.computeAlfs(TIMER.blinkRatio)),
              (g = Paths.newQubit(
                i,
                N.basisRot,
                0,
                n,
                0,
                P[1],
                N.ampsFinal,
                [0, N.ampsFinal[0] ** 2],
                P,
              ));
            g.draw(i, T - x, R - B, F * FIELD.tileWidth, F * FIELD.tileHeight);
          }
        }
      }
  }
  static resolveSwitch(e, t, i, a) {
    if ("cCombine" === t.type || "qCombine" === t.type) {
      a.orient = 0;
      var r = (t.orient * Math.PI) / 2,
        s = (i.orient * Math.PI) / 2;
      return (
        r > Math.PI && (r -= 2 * Math.PI),
        s > Math.PI && (s -= 2 * Math.PI),
        r < -Math.PI && (r += 2 * Math.PI),
        s < -Math.PI && (s += 2 * Math.PI),
        s - r > Math.PI
          ? (s -= 2 * Math.PI)
          : r - s > Math.PI && (s += 2 * Math.PI),
        (a.rot = (1 - TIMER.trigRatio) * r + TIMER.trigRatio * s),
        a
      );
    }
    if ("rotate" === t.type || "measure" === t.type || "upgrade" === t.type) {
      (r = t.rot), (s = i.rot);
      return (
        r > Math.PI && (r -= 2 * Math.PI),
        s > Math.PI && (s -= 2 * Math.PI),
        r < 0.01 - Math.PI && (r = Math.PI),
        s < 0.01 - Math.PI && (s = Math.PI),
        (a.rot = TIMER.trigRatio * s + (1 - TIMER.trigRatio) * r),
        a
      );
    }
    if ("qFlip" === t.type) {
      if (1 === t.state)
        (a.rot = i.rot),
          (a.state =
            TIMER.trigRatio * i.state + (1 - TIMER.trigRatio) * t.state);
      else if (1 === i.state)
        (a.rot = t.rot),
          (a.state =
            TIMER.trigRatio * i.state + (1 - TIMER.trigRatio) * t.state);
      else {
        (r = t.rot), (s = i.rot);
        r > Math.PI && (r -= 2 * Math.PI),
          s > Math.PI && (s -= 2 * Math.PI),
          (a.rot = TIMER.trigRatio * s + (1 - TIMER.trigRatio) * r);
      }
      return a;
    }
    return "cInvert" === t.type
      ? ((a.rot = (1 - TIMER.trigRatio) * t.rot + TIMER.trigRatio * i.rot), a)
      : (TIMER.ratio < 0.5 ? (a.rot = t.rot) : (a.rot = i.rot), a);
  }
  static resolveDelay(e, t, i, a) {
    a = t.getGate(i.i0, i.j0);
    var r = 0,
      s = 0,
      o = 1;
    return (
      "free" === i.action
        ? "free" === a.action ||
          ("transform" === a.action &&
            ((r = TIMER.trigRatio), (o = 1 - TIMER.trigRatio)))
        : "transform" === i.action
          ? ((r = 1), (o = 0))
          : "reset" === i.action
            ? "free" === a.action
              ? ((r = 1 - TIMER.trigRatio), (o = TIMER.trigRatio))
              : "transform" === a.action &&
                ((r = 1 - TIMER.trigRatioDub),
                (s = 1),
                (o = TIMER.trigRatioDub))
            : ((r = 1), (o = 0)),
      { snapRot: r, snapExtend: o, orient: s }
    );
  }
  static resolveSync(e, t, i) {
    var a = i.i0,
      r = i.j0,
      s = a,
      o = r;
    0 === i.orient
      ? (o += 1)
      : 1 === i.orient
        ? (s -= 1)
        : 2 === i.orient
          ? (o -= 1)
          : 3 === i.orient && (s += 1);
    var n = t.getGate(a, r),
      l = e.getGate(s, o),
      h = t.getGate(s, o),
      d = 0;
    return (
      "pretransform" === i.action
        ? "pretransform" === n.action
          ? (d = 0)
          : "reset" === n.action && (d = TIMER.trigRatioDub)
        : "free" === i.action
          ? "pretransform" === l.action
            ? "pretransform" === h.action
              ? (d = 0)
              : "reset" === h.action && (d = TIMER.trigRatioDub)
            : "free" === l.action &&
              (d =
                "pretransform" === n.action || "pretransform" === h.action
                  ? 0
                  : "reset" === n.action || "reset" === h.action
                    ? TIMER.trigRatioDub
                    : 0)
          : "reset" === i.action &&
            (d =
              "reset" === n.action
                ? TIMER.trigRatioDub
                : ("pretransform" === n.action || h.action, 0)),
      d
    );
  }
  static resolveSyncSnappers(e, t, i) {
    var a = i.i0,
      r = i.j0,
      s = t.getGate(a, r),
      o = 0,
      n = 1;
    return (
      "free" === i.action
        ? "free" === s.action ||
          ("pretransform" === s.action
            ? ((o = TIMER.trigRatio), (n = 1 - TIMER.trigRatio))
            : "reset" === s.action &&
              ((o = TIMER.trigRatioDub / 2), (n = 1 - TIMER.trigRatioDub / 2)))
        : "pretransform" === i.action
          ? "reset" === s.action
            ? ((o = 1 - TIMER.trigRatio), (n = TIMER.trigRatio))
            : ((o = 1), (n = 0))
          : "reset" === i.action &&
            ("free" === s.action
              ? ((o = 0), (n = 1))
              : "pretransform" === s.action
                ? ((o = TIMER.trigRatio), (n = 1 - TIMER.trigRatio))
                : "reset" === s.action &&
                  ((o = TIMER.trigRatioDub / 2),
                  (n = 1 - TIMER.trigRatioDub / 2))),
      { snapRot: o, snapExtend: n }
    );
  }
  static controlTarget(e, t) {
    for (
      var i = ["DarkGoldenRod", "GoldenRod"],
        a = [
          flashColor("DarkGoldenRod", TIMER.trigRatioDub),
          flashColor("GoldenRod", TIMER.trigRatioDub),
        ],
        r = 0;
      r < e.gateList.length;
      r++
    ) {
      var s = e.gateList[r];
      if ("switch" === s.type || ("qControl" === s.type && s.state < 2)) {
        new Tile("gate", 32, 32);
        var o = s.i0,
          n = s.j0;
        0 === s.orient
          ? (n += 1)
          : 1 === s.orient
            ? (o -= 1)
            : 2 === s.orient
              ? (n -= 1)
              : 3 === s.orient && (o += 1);
        var l = e.x0 + o * FIELD.tileWidth,
          h = e.y0 + n * FIELD.tileHeight;
        if ("transform" === s.action || "entangle" === s.action) {
          var d = PathsX.targetRing([], a);
          RenderLoops.drawSimple(t, d, l, h, FIELD.tileWidth, FIELD.tileHeight);
        } else {
          d = PathsX.targetRing([], i);
          RenderLoops.drawSimple(t, d, l, h, FIELD.tileWidth, FIELD.tileHeight);
        }
      }
    }
  }
}
