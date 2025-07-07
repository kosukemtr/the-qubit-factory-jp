class Canvs {
  constructor(e, t) {
    (this._name = t),
      (this._canv = document.getElementById(e)),
      (this._ctx = document.getElementById(e).getContext("2d")),
      (this._x0 = 0),
      (this._y0 = 0),
      (this._h0 = 0),
      (this._w0 = 0),
      (this._isActive = !1),
      (document.getElementById(e).width = 0),
      (document.getElementById(e).height = 0),
      (document.getElementById(e).style.display = "none");
  }
  get name() {
    return this._name;
  }
  get canv() {
    return this._canv;
  }
  get ctx() {
    return this._ctx;
  }
  get x0() {
    return this._x0;
  }
  get y0() {
    return this._y0;
  }
  get h0() {
    return this._h0;
  }
  get w0() {
    return this._w0;
  }
  get isActive() {
    return this._isActive;
  }
  set x0(e) {
    (this.canv.style.left = e + "px"), (this._x0 = e);
  }
  set y0(e) {
    (this.canv.style.top = e + "px"), (this._y0 = e);
  }
  set h0(e) {
    (this.canv.height = e), (this._h0 = e);
  }
  set w0(e) {
    (this.canv.width = e), (this._w0 = e);
  }
  set isActive(e) {
    this._isActive = e;
  }
  resize() {
    if (this.isActive) {
      var e = this.getDims();
      (this.w0 = e.w0),
        (this.h0 = e.h0),
        (this.x0 = e.x0),
        (this.y0 = e.y0),
        this.setGlobal();
    }
  }
  static translateAll(e) {
    for (var t = Object.entries(e), i = 0; i < t.length; i++)
      t[i][1].translate();
  }
  translate() {
    var e = this.getDims();
    this.isActive && ((this.x0 = e.x0), (this.y0 = e.y0));
  }
  clear() {
    this.ctx.clearRect(0, 0, this.canv.width, this.canv.height);
  }
  fill(e = 0) {
    e && (this.ctx.fillStyle = e),
      this.ctx.fillRect(0, 0, this.canv.width, this.canv.height);
  }
  activate() {
    this.ctx.clearRect(0, 0, this.canv.width, this.canv.height),
      (this.isActive = !0),
      this.resize(),
      (this.canv.style.display = "block");
  }
  deactivate() {
    (this.w0 = 0),
      (this.h0 = 0),
      (this.x0 = 0),
      (this.y0 = 0),
      (this.isActive = !1),
      (this.canv.style.display = "none");
  }
  static deactivateAll(e) {
    for (var t = Object.entries(e), i = 0; i < t.length; i++)
      t[i][1].deactivate();
  }
  static displayAll(e) {
    for (var t = Object.entries(e), i = 0; i < t.length; i++)
      if (t[i][1].isActive) {
        var a = t[i][1];
        console.log(a.name, a.x0 + a.w0, a.y0 + a.h0);
      }
  }
  setGlobal() {
    "tooltip" === this.name
      ? ((this.ctx.fillStyle = "antiquewhite"),
        (this.ctx.font = (1.2 / 3) * FIELD.tileWidth + "px Courier New"),
        (this.ctx.textBaseline = "middle"),
        (this.ctx.shadowBlur = 2),
        (this.ctx.shadowOffsetX = 2),
        (this.ctx.shadowOffsetY = 2),
        (this.ctx.shadowColor = "black"))
      : "FPS" === this.name
        ? ((this.ctx.fillStyle = "white"),
          (this.ctx.font = "16px verdana"),
          (this.ctx.textBaseline = "top"),
          (this.ctx.textAlign = "left"))
        : "base" === this.name &&
          ((this.ctx.textBaseline = "middle"),
          (this.ctx.textAlign = "center"),
          (this.ctx.lineJoin = "round"),
          (this.ctx.shadowBlur = 0));
  }
  getDims() {
    var e = {};
    if ("FPS" === this.name) (e.w0 = 400), (e.h0 = 100), (e.x0 = 0), (e.y0 = 0);
    else if ("interface" === this.name)
      (e.w0 = Math.min(window.innerWidth - 10, FIELD.totWidth)),
        (e.h0 = Math.min(window.innerHeight - 10, FIELD.totHeight)),
        (e.x0 = 0),
        (e.y0 = 0);
    else if ("effects" === this.name)
      "title" === STATE.mode
        ? ((e.w0 =
            10 * FIELD.tileWidth +
            (35 * FIELD.tileWidth) / 8 -
            FIELD.tileWidth / 2),
          (e.h0 = (15 * FIELD.tileHeight) / 2 - FIELD.tileHeight / 2),
          (e.x0 = FIELD.leftPad + FIELD.tileWidth / 4),
          (e.y0 = FIELD.topPad + FIELD.tileHeight / 4))
        : ((e.w0 = (1 + FIELD.cols) * FIELD.tileWidth),
          (e.h0 = (1 + FIELD.rows) * FIELD.tileHeight),
          (e.x0 = FIELD.leftPad),
          (e.y0 = FIELD.topPad));
    else if ("base" === this.name)
      "title" === STATE.mode
        ? ((e.w0 =
            10 * FIELD.tileWidth +
            (35 * FIELD.tileWidth) / 8 -
            FIELD.tileWidth / 2),
          (e.h0 = (15 * FIELD.tileHeight) / 2 - FIELD.tileHeight / 2),
          (e.x0 = FIELD.leftPad + FIELD.tileWidth / 4),
          (e.y0 = FIELD.topPad + FIELD.tileHeight / 4))
        : ((e.w0 = (1 + FIELD.cols) * FIELD.tileWidth),
          (e.h0 = (1 + FIELD.rows) * FIELD.tileHeight),
          (e.x0 = FIELD.leftPad),
          (e.y0 = FIELD.topPad));
    else if ("baseWires" === this.name)
      (e.w0 = (1 + FIELD.cols) * FIELD.tileWidth),
        (e.h0 = (1 + FIELD.rows) * FIELD.tileHeight),
        (e.x0 = FIELD.leftPad),
        (e.y0 = FIELD.topPad);
    else if ("undos" === this.name)
      (e.w0 = 8 * FIELD.tileWidth),
        (e.h0 = (3 * FIELD.tileHeight) / 4),
        (e.x0 = FIELD.menu2.x0 - 1.5 * FIELD.tileWidth),
        (e.y0 = FIELD.menu2.y0 + (2 * FIELD.tileWidth) / 4);
    else if ("controls" === this.name)
      (e.w0 = (1 + FIELD.cols) * FIELD.tileWidth),
        (e.h0 = (1 + FIELD.rows) * FIELD.tileHeight),
        (e.x0 = FIELD.leftPad),
        (e.y0 = FIELD.topPad);
    else if ("menu" === this.name)
      (e.w0 = (FIELD.tileWidth + FIELD.menu.pad) * (FIELD.menu.cols + 1)),
        (e.h0 =
          (FIELD.tileHeight + FIELD.menu.pad) * (FIELD.menu.rows + 1) +
          FIELD.menu.topPad),
        (e.x0 = FIELD.menu.x0),
        (e.y0 = FIELD.menu.y0);
    else if ("menuBack" === this.name)
      (e.w0 = (FIELD.tileWidth + FIELD.menu.pad) * (FIELD.menu.cols + 1)),
        (e.h0 =
          (FIELD.tileHeight + FIELD.menu.pad) * (FIELD.menu.rows + 1) +
          FIELD.menu.topPad),
        (e.x0 = FIELD.menu.x0),
        (e.y0 = FIELD.menu.y0);
    else if ("menuOverlay" === this.name)
      (e.w0 = (FIELD.tileWidth + FIELD.menu.pad) * (FIELD.menu.cols + 1)),
        (e.h0 =
          (FIELD.tileHeight + FIELD.menu.pad) * (FIELD.menu.rows + 1) +
          FIELD.menu.topPad),
        (e.x0 = FIELD.menu.x0),
        (e.y0 = FIELD.menu.y0);
    else if ("menuText" === this.name)
      (e.w0 =
        (FIELD.tileWidth + FIELD.menu.pad) * FIELD.menu.cols + FIELD.menu.pad),
        (e.h0 = FIELD.menu.topPad),
        (e.x0 = FIELD.menu.x0 + FIELD.tileWidth / 2),
        (e.y0 = FIELD.menu.y0 + FIELD.tileHeight / 2);
    else if ("menuEraser" === this.name)
      (e.w0 = 2 * FIELD.tileWidth),
        (e.h0 = 2 * FIELD.tileHeight),
        (e.x0 = FIELD.menu.x0 + FIELD.tileWidth / 5),
        (e.y0 = FIELD.menu.y0 + (3 * FIELD.tileHeight) / 8);
    else if ("scoreBase" === this.name)
      (e.w0 = FIELD.menuWidth),
        (e.h0 =
          (FIELD.tileHeight + FIELD.menu.pad) * (FIELD.menu.rows + 1) +
          FIELD.menu.topPad -
          FIELD.tileHeight),
        (e.x0 = FIELD.menu.x0),
        (e.y0 = FIELD.menu.y0 + FIELD.tileHeight / 2);
    else if ("score" === this.name)
      (e.w0 = FIELD.menuWidth),
        (e.h0 =
          (FIELD.tileHeight + FIELD.menu.pad) * (FIELD.menu.rows + 1) +
          FIELD.menu.topPad -
          FIELD.tileHeight),
        (e.x0 = FIELD.menu.x0),
        (e.y0 = FIELD.menu.y0 + FIELD.tileHeight / 2);
    else if ("scenario" === this.name)
      (e.w0 = FIELD.menuWidth),
        (e.h0 = FIELD.scoreHeight),
        (e.x0 = FIELD.midWidth),
        (e.y0 = FIELD.midHeight);
    else if ("archive" === this.name)
      (e.x0 = FIELD.midWidth + 7.5 * FIELD.tileWidth - FIELD.tileWidth),
        (e.y0 = FIELD.midHeight + 0.35 * FIELD.tileHeight - FIELD.tileHeight),
        (e.w0 = 2 * FIELD.tileWidth),
        (e.h0 = 2 * FIELD.tileHeight);
    else if ("journal" === this.name)
      (e.x0 = FIELD.midWidth - 0.75 * FIELD.tileWidth),
        (e.y0 = FIELD.midHeight + 0.35 * FIELD.tileHeight - FIELD.tileHeight),
        (e.w0 = 2 * FIELD.tileWidth),
        (e.h0 = 2 * FIELD.tileHeight);
    else if ("scenarioOverlay" === this.name)
      (e.w0 = FIELD.menuWidth),
        (e.h0 = FIELD.scoreHeight),
        (e.x0 = FIELD.midWidth),
        (e.y0 = FIELD.midHeight);
    else if ("scenarioMask" === this.name)
      (e.w0 = FIELD.menuWidth),
        (e.h0 = FIELD.scoreHeight),
        (e.x0 = FIELD.midWidth),
        (e.y0 = FIELD.midHeight);
    else if ("analysisOverlay" === this.name)
      (e.w0 =
        FIELD.analysisWidth +
        FIELD.tileWidth +
        FIELD.maxBonusTiles * FIELD.tileWidth),
        (e.h0 = (1 + FIELD.rows) * FIELD.tileHeight),
        (e.x0 =
          FIELD.analysisLeft -
          FIELD.tileWidth / 2 -
          FIELD.maxBonusTiles * FIELD.tileWidth),
        (e.y0 = FIELD.topPad);
    else if ("analysis" === this.name)
      (e.w0 =
        FIELD.analysisWidth +
        FIELD.tileWidth +
        FIELD.maxBonusTiles * FIELD.tileWidth -
        FIELD.tileWidth / 2),
        (e.h0 = (1 + FIELD.rows) * FIELD.tileHeight),
        (e.x0 = FIELD.analysisLeft),
        (e.y0 = FIELD.topPad);
    else if ("victoryBase" === this.name)
      (e.w0 = 5 * FIELD.tileWidth),
        (e.h0 = SCENARIO.finishedHeight + FIELD.tileHeight / 2),
        (e.x0 = FIELD.leftPad + (FIELD.cols / 2 - 2) * FIELD.tileWidth),
        (e.y0 = FIELD.topPad + 1.5 * FIELD.tileHeight);
    else if ("victoryText" === this.name)
      (e.w0 = 5 * FIELD.tileWidth),
        (e.h0 = SCENARIO.finishedHeight + FIELD.tileHeight / 2),
        (e.x0 = FIELD.leftPad + (FIELD.cols / 2 - 2) * FIELD.tileWidth),
        (e.y0 = FIELD.topPad + 1.5 * FIELD.tileHeight);
    else if ("ticker" === this.name)
      (e.w0 = 3 * FIELD.tileWidth),
        (e.h0 = FIELD.tileHeight),
        (e.x0 = FIELD.leftPad + (FIELD.cols / 2 - 1.5 + 0.5) * FIELD.tileWidth),
        (e.y0 = FIELD.topPad + FIELD.tileHeight / 3);
    else if ("tooltip" === this.name)
      (e.w0 = 7 * FIELD.tileWidth),
        (e.h0 = (2 * FIELD.tileHeight) / 3),
        (e.x0 = FIELD.leftPad + ((3 * FIELD.cols - 9) / 4) * FIELD.tileWidth),
        (e.y0 = FIELD.topPad + FIELD.tileHeight / 2);
    else if ("menu2" === this.name)
      (e.w0 = 5 * FIELD.tileWidth),
        (e.h0 = FIELD.tileHeight),
        (e.x0 = FIELD.menu2.x0),
        (e.y0 = FIELD.menu2.y0);
    else if ("debug" === this.name)
      (e.w0 = 400), (e.h0 = 200), (e.x0 = 0), (e.y0 = 100);
    else if ("letterButton" === this.name)
      (e.w0 = 3 * FIELD.tileWidth),
        (e.h0 = FIELD.tileHeight),
        (e.x0 = FIELD.leftPad + 16.5 * FIELD.tileWidth),
        (e.y0 = FIELD.topPad + (FIELD.rows - 0.5) * FIELD.tileHeight);
    else if ("blueprint" === this.name)
      (e.w0 = 3 * FIELD.tileWidth),
        (e.h0 = FIELD.tileHeight),
        (e.x0 = FIELD.leftPad + FIELD.tileWidth / 2),
        (e.y0 = FIELD.topPad + (FIELD.rows - 0.5 + 0.2) * FIELD.tileHeight);
    else if ("overlay" === this.name)
      "title" === SCENARIO.whichOne
        ? ((e.w0 = (0.5 + FIELD.cols - 5.25) * FIELD.tileWidth),
          (e.h0 = (0.5 + FIELD.rows / 2) * FIELD.tileHeight),
          (e.x0 = FIELD.leftPad),
          (e.y0 = FIELD.topPad))
        : ((e.w0 = (1 + FIELD.cols) * FIELD.tileWidth),
          (e.h0 = (1 + FIELD.rows) * FIELD.tileHeight),
          (e.x0 = FIELD.leftPad),
          (e.y0 = FIELD.topPad));
    else if ("overlayLeft" === this.name)
      (e.w0 = FIELD.tileWidth),
        (e.h0 = (FIELD.rows - 1) * FIELD.tileHeight),
        (e.x0 = FIELD.leftPad + FIELD.tileWidth / 2),
        (e.y0 = FIELD.topPad + FIELD.tileHeight);
    else if ("overlayRight" === this.name)
      (e.w0 = FIELD.tileWidth),
        (e.h0 = (FIELD.rows - 1) * FIELD.tileHeight),
        (e.x0 = FIELD.leftPad + FIELD.tileWidth * (FIELD.cols - 0.5)),
        (e.y0 = FIELD.topPad + FIELD.tileHeight);
    else if ("overlayBottom" === this.name)
      (e.w0 = (FIELD.cols - 2) * FIELD.tileWidth),
        (e.h0 = FIELD.tileHeight),
        (e.x0 = FIELD.leftPad + 1.5 * FIELD.tileWidth),
        (e.y0 = FIELD.topPad + (FIELD.rows - 0.5) * FIELD.tileHeight);
    else if ("title" === this.name)
      (e.w0 =
        10 * FIELD.tileWidth +
        (35 * FIELD.tileWidth) / 8 -
        FIELD.tileWidth / 2),
        (e.h0 = (15 * FIELD.tileHeight) / 2 - FIELD.tileHeight / 2),
        (e.x0 = FIELD.leftPad + FIELD.tileWidth / 4),
        (e.y0 = FIELD.topPad + FIELD.tileHeight / 4);
    else if ("titleAbout" === this.name) {
      var t = (114 * FIELD.tileWidth) / 16,
        i = 5 * FIELD.tileWidth,
        a = 4 * FIELD.tileWidth;
      (e.w0 = i),
        (e.h0 = a),
        (e.x0 = FIELD.leftPad + t - i / 2),
        (e.y0 = FIELD.topPad + (27.7 * FIELD.tileHeight) / 4 - a);
    } else if ("titleText" === this.name) {
      (t = (114 * FIELD.tileWidth) / 16),
        (i = 5 * FIELD.tileWidth),
        (a = 4 * FIELD.tileWidth);
      (e.w0 = i),
        (e.h0 = a),
        (e.x0 = FIELD.leftPad + t - i / 2),
        (e.y0 = FIELD.topPad + (27.7 * FIELD.tileHeight) / 4 - a);
    } else
      "titleLearn" === this.name
        ? ((e.w0 = 1.4 * FIELD.tileWidth),
          (e.h0 = 0.95 * FIELD.tileHeight),
          (e.x0 = 13.2 * FIELD.tileWidth),
          (e.y0 = 6.7 * FIELD.tileHeight))
        : "titleLink" === this.name
          ? ((e.w0 = 1.6 * FIELD.tileWidth),
            (e.h0 = 0.8 * FIELD.tileHeight),
            (e.x0 = 12.9 * FIELD.tileWidth),
            (e.y0 = 0.6 * FIELD.tileHeight))
          : "underlay" === this.name
            ? ((e.w0 =
                10 * FIELD.tileWidth +
                (35 * FIELD.tileWidth) / 8 -
                FIELD.tileWidth / 2),
              (e.h0 = (15 * FIELD.tileHeight) / 2 - FIELD.tileHeight / 2),
              (e.x0 = FIELD.leftPad + FIELD.tileWidth / 4),
              (e.y0 = FIELD.topPad + FIELD.tileHeight / 4))
            : "selectOverlay" === this.name
              ? ((e.w0 = 30 * FIELD.tileWidth),
                (e.h0 = 15 * FIELD.tileHeight),
                (e.x0 = FIELD.leftPad),
                (e.y0 = FIELD.topPad))
              : "toggles" === this.name
                ? "title" === STATE.mode
                  ? ((e.w0 = 1 * FIELD.tileWidth),
                    (e.h0 = 1 * FIELD.tileHeight),
                    (e.x0 = FIELD.leftPad),
                    (e.y0 = FIELD.topPad))
                  : ((e.w0 = 2 * FIELD.tileWidth),
                    (e.h0 = 2 * FIELD.tileHeight),
                    (e.x0 = FIELD.leftPad),
                    (e.y0 = FIELD.topPad))
                : "select" === this.name
                  ? ((e.w0 = 30 * FIELD.tileWidth),
                    (e.h0 = 15 * FIELD.tileHeight),
                    (e.x0 = FIELD.leftPad),
                    (e.y0 = FIELD.topPad))
                  : "selectBase" === this.name
                    ? ((e.w0 = 30 * FIELD.tileWidth),
                      (e.h0 = 15 * FIELD.tileHeight),
                      (e.x0 = FIELD.leftPad),
                      (e.y0 = FIELD.topPad))
                    : "selectButtons" === this.name
                      ? ((e.w0 = 5.5 * FIELD.tileWidth),
                        (e.h0 = 2 * FIELD.tileHeight),
                        (e.x0 = FIELD.leftPad + 5 * FIELD.tileWidth),
                        (e.y0 = FIELD.topPad + 1.5 * FIELD.tileHeight))
                      : "selectText" === this.name
                        ? ((e.w0 = FIELD.selBoxW - FIELD.tileWidth),
                          (e.h0 = FIELD.selBoxH),
                          (e.x0 =
                            FIELD.leftPad +
                            30.4 * FIELD.tileWidth -
                            FIELD.selBoxW),
                          (e.y0 = FIELD.topPad + 1.2 * FIELD.tileHeight))
                        : "selectAward" === this.name
                          ? ((e.w0 = FIELD.selBoxW - FIELD.tileWidth),
                            (e.h0 = FIELD.selBoxH),
                            (e.x0 =
                              FIELD.leftPad +
                              30.4 * FIELD.tileWidth -
                              FIELD.selBoxW),
                            (e.y0 = FIELD.topPad + 1.2 * FIELD.tileHeight))
                          : "confirm" === this.name
                            ? "title" === STATE.mode
                              ? ((e.w0 = 3 * FIELD.tileWidth),
                                (e.h0 = 1.25 * FIELD.tileHeight),
                                (e.x0 = FIELD.leftPad + 5.5 * FIELD.tileWidth),
                                (e.y0 = FIELD.topPad + 3.5 * FIELD.tileHeight))
                              : ((e.w0 = 6 * FIELD.tileWidth),
                                (e.h0 = 2.5 * FIELD.tileHeight),
                                (e.x0 = FIELD.leftPad + 11 * FIELD.tileWidth),
                                (e.y0 = FIELD.topPad + 7 * FIELD.tileHeight))
                            : "tutorialHeader" === this.name
                              ? ((e.w0 =
                                  10 * FIELD.tileWidth + TUTORIAL.boxWidth),
                                (e.h0 = 2 * FIELD.tileHeight),
                                (e.x0 = TUTORIAL.leftPad),
                                (e.y0 = TUTORIAL.topPad))
                              : "tutorialBase" === this.name
                                ? ((e.w0 =
                                    10 * FIELD.tileWidth + TUTORIAL.boxWidth),
                                  (e.h0 = 14 * FIELD.tileHeight),
                                  (e.x0 = TUTORIAL.leftPad),
                                  (e.y0 = TUTORIAL.topPad))
                                : "tutorialGates" === this.name
                                  ? ((e.x0 =
                                      TUTORIAL.leftPad + 1.5 * FIELD.tileWidth),
                                    (e.y0 =
                                      TUTORIAL.topPad + 1.5 * FIELD.tileHeight),
                                    (e.w0 = 6 * FIELD.tileWidth),
                                    (e.h0 = 12 * FIELD.tileHeight))
                                  : "tutorialEffects" === this.name
                                    ? ((e.x0 =
                                        TUTORIAL.leftPad +
                                        1.5 * FIELD.tileWidth),
                                      (e.y0 =
                                        TUTORIAL.topPad +
                                        1.5 * FIELD.tileHeight),
                                      (e.w0 = 6 * FIELD.tileWidth),
                                      (e.h0 = 12 * FIELD.tileHeight))
                                    : "tutorialControls" === this.name
                                      ? ((e.x0 =
                                          TUTORIAL.leftPad +
                                          1.5 * FIELD.tileWidth),
                                        (e.y0 =
                                          TUTORIAL.topPad +
                                          1.5 * FIELD.tileHeight),
                                        (e.w0 = 6 * FIELD.tileWidth),
                                        (e.h0 = 12 * FIELD.tileHeight))
                                      : "tutorialExtra" === this.name
                                        ? ((e.x0 =
                                            TUTORIAL.leftPad +
                                            1.2 * FIELD.tileWidth),
                                          (e.y0 =
                                            TUTORIAL.topPad +
                                            1.5 * FIELD.tileHeight),
                                          (e.w0 = 6 * FIELD.tileWidth),
                                          (e.h0 = 12 * FIELD.tileHeight))
                                        : "robotBase" === this.name
                                          ? ((e.x0 = ROBOT.leftPad),
                                            (e.y0 = ROBOT.topPad),
                                            (e.w0 = ROBOT.width),
                                            (e.h0 =
                                              ROBOT.height +
                                              0.5 * FIELD.tileHeight))
                                          : "robotScreen" === this.name
                                            ? ((e.x0 =
                                                ROBOT.leftPad +
                                                ROBOT.margin +
                                                FIELD.tileWidth / 6),
                                              (e.y0 =
                                                ROBOT.topPad + ROBOT.margin),
                                              (e.w0 = ROBOT.screenW),
                                              (e.h0 = 3 * FIELD.tileHeight))
                                            : "robotScreenBase" === this.name
                                              ? ((e.x0 =
                                                  ROBOT.leftPad +
                                                  FIELD.tileWidth / 6),
                                                (e.y0 = ROBOT.topPad),
                                                (e.w0 =
                                                  ROBOT.screenW +
                                                  2 * ROBOT.margin),
                                                (e.h0 =
                                                  ROBOT.screenH +
                                                  2 * ROBOT.margin))
                                              : "robotText" === this.name
                                                ? ((e.x0 =
                                                    ROBOT.leftPad +
                                                    ROBOT.margin +
                                                    ROBOT.screenW +
                                                    2 * ROBOT.lineGap),
                                                  (e.y0 =
                                                    ROBOT.topPad +
                                                    ROBOT.margin),
                                                  (e.w0 = ROBOT.textW),
                                                  (e.h0 = ROBOT.screenH))
                                                : "robotButton" === this.name &&
                                                  ((e.x0 = ROBOT.leftPad),
                                                  (e.y0 =
                                                    ROBOT.topPad +
                                                    ROBOT.height -
                                                    1.5 * FIELD.tileWidth),
                                                  (e.w0 = ROBOT.width),
                                                  (e.h0 =
                                                    1.5 * FIELD.tileWidth));
    return e;
  }
}
