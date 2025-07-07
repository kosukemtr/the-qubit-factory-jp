class Robot {
  static draw(e, t, i, a, r, s) {
    "levelSelect" === ROBOT.oldMode
      ? Robot.drawWoman(e, t, i, a, r, s)
      : Robot.drawMan(e, t, i, a, r, s);
  }
  static drawWoman(e, t, i, a, r, s) {
    (r = 2 * r ** 2 - 1),
      ROBOT.isDone && r + 1 < 0.1 && (ROBOT.lipMove = !1),
      ROBOT.lipMove || (r = 0.1 * r - 0.9),
      Math.abs(i) < 0.1 &&
        (ROBOT.lipMove
          ? (ROBOT.bob = 1.75 * Math.random())
          : (ROBOT.bob = 1 * Math.random()));
    var o = 0.25 * ROBOT.bob * i;
    e.save(),
      (e.strokeStyle = "teal"),
      (e.fillStyle = "teal"),
      (e.lineCap = "round"),
      (e.lineJoin = "round"),
      (e.lineWidth = 0.2),
      (e.shadowBlur = 6),
      (e.shadowOffsetX = 0),
      (e.shadowOffsetY = 0),
      (e.shadowColor = "teal"),
      e.scale(t, t);
    var n = 4,
      l = 8,
      h = 8,
      d = 5,
      u = 5,
      c = 7,
      I = 0.2 * Math.PI;
    e.beginPath(),
      e.ellipse(l, h, d, u, 0, 0, 2 * Math.PI),
      Robot.shadowStroke(e, n),
      e.beginPath(),
      e.moveTo(l - 0.7 * d, h + 2 * u),
      e.quadraticCurveTo(l - 1 * d, h + 1.2 * u, l - 0.5 * d, h + 0.9 * u),
      e.moveTo(l + 0.7 * d, h + 2 * u),
      e.quadraticCurveTo(l + 1 * d, h + 1.2 * u, l + 0.5 * d, h + 0.9 * u),
      e.moveTo(l + 0.2 * d, h + u),
      e.lineTo(l - 0.2 * d, h + u + 0.2 * u),
      e.lineTo(l - 0.2 * d, h + 2 * u),
      e.moveTo(l - 0.3 * d, h + u - 0.02 * u),
      e.lineTo(l - 0.05 * d, h + u + 0.13 * u),
      Robot.shadowStroke(e, n),
      e.beginPath(),
      e.ellipse(l, h + 1.3 * u, 0.3, 0.3, 0, 0, 2 * Math.PI),
      Robot.shadowStroke(e, n);
    var E = 5 * Math.sin(0.075 * Math.PI + 0.3 * o),
      S = 5 * Math.sin(0.075 * Math.PI - 0.3 * o);
    e.beginPath(),
      e.moveTo(l - E, h + 0.55 * u),
      e.lineTo(l - E, h + 0.45 * u),
      e.lineTo(l + S, h + 0.45 * u),
      e.lineTo(l + S, h + 0.55 * u),
      e.quadraticCurveTo(
        l - 5 * Math.sin(0.3 * o),
        h + 0.55 * u + 0.4 * r + 1.2,
        l - E,
        h + 0.55 * u,
      ),
      Robot.shadowStroke(e, n);
    var f = 5 * Math.sin(0.1 * Math.PI + 0.3 * o);
    Robot.shadowStrokePath(
      e,
      n,
      Helper.roundRect(l - f - 0.65, h - 0.4, 1.3, 1.3, 0.4),
    ),
      e.beginPath(),
      e.ellipse(l - f + 0.1, h + 0.1, 0.4, 0.4, 0, Math.PI, 1.5 * Math.PI),
      Robot.shadowStroke(e, n),
      e.beginPath();
    f = 5 * Math.sin(0.1 * Math.PI - 0.3 * o);
    Robot.shadowStrokePath(
      e,
      n,
      Helper.roundRect(l + f - 0.65, h - 0.4, 1.3, 1.3, 0.4),
    ),
      e.beginPath(),
      e.ellipse(l + f + 0.1, h + 0.1, 0.4, 0.4, 0, Math.PI, 1.5 * Math.PI),
      Robot.shadowStroke(e, n),
      e.beginPath(),
      e.moveTo(l + 0.95 * d, c),
      e.lineTo(l + 5 * Math.sin(I - 0.3 * o + 0.45), c),
      e.lineTo(l + 5 * Math.sin(I - 0.3 * o + 0.45), c + 0.9 * u),
      e.lineTo(l + 5 * Math.sin(I - 0.3 * o), c + 1.15 * u),
      e.lineTo(l + 5 * Math.sin(I - 0.3 * o), c),
      e.lineTo(l - 5 * Math.sin(I + 0.3 * o), c),
      e.lineTo(l - 5 * Math.sin(I + 0.3 * o), c + 1.15 * u),
      e.lineTo(l - 5 * Math.sin(I + 0.3 * o + 0.45), c + 0.9 * u),
      e.lineTo(l - 5 * Math.sin(I + 0.3 * o + 0.45), c),
      e.lineTo(l - 0.95 * d, c),
      Robot.shadowStroke(e, n);
    var p = [
      0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0, -0.1, -0.2, -0.3, -0.4, -0.5,
      -0.6, -0.7, -0.8,
    ];
    e.beginPath();
    for (var T = 0; T < p.length; T++) {
      f = 5 * Math.sin(1.5 * p[T] + 0.3 * o);
      e.moveTo(l - f, c), e.quadraticCurveTo(l - f, h - 0.9 * u, l, h - u);
    }
    f = 5 * Math.sin(1.5 * p[2] + 0.3 * o);
    e.moveTo(l - f, c), e.lineTo(l - f, c + 0.95 * u);
    f = 5 * Math.sin(1.5 * p[3] + 0.3 * o);
    e.moveTo(l - f, c), e.lineTo(l - f, c + 1.05 * u);
    f = 5 * Math.sin(1.5 * p[13] + 0.3 * o);
    e.moveTo(l - f, c), e.lineTo(l - f, c + 1.05 * u);
    f = 5 * Math.sin(1.5 * p[14] + 0.3 * o);
    e.moveTo(l - f, c),
      e.lineTo(l - f, c + 0.95 * u),
      e.stroke(),
      e.beginPath(),
      e.ellipse(
        l,
        h - u,
        d / 2 - 0.3 * o,
        u / 4,
        0,
        0.9 * Math.PI,
        2.1 * Math.PI,
      ),
      Robot.shadowStroke(e, n),
      e.restore();
  }
  static drawMan(e, t, i, a, r, s) {
    Math.abs(i) < 0.1 &&
      (ROBOT.lipMove
        ? (ROBOT.bob = 1.75 * Math.random())
        : (ROBOT.bob = 1 * Math.random()));
    var o = 0.25 * ROBOT.bob * i;
    e.save(),
      (e.strokeStyle = "teal"),
      (e.fillStyle = "teal"),
      (e.lineCap = "round"),
      (e.lineJoin = "round"),
      (e.lineWidth = 0.2),
      (e.shadowBlur = 6),
      (e.shadowOffsetX = 0),
      (e.shadowOffsetY = 0),
      (e.shadowColor = "teal"),
      e.scale(t, t);
    var n = 4,
      l = 8,
      h = 8,
      d = 5,
      u = 4;
    e.beginPath(),
      e.ellipse(l, h, d, u, 0, 0, 2 * Math.PI),
      Robot.shadowStroke(e, n);
    var c = 0.15 * Math.PI,
      I = -0.1 * Math.PI;
    e.beginPath(),
      e.ellipse(
        l + 5 * Math.sin(c + 0.3 * o),
        h + 5 * Math.sin(I),
        0.8 * Math.cos(0 * c + 0 * o),
        Math.cos(I),
        0,
        0,
        2 * Math.PI,
      ),
      Robot.shadowStroke(e, n),
      e.beginPath(),
      e.ellipse(
        l + 5 * Math.sin(c + 0.3 * o),
        h + 5 * Math.sin(I),
        0.48 * Math.cos(0 * c + 0 * o),
        0.6 * Math.cos(I),
        0,
        Math.PI,
        1.5 * Math.PI,
      ),
      e.stroke(),
      e.beginPath(),
      e.ellipse(
        l + 5 * Math.sin(0.3 * o - c),
        h + 5 * Math.sin(I),
        0.8 * Math.cos(0 * c + 0 * o),
        Math.cos(I),
        0,
        0,
        2 * Math.PI,
      ),
      Robot.shadowStroke(e, n),
      e.beginPath(),
      e.ellipse(
        l + 5 * Math.sin(0.3 * o - c),
        h + 5 * Math.sin(I),
        0.48 * Math.cos(0 * c + 0 * o),
        0.6 * Math.cos(I),
        0,
        Math.PI,
        1.5 * Math.PI,
      ),
      e.stroke(),
      e.beginPath(),
      e.moveTo(l - 1 * d, h + 2 * u),
      e.quadraticCurveTo(l - 1 * d, h + 1.2 * u, l - 0.5 * d, h + 0.9 * u),
      e.moveTo(l + 1 * d, h + 2 * u),
      e.quadraticCurveTo(l + 1 * d, h + 1.2 * u, l + 0.5 * d, h + 0.9 * u),
      e.moveTo(l, h + u),
      e.ellipse(l, h + u, 0.2 * d, 0.2 * d, 0, 0 * Math.PI, 1 * Math.PI),
      e.moveTo(l - 0.1 * d, h + 1.2 * u),
      e.lineTo(l - 0.2 * d, h + 2 * u),
      e.moveTo(l + 0.1 * d, h + 1.2 * u),
      e.lineTo(l + 0.2 * d, h + 2 * u),
      Robot.shadowStroke(e, n),
      e.beginPath(),
      e.ellipse(
        8 + 5 * Math.sin(0.3 * o),
        7,
        0.8 * Math.cos(0.3 * o),
        1,
        0,
        0,
        1 * Math.PI,
        !1,
      ),
      Robot.shadowStroke(e, n),
      ROBOT.isDone && r + 1 < 0.1 && (ROBOT.lipMove = !1),
      ROBOT.lipMove || (r = 0.1 * r - 0.9);
    var E = 0.4 * r ** 2,
      S = 0.15 * (1 - r ** 2),
      f = [
        [
          0.1,
          0.3 + S,
          0.2 + S / 2,
          0.1,
          0,
          -0.1,
          -0.2 - S / 2,
          -0.3 - S,
          -0.1,
          0.1,
        ],
        [0.05, 0.15 + S / 2],
        [0, 0],
        [-0.05, -0.15 - S / 2],
      ],
      p = [
        [
          8.5,
          9.5 + E,
          9.2 + E,
          9.6 + E,
          9.3 + E,
          9.6 + E,
          9.2 + E,
          9.5 + E,
          8.5,
          8.5,
        ],
        [8.5, 9.2 + E],
        [8.5, 9.3 + E],
        [8.5, 9.2 + E],
      ];
    Robot.pathStroke(e, o, n, f, p), e.restore();
  }
  static pathStroke(e, t, i, a, r) {
    for (var s = 0; s < a.length; s++) {
      e.beginPath(), e.moveTo(8 + 5 * Math.sin(a[s][0] + 0.3 * t), r[s][0]);
      for (var o = 1; o < a[s].length; o++)
        e.lineTo(8 + 5 * Math.sin(a[s][o] + 0.3 * t), r[s][o]);
      Robot.shadowStroke(e, i);
    }
  }
  static shadowFill(e, t) {
    (e.shadowOffsetX = 0),
      (e.shadowOffsetY = 0),
      e.fill(),
      (e.shadowOffsetX = -t),
      (e.shadowOffsetY = -t),
      e.fill(),
      (e.shadowOffsetX = t),
      (e.shadowOffsetY = t),
      e.fill(),
      (e.shadowOffsetX = -t),
      (e.shadowOffsetY = t),
      e.fill(),
      (e.shadowOffsetX = t),
      (e.shadowOffsetY = -t),
      e.fill();
  }
  static shadowStroke(e, t) {
    (e.shadowOffsetX = 0),
      (e.shadowOffsetY = 0),
      e.stroke(),
      (e.shadowOffsetX = -t),
      (e.shadowOffsetY = -t),
      e.stroke(),
      (e.shadowOffsetX = t),
      (e.shadowOffsetY = t),
      e.stroke(),
      (e.shadowOffsetX = -t),
      (e.shadowOffsetY = t),
      e.stroke(),
      (e.shadowOffsetX = t),
      (e.shadowOffsetY = -t),
      e.stroke();
  }
  static shadowStrokePath(e, t, i) {
    (e.shadowOffsetX = 0),
      (e.shadowOffsetY = 0),
      e.stroke(i),
      (e.shadowOffsetX = -t),
      (e.shadowOffsetY = -t),
      e.stroke(i),
      (e.shadowOffsetX = t),
      (e.shadowOffsetY = t),
      e.stroke(i),
      (e.shadowOffsetX = -t),
      (e.shadowOffsetY = t),
      e.stroke(i),
      (e.shadowOffsetX = t),
      (e.shadowOffsetY = -t),
      e.stroke(i);
  }
  static drawButton() {
    CANV.robotButton.clear();
    var e = CANV.robotButton.ctx;
    if ("robbutton" === STATE.under.type) {
      var t = FIELD.tileWidth;
      if (0 === STATE.under.i0)
        var i = ROBOT.width / 2 - 1.75 * t,
          a = [
            i + 0.6 * t,
            i + 0.6 * t,
            i + 3.4 * t - 0.5 * t,
            i + 3.4 * t - 0.5 * t,
          ],
          r = [0.35 * t, 1.4 * t, 1.4 * t, 0.35 * t],
          s = [t / 4, t / 4, t / 4, t / 4],
          o = new Path2D(Helper.makeRoundedPath(a, r, s, 1, 0, 0));
      else
        (i = ROBOT.width - t / 24 - 7.5 * FIELD.tileWidth + t / 4),
          (a = [i + 0.1 * t, i + 0.1 * t, i + 5.4 * t, i + 5.4 * t]),
          (r = [
            t / 4 + 0.1 * t,
            (3 * t) / 2 - 0.1 * t,
            (3 * t) / 2 - 0.1 * t,
            t / 4 + 0.1 * t,
          ]),
          (s = [t / 4, t / 4, t / 4, t / 4]),
          (o = new Path2D(Helper.makeRoundedPath(a, r, s, 1, 0, 0)));
      e.save(),
        (e.globalAlpha = 0.3),
        (e.fillStyle = "grey"),
        e.fill(o),
        e.restore();
    }
    e.save(),
      (e.fillStyle = "antiqueWhite"),
      (e.textBaseline = "middle"),
      (e.textAlign = "center"),
      (e.shadowBlur = 2),
      (e.shadowOffsetX = 2),
      (e.shadowOffsetY = 2),
      (e.shadowColor = "black"),
      (e.font = (1.2 / 3) * FIELD.tileWidth + "px Courier New"),
      e.fillText("(space)", ROBOT.width / 2, 1.1 * FIELD.tileWidth);
    var n = "Next";
    if (
      ("finished" === ROBOT.oldMode && ROBOT.isDone && (n = "Return"),
      (e.font =
        (1.1 + 0.1 * RTIMER.pulse) * (1.2 / 3) * FIELD.tileWidth +
        "px Courier New"),
      e.fillText(n, ROBOT.width / 2, 0.65 * FIELD.tileWidth),
      "finished" === ROBOT.oldMode && SCENARIO.archive)
    ) {
      (e.font = (1.2 / 3) * FIELD.tileWidth + "px Courier New"),
        e.fillText(
          "(external link)",
          ROBOT.width - 4.5 * FIELD.tileWidth,
          1.1 * FIELD.tileWidth,
        );
      n = "Historical Archive";
      (e.font = (1.2 / 3) * FIELD.tileWidth + "px Courier New"),
        e.fillText(
          n,
          ROBOT.width - 4.5 * FIELD.tileWidth,
          0.65 * FIELD.tileWidth,
        );
    }
    e.restore();
  }
}
