function TutsOpen() {
  if (0 === TUTORIAL.current) {
    (TUTORIAL.title = "Handbook 1: Bits, wires and outputs"),
      (TUTORIAL.info = []),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " Bits (orange disks) travel along $$b:blue $$b:wires.",
      ),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " Qubits (green disks) travel along $$r:red $$r:wires.",
      ),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " Only a single bit or qubit can occupy a tile at any time.",
      ),
      TUTORIAL.info.push(" "),
      TUTORIAL.info.push(" "),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " In most levels, the goal is to output a stream of bits or qubits that matches the desired outputs.",
      ),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " Typically you will be given instructions on how the desired output can be achieved.",
      ),
      (TUTORIAL.type = "free"),
      (TUTORIAL.timePerTick = 800),
      (TUTORIAL.grab = 0),
      (TUTORIAL.basis = OPTS.basis),
      (OPTS.basis = "natural"),
      (SCENARIO.channelsCol = [0, 0, 0, 0, 0, 0]),
      (UBOARD[0] = new Board(CANV.tutorialGates.ctx, 19, 14)),
      (UBOARD[0]._tiles = [
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, 84, 2, 2, 5, 24, 22, 84, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, 4, 2, 2, 11, 13, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, 90, 24, 22, 33, 26, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, 77, 23, 25, 1, -1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, 21, 3, 2, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, 54, 89, 26, -1, -1, 24, 25, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, 21, 21, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, 116, 21, 53, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 21, 50, 56, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, 24, 22, 22, 22, 22, 91, 21, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, 21, -1, -1, -1, -1, -1, 21, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, 23, 22, 22, 52, 52, 22, 26, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      ]);
    for (
      var e = [
          [5, 1, 0, -1, "halt", 0, 0, !1],
          [5, 10, 1, -1, "freeze", 0, 0, !0],
          [0, 10, 3, -1, "halt", 0, 0, !1],
          [4, 3, 0, -1, "halt", 1, 0, !1],
          [5, 9, 1, 3, "halt", 0, 0, !0],
          [0, 12, 2, -1, "halt", 0, 0, !1],
          [5, 8, 1, 3, "halt", 0, 0, !0],
          [2, 12, 2, -1, "halt", 0, 0, !1],
          [1, 3, 3, -1, "halt", 0, 0, !1],
          [5, 7, 1, 3, "halt", 1, 0, !0],
          [3, 12, 2, -1, "flip", 0, 0, !1],
          [2, 5, 3, -1, "halt", 1, 0, !1],
          [5, 6, 2, -1, "halt", 0, 0, !0],
          [4, 12, 2, -1, "flip", 0, 0, !1],
          [6, 7, 3, -1, "halt", 1, 0, !0],
          [6, 12, 1, -1, "halt", 1, 0, !1],
          [1, 6, 0, -1, "wait", 1, 0, !1],
          [6, 8, 3, -1, "nullflip", 1, 0, !0],
          [6, 10, 1, -1, "halt", 1, 0, !1],
          [0, 6, 0, -1, "move", 0, 0, !1],
          [7, 9, 2, -1, "move", 1, 0, !1],
        ],
        t = 0;
      t < e.length;
      t++
    ) {
      var i = e[t].pop(),
        a = new Bit(...e[t]);
      (a.isGhost = i), UBOARD[0].setBit(a);
    }
    var r = [
      [3, 5, 2, -1, "halt", 0, !1],
      [5, 4, 1, -1, "halt", 1.1780972450961724, !1],
      [4, 2, 0, -1, "halt", 2.356194490192345, !1],
      [1, 2, 0, -1, "halt", 0, !1],
      [0, 3, 3, -1, "wait", -2.356194490192345, !1],
      [0, 4, 3, -1, "move", -2.748893571891069, !1],
    ];
    for (t = 0; t < r.length; t++) {
      i = r[t].pop();
      var s = new Qubit(...r[t]);
      (s.isGhost = i), UBOARD[0].setQubit(s);
    }
    var o = [
      [0, 4, "qCreate", "free", 3, 2, 0, 0, -1],
      [0, 6, "cCreate", "free", 0, 2, 0, 0, -1],
      [1, 6, "delay", "transform", 0, 1, 0, 2, -1],
      [0, 3, "delay", "transform", 1, 1, 0, 2, -1],
      [6, 1, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
      [0, 1, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
      [6, 9, "cSplit", "free", 2, 0, 0, 0, -1],
      [7, 9, "cCreate", "free", 2, 2, 0, 0, -1],
      [5, 10, "compare", "free", 0, 0.7853981633974483, 0, 2, -1],
      [6, 8, "cInvert", "transform", 1, 0, 0, 2, -1],
      [3, 12, "cInvert", "transform", 0, 0, 0, 0, -1],
      [4, 12, "cInvert", "transform", 0, 0, 0, 0, -1],
    ];
    for (t = 0; t < o.length; t++) {
      var n = o[t].pop(),
        l = new Gate(...o[t]);
      (l.counterMax = n), UBOARD[0].setGate(l);
    }
    UBOARD[1] = UBOARD[0].copy().updateOneStep();
  } else if (1 === TUTORIAL.current) {
    (TUTORIAL.title = "Handbook 2: Circuit Construction"),
      (TUTORIAL.info = []),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " Wires are placed by $$d:left-click $$d:+ $$d:dragging once selected from the menu.",
      ),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " Wires (of matching color) can also be created by $$d:drag-clicking on a gate or existing wire.",
      ),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " $$d:Right-click $$d:+ $$d:drag or use the $$d:eraser $$d:tool to destroy gates / wires.",
      ),
      TUTORIAL.info.push(" "),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " The orientation of a gate can be adjusted using $$d:mouse-scroll or $$d:arrow $$d:keys BEFORE placement.",
      ),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " The properties/settings of a gate are adjusted by selecting the gate $$d:(left- $$d:click) AFTER placement.",
      ),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " $$d:Hold $$d:shift $$d:+ $$d:left-click on an existing gate to copy.",
      ),
      (TUTORIAL.type = "fixed"),
      (TUTORIAL.nFrames = 7),
      (TUTORIAL.timePerTick = 400),
      (TUTORIAL.i0High = -1),
      (TUTORIAL.j0High = -1),
      (TUTORIAL.basis = OPTS.basis),
      (OPTS.basis = "natural"),
      (SCENARIO.channelsCol = [0, 0, 0, 0, 0, 0]),
      (UBOARD[0] = new Board(CANV.tutorialGates.ctx, 19, 14)),
      (UBOARD[0]._tiles = [
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, 60, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, 8, 60, 10, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, 76, 116, 75, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 75, 116, 75, 116, 75, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 75, 116, 75, 75,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      ]);
    for (
      o = [
        [4, 3, "measure", "free", 0, 0.7853981633974483, 0, 0, -1],
        [4, 5, "measure", "free", 0, 0.7853981633974483, 0, 0, -1],
        [2, 7, "qCreate", "free", 2, 0, 0, 0, -1],
        [4, 7, "qCreate", "free", 1, 0, 0, 0, -1],
        [1, 9, "qCreate", "free", 1, 0, 0, 0, -1],
        [3, 9, "qCreate", "free", 1, 0, 0, 0, -1],
        [5, 9, "qCreate", "free", 1, 2, 0, 0, 1],
        [2, 11, "qCreate", "free", 3, 2, 0, 0, 1],
        [4, 11, "qCreate", "free", 3, 2, 0, 0, 1],
        [5, 11, "qCreate", "free", 3, 2, 0, 0, 1],
      ],
        t = 0;
      t < o.length;
      t++
    ) {
      (n = o[t].pop()), (l = new Gate(...o[t]));
      (l.counterMax = n), UBOARD[0].setGate(l);
    }
    (TUTORIAL.grab = {
      type: "qCreate",
      i0: 3,
      j0: 9,
      k0: UBOARD[0].getGate(3, 9),
    }),
      (UBOARD[1] = UBOARD[0].copy()),
      (UBOARD[2] = new Board(CANV.tutorialGates.ctx, 19, 14)),
      (UBOARD[2]._tiles = [
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, 8, 60, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, 8, 60, 10, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, 76, 116, 75, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 75, 116, 75, 116, 75, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 75, 116, 75, 75,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      ]);
    for (
      o = [
        [4, 3, "measure", "free", 0, 0.7853981633974483, 0, 0, -1],
        [4, 5, "measure", "free", 0, 0.7853981633974483, 0, 0, -1],
        [2, 7, "qCreate", "free", 2, 0, 0, 0, -1],
        [4, 7, "qCreate", "free", 1, 0, 0, 0, -1],
        [1, 9, "qCreate", "free", 1, 0, 0, 0, -1],
        [3, 9, "qCreate", "free", 1, 0, 0, 0, -1],
        [5, 9, "qCreate", "free", 1, 2, 0, 0, 1],
        [2, 11, "qCreate", "free", 3, 2, 0, 0, 1],
        [4, 11, "qCreate", "free", 3, 2, 0, 0, 1],
        [5, 11, "qCreate", "free", 3, 2, 0, 0, 1],
      ],
        t = 0;
      t < o.length;
      t++
    ) {
      (n = o[t].pop()), (l = new Gate(...o[t]));
      (l.counterMax = n), UBOARD[2].setGate(l);
    }
    (UBOARD[3] = new Board(CANV.tutorialGates.ctx, 19, 14)),
      (UBOARD[3]._tiles = [
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, 8, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, 29, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, 8, 60, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, 60, 10, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, 76, 116, 75, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 75, 116, 75, 116, 75, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 75, 116, 75, 75,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      ]);
    for (
      o = [
        [4, 3, "measure", "free", 0, 0.7853981633974483, 0, 0, -1],
        [4, 5, "measure", "free", 0, 0.7853981633974483, 0, 0, -1],
        [2, 7, "qCreate", "free", 2, 0, 0, 0, -1],
        [4, 7, "qCreate", "free", 1, 0, 0, 0, -1],
        [1, 9, "qCreate", "free", 1, 0, 0, 0, -1],
        [3, 9, "qCreate", "free", 1, 0, 0, 0, -1],
        [5, 9, "qCreate", "free", 1, 2, 0, 0, 1],
        [2, 11, "qCreate", "free", 3, 2, 0, 0, 1],
        [4, 11, "qCreate", "free", 3, 2, 0, 0, 1],
        [5, 11, "qCreate", "free", 3, 2, 0, 0, 1],
      ],
        t = 0;
      t < o.length;
      t++
    ) {
      (n = o[t].pop()), (l = new Gate(...o[t]));
      (l.counterMax = n), UBOARD[3].setGate(l);
    }
    (UBOARD[4] = new Board(CANV.tutorialGates.ctx, 19, 14)),
      (UBOARD[4]._tiles = [
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, 8, 2, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, 29, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, 8, 60, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, 76, 116, 75, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 75, 116, 75, 116, 75, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 75, 116, 75, 75,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      ]);
    for (
      o = [
        [4, 3, "measure", "free", 0, 0.7853981633974483, 0, 0, -1],
        [2, 7, "qCreate", "free", 2, 0, 0, 0, -1],
        [4, 7, "qCreate", "free", 1, 0, 0, 0, -1],
        [1, 9, "qCreate", "free", 1, 0, 0, 0, -1],
        [3, 9, "qCreate", "free", 1, 0, 0, 0, -1],
        [5, 9, "qCreate", "free", 1, 2, 0, 0, 1],
        [2, 11, "qCreate", "free", 3, 2, 0, 0, 1],
        [4, 11, "qCreate", "free", 3, 2, 0, 0, 1],
        [5, 11, "qCreate", "free", 3, 2, 0, 0, 1],
      ],
        t = 0;
      t < o.length;
      t++
    ) {
      (n = o[t].pop()), (l = new Gate(...o[t]));
      (l.counterMax = n), UBOARD[4].setGate(l);
    }
    (UBOARD[5] = new Board(CANV.tutorialGates.ctx, 19, 14)),
      (UBOARD[5]._tiles = [
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, 8, 2, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, 29, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, 8, 60, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, 27, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, 76, 116, 75, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 75, 116, 75, 116, 75, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 75, 116, 75, 75,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      ]);
    for (
      o = [
        [4, 3, "measure", "free", 0, 0.7853981633974483, 0, 0, -1],
        [2, 7, "qCreate", "free", 2, 0, 0, 0, -1],
        [4, 7, "qCreate", "free", 1, 0, 0, 0, -1],
        [1, 9, "qCreate", "free", 1, 0, 0, 0, -1],
        [3, 9, "qCreate", "free", 1, 0, 0, 0, -1],
        [5, 9, "qCreate", "free", 1, 2, 0, 0, 1],
        [2, 11, "qCreate", "free", 3, 2, 0, 0, 1],
        [4, 11, "qCreate", "free", 3, 2, 0, 0, 1],
        [5, 11, "qCreate", "free", 3, 2, 0, 0, 1],
      ],
        t = 0;
      t < o.length;
      t++
    ) {
      (n = o[t].pop()), (l = new Gate(...o[t]));
      (l.counterMax = n), UBOARD[5].setGate(l);
    }
    UBOARD[6] = UBOARD[5].copy();
  } else if (2 === TUTORIAL.current) {
    (TUTORIAL.title = "Handbook 3: Gates"),
      (TUTORIAL.info = []),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " Gates act to alter bits / qubits that move over them.",
      ),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " Gates with $$b:blue coloration (generally) act on bits.",
      ),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " Gates with $$r:red coloration (generally) act on qubits.",
      ),
      TUTORIAL.info.push(" "),
      TUTORIAL.info.push(" "),
      TUTORIAL.info.push(" "),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " Gates with $$b:blue or $$r:red tabs must be connected to wires of the same color.",
      ),
      TUTORIAL.info.push(" "),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " Gates with $$g:green tabs can be connected to wires of either color.",
      ),
      (TUTORIAL.type = "free"),
      (TUTORIAL.timePerTick = 800),
      (TUTORIAL.grab = 0),
      (TUTORIAL.basis = OPTS.basis),
      (OPTS.basis = "natural"),
      (SCENARIO.channelsCol = [0, 0, 0, 0, 0, 0]),
      (UBOARD[0] = new Board(CANV.tutorialGates.ctx, 19, 14)),
      (UBOARD[0]._tiles = [
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, 84, 22, 52, 22, 52, 22, 89, 56, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, 84, 2, 68, 2, 62, 2, 89, 76, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, 75, -1, -1, 84, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, 90, -1, -1, 21, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, 3, 2, 2, 60, 2, 2, 2, 84, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, 4, 2, 2, 84, 22, 22, 89, 56, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, 90, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, 77, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      ]);
    for (
      e = [
        [6, 2, 2, -1, "move", 0, 0, !1],
        [6, 10, 2, -1, "move", 0, 0, !1],
        [7, 2, 2, 0, "halt", 0, 0, !1],
        [7, 10, 2, 0, "halt", 1, 0, !1],
      ],
        t = 0;
      t < e.length;
      t++
    ) {
      (i = e[t].pop()), (a = new Bit(...e[t]));
      (a.isGhost = i), UBOARD[0].setBit(a);
    }
    for (
      r = [
        [6, 4, 2, -1, "move", 0, !1],
        [0, 7, 1, -1, "move", 3.141592653589793, !1],
        [0, 11, 3, -1, "move", 3.141592653589793, !1],
        [7, 4, 2, 0, "halt", 0, !1],
        [0, 6, 1, 3, "halt", 0, !1],
        [0, 12, 3, 1, "halt", 3.141592653589793, !1],
      ],
        t = 0;
      t < r.length;
      t++
    ) {
      (i = r[t].pop()), (s = new Qubit(...r[t]));
      (s.isGhost = i), UBOARD[0].setQubit(s);
    }
    for (
      o = [
        [0, 2, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [0, 4, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [6, 4, "delay", "reset", 0, 0, 0, 4, -1],
        [6, 2, "delay", "reset", 0, 0, 0, 4, -1],
        [7, 2, "cCreate", "free", 2, 0, 0, 0, -1],
        [7, 4, "qCreate", "free", 2, 0, 0, 0, -1],
        [4, 2, "cInvert", "free", 0, 0, 0, 0, -1],
        [2, 2, "cInvert", "free", 0, 0, 0, 1, -1],
        [2, 4, "qFlip", "free", 0, 0.7853981633974483, 0, 0, -1],
        [4, 4, "rotate", "free", 0, 4.319689898685965, 0, 0, -1],
        [3, 8, "measure", "free", 0, 0, 0, 0, -1],
        [3, 6, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [7, 8, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [3, 10, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [0, 7, "delay", "reset", 1, 0, 0, 4, -1],
        [0, 6, "qCreate", "free", 1, 1, 0, 0, -1],
        [0, 12, "qCreate", "free", 3, 1, 0, 0, -1],
        [0, 11, "delay", "reset", 1, 0, 0, 4, -1],
        [7, 10, "cCreate", "free", 2, 1, 0, 0, -1],
        [6, 10, "delay", "reset", 0, 0, 0, 4, -1],
      ],
        t = 0;
      t < o.length;
      t++
    ) {
      (n = o[t].pop()), (l = new Gate(...o[t]));
      (l.counterMax = n), UBOARD[0].setGate(l);
    }
    UBOARD[1] = UBOARD[0].copy().updateOneStep();
  } else if (3 === TUTORIAL.current) {
    (TUTORIAL.title = "Handbook 4: Inversion and Re-zero Gates"),
      (TUTORIAL.info = []),
      TUTORIAL.info.push(" "),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " $$b:Inversion $$b:gates act on bits to flip their state.",
      ),
      TUTORIAL.info.push(" "),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " Inversion gates can be toggled to act as identity (i.e. to leave bits unchanged).",
      ),
      TUTORIAL.info.push(" "),
      TUTORIAL.info.push(" "),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " $$b:Re-zero $$b:gates act on bits to set them in the 0-state.",
      ),
      TUTORIAL.info.push(" "),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " Re-zero gates can also be toggled to act as identity.",
      ),
      (TUTORIAL.type = "free"),
      (TUTORIAL.timePerTick = 800),
      (TUTORIAL.grab = 0),
      (TUTORIAL.basis = OPTS.basis),
      (OPTS.basis = "natural"),
      (SCENARIO.channelsCol = [0, 0, 0, 0, 0, 0]),
      (UBOARD[0] = new Board(CANV.tutorialGates.ctx, 19, 14)),
      (UBOARD[0]._tiles = [
        24, 56, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, 90, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, 23, 22, 22, 52, 22, 22, 84, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, 24, 22, 22, 52, 22, 22, 84, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, 90, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, 50, 56, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, 90, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, 23, 22, 22, 52, 22, 22, 84, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 24, 22, 22, 52, 22, 22, 84, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 90, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 23, 56, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      ]);
    for (
      e = [
        [0, 4, 3, -1, "halt", 0, 0, !1],
        [0, 2, 1, -1, "halt", 1, 0, !1],
        [0, 10, 3, -1, "halt", 0, 0, !1],
        [0, 8, 1, -1, "halt", 0, 0, !1],
        [0, 5, 3, -1, "wait", 1, 0, !1],
        [0, 1, 1, -1, "wait", 1, 0, !1],
        [0, 11, 3, -1, "wait", 0, 0, !1],
        [0, 7, 1, -1, "wait", 1, 0, !1],
        [0, 6, 2, 1, "move", 0, 0, !1],
        [0, 0, 2, -1, "halt", 1, 0, !1],
        [0, 12, 2, -1, "halt", 1, 0, !1],
        [0, 6, 2, 3, "move", 0, 1, !1],
      ],
        t = 0;
      t < e.length;
      t++
    ) {
      (i = e[t].pop()), (a = new Bit(...e[t]));
      (a.isGhost = i), UBOARD[0].setBit(a);
    }
    for (r = [], t = 0; t < r.length; t++) {
      (i = r[t].pop()), (s = new Qubit(...r[t]));
      (s.isGhost = i), UBOARD[0].setQubit(s);
    }
    for (
      o = [
        [3, 2, "cInvert", "free", 0, 0, 0, 0, -1],
        [0, 1, "delay", "transform", 1, 0, 0, 3, -1],
        [6, 2, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [3, 4, "cInvert", "free", 0, 1, 0, 0, -1],
        [0, 5, "delay", "transform", 1, 0, 0, 3, -1],
        [6, 4, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [3, 8, "cInvert", "free", 0, 0, 0, 1, -1],
        [6, 8, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [3, 10, "cInvert", "free", 0, 1, 0, 1, -1],
        [6, 10, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [0, 6, "cSplit", "free", 2, 0, 0, 0, -1],
        [1, 6, "cCreate", "create", 2, 1, 0, 0, -1],
        [0, 7, "delay", "transform", 1, 0, 0, 3, -1],
        [0, 11, "delay", "transform", 1, 0, 0, 3, -1],
        [1, 0, "cCreate", "create", 2, 1, 0, 0, -1],
        [1, 12, "cCreate", "create", 2, 1, 0, 0, -1],
      ],
        t = 0;
      t < o.length;
      t++
    ) {
      (n = o[t].pop()), (l = new Gate(...o[t]));
      (l.counterMax = n), UBOARD[0].setGate(l);
    }
    UBOARD[1] = UBOARD[0].copy().updateOneStep();
  } else if (4 === TUTORIAL.current) {
    (TUTORIAL.title = "Handbook 5: Combiner and Splitter Gates"),
      (TUTORIAL.info = []),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " $$b:Combiners merge up to three wires into a single output wire.",
      ),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " If multiple bits/quibts are waiting to enter the same combiner then priority if given clockwise from the output direction.",
      ),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " Seperate versions of combiners are available for $$b:bits and for $$r:qubits.",
      ),
      TUTORIAL.info.push(" "),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " $$b:Splitters act to duplicate an input bit across multiple outputs.",
      ),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " Duplicate bits are only created when splitter outputs are connected to compatible wires or gates.",
      ),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " Splitters are not available for qubits (quantum theory forbids it!).",
      ),
      (TUTORIAL.type = "free"),
      (TUTORIAL.timePerTick = 800),
      (TUTORIAL.grab = 0),
      (TUTORIAL.basis = OPTS.basis),
      (OPTS.basis = "natural"),
      (SCENARIO.channelsCol = [0, 0, 0, 0, 0, 0]),
      (UBOARD[0] = new Board(CANV.tutorialGates.ctx, 19, 14)),
      (UBOARD[0]._tiles = [
        24, 89, 56, -1, -1, 84, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, 23, 22, 22, 25, -1, 21, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, 24, 22, 22, 44, 22, 26, 75, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, 90, -1, -1, -1, -1, -1, 90, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, 57, 4, 2, 66, 2, 2, 6, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, 1, -1, 3, 2, 2, 5, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, 55, 84, -1, -1, 74, 89, 6, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, 90, -1, -1, 24, 22, 22, 84, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, 23, 22, 22, 48, 22, 22, 84, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 23, 22, 22, 84, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, 24, 22, 22, 48, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, 90, -1, -1, 23, 22, 22, 84, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 57, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      ]);
    for (
      e = [
        [0, 0, 2, -1, "halt", 1, 0, !1],
        [0, 2, 3, -1, "halt", 0, 0, !1],
        [0, 8, 1, -1, "halt", 0, 0, !1],
        [0, 10, 3, -1, "halt", 0, 0, !1],
        [1, 0, 2, -1, "wait", 1, 0, !1],
        [0, 3, 3, -1, "wait", 0, 0, !1],
        [0, 7, 1, -1, "wait", 0, 0, !1],
        [0, 11, 3, -1, "wait", 1, 0, !1],
      ],
        t = 0;
      t < e.length;
      t++
    ) {
      (i = e[t].pop()), (a = new Bit(...e[t]));
      (a.isGhost = i), UBOARD[0].setBit(a);
    }
    for (
      r = [
        [6, 4, 1, -1, "halt", -1.9634954084936214, !1],
        [6, 6, 0, -1, "halt", -2.356194490192345, !1],
        [6, 3, 1, -1, "wait", 2.356194490192345, !1],
        [5, 6, 0, -1, "wait", -1.9634954084936214, !1],
      ],
        t = 0;
      t < r.length;
      t++
    ) {
      (i = r[t].pop()), (s = new Qubit(...r[t]));
      (s.isGhost = i), UBOARD[0].setQubit(s);
    }
    for (
      o = [
        [3, 4, "qCombine", "free", 2, 0, 0, 0, -1],
        [3, 2, "cCombine", "free", 0, 0, 0, 0, -1],
        [5, 0, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [1, 6, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [6, 3, "delay", "transform", 1, 0, 0, 3, -1],
        [6, 2, "qCreate", "create", 1, 2, 0, 0, -1],
        [5, 6, "delay", "transform", 0, 0, 0, 3, -1],
        [4, 6, "qCreate", "create", 0, 2, 0, 0, -1],
        [1, 0, "delay", "transform", 0, 0, 0, 3, -1],
        [2, 0, "cCreate", "create", 2, 2, 0, 0, -1],
        [0, 3, "delay", "transform", 1, 0, 0, 3, -1],
        [0, 4, "cCreate", "create", 3, 2, 0, 0, -1],
        [3, 8, "cSplit", "free", 0, 0, 0, 0, -1],
        [6, 7, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [6, 8, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [6, 9, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [0, 7, "delay", "transform", 1, 0, 0, 3, -1],
        [0, 6, "cCreate", "create", 1, 2, 0, 0, -1],
        [3, 10, "cSplit", "free", 0, 0, 0, 0, -1],
        [6, 11, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [0, 11, "delay", "transform", 1, 0, 0, 3, -1],
        [0, 12, "cCreate", "create", 3, 2, 0, 0, -1],
      ],
        t = 0;
      t < o.length;
      t++
    ) {
      (n = o[t].pop()), (l = new Gate(...o[t]));
      (l.counterMax = n), UBOARD[0].setGate(l);
    }
    UBOARD[1] = UBOARD[0].copy().updateOneStep();
  } else if (5 === TUTORIAL.current) {
    (TUTORIAL.title = "Handbook 6: Creation and Incineration"),
      (TUTORIAL.info = []),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " Creation gates act to create new $$b:bits or $$r:qubits.",
      ),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " Gates can be configured to produce in $$d:fixed, $$d:alternating or $$d:random states.",
      ),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " Gates can be configured to produce indefinitely or to produce a finite number of outputs.",
      ),
      TUTORIAL.info.push(" "),
      TUTORIAL.info.push(" "),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " $$g:Incinerators act to destroy bits and qubits.",
      ),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " Incinerators can be toggled to display their destroy count.",
      ),
      (TUTORIAL.type = "free"),
      (TUTORIAL.timePerTick = 800),
      (TUTORIAL.grab = 0),
      (TUTORIAL.basis = OPTS.basis),
      (OPTS.basis = "natural"),
      (SCENARIO.channelsCol = [0, 0, 0, 0, 0, 0]),
      (UBOARD[0] = new Board(CANV.tutorialGates.ctx, 19, 14)),
      (UBOARD[0]._tiles = [
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, 84, 22, 56, -1, 74, 2, 84, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, 84, 22, 56, -1, 74, 2, 84, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, 84, 22, 56, -1, 74, 2, 84, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, 54, 89, 25, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 21, -1, -1, 75, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 84, 26, -1, -1, 90, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 2, 6, -1, 4, 2, 6, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, 90, -1, -1, 24, 84, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 77, -1, -1, 21, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 23, 89, 56, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      ]);
    for (
      e = [
        [3, 6, 0, -1, "halt", 1, 0, !1],
        [3, 12, 2, -1, "halt", 1, 0, !1],
        [2, 6, 0, -1, "wait", 1, 0, !1],
        [4, 12, 2, -1, "wait", 1, 0, !1],
        [1, 2, 2, -1, "halt", 0, 0, !1],
        [1, 3, 2, -1, "halt", 0, 0, !1],
        [1, 4, 2, -1, "halt", 1, 0, !1],
      ],
        t = 0;
      t < e.length;
      t++
    ) {
      (i = e[t].pop()), (a = new Bit(...e[t]));
      (a.isGhost = i), UBOARD[0].setBit(a);
    }
    for (
      r = [
        [0, 9, 3, -1, "halt", 0, !1],
        [6, 9, 1, -1, "halt", 1.1780972450961724, !1],
        [0, 10, 3, -1, "wait", -2.356194490192345, !1],
        [6, 8, 1, -1, "wait", -0.39269908169872486, !1],
        [5, 2, 0, -1, "halt", 0, !1],
        [5, 3, 0, -1, "halt", 0, !1],
        [5, 4, 0, -1, "halt", 2.748893571891069, !1],
      ],
        t = 0;
      t < r.length;
      t++
    ) {
      (i = r[t].pop()), (s = new Qubit(...r[t]));
      (s.isGhost = i), UBOARD[0].setQubit(s);
    }
    for (
      o = [
        [2, 2, "cCreate", "create", 2, 0, 0, 0, 6],
        [2, 3, "cCreate", "create", 2, 1, 0, 0, 8],
        [2, 4, "cCreate", "create", 2, 2, 0, 0, -1],
        [4, 2, "qCreate", "create", 0, 0, 0, 0, 6],
        [4, 3, "qCreate", "create", 0, 1, 0, 0, 8],
        [4, 4, "qCreate", "create", 0, 2, 0, 0, -1],
        [6, 4, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [6, 3, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [6, 2, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [0, 2, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [0, 3, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [0, 4, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [1, 6, "cCreate", "create", 0, 2, 0, 0, -1],
        [2, 6, "delay", "transform", 0, 0, 0, 3, -1],
        [0, 11, "qCreate", "create", 3, 2, 0, 0, -1],
        [0, 10, "delay", "transform", 1, 0, 0, 3, -1],
        [5, 12, "cCreate", "create", 2, 2, 0, 0, -1],
        [4, 12, "delay", "transform", 0, 0, 0, 3, -1],
        [6, 8, "delay", "transform", 1, 0, 0, 3, -1],
        [6, 7, "qCreate", "create", 1, 2, 0, 0, -1],
        [2, 8, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [4, 10, "trash", "free", 0, 0.7853981633974483, 0, 1, -1],
      ],
        t = 0;
      t < o.length;
      t++
    ) {
      (n = o[t].pop()), (l = new Gate(...o[t]));
      (l.counterMax = n), UBOARD[0].setGate(l);
    }
    UBOARD[1] = UBOARD[0].copy().updateOneStep();
  } else if (6 === TUTORIAL.current) {
    (TUTORIAL.title = "Handbook 7: (Bit) Control Gates"),
      (TUTORIAL.info = []),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " $$b:Controls can actively alter the state of gates placed within their $$d:target ring depending on the bits input into the control.",
      ),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " During construction the yellow $$d:switch icon can be used to toggle between 0-primed or 1-primed $$b:control states, and the $$d:target $$d:gate can be configured separately for each state.",
      ),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " In the example to the left, the target gate directs bits to left after receiving a $$b:`0` $$b:control-bit   and to the top after receiving a     $$b:`1` $$b:control-bit.",
      ),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " Each time that the target gate is triggered the control returns to the unprimed state and must be re-primed before the target gate will reaccept bit/qubit entry.",
      ),
      (TUTORIAL.type = "free"),
      (TUTORIAL.timePerTick = 800),
      (TUTORIAL.grab = 0),
      (TUTORIAL.basis = OPTS.basis),
      (OPTS.basis = "natural"),
      (SCENARIO.channelsCol = [0, 0, 0, 0, 0, 0]),
      (UBOARD[0] = new Board(CANV.tutorialGates.ctx, 19, 14)),
      (UBOARD[0]._tiles = [
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, 40, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, 40, -1, 40, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, 52, -1, 52, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, 54, 22, 22, 25, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 21, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, 84, 22, 22, 25, -1, -1, 90, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, 84, 22, 22, 46, 22, 22, 26, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 84, 22, 22, 42, 22, 22, 25, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 90,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        57, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      ]);
    for (
      o = [
        [4, 1, "switch", "free", 0, 3, 0, 1, -1],
        [2, 4, "switch", "free", 0, 1, 0, 3, -1],
        [4, 4, "switch", "free", 0, 0, 0, 4, -1],
        [2, 5, "cInvert", "free", 0, 1, 0, 0, -1],
        [2, 5, "cInvert", "free", 0, 0, 1, 0, -1],
        [4, 5, "cInvert", "free", 0, 1, 0, 0, -1],
        [4, 5, "cInvert", "free", 0, 0, 1, 0, -1],
        [0, 9, "trash", "free", 0, 0.785398163397, 0, 0, -1],
        [0, 8, "trash", "free", 0, 0.785398163397, 0, 0, -1],
        [3, 10, "switch", "free", 2, 2, 0, 1, -1],
        [3, 9, "cCombine", "free", 2, 0, 0, 0, -1],
        [3, 9, "cCombine", "free", 3, 0, 1, 0, -1],
        [0, 10, "trash", "free", 0, 0.785398163397, 0, 0, -1],
        [6, 8, "delay", "transform", 1, 4, 0, 6, -1],
        [6, 12, "cCreate", "free", 3, 1, 0, 0, -1],
        [6, 11, "delay", "transform", 1, 1, 0, 6, -1],
        [3, 6, "cCreate", "free", 0, 2, 0, 0, -1],
      ],
        e = [
          [5, 10, 2, 0, "halt", 0, 0, !1],
          [6, 8, 1, -1, "wait", 0, 0, !1],
          [6, 11, 3, -1, "wait", 1, 0, !1],
          [6, 7, 1, 3, "halt", 1, 0, !1],
          [6, 6, 0, 3, "halt", 0, 0, !1],
          [5, 6, 0, 2, "halt", 1, 0, !1],
          [4, 6, 0, 2, "halt", 0, 0, !1],
          [6, 12, 3, 1, "move", 0, 0, !1],
        ],
        t = 0;
      t < e.length;
      t++
    ) {
      (i = e[t].pop()), (a = new Bit(...e[t]));
      (a.isGhost = i), UBOARD[0].setBit(a);
    }
    for (t = 0; t < o.length; t++) {
      (n = o[t].pop()), (l = new Gate(...o[t]));
      (l.counterMax = n), UBOARD[0].setGate(l);
    }
    UBOARD[1] = UBOARD[0].copy().updateOneStep();
  } else if (7 === TUTORIAL.current) {
    (TUTORIAL.title = "Handbook 8: Delay, Sync and BtQ Gates"),
      (TUTORIAL.info = []),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " $$g:Delay $$g:gates act to hold bits or qubits in place for a number of ticks (configurable between 0-80 ticks).",
      ),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " $$g:Sync $$g:gates are always placed in pairs. They will only allow passage when both halves of the pair are simultaneously occupied, otherwise bits / qubits will be held in place.",
      ),
      TUTORIAL.info.push(" "),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " $$g:Bit-to-qubit (BtQ) gates transform an incoming bit into an outgoing qubit.",
      ),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " If the input bit is $$d:'0' state then the outgoing qubit will be $$d:aligned with the gate arrow, else if the input bit is $$d:'1' state the outgoing qubit will be $$d:anti-aligned.",
      ),
      (TUTORIAL.type = "free"),
      (TUTORIAL.timePerTick = 800),
      (TUTORIAL.grab = 0),
      (TUTORIAL.basis = OPTS.basis),
      (OPTS.basis = "natural"),
      (SCENARIO.channelsCol = [0, 0, 0, 0, 0, 0]),
      (UBOARD[0] = new Board(CANV.tutorialGates.ctx, 19, 14)),
      (UBOARD[0]._tiles = [
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, 84, 22, 22, 89, 22, 22, 89, 56, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, 84, 2, 2, 80, 2, 2, 89, 89, 76, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, 84, 22, 22, 82, 22, 22, 89, 56, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, 24, 22, 56, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, 90, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, 23, 22, 22, 85, 2, 2, 84, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, 24, 22, 22, 85, 2, 2, 84, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 90, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 53, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 57, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      ]);
    for (
      e = [
        [3, 2, 2, -1, "wait", 0, 0, !1],
        [4, 5, 2, -1, "halt", 1, 0, !1],
        [0, 10, 3, -1, "halt", 1, 0, !1],
        [0, 8, 1, -1, "halt", 0, 0, !1],
        [6, 2, 2, -1, "wait", 1, 0, !1],
        [6, 5, 2, -1, "wait", 0, 0, !1],
        [0, 11, 3, -1, "wait", 1, 0, !1],
        [0, 7, 1, -1, "wait", 0, 0, !1],
        [0, 12, 3, -1, "flip", 0, 0, !1],
        [0, 6, 2, -1, "halt", 0, 0, !1],
        [7, 2, 2, 0, "halt", 0, 0, !1],
        [1, 6, 2, -1, "halt", 0, 0, !1],
        [7, 5, 2, -1, "move", 1, 0, !1],
      ],
        t = 0;
      t < e.length;
      t++
    ) {
      (i = e[t].pop()), (a = new Bit(...e[t]));
      (a.isGhost = i), UBOARD[0].setBit(a);
    }
    for (
      r = [
        [6, 4, 2, -1, "wait", 0.3926990816987241, !1],
        [7, 4, 2, 0, "halt", -1.9634954084936211, !1],
        [8, 4, 2, 0, "halt", 1.1780972450961724, !1],
      ],
        t = 0;
      t < r.length;
      t++
    ) {
      (i = r[t].pop()), (s = new Qubit(...r[t]));
      (s.isGhost = i), UBOARD[0].setQubit(s);
    }
    for (
      o = [
        [6, 2, "delay", "transform", 0, 2, 0, 3, -1],
        [3, 2, "delay", "transform", 0, 0, 0, 2, -1],
        [7, 2, "cCreate", "free", 2, 2, 0, 0, -1],
        [0, 2, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [3, 4, "sync", "free", 0, 0.7853981633974483, 0, 0, -1],
        [3, 5, "sync", "free", 2, 0, 0, 0, -2],
        [0, 5, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [0, 4, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [6, 4, "delay", "transform", 0, 3, 0, 4, -1],
        [6, 5, "delay", "transform", 0, 1, 0, 4, -1],
        [7, 5, "cCreate", "free", 2, 2, 0, 0, -1],
        [8, 4, "qCreate", "free", 2, 2, 0, 0, -1],
        [7, 4, "delay", "free", 0, 0, 0, 2, -1],
        [3, 8, "upgrade", "free", 0, 0.7853981633974483, 0, 0, -1],
        [3, 10, "upgrade", "free", 0, 0.7853981633974483, 0, 0, -1],
        [0, 7, "delay", "transform", 1, 0, 0, 3, -1],
        [0, 11, "delay", "transform", 1, 0, 0, 3, -1],
        [0, 12, "cInvert", "transform", 1, 0, 0, 0, -1],
        [0, 13, "cCreate", "create", 3, 0, 0, 0, -1],
        [6, 8, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [6, 10, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [2, 6, "cCreate", "create", 2, 0, 0, 0, -1],
      ],
        t = 0;
      t < o.length;
      t++
    ) {
      (n = o[t].pop()), (l = new Gate(...o[t]));
      (l.counterMax = n), UBOARD[0].setGate(l);
    }
    UBOARD[1] = UBOARD[0].copy().updateOneStep();
  } else if (8 === TUTORIAL.current) {
    (TUTORIAL.title = "Handbook 9: Intro to Qubits"),
      (TUTORIAL.info = []),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " An (unentangled) $$r:qubit is depicted as an arrow pointing to edge of a green disk. The ▲ and ▼ states are analogous to `0` and `1` bits.",
      ),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " In general qubits can be at any angle Θ, although the Qubit Factory often only makes use of qubits at discrete angular increments of π/8.",
      ),
      TUTORIAL.info.push(" "),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " The outline color of a qubit denotes the sign of its wavefunction, with $$g:green $$g:for $$g:+ve and $$p:purple $$p:for $$p:-ve. Signs only become important when dealing with superpositions.",
      ),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " Rotation of a qubit through 2π (or 360°) changes its sign. Although weird, this is expected behavior!",
      ),
      (TUTORIAL.type = "free"),
      (TUTORIAL.timePerTick = 800),
      (TUTORIAL.grab = 0),
      (TUTORIAL.basis = OPTS.basis),
      (OPTS.basis = "natural"),
      (SCENARIO.channelsCol = [0, 0, 0, 0, 0, 0]),
      (UBOARD[0] = new Board(CANV.tutorialGates.ctx, 19, 14)),
      (UBOARD[0]._tiles = [
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, 0, -1, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, 116, -1, 116, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1, 0, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, 84, 2, 62, 2, 62, 2, 89, 76, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      ]);
    for (
      e = [],
        r = [
          [6, 10, 2, -1, "move", 0, !1],
          [7, 10, 2, 0, "halt", 0, !1],
          [2, 1, 2, 0, "halt", 0, !1],
          [4, 1, 2, 0, "halt", Math.PI, !1],
          [1, 4, 2, 0, "halt", (0 * Math.PI) / 8, !1],
          [2, 4, 2, 0, "halt", (1 * Math.PI) / 8, !1],
          [3, 4, 2, 0, "halt", (2 * Math.PI) / 8, !1],
          [4, 4, 2, 0, "halt", (3 * Math.PI) / 8, !1],
          [5, 4, 2, 0, "halt", (4 * Math.PI) / 8, !1],
          [1, 5, 2, 0, "halt", (5 * Math.PI) / 8, !1],
          [2, 5, 2, 0, "halt", (6 * Math.PI) / 8, !1],
          [3, 5, 2, 0, "halt", (7 * Math.PI) / 8, !1],
          [4, 5, 2, 0, "halt", (8 * Math.PI) / 8, !1],
          [5, 5, 2, 0, "halt", (9 * Math.PI) / 8, !1],
          [2, 8, 2, 0, "halt", (0 * Math.PI) / 8, !1],
          [4, 8, 2, 0, "halt", (0 * Math.PI) / 8, !1],
        ],
        t = 0;
      t < r.length;
      t++
    ) {
      (i = r[t].pop()), (s = new Qubit(...r[t]));
      (s.isGhost = i),
        15 === t &&
          ((s._ampsComp = [-1, 0]),
          (s._ampsRot = [-1, 0]),
          (s._ampsFinal = [-1, 0])),
        UBOARD[0].setQubit(s);
    }
    for (
      o = [
        [7, 10, "qCreate", "free", 2, 0, 0, 0, -1],
        [0, 10, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [6, 10, "delay", "reset", 0, 0, 0, 5, -1],
        [2, 10, "rotate", "free", 0, 3.141592653589793, 0, 0, -1],
        [4, 10, "rotate", "free", 0, 3.141592653589793, 0, 0, -1],
      ],
        t = 0;
      t < o.length;
      t++
    ) {
      (n = o[t].pop()), (l = new Gate(...o[t]));
      (l.counterMax = n), UBOARD[0].setGate(l);
    }
    UBOARD[1] = UBOARD[0].copy().updateOneStep();
  } else if (9 === TUTORIAL.current) {
    (TUTORIAL.title = "Handbook 10: Flip and Rotation Gates"),
      (TUTORIAL.info = []),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " $$r:Flip $$r:gates act to reflect qubits about a chosen axis.",
      ),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " Flip gates can be toggled to act instead as identity (i.e. qubits are unchanged).",
      ),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " The sign of the output changes depending on if the qubit is aligned or anti-aligned with the flip axis.",
      ),
      TUTORIAL.info.push(" "),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " $$r:Rotation $$r:gates act to rotate qubits up to a half-turn in either direction (i.e. within range -π to π).",
      ),
      TUTORIAL.info.push(" "),
      TUTORIAL.info.push(" "),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " Rotation gates act as identity if the rotation angle is set to zero.",
      ),
      (TUTORIAL.type = "free"),
      (TUTORIAL.timePerTick = 800),
      (TUTORIAL.grab = 0),
      (TUTORIAL.basis = OPTS.basis),
      (OPTS.basis = "natural"),
      (SCENARIO.channelsCol = [0, 0, 0, 0, 0, 0]),
      (UBOARD[0] = new Board(CANV.tutorialGates.ctx, 19, 14)),
      (UBOARD[0]._tiles = [
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, 84, 2, 2, 68, 2, 2, 89, 76, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, 84, 2, 2, 68, 2, 2, 89, 76, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, 84, 2, 2, 68, 2, 2, 87, 89, 56, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, 84, 2, 2, 68, 2, 2, 87, 89, 56, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, 4, 89, 76, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, 3, 2, 2, 62, 2, 2, 84, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, 4, 2, 2, 62, 2, 2, 84, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, 90, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, 77, 4, 2, 62, 2, 2, 84, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, 3, 89, 76, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1,
      ]);
    for (
      e = [
        [6, 4, 2, -1, "upgrade", 0, 0, !1],
        [6, 5, 2, -1, "upgrade", 0, 0, !1],
        [7, 4, 2, -1, "wait", 1, 0, !1],
        [7, 5, 2, -1, "wait", 1, 0, !1],
      ],
        t = 0;
      t < e.length;
      t++
    ) {
      (i = e[t].pop()), (a = new Bit(...e[t]));
      (a.isGhost = i), UBOARD[0].setBit(a);
    }
    for (
      r = [
        [5, 1, 2, -1, "halt", -1.178097245096172, !1],
        [5, 2, 2, -1, "halt", 0, !1],
        [0, 6, 2, -1, "halt", -1.9634954084936211, !1],
        [0, 9, 3, -1, "halt", -0.7853981633974484, !1],
        [1, 12, 2, -1, "halt", -2.748893571891069, !1],
        [6, 1, 2, -1, "wait", -1.5707963267948966, !1],
        [6, 2, 2, -1, "wait", -2.356194490192345, !1],
        [1, 6, 2, -1, "wait", 0, !1],
        [0, 10, 3, -1, "wait", -1.9634954084936211, !1],
        [2, 12, 2, -1, "wait", -1.178097245096172, !1],
      ],
        t = 0;
      t < r.length;
      t++
    ) {
      (i = r[t].pop()), (s = new Qubit(...r[t]));
      (s.isGhost = i), UBOARD[0].setQubit(s);
    }
    for (
      o = [
        [3, 5, "qFlip", "free", 0, 1.5707963267948966, 0, 0, -1],
        [3, 4, "qFlip", "free", 0, 4.71238898038469, 0, 0, -1],
        [0, 4, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [0, 5, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [6, 5, "upgrade", "transform", 2, 0.7853981633974483, 0, 0, -1],
        [6, 4, "upgrade", "transform", 2, 0.7853981633974483, 0, 0, -1],
        [7, 4, "delay", "transform", 0, 0, 0, 3, -1],
        [7, 5, "delay", "transform", 0, 0, 0, 3, -1],
        [8, 4, "cCreate", "create", 2, 1, 0, 0, -1],
        [8, 5, "cCreate", "create", 2, 1, 0, 0, -1],
        [3, 1, "qFlip", "free", 0, 0.7853981633974483, 0, 0, -1],
        [3, 2, "qFlip", "free", 0, 0.7853981633974483, 0, 1, -1],
        [7, 1, "qCreate", "create", 2, 2, 0, 0, -1],
        [7, 2, "qCreate", "create", 2, 2, 0, 0, -1],
        [0, 2, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [0, 1, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [6, 2, "delay", "transform", 0, 0, 0, 3, -1],
        [6, 1, "delay", "transform", 0, 0, 0, 3, -1],
        [3, 7, "rotate", "free", 0, 2.356194490192345, 0, 0, -1],
        [3, 9, "rotate", "free", 0, 4.71238898038469, 0, 0, -1],
        [1, 6, "delay", "transform", 0, 0, 0, 3, -1],
        [0, 10, "delay", "transform", 1, 0, 0, 3, -1],
        [2, 6, "qCreate", "create", 2, 2, 0, 0, -1],
        [0, 11, "qCreate", "create", 3, 2, 0, 0, -1],
        [6, 7, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [6, 9, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [3, 11, "rotate", "free", 0, 0, 0, 0, -1],
        [6, 11, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [2, 12, "delay", "transform", 0, 0, 0, 3, -1],
        [3, 12, "qCreate", "create", 2, 2, 0, 0, -1],
      ],
        t = 0;
      t < o.length;
      t++
    ) {
      (n = o[t].pop()), (l = new Gate(...o[t]));
      (l.counterMax = n), UBOARD[0].setGate(l);
    }
    UBOARD[1] = UBOARD[0].copy().updateOneStep();
  } else if (10 === TUTORIAL.current) {
    (TUTORIAL.title = "Handbook 11: Measurements"),
      (TUTORIAL.info = []),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " $$r:Measurements produce output qubits either aligned or anti-aligned with the measurment axis.",
      ),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " The probability for each outcome depends on the angle Θ between the head of the measurement and the head of the qubit (align prob = cos²(Θ/2), anti-align prob = sin²(Θ/2)).",
      ),
      TUTORIAL.info.push(" "),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " Input qubits that are already aligned / anti-aligned with the measurement remain unchanged.",
      ),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " Classical bits corresponding to the measurement outcome (`0` for aligned, `1` for anti-aligned) are output if the $$b:blue tabs are connected to compatible wires or gates.",
      ),
      (TUTORIAL.type = "free"),
      (TUTORIAL.timePerTick = 800),
      (TUTORIAL.grab = 0),
      (TUTORIAL.basis = OPTS.basis),
      (OPTS.basis = "natural"),
      (SCENARIO.channelsCol = [0, 0, 0, 0, 0, 0]),
      (SCENARIO.text0 = { i0: 3, j0: 1.25, text: "prob: 0.85" }),
      (SCENARIO.text1 = { i0: 3, j0: 4.75, text: "prob: 0.15" }),
      (UBOARD[0] = new Board(CANV.tutorialGates.ctx, 19, 14)),
      (UBOARD[0]._tiles = [
        4, 76, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, 90, -1, 0, 116, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, 3, 2, 2, 60, 2, 2, 84, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, 0, 116, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, 4, 2, 2, 60, 2, 2, 84, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, 90, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, 77, -1, -1, 24, 22, 22, 84, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, 4, 2, 2, 60, 2, 2, 84, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, 90, -1, -1, 23, 22, 22, 84, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, 77, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      ]);
    for (e = [], t = 0; t < e.length; t++) {
      (i = e[t].pop()), (a = new Bit(...e[t]));
      (a.isGhost = i), UBOARD[0].setBit(a);
    }
    for (
      r = [
        [0, 3, 1, -1, "halt", 0, !1],
        [2, 10, 0, -1, "halt", 0.7853981633974484, !1],
        [2, 7, 0, -1, "halt", 0, !1],
        [0, 2, 1, -1, "wait", 0, !1],
        [0, 11, 3, -1, "wait", -1.9634954084936211, !1],
        [0, 8, 3, -1, "wait", 3.141592653589793, !1],
        [0, 1, 1, -1, "halt", 0, !1],
        [0, 0, 2, -1, "halt", 0, !1],
        [0, 12, 3, 1, "halt", 1.1780972450961724, !1],
        [0, 9, 3, 1, "halt", 0, !1],
        [4, 2, 1, -1, "halt", Math.PI / 4, !1],
        [4, 4, 1, -1, "halt", (5 * Math.PI) / 4, !1],
        [2, 2, 1, -1, "halt", 0, !1],
        [2, 4, 1, -1, "halt", 0, !1],
      ],
        t = 0;
      t < r.length;
      t++
    ) {
      (i = r[t].pop()), (s = new Qubit(...r[t]));
      (s.isGhost = i), UBOARD[0].setQubit(s);
    }
    for (
      o = [
        [6, 10, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [6, 9, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [1, 0, "qCreate", "create", 2, 0, 0, 0, -1],
        [0, 12, "qCreate", "free", 3, 2, 0, 0, -1],
        [0, 11, "delay", "transform", 1, 2, 0, 3, -1],
        [3, 10, "measure", "free", 0, 0.7853981633974483, 0, 0, -1],
        [6, 11, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [6, 7, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [3, 7, "measure", "free", 0, 0, 0, 0, -1],
        [0, 9, "qCreate", "free", 3, 1, 0, 0, -1],
        [0, 8, "delay", "transform", 1, 2, 0, 3, -1],
        [3, 3, "measure", "free", 0, 0.7853981633974483, 0, 0, -1],
        [6, 3, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [0, 2, "delay", "transform", 1, 0, 0, 3, -1],
      ],
        t = 0;
      t < o.length;
      t++
    ) {
      (n = o[t].pop()), (l = new Gate(...o[t]));
      (l.counterMax = n), UBOARD[0].setGate(l);
    }
    UBOARD[1] = UBOARD[0].copy().updateOneStep();
  } else if (11 === TUTORIAL.current) {
    (TUTORIAL.title = "Handbook 12: Qubit Control Gates"),
      (TUTORIAL.info = []),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " $$r:Qubit $$r:control $$r:gates affect the action of the (flip or rotate) gate placed within their $$d:target $$d:ring based on the state of the control qubit.",
      ),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " If the control qubit and gate are aligned then the target gate acts as the identity (i.e. no action), else if they are anti-aligned the target gate acts normally.",
      ),
      TUTORIAL.info.push(""),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " Gates will hold a control/target qubit in place until both are occupied simultaneously.",
      ),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " If the control qubit is neither aligned nor anti-aligned with the control gate then an $$d:entangled $$d:state can be produced (see qubit superpositions / entangled states).",
      ),
      (TUTORIAL.type = "free"),
      (TUTORIAL.timePerTick = 800),
      (TUTORIAL.grab = 0),
      (TUTORIAL.basis = OPTS.basis),
      (OPTS.basis = "natural"),
      (SCENARIO.channelsCol = [0, 0, 0, 0, 0, 0]),
      (SCENARIO.text0 = { i0: 3, j0: 2.5, text: " aligned" }),
      (SCENARIO.text1 = { i0: 3, j0: 3.5, text: "anti-aligned" }),
      (UBOARD[0] = new Board(CANV.tutorialGates.ctx, 19, 14)),
      (UBOARD[0]._tiles = [
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, 84, 2, 68, 2, 62, 2, 89, 68, 76, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, 84, 2, 72, 2, 72, 2, 89, 68, 76, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, 84, 2, 70, 2, 70, 2, 89, 68, 76, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, 84, 2, 68, 2, 62, 2, 89, 68, 76, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, 84, 2, 2, 70, 2, 2, 89, 76, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, 84, 2, 2, 68, 2, 2, 89, 76, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, 84, 2, 2, 70, 2, 2, 89, 68, 76, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, 84, 2, 2, 68, 2, 2, 89, 68, 76, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1,
      ]);
    for (e = [], t = 0; t < e.length; t++) {
      (i = e[t].pop()), (a = new Bit(...e[t]));
      (a.isGhost = i), UBOARD[0].setBit(a);
    }
    for (
      r = [
        [0, 1, 2, -1, "delete", 0, !1],
        [0, 2, 2, -1, "delete", 0, !1],
        [0, 4, 2, -1, "delete", 3.141592653589793, !1],
        [0, 5, 2, -1, "delete", 0, !1],
        [3, 1, 2, -1, "halt", 0, !1],
        [3, 2, 2, -1, "halt", 0, !1],
        [3, 4, 2, -1, "halt", 3.141592653589793, !1],
        [3, 5, 2, -1, "halt", 3.141592653589793, !1],
        [6, 1, 2, -1, "move", 0, !1],
        [6, 2, 2, -1, "move", 0, !1],
        [6, 4, 2, -1, "move", 3.141592653589793, !1],
        [6, 5, 2, -1, "move", 0, !1],
        [7, 1, 2, 0, "halt", 0, !1],
        [7, 2, 2, 0, "halt", 0, !1],
        [7, 4, 2, 0, "halt", 3.141592653589793, !1],
        [7, 5, 2, 0, "halt", 0, !1],
        [3, 7, 2, -1, "wait", 0, !1],
        [6, 8, 2, -1, "move", 3.141592653589793, !1],
        [6, 10, 2, -1, "move", 1.5707963267948966, !1],
        [6, 11, 2, -1, "move", 0, !1],
        [6, 7, 2, -1, "move", 0, !1],
        [7, 8, 2, 0, "halt", 0, !1],
        [7, 10, 2, 0, "halt", 1.5707963267948966, !1],
        [7, 11, 2, 0, "halt", 0, !1],
        [8, 1, 2, 0, "halt", 0, !1],
        [8, 2, 2, 0, "halt", 0, !1],
        [8, 4, 2, 0, "halt", 0, !1],
        [8, 5, 2, 0, "halt", 0, !1],
        [8, 10, 2, 0, "halt", 0, !1],
        [8, 11, 2, 0, "halt", 0, !1],
        [7, 7, 2, 0, "halt", 0, !1],
      ],
        t = 0;
      t < r.length;
      t++
    ) {
      (i = r[t].pop()), (s = new Qubit(...r[t]));
      (s.isGhost = i), UBOARD[0].setQubit(s);
    }
    for (
      o = [
        [2, 2, "qControl", "free", 2, 0, 0, 0, -1],
        [4, 2, "qControl", "free", 2, 0, 0, 0, -1],
        [2, 1, "qFlip", "free", 0, 1.5707963267948966, 0, 0, -1],
        [2, 1, "qFlip", "free", 0, 0.7853981633974483, 1, 0, -1],
        [4, 1, "rotate", "free", 0, 3.141592653589793, 0, 0, -1],
        [4, 1, "rotate", "free", 0, 0.7853981633974483, 1, 0, -1],
        [2, 4, "qControl", "free", 0, 0, 0, 0, -1],
        [4, 4, "qControl", "free", 0, 0, 0, 0, -1],
        [4, 5, "rotate", "free", 0, 3.141592653589793, 0, 0, -1],
        [4, 5, "rotate", "free", 0, 0.7853981633974483, 1, 0, -1],
        [2, 5, "qFlip", "free", 0, 1.5707963267948966, 0, 0, -1],
        [2, 5, "qFlip", "free", 0, 0.7853981633974483, 1, 0, -1],
        [0, 5, "trash", "transform", 0, 0.7853981633974483, 0, 0, -1],
        [0, 4, "trash", "transform", 0, 0.7853981633974483, 0, 0, -1],
        [0, 2, "trash", "transform", 0, 0.7853981633974483, 0, 0, -1],
        [0, 1, "trash", "transform", 0, 0.7853981633974483, 0, 0, -1],
        [6, 1, "delay", "reset", 0, 0, 0, 3, -1],
        [6, 2, "delay", "reset", 0, 0, 0, 3, -1],
        [6, 4, "delay", "reset", 0, 0, 0, 3, -1],
        [6, 5, "delay", "reset", 0, 0, 0, 3, -1],
        [8, 1, "qCreate", "free", 2, 0, 0, 0, -1],
        [8, 2, "qCreate", "free", 2, 0, 0, 0, -1],
        [8, 4, "qCreate", "free", 2, 0, 0, 0, -1],
        [8, 5, "qCreate", "free", 2, 0, 0, 0, -1],
        [7, 4, "qFlip", "free", 0, 1.5707963267948966, 0, 0, -1],
        [7, 2, "qFlip", "free", 0, 0.7853981633974483, 0, 1, -1],
        [7, 1, "qFlip", "free", 0, 0.7853981633974483, 0, 1, -1],
        [7, 5, "qFlip", "free", 0, 1.5707963267948966, 0, 1, -1],
        [3, 7, "qControl", "pretransform", 0, 0, 0, 0, -1],
        [6, 7, "delay", "reset", 0, 0, 0, 2, -1],
        [6, 8, "delay", "reset", 0, 0, 0, 5, -1],
        [7, 7, "qCreate", "free", 2, 1, 0, 0, -1],
        [7, 8, "qCreate", "free", 2, 1, 0, 0, -1],
        [0, 7, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [0, 8, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [3, 8, "qFlip", "free", 0, 0.7853981633974483, 0, 0, -1],
        [3, 8, "qFlip", "free", 0, 1.5707963267948966, 1, 0, -1],
        [3, 10, "qControl", "free", 0, 0, 0, 0, -1],
        [8, 10, "qCreate", "free", 2, 0, 0, 0, -1],
        [6, 10, "delay", "reset", 0, 0, 0, 3, -1],
        [7, 10, "qFlip", "free", 0, 0.7853981633974483, 0, 0, -1],
        [0, 10, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [0, 11, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [3, 11, "qFlip", "free", 0, 1.5707963267948966, 0, 0, -1],
        [3, 11, "qFlip", "free", 0, 0.7853981633974483, 1, 0, -1],
        [8, 11, "qCreate", "free", 2, 0, 0, 0, -1],
        [7, 11, "qFlip", "free", 0, 1.5707963267948966, 0, 1, -1],
        [6, 11, "delay", "reset", 0, 0, 0, 3, -1],
      ],
        t = 0;
      t < o.length;
      t++
    ) {
      (n = o[t].pop()), (l = new Gate(...o[t]));
      (l.counterMax = n), UBOARD[0].setGate(l);
    }
    UBOARD[1] = UBOARD[0].copy().updateOneStep();
  } else if (12 === TUTORIAL.current) {
    (TUTORIAL.title = "Handbook 13: Qubit Superpositions"),
      (TUTORIAL.info = []),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " A single $$r:qubit aligned along an axis can be equivalently represented as a weighted sum (or superposition) of qubits aligned along a different axis. The choice of axis is called the $$d:basis.",
      ),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " As an analogy, this is similar to how single color can be represented as a mixture of two other colors.",
      ),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " In game, a superposition is shown by a qubit `blinking` through states. The $$d:magnitude of each component is denoted by the dash-length of its border, while the $$d:sign is denoted by color (green +ve / purple -ve).",
      ),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " Although the $$d:global sign of a state is insignificant, the $$d:relative sign between components is significant.",
      ),
      (TUTORIAL.type = "free"),
      (TUTORIAL.timePerTick = 800),
      (TUTORIAL.grab = 0),
      (TUTORIAL.basis = OPTS.basis),
      (OPTS.basis = "natural"),
      (SCENARIO.channelsCol = [0, 0, 0, 0, 0, 0]),
      (UBOARD[0] = new Board(CANV.tutorialGates.ctx, 19, 14)),
      (UBOARD[0]._tiles = new Array(FIELD.cols * FIELD.rows).fill(-1));
    for (e = [], t = 0; t < e.length; t++) {
      (i = e[t].pop()), (a = new Bit(...e[t]));
      (a.isGhost = i), UBOARD[0].setBit(a);
    }
    for (o = [], t = 0; t < o.length; t++) {
      (n = o[t].pop()), (l = new Gate(...o[t]));
      (l.counterMax = n), UBOARD[0].setGate(l);
    }
    UBOARD[1] = UBOARD[0].copy().updateOneStep();
  } else if (13 === TUTORIAL.current) {
    (TUTORIAL.title = "Handbook 14: Entangled States"),
      (TUTORIAL.info = []),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " $$d:Entangled $$d:states can only be produced from unentangled qubits through use of $$r:quantum $$r:control gates. Entangled states of many qubits can be formed through use of multiple quantum control gates.",
      ),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " Entanglement is indicated via a translucent blob surrounding qubits. Qubits that are entangled together possess the same colored blob!",
      ),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " Entanglement is removed from any qubit that is measured; however the $$d:OTHER qubits that were entangled also change in response to the measurement result (see Wavefunction Collapse). It follows that measurements of entangled states can exhibit $$d:correlations not possible in non-entangled qubits.",
      ),
      (TUTORIAL.type = "free"),
      (TUTORIAL.timePerTick = 800),
      (TUTORIAL.grab = 0),
      (TUTORIAL.basis = OPTS.basis),
      (OPTS.basis = "natural"),
      (SCENARIO.channelsCol = [0, 0, 0, 0, 0, 0]),
      (UBOARD[0] = new Board(CANV.tutorialGates.ctx, 19, 14)),
      (UBOARD[0]._tiles = [
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, 84, 2, 62, 2, 70, 2, 89, 68, 76, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, 84, 2, 70, 2, 68, 2, 89, 68, 76, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, 84, 2, 68, 2, 62, 2, 89, 68, 76, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, 4, 2, 2, 2, 2, 2, 84, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, 3, 2, 2, 70, 2, 89, 68, 76, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, 4, 60, 2, 68, 2, 89, 68, 76, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, 3, 2, 2, 2, 2, 2, 84, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1,
      ]);
    for (e = [], t = 0; t < e.length; t++) {
      (i = e[t].pop()), (a = new Bit(...e[t]));
      (a.isGhost = i), UBOARD[0].setBit(a);
    }
    for (
      r = [
        [6, 2, 2, -1, "move", 1.5707963267948966, !1],
        [6, 4, 2, -1, "move", 0, !1],
        [6, 3, 2, -1, "move", 0, !1],
        [6, 8, 2, -1, "move", 1.5707963267948966, !1],
        [6, 9, 2, -1, "move", 0, !1],
        [7, 2, 2, 0, "halt", 1.5707963267948966, !1],
        [7, 4, 2, 0, "halt", 0, !1],
        [7, 3, 2, 0, "halt", 0, !1],
        [7, 8, 2, 0, "halt", 1.5707963267948966, !1],
        [7, 9, 2, 0, "halt", 0, !1],
        [8, 2, 2, 0, "halt", 0, !1],
        [8, 4, 2, 0, "halt", 0, !1],
        [8, 3, 2, 0, "halt", 0, !1],
        [8, 8, 2, 0, "halt", 0, !1],
        [8, 9, 2, 0, "halt", 0, !1],
      ],
        t = 0;
      t < r.length;
      t++
    ) {
      (i = r[t].pop()), (s = new Qubit(...r[t]));
      (s.isGhost = i), UBOARD[0].setQubit(s);
    }
    for (
      o = [
        [0, 4, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [0, 2, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [8, 2, "qCreate", "free", 2, 0, 0, 0, -1],
        [8, 4, "qCreate", "free", 2, 0, 0, 0, -1],
        [6, 2, "delay", "reset", 0, 0, 0, 5, -1],
        [6, 4, "delay", "reset", 0, 0, 0, 5, -1],
        [8, 3, "qCreate", "free", 2, 0, 0, 0, -1],
        [0, 3, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [6, 3, "delay", "reset", 0, 0, 0, 5, -1],
        [4, 2, "qControl", "free", 0, 0, 0, 0, -1],
        [2, 3, "qControl", "free", 0, 0, 0, 0, -1],
        [7, 2, "qFlip", "free", 0, 0.7853981633974483, 0, 0, -1],
        [4, 3, "qFlip", "free", 0, 1.5707963267948966, 0, 0, -1],
        [4, 3, "qFlip", "free", 0, 0.7853981633974483, 1, 0, -1],
        [2, 4, "qFlip", "free", 0, 1.5707963267948966, 0, 0, -1],
        [2, 4, "qFlip", "free", 0, 0.7853981633974483, 1, 0, -1],
        [4, 4, "rotate", "free", 0, 0.7853981633974483, 0, 0, -1],
        [2, 2, "rotate", "free", 0, 0.7853981633974483, 0, 0, -1],
        [7, 3, "qFlip", "free", 0, 0.7853981633974483, 0, 1, -1],
        [7, 4, "qFlip", "free", 0, 0.7853981633974483, 0, 1, -1],
        [4, 8, "qControl", "free", 0, 0, 0, 0, -1],
        [8, 8, "qCreate", "free", 2, 0, 0, 0, -1],
        [7, 8, "qFlip", "free", 0, 0.7853981633974483, 0, 0, -1],
        [6, 8, "delay", "reset", 0, 0, 0, 5, -1],
        [6, 9, "delay", "reset", 0, 0, 0, 5, -1],
        [7, 9, "qFlip", "free", 0, 0.7853981633974483, 0, 1, -1],
        [8, 9, "qCreate", "free", 2, 0, 0, 0, -1],
        [4, 9, "qFlip", "free", 0, 1.5707963267948966, 0, 0, -1],
        [4, 9, "qFlip", "free", 0, 0.7853981633974483, 1, 0, -1],
        [2, 9, "measure", "free", 0, 0.7853981633974483, 0, 0, -1],
        [7, 10, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
        [7, 7, "trash", "free", 0, 0.7853981633974483, 0, 0, -1],
      ],
        t = 0;
      t < o.length;
      t++
    ) {
      (n = o[t].pop()), (l = new Gate(...o[t]));
      (l.counterMax = n), UBOARD[0].setGate(l);
    }
    var h = new Entangled(3);
    h.setQubits([
      new Qubit(2, 11, 0, 2, "halt", 0),
      new Qubit(3, 11, 0, 2, "halt", 0),
      new Qubit(4, 11, 0, 2, "halt", 0),
    ]),
      (h.ampsComp = [0.5, 0, 0, -0.5, 0, 0.5, 0, 0.5]),
      h.computeRotAmps(),
      h.computeAllEnts(),
      UBOARD[0].setEntGroup(h),
      (UBOARD[1] = UBOARD[0].copy().updateOneStep());
  } else if (14 === TUTORIAL.current) {
    SVG.tutorialB.activate(),
      (SVG.tutorialB.svg.style.zIndex = "31"),
      (TUTORIAL.title = "Handbook 15: State Analyzer"),
      (TUTORIAL.info = []),
      TUTORIAL.info.push(
        "The $$d:state $$d:analyzer, which appears when clicking on a qubit while the factory is paused, provides details about a qubit or entangled state including:",
      ),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " the $$d:amplitudes in each of the basis states (together with the ability to alter each qubit basis).",
      ),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " the $$d:entanglement $$d:entropy of each qubit; this is a measure of its entanglement on a scale of 0-1.",
      ),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " the $$d:expected $$d:results of a single qubit measurement in a specified basis.",
      ),
      (TUTORIAL.type = "free"),
      (TUTORIAL.timePerTick = 800),
      (TUTORIAL.grab = 0),
      (TUTORIAL.basis = OPTS.basis),
      (OPTS.basis = "natural"),
      (SCENARIO.channelsCol = [0, 0, 0, 0, 0, 0]),
      (UBOARD[0] = new Board(CANV.tutorialGates.ctx, 19, 14)),
      (UBOARD[0]._tiles = new Array(FIELD.cols * FIELD.rows).fill(-1));
    for (e = [], t = 0; t < e.length; t++) {
      (i = e[t].pop()), (a = new Bit(...e[t]));
      (a.isGhost = i), UBOARD[0].setBit(a);
    }
    for (o = [], t = 0; t < o.length; t++) {
      (n = o[t].pop()), (l = new Gate(...o[t]));
      (l.counterMax = n), UBOARD[0].setGate(l);
    }
    UBOARD[1] = UBOARD[0].copy().updateOneStep();
  } else if (15 === TUTORIAL.current) {
    SVG.tutorialB.activate(),
      (SVG.tutorialB.svg.style.zIndex = "31"),
      (TUTORIAL.title = "Handbook 16: Wavefunction Collapse"),
      (TUTORIAL.info = []),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " When a qubit from an entangled state is measured the remaining qubits collapse into a new state (that depends on the measurement outcome of the first qubit). The new state can be predicted using the state analyzer (by clicking on the $$d:orange $$d:buttons below each qubit).",
      ),
      TUTORIAL.info.push("In the examples on the left:"),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " If qubit-1 is found in state " +
          String.fromCharCode(9650) +
          " after measurement then qubit-2 will collapse into an even superposition, (" +
          String.fromCharCode(9654) +
          " + " +
          String.fromCharCode(9664) +
          ").",
      ),
      TUTORIAL.info.push(
        String.fromCharCode(8226) +
          " If qubit-1 is found in state " +
          String.fromCharCode(9660) +
          " after measurement then qubit-2 will collapse into an odd superposition, (" +
          String.fromCharCode(9654) +
          " - " +
          String.fromCharCode(9664) +
          ").",
      ),
      (TUTORIAL.type = "free"),
      (TUTORIAL.timePerTick = 800),
      (TUTORIAL.grab = 0),
      (TUTORIAL.basis = OPTS.basis),
      (OPTS.basis = "natural"),
      (SCENARIO.channelsCol = [0, 0, 0, 0, 0, 0]),
      (UBOARD[0] = new Board(CANV.tutorialGates.ctx, 19, 14)),
      (UBOARD[0]._tiles = new Array(FIELD.cols * FIELD.rows).fill(-1));
    for (e = [], t = 0; t < e.length; t++) {
      (i = e[t].pop()), (a = new Bit(...e[t]));
      (a.isGhost = i), UBOARD[0].setBit(a);
    }
    for (o = [], t = 0; t < o.length; t++) {
      (n = o[t].pop()), (l = new Gate(...o[t]));
      (l.counterMax = n), UBOARD[0].setGate(l);
    }
    UBOARD[1] = UBOARD[0].copy().updateOneStep();
  } else
    16 === TUTORIAL.current &&
      ((TUTORIAL.title = "Handbook 0: Controls Reference"),
      (TUTORIAL.info = []),
      TUTORIAL.info.push(
        "Game Controls (during construction phase):                   ---------------------------------------------------------------",
      ),
      TUTORIAL.info.push(" Select, place, interact with objects: $$d:LMB. "),
      TUTORIAL.info.push(
        " Erase objects: $$d:RMB $$d:(or $$d:`E` $$d:key $$d:then $$d:LMB). ",
      ),
      TUTORIAL.info.push(
        " Rotate gate (while placing): $$d:Mouse-scroll $$d:(or $$d:◀/► $$d:keys). ",
      ),
      TUTORIAL.info.push(
        " Toggle control-gate states: $$d:Double-click $$d:(or $$d:ALT/OPT-click).",
      ),
      TUTORIAL.info.push(
        " Copy gate(s): $$d:SHIFT+LMB $$d:(+drag $$d:to $$d:select $$d:larger $$d:region). ",
      ),
      TUTORIAL.info.push(
        " Cut gate(s): $$d:CTRL/CMD+LMB $$d:(+drag $$d:to $$d:select $$d:larger $$d:region). ",
      ),
      TUTORIAL.info.push(
        " Undo/redo last action: $$d:`Z` $$d:/ $$d:`X` $$d:keys. ",
      ),
      TUTORIAL.info.push(
        " Select last/next available gate from menu: $$d:`Q` $$d:/ $$d:`W` $$d:keys. ",
      ),
      TUTORIAL.info.push(
        " Gate hotkeys (rows 1,2,3): $$d:[1-6], $$d:SHIFT+[1-6], $$d:CTRL+[1-6].",
      ),
      TUTORIAL.info.push(" Copy factory layout to clipboard: $$d:CTRL+C. "),
      TUTORIAL.info.push(
        " Paste factory from clipboard: $$d:CTRL+V $$d:(N/A $$d:for $$d:Firefox). ",
      ),
      (TUTORIAL.type = "free"),
      (TUTORIAL.timePerTick = 800),
      (TUTORIAL.grab = 0),
      (TUTORIAL.basis = OPTS.basis),
      (OPTS.basis = "natural"),
      (SCENARIO.channelsCol = [0, 0, 0, 0, 0, 0]),
      (UBOARD[0] = new Board(CANV.tutorialGates.ctx, 19, 14)),
      (UBOARD[1] = UBOARD[0].copy().updateOneStep()));
}
