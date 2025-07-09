class Overlay {
  static createRobotScreen(e) {
    var t = ROBOT.screenW + 2 * ROBOT.margin,
      i = ROBOT.viewH + 2 * ROBOT.margin,
      a = FIELD.tileWidth,
      r = (2 * FIELD.tileWidth) / 4,
      s = r + (1.25 * FIELD.tileWidth) / 8,
      o = a / 2,
      n = a / 4,
      l = 0.75 * a,
      h = "M " + (r + o) + " " + (r + o) + " ";
    (h += " " + Helper.makeCurve(r + o, r + o, t - r - o, r + o, n)),
      (h += " " + Helper.makeCurve(t - r - o, r + o, t - r - o, i - r - o, -n)),
      (h += " " + Helper.makeCurve(t - r - o, i - r - o, r + o, i - r - o, n)),
      (h += " " + Helper.makeCurve(r + o, i - r - o, r + o, r + o, -n));
    var d = [r, r, t - r, t - r],
      u = [r, i - r + l, i - r + l, r],
      c = [a / 4, a / 4, a / 4, a / 4],
      I = Helper.makeRoundedPath(d, u, c, 1, 0, 0),
      E = [s, s, t - s, t - s],
      S = [s, i - s, i - s, s],
      f = [a / 6, a / 6, a / 6, a / 6],
      p = Helper.makeRoundedPath(E, S, f, 1, 0, 0);
    e.save(),
      (e.shadowBlur = 4),
      (e.shadowOffsetX = FIELD.tileWidth / 24),
      (e.shadowOffsetY = FIELD.tileWidth / 24),
      (e.shadowColor = "#17241f"),
      (e.fillStyle = "black"),
      e.fill(new Path2D(I)),
      (e.globalCompositeOperation = "destination-out"),
      e.fill(new Path2D(p)),
      e.restore();
    var T = a / 16;
    e.save(),
      (e.lineWidth = T / 2),
      (e.strokeStyle = "#90F215"),
      (e.globalAlpha = 0.1);
    for (var R = 0; R < Math.floor((t - 2 * r) / T); R++)
      e.moveTo(s, r + (R + 0.5) * T), e.lineTo(t - s, r + (R + 0.5) * T);
    e.stroke(), e.restore();
    var m = new Path2D(I + h + " Z"),
      g = e.createRadialGradient(t / 2, i / 2, t / 4, t / 2, i / 2, t / 2);
    g.addColorStop(0, "#66261b"),
      g.addColorStop(1, "#38140f"),
      e.save(),
      (e.fillStyle = g),
      e.clip(m, "evenodd"),
      e.fill(m),
      e.restore();
    var A = new Path2D(I + p);
    e.save(),
      (e.fillStyle = "#1a110e"),
      e.clip(A, "evenodd"),
      e.fill(A),
      (e.lineWidth = Math.max(1, FIELD.tileWidth / 24)),
      (e.strokeStyle = "black"),
      e.stroke(new Path2D(I)),
      e.stroke(new Path2D(p)),
      e.stroke(new Path2D(p)),
      e.restore();
    var C = ((Math.sqrt(2) - 1) * a) / 6;
    e.save(),
      e.beginPath(),
      (e.lineWidth = Math.max(1, FIELD.tileWidth / 36)),
      e.moveTo(s + C, s + C),
      e.lineTo(r + o, r + o),
      e.moveTo(t - s - C, s + C),
      e.lineTo(t - r - o, r + o),
      e.moveTo(s + C, i - s - C),
      e.lineTo(r + o, i - r - o),
      e.moveTo(t - s - C, i - s - C),
      e.lineTo(t - r - o, i - r - o),
      e.stroke(),
      e.restore(),
      e.save(),
      (e.lineWidth = Math.max(1, a / 36)),
      (e.strokeStyle = "black"),
      e.stroke(new Path2D(h)),
      e.restore(),
      e.save(),
      e.beginPath(),
      Paths.monitorKnob(e).draw(e, 1.5 * s, i - r + l - s, 0.5 * a, 0.5 * a),
      Paths.monitorKnob(e).draw(
        e,
        t - 1.5 * s - 0.5 * a,
        i - r + l - s,
        0.5 * a,
        0.5 * a,
      ),
      e.stroke(),
      e.restore(),
      e.save(),
      e.beginPath();
    var L = t / 2,
      D = i - 0.2 * a;
    g = e.createRadialGradient(
      L - 0.1 * a,
      D - 0.1 * a,
      0,
      L - 0.1 * a,
      D - 0.1 * a,
      0.7 * a,
    );
    g.addColorStop(1, "#0e1818"),
      g.addColorStop(0, "darkslategrey"),
      (e.fillStyle = g),
      e.ellipse(L, D, 0.7 * a, (0.7 * a) / 2, 0, 0, 2 * Math.PI),
      e.fill(),
      e.clip(),
      (e.lineWidth = a / 12),
      (e.strokeStyle = "#111"),
      e.beginPath();
    for (R = 0; R < 15; R++)
      e.moveTo(L - 0.7 * a + (R * a) / 8, D - a / 2),
        e.lineTo(L - 0.7 * a + (R * a) / 8, D + a / 2),
        e.stroke();
    e.beginPath(),
      (e.lineWidth = a / 12),
      (e.strokeStyle = "black"),
      e.ellipse(L, D, 0.7 * a, (0.7 * a) / 2, 0, 0, 2 * Math.PI),
      e.stroke(),
      e.restore();
    var b = r,
      O = i - r + l + (2 * a) / 8,
      M = t - 2 * r,
      v = a,
      w = a / 4;
    Helper.fiberBox(e, b, O, M, v, w),
      e.save(),
      (e.textBaseline = "middle"),
      (e.textAlign = "center"),
      (e.font = (1.6 * FIELD.tileWidth) / 4 + "px Courier New"),
      (e.fillStyle = "antiquewhite"),
      (e.shadowBlur = 2),
      (e.shadowOffsetX = 2),
      (e.shadowOffsetY = 2),
      (e.shadowColor = "black"),
      "levelSelect" === ROBOT.oldMode
        ? (e.fillText("アドミニストロン", b + M / 2, O + v / 4),
          e.fillText("40000", b + M / 2, O + (3 * v) / 4))
        : (e.fillText("オートマネージャー", b + M / 2, O + v / 4),
          e.fillText("5000", b + M / 2, O + (3 * v) / 4)),
      e.restore();
  }
  static createRobot(e, t = !0) {
    var i = FIELD.tileWidth,
      a = ROBOT.height,
      r = ROBOT.width,
      s = i / 12,
      o = FIELD.tileWidth / 4,
      n = 2 * FIELD.tileWidth,
      l = FIELD.tileWidth / 8,
      h = [
        i / 6 + 2 * s,
        i / 6 + 2 * s,
        r - i / 24 - 3 * s,
        r - i / 24 - 3 * s,
      ],
      d = [
        i / 24 + 2 * s,
        a - 1.5 * i - 2 * s,
        a - 1.5 * i - 2 * s,
        i / 24 + 2 * s,
      ],
      u = [i / 3, i / 3, i / 3, i / 3],
      c = new Path2D(Helper.makeRoundedPath(h, d, u, 1, 0, 0));
    Helper.renderOverlay(e, c);
    (h = [
      r / 2 - 0.5 * i - n / 2 + l,
      r / 2 - 0.5 * i - n / 2 + l,
      r / 2 + 0.5 * i + n / 2 - l,
      r / 2 + n / 2 + 0.5 * i - l,
    ]),
      (d = [a - 1.5 * i + l, a + o - l, a + o - l, a - 1.5 * i + l]),
      (u = [i / 3, i / 3, i / 3, i / 3]),
      (c = new Path2D(Helper.makeRoundedPath(h, d, u, 1, 0, 0)));
    if ((Helper.renderOverlay(e, c), t)) {
      SVG.tiledQ.activate();
      var I = ROBOT.width - 7.39 * i,
        E = ROBOT.height - 1.35 * i;
      c = new Path2D(
        Helper.makeRoundedPath(
          [I, I, I + 5.7 * i, I + 5.7 * i],
          [E, E + 1.45 * i, E + 1.45 * i, E],
          [i / 3, i / 3, i / 3, i / 3],
          1,
          0,
          0,
        ),
      );
      Helper.renderOverlay(e, c);
    }
    var S = ROBOT.margin + ROBOT.screenW + 2 * ROBOT.lineGap - o,
      f = ROBOT.margin - o,
      p = ROBOT.textW + 2 * o,
      T = ROBOT.screenH + 2 * o,
      R = i / 4;
    Helper.fiberBox(e, S, f, p, T, R);
    (I = r / 2 - 1.75 * i), (E = a - 1 * i - o);
    var m = 3.5 * i,
      g = i + o,
      A = i / 4;
    c = new Path2D(
      Helper.makeRoundedPath(
        [I + 0.6 * i, I + 0.6 * i, I + m - 0.6 * i, I + m - 0.6 * i],
        [E + 0.1 * i, E + g - 0.1 * i, E + g - 0.1 * i, E + 0.1 * i],
        [A, A, A, A],
        1,
        0,
        0,
      ),
    );
    if ((Helper.fiberBoxPath(e, c, I, E, m, g), t)) {
      (I = ROBOT.width - 7.19 * i),
        (E = ROBOT.height - 1.15 * i),
        (c = new Path2D(
          Helper.makeRoundedPath(
            [I, I, I + 5.3 * i, I + 5.3 * i],
            [E, E + 1.05 * i, E + 1.05 * i, E],
            [i / 4, i / 4, i / 4, i / 4],
            1,
            0,
            0,
          ),
        ));
      Helper.fiberBoxPath(e, c, I, E, 5.5 * i, i + o);
    }
  }
  static createSelect(e) {
    var t = FIELD.tileWidth,
      i = FIELD.tileHeight,
      a = 30 * t,
      r = 15 * i,
      s = OVERLAY.margin,
      o = (2 * FIELD.tileWidth) / 6,
      n = FIELD.selBoxW,
      l = FIELD.selBoxH,
      h = [
        a - FIELD.selBoxW,
        a - FIELD.selBoxW,
        a - FIELD.selBoxM,
        a - FIELD.selBoxM,
      ],
      d = [
        FIELD.selBoxM + s,
        r - FIELD.selBoxM - s,
        r - FIELD.selBoxM - s,
        FIELD.selBoxM + s,
      ],
      u = [o, o, o, o],
      c = new Path2D(Helper.makeRoundedPath(h, d, u, 1, 0, 0));
    e.save(),
      (e.fillStyle = "#2b2b2b"),
      (e.strokeStyle = "#000"),
      (e.shadowBlur = 4),
      (e.shadowOffsetX = FIELD.tileWidth / 24),
      (e.shadowOffsetY = FIELD.tileWidth / 24),
      (e.shadowColor = "#555"),
      e.fill(c),
      e.stroke(c),
      e.restore(),
      e.save(),
      e.clip(c, "evenodd"),
      Textures.drawFiber(e, a - n, 0, n, 2 * l, FIELD.tileWidth / 48, 0.5),
      e.restore();
    FIELD.tileWidth,
      FIELD.tileWidth,
      (o = (1 * FIELD.tileWidth) / 3),
      (h = [t / 2 - s, t / 2 - s, a - t / 2 + s, a - t / 2 + s]),
      (d = [i / 2 - s, r - i / 2 + s, r - i / 2 + s, i / 2 - s]),
      (u = [o, o, o, o]);
    var I = [
        t / 2 + s,
        a - t / 2 - FIELD.selBoxW + s,
        a - t / 2 - FIELD.selBoxW + s,
        t / 2 + 1 * s,
      ],
      E = [r - i / 2 - s, r - i / 2 - s, i / 2 + s, i / 2 + s],
      S = [o, o, o, o],
      f = [
        a - t / 2 - FIELD.selBoxW + 2 * s,
        a - t / 2 - FIELD.selBoxW + 2 * s,
        a - t / 2 - s,
        a - t / 2 - s,
      ],
      p = [i / 2 + s, 9 * i, 9 * i, i / 2 + s],
      T = [o, o, o, o],
      R = [
        a - t / 2 - FIELD.selBoxW + 2 * s,
        a - t / 2 - FIELD.selBoxW + 2 * s,
        a - t / 2 - s,
        a - t / 2 - s,
      ],
      m = [9.4 * i, r - i / 2 - s, r - i / 2 - s, 9.4 * i],
      g = [o, o, o, o],
      A = new Path2D(
        Helper.makeRoundedPath(h, d, u, 1, 0, 0) +
          Helper.makeRoundedPath(I, E, S, 1, 0, 0) +
          Helper.makeRoundedPath(f, p, T, 1, 0, 0) +
          Helper.makeRoundedPath(R, m, g, 1, 0, 0),
      );
    e.save(),
      (e.globalCompositeOperation = "source-over"),
      (e.globalAlpha = 1),
      (e.fillStyle = "#30473e"),
      (e.shadowColor = "#555"),
      e.fill(A, "evenodd"),
      e.restore(),
      e.save(),
      (e.lineWidth = 1),
      (e.strokeStyle = "black"),
      e.stroke(A),
      e.restore();
    const C = new Path2D(makeOverlayPattern());
    e.save(),
      (e.fillStyle = "#523314"),
      (e.globalAlpha = 0.15),
      e.clip(A, "evenodd"),
      e.scale(1 / OVERLAY.scale, 1 / OVERLAY.scale),
      e.fill(C),
      e.translate(4040, 0),
      e.fill(C),
      e.translate(0, 4040),
      e.fill(C),
      e.translate(-4040, 0),
      e.fill(C),
      e.translate(8080, -4040),
      e.fill(C),
      e.translate(0, 4040),
      e.fill(C),
      e.restore(),
      e.save(),
      (e.textBaseline = "top"),
      (e.textAlign = "left"),
      (e.font = (2 * FIELD.tileWidth) / 4 + "px Courier New"),
      (e.fillStyle = "antiquewhite"),
      (e.shadowBlur = 2),
      (e.shadowOffsetX = 2),
      (e.shadowOffsetY = 2),
      (e.shadowColor = "black"),
      e.fillText("レベル選択:", t / 2 + 2 * s, i / 4),
      e.restore();
  }
  static createUnderTitle(e) {
    var t = FIELD.tileWidth,
      i = FIELD.tileHeight,
      a = t * (FIELD.cols - 5.25),
      r = i * (FIELD.rows / 2),
      s = (FIELD.tileWidth, FIELD.tileHeight, [0, 0, 3.4 * FIELD.tileWidth]),
      o = [0, 3.4 * FIELD.tileWidth, 0],
      n = [a, a, a - 3.4 * FIELD.tileWidth],
      l = [0, 3.4 * FIELD.tileWidth, 0],
      h = [0, 0, 3.4 * FIELD.tileWidth],
      d = [r, r - 3.4 * FIELD.tileWidth, r],
      u = [a, a, a - 3.4 * FIELD.tileWidth],
      c = [r, r - 3.4 * FIELD.tileWidth, r],
      I = [0, FIELD.tileWidth, FIELD.tileWidth],
      E = new Path2D(
        Helper.makeRoundedPath(s, o, I) +
          Helper.makeRoundedPath(n, l, I) +
          Helper.makeRoundedPath(h, d, I) +
          Helper.makeRoundedPath(u, c, I),
      ),
      S = new Path2D(Helper.makeRoundedPath(s, o, I)),
      f = new Path2D(Helper.makeRoundedPath(n, l, I)),
      p = new Path2D(Helper.makeRoundedPath(h, d, I)),
      T = new Path2D(Helper.makeRoundedPath(u, c, I)),
      R = e.createLinearGradient(0, 0, 1.8 * t, 1.8 * i);
    R.addColorStop(1, "#444"),
      R.addColorStop(0.45, "#4e7566"),
      R.addColorStop(0.55, "#4e7566"),
      R.addColorStop(0, "#444");
    var m = e.createLinearGradient(a, 0, a - 1.8 * t, 1.8 * i);
    m.addColorStop(1, "#444"),
      m.addColorStop(0.45, "#4e7566"),
      m.addColorStop(0.55, "#4e7566"),
      m.addColorStop(0, "#444");
    var g = e.createLinearGradient(0, r, 1.8 * t, r - 1.8 * i);
    g.addColorStop(1, "#444"),
      g.addColorStop(0.45, "#4e7566"),
      g.addColorStop(0.55, "#4e7566"),
      g.addColorStop(0, "#444");
    var A = e.createLinearGradient(a, r, a - 1.8 * t, r - 1.8 * i);
    A.addColorStop(1, "#444"),
      A.addColorStop(0.45, "#4e7566"),
      A.addColorStop(0.55, "#4e7566"),
      A.addColorStop(0, "#444"),
      e.save(),
      (e.globalCompositeOperation = "source-over"),
      (e.globalAlpha = 1),
      (e.fillStyle = R),
      e.fill(S),
      (e.fillStyle = m),
      e.fill(f),
      (e.fillStyle = g),
      e.fill(p),
      (e.fillStyle = A),
      e.fill(T),
      e.restore(),
      e.save(),
      (e.lineWidth = 1),
      (e.strokeStyle = "black"),
      e.stroke(E),
      e.restore();
    const C = new Path2D(makeOverlayPattern());
    if (
      (e.save(),
      (e.fillStyle = "#523314"),
      (e.globalAlpha = 0.15),
      e.clip(E, "evenodd"),
      e.scale(1 / OVERLAY.scale, 1 / OVERLAY.scale),
      e.translate(0, -1e3),
      e.fill(C),
      e.translate(4040, 0),
      e.fill(C),
      e.translate(0, 4040),
      e.fill(C),
      e.translate(-4040, 0),
      e.fill(C),
      e.translate(8080, -4040),
      e.fill(C),
      e.translate(0, 4040),
      e.fill(C),
      e.restore(),
      FIELD.showTitleMenu)
    ) {
      var L = FIELD.tileWidth / 9,
        D = 2 * FIELD.tileWidth,
        b = 1.8 * FIELD.tileHeight,
        O = r - b,
        M = [-D / 2, -D / 2, D / 2, D / 2],
        v = [0, b + FIELD.tileWidth / 4, b + FIELD.tileWidth / 4, 0],
        w = [L, L, L, L],
        y = new Path2D(Helper.makeRoundedPath(M, v, w, 1, a / 2, O));
      e.save(),
        (e.fillStyle = "#2b2b2b"),
        (e.strokeStyle = "#000"),
        (e.shadowBlur = 4),
        (e.shadowOffsetX = FIELD.tileWidth / 24),
        (e.shadowOffsetY = FIELD.tileWidth / 24),
        (e.shadowColor = "#555"),
        e.fill(y),
        e.stroke(y),
        e.restore(),
        e.save(),
        e.clip(y, "evenodd"),
        Textures.drawFiber(
          e,
          a / 2 - D / 2,
          O,
          D,
          b + FIELD.tileWidth / 4,
          (0.5 * FIELD.tileWidth) / 48,
          0.5,
        ),
        e.restore();
    }
  }
  static createTitleOptions(e) {
    "options" === STATE.state &&
      Helper.fiberBox(
        e,
        0,
        0,
        5 * FIELD.tileWidth,
        4 * FIELD.tileWidth,
        FIELD.tileWidth / 4,
        !1,
        96,
      );
  }
  static createTitle(e) {
    var t = FIELD.tileWidth,
      i = FIELD.tileHeight,
      a = t * (FIELD.cols - 5.25),
      r = (FIELD.rows, 1.3 * FIELD.tileWidth),
      s = FIELD.tileHeight,
      o = (0.9 * FIELD.tileWidth) / 6,
      n = [
        -OVERLAY.margin,
        OVERLAY.margin + t * (FIELD.cols - 5.25),
        OVERLAY.margin + t * (FIELD.cols - 5.25),
        -OVERLAY.margin,
      ],
      l = [
        OVERLAY.margin + i * (FIELD.rows / 2),
        OVERLAY.margin + i * (FIELD.rows / 2),
        -OVERLAY.margin,
        -OVERLAY.margin,
      ],
      h = [o, o, o, o],
      d = (1 * FIELD.tileWidth) / 6,
      u = [
        OVERLAY.marginInner,
        -OVERLAY.marginInner + t * (FIELD.cols - 5.25) - 4.5 * t,
        -OVERLAY.marginInner + t * (FIELD.cols - 5.25) - 4.5 * t,
        -OVERLAY.marginInner + t * (FIELD.cols - 5.25),
        -OVERLAY.marginInner + t * (FIELD.cols - 5.25),
        a / 2 + r,
        a / 2 + r,
        a / 2 - r,
        a / 2 - r,
        OVERLAY.marginInner,
      ],
      c = [
        -OVERLAY.marginInner + i * (FIELD.rows / 2),
        -OVERLAY.marginInner + i * (FIELD.rows / 2),
        -OVERLAY.marginInner + i * (FIELD.rows / 2) - i / 4,
        -OVERLAY.marginInner + i * (FIELD.rows / 2) - i / 4,
        +OVERLAY.marginInner,
        +OVERLAY.marginInner,
        +OVERLAY.marginInner + s,
        +OVERLAY.marginInner + s,
        +OVERLAY.marginInner,
        +OVERLAY.marginInner,
      ],
      I = [d, 0.85 * d, 0.85 * d, d, d, d, d, d, d, d],
      E = new Path2D(
        Helper.makeRoundedPath(n, l, h, 1, FIELD.leftMargin, FIELD.topMargin) +
          Helper.makeRoundedPath(u, c, I, 1, FIELD.leftMargin, FIELD.topMargin),
      );
    e.save(),
      (e.globalCompositeOperation = "source-over"),
      (e.globalAlpha = 1),
      (e.fillStyle = "#30473e"),
      (e.shadowBlur = 4),
      (e.shadowOffsetX = 4),
      (e.shadowOffsetY = 4),
      (e.shadowColor = "#555"),
      e.fill(E, "evenodd"),
      e.restore(),
      e.save(),
      (e.lineWidth = 1),
      (e.strokeStyle = "black"),
      e.stroke(E),
      e.restore();
    const S = new Path2D(makeOverlayPattern());
    if (
      (e.save(),
      (e.fillStyle = "#523314"),
      (e.globalAlpha = 0.15),
      e.clip(E, "evenodd"),
      e.scale(1 / OVERLAY.scale, 1 / OVERLAY.scale),
      e.fill(S),
      e.translate(4040, 0),
      e.fill(S),
      e.translate(0, 4040),
      e.fill(S),
      e.translate(-4040, 0),
      e.fill(S),
      e.translate(8080, -4040),
      e.fill(S),
      e.translate(0, 4040),
      e.fill(S),
      e.restore(),
      e.save(),
      (e.textBaseline = "top"),
      (e.textAlign = "left"),
      (e.font = FIELD.tileWidth / 3 + "px Courier New"),
      (e.fillStyle = "antiquewhite"),
      (e.shadowBlur = 2),
      (e.shadowOffsetX = 2),
      (e.shadowOffsetY = 2),
      (e.shadowColor = "black"),
      e.fillText("The", a / 2 + 0.05 * FIELD.tileWidth, 0.2 * FIELD.tileWidth),
      (e.font = (3 * FIELD.tileWidth) / 3 + "px Courier New"),
      e.fillText("Q", a / 2 + -0.65 * FIELD.tileWidth, 0.15 * FIELD.tileWidth),
      (e.font = (1 * FIELD.tileWidth) / 2 + "px Courier New"),
      e.fillText(
        "ubit",
        a / 2 + -0.05 * FIELD.tileWidth,
        0.55 * FIELD.tileWidth,
      ),
      (e.font = (1.3 * FIELD.tileWidth) / 3 + "px Courier New"),
      (e.textAlign = "center"),
      e.fillText(
        "Factory",
        a / 2 + 0.3 * FIELD.tileWidth,
        1.05 * FIELD.tileWidth,
      ),
      e.restore(),
      FIELD.isTouch &&
        (e.save(),
        (e.textBaseline = "middle"),
        (e.textAlign = "center"),
        (e.font = FIELD.tileWidth / 3 + "px Verdana"),
        (e.shadowBlur = 2),
        (e.shadowOffsetX = 2),
        (e.shadowOffsetY = 2),
        (e.shadowColor = "grey"),
        (e.fillStyle = "antiquewhite"),
        e.fill(
          Helper.roundRect(
            a / 2 + 0.3 * FIELD.tileWidth - 4.5 * FIELD.tileWidth,
            1.75 * FIELD.tileWidth,
            9 * FIELD.tileWidth,
            0.5 * FIELD.tileWidth,
            FIELD.tileWidth / 4,
          ),
        ),
        (e.shadowOffsetX = 1),
        (e.shadowOffsetY = 1),
        (e.fillStyle = "black"),
        e.fillText(
          "タッチスクリーン操作には現在対応していません :(",
          a / 2 + 0.3 * FIELD.tileWidth,
          2 * FIELD.tileWidth,
        ),
        e.restore()),
      FIELD.showTitleMenu)
    ) {
      e.save(),
        (e.textBaseline = "top"),
        (e.textAlign = "left"),
        (e.font = (1 * FIELD.tileWidth) / 4 + "px Courier New"),
        (e.fillStyle = "antiquewhite"),
        (e.shadowBlur = 2),
        (e.shadowOffsetX = 2),
        (e.shadowOffsetY = 2),
        (e.shadowColor = "black"),
        e.fillText(
          "推奨 #1:",
          0.25 * FIELD.tileWidth,
          (14.1 * FIELD.tileHeight) / 2,
        ),
        e.fillText("#2:", 4 * FIELD.tileWidth, (14.1 * FIELD.tileHeight) / 2),
        e.fillText(FIELD.version, 13 * FIELD.tileWidth, 0.2 * FIELD.tileHeight),
        (e.font = (1 * FIELD.tileWidth) / 6 + "px Courier New"),
        (e.textBaseline = "bottom");
      var f = -0.9 * FIELD.tileWidth;
      e.fillText(
        "Research Scientist",
        12.2 * FIELD.tileWidth + f,
        (14 * FIELD.tileHeight) / 2,
      ),
        e.fillText(
          "AWS Center for Quantum Computing",
          10.5 * FIELD.tileWidth + f,
          (14.55 * FIELD.tileHeight) / 2,
        ),
        (e.font = (1.5 * FIELD.tileWidth) / 6 + "px Courier New"),
        e.fillText(
          "Glen Evenbly,",
          10.2 * FIELD.tileWidth + f,
          (14.05 * FIELD.tileHeight) / 2,
        ),
        (e.textAlign = "left"),
        (e.textBaseline = "top"),
        (e.font = (1 * FIELD.tileWidth) / 6 + "px Courier New"),
        e.fillText(
          "音楽: Eric Matyas",
          0.65 * FIELD.tileWidth,
          (0.28 * FIELD.tileHeight) / 2,
        ),
        e.fillText(
          " www.soundimage.org",
          0.65 * FIELD.tileWidth,
          (0.68 * FIELD.tileHeight) / 2,
        ),
        e.restore();
    }
  }
  static createBottomGrill(e) {
    if (!SCENARIO.disableOverlay) {
      var t = OVERLAY.border,
        i = e.createLinearGradient(
          2.5 * FIELD.tileWidth,
          0,
          2.5 * FIELD.tileWidth,
          FIELD.tileHeight,
        );
      i.addColorStop(1, "#444"),
        i.addColorStop(0.45, "#4e7566"),
        i.addColorStop(0.55, "#4e7566"),
        i.addColorStop(0, "#444"),
        e.save(),
        (e.fillStyle = i),
        e.fillRect(
          0,
          t / 4 + FIELD.tileHeight * (1 - FIELD.channelsTrig[4]),
          5 * FIELD.tileWidth,
          FIELD.tileHeight,
        ),
        e.beginPath(),
        e.moveTo(0, t / 4 + FIELD.tileHeight * (1 - FIELD.channelsTrig[4])),
        e.lineTo(
          5 * FIELD.tileWidth,
          t / 4 + FIELD.tileHeight * (1 - FIELD.channelsTrig[4]),
        ),
        (e.strokeStyle = "#222"),
        (e.lineWidth = FIELD.tileWidth / 12),
        e.setLineDash([]),
        e.stroke(),
        (e.lineWidth = FIELD.tileWidth / 24),
        (e.strokeStyle = "#324d42"),
        e.setLineDash([5, 3]),
        e.stroke(),
        e.restore();
      var a = (FIELD.cols - 7) * FIELD.tileWidth;
      e.save(),
        (e.fillStyle = i),
        e.fillRect(
          a,
          t / 4 + FIELD.tileHeight * (1 - FIELD.channelsTrig[5]),
          5 * FIELD.tileWidth,
          FIELD.tileHeight,
        ),
        e.beginPath(),
        e.moveTo(a, t / 4 + FIELD.tileHeight * (1 - FIELD.channelsTrig[5])),
        e.lineTo(
          a + 5 * FIELD.tileWidth,
          t / 4 + FIELD.tileHeight * (1 - FIELD.channelsTrig[5]),
        ),
        (e.strokeStyle = "#222"),
        (e.lineWidth = FIELD.tileWidth / 12),
        e.setLineDash([]),
        e.stroke(),
        (e.lineWidth = FIELD.tileWidth / 24),
        (e.strokeStyle = "#324d42"),
        e.setLineDash([5, 3]),
        e.stroke(),
        e.restore();
    }
  }
  static createRightGrill(e) {
    if (!SCENARIO.disableOverlay) {
      var t = OVERLAY.border,
        i = e.createLinearGradient(
          0,
          (FIELD.tileHeight * (FIELD.topEntry + 1)) / 2,
          FIELD.tileWidth,
          (FIELD.tileHeight * (FIELD.topEntry + 1)) / 2,
        );
      i.addColorStop(1, "#444"),
        i.addColorStop(0.45, "#4e7566"),
        i.addColorStop(0.55, "#4e7566"),
        i.addColorStop(0, "#444"),
        e.save(),
        (e.fillStyle = i),
        e.fillRect(
          FIELD.tileWidth * (1 - FIELD.channelsTrig[2]) + t / 4,
          0,
          FIELD.tileWidth,
          FIELD.tileHeight * (FIELD.topEntry + 1),
        ),
        e.beginPath(),
        e.moveTo(FIELD.tileWidth * (1 - FIELD.channelsTrig[2]) + t / 4, 0),
        e.lineTo(
          FIELD.tileWidth * (1 - FIELD.channelsTrig[2]) + t / 4,
          FIELD.tileHeight * (FIELD.topEntry + 1),
        ),
        (e.strokeStyle = "#222"),
        (e.lineWidth = FIELD.tileWidth / 12),
        e.setLineDash([]),
        e.stroke(),
        (e.lineWidth = FIELD.tileWidth / 24),
        (e.strokeStyle = "#324d42"),
        e.setLineDash([5, 3]),
        e.stroke(),
        e.restore(),
        e.save(),
        (e.fillStyle = i),
        e.fillRect(
          FIELD.tileWidth * (1 - FIELD.channelsTrig[3]) + t / 4,
          FIELD.tileHeight * FIELD.bottomEntry,
          FIELD.tileWidth,
          FIELD.tileHeight * (FIELD.rows / 2 - 1),
        ),
        e.beginPath(),
        e.moveTo(
          FIELD.tileWidth * (1 - FIELD.channelsTrig[3]) + t / 4,
          FIELD.tileHeight * FIELD.bottomEntry,
        ),
        e.lineTo(
          FIELD.tileWidth * (1 - FIELD.channelsTrig[3]) + t / 4,
          FIELD.tileHeight * (FIELD.bottomEntry + FIELD.rows / 2 - 1),
        ),
        (e.strokeStyle = "#222"),
        (e.lineWidth = FIELD.tileWidth / 12),
        e.setLineDash([]),
        e.stroke(),
        (e.lineWidth = FIELD.tileWidth / 24),
        (e.strokeStyle = "#324d42"),
        e.setLineDash([5, 3]),
        e.stroke(),
        e.restore();
    }
  }
  static createLeftGrill(e) {
    if (!SCENARIO.disableOverlay) {
      var t = OVERLAY.border,
        i = e.createLinearGradient(
          0,
          (FIELD.tileHeight * (FIELD.topEntry + 1)) / 2,
          FIELD.tileWidth,
          (FIELD.tileHeight * (FIELD.topEntry + 1)) / 2,
        );
      i.addColorStop(1, "#444"),
        i.addColorStop(0.45, "#4e7566"),
        i.addColorStop(0.55, "#4e7566"),
        i.addColorStop(0, "#444"),
        e.save(),
        (e.fillStyle = i),
        e.fillRect(
          -FIELD.tileWidth * (1 - FIELD.channelsTrig[0]),
          0,
          FIELD.tileWidth - t / 4,
          FIELD.tileHeight * (FIELD.topEntry + 1),
        ),
        e.beginPath(),
        e.moveTo(FIELD.tileWidth * FIELD.channelsTrig[0] - t / 4, 0),
        e.lineTo(
          FIELD.tileWidth * FIELD.channelsTrig[0] - t / 4,
          FIELD.tileHeight * (FIELD.topEntry + 1),
        ),
        (e.strokeStyle = "#222"),
        (e.lineWidth = FIELD.tileWidth / 12),
        e.setLineDash([]),
        e.stroke(),
        (e.lineWidth = FIELD.tileWidth / 24),
        (e.strokeStyle = "#324d42"),
        e.setLineDash([5, 3]),
        e.stroke(),
        e.restore(),
        e.save(),
        (e.fillStyle = i),
        e.fillRect(
          -FIELD.tileWidth * (1 - FIELD.channelsTrig[1]),
          FIELD.tileHeight * FIELD.bottomEntry,
          FIELD.tileWidth - t / 4,
          FIELD.tileHeight * (FIELD.rows / 2 - 1),
        ),
        e.beginPath(),
        e.moveTo(
          FIELD.tileWidth * FIELD.channelsTrig[1] - t / 4,
          FIELD.tileHeight * FIELD.bottomEntry,
        ),
        e.lineTo(
          FIELD.tileWidth * FIELD.channelsTrig[1] - t / 4,
          FIELD.tileHeight * (FIELD.bottomEntry + FIELD.rows / 2 - 1),
        ),
        (e.strokeStyle = "#222"),
        (e.lineWidth = FIELD.tileWidth / 12),
        e.setLineDash([]),
        e.stroke(),
        (e.lineWidth = FIELD.tileWidth / 24),
        (e.strokeStyle = "#324d42"),
        e.setLineDash([5, 3]),
        e.stroke(),
        e.restore();
    }
  }
  static createTutorial(e, t) {
    var i = FIELD.tileWidth,
      a = FIELD.tileHeight,
      r = TUTORIAL.margin,
      s = TUTORIAL.boxWidth,
      o = 10 * i + s,
      n = 14 * a,
      l = FIELD.tileWidth / 2,
      h = FIELD.tileWidth / 3;
    const d = new Path2D(makeOverlayPattern());
    if (14 === TUTORIAL.current)
      var u = [i - r, i - r, o - i + r, o - i + r],
        c = [r, n - r, n - r, r],
        I = [l, l, l, l],
        E = [1.2 * i, 1.2 * i, 7 * i, 7 * i],
        S = [2 * a, 13 * a, 13 * a, 2 * a],
        f = [h, h, h, h],
        p = new Path2D(
          Helper.makeRoundedPath(u, c, I, 1, 0, 0) +
            Helper.makeRoundedPath(E, S, f, 1, 0, 0),
        );
    else if (15 === TUTORIAL.current) {
      (u = [i - r, i - r, o - i + r, o - i + r]),
        (c = [r, n - r, n - r, r]),
        (I = [l, l, l, l]),
        (E = [1.2 * i, 1.2 * i, 7 * i, 7 * i]),
        (S = [2 * a, 7 * a, 7 * a, 2 * a]),
        (f = [h, h, h, h]);
      var T = [1.2 * i, 1.2 * i, 7 * i, 7 * i],
        R = [7.5 * a, 13 * a, 13 * a, 7.5 * a],
        m = [h, h, h, h];
      p = new Path2D(
        Helper.makeRoundedPath(u, c, I, 1, 0, 0) +
          Helper.makeRoundedPath(E, S, f, 1, 0, 0) +
          Helper.makeRoundedPath(T, R, m, 1, 0, 0),
      );
    } else if (16 === TUTORIAL.current)
      (u = [i - r, i - r, o - i + r, o - i + r]),
        (c = [r, n - r, n - r, r]),
        (I = [l, l, l, l]),
        (E = [1.2 * i, 1.2 * i, 7 * i, 7 * i]),
        (p = new Path2D(Helper.makeRoundedPath(u, c, I, 1, 0, 0)));
    else
      (u = [i - r, i - r, o - i + r, o - i + r]),
        (c = [r, n - r, n - r, r]),
        (I = [l, l, l, l]),
        (E = [2 * i, 2 * i, 7 * i, 7 * i]),
        (S = [2 * a, 7 * a, 7 * a, 2 * a]),
        (f = [h, h, h, h]),
        (p = new Path2D(
          Helper.makeRoundedPath(u, c, I, 1, 0, 0) +
            Helper.makeRoundedPath(E, S, f, 1, 0, 0) +
            Helper.makeRoundedPath(E, S, f, 1, 0, 6 * a),
        ));
    if (1 === TUTORIAL.current)
      e.save(),
        (e.textBaseline = "middle"),
        (e.textAlign = "center"),
        (e.font = FIELD.tileWidth / 3 + "px Verdana"),
        (e.fillStyle = "black"),
          e.fillText("左ドラッグ", 3.2 * i, 2.5 * i),
          e.fillText("左ドラッグ", 3.2 * i, 4.5 * i),
          e.fillText("右ドラッグ", 3.2 * i, 6.5 * i),
        e.restore();
    else if (8 === TUTORIAL.current)
      e.save(),
        (e.textBaseline = "middle"),
        (e.textAlign = "center"),
        (e.font = FIELD.tileWidth / 2 + "px Courier New"),
        (e.fillStyle = "black"),
        e.fillText("π/8", 3.5 * i, 4.5 * i),
        e.restore(),
        e.save(),
        (e.textBaseline = "middle"),
        (e.textAlign = "center"),
        (e.font = FIELD.tileWidth / 3 + "px Verdana"),
        (e.fillStyle = "black"),
          e.fillText("正", 3.5 * i, 8.8 * i),
          e.fillText("負", 5.5 * i, 8.8 * i),
        e.restore();
    else if (6 === TUTORIAL.current)
      e.save(),
        (e.textBaseline = "middle"),
        (e.textAlign = "center"),
        (e.font = FIELD.tileWidth / 3 + "px Verdana"),
        (e.fillStyle = "black"),
          e.fillText("制御", 4 * i, 2.5 * i),
          e.fillText("ターゲット", 4 * i, 3.5 * i),
          e.fillText("1プライム", 3.5 * i, 4.6 * i),
          e.fillText("0プライム", 5.5 * i, 4.6 * i),
        e.restore();
    else if (0 === TUTORIAL.current) {
      var g = FIELD.tileWidth / 12,
        A =
          ((u = [6 * i, 6 * i, 6.2 * i, 6.2 * i]),
          (c = [7 * i, 11.2 * i, 11.2 * i, 7 * i]),
          (I = [g, g, g, g]),
          FIELD.tileWidth / 6),
        C =
          ((E = [6 * i, 6 * i, 7.2 * i, 7.2 * i, 6.8 * i, 6.8 * i]),
          (S = [11.8 * i, 13.5 * i, 13.5 * i, 7 * i, 7 * i, 11.8 * i]),
          (f = [A, A, A, A, A, A]),
          new Path2D(
            Helper.makeRoundedPath(u, c, I, 1, 0, 0) +
              Helper.makeRoundedPath(E, S, f, 1, 0, 0),
          ));
      e.save(),
        (e.globalCompositeOperation = "source-over"),
        (e.globalAlpha = 1),
        (e.fillStyle = "#30473e"),
        e.fill(C, "evenodd"),
        e.restore(),
        e.save(),
        (e.lineWidth = 1),
        (e.strokeStyle = "black"),
        e.stroke(C),
        e.restore(),
        e.save(),
        (e.fillStyle = "#523314"),
        (e.globalAlpha = 0.15),
        e.clip(C, "evenodd"),
        e.scale(1 / OVERLAY.scale, 1 / OVERLAY.scale),
        e.fill(d),
        e.translate(0, 4040),
        e.fill(d),
        e.restore(),
        e.save(),
        (e.textBaseline = "middle"),
        (e.textAlign = "center"),
        (e.font = (1 * i) / 2 + "px Courier New"),
        (e.fillStyle = "antiquewhite"),
        (e.shadowBlur = 2),
        (e.shadowOffsetX = 2),
        (e.shadowOffsetY = 2),
        (e.shadowColor = "black"),
        e.fillText("C›", 6.5 * i, 12.2 * i),
        e.restore(),
        e.save(),
        (e.textBaseline = "middle"),
        (e.textAlign = "center"),
        (e.font = FIELD.tileWidth / 3 + "px Verdana"),
        (e.fillStyle = "black"),
          e.fillText("目標", 4.5 * i, 9.3 * i),
          e.fillText("出力", 4.5 * i, 9.8 * i),
          e.fillText("出力ストリーム", 4 * i, 12.2 * i),
        e.restore();
    }
    if (
      (e.save(),
      (e.globalCompositeOperation = "source-over"),
      (e.globalAlpha = 1),
      (e.fillStyle = "#304347"),
      e.fill(p, "evenodd"),
      e.restore(),
      e.save(),
      (e.lineWidth = 1),
      (e.strokeStyle = "black"),
      e.stroke(p),
      e.restore(),
      e.save(),
      (e.fillStyle = "#523314"),
      (e.globalAlpha = 0.15),
      e.clip(p, "evenodd"),
      e.scale(1 / OVERLAY.scale, 1 / OVERLAY.scale),
      e.fill(d),
      e.translate(4040, 0),
      e.fill(d),
      e.translate(0, 4040),
      e.fill(d),
      e.translate(-4040, 0),
      e.fill(d),
      e.translate(8080, -4040),
      e.fill(d),
      e.translate(0, 4040),
      e.fill(d),
      e.restore(),
      16 === TUTORIAL.current)
    ) {
      (g = FIELD.tileWidth / 3),
        (T = [-6 * i, -6 * i, TUTORIAL.boxWidth + i, TUTORIAL.boxWidth + i]),
        (R = [0, 11.2 * a, 11.2 * a, 0]),
        (m = [g, g, g, g]),
        (C = new Path2D(Helper.makeRoundedPath(T, R, m, 1, 7.5 * i, 2 * a)));
      e.save(),
        (e.fillStyle = "#2b2b2b"),
        (e.strokeStyle = "#000"),
        (e.shadowBlur = 4),
        (e.shadowOffsetX = FIELD.tileWidth / 24),
        (e.shadowOffsetY = FIELD.tileWidth / 24),
        (e.shadowColor = "#17241f"),
        e.fill(C),
        e.stroke(C),
        e.restore(),
        e.save(),
        e.clip(C, "evenodd"),
        Textures.drawFiber(
          e,
          1.5 * i,
          2 * a,
          TUTORIAL.boxWidth + 7 * i,
          11.2 * a,
          FIELD.tileWidth / 48,
          0.5,
        ),
        e.restore();
    } else {
      (g = FIELD.tileWidth / 3),
        (T = [0, 0, TUTORIAL.boxWidth + i, TUTORIAL.boxWidth + i]),
        (R = [0, 11 * a, 11 * a, 0]),
        (m = [g, g, g, g]),
        (C = new Path2D(Helper.makeRoundedPath(T, R, m, 1, 7.5 * i, 2 * a)));
      e.save(),
        (e.fillStyle = "#2b2b2b"),
        (e.strokeStyle = "#000"),
        (e.shadowBlur = 4),
        (e.shadowOffsetX = FIELD.tileWidth / 24),
        (e.shadowOffsetY = FIELD.tileWidth / 24),
        (e.shadowColor = "#17241f"),
        e.fill(C),
        e.stroke(C),
        e.restore(),
        e.save(),
        e.clip(C, "evenodd"),
        Textures.drawFiber(
          e,
          7.5 * i,
          2 * a,
          TUTORIAL.boxWidth + i,
          11 * a,
          FIELD.tileWidth / 48,
          0.5,
        ),
        e.restore();
    }
    if (16 === TUTORIAL.current)
      var L = 2 * i,
        D = TUTORIAL.boxWidth + 6 * i;
    else (L = 8 * i), (D = TUTORIAL.boxWidth);
    e.save(),
      (e.font = (1.2 / 3) * FIELD.tileWidth + "px Courier New"),
      (e.textBaseline = "middle"),
      (e.textAlign = "center"),
      (e.shadowBlur = 2),
      (e.shadowOffsetX = 2),
      (e.shadowOffsetY = 2),
      (e.shadowColor = "black");
    FIELD.tileWidth;
    e.textAlign = "left";
    for (var b = 0; b < 6; b++) {
      0 === b
        ? (e.fillStyle = "antiquewhite")
        : 1 === b
          ? (e.fillStyle = "#ff4551")
          : 2 === b
            ? (e.fillStyle = "limegreen")
            : 3 === b
              ? (e.fillStyle = "cornflowerblue")
              : 4 === b
                ? (e.fillStyle = "goldenrod")
                : 5 === b && (e.fillStyle = "plum");
      for (var O = 2.5 * a, M = 0; M < TUTORIAL.info.length; M++) {
        for (
          var v = Helper.parseTextColored(e, TUTORIAL.info[M], D)[b], w = 0;
          w < v.length;
          w++
        )
          JSON.parse(JSON.stringify(v[w])).trim().length > 0 &&
            e.fillText(v[w], L, O),
            w < v.length - 1 && (O += SCENARIO.yPad2);
        O += SCENARIO.yPad;
      }
    }
    e.restore();
    A = FIELD.tileWidth / 6;
    var y = [2.5 * i, 2.5 * i, o - 2.5 * i, o - 2.5 * i],
      N = [0.75 * a, 1.5 * a, 1.5 * a, 0.75 * a],
      P = [A, A, A, A];
    C = new Path2D(Helper.makeRoundedPath(y, N, P, 1, 0, 0));
    e.save(),
      (e.fillStyle = "#2b2b2b"),
      (e.strokeStyle = "#000"),
      (e.shadowBlur = 4),
      (e.shadowOffsetX = FIELD.tileWidth / 24),
      (e.shadowOffsetY = FIELD.tileWidth / 24),
      (e.shadowColor = "#17241f"),
      e.fill(C),
      e.stroke(C),
      e.restore(),
      e.save(),
      e.clip(C, "evenodd"),
      Textures.drawFiber(
        e,
        2.5 * i,
        0.75 * a,
        6 * i + TUTORIAL.boxWidth,
        0.75 * a,
        FIELD.tileWidth / 48,
        0.5,
      ),
      e.restore(),
      e.save(),
      (e.fillStyle = "antiquewhite"),
      (e.font = (1.2 / 3) * FIELD.tileWidth + "px Courier New"),
      (e.textBaseline = "middle"),
      (e.textAlign = "center"),
      (e.shadowBlur = 2),
      (e.shadowOffsetX = 2),
      (e.shadowOffsetY = 2),
      (e.shadowColor = "black"),
      e.fillText(TUTORIAL.title, o / 2, 0.75 * a + 0.375 * a),
      e.restore();
  }
  static create(e) {
    var t = 1;
    SCENARIO.disableOverlay && (t = 0.5);
    var i = FIELD.tileWidth,
      a = FIELD.tileHeight,
      r = FIELD.cols,
      s = FIELD.rows,
      o = (1 * FIELD.tileHeight) / 8,
      n = OVERLAY.border,
      l = FIELD.tileWidth / 10,
      h = FIELD.tileWidth / 3,
      d = (FIELD.tileWidth, FIELD.tileWidth / 5);
    if (SCENARIO.division) {
      var u = 0;
      if (1 === SCENARIO.division || 2 === SCENARIO.division) {
        var c = 0,
          I = [
            (i * r) / 2 + n,
            (i * r) / 2 + n,
            (i * r) / 2 + n + i - 2 * n,
            (i * r) / 2 + n + i - 2 * n,
          ],
          E = [
            a / 2,
            a / 2 + (s / 2 - 1) * a + c,
            a / 2 + (s / 2 - 1) * a + c,
            a / 2,
          ],
          S = [d, d, d, d];
        u = new Path2D(Helper.makeRoundedPath(I, E, S, 1, 0, 0));
      } else if (3 === SCENARIO.division)
        (c = 0),
          (I = [
            (i * r) / 2 + n,
            (i * r) / 2 + n,
            (i * r) / 2 + n + i - 2 * n,
            (i * r) / 2 + n + i - 2 * n,
          ]),
          (E = [a / 2, a / 2 + 9 * a + c, a / 2 + 9 * a + c, a / 2]),
          (S = [d, d, d, d]),
          (u = new Path2D(Helper.makeRoundedPath(I, E, S, 1, -5 * a, 0)));
      else if (4 === SCENARIO.division)
        (c = 0),
          (I = [6.5 * i, 6.5 * i, 10.5 * i, 10.5 * i]),
          (E = [1.5 * a, 2.5 * a, 2.5 * a, 1.5 * a]),
          (S = [d, d, d, d]),
          (u = new Path2D(Helper.makeRoundedPath(I, E, S, 1, 0, 0)));
      else if (5 === SCENARIO.division)
        (I = [5.5 * i, 5.5 * i, 6.5 * i, 6.5 * i]),
          (E = [1.5 * a, 4.5 * a, 4.5 * a, 1.5 * a]),
          (S = [d, d, d, d]),
          (u = new Path2D(Helper.makeRoundedPath(I, E, S, 1, 0, 0)));
      else if (6 === SCENARIO.division)
        (I = [9.5 * i, 9.5 * i, 10.5 * i, 10.5 * i]),
          (E = [1.5 * a, 3.5 * a, 3.5 * a, 1.5 * a]),
          (S = [d, d, d, d]),
          (u = new Path2D(
            Helper.makeRoundedPath(I, E, S, 1, 0, 0) +
              Helper.makeRoundedPath(I, E, S, 1, 0, 10 * a),
          ));
      else if (7 === SCENARIO.division)
        (I = [
          (i * r) / 2 + n,
          (i * r) / 2 + n,
          (i * r) / 2 + n + i - 2 * n,
          (i * r) / 2 + n + i - 2 * n,
        ]),
          (E = [
            a / 2,
            a / 2 + (s / 2 - 1) * a,
            a / 2 + (s / 2 - 1) * a,
            a / 2,
          ]),
          (S = [d, d, d, d]),
          (u = new Path2D(Helper.makeRoundedPath(I, E, S, 1, 0, 0)));
      else if (8 === SCENARIO.division)
        (I = [2.2 * i + n, 2.2 * i + n, 17.5 * i + n, 17.5 * i + n]),
          (E = [5.5 * a, 6.5 * a, 6.5 * a, 5.5 * a]),
          (S = [d, d, d, d]),
          (u = new Path2D(Helper.makeRoundedPath(I, E, S, 1, 0, 0)));
      else if (9 === SCENARIO.division) {
        (I = [1.5 * i, 1.5 * i, 5.5 * i, 5.5 * i]),
          (E = [4.5 * a, 5.5 * a, 5.5 * a, 4.5 * a]),
          (S = [d, d, d, d]);
        var f = [6.5 * i, 6.5 * i, 10.5 * i, 10.5 * i],
          p = [4.5 * a, 5.5 * a, 5.5 * a, 4.5 * a],
          T = [d, d, d, d];
        u = new Path2D(
          Helper.makeRoundedPath(I, E, S, 1, 0, 5 * a) +
            Helper.makeRoundedPath(f, p, T, 1, 0, 5 * a),
        );
      } else if (10 === SCENARIO.division) {
        (I = [6.5 * i, 6.5 * i, 7.5 * i, 7.5 * i]),
          (E = [1.5 * a, 3.5 * a, 3.5 * a, 1.5 * a]),
          (S = [d, d, d, d]);
        var R = [
            6.5 * i,
            6.5 * i,
            1.5 * i,
            1.5 * i,
            6.5 * i,
            6.5 * i,
            7.5 * i,
            7.5 * i,
          ],
          m = [
            4.5 * a,
            6.5 * a,
            6.5 * a,
            8.5 * a,
            8.5 * a,
            10.5 * a,
            10.5 * a,
            4.5 * a,
          ],
          g = [d, d, d, d, d, d, d, d];
        u = new Path2D(
          Helper.makeRoundedPath(I, E, S, 1, 0, 0) +
            Helper.makeRoundedPath(I, E, S, 1, 0, 10 * a) +
            Helper.makeRoundedPath(R, m, g, 1, 0, 0),
        );
      } else if (11 === SCENARIO.division)
        (I = [1.5 * i, 1.5 * i, 3.5 * i, 3.5 * i, 4.5 * i, 4.5 * i]),
          (E = [7.5 * a, 8.5 * a, 8.5 * a, 13.5 * a, 13.5 * a, 7.5 * a]),
          (S = [d, d, d, d, d, d]),
          (u = new Path2D(Helper.makeRoundedPath(I, E, S, 1, 0, 0)));
      else if (12 === SCENARIO.division)
        (I = [12.5 * i, 12.5 * i, 13.5 * i, 13.5 * i]),
          (E = [1.5 * a, 5.5 * a, 5.5 * a, 1.5 * a]),
          (S = [d, d, d, d]),
          (f = [12.5 * i, 12.5 * i, 13.5 * i, 13.5 * i]),
          (p = [1.5 * a, 5.5 * a, 5.5 * a, 1.5 * a]),
          (T = [d, d, d, d]),
          (u = new Path2D(
            Helper.makeRoundedPath(I, E, S, 1, 0, 0) +
              Helper.makeRoundedPath(I, E, S, 1, 0, 8 * a),
          ));
      else if (13 === SCENARIO.division)
        (I = [1.5 * i, 1.5 * i, 3.5 * i, 3.5 * i]),
          (E = [6.5 * a, 8.5 * a, 8.5 * a, 6.5 * a]),
          (S = [d, d, d, d]),
          (u = new Path2D(Helper.makeRoundedPath(I, E, S, 1, 0, 0)));
      if (8 === SCENARIO.division) {
        var A = e.createLinearGradient(0, 5.5 * a, 0, 6.5 * a);
        A.addColorStop(0, "#777"), A.addColorStop(1, "#999");
      } else if (10 === SCENARIO.division) {
        A = e.createLinearGradient(1.5 * i, 1.5 * a, 6.5 * i, 11.5 * a);
        A.addColorStop(0, "#777"), A.addColorStop(1, "#999");
      } else if (11 === SCENARIO.division) {
        A = e.createLinearGradient(1.5 * i, 5.5 * a, 6.5 * i, 5.5 * a);
        A.addColorStop(0, "#777"), A.addColorStop(1, "#999");
      } else if (12 === SCENARIO.division) {
        A = e.createLinearGradient(12.5 * i, 5.5 * a, 13.5 * i, 5.5 * a);
        A.addColorStop(0, "#777"), A.addColorStop(1, "#999");
      } else if (13 === SCENARIO.division) {
        A = e.createLinearGradient(1.5 * i, 5.5 * a, 3.5 * i, 5.5 * a);
        A.addColorStop(0, "#777"), A.addColorStop(1, "#999");
      } else {
        A = e.createLinearGradient(
          (i * r) / 2 + n,
          0,
          (i * r) / 2 + n + i - 2 * n,
          0,
        );
        A.addColorStop(0, "#777"), A.addColorStop(1, "#999");
      }
      u &&
        (e.save(),
        (e.globalCompositeOperation = "source-over"),
        (e.globalAlpha = 1),
        (e.fillStyle = A),
        (e.shadowBlur = 4),
        (e.shadowOffsetX = 4),
        (e.shadowOffsetY = 4),
        (e.shadowColor = "#555"),
        e.fill(u, "evenodd"),
        e.restore(),
        e.save(),
        e.clip(u, "evenodd"),
        1 === SCENARIO.division ||
        2 === SCENARIO.division ||
        7 === SCENARIO.division
          ? Textures.drawHazard(
              e,
              (i * r) / 2,
              0,
              FIELD.tileWidth,
              6 * FIELD.tileHeight,
              FIELD.tileWidth / 48,
              0.5,
            )
          : 3 === SCENARIO.division
            ? Textures.drawHazard(
                e,
                4.5 * i,
                0,
                FIELD.tileWidth,
                9 * FIELD.tileHeight,
                FIELD.tileWidth / 48,
                0.5,
              )
            : 4 === SCENARIO.division
              ? Textures.drawHazard(
                  e,
                  6.5 * i,
                  0,
                  4 * FIELD.tileWidth,
                  4 * FIELD.tileHeight,
                  FIELD.tileWidth / 48,
                  0.5,
                )
              : 5 === SCENARIO.division
                ? Textures.drawHazard(
                    e,
                    5 * i,
                    0,
                    2 * FIELD.tileWidth,
                    6 * FIELD.tileHeight,
                    FIELD.tileWidth / 48,
                    0.5,
                  )
                : 6 === SCENARIO.division
                  ? Textures.drawHazard(
                      e,
                      9 * i,
                      0,
                      2 * FIELD.tileWidth,
                      13 * FIELD.tileHeight,
                      FIELD.tileWidth / 48,
                      0.5,
                    )
                  : 8 === SCENARIO.division
                    ? Textures.drawHazard(
                        e,
                        2 * i,
                        5,
                        20 * FIELD.tileWidth,
                        2 * FIELD.tileHeight,
                        FIELD.tileWidth / 48,
                        0.5,
                      )
                    : 9 === SCENARIO.division
                      ? Textures.drawHazard(
                          e,
                          1 * i,
                          1 * a,
                          24 * FIELD.tileWidth,
                          10 * FIELD.tileHeight,
                          FIELD.tileWidth / 48,
                          0.5,
                        )
                      : 10 === SCENARIO.division
                        ? Textures.drawHazard(
                            e,
                            1 * i,
                            1 * a,
                            24 * FIELD.tileWidth,
                            10 * FIELD.tileHeight,
                            FIELD.tileWidth / 48,
                            0.5,
                          )
                        : 11 === SCENARIO.division
                          ? Textures.drawHazard(
                              e,
                              1 * i,
                              5 * a,
                              5 * FIELD.tileWidth,
                              6 * FIELD.tileHeight,
                              FIELD.tileWidth / 48,
                              0.5,
                            )
                          : 12 === SCENARIO.division
                            ? Textures.drawHazard(
                                e,
                                12 * i,
                                1 * a,
                                2 * FIELD.tileWidth,
                                12 * FIELD.tileHeight,
                                FIELD.tileWidth / 48,
                                0.5,
                              )
                            : 13 === SCENARIO.division &&
                              Textures.drawHazard(
                                e,
                                1 * i,
                                6 * a,
                                4 * FIELD.tileWidth,
                                2 * FIELD.tileHeight,
                                FIELD.tileWidth / 48,
                                0.5,
                              ),
        e.restore(),
        e.save(),
        (e.lineWidth = 1.5),
        (e.strokeStyle = "black"),
        e.stroke(u),
        e.restore());
      u = 0;
      if (1 === SCENARIO.division)
        u = new Path2D(
          Helper.makeRoundedPath(I, E, S, 1, 0, (s / 2 + 1) * a - c),
        );
      else if (2 === SCENARIO.division)
        (I = [
          (i * r) / 2 + n,
          (i * r) / 2 + n,
          (i * r) / 2 + n + i - 2 * n,
          (i * r) / 2 + n + i - 2 * n,
        ]),
          (E = [
            a / 2,
            a / 2 + (s / 2) * a + c,
            a / 2 + (s / 2) * a + c,
            a / 2,
          ]),
          (S = [d, d, d, d]),
          (u = new Path2D(
            Helper.makeRoundedPath(I, E, S, 1, 0, (s / 2 + 0) * a),
          ));
      else if (3 === SCENARIO.division)
        (I = [
          (i * r) / 2 + n,
          (i * r) / 2 + n,
          (i * r) / 2 + n + i - 2 * n,
          (i * r) / 2 + n + i - 2 * n,
        ]),
          (E = [a / 2, a / 2 + 1 * a + c, a / 2 + 1 * a + c, a / 2]),
          (S = [d, d, d, d]),
          (u = new Path2D(
            Helper.makeRoundedPath(I, E, S, 1, -5 * a, (s / 2 + 5) * a),
          ));
      else if (4 === SCENARIO.division)
        (c = 0),
          (I = [6.5 * i, 6.5 * i, 10.5 * i, 10.5 * i]),
          (E = [1.5 * a, 3.5 * a, 3.5 * a, 1.5 * a]),
          (S = [d, d, d, d]),
          (u = new Path2D(Helper.makeRoundedPath(I, E, S, 1, 0, 10 * a)));
      else if (5 === SCENARIO.division)
        (I = [5.5 * i, 5.5 * i, 6.5 * i, 6.5 * i]),
          (E = [7.5 * a, 13.5 * a, 13.5 * a, 7.5 * a]),
          (S = [d, d, d, d]),
          (u = new Path2D(Helper.makeRoundedPath(I, E, S, 1, 0, 0)));
      else if (6 === SCENARIO.division)
        (I = [
          9.5 * i,
          9.5 * i,
          1.5 * i,
          1.5 * i,
          9.5 * i,
          9.5 * i,
          10.5 * i,
          10.5 * i,
          18.5 * i,
          18.5 * i,
          10.5 * i,
          10.5 * i,
        ]),
          (E = [
            4.5 * a,
            6.5 * a,
            6.5 * a,
            8.5 * a,
            8.5 * a,
            10.5 * a,
            10.5 * a,
            8.5 * a,
            8.5 * a,
            6.5 * a,
            6.5 * a,
            4.5 * a,
          ]),
          (S = [d, d, d, d, d, d, d, d, d, d, d, d]),
          (u = new Path2D(Helper.makeRoundedPath(I, E, S, 1, 0, 0)));
      else if (7 === SCENARIO.division)
        (I = [
          (i * r) / 2 + n,
          (i * r) / 2 + n,
          (i * r) / 2 + n + i - 2 * n,
          (i * r) / 2 + n + i - 2 * n,
        ]),
          (E = [2.5 * a, 7.5 * a, 7.5 * a, 2.5 * a]),
          (S = [d, d, d, d]),
          (u = new Path2D(
            Helper.makeRoundedPath(I, E, S, 1, 0, (s / 2 + 0) * a),
          ));
      else if (8 === SCENARIO.division)
        (I = [2.2 * i + n, 2.2 * i + n, 17.5 * i + n, 17.5 * i + n]),
          (E = [5.5 * a, 6.5 * a, 6.5 * a, 5.5 * a]),
          (S = [d, d, d, d]),
          (u = new Path2D(Helper.makeRoundedPath(I, E, S, 1, 0, 3 * a)));
      else if (9 === SCENARIO.division)
        (I = [1.5 * i, 1.5 * i, 5.5 * i, 5.5 * i]),
          (E = [4.5 * a, 5.5 * a, 5.5 * a, 4.5 * a]),
          (S = [d, d, d, d]),
          (f = [6.5 * i, 6.5 * i, 10.5 * i, 10.5 * i]),
          (p = [4.5 * a, 5.5 * a, 5.5 * a, 4.5 * a]),
          (T = [d, d, d, d]),
          (R = [
            11.5 * i,
            11.5 * i,
            15.5 * i,
            15.5 * i,
            11.5 * i,
            11.5 * i,
            16.5 * i,
            16.5 * i,
            18.5 * i,
            18.5 * i,
            16.5 * i,
            16.5 * i,
          ]),
          (m = [
            4.5 * a,
            5.5 * a,
            5.5 * a,
            9.5 * a,
            9.5 * a,
            10.5 * a,
            10.5 * a,
            8.5 * a,
            8.5 * a,
            6.5 * a,
            6.5 * a,
            4.5 * a,
          ]),
          (g = [d, d, d, d, d, d, d, d, d, d, d, d]),
          (u = new Path2D(
            Helper.makeRoundedPath(I, E, S, 1, 0, 0) +
              Helper.makeRoundedPath(f, p, T, 1, 0, 0) +
              Helper.makeRoundedPath(R, m, g, 1, 0, 0),
          ));
      if (8 === SCENARIO.division) {
        A = e.createLinearGradient(0, 8.5 * a, 0, 9.5 * a);
        A.addColorStop(0, "#777"), A.addColorStop(1, "#999");
      } else if (9 === SCENARIO.division) {
        A = e.createLinearGradient(0, 4.5 * a, 0, 9.5 * a);
        A.addColorStop(0, "#777"), A.addColorStop(1, "#999");
      }
      u &&
        (e.save(),
        (e.globalCompositeOperation = "source-over"),
        (e.globalAlpha = 1),
        (e.fillStyle = A),
        (e.shadowBlur = 4),
        (e.shadowOffsetX = 4),
        (e.shadowOffsetY = 4),
        (e.shadowColor = "#555"),
        e.fill(u, "evenodd"),
        e.restore(),
        e.save(),
        e.clip(u, "evenodd"),
        1 === SCENARIO.division ||
        2 === SCENARIO.division ||
        7 === SCENARIO.division
          ? Textures.drawHazard(
              e,
              (i * r) / 2,
              (a * s) / 2,
              FIELD.tileWidth,
              6 * FIELD.tileHeight,
              FIELD.tileWidth / 48,
              0.5,
            )
          : 3 === SCENARIO.division
            ? Textures.drawHazard(
                e,
                4.5 * i,
                (a * s) / 2,
                FIELD.tileWidth,
                6 * FIELD.tileHeight,
                FIELD.tileWidth / 48,
                0.5,
              )
            : 4 === SCENARIO.division
              ? Textures.drawHazard(
                  e,
                  6.5 * i,
                  11.5 * a,
                  4 * FIELD.tileWidth,
                  6 * FIELD.tileHeight,
                  FIELD.tileWidth / 48,
                  0.5,
                )
              : 5 === SCENARIO.division
                ? Textures.drawHazard(
                    e,
                    5 * i,
                    7 * a,
                    2 * FIELD.tileWidth,
                    7 * FIELD.tileHeight,
                    FIELD.tileWidth / 48,
                    0.5,
                  )
                : 6 === SCENARIO.division
                  ? Textures.drawHazard(
                      e,
                      1 * i,
                      1 * a,
                      18 * FIELD.tileWidth,
                      11 * FIELD.tileHeight,
                      FIELD.tileWidth / 48,
                      0.5,
                    )
                  : 8 === SCENARIO.division
                    ? Textures.drawHazard(
                        e,
                        2 * i,
                        7,
                        24 * FIELD.tileWidth,
                        2 * FIELD.tileHeight,
                        FIELD.tileWidth / 48,
                        0.5,
                      )
                    : 9 === SCENARIO.division &&
                      Textures.drawHazard(
                        e,
                        1 * i,
                        1 * a,
                        24 * FIELD.tileWidth,
                        10 * FIELD.tileHeight,
                        FIELD.tileWidth / 48,
                        0.5,
                      ),
        e.restore(),
        e.save(),
        (e.lineWidth = 1),
        (e.strokeStyle = "black"),
        e.stroke(u),
        e.restore());
    }
    if (SCENARIO.device) {
      if (
        (e.save(),
        (e.globalCompositeOperation = "source-over"),
        (e.globalAlpha = 0.2),
        (e.fillStyle = "#333"),
        (e.shadowBlur = 4),
        (e.shadowOffsetX = 4),
        (e.shadowOffsetY = 4),
        (e.shadowColor = "#555"),
        1 === SCENARIO.device)
      ) {
        (I = [4.5 * i, 4.5 * i, 5.7 * i, 14.3 * i, 15.5 * i, 15.5 * i]),
          (E = [2.5 * a, 5.5 * a, 7.5 * a, 7.5 * a, 5.5 * a, 2.5 * a]),
          (S = [d, d, d, d, d, d]),
          (u = new Path2D(Helper.makeRoundedPath(I, E, S, 1, 0, 0)));
        e.globalAlpha = 0.2;
      } else if (2 === SCENARIO.device) {
        (I = [6.5 * i, 6.5 * i, 10.5 * i, 10.5 * i]),
          (E = [2.5 * a, 11.5 * a, 11.5 * a, 2.5 * a]),
          (S = [d, d, d, d]),
          (u = new Path2D(Helper.makeRoundedPath(I, E, S, 1, 0, 0)));
        e.globalAlpha = 0.2;
      } else if (3 === SCENARIO.device) {
        (I = [3.6 * i, 3.6 * i, 6.4 * i, 6.4 * i]),
          (E = [8.5 * a, 9.5 * a, 9.5 * a, 8.5 * a]),
          (S = [d, d, d, d]),
          (u = new Path2D(Helper.makeRoundedPath(I, E, S, 1, 0, 0)));
        e.globalAlpha = 1;
      } else if (4 === SCENARIO.device) {
        (I = [4.6 * i, 4.6 * i, 5.4 * i, 5.4 * i]),
          (E = [4.5 * a, 6.5 * a, 6.5 * a, 4.5 * a]),
          (S = [d, d, d, d]),
          (f = [4.6 * i, 4.6 * i, 5.4 * i, 5.4 * i]),
          (p = [8.5 * a, 10.5 * a, 10.5 * a, 8.5 * a]),
          (T = [d, d, d, d]),
          (u = new Path2D(
            Helper.makeRoundedPath(I, E, S, 1, 0, 0) +
              Helper.makeRoundedPath(f, p, T, 1, 0, 0),
          ));
        e.globalAlpha = 1;
      } else if (5 === SCENARIO.device) {
        (I = [4.5 * i, 4.5 * i, 5.5 * i, 5.5 * i]),
          (E = [1.5 * a, 13.5 * a, 13.5 * a, 1.5 * a]),
          (S = [d, d, d, d]),
          (u = new Path2D(Helper.makeRoundedPath(I, E, S, 1, 0, 0)));
        e.globalAlpha = 0.2;
      } else if (6 === SCENARIO.device) {
        (I = [1.5 * i, 1.5 * i, 5.5 * i, 5.5 * i]),
          (E = [5.5 * a, 9.5 * a, 8.5 * a, 6.5 * a]),
          (S = [d, d, d, d]),
          (u = new Path2D(Helper.makeRoundedPath(I, E, S, 1, 0, 0)));
        e.globalAlpha = 0.2;
      } else if (7 === SCENARIO.device) {
        (I = [1.5 * i, 1.5 * i, 8.5 * i, 8.5 * i]),
          (E = [5.5 * a, 9.5 * a, 9.5 * a, 5.5 * a]),
          (S = [d, d, d, d]),
          (u = new Path2D(Helper.makeRoundedPath(I, E, S, 1, 0, 0)));
        e.globalAlpha = 0.2;
      } else if (8 === SCENARIO.device) {
        (I = [6.5 * i, 6.5 * i, 7.5 * i, 7.5 * i]),
          (E = [1.5 * a, 13.5 * a, 13.5 * a, 1.5 * a]),
          (S = [d, d, d, d]),
          (u = new Path2D(Helper.makeRoundedPath(I, E, S, 1, 0, 0)));
        e.globalAlpha = 0.2;
      } else if (9 === SCENARIO.device) {
        (I = [7.5 * i, 7.5 * i, 8.5 * i, 8.5 * i]),
          (E = [1.5 * a, 13.5 * a, 13.5 * a, 1.5 * a]),
          (S = [d, d, d, d]),
          (u = new Path2D(Helper.makeRoundedPath(I, E, S, 1, 0, 0)));
        e.globalAlpha = 0.2;
      } else if (10 === SCENARIO.device) {
        (I = [3.5 * i, 3.5 * i, 6.5 * i, 6.5 * i]),
          (E = [5.5 * a, 6.5 * a, 6.5 * a, 5.5 * a]),
          (S = [d, d, d, d]),
          (f = [3.5 * i, 3.5 * i, 6.5 * i, 6.5 * i]),
          (p = [8.5 * a, 9.5 * a, 9.5 * a, 8.5 * a]),
          (T = [d, d, d, d]),
          (u = new Path2D(
            Helper.makeRoundedPath(I, E, S, 1, 0, 0) +
              Helper.makeRoundedPath(f, p, T, 1, 0, 0),
          ));
        e.globalAlpha = 0.2;
      } else if (11 === SCENARIO.device) {
        (I = [9.5 * i, 9.5 * i, 10.5 * i, 10.5 * i]),
          (E = [1.5 * a, 13.5 * a, 13.5 * a, 1.5 * a]),
          (S = [d, d, d, d]),
          (u = new Path2D(Helper.makeRoundedPath(I, E, S, 1, 0, 0)));
        e.globalAlpha = 0.2;
      } else if (12 === SCENARIO.device) {
        (I = [8.5 * i, 8.5 * i, 11.5 * i, 11.5 * i]),
          (E = [1.5 * a, 13.5 * a, 13.5 * a, 1.5 * a]),
          (S = [d, d, d, d]),
          (u = new Path2D(Helper.makeRoundedPath(I, E, S, 1, 0, 0)));
        e.globalAlpha = 0.2;
      }
      e.fill(u, "evenodd"), e.stroke(u, "evenodd"), e.restore();
    }
    "chsh" === SCENARIO.name &&
      (e.save(),
      (e.textBaseline = "middle"),
      (e.textAlign = "left"),
      (e.font = (i / 2) * 1.2 + "px Verdana"),
      (e.fillStyle = "black"),
      (e.shadowBlur = 0),
      (e.shadowOffsetX = 0),
      (e.shadowOffsetY = 0),
      (e.shadowColor = "black"),
      e.fillText("Alice", 3 * i, 11.5 * a),
      e.beginPath(),
      e.stroke(Helper.roundRect(2.8 * i, 11.1 * a, 1.8 * i, 0.8 * a, i / 4)),
      e.fillText("Bob", 15 * i, 11.5 * a),
      e.beginPath(),
      e.stroke(Helper.roundRect(14.8 * i, 11.1 * a, 1.6 * i, 0.8 * a, i / 4)),
      e.restore());
    var C = [
        n,
        i,
        i,
        n,
        n,
        i - n,
        i - n,
        i,
        i,
        5 * i + n,
        5 * i + n,
        3 * i + o,
        3 * i + o,
        6 * i - n,
        6 * i - n,
        (r - 6) * i + n,
        (r - 6) * i + n,
        (r - 3) * i - o,
        (r - 3) * i - o,
        (r - 5) * i - n,
        (r - 5) * i - n,
        i * (r - 1),
        i * (r - 1),
        i * (r - 1) + n,
        i * (r - 1) + n,
        i * r - n,
        i * r - n,
        i * (r - 1),
        i * (r - 1),
        i * r - n,
        i * r - n,
        i * (r - 1) + n,
        i * (r - 1) + n,
        i * (r - 1),
        i * (r - 1),
        i,
        i,
        i - n,
        i - n,
        n,
      ],
      L = [
        (FIELD.topEntry + 1) * a - n,
        (FIELD.topEntry + 1) * a - n,
        (FIELD.bottomEntry + 1) * a + n,
        (FIELD.bottomEntry + 1) * a + n,
        (s - 1) * a - o,
        (s - 1) * a - o,
        (FIELD.bottomEntry + 2) * a - n,
        (FIELD.bottomEntry + 2) * a - n,
        a * (s - 1),
        a * (s - 1),
        a * (s - 1) + n,
        a * (s - 1) + n,
        a * s - n,
        a * s - n,
        a * (s - 1),
        a * (s - 1),
        a * s - n,
        a * s - n,
        a * (s - 1) + n,
        a * (s - 1) + n,
        a * (s - 1),
        a * (s - 1),
        (FIELD.bottomEntry + 2) * a - n,
        (FIELD.bottomEntry + 2) * a - n,
        (s - 1) * a - o,
        (s - 1) * a - o,
        (FIELD.bottomEntry + 1) * a + n,
        (FIELD.bottomEntry + 1) * a + n,
        (FIELD.topEntry + 1) * a - n,
        (FIELD.topEntry + 1) * a - n,
        a + o,
        a + o,
        FIELD.topEntry * a + n,
        FIELD.topEntry * a + n,
        a,
        a,
        FIELD.topEntry * a + n,
        FIELD.topEntry * a + n,
        a + o,
        a + o,
      ],
      D = [
        h,
        l,
        l,
        h,
        l,
        l,
        l,
        l,
        l,
        l,
        l,
        l,
        l,
        h,
        l,
        l,
        h,
        l,
        l,
        l,
        l,
        l,
        l,
        l,
        l,
        l,
        h,
        l,
        l,
        h,
        l,
        l,
        l,
        l,
        l,
        l,
        l,
        l,
        l,
        l,
      ],
      b = [
        FIELD.leftMargin - OVERLAY.margin,
        FIELD.leftMargin + OVERLAY.margin + FIELD.tileWidth * FIELD.cols,
        FIELD.leftMargin + OVERLAY.margin + FIELD.tileWidth * FIELD.cols,
        FIELD.leftMargin - OVERLAY.margin,
      ],
      O = [
        FIELD.topMargin + OVERLAY.margin + a * FIELD.rows,
        FIELD.topMargin + OVERLAY.margin + a * FIELD.rows,
        FIELD.topMargin - OVERLAY.margin,
        FIELD.topMargin - OVERLAY.margin,
      ],
      M = [h, h, h, h],
      v =
        ((u = new Path2D(
          Helper.makeRoundedPath(
            C,
            L,
            D,
            1,
            FIELD.leftMargin,
            FIELD.topMargin,
          ) + Helper.makeRoundedPath(b, O, M, 1, 0, 0),
        )),
        new Path2D(Helper.makeRoundedPath(b, O, M, 1, 0, 0)));
    const w = new Path2D(makeOverlayPattern());
    CANV.controls.clear();
    var y = CANV.controls.ctx;
    y.save(),
      (y.fillStyle = "#30473e"),
      (y.shadowBlur = 4),
      (y.shadowOffsetX = 4),
      (y.shadowOffsetY = 4),
      (y.shadowColor = "#555"),
      y.fill(v, "evenodd"),
      (y.lineWidth = 1),
      (y.strokeStyle = "black"),
      y.stroke(v),
      (y.textBaseline = "middle"),
      (y.textAlign = "center"),
      (y.font = 2.8 * i + "px Courier New"),
      y.translate(
        FIELD.leftMargin - OVERLAY.margin + 0.5 * FIELD.tileWidth * FIELD.cols,
        FIELD.topMargin + OVERLAY.margin + 0.5 * a * FIELD.rows,
      ),
      y.rotate(-Math.PI / 6),
      y.strokeText("機密", 0, 0),
      (y.font = 1 * i + "px Courier New"),
      y.strokeText("外部共有禁止", 0, -2.2 * a);
    var N = Math.random();
    N < 1 / 3
        ? y.strokeText("違反時は感電処罰", 0, 2.2 * a)
      : N < 2 / 3
          ? ((y.font = Math.round(0.9 * i) + "px Courier New"),
            y.strokeText("違反時はWindows MEへのダウングレード", 0, 2.2 * a))
          : y.strokeText("違反時は再フラグメンテーション", 0, 2.2 * a),
      y.beginPath(),
      y.stroke(
        Helper.roundRect(
          (-a * (FIELD.rows + 4)) / 2,
          1.1 * a,
          a * (FIELD.rows + 4),
          0.2 * a,
          a / 12,
        ),
      ),
      y.stroke(
        Helper.roundRect(
          (-a * (FIELD.rows + 4)) / 2,
          -1.3 * a,
          a * (FIELD.rows + 4),
          0.2 * a,
          a / 12,
        ),
      );
    var P = a,
      F = 3 * a,
      k = [-P / 2, -P / 2, -1.5 * P, 0, 1.5 * P, P / 2, P / 2, -P / 2],
      x = [
        3 * a,
        3 * a + F,
        3 * a + F,
        4 * a + F,
        3 * a + F,
        3 * a + F,
        3 * a,
        3 * a,
      ],
      B = [0, 0, 0, 0, 0, 0, 0, 0],
      W = new Path2D(Helper.makeRoundedPath(k, x, B, 1, 0, 0));
    y.stroke(W);
    (x = [
      -3 * a,
      -3 * a - F,
      -3 * a - F,
      -4 * a - F,
      -3 * a - F,
      -3 * a - F,
      -3 * a,
      -3 * a,
    ]),
      (W = new Path2D(Helper.makeRoundedPath(k, x, B, 1, 0, 0)));
    y.stroke(W),
      y.restore(),
      y.save(),
      (y.fillStyle = "#523314"),
      (y.globalAlpha = 0.15),
      y.clip(v, "evenodd"),
      y.scale(1 / OVERLAY.scale, 1 / OVERLAY.scale),
      y.fill(w),
      y.translate(4e3, 0),
      y.fill(w),
      y.translate(0, 4e3),
      y.fill(w),
      y.translate(-4e3, 0),
      y.fill(w),
      y.restore(),
      e.save(),
      (e.globalCompositeOperation = "source-over"),
      (e.globalAlpha = 1),
      t < 1 && (e.globalAlpha = t),
      (e.fillStyle = "#30473e"),
      (e.shadowBlur = 4),
      (e.shadowOffsetX = 4),
      (e.shadowOffsetY = 4),
      (e.shadowColor = "#555"),
      e.fill(u, "evenodd"),
      e.restore(),
      e.save(),
      (e.lineWidth = 1),
      (e.strokeStyle = "black"),
      e.stroke(u),
      e.restore(),
      e.save(),
      (e.fillStyle = "#523314"),
      (e.globalAlpha = 0.15),
      e.clip(u, "evenodd"),
      e.scale(1 / OVERLAY.scale, 1 / OVERLAY.scale),
      e.fill(w),
      e.translate(4040, 0),
      e.fill(w),
      e.translate(0, 4040),
      e.fill(w),
      e.translate(-4040, 0),
      e.fill(w),
      FIELD.cols > 19 &&
        (e.translate(8080, -4040), e.fill(w), e.translate(0, 4040), e.fill(w)),
      e.restore(),
      e.save(),
      t < 1 && (e.globalAlpha = t),
      (e.textBaseline = "middle"),
      (e.textAlign = "center"),
      (e.font = (1 * i) / 2 + "px Courier New"),
      (e.fillStyle = "antiquewhite"),
      (e.shadowBlur = 2),
      (e.shadowOffsetX = 2),
      (e.shadowOffsetY = 2),
      (e.shadowColor = "black"),
      e.fillText(
        "A›",
        FIELD.leftMargin + i / 2 + n / 2,
        FIELD.topMargin + (FIELD.topEntry + 1.5) * a - n,
      ),
      e.fillText(
        "B›",
        FIELD.leftMargin + i / 2 + n / 2,
        FIELD.topMargin + (FIELD.bottomEntry + 0.5) * a + n,
      ),
      e.fillText(
        "C›",
        FIELD.leftMargin + i / 2 + i * (r - 1) - n / 2,
        FIELD.topMargin + (FIELD.topEntry + 1.5) * a - n,
      ),
      e.fillText(
        "D›",
        FIELD.leftMargin + i / 2 + i * (r - 1) - n / 2,
        FIELD.topMargin + (FIELD.bottomEntry + 0.5) * a + n,
      ),
      e.restore(),
      e.save(),
      t < 1 && (e.globalAlpha = t),
      (e.textBaseline = "middle"),
      (e.textAlign = "center"),
      (e.font = (1 * i) / 2 + "px Courier New"),
      (e.fillStyle = "antiquewhite"),
      (e.shadowBlur = 2),
      (e.shadowOffsetX = 2),
      (e.shadowOffsetY = 2),
      (e.shadowColor = "black"),
      e.fillText(
        String.fromCharCode(945),
        FIELD.leftMargin + i / 2 + 6 * i - n,
        FIELD.topMargin + a * (s - 0.5) - (2 * n) / 4,
      ),
      e.fillText(
        String.fromCharCode(946),
        FIELD.leftMargin + i / 2 + (r - 7) * i + n,
        FIELD.topMargin + a * (s - 0.5),
      ),
      (e.font = (1 * i) / 2 + "px Courier New"),
      e.fillText(
        "ˆ",
        FIELD.leftMargin + i / 2 + 6 * i - n,
        FIELD.topMargin + a * (s - 0.5) - (3 * n) / 3,
      ),
      e.fillText(
        "ˆ",
        FIELD.leftMargin + i / 2 + (r - 7) * i + n,
        FIELD.topMargin + a * (s - 0.5) - (3 * n) / 3,
      ),
      e.restore(),
      e.save(),
      t < 1 && (e.globalAlpha = t),
      (e.textBaseline = "bottom"),
      (e.textAlign = "left"),
      (e.font = (2.2 * FIELD.tileWidth) / 4 + "px Courier New"),
      (e.fillStyle = "antiquewhite"),
      (e.shadowBlur = 2),
      (e.shadowOffsetX = 2),
      (e.shadowOffsetY = 2),
      (e.shadowColor = "black"),
      e.fillText("The Qubit Factory", (3.2 * i) / 3, (3.2 * a) / 3);
    var q = (3.2 * i) / 3 + e.measureText("The Qubit Factory").width;
    (e.font = (1 * FIELD.tileWidth) / 4 + "px Courier New"),
      e.fillText("  " + FIELD.version, q, (3.3 * a) / 3),
      e.restore(),
      e.save(),
      t < 1 && (e.globalAlpha = t),
      Paths.entryPortal(e, 0, 0).draw(
        e,
        FIELD.leftMargin,
        a + FIELD.topMargin,
        FIELD.tileWidth,
        FIELD.tileHeight,
      ),
      Paths.entryPortal(e, 0, 1).draw(
        e,
        FIELD.leftMargin + i * (r - 1),
        a + FIELD.topMargin,
        FIELD.tileWidth,
        FIELD.tileHeight,
      ),
      Paths.entryPortal(e, Math.PI, 1).draw(
        e,
        FIELD.leftMargin + i * (r - 1),
        a * (s - 2) + FIELD.topMargin,
        FIELD.tileWidth,
        FIELD.tileHeight,
      ),
      Paths.entryPortal(e, Math.PI, 0).draw(
        e,
        FIELD.leftMargin,
        a * (s - 2) + FIELD.topMargin,
        FIELD.tileWidth,
        FIELD.tileHeight,
      ),
      Paths.entryPortal(e, (3 * Math.PI) / 2, 0).draw(
        e,
        3 * i + FIELD.leftMargin,
        a * (s - 1) + FIELD.topMargin,
        FIELD.tileWidth,
        FIELD.tileHeight,
      ),
      Paths.entryPortal(e, Math.PI / 2, 0).draw(
        e,
        (r - 4) * i + FIELD.leftMargin,
        a * (s - 1) + FIELD.topMargin,
        FIELD.tileWidth,
        FIELD.tileHeight,
      ),
      e.restore();
    var H = FIELD.tileWidth / 9,
      U =
        0 * FIELD.leftPad +
        (FIELD.cols / 2 + 3 + (FIELD.cols - 21) / 4) * FIELD.tileWidth,
      _ = 0 * FIELD.topPad + FIELD.tileHeight / 2,
      G = 7 * FIELD.tileWidth,
      V = (2 * FIELD.tileHeight) / 3,
      Q =
        ((b = [U, U, U + G, U + G]),
        (O = [_, _ + V, _ + V, _]),
        (M = [H, H, H, H]),
        new Path2D(Helper.makeRoundedPath(b, O, M, 1, 0, 0)));
    e.save(),
      t < 1 && (e.globalAlpha = t),
      (e.fillStyle = "#2b2b2b"),
      (e.strokeStyle = "#000"),
      (e.shadowBlur = 4),
      (e.shadowOffsetX = FIELD.tileWidth / 24),
      (e.shadowOffsetY = FIELD.tileWidth / 24),
      (e.shadowColor = "#17241f"),
      e.fill(Q),
      e.stroke(Q),
      e.restore(),
      e.save(),
      e.clip(Q, "evenodd"),
      Textures.drawFiber(e, U, _, G, V, FIELD.tileWidth / 48, 0.5),
      e.restore(),
      e.save(),
      (e.globalCompositeOperation = "destination-out");
    for (var $ = PathsC.ctrlDummy(e), z = 0; z < 5; z++)
      $.draw(
        e,
        FIELD.menu2.x0 + z * FIELD.tileWidth - FIELD.leftPad,
        FIELD.menu2.y0 - FIELD.topPad,
        FIELD.tileWidth,
        FIELD.tileHeight,
      );
    e.restore();
  }
  static createMenu(e, t, i, a, r, s) {
    e.clearRect(e, 0, 0, t, i), a.clearRect(a, 0, 0, r, s), a.save();
    for (var o = 0; o < MENU.buttons.length; o++) {
      var n = MENU.buttons[o],
        l = MENU.gridPos(n.i0, n.j0);
      if (
        (n.tile.draw(a, l.x0, l.y0, FIELD.tileWidth, FIELD.tileHeight),
        n.isGrey)
      ) {
        var h = 1.3 * MENU.tileMargin;
        n.tile.draw(a, l.x0, l.y0, FIELD.tileWidth, FIELD.tileHeight),
          Paths.menuGrey(a).draw(
            a,
            l.x0 - h / 2,
            l.y0 - h / 2,
            FIELD.tileWidth + h,
            FIELD.tileHeight + h,
          );
      }
    }
    a.restore();
    var d = FIELD.tileWidth / 6,
      u = FIELD.tileHeight / 6,
      c = (3.5 * FIELD.tileWidth) / 6,
      I = (3 * FIELD.tileHeight) / 6,
      E = FIELD.tileWidth / 3,
      S = (2 * FIELD.tileWidth) / 3,
      f = [c, c, t - c, t - c],
      p = [I + FIELD.tileHeight, i - I, i - I, I + FIELD.tileHeight],
      T = [E, E, E, E],
      R = [d, d, t - d, t - d],
      m = [u, i - u, i - u, u],
      g = [S, S, S, S],
      A = new Path2D(
        Helper.makeRoundedPath(f, p, T, 1, 0, 0) +
          Helper.makeRoundedPath(R, m, g, 1, 0, 0),
      ),
      C = [d + 10, d + 10, t - d - 10, t - d - 10],
      L = [u + 10, i - u - 10, i - u - 10, u + 10],
      D = new Path2D(
        Helper.makeRoundedPath(R, m, g, 1, 0, 0) +
          Helper.makeRoundedPath(C, L, T, 1, 0, 0),
      );
    e.save(),
      (e.globalCompositeOperation = "source-over"),
      (e.globalAlpha = 1),
      (e.fillStyle = "grey"),
      (e.shadowBlur = 4),
      (e.shadowOffsetX = 4),
      (e.shadowOffsetY = 4),
      (e.shadowColor = "#555"),
      e.fill(D, "evenodd"),
      e.restore(),
      e.save(),
      (e.globalCompositeOperation = "source-over"),
      (e.globalAlpha = 1),
      (e.fillStyle = "#30473e"),
      e.fill(A, "evenodd"),
      e.restore(),
      e.save(),
      (e.lineWidth = 1),
      (e.strokeStyle = "black"),
      e.stroke(A),
      e.restore();
    const b = new Path2D(makeOverlayPattern());
    e.save(),
      (e.fillStyle = "#523314"),
      (e.globalAlpha = 0.15),
      e.clip(A, "evenodd"),
      e.scale(1 / OVERLAY.scale, 1 / OVERLAY.scale),
      e.fill(b),
      e.restore();
    var O = 1.2 * FIELD.tileWidth,
      M = FIELD.tileHeight / 2,
      v =
        (FIELD.tileWidth,
        FIELD.menu.pad,
        FIELD.menu.cols,
        FIELD.menu.pad,
        FIELD.tileWidth / 9),
      w = [O, O, t - O, t - O],
      y = [0, (2 * FIELD.menu.topPad) / 3, (2 * FIELD.menu.topPad) / 3, 0],
      N = [v, v, v, v],
      P = new Path2D(Helper.makeRoundedPath(w, y, N, 1, 0, M));
    e.save(),
      (e.shadowBlur = 4),
      (e.shadowOffsetX = FIELD.tileWidth / 24),
      (e.shadowOffsetY = FIELD.tileWidth / 24),
      (e.shadowColor = "#17241f"),
      (e.fillStyle = "#2b2b2b"),
      e.fill(P),
      (e.strokeStyle = "#000"),
      e.stroke(P),
      e.restore(),
      e.save(),
      e.clip(P, "evenodd"),
      Textures.drawFiber(
        e,
        O,
        0,
        t,
        (2 * FIELD.menu.topPad) / 3,
        FIELD.tileWidth / 48,
        0.5,
      ),
      e.restore();
  }
  static createInstruct(e, t, i, a = !1) {
    var r = FIELD.tileWidth / 6,
      s = FIELD.tileHeight / 6,
      o =
        (FIELD.tileWidth,
        FIELD.tileHeight,
        FIELD.tileWidth,
        (2 * FIELD.tileWidth) / 3),
      n = [r, r, t - r, t - r],
      l = [s, i - s, i - s, s],
      h = [o, o, o, o],
      d = new Path2D(Helper.makeRoundedPath(n, l, h, 1, 0, 0));
    e.save(),
      (e.globalCompositeOperation = "source-over"),
      (e.globalAlpha = 1),
      (e.fillStyle = "#30473e"),
      (e.shadowBlur = 4),
      (e.shadowOffsetX = 4),
      (e.shadowOffsetY = 4),
      (e.shadowColor = "#555"),
      e.fill(d, "evenodd"),
      e.restore(),
      e.save(),
      (e.lineWidth = 1),
      (e.strokeStyle = "black"),
      e.stroke(d),
      e.restore();
    const u = new Path2D(makeOverlayPattern());
    if (
      (e.save(),
      (e.fillStyle = "#523314"),
      (e.globalAlpha = 0.15),
      e.clip(d, "evenodd"),
      e.scale(1 / OVERLAY.scale, 1 / OVERLAY.scale),
      e.fill(u),
      e.restore(),
      a)
    ) {
      var c = FIELD.tileWidth;
      e.save(),
        (e.fillStyle = "#30473e"),
        (e.shadowBlur = 4),
        (e.shadowOffsetX = 4),
        (e.shadowOffsetY = 4),
        (e.shadowColor = "#555"),
        (e.textBaseline = "middle"),
        (e.textAlign = "center"),
        e.translate(t / 2, i / 2),
        e.rotate(-Math.PI / 6),
        (e.font = Math.round(1 + t / 7) + "px Courier New"),
        e.strokeText("RESTRICTED", 0, 0),
        e.beginPath(),
        e.stroke(Helper.roundRect(3.5 * -c, -1 * c, 7 * c, 0.2 * c, c / 12)),
        e.stroke(Helper.roundRect(3.5 * -c, 0.8 * c, 7 * c, 0.2 * c, c / 12));
      var I = c,
        E = 2 * c,
        S = [-I / 2, -I / 2, -1.5 * I, 0, 1.5 * I, I / 2, I / 2, -I / 2],
        f = [
          1.5 * c,
          1.5 * c + E,
          1.5 * c + E,
          2.5 * c + E,
          1.5 * c + E,
          1.5 * c + E,
          1.5 * c,
          1.5 * c,
        ],
        p = [0, 0, 0, 0, 0, 0, 0, 0],
        T = new Path2D(Helper.makeRoundedPath(S, f, p, 1, 0, 0));
      e.stroke(T);
      (f = [
        -1.5 * c,
        -1.5 * c - E,
        -1.5 * c - E,
        -2.5 * c - E,
        -1.5 * c - E,
        -1.5 * c - E,
        -1.5 * c,
        -1.5 * c,
      ]),
        (T = new Path2D(Helper.makeRoundedPath(S, f, p, 1, 0, 0)));
      return e.stroke(T), void e.restore();
    }
    var R = 1.2 * FIELD.tileWidth,
      m = FIELD.tileHeight / 2,
      g =
        (FIELD.tileWidth,
        FIELD.menu.pad,
        FIELD.menu.cols,
        FIELD.menu.pad,
        FIELD.tileWidth / 9),
      A = [R, R, t - R, t - R],
      C = [0, (2 * FIELD.menu.topPad) / 3, (2 * FIELD.menu.topPad) / 3, 0],
      L = [g, g, g, g],
      D = new Path2D(Helper.makeRoundedPath(A, C, L, 1, 0, m));
    e.save(),
      (e.shadowBlur = 4),
      (e.shadowOffsetX = FIELD.tileWidth / 24),
      (e.shadowOffsetY = FIELD.tileWidth / 24),
      (e.shadowColor = "#17241f"),
      (e.fillStyle = "#2b2b2b"),
      e.fill(D),
      (e.strokeStyle = "#000"),
      e.stroke(D),
      e.restore(),
      e.save(),
      e.clip(D, "evenodd"),
      Textures.drawFiber(
        e,
        R,
        0,
        t,
        (2 * FIELD.menu.topPad) / 3,
        FIELD.tileWidth / 48,
        0.5,
      ),
      e.restore();
    (R = FIELD.tileWidth / 2),
      (m = (3 * FIELD.tileHeight) / 2),
      (g = FIELD.tileWidth / 3),
      (A = [R, R, t - R, t - R]),
      (C = [
        m,
        FIELD.scoreHeight - FIELD.tileWidth / 2,
        FIELD.scoreHeight - FIELD.tileWidth / 2,
        m,
      ]),
      (L = [g, g, g, g]),
      (D = new Path2D(Helper.makeRoundedPath(A, C, L, 1, 0, 0)));
    e.save(),
      (e.shadowBlur = 4),
      (e.shadowOffsetX = FIELD.tileWidth / 24),
      (e.shadowOffsetY = FIELD.tileWidth / 24),
      (e.shadowColor = "#17241f"),
      (e.fillStyle = "#2b2b2b"),
      e.fill(D),
      (e.strokeStyle = "#000"),
      e.stroke(D),
      e.restore(),
      e.save(),
      e.clip(D, "evenodd"),
      Textures.drawFiber(
        e,
        R,
        m,
        t,
        FIELD.scoreHeight - FIELD.tileWidth / 2,
        FIELD.tileWidth / 48,
        0.5,
      ),
      e.restore();
  }
  static createAnalysis(e, t, i) {
    var a = FIELD.tileWidth / 6,
      r = FIELD.tileHeight / 6,
      s = (3.5 * FIELD.tileWidth) / 6,
      o = (3.5 * FIELD.tileHeight) / 6,
      n = FIELD.tileWidth / 3,
      l = (2 * FIELD.tileWidth) / 3,
      h =
        ((a = FIELD.tileWidth / 6),
        (r = FIELD.tileHeight / 6),
        (s = (3.5 * FIELD.tileWidth) / 6),
        (o = (3.5 * FIELD.tileHeight) / 6),
        (n = FIELD.tileWidth / 3),
        (l = (2 * FIELD.tileWidth) / 3),
        [0, 0, t - s, t - s, 0, 0, t - a, t - a]),
      d = [r, o, o, i - o, i - o, i - r, i - r, r],
      u = [0, 0, n, n, 0, 0, l, l],
      c = new Path2D(Helper.makeRoundedPath(h, d, u, 1, 0, 0));
    e.save(),
      (e.globalCompositeOperation = "source-over"),
      (e.globalAlpha = 1),
      (e.fillStyle = "#426959"),
      (e.shadowColor = "#777"),
      e.fill(c),
      e.restore(),
      e.save(),
      (e.lineWidth = 1),
      (e.strokeStyle = "black"),
      e.stroke(c),
      e.restore();
    const I = new Path2D(makeOverlayPattern());
    e.save(),
      (e.fillStyle = "#523314"),
      (e.globalAlpha = 0.15),
      e.clip(c, "evenodd"),
      e.scale(1 / OVERLAY.scale, 1 / OVERLAY.scale),
      e.fill(I),
      e.translate(0, 4040),
      e.fill(I),
      e.translate(4040, 0),
      e.fill(I),
      e.translate(0, -4040),
      e.fill(I),
      e.restore();
  }
  static createInfo(e) {
    var t = FIELD.tileWidth,
      i = FIELD.tileHeight,
      a =
        (FIELD.cols,
        FIELD.rows,
        OVERLAY.border,
        [-t / 2, -t / 2, MENU.w0 + t / 2, MENU.w0 + t / 2]),
      r = [
        FIELD.topMargin - OVERLAY.margin,
        MENU.y0 - 2 * FIELD.tileHeight,
        MENU.y0 - 2 * FIELD.tileHeight,
        FIELD.topMargin - OVERLAY.margin,
      ],
      s = [a[0] + t / 2, a[1] + t / 2, a[2] - t / 2, a[3] - t / 2],
      o = [r[0] + i / 2, r[1] - i / 2, r[2] - i / 2, r[3] + i / 2],
      n = [30, 30, 30, 30],
      l = [15, 15, 15, 15],
      h = new Path2D(
        Helper.makeRoundedPath(a, r, n, 1, MENU.x0, 0) +
          Helper.makeRoundedPath(s, o, l, 1, MENU.x0, 0),
      ),
      d = e.createLinearGradient(MENU.x0, MENU.y0, MENU.x0 + MENU.w0, 0);
    d.addColorStop(1, "#4e7566"),
      d.addColorStop(0, "#1c3630"),
      e.save(),
      (e.globalAlpha = 1),
      (e.fillStyle = d),
      e.fill(h, "evenodd"),
      e.restore(),
      e.save(),
      (e.lineWidth = 1),
      (e.strokeStyle = "black"),
      e.stroke(h),
      e.restore();
    const u = new Path2D(makeOverlayPattern());
    e.save(),
      (e.fillStyle = "#523314"),
      (e.globalAlpha = 0.2),
      e.clip(h, "evenodd"),
      e.scale(1 / OVERLAY.scale, 1 / OVERLAY.scale),
      e.translate(3e3, 0),
      e.fill(u),
      e.restore();
  }
  static createScenarioNew(e, t, i) {
    e.save(),
      (e.fillStyle = "antiquewhite"),
      (e.font = (1.2 / 3) * FIELD.tileWidth + "px Courier New"),
      (e.textBaseline = "middle"),
      (e.textAlign = "center"),
      (e.shadowBlur = 2),
      (e.shadowOffsetX = 2),
      (e.shadowOffsetY = 2),
      (e.shadowColor = "black"),
      e.fillText(SCENARIO.title, t / 2, (5 * FIELD.tileHeight) / 6);
    FIELD.tileWidth;
    e.textAlign = "left";
    for (
      var a = (12 * FIELD.tileHeight) / 6, r = 0;
      r < SCENARIO.info.length;
      r++
    ) {
      for (
        var s = Helper.parseText(e, SCENARIO.info[r], t - 2 * SCENARIO.xPad),
          o = 0;
        o < s.length;
        o++
      )
        e.fillText(s[o], SCENARIO.xPad, a),
          o < s.length - 1 && (a += SCENARIO.yPad2);
      a += SCENARIO.yPad;
    }
    e.restore();
  }
}
