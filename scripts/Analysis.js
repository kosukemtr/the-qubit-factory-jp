class Analysis {
  static updateSlide(e) {
    if (
      (ANALYSIS.isOpening
        ? ((ANALYSIS.openAmount = Math.min(
            1,
            ANALYSIS.openAmount + 1 * ANALYSIS.openSpeed,
          )),
          (ANALYSIS.openTrig = Math.min(
            (0.5 - 0.505 * Math.cos(Math.PI * ANALYSIS.openAmount)) ** 2,
            1,
          )))
        : ((ANALYSIS.openAmount = Math.max(
            0,
            ANALYSIS.openAmount - 1 * ANALYSIS.openSpeed,
          )),
          (ANALYSIS.openTrig = Math.max(
            (0.5 - 0.505 * Math.cos(Math.PI * ANALYSIS.openAmount)) ** 2,
            0,
          ))),
      0 === ANALYSIS.openTrig && (ANALYSIS.last = 0),
      "qubit" === STATE.grab.type || "qubitcontrol" === STATE.grab.type)
    ) {
      STATE.grab.k0.entGroup
        ? (ANALYSIS.bonusTiles = Math.max(
            0,
            STATE.grab.k0.entGroup.numQubits - 4,
          ))
        : (ANALYSIS.bonusTiles = 0),
        STATE.grab.k0.entGroup && STATE.grab.k0.entGroup.numQubits > 4
          ? ANALYSIS.bonusOpen < ANALYSIS.bonusTiles
            ? (ANALYSIS.bonusOpen = Math.min(
                ANALYSIS.bonusTiles,
                ANALYSIS.bonusOpen + 4 * ANALYSIS.openSpeed,
              ))
            : (ANALYSIS.bonusOpen = Math.max(
                ANALYSIS.bonusTiles,
                ANALYSIS.bonusOpen - 4 * ANALYSIS.openSpeed,
              ))
          : (ANALYSIS.bonusOpen = Math.max(
              0,
              ANALYSIS.bonusOpen - 4 * ANALYSIS.openSpeed,
            )),
        (ANALYSIS.isOpening = !0),
        (ANALYSIS.last = STATE.grab.k0);
      var t =
          ANALYSIS.openTrig * FIELD.menuWidth +
          FIELD.analysisLeft +
          ANALYSIS.bonusOpen * FIELD.tileWidth,
        i =
          0.5 * FIELD.tileWidth +
          t +
          -FIELD.analysisLeft -
          FIELD.menuWidth -
          ANALYSIS.bonusTiles * FIELD.tileWidth;
      ANALYSIS.openTrig > 0 && Analysis.draw(e, STATE.grab.k0, i),
        (SVG.analysis.svg.style.width = t - FIELD.analysisLeft + "px"),
        SVG.analysis.svg.setAttribute("width", t - FIELD.analysisLeft + "px"),
        (SVG.tiledL.svg.style.width =
          OVERLAY.margin + t - FIELD.analysisLeft + "px"),
        SVG.tiledL.svg.setAttribute(
          "width",
          OVERLAY.margin + t - FIELD.analysisLeft + "px",
        ),
        (SVG.tiledM.svg.style.width =
          OVERLAY.margin + t - FIELD.analysisLeft + "px"),
        SVG.tiledM.svg.setAttribute(
          "width",
          OVERLAY.margin + t - FIELD.analysisLeft + "px",
        ),
        (CANV.analysisOverlay.canv.style.left =
          t -
          FIELD.analysisWidth -
          (FIELD.maxBonusTiles + 0.5) * FIELD.tileWidth +
          "px");
    } else {
      (ANALYSIS.isOpening = !1),
        (ANALYSIS.bonusOpen = Math.max(
          0,
          ANALYSIS.bonusOpen - 4 * ANALYSIS.openSpeed,
        ));
      (t =
        ANALYSIS.openTrig * FIELD.menuWidth +
        FIELD.analysisLeft +
        ANALYSIS.bonusOpen * FIELD.tileWidth),
        (i =
          0.5 * FIELD.tileWidth +
          t +
          -FIELD.analysisLeft -
          FIELD.menuWidth -
          ANALYSIS.bonusTiles * FIELD.tileWidth);
      ANALYSIS.last
        ? ANALYSIS.openTrig > 0 && Analysis.draw(e, ANALYSIS.last, i)
        : CANV.analysis.clear();
      t =
        ANALYSIS.openTrig * FIELD.menuWidth +
        FIELD.analysisLeft +
        ANALYSIS.bonusOpen * FIELD.tileWidth;
      (SVG.analysis.svg.style.width = t - FIELD.analysisLeft + "px"),
        SVG.analysis.svg.setAttribute("width", t - FIELD.analysisLeft + "px"),
        (SVG.tiledL.svg.style.width =
          OVERLAY.margin + t - FIELD.analysisLeft + "px"),
        SVG.tiledL.svg.setAttribute(
          "width",
          OVERLAY.margin + t - FIELD.analysisLeft + "px",
        ),
        (SVG.tiledM.svg.style.width =
          OVERLAY.margin + t - FIELD.analysisLeft + "px"),
        SVG.tiledM.svg.setAttribute(
          "width",
          OVERLAY.margin + t - FIELD.analysisLeft + "px",
        ),
        (CANV.analysisOverlay.canv.style.left =
          t -
          FIELD.analysisWidth -
          (FIELD.maxBonusTiles + 0.5) * FIELD.tileWidth +
          "px");
    }
  }
  static draw(e, t, i, a = -1, r = !0, s = 0, o = 0, n = !0) {
    if (s) var l = [...s];
    else l = ANALYSIS.highlight;
    if (a < 0) var h = ANALYSIS.prob;
    else h = a;
    var d = e.ctx;
    n && e.clear();
    var u = ANALYSIS.xMid,
      c = ANALYSIS.xPad + i,
      I = ANALYSIS.yPad + o,
      E = ANALYSIS.xGap,
      S = ANALYSIS.basisSpace,
      f = ANALYSIS.basisSize,
      p = ANALYSIS.barSize,
      T = ANALYSIS.barPad;
    if (t.entGroup)
      var R = 2 ** Math.min(t.entGroup.numQubits, 4),
        m = t.entGroup.numQubits;
    else (R = 2), (m = 1);
    FIELD.tileWidth;
    var g = 0,
      A = 0;
    if ("analysisicon" === STATE.pressed.type) {
      var C = TIMER.totalTime - STATE.pressed.i0;
      C > TIMER.iconMax &&
        (STATE.pressed = { type: "none", i0: 0, j0: 0, k0: 0 });
    }
    var L = -1;
    if ("analysisicon" === STATE.pressed.type) {
      var D =
        0.5 *
        (1 - Math.cos(2 * Math.PI * (C / TIMER.iconMax))) *
        (FIELD.tileWidth / 48);
      (g = (3 * D) / 4), (A = (7 * D) / 4);
      L = STATE.pressed.k0;
    }
    if (t.entGroup) {
      for (var b = t.entGroup, O = 0; O < m; O++) {
        var M = b.qubitList[O],
          v = M.computeAlfs(TIMER.blinkRatio),
          w = b.id % ENTBLOBS._colors.length,
          y = (2 * b.id) % ENTBLOBS.numBlobs,
          N = (2 * b.id + 1) % ENTBLOBS.numBlobs;
        ENTBLOBS.draw(d, y, w, c + E + O * FIELD.tileWidth, I, 1, M.ent),
          ENTBLOBS.draw(d, N, w, c + E + O * FIELD.tileWidth, I, -1, M.ent);
        var P = c + E + O * FIELD.tileWidth,
          F = I;
        if (M.isHovered) {
          var k = 1 + 0.2 * Math.cos(8 * Math.PI * TIMER.qubitGlowRatio),
            x = ((k - 1) / 2) * FIELD.tileWidth,
            B = ((k - 1) / 2) * FIELD.tileWidth,
            W = Paths.qubitHalo(d, M.basisRot, !0, -1),
            q = 0.9 * (1 + 0.1 * Math.cos(8 * Math.PI * TIMER.qubitGlowRatio));
          W.draw(
            d,
            P - ((q - 1) / 2) * FIELD.tileWidth,
            F - ((q - 1) / 2) * FIELD.tileHeight,
            q * FIELD.tileWidth,
            q * FIELD.tileHeight,
          );
          W = Paths.newQubit(
            d,
            M.basisRot,
            0,
            TIMER.glareRatio,
            0,
            M.arrow(v),
            M.ampsFinal,
            M.offsets,
            v,
            M.isGhost,
          );
          W.draw(d, P - x, F - B, k * FIELD.tileWidth, k * FIELD.tileHeight);
        } else {
          W = Paths.newQubit(
            d,
            M.basisRot,
            0,
            TIMER.glareRatio,
            0,
            M.arrow(v),
            M.ampsFinal,
            M.offsets,
            v,
            M.isGhost,
          );
          W.draw(d, P, I, FIELD.tileWidth, FIELD.tileHeight);
        }
        if ("qubitbasis" !== STATE.state) {
          W = PathsI.icon(d, "tagIcon", { counter: M.entInd + 1 });
          W.draw(
            d,
            c + E + O * FIELD.tileWidth,
            I,
            FIELD.tileWidth / 3,
            FIELD.tileHeight / 3,
          );
        }
        var H = !1;
        "analysishighlight" === STATE.under.type &&
          STATE.under.k0 === O &&
          (H = !0);
        (W = PathsI.highlightIcon(d, H, l[O])),
          (P =
            c +
            E +
            O * FIELD.tileWidth +
            (FIELD.tileWidth - f) / 2 +
            FIELD.iconWidth / 2),
          (F =
            I +
            1.5 * S +
            FIELD.tileHeight +
            (S - f) / 2 -
            FIELD.iconHeight / 2);
        O === L
          ? W.draw(d, P + g, F + A, FIELD.iconWidth, FIELD.iconHeight)
          : W.draw(d, P, F, FIELD.iconWidth, FIELD.iconHeight);
      }
      if (m > 4) {
        var U = b.ampsFinal.map((e) => Math.abs(e)),
          _ = [...Array(2 ** m).keys()];
        _.sort(function (e, t) {
          return U[e] > U[t] ? -1 : U[e] < U[t] ? 1 : 0;
        });
      } else _ = [...Array(2 ** m).keys()];
      d.save(),
        d.beginPath(),
        (d.strokeStyle = "#333"),
        d.setLineDash([5, 5]),
        (d.lineWidth = 1);
      for (var G = 0; G < R + 1; G++) {
        F = Math.round(I + (G + 2) * S + FIELD.tileHeight) + 0.5;
        d.moveTo(c, F), d.lineTo(c + m * FIELD.tileWidth, F);
      }
      d.stroke(),
        d.restore(),
        d.save(),
        d.beginPath(),
        (d.strokeStyle = "#333"),
        d.setLineDash([4, 2, 2, 2]),
        (d.lineWidth = 1);
      for (G = 0; G < R + 1; G++) {
        F = Math.round(I + (G + 2) * S + FIELD.tileHeight) + 0.5;
        d.moveTo(Math.round(c + u + m * FIELD.tileWidth) + 0.5, F),
          d.lineTo(Math.round(c + u + m * FIELD.tileWidth + p) + 0.5, F);
      }
      d.stroke(), d.restore(), d.save(), d.beginPath(), d.setLineDash([]);
      for (G = 0; G < R; G++) {
        F = Math.round(I + (G + 2) * S + T + FIELD.tileHeight);
        var V = Math.round(I + (G + 3) * S - T + FIELD.tileHeight),
          Q =
            ((P = Math.round(c + u + m * FIELD.tileWidth) + 0.5),
            t.ampsFinal[G]);
        (d.fillStyle = Q >= 0 ? "darkgreen" : "#913191"),
          m > 4
            ? d.fillRect(P, F, p * Math.abs(t.ampsFinal[_[G]]), V - F)
            : d.fillRect(P, F, p * Math.abs(t.ampsFinal[G]), V - F);
      }
      d.restore(),
        d.save(),
        (d.textBaseline = "bottom"),
        (d.textAlign = "left"),
        (d.font = FIELD.tileWidth / 3 + "px 'Courier New', 'Noto Sans Mono CJK JP'"),
        (d.fillStyle = "black"),
        d.fillText(
          "振幅",
          Math.round(c + u + m * FIELD.tileWidth),
          Math.round(I + FIELD.tileHeight + S),
        ),
        d.restore(),
        d.save(),
        d.beginPath(),
        d.setLineDash([]),
        (d.textBaseline = "bottom"),
        (d.textAlign = "center"),
        (d.font = FIELD.tileWidth / 3 + "px Verdana, 'Noto Sans JP'"),
        (d.fillStyle = "black");
      (F = Math.round(I + 1.5 * S + 0.75 * T + FIELD.tileHeight) + 0.5),
        (P = Math.round(c + u + m * FIELD.tileWidth) + 0.5);
      d.fillText("0", P, F),
        d.fillText("½", P + p / 2, F),
        d.fillText("1", P + p, F),
        d.restore(),
        d.save(),
        (d.strokeStyle = "#666"),
        (d.lineWidth = 2);
      for (P = c + u + m * FIELD.tileWidth, G = 0; G < R + 1; G++) {
        F = FIELD.tileHeight + I + (G + 2) * S;
        Analysis.drawAmpLines(d, P, F, T, p, S);
      }
      d.restore(), d.save();
      for (G = 0; G < 2 ** Math.min(m, 4); G++) {
        var $ = !1;
        for (O = 0; O < m; O++)
          if (l[O] && b.enums[O][_[G]] !== l[O] - 1) $ = !0;
        if ($) {
          for (O = 0; O < m; O++) {
            W = Paths.nakedQubit(
              d,
              b.qubitList[O].basisRot,
              b.enums[O][_[G]],
              !1,
            );
            W.draw(
              d,
              c + E + O * FIELD.tileWidth + (FIELD.tileWidth - f) / 2,
              I + (G + 2) * S + FIELD.tileHeight + (S - f) / 2,
              f,
              f,
            );
          }
          d.beginPath(),
            (d.fillStyle = "black"),
            (d.globalAlpha = 0.85),
            d.fillRect(
              c + E,
              I + (G + 2) * S + FIELD.tileHeight,
              m * FIELD.tileWidth + u + p + 1,
              S + 1,
            ),
            d.closePath();
        } else
          for (O = 0; O < m; O++) {
            var z = !1;
            l[O] > 0 && (z = !0);
            W = Paths.nakedQubit(
              d,
              b.qubitList[O].basisRot,
              b.enums[O][_[G]],
              z,
            );
            W.draw(
              d,
              c + E + O * FIELD.tileWidth + (FIELD.tileWidth - f) / 2,
              I + (G + 2) * S + FIELD.tileHeight + (S - f) / 2,
              f,
              f,
            );
          }
      }
      if ((d.restore(), r)) {
        d.save();
        for (G = 0; G < m; G++) {
          var j = b.qubitList[G].ent;
          W = Paths.entMass(d, j, -Math.PI / 4);
          W.draw(
            d,
            c + E + G * FIELD.tileWidth,
            I + FIELD.tileHeight + (2.5 + R) * S,
            FIELD.tileWidth,
            FIELD.tileHeight,
          );
        }
        (d.textBaseline = "middle"),
          (d.textAlign = "left"),
          (d.font = FIELD.tileWidth / 3 + "px 'Courier New', 'Noto Sans Mono CJK JP'"),
          (d.fillStyle = "black"),
            d.fillText(
              "量子もつれ",
            Math.round(c + u + m * FIELD.tileWidth),
            Math.round(I + 1.5 * FIELD.tileHeight + (2.5 + R) * S),
          ),
          (d.textAlign = "right"),
          d.fillText(
            "<= ",
            Math.round(c + u + m * FIELD.tileWidth),
            Math.round(I + 1.5 * FIELD.tileHeight + (2.5 + R) * S),
          ),
          d.restore();
      }
      if (r) {
        d.save();
        F = ANALYSIS.yMeasure + (R + 2) * S;
        var Y = -1;
        "analysisgate" === STATE.under.type && (Y = STATE.under.k0);
        for (G = 0; G < m; G++) {
          P = c + E + G * FIELD.tileWidth + FIELD.tileWidth / 2;
          if (G === Y)
            var X = 0.4,
              Z = GRADS.glow;
          else (X = 0), (Z = GRADS.gates);
          if (G === t.entInd) {
            var J = PathsG.make(d, {
              type: "measure",
              orient: -1,
              rot: t.measureRot,
              state: 0,
              remaining: -1,
              counter: 0,
              isControlled: !1,
              basecol: Z,
              counterMax: -1,
            });
            J.draw(
              d,
              P - FIELD.tileWidth / 2,
              F - FIELD.tileHeight / 2,
              FIELD.tileWidth,
              FIELD.tileHeight,
            ),
              Halo.drawReduced(d, P, F, t.measureRot);
          } else {
            W = Paths.sphere(d, X);
            W.draw(
              d,
              P - FIELD.tileWidth / 2,
              F - FIELD.tileHeight / 2,
              FIELD.tileWidth,
              FIELD.tileHeight,
            );
          }
        }
        d.restore();
      }
      if (r) {
        d.save(),
          (d.textBaseline = "middle"),
          (d.textAlign = "left"),
          (d.font = FIELD.tileWidth / 3 + "px 'Courier New', 'Noto Sans Mono CJK JP'"),
          (d.fillStyle = "black"),
            d.fillText(
              "測定確率",
            Math.round(c + u + m * FIELD.tileWidth),
            Math.round(F - 1 * S),
          ),
          d.restore(),
          d.save(),
          d.beginPath(),
          d.setLineDash([]),
          (d.textBaseline = "middle"),
          (d.textAlign = "left"),
          (d.font = FIELD.tileWidth / 3 + "px Verdana, 'Noto Sans JP'"),
          (d.fillStyle = "black");
        P = Math.round(c + u + m * FIELD.tileWidth);
        var K = d.measureText("(0) ↦ ").width;
        d.fillText("(0) ↦", P - FIELD.tileWidth / 12, F + 0 * S),
          d.fillText("(1) ↦", P - FIELD.tileWidth / 12, F + 1 * S),
          (d.font = (4 * FIELD.tileWidth) / 12 + "px Verdana, 'Noto Sans JP'"),
          d.fillText(
            "p=" + String(Analysis.normFloat(h)),
            P - FIELD.tileWidth / 12 + K,
            F + 0 * S,
          ),
          d.fillText(
            "p=" + String(Analysis.normFloat(1 - h)),
            P - FIELD.tileWidth / 12 + K,
            F + 1 * S,
          ),
          d.restore();
      }
      d.save(), d.beginPath(), d.setLineDash([]);
      for (O = 0; O < m; O++) {
        M = b.qubitList[O];
        t.id === M.id &&
          QubitHalo.ring(
            d,
            c + E + (O + 0.5) * FIELD.tileWidth,
            I + 0.5 * FIELD.tileHeight,
            M.basisRot,
          );
      }
      d.restore();
    } else {
      (v = t.computeAlfs(TIMER.blinkRatio)),
        (W = Paths.newQubit(
          d,
          t.basisRot,
          0,
          TIMER.glareRatio,
          0,
          t.arrow(v),
          t.ampsFinal,
          t.offsets,
          v,
          t.isGhost,
        ));
      W.draw(d, c + E, I, FIELD.tileWidth, FIELD.tileHeight);
      H = !1;
      "analysishighlight" === STATE.under.type && (H = !0);
      (W = PathsI.highlightIcon(d, H, ANALYSIS.highlight[0])),
        (P = c + E + (FIELD.tileWidth - f) / 2 + FIELD.iconWidth / 2),
        (F =
          I + 1.5 * S + FIELD.tileHeight + (S - f) / 2 - FIELD.iconHeight / 2);
      0 === L
        ? W.draw(d, P + g, F + A, FIELD.iconWidth, FIELD.iconHeight)
        : W.draw(d, P, F, FIELD.iconWidth, FIELD.iconHeight);
      for (G = 0; G < 2; G++) {
        W = Paths.nakedQubit(d, t.basisRot, G);
        W.draw(
          d,
          c + E + (FIELD.tileWidth - f) / 2,
          I + (G + 2) * S + FIELD.tileHeight + (S - f) / 2,
          f,
          f,
        );
      }
      d.save(),
        d.beginPath(),
        (d.strokeStyle = "#333"),
        d.setLineDash([5, 5]),
        (d.lineWidth = 1);
      for (G = 0; G < 3; G++) {
        F = Math.round(I + (G + 2) * S + FIELD.tileHeight) + 0.5;
        d.moveTo(c, F), d.lineTo(c + FIELD.tileWidth, F), d.stroke();
      }
      d.restore(),
        d.save(),
        d.beginPath(),
        (d.strokeStyle = "#333"),
        d.setLineDash([4, 2, 2, 2]),
        (d.lineWidth = 1);
      for (G = 0; G < 3; G++) {
        F = Math.round(I + (G + 2) * S + FIELD.tileHeight) + 0.5;
        d.moveTo(c + u + FIELD.tileWidth, F),
          d.lineTo(c + u + FIELD.tileWidth + p, F),
          d.stroke();
      }
      d.restore(), d.save(), d.beginPath(), d.setLineDash([]);
      for (G = 0; G < 2; G++) {
        (F = Math.round(I + (G + 2) * S + T + FIELD.tileHeight)),
          (V = Math.round(I + (G + 3) * S - T + FIELD.tileHeight)),
          (P = c + u + FIELD.tileWidth),
          (Q = t.ampsFinal[G]);
        (d.fillStyle = Q >= 0 ? "darkgreen" : "#913191"),
          d.fillRect(P, F, p * Math.abs(t.ampsFinal[G]), V - F);
      }
      d.restore(),
        d.save(),
        (d.textBaseline = "bottom"),
        (d.textAlign = "left"),
        (d.font = FIELD.tileWidth / 3 + "px 'Courier New', 'Noto Sans Mono CJK JP'"),
        (d.fillStyle = "black"),
        d.fillText(
          "振幅",
          Math.round(c + u + FIELD.tileWidth),
          Math.round(FIELD.tileHeight + I + S),
        ),
        d.restore(),
        d.save(),
        d.beginPath(),
        d.setLineDash([]),
        (d.textBaseline = "bottom"),
        (d.textAlign = "center"),
        (d.font = FIELD.tileWidth / 3 + "px Verdana, 'Noto Sans JP'"),
        (d.fillStyle = "black");
      (F = Math.round(FIELD.tileHeight + I + 1.5 * S + 0.75 * T) + 0.5),
        (P = Math.round(c + u + FIELD.tileWidth));
      d.fillText("0", P, F),
        d.fillText("½", P + p / 2, F),
        d.fillText("1", P + p, F),
        (d.strokeStyle = "#666"),
        (d.lineWidth = 2);
      for (G = 0; G < 3; G++) {
        (F = FIELD.tileHeight + I + (G + 2) * S),
          (P = Math.round(c + u + FIELD.tileWidth));
        Analysis.drawAmpLines(d, P, F, T, p, S);
      }
      d.restore(), d.save();
      var ee = [[0, 1]];
      for (G = 0; G < 2 ** Math.min(m, 4); G++) {
        for ($ = !1, O = 0; O < m; O++)
          if (ANALYSIS.highlight[O] && ee[O][G] !== ANALYSIS.highlight[O] - 1)
            $ = !0;
        if ($) {
          for (O = 0; O < m; O++) {
            W = Paths.nakedQubit(d, t.basisRot, ee[O][G], !1);
            W.draw(
              d,
              c + E + O * FIELD.tileWidth + (FIELD.tileWidth - f) / 2,
              I + (G + 2) * S + FIELD.tileHeight + (S - f) / 2,
              f,
              f,
            );
          }
          d.beginPath(),
            (d.fillStyle = "black"),
            (d.globalAlpha = 0.85),
            d.fillRect(
              c + E,
              I + (G + 2) * S + FIELD.tileHeight,
              m * FIELD.tileWidth + u + p + 1,
              S + 1,
            ),
            d.closePath();
        } else
          for (O = 0; O < m; O++) {
            z = !1;
            l[O] > 0 && (z = !0);
            W = Paths.nakedQubit(d, t.basisRot, ee[O][G], z);
            W.draw(
              d,
              c + E + O * FIELD.tileWidth + (FIELD.tileWidth - f) / 2,
              I + (G + 2) * S + FIELD.tileHeight + (S - f) / 2,
              f,
              f,
            );
          }
      }
      d.restore(), d.save();
      (j = t.ent), (W = Paths.entMass(d, j, -Math.PI / 4));
      W.draw(
        d,
        c + E,
        I + FIELD.tileHeight + 4.5 * S,
        FIELD.tileWidth,
        FIELD.tileHeight,
      ),
        (d.textBaseline = "middle"),
        (d.textAlign = "left"),
        (d.font = FIELD.tileWidth / 3 + "px 'Courier New', 'Noto Sans Mono CJK JP'"),
        (d.fillStyle = "black"),
        d.fillText(
          "量子もつれ",
          Math.round(c + u + FIELD.tileWidth),
          Math.round(I + 1.5 * FIELD.tileHeight + 4.5 * S),
        ),
        (d.textAlign = "right"),
        d.fillText(
          "<= ",
          Math.round(c + u + FIELD.tileWidth),
          Math.round(I + 1.5 * FIELD.tileHeight + 4.5 * S),
        ),
        d.restore(),
        d.save();
      (F = ANALYSIS.yMeasure + 4 * S),
        (P = c + E + FIELD.tileWidth / 2),
        (J = PathsG.make(d, {
          type: "measure",
          orient: -1,
          rot: t.measureRot,
          state: 0,
          remaining: -1,
          counter: 0,
          isControlled: !1,
          basecol: GRADS.gates,
          counterMax: -1,
        }));
      J.draw(
        d,
        P - FIELD.tileWidth / 2,
        F - FIELD.tileHeight / 2,
        FIELD.tileWidth,
        FIELD.tileHeight,
      ),
        Halo.drawReduced(d, P, F, STATE.grab.k0.measureRot),
        d.restore(),
        d.save(),
        d.beginPath(),
        d.setLineDash([]),
        (d.textBaseline = "middle"),
        (d.textAlign = "left"),
        (d.font = FIELD.tileWidth / 3 + "px 'Courier New', 'Noto Sans Mono CJK JP'"),
        (d.fillStyle = "black"),
        d.fillText(
          "測定確率",
          Math.round(c + u + FIELD.tileWidth),
          Math.round(F - 1 * S),
        );
      P = Math.round(c + u + FIELD.tileWidth);
      d.font = (4 * FIELD.tileWidth) / 12 + "px Verdana, 'Noto Sans JP'";
      K = d.measureText("(0) ↦ ").width;
      d.fillText("(0) ↦", P - FIELD.tileWidth / 12, F + 0 * S),
        d.fillText("(1) ↦", P - FIELD.tileWidth / 12, F + 1 * S),
        d.fillText(
          "p=" + String(Analysis.normFloat(h)),
          P - FIELD.tileWidth / 12 + K,
          F + 0 * S,
        ),
        d.fillText(
          "p=" + String(Analysis.normFloat(1 - h)),
          P - FIELD.tileWidth / 12 + K,
          F + 1 * S,
        ),
        d.restore(),
        d.save(),
        d.setLineDash([]),
        QubitHalo.ring(
          d,
          c + E + 0.5 * FIELD.tileWidth,
          I + 0.5 * FIELD.tileHeight,
          t.basisRot,
        ),
        d.restore();
    }
  }
  static drawAmpLines(e, t, i, a, r, s) {
    e.save(),
      (e.strokeStyle = "#333"),
      e.setLineDash([]),
      (e.lineWidth = 1),
      e.beginPath();
    var o = Math.round(i + 0.75 * a - 0.5 * s) + 0.5,
      n = Math.round(i - 0.75 * a + 0.5 * s) + 0.5,
      l = Math.round(t);
    e.moveTo(l, o), e.lineTo(l, n);
    l = Math.round(t + r / 2) + 0.5;
    e.moveTo(l, o), e.lineTo(l, n);
    l = Math.round(t + r) + 0.5;
    e.moveTo(l, o), e.lineTo(l, n);
    (o = Math.round(i + 0.95 * a - 0.5 * s) + 0.5),
      (n = Math.round(i - 0.95 * a + 0.5 * s) + 0.5),
      (l = Math.round(t + 0.25 * r) + 0.5);
    e.moveTo(l, o), e.lineTo(l, n);
    l = Math.round(t + 0.75 * r) + 0.5;
    e.moveTo(l, o), e.lineTo(l, n), e.stroke(), e.restore();
  }
  static normFloat(e) {
    if (((e = Math.round(1e3 * e)), e % 1e3 == 0)) var t = e / 1e3 + ".000";
    else if (e % 100 == 0) t = e / 1e3 + "00";
    else if (e % 10 == 0) t = e / 1e3 + "0";
    else t = e / 1e3;
    return t;
  }
  static normFloat2(e) {
    if (((e = Math.round(100 * e)), e % 100 == 0)) var t = e / 100 + ".00";
    else if (e % 10 == 0) t = e / 100 + "0";
    else t = e / 100;
    return t;
  }
}
