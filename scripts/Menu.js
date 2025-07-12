class Menu {
  constructor(e, t, i, a, r, s, o) {
    (this._label = e),
      (this._x0 = t),
      (this._y0 = i),
      (this._w0 = (a + FIELD.tileWidth) * (s + 1)),
      (this._h0 = (a + FIELD.tileHeight) * (o + 1) + r),
      (this._topPad = r),
      (this._tileMargin = a),
      (this._numWidth = s),
      (this._numHeight = o),
      (this._hovered = -1),
      (this._selected = -1),
      (this._buttons = []),
      (this._background = 0),
      (this._closure = 0),
      (this._selProperties = {});
  }
  get closure() {
    return this._closure;
  }
  get label() {
    return this._label;
  }
  get x0() {
    return this._x0;
  }
  get y0() {
    return this._y0;
  }
  get w0() {
    return this._w0;
  }
  get h0() {
    return this._h0;
  }
  get tileMargin() {
    return this._tileMargin;
  }
  get topPad() {
    return this._topPad;
  }
  get numWidth() {
    return this._numWidth;
  }
  get numHeight() {
    return this._numHeight;
  }
  get hovered() {
    return this._hovered;
  }
  get selected() {
    return this._selected;
  }
  get buttons() {
    return this._buttons;
  }
  get selRot() {
    return this._selRot;
  }
  get selState() {
    return this._selState;
  }
  get selProperties() {
    return this._selProperties;
  }
  set selProperties(e) {
    this._selProperties = e;
  }
  set closure(e) {
    this._closure = e;
  }
  set x0(e) {
    this._x0 = e;
  }
  set y0(e) {
    this._y0 = e;
  }
  set w0(e) {
    this._w0 = e;
  }
  set h0(e) {
    this._h0 = e;
  }
  set topPad(e) {
    this._topPad = e;
  }
  set tileMargin(e) {
    this._tileMargin = e;
  }
  set numWidth(e) {
    this._numWidth = e;
  }
  set numHeight(e) {
    this._numHeight = e;
  }
  set hovered(e) {
    this._hovered = e;
  }
  set selected(e) {
    this._selected = e;
  }
  set buttons(e) {
    this._buttons = e;
  }
  set selRot(e) {
    this._selRot = e;
  }
  set selState(e) {
    this._selState = e;
  }
  selectNext(e = 1) {
    var t = this.buttons.length;
    if (this.selected < 0) {
      if ("free" === STATE.state || "erasing" === STATE.state)
        for (var i = 0, a = 0; a < t; a++) {
          var r = i % this.numWidth,
            s = Math.floor(i / this.numWidth),
            o = this.getButton(r, s);
          if (-1 !== o && !o.isGrey)
            return (
              SFX.click2.play(),
              (this.selProperties = JSON.parse(
                JSON.stringify(this.getButton(r, s).defaultProperties),
              )),
              this.setSelected(r, s),
              void (STATE.state = "placing")
            );
          i += 1;
        }
    } else if ("placing" === STATE.state)
      for (i = this.selected + e, a = 0; a < t; a++) {
        i < 0 && (i += t), i >= t && (i = 0);
        (r = i % this.numWidth),
          (s = Math.floor(i / this.numWidth)),
          (o = this.getButton(r, s));
        if (-1 !== o && !o.isGrey)
          return (
            SFX.click2.play(),
            (this.selProperties = JSON.parse(
              JSON.stringify(this.getButton(r, s).defaultProperties),
            )),
            void this.setSelected(r, s)
          );
        i += e;
      }
  }
  selectHot(e, t) {
    this.buttons.length;
    if (this.selected < 0) {
      if ("free" === STATE.state || "erasing" === STATE.state) {
        var i = this.getButton(e, t);
        if (-1 !== i && !i.isGrey)
          return (
            SFX.click2.play(),
            (this.selProperties = JSON.parse(
              JSON.stringify(this.getButton(e, t).defaultProperties),
            )),
            this.setSelected(e, t),
            void (STATE.state = "placing")
          );
      }
    } else if ("placing" === STATE.state) {
      i = this.getButton(e, t);
      if (-1 !== i && !i.isGrey)
        return (
          SFX.click2.play(),
          (this.selProperties = JSON.parse(
            JSON.stringify(this.getButton(e, t).defaultProperties),
          )),
          void this.setSelected(e, t)
        );
    }
  }
  addButton(e) {
    this.buttons.push(e);
  }
  reset() {
    (this._hovered = -1),
      (this._selected = -1),
      (this._background = 0),
      (this._closure = 0),
      (this._selProperties = {});
    for (var e = 0; e < this.buttons.length; e++) this.buttons[e].clear();
    this.buttons = [];
  }
  gridPos(e, t) {
    var i = this.x0 + (e + 0.5) * FIELD.tileWidth + (e + 1) * this.tileMargin,
      a =
        this.y0 +
        (t + 0.5) * FIELD.tileHeight +
        (t + 1) * this.tileMargin +
        this.topPad;
    return { x0: i, y0: a };
  }
  setSelected(e, t, i = 0) {
    var a = this.buttons.length;
    this.selected = -1;
    for (var r = 0; r < a; r++)
      this.buttons[r].i0 === e && this.buttons[r].j0 === t
        ? ((this.selected = r),
          (this.buttons[r].selected = !0),
          (this.selProperties = JSON.parse(
            JSON.stringify(this.buttons[r].defaultProperties),
          )))
        : (this.buttons[r].selected = !1);
  }
  getButton(e, t) {
    for (var i = this.buttons.length, a = 0; a < i; a++)
      if (this.buttons[a].i0 === e && this.buttons[a].j0 === t)
        return this.buttons[a];
    return -1;
  }
  getNamedButton(e, t = 0) {
    var i = this.buttons.length;
    if ("cInvert" === e) return 0 === t ? this.buttons[4] : this.buttons[5];
    for (var a = 0; a < i; a++)
      if (this.buttons[a].tile.name === e) return this.buttons[a];
    return -1;
  }
  setHovered(e, t) {
    var i = this.buttons.length;
    this.hovered = -1;
    for (var a = 0; a < i; a++)
      this.buttons[a].i0 === e && this.buttons[a].j0 === t
        ? ((this.hovered = a), (this.buttons[a].hovered = !0))
        : (this.buttons[a].hovered = !1);
  }
  removeHovered() {
    var e = this.buttons.length;
    this.hovered = -1;
    for (var t = 0; t < e; t++) this.buttons[t].hovered = !1;
  }
  findTile(e, t) {
    var i = Math.floor(
        (e - this.x0 - FIELD.tileWidth / 2 - this.tileMargin / 2) /
          (FIELD.tileWidth + this.tileMargin),
      ),
      a = Math.floor(
        (t -
          this.y0 -
          FIELD.tileHeight / 2 -
          this.topPad -
          this.tileMargin / 2) /
          (FIELD.tileHeight + this.tileMargin),
      );
    return { i0: i, j0: a };
  }
  draw(e, t) {
    var i = e.ctx,
      a = t.ctx,
      r = (FIELD.tileWidth + FIELD.menu.pad) * FIELD.menu.cols + FIELD.menu.pad;
    (a.fillStyle = "antiquewhite"),
      (a.font = (1.2 / 3) * FIELD.tileWidth + "px 'Courier New', 'Noto Sans Mono CJK JP'"),
      (a.textBaseline = "middle"),
      (a.shadowBlur = 2),
      (a.shadowOffsetX = 2),
      (a.shadowOffsetY = 2),
      (a.shadowColor = "black");
    TIMER.time;
    for (var s = -1, o = -1, n = 0; n < this.buttons.length; n++) {
      var l = this.buttons[n],
        h = this.gridPos(l.i0, l.j0);
      l.hovered && (o = n), l.selected && (s = n), !l.hovered && l.selected;
    }
    if (s >= 0) {
      (l = this.buttons[s]), (h = this.gridPos(l.i0, l.j0));
      var d = 0.1,
        u = h.x0 + FIELD.tileWidth / 2,
        c = h.y0 + FIELD.tileHeight / 2,
        I = (1 + 2 * d) * (FIELD.tileWidth / 2);
      const e = i.createRadialGradient(u, c, 0.5 * I, u, c, I);
      e.addColorStop(0, "white"),
        e.addColorStop(0.95, "black"),
        e.addColorStop(1, SEL_STYLES.color1),
        i.save(),
        i.beginPath(),
        i.arc(u, c, I, 0, 2 * Math.PI),
        (i.lineWidth = (1 * FIELD.tileWidth) / 48),
        (i.strokeStyle = "seagreen"),
        i.stroke(),
        i.setLineDash([SEL_STYLES.lineDash, SEL_STYLES.lineGap]),
        (i.lineDashOffset =
          (SEL_STYLES.lineDash + SEL_STYLES.lineGap) * TIMER.dashRatio),
        (i.strokeStyle = "#333"),
        i.stroke(),
        (i.fillStyle = "seagreen"),
        (i.globalAlpha = 0.4),
        i.fill(),
        i.restore();
      var E = !1;
      if ("questionicon" === STATE.under.type) E = !0;
      i.save();
      var S = 1 + 0.1 * Math.cos(8 * Math.PI * TIMER.qubitGlowRatio),
        f =
          ((u = h.x0 + FIELD.tileWidth - 0.5 * FIELD.iconWidth),
          (c = h.y0 + FIELD.tileHeight - 0.5 * FIELD.iconHeight),
          PathsI.icon(i, "questionIcon", { hover: E }));
      f.draw(i, u, c, S * FIELD.iconWidth, S * FIELD.iconHeight), i.restore();
    }
    if (o >= 0 && o != s) {
      (l = this.buttons[o]), (h = this.gridPos(l.i0, l.j0)), (d = 0.05);
      if (!l.isGrey) {
        (f = Paths.qubitHalo(i, 0, !0, -1)),
          (S = 1.3 * (1 + 0.1 * Math.cos(8 * Math.PI * TIMER.qubitGlowRatio)));
        f.draw(
          i,
          h.x0 - ((S - 1) / 2) * FIELD.tileWidth,
          h.y0 - ((S - 1) / 2) * FIELD.tileHeight,
          S * FIELD.tileWidth,
          S * FIELD.tileHeight,
        );
      }
    }
    if (o >= 0 && o === s) {
      l = this.buttons[s];
      l.isGrey ||
        a.fillText(
          l.tooltip,
          r / 2 - a.measureText(l.tooltip).width / 2,
          FIELD.menu.topPad / 3,
        );
    } else if (o >= 0) {
      l = this.buttons[o];
      l.isGrey ||
        a.fillText(
          l.tooltip,
          r / 2 - a.measureText(l.tooltip).width / 2,
          FIELD.menu.topPad / 3,
        );
    } else if (s >= 0 && !l.isGrey) {
      l = this.buttons[s];
      a.fillText(
        l.tooltip,
        r / 2 - a.measureText(l.tooltip).width / 2,
        FIELD.menu.topPad / 3,
      );
    }
    if (this._closure > 0) {
      i.save();
      var p = Math.sqrt(0.5 - 0.5 * Math.cos(Math.PI * this._closure)),
        T =
          this.x0 + FIELD.tileWidth / 2 + p * ((this.w0 - FIELD.tileWidth) / 2),
        R = i.createLinearGradient(
          T - this.w0 / 2,
          this.y0 + this.h0 / 2,
          T,
          this.y0 + this.h0 / 2,
        );
      R.addColorStop(0, "#444"),
        R.addColorStop(1, "#4e7566"),
        (i.fillStyle = R),
        i.fillRect(
          this.x0 + FIELD.tileWidth / 2,
          this.y0 + FIELD.tileHeight / 2,
          p * ((this.w0 - FIELD.tileWidth) / 2),
          this.h0 - FIELD.tileHeight,
        );
      var m =
          this.x0 +
          this.w0 -
          FIELD.tileWidth / 2 -
          p * ((this.w0 - FIELD.tileWidth) / 2),
        g = i.createLinearGradient(
          m,
          this.y0 + this.h0 / 2,
          m + this.w0 / 2,
          this.y0 + this.h0 / 2,
        );
      g.addColorStop(1, "#444"),
        g.addColorStop(0, "#4e7566"),
        (i.fillStyle = g),
        i.fillRect(
          this.x0 + this.w0 - FIELD.tileWidth / 2,
          this.y0 + FIELD.tileHeight / 2,
          -p * ((this.w0 - FIELD.tileWidth) / 2),
          this.h0 - FIELD.tileHeight,
        ),
        i.beginPath(),
        i.moveTo(T, this.y0 + FIELD.tileHeight / 2),
        i.lineTo(T, this.y0 - FIELD.tileHeight / 2 + this.h0),
        i.moveTo(m, this.y0 + FIELD.tileHeight / 2),
        i.lineTo(m, this.y0 - FIELD.tileHeight / 2 + this.h0),
        (i.strokeStyle = "#222"),
        (i.lineWidth = FIELD.tileWidth / 12),
        i.setLineDash([]),
        i.stroke(),
        (i.lineWidth = FIELD.tileWidth / 24),
        (i.strokeStyle = "#324d42"),
        i.setLineDash([5, 3]),
        i.stroke(),
        i.restore();
    }
  }
  static resize() {
    var e = FIELD.menu.pad,
      t = FIELD.menu.topPad,
      i = FIELD.menu.cols,
      a = FIELD.menu.rows;
    (MENU.w0 = (e + FIELD.tileWidth) * (i + 1)),
      (MENU.h0 = (e + FIELD.tileHeight) * (a + 1) + t),
      (MENU.topPad = t),
      (MENU.tileMargin = e),
      (MENU.numWidth = i),
      (MENU.numHeight = a);
  }
  static initialize() {
    var e = 0;
    if (SCENARIO.menuGrey && SCENARIO.menuGrey.length > 3) e = 1;
    var t = FIELD.menu.pad,
      i = FIELD.menu.topPad,
      a = FIELD.menu.cols,
      r = FIELD.menu.rows;
    MENU.reset(),
      (MENU.w0 = (t + FIELD.tileWidth) * (a + 1)),
      (MENU.h0 = (t + FIELD.tileHeight) * (r + 1) + i),
      (MENU.topPad = i),
      (MENU.tileMargin = t),
      (MENU.numWidth = a),
      (MENU.numHeight = r);
    var s = ["DarkGoldenRod", "GoldenRod"],
      o = [
        "cWire",
        "switch",
        "cCombine",
        "cSplit",
        "cInvert",
        "cInvert",
        "qWire",
        "qControl",
        "qCombine",
        "measure",
        "qFlip",
        "rotate",
        "cCreate",
        "qCreate",
        "delay",
        "sync",
        "upgrade",
        "trash",
        "compare",
        "qCompare",
        "cCreate",
        "qCreate",
      ],
      n = [
        "ビットワイヤ",
        "ビット制御",
        "ビットワイヤ結合器",
        "ビットワイヤ分割器",
        "ビット反転／恒等演算",
        "ビット再ゼロ化／恒等演算",
        "キュービットワイヤ",
        "キュービット制御",
        "キュービットワイヤ結合器",
        "キュービット測定",
        "キュービット反転／恒等演算",
        "キュービット回転",
        "ビット生成",
        "キュービット生成",
        "遅延",
        "同期",
        "ビットからキュービット",
        "焼却炉",
        "ビット／キュービット比較",
        "キュービット比較",
        "ビット生成（プリセット）",
        "キュービット生成（プリセット）",
      ];
    if (0 === e) var l = 18;
    else l = o.length;
    for (var h = 0; h < l; h++) {
      var d = h % 6,
        u = Math.floor(h / 6),
        c = {
          type: o[h],
          orient: 0,
          rot: Math.PI / 4,
          state: 0,
          remaining: -1,
          counter: 0,
          undercol: s,
          isControlled: !1,
          basecol: GRADS.gates,
          counterMax: -1,
        };
      if ("cWire" === c.type) {
        var I = new PathSet("cWire", 32, 32),
          E = new Path2D("M 1 16 L 31 16");
        I.add({
          path: E,
          stroke: "MidnightBlue",
          lineWidth: 2,
          lineCap: "round",
          shadowStroke: "dodgerblue",
        });
        var S = new Button(0, d, u, I, n[h], 0, JSON.parse(JSON.stringify(c)));
        MENU.addButton(S, n[h], 0, c, SCENARIO.menuGrey[u][d]);
      } else if ("qWire" === c.type) {
        (I = new PathSet("qWire", 32, 32)), (E = new Path2D("M 1 16 L 31 16"));
        I.add({
          path: E,
          stroke: "Darkred",
          lineWidth: 2,
          lineCap: "round",
          shadowStroke: "#DD0000",
        });
        S = new Button(0, d, u, I, n[h], 0, JSON.parse(JSON.stringify(c)));
        MENU.addButton(S, n[h], 0, c, SCENARIO.menuGrey[u][d]);
      } else if ("switch" === c.type) {
        (c.rot = 1), (c.state = 1);
        S = new Button(
          0,
          d,
          u,
          PathsG.simpleSwitch(0),
          n[h],
          0,
          JSON.parse(JSON.stringify(c)),
        );
        MENU.addButton(S, n[h], 0, c, SCENARIO.menuGrey[u][d]);
      } else if ("qControl" === c.type) {
        c.rot = 0;
        S = new Button(
          0,
          d,
          u,
          PathsG.simpleControl(c.rot, 0),
          n[h],
          0,
          JSON.parse(JSON.stringify(c)),
        );
        MENU.addButton(S, n[h], 0, c, SCENARIO.menuGrey[u][d]);
      } else {
        [
          "cCombine",
          "cSplit",
          "cInvert",
          "cCreate",
          "qCreate",
          "qCombine",
          "measure",
          "upgrade",
          "delay",
        ].indexOf(c.type) >= 0
          ? (c.rot = 0)
          : ["rotate", "qFlip"].includes(c.type)
            ? (c.rot = Math.PI / 2)
            : (c.rot = Math.PI / 4),
          "cCreate" === c.type && (c.remaining = -2),
          "qCreate" === c.type && (c.remaining = -2),
          5 === h && "cInvert" === c.type
            ? (c.state = 1)
            : "delay" === c.type
              ? (c.state = 2)
              : (c.state = 0),
          ["cCreate", "qCreate"].indexOf(c.type) >= 0 &&
            3 === u &&
            (c.state = 2);
        S = new Button(
          0,
          d,
          u,
          PathsG.make(CANV.ctxMB, c),
          n[h],
          0,
          JSON.parse(JSON.stringify(c)),
        );
        MENU.addButton(S, n[h], 0, c, SCENARIO.menuGrey[u][d]);
      }
    }
    return MENU;
  }
}
