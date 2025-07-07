class Svgs {
  constructor(e, t) {
    (this._name = t),
      (this._svg = document.getElementById(e)),
      (this._x0 = 0),
      (this._y0 = 0),
      (this._h0 = 0),
      (this._w0 = 0),
      (this._box = 0),
      (this._isActive = !1),
      (document.getElementById(e).style.left = "0px"),
      (document.getElementById(e).style.top = "0px"),
      document.getElementById(e).setAttribute("width", "100px"),
      document.getElementById(e).setAttribute("height", "100px"),
      (document.getElementById(e).style.width = 100),
      (document.getElementById(e).style.height = 100);
  }
  get name() {
    return this._name;
  }
  get svg() {
    return this._svg;
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
  get box() {
    return this._box;
  }
  get isActive() {
    return this._isActive;
  }
  set x0(e) {
    (this.svg.style.left = e + "px"), (this._x0 = e);
  }
  set y0(e) {
    (this.svg.style.top = e + "px"), (this._y0 = e);
  }
  set h0(e) {
    this.svg.setAttribute("height", e + "px"),
      (this.svg.style.height = e + "px"),
      (this._h0 = e);
  }
  set w0(e) {
    this.svg.setAttribute("width", e + "px"),
      (this.svg.style.width = e + "px"),
      (this._w0 = e);
  }
  set box(e) {
    this.svg.setAttribute("viewBox", e), (this._box = e);
  }
  set isActive(e) {
    this._isActive = e;
  }
  resize() {
    var e = this.getDims();
    this.isActive &&
      (e.x0 && (this.x0 = e.x0),
      e.y0 && (this.y0 = e.y0),
      e.w0 && (this.w0 = e.w0),
      e.h0 && (this.h0 = e.h0),
      e.box && (this.box = e.box));
  }
  static translateAll(e) {
    for (var t = Object.entries(e), i = 0; i < t.length; i++)
      t[i][1].translate();
  }
  translate() {
    var e = this.getDims();
    this.isActive && ((this.x0 = e.x0), (this.y0 = e.y0));
  }
  activate() {
    (this.isActive = !0), (this.svg.style.display = "block"), this.resize();
  }
  deactivate() {
    (this.w0 = 0),
      (this.h0 = 0),
      (this.x0 = 0),
      (this.y0 = 0),
      (this.isActive = !1),
      (this.svg.style.display = "none");
  }
  static deactivateAll(e) {
    for (var t = Object.entries(e), i = 0; i < t.length; i++)
      t[i][1].deactivate();
  }
  getDims() {
    var e = {};
    if ("safariicon" === this.name)
      (e.w0 = (4.4 * FIELD.tileWidth) / 3),
        (e.h0 = (4.4 * FIELD.tileHeight) / 3),
        (e.x0 = FIELD.leftPad + 5 * FIELD.tileWidth + 0 * FIELD.tileWidth),
        (e.y0 =
          FIELD.topPad +
          (0.5 * FIELD.tileHeight) / 4 +
          (13.75 * FIELD.tileHeight) / 2),
        (e.box = "0 0 256 256");
    else if ("fireicon" === this.name)
      (e.w0 = (3.5 * FIELD.tileWidth) / 3),
        (e.h0 = (3.5 * FIELD.tileHeight) / 3),
        (e.x0 = FIELD.leftPad + 4.5 * FIELD.tileWidth + 0 * FIELD.tileWidth),
        (e.y0 =
          FIELD.topPad +
          (0.5 * FIELD.tileHeight) / 4 +
          (13.75 * FIELD.tileHeight) / 2),
        (e.box = "0 0 256 256");
    else if ("operaicon" === this.name)
      (e.w0 = (3.5 * FIELD.tileWidth) / 3),
        (e.h0 = (3.5 * FIELD.tileHeight) / 3),
        (e.x0 =
          FIELD.leftPad +
          2.95 * FIELD.tileWidth +
          0.5 * FIELD.tileWidth +
          0 * FIELD.tileWidth),
        (e.y0 =
          FIELD.topPad +
          (0.5 * FIELD.tileHeight) / 4 +
          (13.75 * FIELD.tileHeight) / 2),
        (e.box = "0 0 256 256");
    else if ("braveicon" === this.name)
      (e.w0 = FIELD.tileWidth / 3),
        (e.h0 = FIELD.tileHeight / 3),
        (e.x0 =
          FIELD.leftPad +
          2.5 * FIELD.tileWidth +
          0.5 * FIELD.tileWidth +
          0 * FIELD.tileWidth),
        (e.y0 =
          FIELD.topPad +
          (0.5 * FIELD.tileHeight) / 4 +
          (13.75 * FIELD.tileHeight) / 2),
        (e.box = "0 0 256 256");
    else if ("edgeicon" === this.name)
      (e.w0 = FIELD.tileWidth / 3),
        (e.h0 = FIELD.tileHeight / 3),
        (e.x0 =
          FIELD.leftPad +
          2 * FIELD.tileWidth +
          0.5 * FIELD.tileWidth +
          0 * FIELD.tileWidth),
        (e.y0 =
          FIELD.topPad +
          (0.5 * FIELD.tileHeight) / 4 +
          (13.75 * FIELD.tileHeight) / 2),
        (e.box = "0 0 256 256");
    else if ("chromeicon" === this.name)
      (e.w0 = FIELD.tileWidth / 3),
        (e.h0 = FIELD.tileHeight / 3),
        (e.x0 =
          FIELD.leftPad +
          1.5 * FIELD.tileWidth +
          0.5 * FIELD.tileWidth +
          0 * FIELD.tileWidth),
        (e.y0 =
          FIELD.topPad +
          (0.5 * FIELD.tileHeight) / 4 +
          (13.75 * FIELD.tileHeight) / 2),
        (e.box = "0 0 190.5 190.5");
    else if ("awsicon" === this.name)
      (e.w0 = (2.5 * FIELD.tileWidth) / 3),
        (e.h0 = (2.5 * FIELD.tileHeight) / 3),
        (e.x0 = FIELD.leftPad + 9.4 * FIELD.tileWidth),
        (e.y0 =
          FIELD.topPad +
          (0.5 * FIELD.tileHeight) / 4 +
          (13.8 * FIELD.tileHeight) / 2),
        (e.box = "0 0 256 512");
    else if ("title" === this.name)
      (e.w0 = 9.5 * FIELD.tileWidth + (35 * FIELD.tileWidth) / 8),
        (e.h0 = (14.5 * FIELD.tileHeight) / 2),
        (e.x0 = FIELD.leftPad + (0.5 * FIELD.tileWidth) / 4),
        (e.y0 = FIELD.topPad + (0.5 * FIELD.tileHeight) / 4);
    else if ("select" === this.name)
      (e.w0 = 29 * FIELD.tileWidth),
        (e.h0 = 14 * FIELD.tileHeight),
        (e.x0 = FIELD.leftPad + FIELD.tileWidth / 2),
        (e.y0 = FIELD.topPad + FIELD.tileHeight / 2);
    else if ("board" === this.name) {
      var t = 48 / FIELD.tileWidth;
      (e.w0 = FIELD.tileWidth * FIELD.cols),
        (e.h0 = FIELD.tileHeight * FIELD.rows),
        (e.x0 = FIELD.leftPad + FIELD.tileWidth / 2),
        (e.y0 = FIELD.topPad + FIELD.tileHeight / 2),
        (e.box =
          "0 0 " +
          6 * t * (FIELD.tileWidth * FIELD.cols) +
          " " +
          6 * t * (FIELD.tileHeight * FIELD.rows));
    } else if ("menu" === this.name) {
      t = 48 / FIELD.tileWidth;
      (e.x0 = FIELD.menu.x0 + FIELD.tileWidth / 2),
        (e.y0 = FIELD.menu.y0 + FIELD.tileHeight / 2),
        (e.w0 =
          (FIELD.tileWidth + FIELD.menu.pad) * (FIELD.menu.cols + 1) -
          FIELD.tileWidth),
        (e.h0 =
          (FIELD.tileHeight + FIELD.menu.pad) * (FIELD.menu.rows + 1) -
          FIELD.tileHeight +
          FIELD.menu.topPad),
        (e.box = "0 0 " + 6 * t * e.w0 + " " + 6 * t * e.h0);
    } else if ("analysis" === this.name)
      (e.x0 = FIELD.analysisLeft),
        (e.y0 = FIELD.topPad + FIELD.tileHeight / 2),
        (e.w0 = FIELD.analysisWidth),
        (e.h0 = FIELD.tileHeight * FIELD.rows);
    else if ("tutorial" === this.name) {
      t = 48 / FIELD.tileWidth;
      (e.x0 = TUTORIAL.leftPad + 1.5 * FIELD.tileWidth),
        (e.y0 = TUTORIAL.topPad + 1.5 * FIELD.tileHeight),
        (e.w0 = 6 * FIELD.tileWidth),
        (e.h0 = 12 * FIELD.tileHeight),
        (e.box = "0 0 " + 6 * t * e.w0 + " " + 6 * t * e.h0);
    } else if ("tutorialB" === this.name) {
      t = 48 / FIELD.tileWidth;
      (e.x0 = TUTORIAL.leftPad + 1 * FIELD.tileWidth),
        (e.y0 = TUTORIAL.topPad + 1.5 * FIELD.tileHeight),
        (e.w0 = 6 * FIELD.tileWidth),
        (e.h0 = 12 * FIELD.tileHeight),
        (e.box = "0 0 " + 6 * t * e.w0 + " " + 6 * t * e.h0);
    } else
      "tiledA" === this.name
        ? ((e.x0 = FIELD.leftPad + FIELD.leftMargin - OVERLAY.margin),
          (e.y0 = FIELD.topPad + FIELD.topMargin - OVERLAY.margin),
          (e.w0 = 2 * OVERLAY.margin + FIELD.tileWidth * FIELD.cols),
          (e.h0 = 2 * OVERLAY.margin + FIELD.tileHeight * FIELD.rows),
          (this.svg.style.borderBottomLeftRadius = FIELD.tileWidth / 3 + "px"),
          (this.svg.style.borderBottomRightRadius = FIELD.tileWidth / 3 + "px"),
          (this.svg.style.borderTopLeftRadius = FIELD.tileWidth / 3 + "px"),
          (this.svg.style.borderTopRightRadius = FIELD.tileWidth / 3 + "px"))
        : "tiledB" === this.name
          ? ((e.x0 = FIELD.leftPad + FIELD.leftMargin - OVERLAY.margin),
            (e.y0 = FIELD.topPad + FIELD.topMargin - OVERLAY.margin),
            (e.w0 = 2 * OVERLAY.margin + FIELD.tileWidth * FIELD.cols),
            (e.h0 = 2 * OVERLAY.margin + FIELD.tileHeight * FIELD.rows),
            (this.svg.style.borderBottomLeftRadius =
              FIELD.tileWidth / 3 + "px"),
            (this.svg.style.borderBottomRightRadius =
              FIELD.tileWidth / 3 + "px"),
            (this.svg.style.borderTopLeftRadius = FIELD.tileWidth / 3 + "px"),
            (this.svg.style.borderTopRightRadius = FIELD.tileWidth / 3 + "px"))
          : "tiledC" === this.name
            ? ((e.x0 = CANV.menuOverlay.x0 + FIELD.tileWidth / 6),
              (e.y0 = CANV.menuOverlay.y0 + FIELD.tileHeight / 6),
              (e.w0 = CANV.menuOverlay.w0 - (2 * FIELD.tileWidth) / 6),
              (e.h0 = CANV.menuOverlay.h0 - (2 * FIELD.tileWidth) / 6),
              (this.svg.style.borderBottomLeftRadius =
                (2 * FIELD.tileWidth) / 3 + "px"),
              (this.svg.style.borderBottomRightRadius =
                (2 * FIELD.tileWidth) / 3 + "px"),
              (this.svg.style.borderTopLeftRadius =
                (2 * FIELD.tileWidth) / 3 + "px"),
              (this.svg.style.borderTopRightRadius =
                (2 * FIELD.tileWidth) / 3 + "px"))
            : "tiledD" === this.name
              ? ((e.x0 = CANV.menuOverlay.x0 + FIELD.tileWidth / 6),
                (e.y0 = CANV.menuOverlay.y0 + FIELD.tileHeight / 6),
                (e.w0 = CANV.menuOverlay.w0 - (2 * FIELD.tileWidth) / 6),
                (e.h0 = CANV.menuOverlay.h0 - (2 * FIELD.tileWidth) / 6),
                (this.svg.style.borderBottomLeftRadius =
                  (2 * FIELD.tileWidth) / 3 + "px"),
                (this.svg.style.borderBottomRightRadius =
                  (2 * FIELD.tileWidth) / 3 + "px"),
                (this.svg.style.borderTopLeftRadius =
                  (2 * FIELD.tileWidth) / 3 + "px"),
                (this.svg.style.borderTopRightRadius =
                  (2 * FIELD.tileWidth) / 3 + "px"))
              : "tiledE" === this.name
                ? ((e.x0 = CANV.scenarioOverlay.x0 + FIELD.tileWidth / 6),
                  (e.y0 = CANV.scenarioOverlay.y0 + FIELD.tileWidth / 6),
                  (e.w0 = CANV.scenarioOverlay.w0 - (2 * FIELD.tileWidth) / 6),
                  (e.h0 = CANV.scenarioOverlay.h0 - (2 * FIELD.tileWidth) / 6),
                  (this.svg.style.borderBottomLeftRadius =
                    (2 * FIELD.tileWidth) / 3 + "px"),
                  (this.svg.style.borderBottomRightRadius =
                    (2 * FIELD.tileWidth) / 3 + "px"),
                  (this.svg.style.borderTopLeftRadius =
                    (2 * FIELD.tileWidth) / 3 + "px"),
                  (this.svg.style.borderTopRightRadius =
                    (2 * FIELD.tileWidth) / 3 + "px"))
                : "tiledF" === this.name
                  ? ((e.x0 = CANV.scenarioOverlay.x0 + FIELD.tileWidth / 6),
                    (e.y0 = CANV.scenarioOverlay.y0 + FIELD.tileWidth / 6),
                    (e.w0 =
                      CANV.scenarioOverlay.w0 - (2 * FIELD.tileWidth) / 6),
                    (e.h0 =
                      CANV.scenarioOverlay.h0 - (2 * FIELD.tileWidth) / 6),
                    (this.svg.style.borderBottomLeftRadius =
                      (2 * FIELD.tileWidth) / 3 + "px"),
                    (this.svg.style.borderBottomRightRadius =
                      (2 * FIELD.tileWidth) / 3 + "px"),
                    (this.svg.style.borderTopLeftRadius =
                      (2 * FIELD.tileWidth) / 3 + "px"),
                    (this.svg.style.borderTopRightRadius =
                      (2 * FIELD.tileWidth) / 3 + "px"))
                  : "tiledG" === this.name
                    ? ((e.x0 =
                        CANV.tutorialBase.x0 +
                        FIELD.tileWidth -
                        TUTORIAL.margin),
                      (e.y0 = CANV.tutorialBase.y0 + TUTORIAL.margin),
                      (e.w0 =
                        8 * FIELD.tileWidth +
                        TUTORIAL.boxWidth +
                        2 * TUTORIAL.margin),
                      (e.h0 = 14 * FIELD.tileHeight - 2 * TUTORIAL.margin),
                      (this.svg.style.borderBottomLeftRadius =
                        FIELD.tileWidth / 2 + "px"),
                      (this.svg.style.borderBottomRightRadius =
                        FIELD.tileWidth / 2 + "px"),
                      (this.svg.style.borderTopLeftRadius =
                        FIELD.tileWidth / 2 + "px"),
                      (this.svg.style.borderTopRightRadius =
                        FIELD.tileWidth / 2 + "px"))
                    : "tiledH" === this.name
                      ? ((e.x0 =
                          CANV.tutorialBase.x0 +
                          FIELD.tileWidth -
                          TUTORIAL.margin),
                        (e.y0 = CANV.tutorialBase.y0 + TUTORIAL.margin),
                        (e.w0 =
                          8 * FIELD.tileWidth +
                          TUTORIAL.boxWidth +
                          2 * TUTORIAL.margin),
                        (e.h0 = 14 * FIELD.tileHeight - 2 * TUTORIAL.margin),
                        (this.svg.style.borderBottomLeftRadius =
                          FIELD.tileWidth / 2 + "px"),
                        (this.svg.style.borderBottomRightRadius =
                          FIELD.tileWidth / 2 + "px"),
                        (this.svg.style.borderTopLeftRadius =
                          FIELD.tileWidth / 2 + "px"),
                        (this.svg.style.borderTopRightRadius =
                          FIELD.tileWidth / 2 + "px"))
                      : "tiledI" === this.name
                        ? ((e.x0 =
                            FIELD.leftPad +
                            FIELD.tileWidth / 2 -
                            OVERLAY.margin),
                          (e.y0 =
                            FIELD.topPad +
                            FIELD.tileHeight / 2 -
                            OVERLAY.margin),
                          (e.w0 = 29 * FIELD.tileWidth + 2 * OVERLAY.margin),
                          (e.h0 = 14 * FIELD.tileHeight + 2 * OVERLAY.margin),
                          (this.svg.style.borderBottomLeftRadius =
                            FIELD.tileWidth / 3 + "px"),
                          (this.svg.style.borderBottomRightRadius =
                            FIELD.tileWidth / 3 + "px"),
                          (this.svg.style.borderTopLeftRadius =
                            FIELD.tileWidth / 3 + "px"),
                          (this.svg.style.borderTopRightRadius =
                            FIELD.tileWidth / 3 + "px"))
                        : "tiledJ" === this.name
                          ? ((e.x0 =
                              FIELD.leftPad +
                              FIELD.tileWidth / 2 -
                              OVERLAY.margin),
                            (e.y0 =
                              FIELD.topPad +
                              FIELD.tileHeight / 2 -
                              OVERLAY.margin),
                            (e.w0 = 29 * FIELD.tileWidth + 2 * OVERLAY.margin),
                            (e.h0 = 14 * FIELD.tileHeight + 2 * OVERLAY.margin),
                            (this.svg.style.borderBottomLeftRadius =
                              FIELD.tileWidth / 3 + "px"),
                            (this.svg.style.borderBottomRightRadius =
                              FIELD.tileWidth / 3 + "px"),
                            (this.svg.style.borderTopLeftRadius =
                              FIELD.tileWidth / 3 + "px"),
                            (this.svg.style.borderTopRightRadius =
                              FIELD.tileWidth / 3 + "px"))
                          : "tiledK" === this.name
                            ? ((e.x0 =
                                FIELD.leftPad +
                                FIELD.tileWidth / 2 +
                                OVERLAY.margin),
                              (e.y0 =
                                FIELD.topPad +
                                FIELD.tileHeight / 2 +
                                OVERLAY.margin),
                              (e.w0 = 29 * FIELD.tileWidth - FIELD.selBoxW),
                              (e.h0 =
                                14 * FIELD.tileHeight - 2 * OVERLAY.margin),
                              (this.svg.style.borderBottomLeftRadius =
                                FIELD.tileWidth / 3 + "px"),
                              (this.svg.style.borderBottomRightRadius =
                                FIELD.tileWidth / 3 + "px"),
                              (this.svg.style.borderTopLeftRadius =
                                FIELD.tileWidth / 3 + "px"),
                              (this.svg.style.borderTopRightRadius =
                                FIELD.tileWidth / 3 + "px"))
                            : "tiledL" === this.name
                              ? ((e.x0 = FIELD.analysisLeft),
                                (e.y0 =
                                  FIELD.topPad +
                                  FIELD.topMargin -
                                  OVERLAY.margin),
                                (e.w0 = FIELD.analysisWidth),
                                (e.h0 =
                                  FIELD.tileHeight * FIELD.rows +
                                  2 * OVERLAY.margin),
                                (this.svg.style.borderBottomLeftRadius = "0px"),
                                (this.svg.style.borderBottomRightRadius =
                                  (2 * FIELD.tileWidth) / 3 + "px"),
                                (this.svg.style.borderTopLeftRadius = "0px"),
                                (this.svg.style.borderTopRightRadius =
                                  (2 * FIELD.tileWidth) / 3 + "px"))
                              : "tiledM" === this.name
                                ? ((e.x0 = FIELD.analysisLeft),
                                  (e.y0 =
                                    FIELD.topPad +
                                    FIELD.topMargin -
                                    OVERLAY.margin),
                                  (e.w0 = FIELD.analysisWidth),
                                  (e.h0 =
                                    FIELD.tileHeight * FIELD.rows +
                                    2 * OVERLAY.margin),
                                  (this.svg.style.borderBottomLeftRadius =
                                    "0px"),
                                  (this.svg.style.borderBottomRightRadius =
                                    (2 * FIELD.tileWidth) / 3 + "px"),
                                  (this.svg.style.borderTopLeftRadius = "0px"),
                                  (this.svg.style.borderTopRightRadius =
                                    (2 * FIELD.tileWidth) / 3 + "px"))
                                : "tiledN" === this.name
                                  ? ((e.x0 =
                                      ROBOT.leftPad +
                                      (2 * FIELD.tileWidth) / 6),
                                    (e.y0 =
                                      ROBOT.topPad +
                                      FIELD.tileWidth / 24 +
                                      FIELD.tileWidth / 6),
                                    (e.w0 =
                                      ROBOT.width -
                                      (2 * FIELD.tileWidth) / 6 -
                                      FIELD.tileWidth / 24 -
                                      FIELD.tileWidth / 4),
                                    (e.h0 =
                                      ROBOT.height -
                                      1.5 * FIELD.tileWidth -
                                      FIELD.tileWidth / 24 -
                                      (2 * FIELD.tileWidth) / 6),
                                    (this.svg.style.borderBottomLeftRadius =
                                      FIELD.tileWidth / 3 + "px"),
                                    (this.svg.style.borderBottomRightRadius =
                                      FIELD.tileWidth / 3 + "px"),
                                    (this.svg.style.borderTopLeftRadius =
                                      FIELD.tileWidth / 3 + "px"),
                                    (this.svg.style.borderTopRightRadius =
                                      FIELD.tileWidth / 3 + "px"))
                                  : "tiledO" === this.name
                                    ? ((e.x0 =
                                        ROBOT.leftPad +
                                        (2 * FIELD.tileWidth) / 6),
                                      (e.y0 =
                                        ROBOT.topPad +
                                        FIELD.tileWidth / 24 +
                                        FIELD.tileWidth / 6),
                                      (e.w0 =
                                        ROBOT.width -
                                        (2 * FIELD.tileWidth) / 6 -
                                        FIELD.tileWidth / 24 -
                                        FIELD.tileWidth / 4),
                                      (e.h0 =
                                        ROBOT.height -
                                        1.5 * FIELD.tileWidth -
                                        FIELD.tileWidth / 24 -
                                        (2 * FIELD.tileWidth) / 6),
                                      (this.svg.style.borderBottomLeftRadius =
                                        FIELD.tileWidth / 3 + "px"),
                                      (this.svg.style.borderBottomRightRadius =
                                        FIELD.tileWidth / 3 + "px"),
                                      (this.svg.style.borderTopLeftRadius =
                                        FIELD.tileWidth / 3 + "px"),
                                      (this.svg.style.borderTopRightRadius =
                                        FIELD.tileWidth / 3 + "px"))
                                    : "tiledP" === this.name
                                      ? ((e.x0 =
                                          ROBOT.leftPad +
                                          ROBOT.width / 2 -
                                          1.4 * FIELD.tileWidth),
                                        (e.y0 =
                                          ROBOT.topPad +
                                          ROBOT.height -
                                          1.35 * FIELD.tileWidth),
                                        (e.w0 = 2.75 * FIELD.tileWidth),
                                        (e.h0 = 1.46 * FIELD.tileHeight),
                                        (this.svg.style.borderBottomLeftRadius =
                                          FIELD.tileWidth / 3 + "px"),
                                        (this.svg.style.borderBottomRightRadius =
                                          FIELD.tileWidth / 3 + "px"),
                                        (this.svg.style.borderTopLeftRadius =
                                          FIELD.tileWidth / 3 + "px"),
                                        (this.svg.style.borderTopRightRadius =
                                          FIELD.tileWidth / 3 + "px"))
                                      : "tiledQ" === this.name
                                        ? ((e.x0 =
                                            ROBOT.leftPad +
                                            ROBOT.width -
                                            7.19 * FIELD.tileWidth),
                                          (e.y0 =
                                            ROBOT.topPad +
                                            ROBOT.height -
                                            1.35 * FIELD.tileWidth),
                                          (e.w0 = 5.3 * FIELD.tileWidth),
                                          (e.h0 = 1.46 * FIELD.tileHeight),
                                          (this.svg.style.borderBottomLeftRadius =
                                            FIELD.tileWidth / 3 + "px"),
                                          (this.svg.style.borderBottomRightRadius =
                                            FIELD.tileWidth / 3 + "px"),
                                          (this.svg.style.borderTopLeftRadius =
                                            FIELD.tileWidth / 3 + "px"),
                                          (this.svg.style.borderTopRightRadius =
                                            FIELD.tileWidth / 3 + "px"))
                                        : "tiledR" === this.name &&
                                          ((e.w0 =
                                            (2 * FIELD.tileWidth) / 6 +
                                            FIELD.tileWidth *
                                              (FIELD.cols - 5.25)),
                                          (e.h0 =
                                            (2 * FIELD.tileWidth) / 6 +
                                            FIELD.tileHeight *
                                              (FIELD.rows / 2)),
                                          (e.x0 =
                                            FIELD.leftPad +
                                            FIELD.tileWidth / 12),
                                          (e.y0 =
                                            FIELD.topPad +
                                            FIELD.tileWidth / 12),
                                          (this.svg.style.borderBottomLeftRadius =
                                            (0.9 * FIELD.tileWidth) / 6 + "px"),
                                          (this.svg.style.borderBottomRightRadius =
                                            (0.9 * FIELD.tileWidth) / 6 + "px"),
                                          (this.svg.style.borderTopLeftRadius =
                                            (0.9 * FIELD.tileWidth) / 6 + "px"),
                                          (this.svg.style.borderTopRightRadius =
                                            (0.9 * FIELD.tileWidth) / 6 +
                                            "px"));
    return e;
  }
}
