class SelectLevel {
  constructor() {
    (this._plaqueList = []),
      (this._tokenList = []),
      (this._hovered = -1),
      (this._selected = -1),
      (this._scale = 1);
  }
  get scale() {
    return this._scale;
  }
  get tokenList() {
    return this._tokenList;
  }
  get plaqueList() {
    return this._plaqueList;
  }
  get hovered() {
    return this._hovered;
  }
  get selected() {
    return this._selected;
  }
  set plaqueList(e) {
    this._plaqueList = e;
  }
  set tokenList(e) {
    this._tokenList = e;
  }
  set hovered(e) {
    this._hovered = e;
  }
  set selected(e) {
    this._selected = e;
  }
  addToken(e) {
    this.tokenList.push(e);
  }
  addPlaque(e) {
    this.plaqueList.push(e);
  }
  removeHover() {
    for (var e = this.tokenList.length, t = 0; t < e; t++)
      this.tokenList[t].isHover = !1;
    var i = this.plaqueList.length;
    for (t = 0; t < i; t++) this.plaqueList[t].isHover = !1;
  }
  unlockCheck() {
    for (
      var e = 0,
        t = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        a = 0,
        r = 0,
        s = 0,
        o = 0,
        n = 0;
      n < LEVELS.groups.length;
      n++
    )
      for (var l = 0; l < LEVELS.groups[n]; l++) {
        var h = !1;
        null != PERSIST0[LEVELS.names[e]].complete &&
          ((h = PERSIST0[LEVELS.names[e]].complete),
          h && (LEVELS.hidden[e] ? (s += 1) : ((t[n] += 1), (a += 1))));
        var d = !1;
        null != PERSIST0[LEVELS.names[e]].complete &&
          ((d = PERSIST0[LEVELS.names[e]].star),
          d && (LEVELS.hidden[e] ? (o += 1) : ((i[n] += 1), (r += 1)))),
          (e += 1);
      }
    (FIELD.totStar = r),
      (FIELD.totComplete = a),
      (FIELD.hiddenStar = o),
      (FIELD.hiddenComplete = s);
    var u = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    if (
      ((u[0] = FIELD.developerMode),
      (u[1] = !0),
      (u[2] = t[1] >= 6),
      (u[3] = t[2] >= 5),
      (u[4] = t[3] >= 5),
      (u[5] = t[2] >= 5),
      (u[6] = t[5] >= 6),
      (u[7] = t[6] >= 5),
      (u[8] = t[4] >= 4 && t[7] >= 4),
      (u[9] = !1),
      (u[10] = t[9] >= 5),
      (LEVELS.unlocked = [...u]),
      t[2] + t[3] + t[4] ===
      LEVELS.groups[2] + LEVELS.groups[3] + LEVELS.groups[4]
        ? (FIELD.isActiveAward[0] = 1)
        : (FIELD.isActiveAward[0] = 0),
      i[2] + i[3] + i[4] ===
      LEVELS.groups[2] + LEVELS.groups[3] + LEVELS.groups[4]
        ? (FIELD.isActiveAward[1] = 1)
        : (FIELD.isActiveAward[1] = 0),
      t[5] + t[6] + t[7] ===
      LEVELS.groups[5] + LEVELS.groups[6] + LEVELS.groups[7]
        ? (FIELD.isActiveAward[2] = 1)
        : (FIELD.isActiveAward[2] = 0),
      i[5] + i[6] + i[7] ===
      LEVELS.groups[5] + LEVELS.groups[6] + LEVELS.groups[7]
        ? (FIELD.isActiveAward[3] = 1)
        : (FIELD.isActiveAward[3] = 0),
      t[8] + t[9] === LEVELS.groups[8] + LEVELS.groups[9]
        ? (FIELD.isActiveAward[4] = 1)
        : (FIELD.isActiveAward[4] = 0),
      i[8] + i[9] === LEVELS.groups[8] + LEVELS.groups[9]
        ? (FIELD.isActiveAward[5] = 1)
        : (FIELD.isActiveAward[5] = 0),
      s === FIELD.numBonusLevels
        ? (FIELD.isActiveAward[6] = 1)
        : (FIELD.isActiveAward[6] = 0),
      o === FIELD.numBonusLevels
        ? (FIELD.isActiveAward[7] = 1)
        : (FIELD.isActiveAward[7] = 0),
      FIELD.forceOpen)
    ) {
      for (n = 0; n < LEVELS.names.length; n++)
        PERSIST0[LEVELS.names[n]].available = !0;
      return u;
    }
    for (e = 0, n = 0; n < LEVELS.groups.length; n++)
      for (l = 0; l < LEVELS.groups[n]; l++)
        (PERSIST0[LEVELS.names[e]].available =
          1 === n
            ? 0 === l ||
              PERSIST0[LEVELS.names[e - 1]].complete ||
              FIELD.forceOpenRing[1]
            : 9 === n
              ? PERSIST0[LEVELS.names[e - 6]].complete ||
                FIELD.forceOpenRing[9] ||
                PERSIST0[LEVELS.names[e]].complete
              : (0 === n && 2 == l) ||
                (0 === n && 3 == l
                  ? u[7] || FIELD.forceOpenRing[7]
                  : 0 === n && 4 == l
                    ? u[2] || FIELD.forceOpenRing[8]
                    : 0 === n && 5 == l
                      ? u[3] || FIELD.forceOpenRing[3]
                      : 0 === n && 6 == l
                        ? u[4] || FIELD.forceOpenRing[4]
                        : u[n] ||
                          FIELD.forceOpenRing[n] ||
                          PERSIST0[LEVELS.names[e]].complete)),
          (e += 1);
    return u;
  }
  initialize() {
    FIELD.tileWidth;
    var e = new Array(LEVELS.numTotal).fill(-1),
      t = new Array(LEVELS.numTotal).fill(13);
    (e[0] = 1),
      (t[0] = 12),
      (e[1] = 1),
      (t[1] = 13),
      (e[2] = 2.5),
      (t[2] = 12.5),
      (e[3] = 18.5),
      (t[3] = 6),
      (e[4] = 13),
      (t[4] = 4.7),
      (e[5] = 2.7),
      (t[5] = 9),
      (e[6] = 7),
      (t[6] = 10.5);
    for (
      var i = [0, 2.5, 7, 2.7, 7, 11.5, 16.5, 18.5, 13, 13],
        a = [0, 3.3, 5.5, 9, 10.5, 11.2, 11.2, 6, 4.7, 4.7],
        r = [0, 1.2, 1.4, 1.4, 1.3, 1.6, 1.6, 1.4, 1.3, 2.7],
        s = 3 + FIELD.numBonusLevels,
        o = 1;
      o < LEVELS.groups.length;
      o++
    ) {
      for (
        var n = (2 * Math.PI) / LEVELS.groups[o], l = 0;
        l < LEVELS.groups[o];
        l++
      )
        (e[s + l] = i[o] + r[o] * Math.sin(l * n - Math.PI / LEVELS.groups[o])),
          (t[s + l] =
            a[o] - r[o] * Math.cos(l * n - Math.PI / LEVELS.groups[o]));
      s += LEVELS.groups[o];
    }
    var h = [4, 0, 1, 1, 1, 2, 2, 2, 3, 3];
    this.tokenList = [];
    for (s = 0, o = 0; o < LEVELS.groups.length; o++)
      for (l = 0; l < LEVELS.groups[o]; l++) {
        var d = !1,
          u = !1,
          c = !1;
        null != PERSIST0[LEVELS.names[s]].star &&
          (d = PERSIST0[LEVELS.names[s]].star),
          null != PERSIST0[LEVELS.names[s]].complete &&
            (u = PERSIST0[LEVELS.names[s]].complete),
          null != PERSIST0[LEVELS.names[s]].available &&
            (c = PERSIST0[LEVELS.names[s]].available);
        var I = PathsC.tokenBase(
            LEVELS.tags[s],
            d,
            u,
            c,
            h[o],
            LEVELS.hidden[s],
          ),
          E = new Token(
            LEVELS.tags[s],
            s,
            LEVELS.names[s],
            e[s],
            t[s],
            I,
            c,
            u,
            d,
            LEVELS.hidden[s],
          );
        this.addToken(E), (s += 1);
      }
    var S = 3,
      f = 0.6,
      p = [
        " ",
        "チュートリアル",
        "クラシック I",
        "クラシック II",
        "クラシック III",
        "量子 I",
        "量子 II",
        "量子 III",
        " ",
        "ハイブリッド",
      ];
    this.plaqueList = [];
    for (o = 0; o < p.length; o++) {
      var T = 0.5 + i[o] - S / 2,
        R = a[o] - r[o] - 0.6;
      if (8 === o || 0 === o)
        var m = new SelectPlaque(p[o], "plaque" + String(o), T, R, 0, 0, p[o]);
      else m = new SelectPlaque(p[o], "plaque" + String(o), T, R, S, f, p[o]);
      this.addPlaque(m);
    }
  }
  drawText(e) {
    e.clear();
    var t = e.ctx,
      i = Math.round(FIELD.selBoxW - 1.3 * FIELD.tileWidth);
    t.save(),
      (t.textAlign = "center"),
      (t.font = (1.4 * FIELD.tileWidth) / 3 + "px Courier New"),
      (t.fillStyle = "antiquewhite"),
      t.fillText("進捗", i / 2, 9 * FIELD.tileWidth),
      t.restore();
    var a = 9.6 * FIELD.tileWidth;
    t.save(),
      (t.lineWidth = FIELD.tileWidth / 20),
      (t.fillStyle = "antiquewhite"),
      (t.strokeStyle = "antiquewhite"),
      t.beginPath(),
      t.moveTo(i / 12, a),
      t.lineTo(i / 2, a - FIELD.tileWidth / 24),
      t.lineTo(i - i / 12, a),
      t.lineTo(i / 2, a + FIELD.tileWidth / 24),
      t.closePath(),
      t.fill(),
      t.stroke(),
      t.restore();
    var r = [
        "工場作業員",
        "ジュニア工場アシスタント",
        "シニア工場アシスタント",
        "ジュニア工場エンジニア",
        "シニア工場エンジニア",
        "ジュニア量子エンジニア",
        "シニア量子エンジニア",
        "HD量子技師",
        "The Flammia",
        "The Poulin",
        "The Preskill",
      ],
      s = Math.ceil(
        (100 * (FIELD.totComplete + FIELD.totStar)) / (2 * LEVELS.numStandard),
      );
    if (
      (t.save(),
      (t.textAlign = "center"),
      (t.fillStyle = "antiquewhite"),
      (t.font = (1.2 * FIELD.tileWidth) / 3 + "px Courier New"),
      FIELD.hiddenComplete > 0)
    ) {
      t.textAlign = "left";
      var o = "完了: " + FIELD.totComplete,
        n = t.measureText(o).width,
        l = t.measureText(o + " / " + LEVELS.numStandard).width;
      t.fillText(
        o + " / " + LEVELS.numStandard,
        i / 2 - l / 2,
        10.4 * FIELD.tileWidth,
      ),
        (t.fillStyle = "goldenrod"),
        t.fillText(
          "+" + FIELD.hiddenComplete,
          i / 2 - l / 2 + n,
          10.4 * FIELD.tileWidth,
        ),
        (t.fillStyle = "antiquewhite"),
        (t.textAlign = "center");
    } else
      t.fillText(
        "完了: " + FIELD.totComplete + " / " + LEVELS.numStandard,
        i / 2,
        10.4 * FIELD.tileWidth,
      );
    if (FIELD.hiddenStar > 0) {
      t.textAlign = "left";
      (o = "スター獲得: " + FIELD.totStar),
        (n = t.measureText(o).width),
        (l = t.measureText(o + " / " + LEVELS.numStandard).width);
      t.fillText(
        o + " / " + LEVELS.numStandard,
        i / 2 - l / 2,
        11 * FIELD.tileWidth,
      ),
        (t.fillStyle = "goldenrod"),
        t.fillText(
          "+" + FIELD.hiddenStar,
          i / 2 - l / 2 + n,
          11 * FIELD.tileWidth,
        ),
        (t.fillStyle = "antiquewhite"),
        (t.textAlign = "center");
    } else
      t.fillText(
        "スター獲得: " + FIELD.totStar + " / " + LEVELS.numStandard,
        i / 2,
        11 * FIELD.tileWidth,
      );
    if (
      ((t.font = (1.2 * FIELD.tileWidth) / 3 + "px Courier New"),
      t.fillText(
        "ランク: " + r[Math.floor(s / 10)],
        i / 2,
        12.2 * FIELD.tileWidth,
      ),
      t.restore(),
      t.save(),
      t.beginPath(),
      (t.strokeStyle = "antiquewhite"),
      (t.lineWidth = FIELD.tileWidth / 32),
      t.stroke(
        Helper.roundRect(
          i / 32,
          11.6 * FIELD.tileWidth,
          i - i / 16,
          0.95 * FIELD.tileWidth,
          FIELD.tileWidth / 4,
        ),
      ),
      t.restore(),
      "token" === STATE.under.type ||
        "selectPlaque" === STATE.under.type ||
        "selectButton" === STATE.under.type ||
        "selectAward" === STATE.under.type)
    ) {
      if ("token" === STATE.under.type)
        var h = STATE.under.k0,
          d = DESCRIPTIONS[h.link];
      else if ("selectPlaque" === STATE.under.type) {
        var u = STATE.under.k0;
        d = DESCRIPTIONS[u.link];
      } else if ("selectButton" === STATE.under.type)
        STATE.under.i0, (d = ["会話を繰り返す"]);
      else if ("selectAward" === STATE.under.type) {
        d = JSON.parse(JSON.stringify(DESCRIPTIONS["award" + STATE.under.k0]));
        FIELD.isActiveAward[STATE.under.k0]
          ? (d[0] = "賞")
          : ((d[0] = "賞 (ロック中)"),
            (6 !== STATE.under.k0 && 7 !== STATE.under.k0) ||
              FIELD.isActiveAward[STATE.under.k0] ||
              (d[1] = "  ??? "));
      }
      t.save(),
        (t.textBaseline = "top"),
        (t.fillStyle = "antiquewhite"),
        (t.shadowBlur = 2),
        (t.shadowOffsetX = 2),
        (t.shadowOffsetY = 2);
      a = 0;
      (t.textAlign = "center"),
        (t.font = (1.4 * FIELD.tileWidth) / 3 + "px Courier New");
      var c = Helper.parseText(t, d[0], FIELD.selBoxW - 1.3 * FIELD.tileWidth);
      t.fillText(c[0], (FIELD.selBoxW - 1.3 * FIELD.tileWidth) / 2, a),
        (a += SCENARIO.yPad);
      i = FIELD.selBoxW - 1.3 * FIELD.tileWidth;
      t.save(),
        (t.lineWidth = FIELD.tileWidth / 20),
        (t.fillStyle = "antiquewhite"),
        (t.strokeStyle = "antiquewhite"),
        t.beginPath(),
        t.moveTo(i / 12, a),
        t.lineTo(i / 2, a - FIELD.tileWidth / 24),
        t.lineTo(i - i / 12, a),
        t.lineTo(i / 2, a + FIELD.tileWidth / 24),
        t.closePath(),
        t.fill(),
        t.stroke(),
        t.restore(),
        (a += SCENARIO.yPad2),
        (t.textAlign = "left"),
        (t.font = (1.2 * FIELD.tileWidth) / 3 + "px Courier New");
      for (var I = 1; I < d.length; I++) {
        c = Helper.parseText(t, d[I], FIELD.selBoxW - 1.3 * FIELD.tileWidth);
        for (var E = 0; E < c.length; E++)
          t.fillText(c[E], 0, a), E < c.length - 1 && (a += SCENARIO.yPad2);
        a += SCENARIO.yPad;
      }
      t.restore();
    }
    if ("selectPlaque" === STATE.under.type) {
      (u = STATE.under.k0), (d = DESCRIPTIONS[u.link + "U"]);
      if (d) {
        if (
          (t.save(),
          (t.textBaseline = "top"),
          (t.fillStyle = "antiquewhite"),
          (t.strokeStyle = "antiquewhite"),
          (t.shadowBlur = 2),
          (t.shadowOffsetX = 2),
          (t.shadowOffsetY = 2),
          "Hybrid" === u._name)
        )
          var S = 0.4 * FIELD.tileWidth;
        else S = 0;
        i = FIELD.selBoxW - 1.3 * FIELD.tileWidth;
        (t.textAlign = "center"),
          (t.font = (1.4 * FIELD.tileWidth) / 3 + "px Courier New"),
          t.fillText(d[0], i / 2, 6 * FIELD.tileWidth - S),
          (t.lineWidth = FIELD.tileWidth / 32),
          (t.textAlign = "center"),
          (t.font = (1.2 * FIELD.tileWidth) / 3 + "px Courier New"),
          t.fillText(d[1], i / 2, 6.7 * FIELD.tileWidth - S),
          "Hybrid" === u._name
            ? (t.fillText(d[2], i / 2, 7.2 * FIELD.tileWidth - S),
              t.beginPath(),
              t.stroke(
                Helper.roundRect(
                  i / 32,
                  5.8 * FIELD.tileWidth - S,
                  i - i / 16,
                  2.1 * FIELD.tileWidth,
                  FIELD.tileWidth / 4,
                ),
              ))
            : (t.beginPath(),
              t.stroke(
                Helper.roundRect(
                  i / 32,
                  5.8 * FIELD.tileWidth,
                  i - i / 16,
                  1.6 * FIELD.tileWidth,
                  FIELD.tileWidth / 4,
                ),
              )),
          t.restore();
      }
    }
  }
  draw(e) {
    e.clear();
    for (
      var t = e.ctx, i = FIELD.tileWidth, a = -1, r = 0;
      r < this.plaqueList.length;
      r++
    )
      if (8 !== r && this.plaqueList[r].isHover) {
        a = r;
        break;
      }
    if (a >= 0) {
      var s = this.plaqueList[a],
        o = [i / 6, i / 6, i / 6, i / 6],
        n = i * s.i0,
        l = i * s.j0,
        h = i * s.w0,
        d = i * s.h0,
        u = [n, n, n + h, n + h],
        c = [l, l + d, l + d, l],
        I = new Path2D(Helper.makeRoundedPath(u, c, o, 1, 0, 0));
      t.save(),
        (t.lineWidth = i / 16),
        (t.strokeStyle = "darkred"),
        t.beginPath(),
        t.stroke(I),
        t.restore();
    }
    for (
      var E = 0.9 * (1 + 0.2 * Math.cos(12 * Math.PI * TIMER.qubitGlowRatio)),
        S = 0.4 * Math.sin(2 * Math.PI * TIMER.blinkRatio),
        f = 0;
      f < this.tokenList.length;
      f++
    ) {
      var p = this.tokenList[f],
        T =
          ((n = p.i0 * this.scale * FIELD.tileWidth),
          (l = p.j0 * this.scale * FIELD.tileWidth),
          PathsC.token(
            p.name,
            p._isStar,
            p._isComplete,
            p._isAvailable,
            E,
            S,
            p._isHidden,
          ));
      if (
        (T.draw(
          t,
          n,
          l,
          this.scale * FIELD.tileWidth,
          this.scale * FIELD.tileHeight,
          1,
          !0,
        ),
        p.isHover)
      ) {
        var R = Paths.qubitHalo(t, 0, !0, -1),
          m = 1.3 * (1 + 0.1 * Math.cos(8 * Math.PI * TIMER.qubitGlowRatio));
        R.draw(
          t,
          n - ((m - 1) / 2) * FIELD.tileWidth,
          l - ((m - 1) / 2) * FIELD.tileHeight,
          m * SELECTOR.scale * FIELD.tileWidth,
          m * SELECTOR.scale * FIELD.tileHeight,
        );
      }
    }
    this.drawConceptArrow(e);
  }
  drawBase(e) {
    e.clear();
    var t = e.ctx,
      i = FIELD.tileWidth,
      a = [2.5, 7, 2.7, 7, 11.5, 16.5, 18.5, 13, 13],
      r = [3.3, 5.5, 9, 10.5, 11.2, 11.2, 6, 4.7, 4.7],
      s = [1.2, 1.4, 1.4, 1.3, 1.6, 1.6, 1.4, 1.3, 2.7];
    t.save(),
      (t.strokeStyle = "grey"),
      (t.lineWidth = 2),
      t.setLineDash([5, 5]);
    for (var o = 0; o < a.length; o++)
      t.beginPath(),
        7 !== o &&
          t.arc(
            (a[o] + 0.5) * i,
            (r[o] + 0.5) * i,
            (s[o] + 0.6) * i,
            0,
            2 * Math.PI,
          ),
        t.stroke();
    t.beginPath(),
      t.arc(3 * i, 13 * i, 0.8 * i, 0, 2 * Math.PI),
      t.stroke(),
      t.restore();
    for (o = 0; o < this.plaqueList.length; o++)
      if (8 !== o) {
        t.save(),
          (t.lineWidth = i / 8),
          (t.strokeStyle = "slategrey"),
          t.beginPath();
        var n = this.plaqueList[o];
        n.isHover ? (t.fillStyle = "#555") : (t.fillStyle = "#2b2b2b");
        var l = [i / 6, i / 6, i / 6, i / 6],
          h = i * n.i0,
          d = i * n.j0,
          u = i * n.w0,
          c = i * n.h0,
          I = [h, h, h + u, h + u],
          E = [d, d + c, d + c, d],
          S = new Path2D(Helper.makeRoundedPath(I, E, l, 1, 0, 0));
        t.fill(S),
          t.save(),
          t.clip(S, "evenodd"),
          Textures.drawFiber(t, h, d, u, c, FIELD.tileWidth / 48, 0.5),
          t.restore(),
          (t.fillStyle = "antiquewhite"),
          (t.textBaseline = "middle"),
          (t.textAlign = "center"),
          (t.font = (1.2 * i) / 3 + "px Courier New"),
          t.fillText(n.name, h + u / 2, d + c / 2),
          t.restore();
      }
    var f = [4.5, 5.9, 4, 9, 13.8, 18.5, 17.1, 9.2],
      p = [5.1, 7.5, 11.5, 7.5, 10.1, 10, 7.5, 9.9],
      T = [5.2, 5, 5.4, 10.3, 15.2, 19.6, 16.2, 10.7],
      R = [6, 8.1, 11.7, 9.9, 10.1, 8.8, 7.6, 7.4],
      m = [4.7, 5.7, 4.7, 10.2, 14.5, 19.7, 16.7, 10.6],
      g = [5.9, 8.2, 12.1, 8.4, 9.6, 9.3, 7.9, 8.5],
      A = [0.03, 0.35, -0.1, 0.5, 0.1, -0.5, -0.8, 0.9];
    t.save(), (t.strokeStyle = "slategrey"), (t.lineWidth = i / 8);
    for (o = 0; o < f.length; o++)
      t.beginPath(),
        t.moveTo(f[o] * i, p[o] * i),
        t.quadraticCurveTo(m[o] * i, g[o] * i, T[o] * i, R[o] * i),
        t.stroke();
    t.restore(),
      t.save(),
      (t.fillStyle = "slategrey"),
      (t.strokeStyle = "slategrey"),
      (t.lineWidth = i / 24),
      (t.lineJoin = "round");
    for (o = 0; o < f.length; o++)
      t.beginPath(),
        Helper.arrowHead(t, T[o] * i, R[o] * i, i / 5, A[o] * Math.PI),
        t.fill(),
        t.stroke();
    t.restore();
    for (var C = 0; C < this.tokenList.length; C++) {
      var L = this.tokenList[C];
      (h = L.i0 * this.scale * FIELD.tileWidth),
        (d = L.j0 * this.scale * FIELD.tileWidth);
      L.pathInfo.drawSelect(
        t,
        h,
        d,
        this.scale * FIELD.tileWidth,
        this.scale * FIELD.tileHeight,
        !0,
      );
    }
  }
  drawConceptArrow(e) {
    if ("token" === STATE.under.type) {
      for (
        var t = STATE.under.k0,
          i = t.label,
          a = e.ctx,
          r = FIELD.tileWidth,
          s = [
            [17, 24],
            [17, 25],
            [21, 46],
            [22, 61],
            [9, 33],
            [25, 39],
            [24, 40],
            [37, 41],
            [48, 59],
            [38, 49],
            [20, 54],
          ],
          o = 0;
        o < s.length;
        o++
      )
        (s[o][0] += FIELD.numBonusLevels), (s[o][1] += FIELD.numBonusLevels);
      var n = [];
      for (o = 0; o < s.length; o++) s[o][1] === i && n.push(s[o]);
      a.save(), a.setLineDash([r / 6, r / 6]), (a.lineWidth = r / 24);
      for (o = 0; o < n.length; o++) {
        var l = this.tokenList[n[o][0]],
          h = this.tokenList[n[o][1]],
          d = l.i0 * this.scale * r + 0.5 * r,
          u = l.j0 * this.scale * r + 0.5 * r,
          c = h.i0 * this.scale * r + 0.5 * r,
          I = h.j0 * this.scale * r + 0.5 * r,
          E = Math.atan2(I - u, c - d),
          S = 0.6 * r * Math.cos(E),
          f = 0.6 * r * Math.sin(E),
          p = Math.sqrt((d - c) ** 2 + (u - I) ** 2),
          T = 0.01 * p * (0.5 * r * Math.cos(E - Math.PI / 2)),
          R = 0.01 * p * (0.5 * r * Math.sin(E - Math.PI / 2)),
          m = T + d + 0.5 * (c - d),
          g = R + u + 0.5 * (I - u);
        a.beginPath(),
          a.moveTo(d + S, u + f),
          a.quadraticCurveTo(m, g, c - S, I - f),
          (a.strokeStyle = "limegreen"),
          (a.lineDashOffset = (-2 * TIMER.dashRatio * r) / 6),
          a.stroke(),
          (a.strokeStyle = "grey"),
          (a.lineDashOffset = (-2 * TIMER.dashRatio * r) / 6 - r / 6),
          a.stroke();
      }
      a.restore();
    }
  }
}
