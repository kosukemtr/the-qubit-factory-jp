class ControlButton {
  constructor(e, t, i, a, r, s, o = 0) {
    (this._label = e),
      (this._i0 = t),
      (this._j0 = i),
      (this._hovered = !1),
      (this._selected = !1),
      (this._tileType = a),
      (this._tileProperties = r),
      (this._tooltip = s),
      (this._menuState = o),
      (this._animating = !1),
      (this._opening = 0),
      (this._transition = { status: !1, start: -1, stop: -1 }),
      (this._startTime = 0),
      (this._openTime = 0),
      (this._maxTime = 400);
  }
  get label() {
    return this._label;
  }
  get i0() {
    return this._i0;
  }
  get j0() {
    return this._j0;
  }
  get hovered() {
    return this._hovered;
  }
  get selected() {
    return this._selected;
  }
  get tileType() {
    return this._tileType;
  }
  get tileProperties() {
    return this._tileProperties;
  }
  get tooltip() {
    return this._tooltip;
  }
  get menuState() {
    return this._menuState;
  }
  get animating() {
    return this._animating;
  }
  get transition() {
    return this._transition;
  }
  set label(e) {
    this._label = e;
  }
  set i0(e) {
    this._i0 = e;
  }
  set j0(e) {
    this._j0 = e;
  }
  set hovered(e) {
    (this._hovered = e), (this._tileProperties.hovered = e);
  }
  set selected(e) {
    this._selected = e;
  }
  set tileType(e) {
    this._tileType = e;
  }
  set tileProperties(e) {
    this._tileProperties = e;
  }
  set tooltip(e) {
    this._tooltip = e;
  }
  set menuState(e) {
    this._menuState = e;
  }
  set animating(e) {
    this._animating = e;
  }
  set transition(e) {
    this._transition = e;
  }
  startAnimation() {
    (this._animating = !0), (this._startTime = TIMER.totalTime);
  }
  open() {
    (this._openTime = TIMER.totalTime), (this._opening = 1);
  }
  close() {
    (this._openTime = TIMER.totalTime), (this._opening = -1);
  }
  getPath(e) {
    if (this._opening)
      if (Math.abs(TIMER.totalTime - this._openTime) >= this._maxTime)
        -1 === this._opening
          ? (this._tileProperties.closure = 1)
          : (this._tileProperties.closure = 0),
          (this._opening = 0);
      else {
        var t = (TIMER.totalTime - this._openTime) / this._maxTime,
          i = (1 - Math.cos(Math.PI * t)) / 2;
        -1 === this._opening
          ? (this._tileProperties.closure = i)
          : (this._tileProperties.closure = 1 - i);
      }
    if (this._animating)
      if (Math.abs(TIMER.totalTime - this._startTime) >= this._maxTime)
        (this._animating = !1), (this._tileProperties.depth = 0);
      else {
        var a = (TIMER.totalTime - this._startTime) / this._maxTime,
          r = (1 - Math.cos(2 * Math.PI * a)) / 2;
        this._tileProperties.depth = r;
      }
    if (!0 === this._transition.status)
      if (Math.abs(TIMER.totalTime - this._startTime) >= this._maxTime)
        (this._tileProperties.type = this._transition.stop),
          (this._transition = { status: !1, start: -1, stop: -1 });
      else {
        var s = (TIMER.totalTime - this._startTime) / this._maxTime,
          o = (1 - Math.cos(2 * Math.PI * s)) / 2;
        (this._tileProperties.flash = o),
          (this._tileProperties.type =
            s <= 0.5 ? this._transition.start : this._transition.stop);
      }
    return PathsC.ctrl(e, this.tileType, this.tileProperties);
  }
  gridPos(e, t) {
    var i = this.x0 + e * this.tileWidth + (e + 1) * this.tileMargin,
      a = this.y0 + t * this.tileWidth + (t + 1) * this.tileMargin;
    return { x0: i, y0: a };
  }
}
const DESCRIPTIONS = { monologue: [], plaque0: "", plaque1: [] };
DESCRIPTIONS.plaque1.push("Tutorial"),
  DESCRIPTIONS.plaque1.push("• Standard onboarding tasks for new employees."),
  DESCRIPTIONS.plaque1.push(
    "• Instructs on basic factory protocols and user-control mechanisms.",
  ),
  (DESCRIPTIONS.plaque2 = []),
  DESCRIPTIONS.plaque2.push("Classic I"),
  DESCRIPTIONS.plaque2.push(
    "• Introductory tasks for classical computation and the manipulation of bits.",
  ),
  DESCRIPTIONS.plaque2.push(
    "• Designed to familiarize new employees with classical gate functionality.",
  ),
  (DESCRIPTIONS.plaque2U = []),
  DESCRIPTIONS.plaque2U.push("Unlock:"),
  DESCRIPTIONS.plaque2U.push("Complete `Tutorial` tasks"),
  (DESCRIPTIONS.plaque3 = []),
  DESCRIPTIONS.plaque3.push("Classic II"),
  DESCRIPTIONS.plaque3.push(
    "• More sophisticated challenges in classical computation.",
  ),
  DESCRIPTIONS.plaque3.push(
    "• Successful completion of tasks indicates an acceptable understanding of circuits and bit logic.",
  ),
  (DESCRIPTIONS.plaque3U = []),
  DESCRIPTIONS.plaque3U.push("Unlock:"),
  DESCRIPTIONS.plaque3U.push("Complete 5 of `Classic I`"),
  (DESCRIPTIONS.plaque4 = []),
  DESCRIPTIONS.plaque4.push("Classic III"),
  DESCRIPTIONS.plaque4.push("• Advanced challenges in classical computation."),
  DESCRIPTIONS.plaque4.push(
    "• Successful completion of tasks will require creative usage of classical gates and mastery of their function.",
  ),
  (DESCRIPTIONS.plaque4U = []),
  DESCRIPTIONS.plaque4U.push("Unlock:"),
  DESCRIPTIONS.plaque4U.push("Complete 4 of `Classic II`"),
  (DESCRIPTIONS.plaque5 = []),
  DESCRIPTIONS.plaque5.push("Quantum I"),
  DESCRIPTIONS.plaque5.push(
    "• Introductory tasks for quantum computation and the manipulation of qubits.",
  ),
  DESCRIPTIONS.plaque5.push(
    "• Designed to familiarize new employees with quantum gate functionality.",
  ),
  (DESCRIPTIONS.plaque5U = []),
  DESCRIPTIONS.plaque5U.push("Unlock:"),
  DESCRIPTIONS.plaque5U.push("Complete 5 of `Classic I`"),
  (DESCRIPTIONS.plaque6 = []),
  DESCRIPTIONS.plaque6.push("Quantum II"),
  DESCRIPTIONS.plaque6.push(
    "• More sophisticated challenges in quantum computation.",
  ),
  DESCRIPTIONS.plaque6.push(
    "• Employees are introduced to unitary circuits, quantum entanglement and measurement probabilities.",
  ),
  (DESCRIPTIONS.plaque6U = []),
  DESCRIPTIONS.plaque6U.push("Unlock:"),
  DESCRIPTIONS.plaque6U.push("Complete 6 of `Quantum I`"),
  (DESCRIPTIONS.plaque7 = []),
  DESCRIPTIONS.plaque7.push("Quantum III"),
  DESCRIPTIONS.plaque7.push("• Advanced challenges in quantum computation."),
  DESCRIPTIONS.plaque7.push(
    "• Successful completion of tasks will require creative usage of quantum gates and mastery of their function.",
  ),
  (DESCRIPTIONS.plaque7U = []),
  DESCRIPTIONS.plaque7U.push("Unlock:"),
  DESCRIPTIONS.plaque7U.push("Complete 5 of `Quantum II`"),
  (DESCRIPTIONS.plaque8 = []),
  (DESCRIPTIONS.plaque9 = []),
  DESCRIPTIONS.plaque9.push("Hybrid"),
  DESCRIPTIONS.plaque9.push("• The ultimate challenges."),
  DESCRIPTIONS.plaque9.push(
    "• Solutions require mastery of both classical and quantum gates, as well as superior command over quantum entanglement.",
  ),
  (DESCRIPTIONS.plaque9U = []),
  DESCRIPTIONS.plaque9U.push("Unlock:"),
  DESCRIPTIONS.plaque9U.push("Complete 4 of `Classic III`"),
  DESCRIPTIONS.plaque9U.push("Complete 4 of `Quantum III`"),
  (DESCRIPTIONS.award0 = []),
  DESCRIPTIONS.award0.push("Award"),
  DESCRIPTIONS.award0.push("• Complete all `classic` computation levels."),
  (DESCRIPTIONS.award1 = []),
  DESCRIPTIONS.award1.push("Award"),
  DESCRIPTIONS.award1.push("• Bonus star in all `classic` computation levels."),
  (DESCRIPTIONS.award2 = []),
  DESCRIPTIONS.award2.push("Award"),
  DESCRIPTIONS.award2.push("• Complete all `quantum` computation levels."),
  (DESCRIPTIONS.award3 = []),
  DESCRIPTIONS.award3.push("Award"),
  DESCRIPTIONS.award3.push("• Bonus star in all `quantum` computation levels."),
  (DESCRIPTIONS.award4 = []),
  DESCRIPTIONS.award4.push("Award"),
  DESCRIPTIONS.award4.push("• Complete all `hybrid` computation levels."),
  (DESCRIPTIONS.award5 = []),
  DESCRIPTIONS.award5.push("Award"),
  DESCRIPTIONS.award5.push("• Bonus star in all `hybrid` computation levels."),
  (DESCRIPTIONS.award6 = []),
  DESCRIPTIONS.award6.push("Award"),
  DESCRIPTIONS.award6.push("• Complete all of the bonus levels."),
  (DESCRIPTIONS.award7 = []),
  DESCRIPTIONS.award7.push("Award"),
  DESCRIPTIONS.award7.push("• Bonus star in all of the bonus levels."),
  (DESCRIPTIONS.allTitles = [
    ["Boolean", "Logistician"],
    ["Boolean", "Master"],
    ["Quantum", "Adept"],
    ["Quantum", "Artificer"],
    ["Entanglement", "Maestro"],
    ["Entanglement", "Savant"],
    ["Adeptus", "Mechanicus"],
    ["The", "Omnissiah"],
  ]),
  (DESCRIPTIONS.tut1 = []),
  DESCRIPTIONS.tut1.push("Wired"),
  DESCRIPTIONS.tut1.push("Skill assessment:"),
  DESCRIPTIONS.tut1.push("• Placement of blue (bit) and red (qubit) wires."),
  (DESCRIPTIONS.tut2 = []),
  DESCRIPTIONS.tut2.push("Gate Keeping"),
  DESCRIPTIONS.tut2.push("Skill assessment:"),
  DESCRIPTIONS.tut2.push("• Usage of gates to transform bits and qubits."),
  (DESCRIPTIONS.tut3 = []),
  DESCRIPTIONS.tut3.push("The Manipulator"),
  DESCRIPTIONS.tut3.push("Skill assessment:"),
  DESCRIPTIONS.tut3.push("• Ability to set gate properties."),
  (DESCRIPTIONS.tut4 = []),
  DESCRIPTIONS.tut4.push("CTRL-Z"),
  DESCRIPTIONS.tut4.push("Skill assessment:"),
  DESCRIPTIONS.tut4.push("• Gate orientation and placement."),
  (DESCRIPTIONS.tut5 = []),
  DESCRIPTIONS.tut5.push("Wasted Potential"),
  DESCRIPTIONS.tut5.push("Skill assessment:"),
  DESCRIPTIONS.tut5.push("• Deletion of wires and gates."),
  (DESCRIPTIONS.tut6 = []),
  DESCRIPTIONS.tut6.push("Making Amends"),
  DESCRIPTIONS.tut6.push("Skill assessment:"),
  DESCRIPTIONS.tut6.push(
    "• Usage of blueprints to store/retrieve different designs.",
  ),
  DESCRIPTIONS.tut6.push("• Usage of copy/cut functionality."),
  (DESCRIPTIONS.class1 = []),
  DESCRIPTIONS.class1.push("Straight Shooter"),
  DESCRIPTIONS.class1.push("Skill assessment:"),
  DESCRIPTIONS.class1.push(
    "• Usage of the `re-zero` and `inversion` bit gates.",
  ),
  (DESCRIPTIONS.class2 = []),
  DESCRIPTIONS.class2.push("Zippidty-split"),
  DESCRIPTIONS.class2.push("Skill assessment:"),
  DESCRIPTIONS.class2.push("• Usage of the `combine` and `split` bit gates."),
  (DESCRIPTIONS.class3 = []),
  DESCRIPTIONS.class3.push("The ol'Switch-a-roo"),
  DESCRIPTIONS.class3.push("Skill assessment:"),
  DESCRIPTIONS.class3.push("• Usage of the classical `control` gate."),
  (DESCRIPTIONS.class4 = []),
  DESCRIPTIONS.class4.push("nSync"),
  DESCRIPTIONS.class4.push("Skill assessment:"),
  DESCRIPTIONS.class4.push("• Usage of the `sync` gate."),
  (DESCRIPTIONS.class5 = []),
  DESCRIPTIONS.class5.push("The Waiting Game"),
  DESCRIPTIONS.class5.push("Skill assessment:"),
  DESCRIPTIONS.class5.push("• Usage of the `delay` gate."),
  (DESCRIPTIONS.class6 = []),
  DESCRIPTIONS.class6.push("Genesis"),
  DESCRIPTIONS.class6.push("Skill assessment:"),
  DESCRIPTIONS.class6.push("• Basic usage of the `bit creation` gate."),
  (DESCRIPTIONS.class7 = []),
  DESCRIPTIONS.class7.push("The Count"),
  DESCRIPTIONS.class7.push("Skill assessment:"),
  DESCRIPTIONS.class7.push(
    "• Usage of the `bit creation` gate to build a counter.",
  ),
  (DESCRIPTIONS.classPuzzle1 = []),
  DESCRIPTIONS.classPuzzle1.push("Bandwidth"),
  DESCRIPTIONS.classPuzzle1.push("Skill assessment:"),
  DESCRIPTIONS.classPuzzle1.push("• Combining and separating bit streams."),
  (DESCRIPTIONS.classPuzzle2 = []),
  DESCRIPTIONS.classPuzzle2.push("Half Adder"),
  DESCRIPTIONS.classPuzzle2.push("Skill assessment:"),
  DESCRIPTIONS.classPuzzle2.push("• Introductory bit logic."),
  (DESCRIPTIONS.classPuzzle4 = []),
  DESCRIPTIONS.classPuzzle4.push("Memory"),
  DESCRIPTIONS.classPuzzle4.push("Skill assessment:"),
  DESCRIPTIONS.classPuzzle4.push("• Storage and retrieval of bit values."),
  (DESCRIPTIONS.classPuzzle5 = []),
  DESCRIPTIONS.classPuzzle5.push("Ternary"),
  DESCRIPTIONS.classPuzzle5.push("Skill assessment:"),
  DESCRIPTIONS.classPuzzle5.push("• Generation of custom bit sequences."),
  (DESCRIPTIONS.classPuzzle6 = []),
  DESCRIPTIONS.classPuzzle6.push("Repetition"),
  DESCRIPTIONS.classPuzzle6.push("Skill assessment:"),
  DESCRIPTIONS.classPuzzle6.push("• Classical error correction."),
  (DESCRIPTIONS.classPuzzle7 = []),
  DESCRIPTIONS.classPuzzle7.push("Swap Meet"),
  DESCRIPTIONS.classPuzzle7.push("Skill assessment:"),
  DESCRIPTIONS.classPuzzle7.push(
    "• Creative usage of classical control gates.",
  ),
  (DESCRIPTIONS.classPuzzle8 = []),
  DESCRIPTIONS.classPuzzle8.push("Strict Equality"),
  DESCRIPTIONS.classPuzzle8.push("Skill assessment:"),
  DESCRIPTIONS.classPuzzle8.push(
    "• Advanced classical circuit design and bit logic.",
  ),
  (DESCRIPTIONS.classPuzzle3 = []),
  DESCRIPTIONS.classPuzzle3.push("AND Frugality"),
  DESCRIPTIONS.classPuzzle3.push("Skill assessment:"),
  DESCRIPTIONS.classPuzzle3.push(
    "• Advanced classical circuit design and bit logic.",
  ),
  (DESCRIPTIONS.classPuzzle3B = []),
  DESCRIPTIONS.classPuzzle3B.push("XOR Frugality"),
  DESCRIPTIONS.classPuzzle3B.push("Skill assessment:"),
  DESCRIPTIONS.classPuzzle3B.push(
    "• Advanced classical circuit design and bit logic.",
  ),
  (DESCRIPTIONS.classPuzzle9 = []),
  DESCRIPTIONS.classPuzzle9.push("Haystack"),
  DESCRIPTIONS.classPuzzle9.push("Skill assessment:"),
  DESCRIPTIONS.classPuzzle9.push("• Usage of classical memories."),
  DESCRIPTIONS.classPuzzle9.push(
    "• Advanced classical circuit design and bit logic.",
  ),
  (DESCRIPTIONS.vaziraniClassic = []),
  DESCRIPTIONS.vaziraniClassic.push("Quality Control"),
  DESCRIPTIONS.vaziraniClassic.push("Skill assessment:"),
  DESCRIPTIONS.vaziraniClassic.push("• Device testing protocols."),
  (DESCRIPTIONS.binaryencode = []),
  DESCRIPTIONS.binaryencode.push("Unary <<< Binary"),
  DESCRIPTIONS.binaryencode.push("Skill assessment:"),
  DESCRIPTIONS.binaryencode.push(
    "• Advanced classical circuit design and bit logic.",
  ),
  DESCRIPTIONS.binaryencode.push("• Understanding of binary encoding."),
  (DESCRIPTIONS.adder = []),
  DESCRIPTIONS.adder.push("Calculon"),
  DESCRIPTIONS.adder.push("Skill assessment:"),
  DESCRIPTIONS.adder.push("• Advanced classical circuit design and bit logic."),
  DESCRIPTIONS.adder.push("• Understanding of binary addition."),
  (DESCRIPTIONS.quant1 = []),
  DESCRIPTIONS.quant1.push("Inversion"),
  DESCRIPTIONS.quant1.push("Skill assessment:"),
  DESCRIPTIONS.quant1.push("• Usage of `rotation` and `flip` qubit gates."),
  DESCRIPTIONS.quant1.push(
    "• Understanding of reversibility in quantum circuits.",
  ),
  (DESCRIPTIONS.quant2 = []),
  DESCRIPTIONS.quant2.push("Wires Crossed"),
  DESCRIPTIONS.quant2.push("Skill assessment:"),
  DESCRIPTIONS.quant2.push("• Usage of `measure` and `bit-to-qubit` gates."),
  DESCRIPTIONS.quant2.push("• Ability to interchange between bits and qubits."),
  (DESCRIPTIONS.quant3A = []),
  DESCRIPTIONS.quant3A.push("Dice Roll"),
  DESCRIPTIONS.quant3A.push("Skill assessment:"),
  DESCRIPTIONS.quant3A.push(
    "• Understanding of qubit measurement outcome probabilities.",
  ),
  (DESCRIPTIONS.quant3 = []),
  DESCRIPTIONS.quant3.push("Lossy"),
  DESCRIPTIONS.quant3.push("Skill assessment:"),
  DESCRIPTIONS.quant3.push("• Optimal determination of unknown qubit states."),
  (DESCRIPTIONS.quant4 = []),
  DESCRIPTIONS.quant4.push("Straight Shooter II"),
  DESCRIPTIONS.quant4.push("Skill assessment:"),
  DESCRIPTIONS.quant4.push(
    "• Usage of `measure` gates to transform qubit states.",
  ),
  (DESCRIPTIONS.quant5 = []),
  DESCRIPTIONS.quant5.push("Quantum Control"),
  DESCRIPTIONS.quant5.push("Skill assessment:"),
  DESCRIPTIONS.quant5.push(
    "• Usage of quantum `control` gates in conjunction with qubit rotations.",
  ),
  (DESCRIPTIONS.quant6 = []),
  DESCRIPTIONS.quant6.push("Quantum Control II"),
  DESCRIPTIONS.quant6.push("Skill assessment:"),
  DESCRIPTIONS.quant6.push(
    "• Usage of quantum `control` gates in conjunction with qubit flips.",
  ),
  (DESCRIPTIONS.quant6B = []),
  DESCRIPTIONS.quant6B.push("Superposition"),
  DESCRIPTIONS.quant6B.push("Skill assessment:"),
  DESCRIPTIONS.quant6B.push(
    "• Understanding of qubit basis states and super- positions.",
  ),
  (DESCRIPTIONS.quant7 = []),
  DESCRIPTIONS.quant7.push("Measure x1, Cut x2"),
  DESCRIPTIONS.quant7.push("Skill assessment:"),
  DESCRIPTIONS.quant7.push(
    "• Basic understanding of measurement outcomes with entangled states.",
  ),
  (DESCRIPTIONS.measure = []),
  DESCRIPTIONS.measure.push("Discernment"),
  DESCRIPTIONS.measure.push("Skill assessment:"),
  DESCRIPTIONS.measure.push(
    "• Applied understanding of measure outcome probs.",
  ),
  DESCRIPTIONS.measure.push("• Introductory quantum state tomography."),
  (DESCRIPTIONS.adderB = []),
  DESCRIPTIONS.adderB.push("Drive-by XOR"),
  DESCRIPTIONS.adderB.push("Skill assessment:"),
  DESCRIPTIONS.adderB.push(
    "• Usage of quantum control gates to implement qubit logic.",
  ),
  (DESCRIPTIONS.adderC = []),
  DESCRIPTIONS.adderC.push("Drive-by AND"),
  DESCRIPTIONS.adderC.push("Skill assessment:"),
  DESCRIPTIONS.adderC.push(
    "• Usage of quantum control gates to implement qubit logic.",
  ),
  (DESCRIPTIONS.entChallengeA = []),
  DESCRIPTIONS.entChallengeA.push("Lock and Key"),
  DESCRIPTIONS.entChallengeA.push("Skill assessment:"),
  DESCRIPTIONS.entChallengeA.push(
    "• Applied understanding of correlation in measurements of entangled qubits.",
  ),
  (DESCRIPTIONS.quantChallengeB = []),
  DESCRIPTIONS.quantChallengeB.push("Analysis"),
  DESCRIPTIONS.quantChallengeB.push("Skill assessment:"),
  DESCRIPTIONS.quantChallengeB.push(
    "• Understanding of unitary transformations on entangled states.",
  ),
  DESCRIPTIONS.quantChallengeB.push("• Usage of the state analyzer tool."),
  (DESCRIPTIONS.quantChallengeC = []),
  DESCRIPTIONS.quantChallengeC.push("Magic Mirror"),
  DESCRIPTIONS.quantChallengeC.push("Skill assessment:"),
  DESCRIPTIONS.quantChallengeC.push(
    "• Applied understanding of reversibility in quantum circuits.",
  ),
  (DESCRIPTIONS.quantChallengeD = []),
  DESCRIPTIONS.quantChallengeD.push("Even Odds"),
  DESCRIPTIONS.quantChallengeD.push("Skill assessment:"),
  DESCRIPTIONS.quantChallengeD.push(
    "• Applied understanding of correlation in measurements of entangled qubits.",
  ),
  (DESCRIPTIONS.quantChallengeA = []),
  DESCRIPTIONS.quantChallengeA.push("Try, Try, Try Again"),
  DESCRIPTIONS.quantChallengeA.push("Skill assessment:"),
  DESCRIPTIONS.quantChallengeA.push("• Creative usage of measurement gates."),
  (DESCRIPTIONS.quantChallengeE = []),
  DESCRIPTIONS.quantChallengeE.push("Swap Meet II"),
  DESCRIPTIONS.quantChallengeE.push("Skill assessment:"),
  DESCRIPTIONS.quantChallengeE.push(
    "• Creative usage of quantum control gates.",
  ),
  (DESCRIPTIONS.quantChallengeF = []),
  DESCRIPTIONS.quantChallengeF.push("Relay"),
  DESCRIPTIONS.quantChallengeF.push("Skill assessment:"),
  DESCRIPTIONS.quantChallengeF.push("• Introductory entanglement swapping."),
  (DESCRIPTIONS.simpleDistill = []),
  DESCRIPTIONS.simpleDistill.push("Distillary"),
  DESCRIPTIONS.simpleDistill.push("Skill assessment:"),
  DESCRIPTIONS.simpleDistill.push("• Introductory entanglement distillation."),
  (DESCRIPTIONS.measureB = []),
  DESCRIPTIONS.measureB.push("Cascade"),
  DESCRIPTIONS.measureB.push("Skill assessment:"),
  DESCRIPTIONS.measureB.push("• Sequential measurements and state tomography."),
  (DESCRIPTIONS.chsh = []),
  DESCRIPTIONS.chsh.push("Jolly Cooperation"),
  DESCRIPTIONS.chsh.push("Skill assessment:"),
  DESCRIPTIONS.chsh.push("• Quantum entanglement and correlation."),
  DESCRIPTIONS.chsh.push("• Quantum game theory."),
  (DESCRIPTIONS.quantumAdv3 = []),
  DESCRIPTIONS.quantumAdv3.push("Statistics"),
  DESCRIPTIONS.quantumAdv3.push("Skill assessment:"),
  DESCRIPTIONS.quantumAdv3.push(
    "• Measurement probabilities and tomography of entangled states.",
  ),
  (DESCRIPTIONS.preDenseB = []),
  DESCRIPTIONS.preDenseB.push("Superdense?"),
  DESCRIPTIONS.preDenseB.push("Skill assessment:"),
  DESCRIPTIONS.preDenseB.push(
    "• Encoding/decoding classical data to/from qubits.",
  ),
  (DESCRIPTIONS.teleport = []),
  DESCRIPTIONS.teleport.push("Beam me up"),
  DESCRIPTIONS.teleport.push("Skill assessment:"),
  DESCRIPTIONS.teleport.push(
    "• Utilization of entanglement as a resource in a quantum protocol.",
  ),
  (DESCRIPTIONS.quantErrorA = []),
  DESCRIPTIONS.quantErrorA.push("Correction"),
  DESCRIPTIONS.quantErrorA.push("Skill assessment:"),
  DESCRIPTIONS.quantErrorA.push("• Introductory quantum error correction."),
  (DESCRIPTIONS.quantChallengeG = []),
  DESCRIPTIONS.quantChallengeG.push("Back-to-front"),
  DESCRIPTIONS.quantChallengeG.push("Skill assessment:"),
  DESCRIPTIONS.quantChallengeG.push(
    "• Advanced usage of quantum control gates.",
  ),
  (DESCRIPTIONS.quantumAdv1 = []),
  DESCRIPTIONS.quantumAdv1.push("Correlation"),
  DESCRIPTIONS.quantumAdv1.push("Skill assessment:"),
  DESCRIPTIONS.quantumAdv1.push(
    "• Advanced tomography of entangled quantum states.",
  ),
  (DESCRIPTIONS.entChallengeB = []),
  DESCRIPTIONS.entChallengeB.push("GHZ"),
  DESCRIPTIONS.entChallengeB.push("Skill assessment:"),
  DESCRIPTIONS.entChallengeB.push(
    "• Manipulation and evaluation of multi-qubit entangled states.",
  ),
  (DESCRIPTIONS.dense = []),
  DESCRIPTIONS.dense.push("Super-dense!"),
  DESCRIPTIONS.dense.push("Skill assessment:"),
  DESCRIPTIONS.dense.push(
    "• Utilization of entanglement as a resource in a quantum protocol.",
  ),
  (DESCRIPTIONS.distill = []),
  DESCRIPTIONS.distill.push("Beam me up II"),
  DESCRIPTIONS.distill.push("Skill assessment:"),
  DESCRIPTIONS.distill.push(
    "• Practical application of entanglement distillation as part of a quantum protocol.",
  ),
  (DESCRIPTIONS.quantErrorB = []),
  DESCRIPTIONS.quantErrorB.push("Correction II"),
  DESCRIPTIONS.quantErrorB.push("Skill assessment:"),
  DESCRIPTIONS.quantErrorB.push(
    "• More sophisticated quantum error correction.",
  ),
  (DESCRIPTIONS.vaziraniQuantum = []),
  DESCRIPTIONS.vaziraniQuantum.push("Quality Control II"),
  DESCRIPTIONS.vaziraniQuantum.push("Skill assessment:"),
  DESCRIPTIONS.vaziraniQuantum.push(
    "• Creative use of quantum components in order to achieve a computational advantage.",
  ),
  (DESCRIPTIONS.quantumAdv2 = []),
  DESCRIPTIONS.quantumAdv2.push("Correlation II"),
  DESCRIPTIONS.quantumAdv2.push("Skill assessment:"),
  DESCRIPTIONS.quantumAdv2.push(
    "• Advanced tomography of entangled quantum states.",
  ),
  (DESCRIPTIONS.entChallengeC = []),
  DESCRIPTIONS.entChallengeC.push("GHZ II"),
  DESCRIPTIONS.entChallengeC.push("Skill assessment:"),
  DESCRIPTIONS.entChallengeC.push(
    "• Advanced tomography of multi-qubit entangled states.",
  ),
  (DESCRIPTIONS.extraA = []),
  DESCRIPTIONS.extraA.push("Bonus Level"),
  DESCRIPTIONS.extraA.push("???"),
  (DESCRIPTIONS.extraB = []),
  DESCRIPTIONS.extraB.push("Bonus Level"),
  DESCRIPTIONS.extraB.push("???"),
  (DESCRIPTIONS.extraC = []),
  DESCRIPTIONS.extraC.push("Bonus Level"),
  DESCRIPTIONS.extraC.push("???"),
  (DESCRIPTIONS.extraD = []),
  DESCRIPTIONS.extraD.push("Bonus Level"),
  DESCRIPTIONS.extraD.push("???"),
  (DESCRIPTIONS.freeA = []),
  DESCRIPTIONS.freeA.push("Template A"),
  DESCRIPTIONS.freeA.push("Blank template used for level design"),
  (DESCRIPTIONS.freeB = []),
  DESCRIPTIONS.freeB.push("Template B"),
  DESCRIPTIONS.freeB.push(
    "Blank template used for level design. Includes entanglers",
  ),
  (DESCRIPTIONS.freeC = []),
  DESCRIPTIONS.freeC.push("Free-form"),
  DESCRIPTIONS.freeC.push("Empty factory for testing and experimentation.");
