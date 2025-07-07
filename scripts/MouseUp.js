class MouseUp {
  static main(e) {
    (e.ctrlKey || e.metaKey) && e.button;
    if ("destroying" === STATE.state)
      return (
        UNDOREDO.add(),
        "eraser" === STATE.underLast.type
          ? (STATE.state = "erasing")
          : (STATE.state = "free"),
        void (STATE.underLast = { type: "free", i0: -1, j0: -1, k0: -1 })
      );
    if (0 === e.button) {
      if ("title" === STATE.mode)
        return void (
          "options" === STATE.state &&
          (STATE.grab = { type: "none", i0: -1, j0: -1, k0: -1 })
        );
      if ("analysisgatecontrolling" === STATE.state) {
        var t = STATE.grab.k0;
        if (t.entGroup) t.entInd;
        else;
        var i = t.measureRot,
          a = Math.round(i / (Math.PI / 8)) % 16;
        return (
          a < 0 && (a += 16),
          (t.measureRot = (a * Math.PI) / 8),
          t.computeMeasureProb(),
          void (STATE.state = "qubiting")
        );
      }
      if ("qubitbasis" === STATE.state) {
        t = STATE.grab.k0;
        var r = Math.round((8 * t.basisRot) / Math.PI);
        return (
          t.rotateBasis((Math.PI * r) / 8),
          (STATE.state = "qubiting"),
          void (STATE.grab.type = "qubit")
        );
      }
      if (
        "preqwiring" === STATE.state ||
        "precwiring" === STATE.state ||
        "prewiring" === STATE.state
      )
        return (
          (STATE.state = "free"),
          void (STATE.grab = { type: "none", i0: -1, j0: -1, k0: -1 })
        );
      if ("premultiplace" === STATE.state) {
        if (1 === COPYBUFFER.w0 && 1 === COPYBUFFER.h0) {
          var s = COPYBUFFER.corner.xL,
            o = COPYBUFFER.corner.yT,
            n = s + o * FIELD.cols,
            l = IBOARD.getGate(s, o, IBOARD.getState(s, o));
          if (l && SCENARIO.editable[n] >= 1) {
            var h = MENU.getNamedButton(l.type, l.state);
            return SCENARIO.menuGrey && SCENARIO.menuGrey[h.j0][h.i0]
              ? void (STATE.state = "free")
              : (MENU.setSelected(h.i0, h.j0),
                (MENU.selProperties = JSON.parse(
                  JSON.stringify(l.getProperties()),
                )),
                (MENU.selProperties.isControlled = !1),
                (MENU.selProperties.basecol = GRADS.gates),
                (MENU.selProperties.undercol = ["DarkGoldenRod", "GoldenRod"]),
                (STATE.state = "placing"),
                STATE.isDestroy &&
                  IBOARD.clearTile(STATE.pressed.i0, STATE.pressed.j0),
                UNDOREDO.add(),
                (STATE.grab = { type: "none", i0: 0, j0: 0, k0: 0 }),
                (STATE.pressed = { type: "none", i0: -1, j0: -1, k0: -1 }),
                void COPYBUFFER.reset());
          }
          return (
            (STATE.state = "free"),
            (STATE.pressed = { type: "none", i0: -1, j0: -1, k0: -1 }),
            void COPYBUFFER.reset()
          );
        }
        var d = COPYBUFFER.copy();
        return (
          d
            ? ((FIELD.message = "Region Copied"),
              (TIMER.message = TIMER.messageMax),
              (STATE.state = "multiplace"),
              COPYBUFFER.recenter(),
              COPYBUFFER.checkPlacement(),
              SFX.click2.play())
            : (COPYBUFFER.reset(), (STATE.state = "free")),
          void (STATE.pressed = { type: "none", i0: -1, j0: -1, k0: -1 })
        );
      }
      if ("pregatemanip" === STATE.state) {
        if ((STATE.checkUnder(), "boardtile" === STATE.under.type)) {
          (s = STATE.under.i0), (o = STATE.under.j0);
          if (s === STATE.grab.i0 && o === STATE.grab.j0) {
            n = s + o * FIELD.cols;
            return SCENARIO.editable[n] > 0
              ? void (STATE.state = "gatemanip")
              : ((STATE.grab = { type: "none", i0: -1, j0: -1, k0: -1 }),
                void (STATE.state = "free"));
          }
          return (
            (STATE.grab = { type: "none", i0: -1, j0: -1, k0: -1 }),
            void (STATE.state = "free")
          );
        }
        return (
          (STATE.grab = { type: "none", i0: -1, j0: -1, k0: -1 }),
          void (STATE.state = "free")
        );
      }
      if ("gatedrag" === STATE.state) {
        var u = STATE.grab.k0;
        if (["cCreate", "qCreate"].indexOf(STATE.grab.type) >= 0) {
          var c = Math.round(Math.abs(u.rot)),
            I = STATE.grab.k0.numPoints;
          c === I && (c -= I), (u.rot = c);
        } else if (["qControl"].indexOf(STATE.grab.type) >= 0) {
          c = Math.round((8 * u.rot) / Math.PI);
          u.rot = (Math.PI * c) / 8;
        } else if (["switch"].indexOf(STATE.grab.type) >= 0) {
          u.rot = Math.round(Math.abs(u.rot));
          a = u.orient;
          var E = STATE.grab.i0,
            S = STATE.grab.j0;
          0 == a
            ? (S += 1)
            : 1 == a
              ? (E -= 1)
              : 2 == a
                ? (S -= 1)
                : 3 == a && (E += 1),
            IBOARD.setState(E, S, u.rot);
        } else if (["delay"].indexOf(STATE.grab.type) >= 0)
          (u.state += Math.round(u.rot)), (u.rot = 0);
        else if (
          ["cCombine", "qCombine", "cSplit"].indexOf(STATE.grab.type) >= 0
        ) {
          var f = u.rot + (u.orient * Math.PI) / 2;
          a = Math.round(f / (Math.PI / 2)) % 4;
          a < 0 && (a += 4), (u.orient = a), (u.rot = 0);
          n = u.i0 + u.j0 * FIELD.cols;
          IBOARD.tiles[n] = MDATA.GATEID[STATE.grab.type] + u.orient;
        } else if (
          ["measure", "rotate", "qFlip", "upgrade"].indexOf(STATE.grab.type) >=
          0
        ) {
          a = Math.round(u.rot / (Math.PI / 8)) % 16;
          a < 0 && (a += 16), (u.rot = (a * Math.PI) / 8);
        }
        return UNDOREDO.add(), void (STATE.state = "gatemanip");
      }
      if ("cwiring" === STATE.state || "qwiring" === STATE.state)
        return UNDOREDO.add(), void (STATE.state = "placing");
      if ("rotating" === STATE.state) {
        STATE.state = "free";
        (s = STATE.grab.i0), (o = STATE.grab.j0), (n = STATE.grab.k0);
        for (var p = 0; p < STATE.entGroups.length; p++)
          if (STATE.entGroups[p].label === s) {
            var T = STATE.entGroups[p];
            break;
          }
        var R = T.rots;
        (R[o] = 2 * Math.PI * (T.degs[o] / 16)), (T.rots = R);
      }
    }
  }
}
const MDATA = {
  GATEID: {
    qCombine: 64,
    cCombine: 44,
    cSplit: 48,
    rotate: 62,
    trash: 84,
    switch: 40,
    measure: 60,
    cInvert: 52,
    upgrade: 85,
    sync: 80,
    delay: 89,
    cCreate: 54,
    qFlip: 68,
    qCreate: 74,
    compare: 91,
    cCompare: 58,
    qCompare: 78,
    qControl: 70,
    qDubCompare: 95,
    cOneCompare: 96,
  },
};
(MDATA.tutsLink = new Array(16).fill(0)),
  (MDATA.tutsLink[0] = ["cWire", "qWire"]),
  (MDATA.tutsLink[1] = []),
  (MDATA.tutsLink[2] = []),
  (MDATA.tutsLink[3] = ["cInvert"]),
  (MDATA.tutsLink[4] = ["cCombine", "qCombine", "cSplit"]),
  (MDATA.tutsLink[5] = ["cCreate", "qCreate", "trash"]),
  (MDATA.tutsLink[6] = ["switch"]),
  (MDATA.tutsLink[7] = ["delay", "sync", "upgrade"]),
  (MDATA.tutsLink[8] = []),
  (MDATA.tutsLink[9] = ["qFlip", "rotate"]),
  (MDATA.tutsLink[10] = ["measure"]),
  (MDATA.tutsLink[11] = ["qControl"]),
  (MDATA.tutsLink[12] = []),
  (MDATA.tutsLink[13] = []),
  (MDATA.tutsLink[14] = []),
  (MDATA.tutsLink[15] = []);
