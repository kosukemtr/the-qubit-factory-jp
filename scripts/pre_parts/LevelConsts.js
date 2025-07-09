function LevelConsts(e) {
  (STATE.mode = "constructing"),
    (FIELD.tileWidth = ResetConsts.resize()),
    (FIELD.tileHeight = FIELD.tileWidth),
    (SCENARIO.journal = !1);
  var t = !1;
  if ("tut1" === e) {
    (t = !0),
      (SCENARIO.title = "T.A: Wired"),
      (SCENARIO.info = []),
      SCENARIO.info.push("• Send bits from A to D using blue wire."),
      SCENARIO.info.push("• Send qubits from B to C using red wire."),
      SCENARIO.info.push(
        "• Wires are selected via the top-right menu and placed by left-click + drag.",
      ),
      SCENARIO.info.push(
        "• Remove wires by right-click + drag or using the erasor tool (`E` key).",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, -1, 1, 1]),
      (SCENARIO.channelsCol = [2, 1, 1, 2, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(!0, [-1, -1, -1, -1, 0, 0])),
      (SCENARIO.menuGrey = [
        [0, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (var i = 0; i < 10; i++) {
      var a = Math.round(Math.random());
      SCENARIO.CINPUTS[0].push(a);
      var r = Math.floor(16 * Math.random());
      SCENARIO.QINPUTS[0].push(r);
    }
    (SCENARIO.starCond = function () {
      return !0;
    }),
      (SCENARIO.starText = "Star bonus: freebie!"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 30),
      (SCENARIO.numCorrect = 30),
      (SCENARIO.maxTicks = 9999);
  } else if ("tut2" === e) {
    (t = !0),
      (SCENARIO.title = "T.B: Gate Keeping"),
      (SCENARIO.info = []),
      SCENARIO.info.push("• Invert bits from A and send to D."),
      SCENARIO.info.push(
        "• Rotate qubits from B by -π/2 (or -90°) and send to C.",
      ),
      SCENARIO.info.push(
        "• Suitable inversion and rotation gates have been pre-placed.",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, -1, 1, 1]),
      (SCENARIO.channelsCol = [2, 1, 1, 2, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(!0, [-1, -1, -1, -1, 0, 0])),
      (SCENARIO.menuGrey = [
        [0, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.editable[99] = 2),
      (SCENARIO.editable[156] = 2),
      (SCENARIO.editable[99] = 2),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 10; i++) {
      a = Math.round(Math.random());
      SCENARIO.CINPUTS[0].push(a), SCENARIO.CINPUTS[1].push(1 - a);
      r = Math.floor(16 * Math.random());
      SCENARIO.QINPUTS[0].push(r), SCENARIO.QINPUTS[1].push((r + 12) % 16);
    }
    (SCENARIO.starCond = function () {
      return !0;
    }),
      (SCENARIO.starText = "Star bonus: freebie!"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 30),
      (SCENARIO.numCorrect = 30),
      (SCENARIO.maxTicks = 9999);
  } else if ("tut3" === e) {
    (t = !0),
      (SCENARIO.title = "T.C: The Manipulator"),
      (SCENARIO.info = []),
      SCENARIO.info.push("• Send bits from A to D WITHOUT inversion."),
      SCENARIO.info.push("• Send qubits from B to C WITHOUT rotation."),
      SCENARIO.info.push("• Left-click on gates to edit their properties."),
      (SCENARIO.channelsDir = [-1, -1, -1, -1, 1, 1]),
      (SCENARIO.channelsCol = [2, 1, 1, 2, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, -1, 0, 0],
        0,
        "fixed",
      )),
      (SCENARIO.menuGrey = [
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.editable[99] = 2),
      (SCENARIO.editable[156] = 2),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 10; i++) {
      a = Math.round(Math.random());
      SCENARIO.CINPUTS[0].push(a), SCENARIO.CINPUTS[1].push(a);
      r = Math.floor(16 * Math.random());
      SCENARIO.QINPUTS[0].push(r), SCENARIO.QINPUTS[1].push(r);
    }
    (SCENARIO.starCond = function () {
      return !0;
    }),
      (SCENARIO.starText = "Star bonus: freebie!"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 30),
      (SCENARIO.numCorrect = 30),
      (SCENARIO.maxTicks = 9999);
  } else if ("tut4" === e) {
    (t = !0),
      (SCENARIO.title = "T.D: CTRL-Z"),
      (SCENARIO.info = []),
      SCENARIO.info.push("• Send bits from A to D WITHOUT inversion."),
      SCENARIO.info.push("• Send qubits from B to C WITHOUT rotation."),
      SCENARIO.info.push(
        "• Pre-existing gates cannot be edited on this level.",
      ),
      SCENARIO.info.push(
        "• Use mouse scroll or L/R arrow keys to re-orient gates before placing.",
      );
    var s = [
      55, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      75, 21, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, 1, 21, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, 1, 21, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, 1, 21, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, 1, 23, 22, 22, 22, 22, 22, 25, -1, -1, -1, -1, -1, 4, 2, 2, 2, 2, 2,
      78, -1, -1, 4, 2, 5, -1, 53, -1, -1, -1, -1, -1, 1, -1, -1, -1, -1, -1,
      -1, -1, -1, 1, -1, 63, -1, -1, -1, -1, -1, -1, -1, 1, -1, -1, -1, -1, -1,
      -1, 4, 2, 6, -1, -1, -1, 53, 24, 22, 22, 22, 22, 12, 22, 22, 22, 22, 22,
      94, 1, -1, -1, -1, 63, -1, 23, 26, -1, -1, -1, -1, 1, -1, -1, -1, -1, -1,
      21, 1, -1, -1, -1, 3, 2, 2, 2, 2, 2, 2, 2, 6, -1, -1, -1, -1, -1, 21, 1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 21, 1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 21,
      77, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      57,
    ];
    (SCENARIO.channelsDir = [-1, -1, -1, -1, 1, 1]),
      (SCENARIO.channelsCol = [2, 1, 1, 2, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, -1, 0, 0],
        0,
        "partial",
        s,
      )),
      (SCENARIO.menuGrey = [
        [1, 1, 1, 1, 0, 1],
        [1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.editable[139] = 1),
      (SCENARIO.editable[156] = 1),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 10; i++) {
      a = Math.round(Math.random());
      SCENARIO.CINPUTS[0].push(a), SCENARIO.CINPUTS[1].push(1 - a);
      r = Math.floor(16 * Math.random());
      SCENARIO.QINPUTS[0].push(r), SCENARIO.QINPUTS[1].push((r + 12) % 16);
    }
    (SCENARIO.starCond = function () {
      return !0;
    }),
      (SCENARIO.starText = "Star bonus: freebie!"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 30),
      (SCENARIO.numCorrect = 30),
      (SCENARIO.maxTicks = 9999);
  } else if ("tut5" === e) {
    (t = !0),
      (SCENARIO.title = "T.E: Wasted Potential"),
      (SCENARIO.info = []),
      SCENARIO.info.push("• Incinerate all bits and qubits."),
      SCENARIO.info.push(
        "• Wires and gates can be removed by right-click + drag or via the eraser tool (`E` key).",
      ),
      SCENARIO.info.push(
        "• Gates with GREEN tabs can connect to both blue and red wires.",
      ),
      (SCENARIO.channelsDir = [-1, -1, 1, 1, 1, 1]),
      (SCENARIO.channelsCol = [2, 1, 1, 2, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(!0, [-1, -1, -1, -1, 0, 0])),
      (SCENARIO.menuGrey = [
        [0, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.victoryCond = 1),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 10; i++) {
      a = Math.round(Math.random());
      SCENARIO.CINPUTS[0].push(a), SCENARIO.CINPUTS[1].push(1 - a);
      r = Math.floor(16 * Math.random());
      SCENARIO.QINPUTS[0].push(r), SCENARIO.QINPUTS[1].push((r + 12) % 16);
    }
    (SCENARIO.starCond = function () {
      return Helper.countGates() < 2;
    }),
      (SCENARIO.starText =
        "Star bonus: complete with a single incinerator and no other gates"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 30),
      (SCENARIO.numCorrect = 30),
      (SCENARIO.maxTicks = 9999);
  } else if ("tut6" === e) {
    (t = !0),
      (SCENARIO.title = "T.F: Making Amends"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "• The manager has prepared a contraption for you to run! Access by pressing the purple `blueprint-Z` button on the bottom-left of the console.",
      ),
      SCENARIO.info.push(
        "• The contraption has been built in the wrong spot and must be moved! Hold SHIFT then click+drag to select a region to duplicate (or hold CTRL/CMD while clicking to reposition items).",
      ),
      (SCENARIO.channelsDir = [-1, 1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [2, 0, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(!0, [-1, 0, -1, 0, 0, 0])),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 30; i++) {
      a = Math.round(Math.random());
      SCENARIO.CINPUTS[0].push(a);
    }
    for (i = 0; i < 30; i++) {
      a = SCENARIO.CINPUTS[0][i];
      i % 4 == 1
        ? SCENARIO.CINPUTS[1].push(1 - a)
        : SCENARIO.CINPUTS[1].push(a),
        i % 2 == 1 &&
          1 === SCENARIO.CINPUTS[1][i] &&
          (SCENARIO.CINPUTS[1][i - 1] = 1 - SCENARIO.CINPUTS[1][i - 1]);
    }
    (SCENARIO.starCond = function () {
      return !0;
    }),
      (SCENARIO.starText = "Star bonus: freebie!"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 30),
      (SCENARIO.numCorrect = 30),
      (SCENARIO.maxTicks = 9999);
  } else if ("class1" === e) {
    (t = !0),
      (SCENARIO.title = "CI.A: Straight Shooter"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "• Set all bits from A to the 1-state, then send to C.",
      ),
      SCENARIO.info.push(
        "• For more information about a gate press the ? icon once selected to open the corresponding handbook entry.",
      ),
      (SCENARIO.channelsDir = [-1, 1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [2, 0, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(!0, [-1, 0, -1, 0, 0, 0], 0)),
      (SCENARIO.menuGrey = [
        [0, 1, 1, 1, 0, 0],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 30; i++) {
      a = Math.round(Math.random());
      SCENARIO.CINPUTS[0].push(a), SCENARIO.CINPUTS[1].push(1);
    }
    (SCENARIO.starCond = function () {
      return TIMER.victoryTick <= 80;
    }),
      (SCENARIO.starText = "Star bonus: complete in 80 or fewer ticks"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 30),
      (SCENARIO.numCorrect = 30),
      (SCENARIO.maxTicks = 9999);
  } else if ("class2" === e) {
    (t = !0),
      (SCENARIO.title = "CI.B: Zippidty-split"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "• Combine A and B into a single stream by alternating entries (starting with an entry from A).",
      ),
      SCENARIO.info.push(
        "• Output the combined stream to C and an identical copy of the stream to D.",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, -1, 1, 1]),
      (SCENARIO.channelsCol = [2, 2, 2, 2, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, -1, 0, 0],
        0,
      )),
      (SCENARIO.menuGrey = [
        [0, 1, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 24; i++) {
      a = Math.round(Math.random());
      SCENARIO.CINPUTS[0].push(a);
      r = Math.round(Math.random());
      SCENARIO.CINPUTS[1].push(r),
        SCENARIO.CINPUTS[2].push(a),
        SCENARIO.CINPUTS[2].push(r);
    }
    (SCENARIO.starCond = function () {
      return TIMER.victoryTick <= 85;
    }),
      (SCENARIO.starText = "Star bonus: complete in 85 or fewer ticks"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 60),
      (SCENARIO.numCorrect = 60),
      (SCENARIO.maxTicks = 9999);
  } else if ("class3" === e) {
    (t = !0),
      (SCENARIO.title = "CI.C: The ol'Switch-a-roo"),
      (SCENARIO.info = []),
      SCENARIO.info.push("• For each `0` bit from A, send a bit from B to C."),
      SCENARIO.info.push("• For each `1` bit from A, send a bit from B to D."),
      SCENARIO.info.push(
        "• You may incinerate un-needed bits from A after use.",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, -1, 1, 1]),
      (SCENARIO.channelsCol = [2, 2, 2, 2, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, -1, 0, 0],
        0,
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], [], []]);
    for (i = 0; i < 44; i++) {
      a = Math.round(Math.random());
      SCENARIO.CINPUTS[0].push(a);
      r = Math.round(Math.random());
      SCENARIO.CINPUTS[1].push(r),
        0 === a ? SCENARIO.CINPUTS[2].push(r) : SCENARIO.CINPUTS[3].push(r);
    }
    (SCENARIO.starCond = function () {
      return TIMER.victoryTick <= 175;
    }),
      (SCENARIO.starText = "Star bonus: complete in 175 or fewer ticks"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 50),
      (SCENARIO.numCorrect = 50),
      (SCENARIO.maxTicks = 9999);
  } else if ("class4" === e) {
    (t = !0),
      (SCENARIO.title = "CI.D: nSync"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "• Combine A and B into a single stream by alternating entries (starting with an entry from A) and output to C.",
      ),
      SCENARIO.info.push(
        "• Note: channel B is here much slower to produce bits than channel A.",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [2, 2, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, 0, 0, 0],
        0,
      )),
      (SCENARIO.menuGrey = [
        [0, 1, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 1, 1],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], [], []]);
    for (i = 0; i < 44; i++) {
      a = Math.round(Math.random());
      SCENARIO.CINPUTS[0].push(a);
      r = Math.round(Math.random());
      SCENARIO.CINPUTS[1].push(r),
        SCENARIO.CINPUTS[2].push(a),
        SCENARIO.CINPUTS[2].push(r);
    }
    (SCENARIO.starCond = function () {
      return TIMER.victoryTick <= 125;
    }),
      (SCENARIO.starText = "Star bonus: complete in 125 or fewer ticks"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 50),
      (SCENARIO.numCorrect = 50),
      (SCENARIO.maxTicks = 9999);
  } else if ("class5" === e) {
    (t = !0),
      (SCENARIO.title = "CI.E: The Waiting game"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "• Send A to C (12 bits total), then afterwards send B to C.",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [2, 2, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, 0, 0, 0],
        0,
      )),
      (SCENARIO.menuGrey = [
        [0, 1, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 0, 1, 1, 1],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], [], []]);
    for (i = 0; i < 6; i++) {
      a = Math.round(Math.random());
      SCENARIO.CINPUTS[0].push(a), SCENARIO.CINPUTS[2].push(a);
    }
    SCENARIO.CINPUTS[2].push(1),
      SCENARIO.CINPUTS[2].push(0),
      SCENARIO.CINPUTS[2].push(1),
      SCENARIO.CINPUTS[2].push(0),
      SCENARIO.CINPUTS[2].push(1),
      SCENARIO.CINPUTS[2].push(1);
    for (i = 0; i < 6; i++) {
      a = Math.round(Math.random());
      SCENARIO.CINPUTS[1].push(a), SCENARIO.CINPUTS[2].push(a);
    }
    (SCENARIO.starCond = function () {
      return 1 === Helper.countGates("delay");
    }),
      (SCENARIO.starText = "Star bonus: use only a single delay gate."),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 24),
      (SCENARIO.numCorrect = 24),
      (SCENARIO.maxTicks = 9999);
  } else if ("class6" === e) {
    (t = !0),
      (SCENARIO.title = "CI.F: Genesis"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "• Output to C and D bits matching the requested outputs shown.",
      ),
      SCENARIO.info.push(
        "• Hint: the `creation` gate can be configured to produce different output patterns.",
      ),
      (SCENARIO.channelsDir = [1, 1, -1, -1, 1, 1]),
      (SCENARIO.channelsCol = [0, 0, 2, 2, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(!0, [0, 0, -1, -1, 0, 0], 0)),
      (SCENARIO.menuGrey = [
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], [], []]);
    for (i = 0; i < 30; i++)
      SCENARIO.CINPUTS[0].push(1),
        SCENARIO.CINPUTS[1].push(1),
        SCENARIO.CINPUTS[1].push(0);
    (SCENARIO.starCond = function () {
      return Helper.countGates(["cCreate"]) <= 1;
    }),
      (SCENARIO.starText = "Star bonus: use only a single creation gate."),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 60),
      (SCENARIO.numCorrect = 60),
      (SCENARIO.maxTicks = 9999);
  } else if ("class7" === e) {
    (t = !0),
      (SCENARIO.title = "CI.G: The Count"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "• Send the first 8 bits from A to C, and then send the rest from A to D.",
      ),
      SCENARIO.info.push(
        "• Hint: the `creation` gate can be configured to produce a finite number of outputs.",
      ),
      (SCENARIO.channelsDir = [-1, 1, -1, -1, 1, 1]),
      (SCENARIO.channelsCol = [2, 0, 2, 2, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, 0, -1, -1, 0, 0],
        0,
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], [], []]);
    for (i = 0; i < 30; i++) {
      var o = Math.round(Math.random());
      SCENARIO.CINPUTS[0].push(o);
    }
    (SCENARIO.starCond = function () {
      return RBOARD[TIMER.tick].bitList.length <= 1;
    }),
      (SCENARIO.starText = "Star bonus: finish with 1 or fewer bits in play."),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 40),
      (SCENARIO.numCorrect = 40),
      (SCENARIO.maxTicks = 9999);
  } else if ("classPuzzle1" === e) {
    (t = !0),
      (SCENARIO.title = "CII.A: Bandwidth"),
      (SCENARIO.info = []),
      SCENARIO.info.push("• Send bits from A to C and bits from B to D."),
      SCENARIO.info.push(
        "• Note: channel B is here much slower to produce bits than channel A.",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, -1, 1, 1]),
      (SCENARIO.channelsCol = [2, 2, 2, 2, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, -1, -1, -1],
        [0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0],
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 1, 0],
      ]),
      (SCENARIO.division = 2),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], [], []]);
    for (i = 0; i < 100; i++) {
      (a = Math.round(Math.random())), (r = Math.round(Math.random()));
      SCENARIO.CINPUTS[0].push(a), SCENARIO.CINPUTS[1].push(r);
    }
    (SCENARIO.starCond = function () {
      return TIMER.victoryTick <= 650;
    }),
      (SCENARIO.starText = "Star bonus: success in fewer than 650 ticks"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 200),
      (SCENARIO.numCorrect = 200),
      (SCENARIO.maxTicks = 9999);
  } else if ("classPuzzle2" === e) {
    (t = !0),
      (SCENARIO.title = "CII.B: Half Adder"),
      (SCENARIO.archive =
        "https://en.wikipedia.org/wiki/Adder_(electronics)#Half_adder"),
      (SCENARIO.info = []),
      SCENARIO.info.push("For each bit-pair from (A,B):"),
      SCENARIO.info.push("• Output their `XOR` to C:"),
      SCENARIO.info.push(
        "   (0,0)--> 0  (0,1)--> 1        (1,0)--> 1  (1,1)--> 0",
      ),
      SCENARIO.info.push("• Output their `AND` to D:"),
      SCENARIO.info.push(
        "   (0,0)--> 0  (0,1)--> 0        (1,0)--> 0  (1,1)--> 1",
      ),
      SCENARIO.info.push(
        "Hint: use bit-controls with inversion and re-zero gates.",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, -1, 1, 1]),
      (SCENARIO.channelsCol = [2, 2, 0, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !0),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, -1, 0, 0],
        0,
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], [], []]);
    for (i = 0; i < 296; i++) {
      (a = Math.round(Math.random())), (r = Math.round(Math.random()));
      SCENARIO.CINPUTS[0].push(a),
        SCENARIO.CINPUTS[1].push(r),
        SCENARIO.CINPUTS[2].push((a + r) % 2),
        SCENARIO.CINPUTS[3].push(Math.floor((a + r) / 2));
    }
    (SCENARIO.starCond = function () {
      return Helper.countGates(["switch"]) <= 2;
    }),
      (SCENARIO.starText = "Star bonus: use 2 or fewer control gates"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 200),
      (SCENARIO.numCorrect = 200),
      (SCENARIO.maxTicks = 9999);
  } else if ("classPuzzle3" === e) {
    (t = !0),
      (SCENARIO.title = "CIII.B: AND Frugality"),
      (SCENARIO.info = []),
      SCENARIO.info.push("• Output to D the logical AND of A with B:"),
      SCENARIO.info.push(
        "   (0,0)--> 0  (0,1)--> 0        (1,0)--> 0  (1,1)--> 1",
      ),
      SCENARIO.info.push(
        "• Due to a critical shortage, `re-zero` gates are currently unavailable.",
      ),
      (SCENARIO.channelsDir = [-1, -1, 1, -1, 1, 1]),
      (SCENARIO.channelsCol = [2, 2, 0, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !0),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, 0, -1, 0, 0],
        0,
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], [], []]);
    for (i = 0; i < 100; i++) {
      (a = Math.round(Math.random())), (r = Math.round(Math.random()));
      SCENARIO.CINPUTS[0].push(a),
        SCENARIO.CINPUTS[1].push(r),
        SCENARIO.CINPUTS[3].push(Math.floor((a + r) / 2));
    }
    (SCENARIO.starCond = function () {
      return 0 === Helper.countGates(["delay"]);
    }),
      (SCENARIO.starText = "Star bonus: don't use any delay gates"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 100),
      (SCENARIO.numCorrect = 100),
      (SCENARIO.maxTicks = 9999);
  } else if ("classPuzzle3B" === e) {
    (t = !0),
      (SCENARIO.title = "CIII.C: XOR Frugality"),
      (SCENARIO.info = []),
      SCENARIO.info.push("• Output to D the logical XOR of A with B:"),
      SCENARIO.info.push(
        "   (0,0)--> 0  (0,1)--> 1        (1,0)--> 1  (1,1)--> 0",
      ),
      SCENARIO.info.push(
        "• Due to a critical shortage, `invert` gates are currently unavailable.",
      ),
      (SCENARIO.channelsDir = [-1, -1, 1, -1, 1, 1]),
      (SCENARIO.channelsCol = [2, 2, 0, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !0),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, 0, -1, 0, 0],
        0,
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 1, 0],
        [1, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], [], []]);
    for (i = 0; i < 100; i++) {
      (a = Math.round(Math.random())), (r = Math.round(Math.random()));
      SCENARIO.CINPUTS[0].push(a),
        SCENARIO.CINPUTS[1].push(r),
        SCENARIO.CINPUTS[3].push((a + r) % 2);
    }
    (SCENARIO.starCond = function () {
      return 0 === Helper.countGates(["cCreate"]);
    }),
      (SCENARIO.starText = "Star bonus: don't use any creation gates"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 100),
      (SCENARIO.numCorrect = 100),
      (SCENARIO.maxTicks = 9999);
  } else if ("classPuzzle4" === e) {
    (t = !0),
      (SCENARIO.title = "CII.C: Memory"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "• For each bit from input stream A: output a `0` to C if it matches the previous bit in the stream, else output a `1` to C if they differ.",
      ),
      SCENARIO.info.push(
        "• Assume that the memory is initialized in the `0` state.",
      ),
      (SCENARIO.channelsDir = [-1, 1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [2, 0, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !0),
      (SCENARIO.editable = BoardData.makeEditable(!0, [-1, 0, -1, 0, 0, 0], 0)),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]),
      SCENARIO.CINPUTS[0].push(0),
      SCENARIO.CINPUTS[1].push(0);
    for (i = 0; i < 50; i++) {
      var n = SCENARIO.CINPUTS[0].length;
      (a = SCENARIO.CINPUTS[0][n - 1]), (r = Math.round(Math.random()));
      SCENARIO.CINPUTS[0].push(r),
        a === r ? SCENARIO.CINPUTS[1].push(0) : SCENARIO.CINPUTS[1].push(1);
    }
    (SCENARIO.starCond = function () {
      return TIMER.victoryTick <= 400;
    }),
      (SCENARIO.starText = "Star bonus: success in fewer than 400 ticks"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 50),
      (SCENARIO.numCorrect = 50),
      (SCENARIO.maxTicks = 9999);
  } else if ("classPuzzle5" === e) {
    (t = !0),
      (SCENARIO.title = "CII.D: Ternary"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "• Output every THIRD bit from A to D, and output the rest to C.",
      ),
      (SCENARIO.channelsDir = [-1, 1, -1, -1, 1, 1]),
      (SCENARIO.channelsCol = [2, 0, 2, 2, 0, 0]),
      (SCENARIO.hasEntanglers = !0),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, 0, -1, -1, 0, 0],
        0,
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 50; i++) {
      (a = Math.round(Math.random())), (r = Math.round(Math.random()));
      var l = Math.round(Math.random());
      SCENARIO.CINPUTS[0].push(a),
        SCENARIO.CINPUTS[0].push(r),
        SCENARIO.CINPUTS[0].push(l),
        SCENARIO.CINPUTS[1].push(a),
        SCENARIO.CINPUTS[1].push(r),
        SCENARIO.CINPUTS[2].push(l);
    }
    (SCENARIO.starCond = function () {
      return 0 === Helper.countGates("trash");
    }),
      (SCENARIO.starText = "Star bonus: don't use any incinerators."),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 60),
      (SCENARIO.numCorrect = 60),
      (SCENARIO.maxTicks = 9999);
  } else if ("classPuzzle6" === e) {
    (t = !0),
      (SCENARIO.title = "CII.E: Repetition"),
      (SCENARIO.archive = "https://en.wikipedia.org/wiki/Repetition_code"),
      (SCENARIO.info = []),
      SCENARIO.info.push("• Send A to C."),
      SCENARIO.info.push(
        "• The channels across the board each have a 20% chance of flipping bits that pass through.",
      ),
      (SCENARIO.channelsDir = [-1, 1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [2, 0, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, 0, -1, 0, 0, 0],
        0,
        "correctionC",
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.device = 8),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 500; i++) {
      a = Math.round(Math.random());
      SCENARIO.CINPUTS[0].push(a);
    }
    (SCENARIO.starCond = function () {
      return RBOARD[TIMER.tick].success >= 480;
    }),
      (SCENARIO.starText = "Star bonus: get 480 or more correct."),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 500),
      (SCENARIO.numCorrect = 440),
      (SCENARIO.maxTicks = 9999);
  } else if ("classPuzzle7" === e) {
    (t = !0),
      (SCENARIO.title = "CII.F: Swap Meet"),
      (SCENARIO.info = []),
      SCENARIO.info.push("• Send bits from A to D and send bits from B to C."),
      SCENARIO.info.push(
        "• Temporary safety regulations prevent direct wire crossings.",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, -1, 1, 1]),
      (SCENARIO.channelsCol = [2, 2, 2, 2, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, -1, 0, 0],
        0,
        "canal",
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 1, 0],
      ]),
      (SCENARIO.division = 8),
      (SCENARIO.scoreHeightRaw = 5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 100; i++) {
      var h = Math.floor(2 * Math.random());
      SCENARIO.CINPUTS[0].push(h);
      r = Math.floor(2 * Math.random());
      SCENARIO.CINPUTS[1].push(r);
    }
    (SCENARIO.starCond = function () {
      return Helper.countGates(["switch"]) <= 3;
    }),
      (SCENARIO.starText = "Star bonus: use 3 or  fewer control gates"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 100),
      (SCENARIO.numCorrect = 100),
      (SCENARIO.maxTicks = 9999);
  } else if ("classPuzzle8" === e)
    (t = !0),
      (SCENARIO.title = "CIII.A: Strict Equality"),
      (SCENARIO.info = []),
      SCENARIO.info.push("• Inputs A and B both contain a sequence of 8 bits."),
      SCENARIO.info.push(
        "• Output a `1` if the sequences from A and B are identical, else output a `0`.",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [2, 2, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, 0, 0, 0],
        0,
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.device = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]),
      (SCENARIO.starCond = function () {
        return 0 === Helper.countGates(["delay"]);
      }),
      (SCENARIO.starText = "Star bonus: don't use any delay gates"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 1),
      (SCENARIO.numCorrect = 1),
      (SCENARIO.maxTicks = 9999),
      (SCENARIO.repetitions = 10),
      (SCENARIO.successRep = 10),
      (SCENARIO.currentRep = 1),
      (SCENARIO.correctReps = 0);
  else if ("classPuzzle9" === e)
    (t = !0),
      (SCENARIO.title = "CIII.D: Haystack"),
      (SCENARIO.info = []),
      SCENARIO.info.push("• Input A contains a total of 10 bits."),
      SCENARIO.info.push(
        "• If the input contains a sequence of 4 or more `1` in a row then output a `1`, else output a `0`.",
      ),
      (SCENARIO.channelsDir = [-1, 1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [2, 0, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(!0, [-1, 0, -1, 0, 0, 0], 0)),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.device = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]),
      (SCENARIO.starCond = function () {
        return Helper.countGates(["switch"]) <= 5;
      }),
      (SCENARIO.starText = "Star bonus: use 5 or  fewer control gates"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 1),
      (SCENARIO.numCorrect = 1),
      (SCENARIO.maxTicks = 9999),
      (SCENARIO.repetitions = 10),
      (SCENARIO.successRep = 10),
      (SCENARIO.currentRep = 1),
      (SCENARIO.correctReps = 0);
  else if ("vaziraniClassic" === e)
    (t = !0),
      (SCENARIO.title = "CII.G: Quality Control"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "• Devices take as input three control bits (top channels) and a target bit (bottom).",
      ),
      SCENARIO.info.push(
        "• From bottom-to-top control channels: output a `1` if the channel implements a controlled inversion on the target bit. Output a `0` if the channel does not effect the target bit.",
      ),
      (SCENARIO.channelsDir = [1, 1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [0, 0, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [0, 0, -1, 0, 0, 0],
        0,
        "deviceA",
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.device = 1),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]),
      (SCENARIO.starCond = function () {
        return !0;
      }),
      (SCENARIO.starText = "Star bonus: freebie!"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 3),
      (SCENARIO.numCorrect = 3),
      (SCENARIO.maxTicks = 9999),
      (SCENARIO.repetitions = 10),
      (SCENARIO.successRep = 10),
      (SCENARIO.currentRep = 1),
      (SCENARIO.correctReps = 0);
  else if ("quant1" === e) {
    (t = !0),
      (SCENARIO.title = "QI.A: Inversion"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "▲ Access the journal notes   | via the yellow `J` button  | for additional level clues | and advice.",
      ),
      SCENARIO.info.push(
        "• Send A to C and send B to D after inverting the tranformations enacted on them.",
      ),
      (SCENARIO.journal = !0),
      (SCENARIO.channelsDir = [-1, -1, -1, -1, 1, 1]),
      (SCENARIO.channelsCol = [1, 1, 1, 1, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, -1, 0, 0],
        0,
        "inversion",
      )),
      (SCENARIO.menuGrey = [
        [1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 0, 0],
        [1, 1, 1, 1, 1, 1],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.device = 10),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 100; i++) {
      (r = Math.floor(16 * Math.random())),
        (l = Math.floor(16 * Math.random()));
      SCENARIO.QINPUTS[0].push(r), SCENARIO.QINPUTS[1].push(l);
    }
    (SCENARIO.starCond = function () {
      return Helper.countGates() <= 8;
    }),
      (SCENARIO.starText = "Star bonus: use only two gates."),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 100),
      (SCENARIO.numCorrect = 100),
      (SCENARIO.maxTicks = 9999);
  } else if ("quant2" === e) {
    (t = !0),
      (SCENARIO.title = "QI.B: Wires Crossed"),
      (SCENARIO.info = []),
      SCENARIO.info.push("• Send bits from A to C."),
      SCENARIO.info.push(
        "• Send qubits (guaranteed to be either state ◀ or ▶) from B to D.",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, -1, 1, 1]),
      (SCENARIO.channelsCol = [2, 1, 2, 1, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, -1, 0, 0],
        0,
        "cross",
      )),
      (SCENARIO.menuGrey = [
        [0, 1, 1, 1, 1, 1],
        [0, 1, 1, 0, 1, 1],
        [1, 1, 1, 1, 0, 0],
      ]),
      (SCENARIO.division = 6),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 100; i++) {
      (r = Math.round(Math.random())), (l = 4 + 8 * Math.round(Math.random()));
      SCENARIO.CINPUTS[0].push(r), SCENARIO.QINPUTS[0].push(l);
    }
    (SCENARIO.starCond = function () {
      return TIMER.victoryTick <= 130;
    }),
      (SCENARIO.starText = "Star bonus: success in fewer than 130 ticks"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 100),
      (SCENARIO.numCorrect = 100),
      (SCENARIO.maxTicks = 9999);
  } else if ("quant3A" === e)
    (t = !0),
      (SCENARIO.title = "QI.C: Dice Roll"),
      (SCENARIO.archive =
        "https://en.wikipedia.org/wiki/Quantum_logic_gate#Measurement"),
      (SCENARIO.info = []),
      SCENARIO.info.push("Adjust the measurement gates such that:"),
      SCENARIO.info.push("• 69% (±3%) of outputs to C are in the `1` state."),
      SCENARIO.info.push("• 75% (±3%) of outputs to D are in the `1` state."),
      SCENARIO.info.push(
        "Hint: use the state analyzer (click on a qubit while constructing or while factory is paused) to examine measurement outcome probs.",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, -1, 1, 1]),
      (SCENARIO.channelsCol = [1, 1, 2, 2, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, -1, 0, 0],
        0,
        "fixed",
      )),
      (SCENARIO.menuGrey = [
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.editable[104] = 2),
      (SCENARIO.editable[161] = 2),
      (SCENARIO.editable[164] = 2),
      (SCENARIO.editable[202] = 2),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]),
      (SCENARIO.starCond = function () {
        return !0;
      }),
      (SCENARIO.starText = "Star bonus: freebie!"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 2e3),
      (SCENARIO.numCorrect = 2e3),
      (SCENARIO.maxTicks = 9999),
      (SCENARIO.victoryCond = 2),
      (SCENARIO.outputC = [66, 72]),
      (SCENARIO.outputD = [72, 78]);
  else if ("quant3" === e) {
    (t = !0),
      (SCENARIO.title = "QI.D: Lossy"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "• Send A to C. Qubits in A start in either state ▲ or ▶.",
      ),
      SCENARIO.info.push(
        "• Correct transfer of all qubits is not possible; just do as well as you can!",
      ),
      (SCENARIO.journal = !0),
      (SCENARIO.channelsDir = [-1, 1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [1, 0, 1, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, 0, -1, 0, 0, 0],
        (partition = [0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0]),
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 2),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 300; i++) {
      l = 4 * Math.round(Math.random());
      SCENARIO.QINPUTS[0].push(l);
    }
    (SCENARIO.starCond = function () {
      return 0 === Helper.countGates(["rotate", "qFlip"]);
    }),
      (SCENARIO.starText = "Star bonus: don't use any rotate or flip gates."),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 300),
      (SCENARIO.numCorrect = 240),
      (SCENARIO.maxTicks = 9999);
  } else if ("quant4" === e) {
    (t = !0),
      (SCENARIO.title = "QI.E: Straight Shooter II"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "• Set all qubits from A to state ▲ and then output to C.",
      ),
      SCENARIO.info.push(
        "• Hint: recall that a measurement will output qubits either aligned or anti-aligned with the measurement axis.",
      ),
      (SCENARIO.channelsDir = [-1, 1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [1, 0, 1, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(!0, [-1, 0, -1, 0, 0, 0], 0)),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 50; i++) {
      l = Math.floor(16 * Math.random());
      SCENARIO.QINPUTS[0].push(l), SCENARIO.QINPUTS[1].push(0);
    }
    (SCENARIO.starCond = function () {
      return TIMER.victoryTick <= 250;
    }),
      (SCENARIO.starText = "Star bonus: success in 250 or fewer ticks"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 50),
      (SCENARIO.numCorrect = 50),
      (SCENARIO.maxTicks = 9999);
  } else if ("quant5" === e) {
    (t = !0),
      (SCENARIO.title = "QI.F: Quantum Control"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "• Output to C qubits with rotation that is the sum of the rotations from A and B (starting from 12'o'clock).",
      ),
      SCENARIO.info.push(
        "• Input A only contains qubits in state ▲ or ▼, while B only contains state ▲ or ▶.",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [1, 1, 1, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, 0, 0, 0],
        0,
      )),
      (SCENARIO.menuGrey = [
        [1, 1, 1, 1, 1, 1],
        [0, 0, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 100; i++) {
      (r = 8 * Math.round(Math.random())), (l = 4 * Math.round(Math.random()));
      SCENARIO.QINPUTS[0].push(r),
        SCENARIO.QINPUTS[1].push(l),
        SCENARIO.QINPUTS[2].push(r + l);
    }
    (SCENARIO.starCond = function () {
      return !0;
    }),
      (SCENARIO.starText = "Star bonus: freebie!"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 100),
      (SCENARIO.numCorrect = 100),
      (SCENARIO.maxTicks = 9999);
  } else if ("quant6" === e) {
    (t = !0),
      (SCENARIO.title = "QI.G: Quantum Control II"),
      (SCENARIO.archive = "https://en.wikipedia.org/wiki/Controlled_NOT_gate"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "• Output to C qubits with rotation that is the sum of the rotations from A and B (starting from 12'o'clock).",
      ),
      SCENARIO.info.push(
        "• Input A only contains qubits in state ▲ or ▼, while B only contains state ▲ or ▶.",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [1, 1, 1, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, 0, 0, 0],
        0,
      )),
      (SCENARIO.menuGrey = [
        [1, 1, 1, 1, 1, 1],
        [0, 0, 1, 1, 0, 1],
        [1, 1, 1, 1, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 100; i++) {
      (r = 8 * Math.round(Math.random())), (l = 4 * Math.round(Math.random()));
      SCENARIO.QINPUTS[0].push(r),
        SCENARIO.QINPUTS[1].push(l),
        SCENARIO.QINPUTS[2].push(r + l);
    }
    (SCENARIO.starCond = function () {
      return !0;
    }),
      (SCENARIO.starText = "Star bonus: freebie!"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 100),
      (SCENARIO.numCorrect = 100),
      (SCENARIO.maxTicks = 9999);
  } else if ("quant6B" === e) {
    (t = !0),
      (SCENARIO.title = "QI.H: Superposition"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "• Qubits from A begin in the (▲,▼) basis, while those from B begin in the (◀,▶) basis.",
      ),
      SCENARIO.info.push(
        "• Transform inputs from A to match with the expected outputs at C, and inputs from B to match with the expected outputs at D.",
      ),
      SCENARIO.info.push(
        "• Hint: clicking on a qubit allows you to change its basis.",
      ),
      (SCENARIO.journal = !0),
      (SCENARIO.channelsDir = [-1, -1, -1, -1, 1, 1]),
      (SCENARIO.channelsCol = [1, 1, 1, 1, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, -1, 0, 0],
        0,
      )),
      (SCENARIO.menuGrey = [
        [1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 0, 0],
        [1, 1, 1, 1, 1, 1],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 100; i++)
      SCENARIO.QINPUTS[0].push(0), SCENARIO.QINPUTS[1].push(0);
    (SCENARIO.starCond = function () {
      return (
        Helper.countGates("qFlip") <= 3 && Helper.countGates("rotate") <= 1
      );
    }),
      (SCENARIO.starText = "Star bonus: use only one 'flip' and one 'rotate'."),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 200),
      (SCENARIO.numCorrect = 200),
      (SCENARIO.maxTicks = 9999);
  } else if ("quant7" === e) {
    (t = !0),
      (SCENARIO.title = "QII.A: Measure x1, Cut x2"),
      (SCENARIO.archive =
        "https://en.wikipedia.org/wiki/Quantum_logic_gate#The_effect_of_measurement_on_entangled_states"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "• Inputs from A and B each contain 50 qubits, which are then entangled in pairs.",
      ),
      SCENARIO.info.push("• Output to C and D each 50 qubits in the ▲ state."),
      SCENARIO.info.push(
        "• Only a single measurement gate (pre-placed) is given.",
      ),
      (SCENARIO.journal = !0),
      (SCENARIO.channelsDir = [-1, -1, -1, -1, 1, 1]),
      (FIELD.channelsDir = [...SCENARIO.channelsDir]),
      (SCENARIO.channelsCol = [1, 1, 1, 1, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, -1, 0, 0],
        0,
        "onetwo",
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 0],
        [1, 1, 1, 1, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.device = 6),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 100; i++) SCENARIO.QINPUTS[0].push(0);
    (SCENARIO.starCond = function () {
      return TIMER.victoryTick <= 250;
    }),
      (SCENARIO.starText = "Star bonus: success in 250 or fewer ticks"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 100),
      (SCENARIO.numCorrect = 100),
      (SCENARIO.maxTicks = 9999);
  } else if ("quantChallengeA" === e) {
    (t = !0),
      (SCENARIO.title = "QIII.A: Try,Try,Try Again"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "• Flip the (◀ and ▶) qubits from A and output to C.",
      ),
      SCENARIO.info.push(
        "• Methods for creating new qubits as well as qubit rotation / flip gates have been disabled.",
      ),
      (SCENARIO.journal = !0),
      (SCENARIO.channelsDir = [-1, 1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [1, 0, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !0),
      (SCENARIO.editable = BoardData.makeEditable(!0, [-1, 0, -1, 0, 0, 0], 0)),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 1],
        [0, 1, 0, 0, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 400; i++) {
      h = Math.round(Math.random());
      SCENARIO.QINPUTS[0].push(4 + 8 * h),
        SCENARIO.QINPUTS[1].push(4 + 8 * (1 - h));
    }
    (SCENARIO.starCond = function (e) {
      return 100 === e;
    }),
      (SCENARIO.starText = "Star bonus: achieve perfect success rate."),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 100),
      (SCENARIO.numCorrect = 70),
      (SCENARIO.maxTicks = 9999);
  } else if ("quantChallengeB" === e) {
    (t = !0),
      (SCENARIO.title = "QII.F: Analysis"),
      (SCENARIO.archive =
        "https://en.wikipedia.org/wiki/Quantum_logic_gate#Unitary_inversion_of_gates"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "• Undo the (hidden) unitary transforms on the qubits from A and B, then output to C and D respectively.",
      ),
      SCENARIO.info.push(
        "• Hint: try to find a controlled flip or rotate that the reduces the created qubits back to their original state ▲.",
      ),
      (SCENARIO.journal = !0),
      (SCENARIO.channelsDir = [-1, -1, -1, -1, 1, 1]),
      (SCENARIO.channelsCol = [1, 1, 1, 1, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, -1, 0, 0],
        0,
        "analysis",
      )),
      (SCENARIO.menuGrey = [
        [1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.device = 4),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 400; i++) {
      a = Math.floor(16 * Math.random());
      SCENARIO.QINPUTS[0].push(a);
      r = Math.floor(16 * Math.random());
      SCENARIO.QINPUTS[1].push(r), SCENARIO.QINPUTS[2].push(0);
    }
    (SCENARIO.starCond = function (e) {
      return !0;
    }),
      (SCENARIO.starText = "Star bonus: freebie!"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 200),
      (SCENARIO.numCorrect = 200),
      (SCENARIO.maxTicks = 9999);
  } else if ("quantChallengeC" === e) {
    (t = !0),
      (SCENARIO.title = "QII.G: Magic Mirror"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "• Send to C qubits in their ORIGINAL state as first output from A.",
      ),
      SCENARIO.info.push(
        "Hint: the action of a (free or controlled) `rotate` or `flip` gate can always be undone by another gate of the same type.",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, 1, -1, 1]),
      (SCENARIO.channelsCol = [1, 1, 1, 0, 1, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, 0, -1, 0],
        [0, 0, 0, 0, 0, 0, -1, -1, -1, 0, 0, 0, 0, 0],
        "halffrozen",
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 7),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 50; i++) {
      a = Math.floor(16 * Math.random());
      SCENARIO.QINPUTS[0].push(a);
      r = Math.floor(16 * Math.random());
      SCENARIO.QINPUTS[1].push(r);
      l = Math.floor(16 * Math.random());
      SCENARIO.QINPUTS[2].push(l);
    }
    (SCENARIO.starCond = function (e) {
      return !0;
    }),
      (SCENARIO.starText = "Star bonus: freebie!"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 50),
      (SCENARIO.numCorrect = 50),
      (SCENARIO.maxTicks = 9999);
  } else if ("quantChallengeD" === e) {
    (t = !0),
      (SCENARIO.title = "QII.H: Even Odds"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "• Qubits from α and β begin in either EVEN (a▲▲+b▼▼) or ODD (a▲▲-b▼▼) superpositions, with `a` and `b` as positive numbers.",
      ),
      SCENARIO.info.push(
        "• Output to C either `0` or `1` bits for each EVEN or ODD superposition respectively.",
      ),
      SCENARIO.info.push(
        "• Hint: try viewing the qubits in the (◀,▶) basis.",
      ),
      (SCENARIO.channelsDir = [1, 1, -1, 1, -1, -1]),
      (SCENARIO.channelsCol = [0, 0, 2, 0, 1, 1]),
      (SCENARIO.hasEntanglers = !0),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [0, 0, -1, 0, -1, -1],
        0,
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 200; i++) {
      a = Math.round(Math.random());
      SCENARIO.CINPUTS[0].push(a);
    }
    (SCENARIO.starCond = function () {
      return Helper.countGates("measure") <= 1;
    }),
      (SCENARIO.starText = "Star bonus: use only a single measure gate."),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 200),
      (SCENARIO.numCorrect = 165),
      (SCENARIO.maxTicks = 9999);
  } else if ("quantChallengeE" === e) {
    (t = !0),
      (SCENARIO.title = "QIII.B: Swap Meet II"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "• Send qubits from A to D and send qubits from B to C.",
      ),
      SCENARIO.info.push(
        "• Temporary safety regulations prevent direct wire crossings.",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, -1, 1, 1]),
      (SCENARIO.channelsCol = [1, 1, 1, 1, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, -1, 0, 0],
        0,
        "canal",
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 8),
      (SCENARIO.scoreHeightRaw = 5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 100; i++) {
      h = Math.floor(16 * Math.random());
      SCENARIO.QINPUTS[0].push(h);
      r = Math.floor(16 * Math.random());
      SCENARIO.QINPUTS[1].push(r);
    }
    (SCENARIO.starCond = function () {
      return Helper.checkFlipAlign();
    }),
      (SCENARIO.starText =
        "Star bonus: don't use flip gates with vertical or horizontal alignment."),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 100),
      (SCENARIO.numCorrect = 100),
      (SCENARIO.maxTicks = 9999);
  } else if ("quantChallengeF" === e)
    (t = !0),
      (SCENARIO.title = "QIII.C: Relay"),
      (SCENARIO.info = []),
      (SCENARIO.archive =
        "https://en.wikipedia.org/wiki/Quantum_network#Quantum_repeaters"),
      SCENARIO.info.push(
        "• A Bell pair is an even superposition of ▲▲ and ▼▼ states.",
      ),
      SCENARIO.info.push(
        "• Generate Bell pairs and output half of each to C and D.",
      ),
      (SCENARIO.journal = !0),
      (SCENARIO.channelsDir = [1, 1, -1, -1, 1, 1]),
      (SCENARIO.channelsCol = [0, 0, 1, 1, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [0, 0, -1, -1, 0, 0],
        0,
        "relay",
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 9),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]),
      (SCENARIO.starCond = function () {
        return !0;
      }),
      (SCENARIO.starText = "Star bonus: freebie!"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 50),
      (SCENARIO.numCorrect = 50),
      (SCENARIO.maxTicks = 9999);
  else if ("quantChallengeG" === e) {
    (t = !0),
      (SCENARIO.title = "H.D: Back-to-front"),
      (SCENARIO.info = []),
      SCENARIO.info.push("• For each `0` from B: output a ▼ qubit to C."),
      SCENARIO.info.push("• For each `1` from B: output a ▶ qubit to C."),
      (SCENARIO.archive = "https://en.wikipedia.org/wiki/Phase_kickback"),
      (SCENARIO.journal = !0),
      (SCENARIO.channelsDir = [-1, -1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [1, 2, 1, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, 0, 0, 0],
        0,
        "btf",
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 50; i++) {
      h = Math.round(Math.random());
      SCENARIO.CINPUTS[0].push(h),
        0 === h
          ? SCENARIO.QINPUTS[0].push(8)
          : 1 === h && SCENARIO.QINPUTS[0].push(4);
    }
    (SCENARIO.starCond = function () {
      return Helper.countGates("qFlip") <= 2;
    }),
      (SCENARIO.starText = "Star bonus: use two or fewer flip gates"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 50),
      (SCENARIO.numCorrect = 50),
      (SCENARIO.maxTicks = 9999);
  } else if ("quantErrorA" === e) {
    (t = !0),
      (SCENARIO.title = "H.C: Correction I"),
      (SCENARIO.archive =
        "https://en.wikipedia.org/wiki/Quantum_error_correction#Bit_flip_code"),
      (SCENARIO.info = []),
      SCENARIO.info.push("• Send qubits from A to C."),
      SCENARIO.info.push(
        "• The channels across the board each have a 25% chance of rotating qubits (with rotation of either 90°, 180° or 270°).",
      ),
      (SCENARIO.journal = !0),
      (SCENARIO.channelsDir = [-1, 1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [1, 0, 1, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !0),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, 0, -1, 0, 0, 0],
        0,
        "correctionB",
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.device = 5),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 1e3; i++) {
      h = Math.floor(16 * Math.random());
      SCENARIO.QINPUTS[0].push(h);
    }
    (SCENARIO.starCond = function (e) {
      return RBOARD[TIMER.tick].success >= 96;
    }),
      (SCENARIO.starText = "Star bonus: 96 or more correct outputs."),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 100),
      (SCENARIO.numCorrect = 85),
      (SCENARIO.maxTicks = 9999);
  } else if ("quantErrorB" === e) {
    (t = !0),
      (SCENARIO.title = "H.C+: Correction II"),
      (SCENARIO.info = []),
      SCENARIO.info.push("• Send qubits from A to C."),
      SCENARIO.info.push(
        "• The channels across the board rotate any qubit that passes through by a random angle.",
      ),
      SCENARIO.info.push(
        "• Qubits from α and β begin in (perfect) bell pairs.",
      ),
      (SCENARIO.channelsDir = [-1, 1, -1, 1, -1, -1]),
      (SCENARIO.channelsCol = [1, 0, 0, 0, 1, 1]),
      (SCENARIO.hasEntanglers = !0),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, 0, -1, 0, -1, -1],
        0,
        "correctionD",
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.device = 9),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 96; i++) {
      h = Math.floor(16 * Math.random());
      SCENARIO.QINPUTS[0].push(h);
    }
    (SCENARIO.starCond = function (e) {
      return RBOARD[TIMER.tick].success >= 100;
    }),
      (SCENARIO.starText = "Star bonus: perfect success rate."),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 100),
      (SCENARIO.numCorrect = 80),
      (SCENARIO.maxTicks = 9999);
  } else if ("adderB" === e) {
    (t = !0),
      (SCENARIO.title = "QII.C: Drive-by XOR"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "• Send A to C and send B to D. Send the logical-XOR of (A,B) to β:",
      ),
      SCENARIO.info.push(
        "   (▲,▲)--> ▲  (▲,▼)--> ▼        (▼,▲)--> ▼  (▼,▼)--> ▲",
      ),
      SCENARIO.info.push(
        "• Channel α contains ancilla qubits (initialised in the ▲ state) for your use.",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, -1, -1, -1]),
      (SCENARIO.channelsCol = [1, 1, 1, 1, 1, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, -1, -1, -1],
        0,
      )),
      (SCENARIO.menuGrey = [
        [1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 96; i++) {
      (a = Math.round(Math.random())), (r = Math.round(Math.random()));
      SCENARIO.QINPUTS[0].push(8 * a),
        SCENARIO.QINPUTS[1].push(8 * r),
        SCENARIO.QINPUTS[2].push(((a + r) % 2) * 8);
    }
    (SCENARIO.starCond = function () {
      return Helper.countGates("qControl") < 3;
    }),
      (SCENARIO.starText = "Star bonus: use no more than two control gates."),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 300),
      (SCENARIO.numCorrect = 300),
      (SCENARIO.maxTicks = 9999);
  } else if ("adderC" === e) {
    (t = !0),
      (SCENARIO.title = "QII.D: Drive-by AND"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "• Send A to C and send B to D. Send the logical-AND of (A,B) to β:",
      ),
      SCENARIO.info.push(
        "   (▲,▲)--> ▲  (▲,▼)--> ▲        (▼,▲)--> ▲  (▼,▼)--> ▼",
      ),
      SCENARIO.info.push(
        "• Channel α contains ancilla qubits (initialised in the ▲ state) for your use.",
      ),
      (SCENARIO.journal = !0),
      (SCENARIO.channelsDir = [-1, -1, -1, -1, -1, -1]),
      (SCENARIO.channelsCol = [1, 1, 1, 1, 1, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, -1, -1, -1],
        0,
      )),
      (SCENARIO.menuGrey = [
        [1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 96; i++) {
      (a = Math.round(Math.random())), (r = Math.round(Math.random()));
      SCENARIO.QINPUTS[0].push(8 * a),
        SCENARIO.QINPUTS[1].push(8 * r),
        SCENARIO.QINPUTS[2].push(8 * (a + r > 1.5));
    }
    (SCENARIO.starCond = function () {
      return 0 === Helper.countGates("qFlip");
    }),
      (SCENARIO.starText = "Star bonus: use no qubit flip gates."),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 300),
      (SCENARIO.numCorrect = 300),
      (SCENARIO.maxTicks = 9999);
  } else if ("measure" === e) {
    (t = !0),
      (SCENARIO.title = "QII.B: Discernment"),
      (SCENARIO.archive = "https://en.wikipedia.org/wiki/Quantum_tomography"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "• Inputs A and B contain a copy of the same set of qubits.",
      ),
      SCENARIO.info.push(
        "• Output to C a `0` for every ▲-qubit from A/B and a `1` for every ▶-qubit.",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [1, 1, 0, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !0),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, 0, 0, 0],
        0,
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 296; i++) {
      h = Math.round(Math.random());
      SCENARIO.QINPUTS[0].push(4 * h), SCENARIO.CINPUTS[0].push(h);
    }
    (SCENARIO.starCond = function () {
      return Helper.countGates("measure") <= 1;
    }),
      (SCENARIO.starText = "Star bonus: use only a single measure gate."),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 300),
      (SCENARIO.numCorrect = 270),
      (SCENARIO.maxTicks = 9999);
  } else if ("measureB" === e) {
    (t = !0),
      (SCENARIO.title = "QIII.E: Cascade"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "• Input A consists of a sequence of groups, with each group containing 4 identical qubits.",
      ),
      SCENARIO.info.push(
        "• Output to C a `0` for each group of ▲-qubits and a `1` for each group of ▶-qubits.",
      ),
      (SCENARIO.channelsDir = [-1, 1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [1, 0, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !0),
      (SCENARIO.editable = BoardData.makeEditable(!0, [-1, 0, -1, 0, 0, 0], 0)),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 400; i++) {
      h = Math.round(Math.random());
      SCENARIO.QINPUTS[0].push(4 * h),
        SCENARIO.QINPUTS[0].push(4 * h),
        SCENARIO.QINPUTS[0].push(4 * h),
        SCENARIO.QINPUTS[0].push(4 * h),
        SCENARIO.CINPUTS[0].push(h);
    }
    (SCENARIO.starCond = function () {
      return RBOARD[TIMER.tick].success >= 390;
    }),
      (SCENARIO.starText = "Star bonus: get 390 or more correct."),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 400),
      (SCENARIO.numCorrect = 370),
      (SCENARIO.maxTicks = 9999);
  } else if ("preDenseB" === e) {
    (t = !0),
      (SCENARIO.title = "H.A: Superdense?"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "Input β contains 400 random bits. For each bit `i` from β:",
      ),
      SCENARIO.info.push(
        "• if i=0, then send a bit from A to C and discard a bit from B.",
      ),
      SCENARIO.info.push(
        "• if i=1, then send a bit from B to C and discard a bit from A.",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, 1, 1, -1]),
      (SCENARIO.channelsCol = [2, 2, 2, 0, 0, 2]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, -1, 0, -1],
        [0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0],
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 2),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], [], []]);
    for (i = 0; i < 400; i++) {
      (a = Math.round(Math.random())),
        (r = Math.round(Math.random())),
        (l = Math.round(Math.random()));
      SCENARIO.CINPUTS[0].push(a),
        SCENARIO.CINPUTS[1].push(r),
        SCENARIO.CINPUTS[2].push(l),
        0 === l ? SCENARIO.CINPUTS[3].push(a) : SCENARIO.CINPUTS[3].push(r);
    }
    (SCENARIO.starCond = function (e) {
      return e >= 340;
    }),
      (SCENARIO.starText = "Star bonus: get 340 or more correct."),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 400),
      (SCENARIO.numCorrect = 325),
      (SCENARIO.maxTicks = 9999);
  } else if ("simpleDistill" === e)
    (t = !0),
      (SCENARIO.title = "QIII.D: Distillary"),
      (SCENARIO.info = []),
      (SCENARIO.archive =
        "https://en.wikipedia.org/wiki/Entanglement_distillation"),
      SCENARIO.info.push(
        "• A Bell pair is an even superposition of ▲▲ and ▼▼ states.",
      ),
      SCENARIO.info.push(
        "• Tranform the 3-qubit entangled states into a Bell pair on 2 of the qubits.",
      ),
      SCENARIO.info.push("• Output half of each Bell pair to C and to D."),
      (SCENARIO.journal = !0),
      (SCENARIO.channelsDir = [1, 1, -1, -1, 1, 1]),
      (SCENARIO.channelsCol = [0, 0, 0, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, 0, -1, -1, 0, 0],
        0,
        "simpleDistill",
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 3),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]),
      (SCENARIO.starCond = function () {
        return !0;
      }),
      (SCENARIO.starText = "Star bonus: freebie!"),
      (SCENARIO.overlayType = "standard"),
      (SCENARIO.maxTrials = 50),
      (SCENARIO.numCorrect = 50),
      (SCENARIO.maxTicks = 9999);
  else if ("dense" === e) {
    (t = !0),
      (SCENARIO.title = "H.A+: Super-dense!"),
      (SCENARIO.info = []),
      (SCENARIO.archive = "https://en.wikipedia.org/wiki/Superdense_coding"),
      SCENARIO.info.push(
        "• Send an identical copy of A into C (100 bits total).",
      ),
      SCENARIO.info.push(
        "• Send an identical copy of B into D (100 bits total).",
      ),
      SCENARIO.info.push(
        "• Only 100 qubits total can be sent across the partition.",
      ),
      SCENARIO.info.push(
        "• Qubits from α and β begin in (perfect) bell pairs.",
      ),
      (SCENARIO.journal = !0),
      (SCENARIO.channelsDir = [-1, -1, -1, -1, -1, -1]),
      (SCENARIO.channelsCol = [2, 2, 2, 2, 1, 1]),
      (SCENARIO.hasEntanglers = !0),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, -1, -1, -1],
        [0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0],
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 2),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], [], []]);
    for (i = 0; i < 296; i++) {
      (a = Math.round(Math.random())), (r = Math.round(Math.random()));
      SCENARIO.CINPUTS[0].push(a),
        SCENARIO.CINPUTS[1].push(r),
        SCENARIO.CINPUTS[0].push(a),
        SCENARIO.CINPUTS[1].push(r);
    }
    (SCENARIO.starCond = function () {
      return TIMER.victoryTick <= 1e3;
    }),
      (SCENARIO.starText = "Star bonus: success in fewer than 1000 ticks"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 200),
      (SCENARIO.numCorrect = 200),
      (SCENARIO.maxTicks = 9999);
  } else if ("teleport" === e) {
    (t = !0),
      (SCENARIO.title = "H.B: Beam me up"),
      (SCENARIO.info = []),
      (SCENARIO.archive =
        "https://en.wikipedia.org/wiki/Quantum_teleportation"),
      SCENARIO.info.push("• Output an identical copy of A into C."),
      SCENARIO.info.push(
        "• Only classical bits can be sent across the partition.",
      ),
      SCENARIO.info.push(
        "• Qubits from α and β begin in (perfect) bell pairs.",
      ),
      (SCENARIO.journal = !0),
      (SCENARIO.channelsDir = [-1, 1, -1, 1, -1, -1]),
      (SCENARIO.channelsCol = [1, 0, 0, 0, 1, 1]),
      (SCENARIO.hasEntanglers = !0),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, 0, -1, 0, -1, -1],
        [0, 0, 0, 0, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0],
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 1),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 96; i++) {
      h = Math.floor(16 * Math.random());
      SCENARIO.QINPUTS[0].push(h);
    }
    (SCENARIO.starCond = function () {
      return TIMER.victoryTick <= 500;
    }),
      (SCENARIO.starText = "Star bonus: success in fewer than 500 ticks"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 100),
      (SCENARIO.numCorrect = 100),
      (SCENARIO.maxTicks = 9999);
  } else if ("distill" === e) {
    (t = !0),
      (SCENARIO.title = "H.B+: Beam me up II"),
      (SCENARIO.info = []),
      SCENARIO.info.push("• Output an identical copy of A into C."),
      SCENARIO.info.push(
        "• Only classical bits can be sent across the partition.",
      ),
      SCENARIO.info.push(
        "• Qubits in α and β begin in (weakly) entangled pairs.",
      ),
      (SCENARIO.journal = !0),
      (SCENARIO.channelsDir = [-1, 1, -1, 1, -1, -1]),
      (SCENARIO.channelsCol = [1, 0, 0, 0, 1, 1]),
      (SCENARIO.hasEntanglers = !0),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, 0, -1, 0, -1, -1],
        [0, 0, 0, 0, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0],
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 1),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 96; i++) {
      h = Math.floor(16 * Math.random());
      SCENARIO.QINPUTS[0].push(h);
    }
    (SCENARIO.starCond = function () {
      return 20 == RBOARD[TIMER.tick].success;
    }),
      (SCENARIO.starText = "Star bonus: achieve perfect success rate"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 20),
      (SCENARIO.numCorrect = 15),
      (SCENARIO.maxTicks = 9999);
  } else if ("vaziraniQuantum" === e)
    (t = !0),
      (SCENARIO.title = "H.D+: Quality Control II"),
      (SCENARIO.archive =
        "https://en.wikipedia.org/wiki/Bernstein%E2%80%93Vazirani_algorithm"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "• From bottom-to-top on control channels: output a `1` if the channel implements a controlled flip on the target qubit. Output a `0` if the channel does not effect the target qubit.",
      ),
      SCENARIO.info.push(
        "• Each device can only be tested with a single input.",
      ),
      (SCENARIO.channelsDir = [1, 1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [0, 0, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [0, 0, -1, 0, 0, 0],
        0,
        "deviceA",
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.device = 1),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]),
      (SCENARIO.starCond = function () {
        return !0;
      }),
      (SCENARIO.starText = "Star bonus: freebie!"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 3),
      (SCENARIO.numCorrect = 3),
      (SCENARIO.maxTicks = 9999),
      (SCENARIO.repetitions = 10),
      (SCENARIO.successRep = 10),
      (SCENARIO.currentRep = 1),
      (SCENARIO.correctReps = 0);
  else if ("quantumAdv1" === e)
    (t = !0),
      (SCENARIO.title = "H.E: Correlation"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "• Inputs from A/B are either entangled states (▲▲+▼▼) or they are in an unentangled state.",
      ),
      SCENARIO.info.push(
        "• Output a `0` for an entangled state or a `1` for an unentangled state.",
      ),
      SCENARIO.info.push(
        "• You are give 10 identical copies of each input state.",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [1, 1, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, 0, 0, 0],
        0,
        "threebox",
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 10),
      (SCENARIO.device = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]),
      (SCENARIO.starCond = function () {
        return SCENARIO.correctReps >= 30;
      }),
      (SCENARIO.starText = "Star bonus: 30 or more correct."),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 1),
      (SCENARIO.numCorrect = 1),
      (SCENARIO.maxTicks = 9999),
      (SCENARIO.repetitions = 32),
      (SCENARIO.successRep = 26),
      (SCENARIO.currentRep = 1),
      (SCENARIO.correctReps = 0);
  else if ("quantumAdv2" === e)
    (t = !0),
      (SCENARIO.title = "H.E+: Correlation II"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "• Inputs from A/B are either entangled states, (▲▲+▼▼) or (▲▼-▼▲), or they are in an (unknown) product state.",
      ),
      SCENARIO.info.push(
        "• Output a `0` for an entangled state or a `1` for a product state.",
      ),
      SCENARIO.info.push(
        "• You are give 11 identical copies of each input state.",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [1, 1, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, 0, 0, 0],
        0,
        "threebox",
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 10),
      (SCENARIO.device = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]),
      (SCENARIO.starCond = function () {
        return SCENARIO.correctReps >= 30;
      }),
      (SCENARIO.starText = "Star bonus: 30 or more correct."),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 1),
      (SCENARIO.numCorrect = 1),
      (SCENARIO.maxTicks = 9999),
      (SCENARIO.repetitions = 32),
      (SCENARIO.successRep = 26),
      (SCENARIO.currentRep = 1),
      (SCENARIO.correctReps = 0);
  else if ("quantumAdv3" === e)
    (t = !0),
      (SCENARIO.title = "QIII.G: Statistics"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "• Inputs from A/B are either in an unknown maximally entangled state or they are in product state (of ▲▲, ▶▶, ▼▼ or ◀◀ qubits).",
      ),
      SCENARIO.info.push(
        "• Output a `0` for an entangled state or a `1` for a product state.",
      ),
      SCENARIO.info.push(
        "• You are give 12 identical copies of each input state.",
      ),
      (SCENARIO.journal = !0),
      (SCENARIO.channelsDir = [-1, -1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [1, 1, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, 0, 0, 0],
        0,
        "cornerbox",
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 11),
      (SCENARIO.device = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]),
      (SCENARIO.starCond = function () {
        return SCENARIO.correctReps >= 46;
      }),
      (SCENARIO.starText = "Star bonus: 46 or more correct."),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 1),
      (SCENARIO.numCorrect = 1),
      (SCENARIO.maxTicks = 9999),
      (SCENARIO.repetitions = 50),
      (SCENARIO.successRep = 38),
      (SCENARIO.currentRep = 1),
      (SCENARIO.correctReps = 0);
  else if ("entChallengeA" === e) {
    (t = !0),
      (SCENARIO.title = "QII.E: Lock and Key"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "• The device measures a pair of qubits on either the horizontal or vertical axis (randomly chosen), then returns `0` if both measurements produce the same result.",
      ),
      SCENARIO.info.push(
        "• Construct a two-qubit input for the device such that the output is always a `0`.",
      ),
      (SCENARIO.journal = !0),
      (SCENARIO.channelsDir = [1, 1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [0, 0, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [0, 0, 0, 0, 0, 0],
        0,
        "key",
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 12),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 400; i++) SCENARIO.CINPUTS[0].push(0);
    (SCENARIO.starCond = function (e) {
      return 0 === Helper.countGates(["rotate"]);
    }),
      (SCENARIO.starText = "Star bonus: use no rotate gates."),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 100),
      (SCENARIO.numCorrect = 100),
      (SCENARIO.maxTicks = 9999);
  } else if ("entChallengeB" === e)
    (t = !0),
      (SCENARIO.title = "H.F: GHZ"),
      (SCENARIO.info = []),
      (SCENARIO.archive =
        "https://en.wikipedia.org/wiki/Greenberger%E2%80%93Horne%E2%80%93Zeilinger_state"),
      SCENARIO.info.push("You are initially given (8 copies of) either:"),
      SCENARIO.info.push("• a GHZ state, (▲▲▲▲+▼▼▼▼)."),
      SCENARIO.info.push("• a product of two bell-pair states."),
      SCENARIO.info.push("• a product state of four qubits."),
      SCENARIO.info.push(
        "Output a `0` for a GHZ state else output a `1` for all other states.",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [1, 1, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, 0, 0, 0],
        0,
        "GHZ",
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 13),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]),
      (SCENARIO.starCond = function () {
        return SCENARIO.correctReps >= 30;
      }),
      (SCENARIO.starText = "Star bonus: achieve perfect success rate."),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 1),
      (SCENARIO.numCorrect = 1),
      (SCENARIO.maxTicks = 9999),
      (SCENARIO.repetitions = 30),
      (SCENARIO.successRep = 25),
      (SCENARIO.currentRep = 1),
      (SCENARIO.correctReps = 0);
  else if ("entChallengeC" === e)
    (t = !0),
      (SCENARIO.title = "H.F+: GHZ II"),
      (SCENARIO.info = []),
      SCENARIO.info.push("You are initially given (8 copies of) either:"),
      SCENARIO.info.push("• a GHZ state, (▲▲▲▲+▼▼▼▼)."),
      SCENARIO.info.push(
        "• a product of two bell-pair states or a product state of four qubits.",
      ),
      SCENARIO.info.push(
        "Output a `0` for a GHZ state else output a `1` for all other states.",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [1, 1, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, 0, 0, 0],
        0,
        "GHZ",
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 13),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]),
      (SCENARIO.starCond = function () {
        return SCENARIO.correctReps >= 45;
      }),
      (SCENARIO.starText = "Star bonus: get at least 45 correct!"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 1),
      (SCENARIO.numCorrect = 1),
      (SCENARIO.maxTicks = 9999),
      (SCENARIO.repetitions = 50),
      (SCENARIO.successRep = 42),
      (SCENARIO.currentRep = 1),
      (SCENARIO.correctReps = 0);
  else if ("extraA" === e) {
    (t = !0),
      (SCENARIO.title = "Clone-a-saurus"),
      (SCENARIO.info = []),
      (SCENARIO.archive = "https://en.wikipedia.org/wiki/No-cloning_theorem"),
      SCENARIO.info.push(
        "• Input A consists of a sequence of groups, with each group containing 4 identical qubits in ▲, ▶, ▼ or ◀ state.",
      ),
      SCENARIO.info.push(
        "• Output to each C and D an identical copy of the inputs from A.",
      ),
      (SCENARIO.channelsDir = [-1, 1, -1, -1, 1, 1]),
      (SCENARIO.channelsCol = [1, 0, 1, 1, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, 0, -1, -1, 0, 0],
        0,
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 500; i++) {
      h = Math.floor(4 * Math.random());
      SCENARIO.QINPUTS[0].push(4 * h),
        SCENARIO.QINPUTS[0].push(4 * h),
        SCENARIO.QINPUTS[0].push(4 * h),
        SCENARIO.QINPUTS[0].push(4 * h);
    }
    (SCENARIO.starCond = function (e) {
      return e >= 900;
    }),
      (SCENARIO.starText = "Star bonus: get 900 or more correct."),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 1e3),
      (SCENARIO.numCorrect = 750),
      (SCENARIO.maxTicks = 9999);
  } else if ("extraB" === e)
    (t = !0),
      (SCENARIO.title = "Refinery"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "• Channels α and β contain 500 weakly entangled qubit pairs.",
      ),
      SCENARIO.info.push(
        "• Output to A/C strongly entangled qubit pairs (Ent > 0.85 in the qubit analyzer).",
      ),
      SCENARIO.info.push(
        "• The scenario ends when 2 or fewer qubits remain on the board.",
      ),
      (SCENARIO.channelsDir = [-1, 1, -1, 1, -1, -11]),
      (SCENARIO.channelsCol = [0, 0, 0, 0, 1, 1]),
      (SCENARIO.hasEntanglers = !0),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, 0, -1, 0, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.device = 11),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.victoryCond = 3),
      (SCENARIO.starCond = function (e) {
        return e >= 50;
      }),
      (SCENARIO.starText = "Star bonus: 50 or more entangled pairs."),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 9999),
      (SCENARIO.numCorrect = 30),
      (SCENARIO.maxTicks = 9999);
  else if ("extraC" === e) {
    (t = !0),
      (SCENARIO.title = "Addition++"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "• Inputs A and B each represent an integer, ranged 0-15, encoded as a 4-bit binary string (from least to most significant bit). ",
      ),
      SCENARIO.info.push(
        "• Output to C the product of the integers from A and B, encoded as an 8-bit binary string (from least to most significant bit).",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [2, 2, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, 0, 0, 0],
        0,
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (a = [], r = [], i = 0; i < 4; i++)
      a.push(Math.round(Math.random())),
        r.push(Math.round(Math.random())),
        SCENARIO.CINPUTS[0].push(a[i]),
        SCENARIO.CINPUTS[1].push(r[i]);
    var d = a[0] + 2 * a[1] + 4 * a[2] + 8 * a[3],
      u = r[0] + 2 * r[1] + 4 * r[2] + 8 * r[3],
      c = (d * u).toString(2),
      I = c.length;
    SCENARIO.CINPUTS[2] = [0, 0, 0, 0, 0, 0, 0, 0];
    for (i = 0; i < I; i++) SCENARIO.CINPUTS[2][i] = parseInt(c[I - i - 1]);
    (SCENARIO.starCond = function () {
      return FIELD.cleanTiles >= (FIELD.cols - 2) * (FIELD.rows - 2) * 0.4;
    }),
      (SCENARIO.starText = "Star bonus: use <60% of floor space (current:"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 8),
      (SCENARIO.numCorrect = 8),
      (SCENARIO.maxTicks = 9999),
      (SCENARIO.repetitions = 16),
      (SCENARIO.successRep = 16),
      (SCENARIO.currentRep = 1),
      (SCENARIO.correctReps = 0),
      (SCENARIO.victoryCond = 4);
  } else if ("binaryencode" === e)
    (t = !0),
      (SCENARIO.title = "CIII.E: Unary <<< Binary"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "• Input A contains a string of N bits in state `1` (with 4 < N < 16) followed by a `0` bit.",
      ),
      SCENARIO.info.push(
        "• Output to C the integer N encoded as a 4-bit binary string (from least to most significant bit).",
      ),
      (SCENARIO.channelsDir = [-1, 1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [2, 0, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, 0, 0, 0],
        0,
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]),
      (SCENARIO.starCond = function () {
        return FIELD.cleanTiles >= (FIELD.cols - 2) * (FIELD.rows - 2) * 0.6;
      }),
      (SCENARIO.starText = "Star bonus: use <40% of floor space (current:"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 4),
      (SCENARIO.numCorrect = 4),
      (SCENARIO.maxTicks = 9999),
      (SCENARIO.repetitions = 10),
      (SCENARIO.successRep = 10),
      (SCENARIO.currentRep = 1),
      (SCENARIO.correctReps = 0),
      (SCENARIO.victoryCond = 4);
  else if ("adder" === e) {
    (t = !0),
      (SCENARIO.title = "CIII.F: Calculon"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "• Inputs A and B each contain a 64-bit string representing an integer in binary (from least to most significant bit).",
      ),
      SCENARIO.info.push(
        "• Output to C the 64-bit string corresponding to the sum of the input integers (from least to most significant bit).",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [2, 2, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, 0, 0, 0],
        0,
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    var E = 0;
    for (i = 0; i < 58; i++) {
      if (57 === i) (a = 0), (r = 0), (l = (a + r + E) % 2);
      else
        (a = Math.round(Math.random())),
          (r = Math.round(Math.random())),
          (l = (a + r + E) % 2);
      SCENARIO.CINPUTS[0].push(a),
        SCENARIO.CINPUTS[1].push(r),
        SCENARIO.CINPUTS[2].push(l),
        (E = Math.floor((a + r + E) / 2));
    }
    (SCENARIO.starCond = function () {
      return FIELD.cleanTiles >= (FIELD.cols - 2) * (FIELD.rows - 2) * 0.6;
    }),
      (SCENARIO.starText = "Star bonus: use <40% of floor space (current:"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 64),
      (SCENARIO.numCorrect = 64),
      (SCENARIO.maxTicks = 9999),
      (SCENARIO.victoryCond = 4);
  } else if ("extraD" === e)
    (t = !0),
      (SCENARIO.title = "Magnum Opus"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "• Input A contains a string of at least 15 bits, while input B contains a string of exactly 9 bits.",
      ),
      SCENARIO.info.push(
        "• Output to C a `1` if ANY substring from A exactly matches B, else ouput a `0`.",
      ),
      SCENARIO.info.push(
        "• Four sequential `1` bits (uniquely) marks the termination of the string from A.",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [2, 2, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, 0, 0, 0],
        0,
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]),
      (SCENARIO.starCond = function () {
        return !0;
      }),
      (SCENARIO.starText = "Star bonus: freebie! You deserve it..."),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 1),
      (SCENARIO.numCorrect = 1),
      (SCENARIO.maxTicks = 9999),
      (SCENARIO.repetitions = 25),
      (SCENARIO.successRep = 25),
      (SCENARIO.currentRep = 1),
      (SCENARIO.correctReps = 0);
  else if ("chsh" === e)
    (t = !0),
      (SCENARIO.title = "QIII.F: Jolly Cooperation"),
      (SCENARIO.archive =
        "https://en.wikipedia.org/wiki/CHSH_inequality#CHSH_game"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "• Adjust the measurement gates to win >84% of rounds.",
      ),
      SCENARIO.info.push(
        "• Each round, Alice and Bob each RECEIVE a random bit from the center, then must SEND another bit back to the center.",
      ),
      SCENARIO.info.push(
        "• To win the round: sent bits must DIFFER if the received bits were both '1' state, else sent bits must MATCH.",
      ),
      (SCENARIO.journal = !0),
      (SCENARIO.channelsDir = [1, 1, 1, 1, -1, -1]),
      (SCENARIO.channelsCol = [0, 0, 0, 0, 1, 1]),
      (SCENARIO.hasEntanglers = !0),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [0, 0, 0, 0, 0, 0],
        0,
        "fixed",
      )),
      (SCENARIO.menuGrey = [
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]),
      (SCENARIO.editable[138] = 2),
      (SCENARIO.editable[174] = 2),
      (SCENARIO.editable[146] = 2),
      (SCENARIO.editable[186] = 2),
      (SCENARIO.editable[177] = 2),
      (SCENARIO.editable[183] = 2),
      (SCENARIO.starCond = function () {
        return !0;
      }),
      (SCENARIO.starText = "Star bonus: freebie!"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 1800),
      (SCENARIO.numCorrect = 1800),
      (SCENARIO.maxTicks = 9999),
      (SCENARIO.victoryCond = 2),
      (SCENARIO.outputC = [84, 100]),
      (SCENARIO.outputD = [0, 100]),
      (SCENARIO.device = 12);
  else if ("freeA" === e) {
    (t = !0),
      (SCENARIO.disableOverlay = !0),
      (SCENARIO.title = "Free-form"),
      (SCENARIO.info = []),
      SCENARIO.info.push("• Template used for level design."),
      SCENARIO.info.push(
        "• Overlay is semi-transparent in order to faciliate placement of hidden elements.",
      ),
      (SCENARIO.channelsDir = [0, 0, 0, 0, 0, 0]),
      (SCENARIO.channelsCol = [0, 0, 0, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(!1, [1, 1, 1, 1, 1, 1], 0)),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.device = 10),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 400; i++) {
      h = Math.floor(4 * Math.random());
      SCENARIO.QINPUTS[0].push(4 * h),
        SCENARIO.QINPUTS[0].push(4 * h),
        SCENARIO.QINPUTS[0].push(4 * h),
        SCENARIO.QINPUTS[0].push(4 * h),
        SCENARIO.CINPUTS[0].push(h);
    }
    (SCENARIO.starCond = function () {
      return RBOARD[TIMER.tick].success >= 390;
    }),
      (SCENARIO.starText = "Star bonus: get 390 or more correct."),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 1e3),
      (SCENARIO.numCorrect = 1e3),
      (SCENARIO.maxTicks = 9999),
      (SCENARIO.starCond = function () {
        return !0;
      }),
      (SCENARIO.starText = ""),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 200),
      (SCENARIO.numCorrect = 200),
      (SCENARIO.maxTicks = 9999);
  } else if ("freeB" === e) {
    (t = !0),
      (SCENARIO.disableOverlay = !0),
      (SCENARIO.title = "Free-form"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "• Each round, Alice and Bob each RECEIVE a random bit from the center, then SEND another bit back to the center.",
      ),
      SCENARIO.info.push(
        "• To win the round: sent bits must DIFFER if the received bits were both '1' state, else sent bits must MATCH.",
      ),
      SCENARIO.info.push("• Adjust the measurements to maximize the win rate."),
      (SCENARIO.channelsDir = [0, 0, 0, 0, 0, 0]),
      (SCENARIO.channelsCol = [1, 1, 1, 1, 1, 1]),
      (SCENARIO.hasEntanglers = !0),
      (SCENARIO.editable = BoardData.makeEditable(!1, [1, 1, 1, 1, 1, 1], 0)),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 96; i++) {
      (a = Math.round(Math.random())), (r = Math.round(Math.random()));
      SCENARIO.QINPUTS[0].push(8 * a),
        SCENARIO.QINPUTS[1].push(8 * r),
        SCENARIO.QINPUTS[2].push(8 * (a + r));
      var S = Math.round(Math.random()),
        f = Math.round(Math.random());
      SCENARIO.CINPUTS[0].push(S),
        SCENARIO.CINPUTS[1].push(f),
        SCENARIO.CINPUTS[2].push((S + f) % 2);
    }
    (SCENARIO.starCond = function () {
      return !0;
    }),
      (SCENARIO.starText = ""),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 20),
      (SCENARIO.numCorrect = 15),
      (SCENARIO.maxTicks = 9999);
  } else if ("freeC" === e) {
    (t = !0),
      (SCENARIO.disableOverlay = !1),
      (SCENARIO.title = "Free-form"),
      (SCENARIO.info = []),
      SCENARIO.info.push("• Empty factory for testing and experimentation."),
      (SCENARIO.channelsDir = [1, 1, 1, 1, 1, 1]),
      (SCENARIO.channelsCol = [0, 0, 0, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(!0, [1, 1, 1, 1, 1, 1], 0)),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 96; i++) {
      (a = Math.round(Math.random())), (r = Math.round(Math.random()));
      SCENARIO.QINPUTS[0].push(8 * a),
        SCENARIO.QINPUTS[1].push(8 * r),
        SCENARIO.QINPUTS[2].push(8 * (a + r));
      (S = Math.round(Math.random())), (f = Math.round(Math.random()));
      SCENARIO.CINPUTS[0].push(S),
        SCENARIO.CINPUTS[1].push(f),
        SCENARIO.CINPUTS[2].push((S + f) % 2);
    }
    (SCENARIO.starCond = function () {
      return !0;
    }),
      (SCENARIO.starText = ""),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 1),
      (SCENARIO.numCorrect = 1),
      (SCENARIO.maxTicks = 9999);
  }
  return (
    !!t &&
    (ResetConsts.all(),
    Menu.initialize(),
    Timer.initialize(),
    ResetConsts.refresh(),
    CTRLMENU.reset(CANV.menu2),
    !0)
  );
}
