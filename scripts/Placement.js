class Placement {
  static check() {
    MENU.selected >= 0 &&
      "placing" === STATE.state &&
      "boardtile" === STATE.under.type &&
      "constructing" === STATE.mode &&
      (STATE.validPlacement = Placement.checkValidity(
        MENU.buttons[MENU.selected].tile.name,
        STATE.under.i0,
        STATE.under.j0,
        STATE.under.i0 + STATE.under.j0 * IBOARD.width,
      ));
  }
  static draw() {
    var e = CANV.base.ctx,
      t = "cwiring" === STATE.state || "qwiring" === STATE.state;
    if (t && "boardtile" === STATE.under.type) {
      var i = !1,
        a = STATE.under.i0,
        r = STATE.under.j0,
        s = a + r * FIELD.cols;
      1 === SCENARIO.editable[s] && (i = !0);
      var o = IBOARD.findPos(a, r);
      Paths.place(e, i).draw(e, o.x0, o.y0, FIELD.tileWidth, FIELD.tileHeight);
    } else {
      var n = "erasing" === STATE.state || "destroying" === STATE.state;
      if (n && "boardtile" === STATE.under.type) {
        (i = !1),
          (a = STATE.under.i0),
          (r = STATE.under.j0),
          (s = a + r * FIELD.cols);
        1 === SCENARIO.editable[s] && (i = !0);
        o = IBOARD.findPos(a, r);
        Paths.eraser(e, i).draw(
          e,
          o.x0,
          o.y0,
          FIELD.tileWidth,
          FIELD.tileHeight,
        );
      } else if (
        MENU.selected >= 0 &&
        "placing" === STATE.state &&
        "boardtile" === STATE.under.type
      ) {
        var l = IBOARD.findPos(STATE.under.i0, STATE.under.j0);
        if ("constructing" === STATE.mode) {
          var h = 0.5,
            d = MENU.buttons[MENU.selected];
          if (
            (Paths.place(e, STATE.validPlacementLoc).draw(
              e,
              l.x0,
              l.y0,
              FIELD.tileWidth,
              FIELD.tileHeight,
            ),
            ["sync", "switch", "qControl"].indexOf(d.tile.name) >= 0)
          ) {
            (a = STATE.under.i0), (r = STATE.under.j0);
            var u = MENU.selProperties.orient;
            if (
              (0 === u
                ? (r += 1)
                : 1 === u
                  ? (a -= 1)
                  : 2 === u
                    ? (r -= 1)
                    : 3 === u && (a += 1),
              a > 0 && a < FIELD.cols && r > 0 && r < FIELD.rows)
            ) {
              o = IBOARD.findPos(a, r);
              Paths.place(e, STATE.validPlacementAdj).draw(
                e,
                o.x0,
                o.y0,
                FIELD.tileWidth,
                FIELD.tileHeight,
              );
            }
          }
          var c = JSON.parse(JSON.stringify(MENU.selProperties));
          if (
            ([
              "cCombine",
              "qCombine",
              "cSplit",
              "cCreate",
              "qCreate",
              "switch",
              "compare",
              "sync",
              "qControl",
              "upgrade",
            ].indexOf(d.tile.name) >= 0
              ? (c.orient = (MENU.selProperties.orient + STATE.extraOrient) % 4)
              : [
                  "cInvert",
                  "cCompare",
                  "delay",
                  "measure",
                  "qFlip",
                  "rotate",
                  "qCompare",
                ].indexOf(d.tile.name) >= 0 &&
                (c.orient =
                  (MENU.selProperties.orient + STATE.extraOrient) % 2),
            "cWire" === d.tile.name)
          ) {
            var I = new PathSet("cWire", 32, 32);
            I.add({
              path: new Path2D("M 14 16 L 16 14 L 18 16 L 16 18 Z"),
              stroke: "MidnightBlue",
              lineWidth: 2,
              lineCap: "round",
              shadowStroke: "dodgerblue",
            }),
              (I.isFancy = !0),
              I.draw(e, l.x0, l.y0, FIELD.tileWidth, FIELD.tileHeight, h);
          } else if ("qWire" === d.tile.name) {
            I = new PathSet("qWire", 32, 32);
            I.add({
              path: new Path2D("M 14 16 L 16 14 L 18 16 L 16 18 Z"),
              stroke: "Darkred",
              lineWidth: 2,
              lineCap: "round",
              shadowStroke: "#DD0000",
            }),
              (I.isFancy = !0),
              I.draw(e, l.x0, l.y0, FIELD.tileWidth, FIELD.tileHeight, h);
          } else if ("switch" === d.tile.name) {
            I = PathsG.simpleSwitch(c.orient);
            I.draw(e, l.x0, l.y0, FIELD.tileWidth, FIELD.tileHeight, h);
          } else if ("qControl" === d.tile.name) {
            I = PathsG.simpleControl(c.rot, c.orient);
            I.draw(e, l.x0, l.y0, FIELD.tileWidth, FIELD.tileHeight, h);
          } else {
            I = PathsG.make(CANV.ctxMB, c);
            (I.isFancy = !0),
              I.draw(e, l.x0, l.y0, FIELD.tileWidth, FIELD.tileHeight, h);
          }
          if ("switch" === d.tile.name || "qControl" === d.tile.name) {
            var E = l.x0,
              S = l.y0;
            0 === c.orient
              ? (S += FIELD.tileHeight)
              : 1 === c.orient
                ? (E -= FIELD.tileWidth)
                : 2 === c.orient
                  ? (S -= FIELD.tileHeight)
                  : 3 === c.orient && (E += FIELD.tileWidth);
            var f = !0;
            if (
              ((E >= FIELD.cols * FIELD.tileHeight || E <= 0) && (f = !1),
              (S >= FIELD.rows * FIELD.tileWidth || S <= 0) && (f = !1),
              f)
            ) {
              var p = PathsG.targetRing(new PathSet("", 32, 32), [
                "DarkGoldenRod",
                "GoldenRod",
              ]);
              (p.isFancy = !0),
                p.draw(e, E, S, FIELD.tileWidth, FIELD.tileHeight, h);
            }
          } else if ("sync" === d.tile.name) {
            (E = l.x0), (S = l.y0);
            0 === c.orient
              ? (S += FIELD.tileHeight)
              : 1 === c.orient
                ? (E -= FIELD.tileWidth)
                : 2 === c.orient
                  ? (S -= FIELD.tileHeight)
                  : 3 === c.orient && (E += FIELD.tileWidth);
            var T = (c.orient + 2) % 4;
            c.orient = T;
            f = !0;
            if (
              ((E >= FIELD.cols * FIELD.tileHeight || E <= 0) && (f = !1),
              (S >= FIELD.rows * FIELD.tileWidth || S <= 0) && (f = !1),
              f)
            ) {
              I = PathsG.make(CANV.ctxM, c);
              (I.isFancy = !0),
                I.draw(e, E, S, FIELD.tileWidth, FIELD.tileHeight, h);
            }
          }
        }
      }
    }
  }
  static checkValidity(e, t, i, a) {
    if (
      ((STATE.extraOrient = 0),
      (STATE.validPlacementLoc = !1),
      (STATE.validPlacementAdj = !0),
      SCENARIO.editable[a] < 1 || 2 === SCENARIO.editable[a])
    )
      return (STATE.tooltip = "Invalid placement"), !1;
    if ("qWire" === e) {
      var r = IBOARD.getGate(t, i, IBOARD.getState(t, i));
      return r
        ? [
            "qControl",
            "qFlip",
            "rotate",
            "qCombine",
            "measure",
            "upgrade",
            "sync",
            "delay",
            "trash",
            "qCreate",
          ].indexOf(r.type) >= 0
          ? ((STATE.tooltip = "Valid placement"),
            (STATE.validPlacementLoc = !0),
            !0)
          : ((STATE.tooltip = "Invalid placement"), !1)
        : ((STATE.tooltip = "Valid placement"),
          (STATE.validPlacementLoc = !0),
          !0);
    }
    if ("cWire" === e) {
      r = IBOARD.getGate(t, i, IBOARD.getState(t, i));
      return r
        ? [
            "cCombine",
            "cSplit",
            "cCreate",
            "switch",
            "sync",
            "upgrade",
            "cInvert",
            "delay",
            "measure",
            "trash",
          ].indexOf(r.type) >= 0
          ? ((STATE.tooltip = "Valid placement"),
            (STATE.validPlacementLoc = !0),
            !0)
          : ((STATE.tooltip = "Invalid placement"), !1)
        : ((STATE.tooltip = "Valid placement"),
          (STATE.validPlacementLoc = !0),
          !0);
    }
    if (["measure", "qFlip", "rotate", "delay", "qCreate"].indexOf(e) >= 0) {
      var s = STATE.under.i0,
        o = STATE.under.j0,
        n = IBOARD.getTile(s - 1, o),
        l = IBOARD.getTile(s + 1, o),
        h = IBOARD.getTile(s, o - 1),
        d = IBOARD.getTile(s, o + 1),
        u = 70 === n || 72 === n,
        c = 70 === l || 72 === l,
        I = 71 === h || 73 === h,
        E = 71 === d || 73 === d;
      ((u || c) && (I || E)) ||
        (u || c
          ? "qCreate" === e
            ? (u && c) ||
              (u
                ? (STATE.extraOrient =
                    (6 - (MENU.selProperties.orient % 4)) % 4)
                : c &&
                  (STATE.extraOrient =
                    (4 - (MENU.selProperties.orient % 4)) % 4))
            : MENU.selProperties.orient % 2 != 0 && (STATE.extraOrient = 1)
          : (I || E) &&
            ("qCreate" === e
              ? (I && E) ||
                (I
                  ? (STATE.extraOrient =
                      (7 - (MENU.selProperties.orient % 4)) % 4)
                  : E &&
                    (STATE.extraOrient =
                      (5 - (MENU.selProperties.orient % 4)) % 4))
              : MENU.selProperties.orient % 2 != 1 && (STATE.extraOrient = 1)));
    }
    if (["measure", "cInvert", "delay", "cCreate"].indexOf(e) >= 0) {
      (s = STATE.under.i0),
        (o = STATE.under.j0),
        (n = IBOARD.getTile(s - 1, o)),
        (l = IBOARD.getTile(s + 1, o)),
        (h = IBOARD.getTile(s, o - 1)),
        (d = IBOARD.getTile(s, o + 1)),
        (u = 40 === n || 42 === n),
        (c = 40 === l || 42 === l),
        (I = 41 === h || 43 === h),
        (E = 41 === d || 43 === d);
      ((u || c) && (I || E)) ||
        (u || c
          ? "measure" === e
            ? MENU.selProperties.orient % 2 != 1 && (STATE.extraOrient = 1)
            : "cCreate" === e
              ? (u && c) ||
                (u
                  ? (STATE.extraOrient =
                      (6 - (MENU.selProperties.orient % 4)) % 4)
                  : c &&
                    (STATE.extraOrient =
                      (4 - (MENU.selProperties.orient % 4)) % 4))
              : MENU.selProperties.orient % 2 != 0 && (STATE.extraOrient = 1)
          : (I || E) &&
            ("measure" === e
              ? MENU.selProperties.orient % 2 != 0 && (STATE.extraOrient = 1)
              : "cCreate" === e
                ? (I && E) ||
                  (I
                    ? (STATE.extraOrient =
                        (7 - (MENU.selProperties.orient % 4)) % 4)
                    : E &&
                      (STATE.extraOrient =
                        (5 - (MENU.selProperties.orient % 4)) % 4))
                : MENU.selProperties.orient % 2 != 1 &&
                  (STATE.extraOrient = 1)));
    }
    var S = IBOARD.checkWhichControl(t, i);
    if ("switch" === S.type) {
      if (
        [
          "cCombine",
          "upgrade",
          "cInvert",
          "measure",
          "qFlip",
          "rotate",
          "qCombine",
        ].indexOf(e) >= 0
      ) {
        if (
          ["upgrade", "cInvert", "measure", "qFlip", "rotate"].indexOf(e) >= 0
        )
          if (S.dir % 2 == 0) {
            if (MENU.selProperties.orient % 2 == 0)
              return (
                (STATE.extraOrient = 1),
                (STATE.tooltip = "Valid placement"),
                (STATE.validPlacementLoc = !0),
                !0
              );
          } else if (S.dir % 2 != 0 && MENU.selProperties.orient % 2 != 0)
            return (
              (STATE.extraOrient = 1),
              (STATE.tooltip = "Valid placement"),
              (STATE.validPlacementLoc = !0),
              !0
            );
        return (
          (STATE.tooltip = "Valid placement"),
          (STATE.validPlacementLoc = !0),
          !0
        );
      }
      return (STATE.tooltip = "Incompatible control/target"), !1;
    }
    if ("qControl" === S.type) {
      if (["qFlip", "rotate"].indexOf(e) >= 0) {
        if (S.dir % 2 == 0) {
          if (MENU.selProperties.orient % 2 == 0)
            return (
              (STATE.extraOrient = 1),
              (STATE.tooltip = "Valid placement"),
              (STATE.validPlacementLoc = !0),
              !0
            );
        } else if (S.dir % 2 != 0 && MENU.selProperties.orient % 2 != 0)
          return (
            (STATE.extraOrient = 1),
            (STATE.tooltip = "Valid placement"),
            (STATE.validPlacementLoc = !0),
            !0
          );
        return (
          (STATE.tooltip = "Valid placement"),
          (STATE.validPlacementLoc = !0),
          !0
        );
      }
      return (STATE.tooltip = "Incompatible control/target"), !1;
    }
    if (["switch", "sync", "qControl"].indexOf(e) >= 0) {
      STATE.validPlacementLoc = !0;
      (s = t), (o = i);
      var f = MENU.selProperties.orient;
      0 === f
        ? (o += 1)
        : 1 === f
          ? (s -= 1)
          : 2 === f
            ? (o -= 1)
            : 3 === f && (s += 1);
      var p = s + o * IBOARD.width,
        T = IBOARD.checkWhichControl(s, o);
      if (SCENARIO.editable[p] < 1)
        return (
          (STATE.tooltip =
            "sync" === e ? "Invalid placement" : "Invalid target placement"),
          (STATE.validPlacementAdj = !1),
          !1
        );
      if ("switch" === e) {
        if (T.dir >= 0 && T.dir !== (f + 1) % 4)
          return (
            (STATE.tooltip = "Tile is already controlled"),
            (STATE.validPlacementAdj = !1),
            !1
          );
        var R = IBOARD.getGate(s, o, 0);
        return R
          ? ["cCombine", "qCombine"].indexOf(R.type) >= 0
            ? ((STATE.tooltip = "Valid placement"), !0)
            : ["upgrade", "cInvert", "measure", "qFlip", "rotate"].indexOf(
                  R.type,
                ) >= 0 && f % 2 == R.orient % 2
              ? ((STATE.tooltip = "Valid placement"), !0)
              : ((STATE.tooltip = "Incompatible control/target"),
                (STATE.validPlacementAdj = !1),
                !1)
          : ((STATE.tooltip = "Valid placement"), !0);
      }
      if ("qControl" === e) {
        if (T.dir >= 0 && T.dir !== (f + 1) % 4)
          return (
            (STATE.tooltip = "Tile is already controlled"),
            (STATE.validPlacementAdj = !1),
            !1
          );
        R = IBOARD.getGate(s, o, 0);
        return R
          ? ["qFlip", "rotate"].indexOf(R.type) >= 0 && f % 2 == R.orient % 2
            ? ((STATE.tooltip = "Valid placement"), !0)
            : ((STATE.tooltip = "Incompatible control/target"),
              (STATE.validPlacementAdj = !1),
              !1)
          : ((STATE.tooltip = "Valid placement"), !0);
      }
      return "sync" === e && T.dir >= 0 && T.dir !== (f + 1) % 4
        ? ((STATE.tooltip = "Incompatible control/target"),
          (STATE.validPlacementAdj = !1),
          !1)
        : ((STATE.tooltip = "Valid placement"), !0);
    }
    return (
      (STATE.validPlacementLoc = !0), (STATE.tooltip = "Valid placement"), !0
    );
  }
}