const TILE_EDGES = [];
TILE_EDGES.push([
  [0, 0, 0, 0],
  [0, 1, 0, 1],
  [1, 0, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 1, 1],
  [1, 0, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
  [1, 0, 0, 0],
  [1, 1, 1, 1],
  [2, 1, 2, 1],
  [1, 2, 1, 2],
  [1, 1, 1, 0],
  [0, 1, 1, 1],
  [1, 0, 1, 1],
  [1, 1, 0, 1],
]),
  TILE_EDGES.push([
    [0, 0, 0, 0],
    [0, 2, 0, 2],
    [2, 0, 2, 0],
    [0, 2, 2, 0],
    [0, 0, 2, 2],
    [2, 0, 0, 2],
    [2, 2, 0, 0],
    [0, 2, 0, 0],
    [0, 0, 2, 0],
    [0, 0, 0, 2],
    [2, 0, 0, 0],
    [2, 2, 2, 2],
    [1, 2, 1, 2],
    [2, 1, 2, 1],
    [2, 2, 2, 0],
    [0, 2, 2, 2],
    [2, 0, 2, 2],
    [2, 2, 0, 2],
  ]),
  TILE_EDGES.push([
    [2, 0, 2, 0],
    [0, 2, 0, 2],
    [2, 0, 2, 0],
    [0, 2, 0, 2],
    [2, 2, 2, 2],
    [2, 2, 2, 2],
    [2, 2, 2, 2],
    [2, 2, 2, 2],
    [2, 2, 2, 2],
    [2, 2, 2, 2],
    [2, 2, 2, 2],
    [2, 2, 2, 2],
    [2, 0, 2, 0],
    [0, 2, 0, 2],
    [0, 0, 2, 0],
    [0, 0, 0, 2],
    [2, 0, 0, 0],
    [0, 2, 0, 0],
    [2, 2, 0, 0],
    [2, 0, 0, 2],
  ]),
  TILE_EDGES.push([
    [1, 2, 1, 2],
    [2, 1, 2, 1],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
    [1, 0, 0, 1],
  ]),
  TILE_EDGES.push([
    [3, 0, 3, 0],
    [0, 3, 0, 3],
    [3, 0, 3, 0],
    [0, 3, 0, 3],
    [3, 3, 3, 3],
    [2, 0, 1, 0],
    [0, 2, 0, 1],
    [1, 0, 2, 0],
    [0, 1, 0, 2],
    [3, 0, 3, 0],
    [0, 3, 0, 3],
    [2, 2, 0, 0],
    [0, 2, 2, 0],
    [0, 0, 2, 2],
    [2, 0, 0, 2],
    [1, 0, 0, 0],
    [2, 0, 0, 0],
  ]),
  TILE_EDGES.push([
    [1, 2, 1, 0],
    [0, 1, 2, 1],
    [1, 0, 1, 2],
    [2, 1, 0, 1],
    [2, 1, 2, 0],
    [0, 2, 1, 2],
    [2, 0, 2, 1],
    [1, 2, 0, 2],
    [1, 2, 0, 0],
    [0, 1, 2, 0],
    [0, 0, 1, 2],
    [2, 0, 0, 1],
    [2, 1, 0, 0],
    [0, 2, 1, 0],
    [0, 0, 2, 1],
    [1, 0, 0, 2],
    [0, 0, 0, 0],
  ]);
const CONSTRUCTMAPS = {
    QR0: [
      -1, 0, 1, 2, 3, 4, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 20, 21, 27, 29,
      32, 100, 102, 105, 107, 108, 110, 113, 115,
    ],
    QR1: [
      8, 8, 15, 2, 3, 4, 3, 8, 4, 2, 11, 13, 14, 15, 16, 11, 8, 105, 113, 110,
      32, 100, 102, 105, 13, 100, 110, 113, 102,
    ],
    QRG: [
      60, 62, 64, 65, 66, 67, 68, 70, 72, 74, 78, 79, 80, 82, 84, 85, 89, 95,
    ],
    QL0: [
      -1, 0, 1, 2, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 20, 21, 27, 29,
      32, 100, 102, 105, 107, 108, 110, 113, 115,
    ],
    QL1: [
      10, 10, 17, 2, 5, 6, 6, 2, 5, 10, 11, 13, 14, 11, 16, 17, 10, 107, 108,
      115, 32, 100, 102, 13, 107, 108, 102, 100, 115,
    ],
    QLG: [
      60, 62, 64, 65, 66, 67, 68, 70, 72, 76, 78, 79, 80, 82, 84, 87, 89, 95,
    ],
    QD0: [
      -1, 0, 1, 2, 4, 5, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 20, 22, 28, 30,
      33, 101, 103, 104, 106, 109, 111, 112, 114,
    ],
    QD1: [
      9, 9, 1, 16, 4, 5, 1, 4, 9, 5, 11, 12, 11, 15, 16, 17, 9, 106, 114, 111,
      33, 101, 103, 12, 106, 101, 111, 103, 114,
    ],
    QDG: [61, 63, 64, 65, 66, 67, 69, 71, 73, 75, 79, 81, 83, 84, 86, 90, 95],
    QU0: [
      -1, 0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 20, 22, 28, 30,
      33, 101, 103, 104, 106, 109, 111, 112, 114,
    ],
    QU1: [
      7, 7, 1, 14, 3, 6, 7, 3, 1, 6, 11, 12, 14, 15, 11, 17, 7, 104, 109, 112,
      33, 101, 103, 104, 12, 109, 103, 112, 101,
    ],
    QUG: [61, 63, 64, 65, 66, 67, 69, 71, 73, 77, 78, 81, 83, 84, 88, 90, 95],
    CR0: [
      -1, 0, 1, 7, 9, 12, 20, 21, 22, 23, 24, 27, 28, 29, 30, 31, 33, 34, 35,
      36, 37, 101, 103, 104, 106, 109, 111, 112, 114,
    ],
    CR1: [
      28, 28, 101, 109, 114, 12, 28, 35, 22, 23, 24, 23, 28, 24, 22, 31, 33, 34,
      35, 36, 31, 101, 33, 104, 106, 109, 106, 104, 114,
    ],
    CRG: [
      40, 42, 44, 45, 46, 47, 48, 49, 50, 51, 52, 54, 61, 80, 82, 84, 87, 89,
      92, 93,
    ],
    CL0: [
      -1, 0, 1, 7, 9, 12, 20, 21, 22, 25, 26, 27, 28, 29, 30, 31, 33, 34, 35,
      36, 37, 101, 103, 104, 106, 109, 111, 112, 114,
    ],
    CL1: [
      30, 30, 103, 112, 111, 12, 30, 37, 22, 25, 26, 26, 22, 25, 30, 31, 33, 34,
      31, 36, 37, 33, 103, 104, 106, 104, 111, 112, 106,
    ],
    CLG: [
      40, 42, 44, 45, 46, 47, 48, 49, 50, 51, 52, 56, 58, 59, 61, 80, 82, 84,
      85, 89, 91, 94, 96,
    ],
    CD0: [
      -1, 0, 2, 8, 10, 13, 20, 21, 22, 24, 25, 27, 28, 29, 30, 31, 32, 34, 35,
      36, 37, 100, 102, 105, 107, 108, 110, 113, 115,
    ],
    CD1: [
      29, 29, 102, 110, 115, 13, 29, 21, 36, 24, 25, 21, 24, 29, 25, 31, 32, 31,
      35, 36, 37, 32, 102, 105, 107, 107, 110, 105, 115,
    ],
    CDG: [
      41, 43, 44, 45, 46, 47, 48, 49, 50, 51, 53, 55, 59, 60, 81, 83, 84, 88,
      90, 93, 94,
    ],
    CU0: [
      -1, 0, 2, 8, 10, 13, 20, 21, 22, 23, 26, 27, 28, 29, 30, 31, 32, 34, 35,
      36, 37, 100, 102, 105, 107, 108, 110, 113, 115,
    ],
    CU1: [
      27, 27, 100, 113, 108, 13, 27, 21, 34, 23, 26, 27, 23, 21, 26, 31, 32, 34,
      35, 31, 37, 100, 32, 105, 107, 108, 105, 113, 107,
    ],
    CUG: [
      41, 43, 44, 45, 46, 47, 48, 49, 50, 51, 53, 57, 58, 60, 81, 83, 84, 86,
      90, 91, 92,
    ],
  },
  DESTROYMAPS = {
    R0: [
      2, 3, 4, 8, 11, 12, 13, 14, 15, 16, 22, 23, 24, 28, 31, 32, 33, 34, 35,
      36, 100, 101, 102, 104, 105, 106, 109, 110, 113, 114,
    ],
    R1: [
      10, 7, 9, 0, 17, 103, 107, 6, 1, 5, 30, 27, 29, 20, 37, 107, 103, 26, 21,
      25, 108, 1, 115, 112, 21, 111, 7, 29, 27, 9,
    ],
    L0: [
      2, 5, 6, 10, 11, 12, 13, 14, 16, 17, 22, 25, 26, 30, 31, 32, 33, 34, 36,
      37, 100, 102, 103, 104, 106, 107, 108, 111, 112, 115,
    ],
    L1: [
      8, 9, 7, 0, 15, 101, 105, 3, 4, 1, 28, 29, 27, 20, 35, 105, 101, 23, 24,
      21, 113, 110, 1, 109, 114, 21, 27, 9, 7, 29,
    ],
    D0: [
      1, 4, 5, 9, 11, 12, 13, 15, 16, 17, 21, 24, 25, 29, 31, 32, 33, 35, 36,
      37, 101, 102, 103, 105, 106, 107, 110, 111, 114, 115,
    ],
    D1: [
      7, 8, 10, 0, 14, 104, 100, 3, 2, 6, 27, 28, 30, 20, 34, 100, 104, 23, 22,
      26, 109, 2, 112, 113, 22, 108, 8, 30, 28, 10,
    ],
    U0: [
      1, 3, 6, 7, 11, 12, 13, 14, 15, 17, 21, 23, 26, 27, 31, 32, 33, 34, 35,
      37, 100, 101, 103, 104, 105, 107, 108, 109, 112, 113,
    ],
    U1: [
      9, 8, 10, 0, 16, 106, 102, 2, 4, 5, 29, 28, 30, 20, 36, 102, 106, 22, 24,
      25, 2, 114, 111, 22, 110, 115, 10, 28, 30, 8,
    ],
  },
  DIRCLASSIC = {
    fromTo: [[], [], [], []],
    enterL: [
      12, 22, 25, 26, 30, 31, 33, 34, 36, 37, 40, 42, 44, 45, 47, 48, 52, 54,
      58, 59, 80, 82, 84, 85, 89, 91, 94, 96, 103, 104, 106, 111, 112,
    ],
    exitL: [
      2, 2, 3, 1, 4, 2, 2, 2, 2, 4, 2, 2, 2, 3, 1, 1, 2, 2, 4, 4, 2, 2, 4, 4, 2,
      4, 4, 5, 4, 2, 2, 4, 4,
    ],
  };
DIRCLASSIC.fromTo[0] = new Array(120).fill(-1);
for (var r = 0; r < DIRCLASSIC.enterL.length; r++)
  DIRCLASSIC.fromTo[0][DIRCLASSIC.enterL[r]] = DIRCLASSIC.exitL[r];
(DIRCLASSIC.enterT = [
  13, 21, 23, 26, 27, 31, 32, 34, 35, 37, 41, 43, 44, 45, 46, 49, 53, 55, 58,
  81, 83, 84, 86, 90, 91, 92, 100, 105, 107, 108, 113,
]),
  (DIRCLASSIC.exitT = [
    3, 3, 2, 0, 4, 3, 3, 4, 3, 3, 3, 3, 2, 3, 0, 3, 3, 3, 4, 3, 3, 4, 4, 3, 4,
    4, 4, 3, 3, 4, 4,
  ]),
  (DIRCLASSIC.fromTo[1] = new Array(120).fill(-1));
for (r = 0; r < DIRCLASSIC.enterT.length; r++)
  DIRCLASSIC.fromTo[1][DIRCLASSIC.enterT[r]] = DIRCLASSIC.exitT[r];
(DIRCLASSIC.enterR = [
  12, 22, 23, 24, 28, 31, 33, 34, 35, 36, 40, 42, 45, 46, 47, 50, 52, 56, 80,
  82, 84, 87, 89, 92, 93, 101, 104, 106, 109, 114,
]),
  (DIRCLASSIC.exitR = [
    0, 0, 1, 3, 4, 0, 0, 0, 4, 0, 0, 0, 3, 0, 1, 3, 0, 0, 0, 0, 4, 4, 0, 4, 4,
    4, 0, 0, 4, 4,
  ]),
  (DIRCLASSIC.fromTo[2] = new Array(120).fill(-1));
for (r = 0; r < DIRCLASSIC.enterR.length; r++)
  DIRCLASSIC.fromTo[2][DIRCLASSIC.enterR[r]] = DIRCLASSIC.exitR[r];
(DIRCLASSIC.enterB = [
  13, 21, 24, 25, 29, 31, 32, 35, 36, 37, 41, 43, 44, 46, 47, 51, 53, 57, 59,
  81, 83, 84, 88, 90, 93, 94, 103, 105, 107, 110, 115,
]),
  (DIRCLASSIC.exitB = [
    1, 1, 2, 0, 4, 1, 1, 1, 4, 1, 1, 1, 2, 0, 1, 0, 1, 1, 4, 1, 1, 4, 4, 1, 4,
    4, 4, 1, 1, 4, 4,
  ]),
  (DIRCLASSIC.fromTo[3] = new Array(120).fill(-1));
for (r = 0; r < DIRCLASSIC.enterB.length; r++)
  DIRCLASSIC.fromTo[3][DIRCLASSIC.enterB[r]] = DIRCLASSIC.exitB[r];
const DIRQUANTUM = {
  fromTo: [[], [], [], []],
  enterL: [
    2, 5, 6, 10, 11, 13, 14, 16, 17, 32, 60, 62, 64, 65, 67, 68, 70, 72, 74, 78,
    79, 80, 82, 84, 89, 95, 100, 102, 107, 108, 115,
  ],
  exitL: [
    2, 3, 1, 4, 2, 2, 2, 2, 4, 2, 2, 2, 2, 3, 1, 2, 2, 2, 2, 4, 4, 2, 2, 4, 2,
    5, 2, 2, 4, 4, 4,
  ],
};
DIRQUANTUM.fromTo[0] = new Array(120).fill(-1);
for (r = 0; r < DIRQUANTUM.enterL.length; r++)
  DIRQUANTUM.fromTo[0][DIRQUANTUM.enterL[r]] = DIRQUANTUM.exitL[r];
(DIRQUANTUM.enterT = [
  1, 3, 6, 7, 11, 12, 14, 15, 17, 33, 61, 63, 64, 65, 66, 69, 71, 73, 75, 78,
  81, 83, 84, 90, 95, 101, 103, 104, 109, 112,
]),
  (DIRQUANTUM.exitT = [
    3, 2, 0, 4, 3, 3, 4, 3, 3, 3, 3, 3, 2, 3, 0, 3, 3, 3, 3, 4, 3, 3, 4, 3, 5,
    3, 3, 4, 4, 4,
  ]),
  (DIRQUANTUM.fromTo[1] = new Array(120).fill(-1));
for (r = 0; r < DIRQUANTUM.enterT.length; r++)
  DIRQUANTUM.fromTo[1][DIRQUANTUM.enterT[r]] = DIRQUANTUM.exitT[r];
(DIRQUANTUM.enterR = [
  2, 3, 4, 8, 11, 13, 14, 15, 16, 32, 60, 62, 65, 66, 67, 68, 70, 72, 76, 78,
  79, 80, 82, 84, 89, 95, 100, 102, 105, 110, 113,
]),
  (DIRQUANTUM.exitR = [
    0, 1, 3, 4, 0, 0, 0, 4, 0, 0, 0, 0, 3, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0,
    5, 0, 0, 4, 4, 4,
  ]),
  (DIRQUANTUM.fromTo[2] = new Array(120).fill(-1));
for (r = 0; r < DIRQUANTUM.enterR.length; r++)
  DIRQUANTUM.fromTo[2][DIRQUANTUM.enterR[r]] = DIRQUANTUM.exitR[r];
(DIRQUANTUM.enterB = [
  1, 4, 5, 9, 11, 12, 15, 16, 17, 33, 61, 63, 64, 66, 67, 69, 71, 73, 77, 79,
  81, 83, 84, 90, 95, 101, 103, 106, 111, 114,
]),
  (DIRQUANTUM.exitB = [
    1, 2, 0, 4, 1, 1, 1, 4, 1, 1, 1, 1, 2, 0, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 5,
    1, 1, 4, 4, 4,
  ]),
  (DIRQUANTUM.fromTo[3] = new Array(120).fill(-1));
for (r = 0; r < DIRQUANTUM.enterB.length; r++)
  DIRQUANTUM.fromTo[3][DIRQUANTUM.enterB[r]] = DIRQUANTUM.exitB[r];
const WIREPATHS = { q: [] };
WIREPATHS.q.push("M 14 16 L 16 14 L 18 16 L 16 18 Z"),
  WIREPATHS.q.push("M 16 0 L 16 32"),
  WIREPATHS.q.push("M 0 16 L 32 16"),
  WIREPATHS.q.push("M 16 0 l 0 6 a 10 10 0 0 0 10 10 l 6 0"),
  WIREPATHS.q.push("M 32 16 l -6 0 a 10 10 0 0 0 -10 10 l 0 6"),
  WIREPATHS.q.push("M 16 32 l 0 -6 a 10 10 0 0 0 -10 -10 l -6 0"),
  WIREPATHS.q.push("M 0 16 l 6 0 a 10 10 0 0 0 10 -10 l 0 -6"),
  WIREPATHS.q.push("M 16 14 l 2 2 l -2 2 l -2 -2 l 2 -2 M 16 16 L 16 0"),
  WIREPATHS.q.push("M 18 16 l -2 2 l -2 -2 l 2 -2 l 2 2 M 16 16 L 32 16"),
  WIREPATHS.q.push("M 16 18 l -2 -2 l 2 -2 l 2 2 l -2 2 M 16 16 L 16 32"),
  WIREPATHS.q.push("M 14 16 L 16 14 L 18 16 L 16 18 L 14 16 M 16 16 L 0 16"),
  WIREPATHS.q.push("M 0 16 L 11 16 a 1 1 0 0 0 10 0 L 32 16 M 16 0 L 16 32"),
  WIREPATHS.q.push([
    "M 16 0 L 16 32",
    "M 0 16 L 11 16 a 1 1 0 0 0 10 0 L 32 16",
  ]),
  WIREPATHS.q.push([
    "M 16 0 L 16 32",
    "M 0 16 L 11 16 a 1 1 0 0 0 10 0 L 32 16",
  ]),
  WIREPATHS.q.push(
    "M 0 16 L 11 16 a 1 1 0 0 0 10 0 L 32 16 M 16 12 l 2 2 l -2 2 l -2 -2 l 2 -2 M 16 16 L 16 0",
  ),
  WIREPATHS.q.push(
    "M 16 0 L 16 11 a 1 1 0 0 0 0 10 L 16 32 M 20 16 l -2 2 l -2 -2 l 2 -2 l 2 2 M 16 16 L 32 16",
  ),
  WIREPATHS.q.push(
    "M 0 16 L 11 16 a 1 1 0 0 1 10 0 L 32 16 M 16 20 l -2 -2 l 2 -2 l 2 2 l -2 2 M 16 16 L 16 32",
  ),
  WIREPATHS.q.push(
    "M 16 0 L 16 11 a 1 1 0 0 1 0 10 L 16 32 M 12 16 L 14 14 L 16 16 L 14 18 L 12 16 M 14 16 L 0 16",
  ),
  (WIREPATHS.c = []),
  WIREPATHS.c.push("M 14 16 L 16 14 L 18 16 L 16 18 Z"),
  WIREPATHS.c.push("M 16 0 L 16 32"),
  WIREPATHS.c.push("M 0 16 L 32 16"),
  WIREPATHS.c.push("M 16 0 l 0 6 a 10 10 0 0 0 10 10 l 6 0"),
  WIREPATHS.c.push("M 32 16 l -6 0 a 10 10 0 0 0 -10 10 l 0 6"),
  WIREPATHS.c.push("M 16 32 l 0 -6 a 10 10 0 0 0 -10 -10 l -6 0"),
  WIREPATHS.c.push("M 0 16 l 6 0 a 10 10 0 0 0 10 -10 l 0 -6"),
  WIREPATHS.c.push("M 16 14 l 2 2 l -2 2 l -2 -2 l 2 -2 M 16 16 L 16 0"),
  WIREPATHS.c.push("M 18 16 l -2 2 l -2 -2 l 2 -2 l 2 2 M 16 16 L 32 16"),
  WIREPATHS.c.push("M 16 18 l -2 -2 l 2 -2 l 2 2 l -2 2 M 16 16 L 16 32"),
  WIREPATHS.c.push("M 14 16 L 16 14 L 18 16 L 16 18 L 14 16 M 16 16 L 0 16"),
  WIREPATHS.c.push("M 0 16 L 11 16 a 1 1 0 0 0 10 0 L 32 16 M 16 0 L 16 32"),
  WIREPATHS.c.push([
    "M 16 0 L 16 32",
    "M 0 16 L 11 16 a 1 1 0 0 0 10 0 L 32 16",
  ]),
  WIREPATHS.c.push([
    "M 16 0 L 16 32",
    "M 0 16 L 11 16 a 1 1 0 0 0 10 0 L 32 16",
  ]),
  WIREPATHS.c.push(
    "M 0 16 L 11 16 a 1 1 0 0 0 10 0 L 32 16 M 16 12 l 2 2 l -2 2 l -2 -2 l 2 -2 M 16 16 L 16 0",
  ),
  WIREPATHS.c.push(
    "M 16 0 L 16 11 a 1 1 0 0 0 0 10 L 16 32 M 20 16 l -2 2 l -2 -2 l 2 -2 l 2 2 M 16 16 L 32 16",
  ),
  WIREPATHS.c.push(
    "M 0 16 L 11 16 a 1 1 0 0 1 10 0 L 32 16 M 16 20 l -2 -2 l 2 -2 l 2 2 l -2 2 M 16 16 L 16 32",
  ),
  WIREPATHS.c.push(
    "M 16 0 L 16 11 a 1 1 0 0 1 0 10 L 16 32 M 12 16 L 14 14 L 16 16 L 14 18 L 12 16 M 14 16 L 0 16",
  );
const LEVELS = {
  names: [
    "freeA",
    "freeB",
    "freeC",
    "extraA",
    "extraB",
    "extraC",
    "extraD",
    "tut1",
    "tut2",
    "tut3",
    "tut4",
    "tut5",
    "tut6",
    "class1",
    "class2",
    "class3",
    "class4",
    "class5",
    "class6",
    "class7",
    "classPuzzle1",
    "classPuzzle2",
    "classPuzzle4",
    "classPuzzle5",
    "classPuzzle6",
    "classPuzzle7",
    "vaziraniClassic",
    "classPuzzle8",
    "classPuzzle3",
    "classPuzzle3B",
    "classPuzzle9",
    "binaryencode",
    "adder",
    "quant1",
    "quant2",
    "quant3A",
    "quant3",
    "quant4",
    "quant5",
    "quant6",
    "quant6B",
    "quant7",
    "measure",
    "adderB",
    "adderC",
    "entChallengeA",
    "quantChallengeB",
    "quantChallengeC",
    "quantChallengeD",
    "quantChallengeA",
    "quantChallengeE",
    "quantChallengeF",
    "simpleDistill",
    "measureB",
    "chsh",
    "quantumAdv3",
    "preDenseB",
    "teleport",
    "quantErrorA",
    "quantChallengeG",
    "quantumAdv1",
    "entChallengeB",
    "dense",
    "distill",
    "quantErrorB",
    "vaziraniQuantum",
    "quantumAdv2",
    "entChallengeC",
  ],
};
(LEVELS.num = LEVELS.names.length),
  (LEVELS.groups = [7, 6, 7, 7, 6, 8, 8, 7, 6, 6]),
  (LEVELS.unlocked = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
  (LEVELS.tags = [
    "FA",
    "FB",
    "X",
    "?",
    "?",
    "?",
    "?",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "A+",
    "B+",
    "C+",
    "D+",
    "E+",
    "F+",
  ]),
  (LEVELS.briefs = [
    -1, -1, -1, -1, -1, -1, -1, 0, 1, -1, 2, -1, -1, 3, 4, 6, 7, -1, 5, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 10, 14, -1, -1, 11, -1,
    12, 13, -1, -1, -1, 15, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1,
  ]),
  (LEVELS.tileHash = [
    -66, 372, -66, 393, 390, 766, 680, 865, 865, 865, 865, 327, 450, 606, 1142,
    978, 753, 679, 525, 923, 1058, 978, 450, 749, 450, 978, 226, 709, 778, 686,
    534, 450, 679, 750, 863, 461, 337, 337, 506, 506, 620, 748, 559, 1003, 1003,
    226, 750, 597, 662, 337, 750, 282, 126, 373, 249, 296, 909, 372, 337, 566,
    269, 239, 1293, 773, 652, 174, 269, 239,
  ]),
  (LEVELS.gateHash = [
    0, -489, 0, -470, -1726, -318, -303, -441, -590, -594, -645, -481, -240,
    -240, -586, -339, -404, -303, -190, -310, -519, -339, -240, -286, -1516,
    -457, -782, -333, -302, -225, -136, -240, -303, -790, -499, -848, -297,
    -282, -359, -359, -730, -996, -361, -663, -632, -806, -1241, -1466, -560,
    -298, -563, -283, -615, -237, -1874, -45, -381, -665, -672, -421, -82, -199,
    -749, -756, -768, -1200, -90, -199,
  ]),
  (LEVELS.numStandard =
    LEVELS.groups[1] +
    LEVELS.groups[2] +
    LEVELS.groups[3] +
    LEVELS.groups[4] +
    LEVELS.groups[5] +
    LEVELS.groups[6] +
    LEVELS.groups[7] +
    LEVELS.groups[8] +
    LEVELS.groups[9]),
  (LEVELS.numTotal = LEVELS.numStandard + LEVELS.groups[0]),
  (LEVELS.hidden = new Array(LEVELS.numTotal).fill(0)),
  (LEVELS.hidden[3] = 1),
  (LEVELS.hidden[4] = 1),
  (LEVELS.hidden[5] = 1),
  (LEVELS.hidden[6] = 1);
