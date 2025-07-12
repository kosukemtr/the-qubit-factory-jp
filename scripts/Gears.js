class Gears {
  static drawOptionsMenu(e) {
    var t = FIELD.tileWidth;
    FIELD.tileHeight;
    e.save(),
      (e.fillStyle = "antiquewhite"),
      (e.textBaseline = "middle"),
      (e.textAlign = "center"),
      // === Bullet markers for check‑box rows (dynamic positions) ===
      // Base X where the checkbox row labels start
      // This matches the X used for the checkbox labels below
      (function() {
        const baseLabelX = 2.2 * t + t / 4;
        // Use the label font to measure text widths
        e.font = "normal " + 0.2 * FIELD.tileWidth + "px 'Courier New', 'Noto Sans Mono CJK JP'";

        // Use a smaller offset (20% of space width) so the dot doesn't overlap with the closing bracket.
        const spaceW = e.measureText(" ").width;
        const bulletOffset = - spaceW * 0.2; // fine‑tuned empirically

        // --- Compute bullet X positions (dot sits slightly left of bracket center) ---
        let autoBulletX   = baseLabelX + e.measureText("自動 [ ").width + bulletOffset;
        let manualBulletX = baseLabelX + e.measureText("自動 [ ]  手動 [ ").width + bulletOffset;
        let hiBulletX  = baseLabelX + e.measureText("高[ ").width + bulletOffset;
        let midBulletX = baseLabelX + e.measureText("高[ ]  中[ ").width + bulletOffset;
        let lowBulletX = baseLabelX + e.measureText("高[ ]  中[ ] 低[ ").width + bulletOffset;
        let onBulletX  = baseLabelX + e.measureText("オン   [ ").width + bulletOffset;
        let offBulletX = baseLabelX + e.measureText("オン   [ ]  オフ    [ ").width + bulletOffset;

        // Switch to large font for the bullet itself
        e.font = 0.4 * FIELD.tileWidth + "px 'Courier New', 'Noto Sans Mono CJK JP'";
        // Auto‑resize row
        OPTS.autoResize
          ? e.fillText("•", autoBulletX, (1.5 * t) / 4)
          : e.fillText("•", manualBulletX, (1.5 * t) / 4);
        // Graphics quality row (hi / med / low)
        OPTS.fancyGraphics && OPTS.fancyFilters
          ? e.fillText("•", hiBulletX, (1.5 * t) / 4 + t / 3 + t / 2)
          : OPTS.fancyGraphics
            ? e.fillText("•", midBulletX, (1.5 * t) / 4 + t / 3 + t / 2)
            : e.fillText("•", lowBulletX, (1.5 * t) / 4 + t / 3 + t / 2);
        // Level‑briefing row (on / off)
        FIELD.disableBriefs
          ? e.fillText("•", offBulletX, (1.5 * t) / 4 + t / 3 + t)
          : e.fillText("•", onBulletX, (1.5 * t) / 4 + t / 3 + t);
      })(),
      e.restore(),
      e.save(),
      (e.lineWidth = FIELD.tileWidth / 24),
      (e.strokeStyle = "antiquewhite"),
      e.moveTo(1.8 * t, (2 * t) / 3 + (3 * t) / 2),
      e.lineTo(4.2 * t, (2 * t) / 3 + (3 * t) / 2),
      e.moveTo(1.8 * t, (3 * t) / 3 + (3 * t) / 2),
      e.lineTo(4.2 * t, (3 * t) / 3 + (3 * t) / 2),
      e.stroke(),
      (e.font = "normal " + 0.2 * FIELD.tileWidth + "px 'Courier New', 'Noto Sans Mono CJK JP'"),
      (e.fillStyle = "antiquewhite"),
      (e.textAlign = "right"),
      (e.textBaseline = "middle"),
      e.fillText("0  ", 1.8 * t, (2 * t) / 3 + (3 * t) / 2),
      e.fillText("0  ", 1.8 * t, (3 * t) / 3 + (3 * t) / 2),
      (e.textAlign = "left"),
      e.fillText(" 100", 4.2 * t, (2 * t) / 3 + (3 * t) / 2),
      e.fillText(" 100", 4.2 * t, (3 * t) / 3 + (3 * t) / 2);
    var i = 1.8;
    if (OPTS.musicOn) i = 1.8 + (4.2 - 1.8) * OPTS.music;
    var a = 1.8;
    if (OPTS.sfxOn) a = 1.8 + (4.2 - 1.8) * OPTS.sfx;
    (e.textBaseline = "middle"),
      (e.textAlign = "center"),
      (e.font = "normal " + 0.8 * FIELD.tileWidth + "px 'Courier New', 'Noto Sans Mono CJK JP'"),
      e.fillText("•", i * t, (2.1 * t) / 3 + (3 * t) / 2),
      e.fillText("•", a * t, (3.1 * t) / 3 + (3 * t) / 2),
      e.restore(),
      e.save();
    var r = !1;
    if ("optionbut" === STATE.under.type && 0 === STATE.under.i0) r = !0;
    (e.lineWidth = t / 48), (e.strokeStyle = "antiquewhite");
    // Shift hitbox 0.1*t left to better match visual position
    var s = [1.2 * t, 1.2 * t, 3.6 * t, 3.6 * t],
      o = [(8.4 * t) / 3, (9.6 * t) / 3, (9.6 * t) / 3, (8.4 * t) / 3],
      n = [t / 6, t / 6, t / 6, t / 6],
      l = new Path2D(Helper.makeRoundedPath(s, o, n, 1, 0, 0));
    r && ((e.fillStyle = "#555"), e.fill(l)),
      e.stroke(l),
      e.restore(),
      e.save();
    r = !1;
    if ("optionbut" === STATE.under.type && 1 === STATE.under.i0) r = !0;
    (e.lineWidth = t / 48), (e.strokeStyle = "antiquewhite");
    (s = [1.2 * t, 1.2 * t, 3.6 * t, 3.6 * t]),
      (o = [(9.9 * t) / 3, (11.1 * t) / 3, (11.1 * t) / 3, (9.9 * t) / 3]),
      (n = [t / 6, t / 6, t / 6, t / 6]),
      (l = new Path2D(Helper.makeRoundedPath(s, o, n, 1, 0, 0)));
    r && ((e.fillStyle = "#555"), e.fill(l)),
      e.stroke(l),
      e.restore(),
      e.save(),
      (e.textBaseline = "top"),
      (e.fillStyle = "antiquewhite"),
      (e.font = 0.2 * FIELD.tileWidth + "px 'Courier New', 'Noto Sans Mono CJK JP'");
    var h = [
        0,
        t / 3,
        t / 3 + t / 2,
        t / 3 + (2 * t) / 2,
        t / 3 + (3 * t) / 2,
        (2 * t) / 3 + (3 * t) / 2,
        (2 * t) / 3 + (4 * t) / 2,
        (2 * t) / 3 + (5 * t) / 2,
      ],
      d = [
        "ウィンドウサイズ変更：",
        "[`<` と `>` キーで手動リサイズ]",
        "グラフィック：",
        "レベル説明：",
        "音楽：",
        "効果音：",
        "セーブデータをリセット",
        "完了",
      ];
    e.font = "normal " + 0.2 * FIELD.tileWidth + "px 'Courier New', 'Noto Sans Mono CJK JP'";
    for (var u = 0; u < d.length; u++)
      (e.fillStyle =
        1 === u || 6 === u || 7 === u ? "antiquewhite" : "cornflowerblue"),
        u >= 6
          ? ((e.textAlign = "center"), e.fillText(d[u], 2.5 * t, h[u] + t / 4))
          : ((e.textAlign = "left"), e.fillText(d[u], t / 4, h[u] + t / 4));
    (e.fillStyle = "antiquewhite"),
      (e.font = "normal " + 0.2 * FIELD.tileWidth + "px 'Courier New', 'Noto Sans Mono CJK JP'");
    d = [
      "自動 [ ]  手動 [ ]",
      "",
      "高[ ]  中[ ] 低[ ]",
      "オン   [ ]  オフ    [ ]",
    ];
    e.textAlign = "left";
    // Position checkbox labels to the right of the menu text
    const checkboxLabelX = 2.2 * t + t / 4;
    for (u = 0; u < d.length; u++)
      e.fillText(d[u], checkboxLabelX, h[u] + t / 4);
    e.restore();
  }
  static drawOptions(e) {
    var t = FIELD.tileWidth,
      i = FIELD.tileHeight,
      a = t * (FIELD.cols - 5.25),
      r = i * (FIELD.rows / 2),
      s =
        (FIELD.tileWidth,
        FIELD.tileHeight,
        FIELD.tileWidth,
        1.4 * FIELD.tileHeight),
      o = 0.4 * FIELD.tileWidth,
      n = r - s;
    if (FIELD.isCleanSlate) {
      h = ["開始", "オプション", "情報"];
      e.setTransform(1, 0, 0, 1, 0, 0),
        (e.textBaseline = "middle"),
        (e.textAlign = "center"),
        (e.fillStyle = "antiquewhite");
      for (d = 0; d < 3; d++) {
        if ("titlebutton" === STATE.under.type && STATE.under.i0 === d) {
          u = 0.3 + 0.05 * Math.cos(4 * TIMER.blinkRatio * Math.PI);
          e.font = u * FIELD.tileWidth + "px 'Courier New', 'Noto Sans Mono CJK JP'";
        } else e.font = 0.3 * FIELD.tileWidth + "px 'Courier New', 'Noto Sans Mono CJK JP'";
        e.fillText(h[d], a / 2, n + d * o - 0.1 * FIELD.tileWidth);
      }
    } else {
      var l = [-0.15 * t, 0.1 * t, 0.1 * t],
        h = ["続行", "オプション", "情報"];
      e.setTransform(1, 0, 0, 1, 0, 0),
        (e.textBaseline = "middle"),
        (e.textAlign = "center"),
        (e.fillStyle = "antiquewhite");
      for (var d = 0; d < 3; d++) {
        if ("titlebutton" === STATE.under.type && STATE.under.i0 === d) {
          var u = 0.3 + 0.03 * Math.cos(4 * TIMER.blinkRatio * Math.PI);
          e.font = u * FIELD.tileWidth + "px 'Courier New', 'Noto Sans Mono CJK JP'";
        } else e.font = 0.3 * FIELD.tileWidth + "px 'Courier New', 'Noto Sans Mono CJK JP'";
        e.fillText(h[d], a / 2, n + d * o + l[d]);
      }
      (e.fillStyle = "#ff4551"),
        (e.font = Math.round(0.18 * FIELD.tileWidth) + "px 'Courier New', 'Noto Sans Mono CJK JP'"),
        e.fillText("社員#" + PERSIST0.generic.nameTag, a / 2, n + 0.13 * t);
    }
  }
  static drawPath(e, t, i, a, r, s, o = 32, n = 32) {
    e.setTransform(1, 0, 0, 1, 0, 0),
      e.scale(r / o, s / n),
      e.translate((o * i) / r, (n * a) / s);
    for (var l = 0; l < t.length; l++)
      t[l].fill && ((e.fillStyle = t[l].fill), e.fill(t[l].path)),
        t[l].stroke &&
          ((e.lineCap = t[l].lineCap),
          (e.lineWidth = t[l].lineWidth),
          (e.strokeStyle = t[l].stroke),
          e.stroke(t[l].path));
  }
  static findPath(e) {
    var t = 6,
      i = FIELD.tileWidth,
      a = 2 * i;
    if (OPTS.fancyGears) var r = GRADS.gears;
    else r = "#222";
    var s = PathsX.gear(e, (2 * Math.PI * TIMER.popRatio) / t, t, r);
    Gears.drawPath(e, s, -0.7 * i, 0.5 * i, a, a),
      Gears.drawPath(e, s, -0.7 * i, 6.5 * i, a, -a),
      Gears.drawPath(e, s, 14.5 * i, 0.5 * i, -a, a),
      Gears.drawPath(e, s, 14.5 * i, 6.5 * i, -a, -a);
    s = PathsX.gear(e, -Math.PI / 2 - (2 * Math.PI * TIMER.popRatio) / t, t, r);
    Gears.drawPath(e, s, 0.5 * i, -0.7 * i, a, a),
      Gears.drawPath(e, s, 0.5 * i, 7.7 * i, a, -a),
      Gears.drawPath(e, s, 13.3 * i, -0.7 * i, -a, a),
      Gears.drawPath(e, s, 13.3 * i, 7.7 * i, -a, -a);
  }
}
