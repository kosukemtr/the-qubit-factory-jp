class MouseMove {
  static main(e) {
    if (
      ((STATE.pos = ControlState.pos(e)),
      STATE.checkUnder(),
      "tutorial" !== STATE.mode)
    )
      if ("title" !== STATE.mode) {
        if ("constructing" === STATE.mode) {
          if ("free" === STATE.state) return;
          if ("destroying" === STATE.state) {
            var t = STATE.under.i0 + STATE.under.j0 * FIELD.cols;
            if (
              "boardtile" === STATE.under.type &&
              SCENARIO.editable[t] > 0 &&
              2 !== SCENARIO.editable[t]
            ) {
              var i = IBOARD.getTile(STATE.under.i0, STATE.under.j0);
              i >= 0 &&
                (SFX.destroy.play(),
                IBOARD.clearTile(STATE.under.i0, STATE.under.j0));
            }
            return;
          }
          if ("premultiplace" === STATE.state) {
            if ("boardtile" === STATE.under.type) {
              var a = !1;
              COPYBUFFER.corner.xL !==
                Math.min(STATE.under.i0, STATE.pressed.i0) && (a = !0),
                COPYBUFFER.corner.xR !==
                  Math.max(STATE.under.i0, STATE.pressed.i0) && (a = !0),
                COPYBUFFER.corner.yT !==
                  Math.min(STATE.under.j0, STATE.pressed.j0) && (a = !0),
                COPYBUFFER.corner.yB !==
                  Math.max(STATE.under.j0, STATE.pressed.j0) && (a = !0),
                a && COPYBUFFER.resize(STATE.under.i0, STATE.under.j0);
            } else STATE.state = "free";
            return;
          }
          if ("multiplace" === STATE.state) {
            if ("boardtile" === STATE.under.type) {
              var r = COPYBUFFER.corner.xL,
                s = COPYBUFFER.corner.yT;
              COPYBUFFER.recenter(),
                (r === COPYBUFFER.corner.xL && s === COPYBUFFER.corner.yT) ||
                  COPYBUFFER.checkPlacement();
            }
            return;
          }
          if ("gatemanip" === STATE.state) return;
          if ("gatedrag" === STATE.state) {
            var o =
                IBOARD.x0 +
                (STATE.grab.i0 + 0.5) * FIELD.tileWidth +
                FIELD.leftPad,
              n =
                IBOARD.y0 +
                (STATE.grab.j0 + 0.5) * FIELD.tileHeight +
                FIELD.topPad,
              l = Math.atan2(STATE.pos.y - n, STATE.pos.x - o),
              h = STATE.grab.k0,
              d = STATE.grab.type;
            if (["cCreate"].indexOf(d) >= 0)
              (l += Math.PI / 2),
                l < 0 && (l += 2 * Math.PI),
                (h.rot = l / ((2 * Math.PI) / 3));
            else if (["qCreate"].indexOf(d) >= 0) {
              l += Math.PI / 2;
              var u = STATE.grab.k0.numPoints;
              l < 0 && (l += 2 * Math.PI), (h.rot = l / ((2 * Math.PI) / u));
            } else if (["switch", "compare"].indexOf(d) >= 0)
              (l += Math.PI / 2),
                l > Math.PI && (l -= 2 * Math.PI),
                (h.rot = l / Math.PI);
            else if (["qControl"].indexOf(d) >= 0)
              (l += Math.PI / 2),
                l > Math.PI && (l -= 2 * Math.PI),
                (h.rot = l);
            else if (["cCombine", "qCombine", "cSplit"].indexOf(d) >= 0)
              (h.rot = l), (h.orient = 0);
            else if (["delay"].indexOf(d) >= 0) {
              (h.state = 0), (l += Math.PI / 2);
              var c = (4 * l) / Math.PI;
              c < 0 && (c += 8);
              var I = h.rot % 8,
                E = Math.floor((h.rot + 1e-5) / 8);
              if (c <= 2) I >= 6 && (E += 1);
              else if (c >= 6) {
                if (c >= 7.5 && 0 === E && I <= 3) return void (h.rot = 0);
                I <= 3 && ((E -= 1), (E = Math.max(0, E)));
              }
              (h.rot = c + 8 * E), h.rot > 80 && (h.rot = 80);
            } else
              ["measure", "rotate", "qFlip", "upgrade"].indexOf(d) >= 0 &&
                (h.rot = l + Math.PI / 2);
            return;
          }
          if ("placing" === STATE.state) return;
          if (
            "preqwiring" === STATE.state ||
            "precwiring" === STATE.state ||
            "prewiring" === STATE.state
          ) {
            if ("boardtile" === STATE.under.type) {
              var S = STATE.under.i0,
                f = STATE.under.j0,
                p = STATE.grab.k0,
                T = -1;
              if (
                (f === STATE.grab.j0 &&
                  (S === STATE.grab.i0 - 1
                    ? (T = 0)
                    : S === STATE.grab.i0 + 1 && (T = 2)),
                S === STATE.grab.i0 &&
                  (f === STATE.grab.j0 - 1
                    ? (T = 1)
                    : f === STATE.grab.j0 + 1 && (T = 3)),
                T >= 0)
              )
                return "prewiring" === STATE.state
                  ? 0 === T
                    ? [13, 32, 100, 102, 105, 107, 108, 110, 113, 115].includes(
                        p,
                      )
                      ? ((STATE.state = "qwiring"),
                        MENU.setSelected(0, 1),
                        void RedWire.place())
                      : ((STATE.state = "cwiring"),
                        MENU.setSelected(0, 0),
                        void BlueWire.place())
                    : 1 === T
                      ? [
                          12, 33, 101, 103, 104, 106, 109, 111, 112, 114,
                        ].includes(p)
                        ? ((STATE.state = "qwiring"),
                          MENU.setSelected(0, 1),
                          void RedWire.place())
                        : ((STATE.state = "cwiring"),
                          MENU.setSelected(0, 0),
                          void BlueWire.place())
                      : 2 === T
                        ? [
                            13, 32, 100, 102, 105, 107, 108, 110, 113, 115,
                          ].includes(p)
                          ? ((STATE.state = "qwiring"),
                            MENU.setSelected(0, 1),
                            void RedWire.place())
                          : ((STATE.state = "cwiring"),
                            MENU.setSelected(0, 0),
                            void BlueWire.place())
                        : 3 === T
                          ? [
                              12, 33, 101, 103, 104, 106, 109, 111, 112, 114,
                            ].includes(p)
                            ? ((STATE.state = "qwiring"),
                              MENU.setSelected(0, 1),
                              void RedWire.place())
                            : ((STATE.state = "cwiring"),
                              MENU.setSelected(0, 0),
                              void BlueWire.place())
                          : void 0
                  : "preqwiring" === STATE.state
                    ? ((STATE.state = "qwiring"),
                      MENU.setSelected(0, 1),
                      void RedWire.place())
                    : "precwiring" === STATE.state
                      ? ((STATE.state = "cwiring"),
                        MENU.setSelected(0, 0),
                        void BlueWire.place())
                      : void 0;
            }
            return;
          }
          if ("pregatemanip" === STATE.state) {
            if ("boardtile" === STATE.under.type) {
              (S = STATE.under.i0), (f = STATE.under.j0), (T = -1);
              if (
                (f === STATE.grab.j0 &&
                  (S === STATE.grab.i0 - 1
                    ? (T = 0)
                    : S === STATE.grab.i0 + 1 && (T = 2)),
                S === STATE.grab.i0 &&
                  (f === STATE.grab.j0 - 1
                    ? (T = 1)
                    : f === STATE.grab.j0 + 1 && (T = 3)),
                T >= 0)
              ) {
                t = STATE.grab.j0 * IBOARD._width + STATE.grab.i0;
                var R = Math.floor(IBOARD._tiles[t] / 20),
                  m = IBOARD._tiles[t] % 20;
                if (2 === R) var g = TILE_EDGES[2][m][T];
                else if (3 === R) g = TILE_EDGES[3][m][T];
                else if (4 === R) g = TILE_EDGES[4][m][T];
                else g = 0;
                if (1 === g) {
                  if (SCENARIO.menuGrey && SCENARIO.menuGrey[1][0]) return;
                  return (
                    (STATE.state = "qwiring"),
                    MENU.setSelected(0, 1),
                    void RedWire.place()
                  );
                }
                if (2 === g) {
                  if (SCENARIO.menuGrey && SCENARIO.menuGrey[0][0]) return;
                  return (
                    (STATE.state = "cwiring"),
                    MENU.setSelected(0, 0),
                    void BlueWire.place()
                  );
                }
                return;
              }
            }
            return;
          }
          if ("cwiring" === STATE.state)
            return "boardtile" === STATE.under.type
              ? void BlueWire.place()
              : void STATE.state;
          if ("qwiring" === STATE.state)
            return "boardtile" === STATE.under.type
              ? void RedWire.place()
              : void STATE.state;
          if ("analysisgatecontrolling" === STATE.state)
            return void MouseMove.analysisGateControl();
          if ("qubitbasis" === STATE.state)
            return void MouseMove.qubitBasisControl();
        } else if ("paused" === STATE.mode) {
          if ("free" === STATE.state) return;
          if ("analysisgatecontrolling" === STATE.state)
            return void MouseMove.analysisGateControl();
          if ("qubitbasis" === STATE.state)
            return void MouseMove.qubitBasisControl();
        }
      } else if (
        "options" === STATE.state &&
        "titleslider" === STATE.grab.type
      ) {
        var A =
            STATE.pos.x -
            (FIELD.leftPad +
              (114 * FIELD.tileWidth) / 16 -
              (5 * FIELD.tileWidth) / 2),
          C = Math.round(
            (100 * (A - 1.8 * FIELD.tileWidth)) / (2.4 * FIELD.tileWidth),
          );
        0 === STATE.grab.i0
          ? (OPTS.music !== Math.min(Math.max(0, C / 100), 1) &&
              SoundData.setMusic(),
            (OPTS.music = Math.min(Math.max(0, C / 100), 1)),
            (OPTS.musicOn = !0),
            (SFX.background.volume = OPTS.music),
            Helper.drawToggles())
          : 1 === STATE.grab.i0 &&
            (OPTS.sfx !== Math.min(Math.max(0, C / 100), 1) &&
              SoundData.setSFX(),
            (OPTS.sfx = Math.min(Math.max(0, C / 100), 1)),
            (OPTS.sfxOn = !0),
            Helper.drawToggles());
      }
  }
  static analysisGateControl() {
    var e = STATE.grab.k0;
    if (e.entGroup) {
      var t = e.entInd,
        i = e.entGroup.numQubits;
      e.computeMeasureProb();
    } else {
      (t = 0), (i = 1);
      e.computeMeasureProb();
    }
    var a = Math.min(2 ** i, 16),
      r = FIELD.topPad + ANALYSIS.yMeasure + (a + 2) * ANALYSIS.basisSpace,
      s =
        FIELD.analysisLeft +
        ANALYSIS.xPad +
        ANALYSIS.xGap +
        (t + 1) * FIELD.tileWidth,
      o = Math.atan2(STATE.pos.y - r, STATE.pos.x - s);
    e.measureRot = o + Math.PI / 2;
  }
  static qubitBasisControl() {
    var e = STATE.pos.x,
      t = STATE.pos.y,
      i = STATE.grab.k0;
    if (STATE.grab.l0 < 2) {
      var a = STATE.grab.i0,
        r = STATE.grab.j0,
        s = IBOARD.x0 + (a + 0.5) * FIELD.tileWidth + FIELD.leftPad,
        o = IBOARD.y0 + (r + 0.5) * FIELD.tileHeight + FIELD.topPad,
        n = e - s,
        l = o - t,
        h = Math.atan2(n, l);
      if (0 === STATE.grab.l0) i.rotateBasis(h), (i.lockedBasis = !1);
      else if (1 === STATE.grab.l0) {
        var d = h + Math.PI;
        d > Math.PI && (d -= 2 * Math.PI),
          i.rotateBasis(d),
          (i.lockedBasis = !1);
      }
    } else if (STATE.grab.l0 < 4) {
      if (i.entGroup) {
        i.entGroup;
        var u =
            FIELD.analysisLeft +
            ANALYSIS.xPad +
            ANALYSIS.xGap +
            (i.entInd + 1) * FIELD.tileWidth,
          c = FIELD.topPad + ANALYSIS.yPad + FIELD.tileHeight / 2;
      } else
        (u =
          FIELD.analysisLeft + ANALYSIS.xPad + ANALYSIS.xGap + FIELD.tileWidth),
          (c = FIELD.topPad + ANALYSIS.yPad + FIELD.tileHeight / 2);
      (n = e - u), (l = c - t), (h = Math.atan2(n, l));
      if (2 === STATE.grab.l0) i.rotateBasis(h), (i.lockedBasis = !1);
      else if (3 === STATE.grab.l0) {
        d = h + Math.PI;
        d > Math.PI && (d -= 2 * Math.PI),
          i.rotateBasis(d),
          (i.lockedBasis = !1);
      }
    }
  }
}
