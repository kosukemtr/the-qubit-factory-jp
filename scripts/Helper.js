class Helper {
  static getMaxDims() {
    var e = Math.max(
        document.documentElement.scrollWidth,
        document.body.scrollWidth,
        document.documentElement.offsetWidth,
        document.body.offsetWidth,
        document.documentElement.clientWidth,
        document.body.clientWidth,
      ),
      t = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
        document.documentElement.offsetHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.body.clientHeight,
      );
    return { width: e, height: t };
  }
  static random() {
    if (RANDS.tick >= 0) {
      var e = RANDS.all[RANDS.locs[RANDS.tick] + RANDS.count];
      return (
        (RANDS.count += 1),
        void 0 === e && ((e = Math.random()), console.log("RNG OVERFLOW!!!!!")),
        e
      );
    }
    return Math.random();
  }
  static sideIntroLaser(e, t) {
    var i = e.ctx,
      a = t.ctx,
      r = e.x0,
      s = e.y0,
      o = FIELD.tileWidth / 6,
      n = TIMER.construct / TIMER.constructMax,
      l = 0.5 - 0.5 * Math.cos(Math.PI * n),
      h = e.w0,
      d = e.h0,
      u = 0.05 * d + 0.9 * d * (1 - l),
      c = 0.6 * FIELD.tileWidth;
    if (
      ((n < 0.2 || n > 0.8) && (c = 5 * c * Math.min(1 - n, n)),
      (i.globalCompositeOperation = "destination-out"),
      i.beginPath(),
      i.rect(0, 0, h, u),
      i.fill(),
      (i.globalCompositeOperation = "source-over"),
      "constructing" === STATE.mode)
    ) {
      (a.globalAlpha = 1), (a.globalCompositeOperation = "source-over");
      var I = o;
      n < 0.4 && (I *= n / 0.4),
        (a.fillStyle = "black"),
        a.beginPath(),
        a.moveTo(r + o, s + u - c / 2),
        a.quadraticCurveTo(r + o - I, s + u, r + o, s + u + c / 2),
        a.closePath(),
        a.fill(),
        a.beginPath(),
        a.moveTo(r + h - o, s + u - c / 2),
        a.quadraticCurveTo(r + h - o + I, s + u, r + h - o, s + u + c / 2),
        a.closePath(),
        a.fill();
      var E = a.createLinearGradient(r, s + u - c / 2, r, s + u + c / 2);
      E.addColorStop(0, "rgba(255,255,255,0.0)"),
        E.addColorStop(0.2, "rgba(0,0,255,0.4)"),
        E.addColorStop(0.5, "rgba(0,255,255,0.7)"),
        E.addColorStop(0.8, "rgba(0,0,255,0.4)"),
        E.addColorStop(1, "rgba(255,255,255,0.0)"),
        (n < 0.2 || n > 0.8) &&
          (a.globalAlpha = Math.min(1, Math.abs(5 * Math.min(1 - n, n)))),
        (a.fillStyle = E),
        a.beginPath(),
        a.rect(r + o, s + u - c / 2, h - 2 * o, c),
        a.fill();
    }
  }
  static introLaser(e, t) {
    var i = e.ctx,
      a = t.ctx,
      r = TIMER.construct / TIMER.constructMax,
      s = 0.5 - 0.5 * Math.cos(Math.PI * r),
      o = 2 * OVERLAY.margin + FIELD.tileWidth * FIELD.cols,
      n = 0.7 * o * s,
      l = FIELD.topMargin - OVERLAY.margin,
      h = 2 * OVERLAY.margin + FIELD.tileHeight * FIELD.rows,
      d = 0.6 * FIELD.tileWidth,
      u = 0.3 * FIELD.tileWidth;
    (r < 0.2 || r > 0.8) && (d = 5 * d * Math.min(1 - r, r)),
      r < 0.4 && (u = 2.5 * u * Math.min(1 - r, r));
    var c = FIELD.leftMargin - OVERLAY.margin + FIELD.leftPad + n,
      I = FIELD.leftMargin - OVERLAY.margin + FIELD.leftPad + o - n;
    if (
      (c < I &&
        ((i.globalCompositeOperation = "destination-out"),
        i.beginPath(),
        i.rect(c - FIELD.leftPad, l, Math.abs(I - c), h),
        i.fill(),
        (i.globalCompositeOperation = "source-over")),
      "constructing" === STATE.mode)
    ) {
      (a.globalAlpha = 1),
        (a.globalCompositeOperation = "source-over"),
        (a.fillStyle = "black"),
        a.beginPath(),
        a.moveTo(c - d / 2, FIELD.topPad + l),
        a.quadraticCurveTo(
          c,
          FIELD.topPad + l - u,
          c + d / 2,
          FIELD.topPad + l,
        ),
        a.closePath(),
        a.moveTo(c - d / 2, FIELD.topPad + l + h),
        a.quadraticCurveTo(
          c,
          FIELD.topPad + l + u + h,
          c + d / 2,
          FIELD.topPad + l + h,
        ),
        a.closePath(),
        a.moveTo(I - d / 2, FIELD.topPad + l),
        a.quadraticCurveTo(
          I,
          FIELD.topPad + l - u,
          I + d / 2,
          FIELD.topPad + l,
        ),
        a.closePath(),
        a.moveTo(I - d / 2, FIELD.topPad + l + h),
        a.quadraticCurveTo(
          I,
          FIELD.topPad + l + u + h,
          I + d / 2,
          FIELD.topPad + l + h,
        ),
        a.closePath(),
        a.fill();
      var E = a.createLinearGradient(
        c - d / 2,
        FIELD.topPad + l,
        c + d / 2,
        FIELD.topPad + l,
      );
      E.addColorStop(0, "rgba(255,255,255,0.0)"),
        E.addColorStop(0.2, "rgba(0,0,255,0.4)"),
        E.addColorStop(0.5, "rgba(0,255,255,0.7)"),
        E.addColorStop(0.8, "rgba(0,0,255,0.4)"),
        E.addColorStop(1, "rgba(255,255,255,0.0)");
      var S = a.createLinearGradient(
        I - d / 2,
        FIELD.topPad + l,
        I + d / 2,
        FIELD.topPad + l,
      );
      S.addColorStop(0, "rgba(255,255,255,0.0)"),
        S.addColorStop(0.2, "rgba(0,0,255,0.4)"),
        S.addColorStop(0.5, "rgba(0,255,255,0.7)"),
        S.addColorStop(0.8, "rgba(0,0,255,0.4)"),
        S.addColorStop(1, "rgba(255,255,255,0.0)"),
        (r < 0.2 || r > 0.8) &&
          (a.globalAlpha = Math.min(1, Math.abs(5 * Math.min(1 - r, r)))),
        (a.fillStyle = E),
        a.beginPath(),
        a.rect(c - d / 2, FIELD.topPad + l, d, h),
        a.fill(),
        (a.fillStyle = S),
        a.beginPath(),
        a.rect(I - d / 2, FIELD.topPad + l, d, h),
        a.fill();
    }
  }
  static openExternalLink(e) {
    ["constructing", "running", "paused", "robot"].includes(STATE.mode) &&
      65 === e.keyCode &&
      PERSIST0[SCENARIO.name].complete &&
      SCENARIO.archive &&
      window.open(SCENARIO.archive, "_blank");
  }
  static pasteCurrentBoard(e) {
    "constructing" === STATE.mode
      ? (86 === e.keyCode &&
          (e.ctrlKey || e.metaKey) &&
          ("function" == typeof navigator.clipboard.readText
            ? navigator.clipboard
                .readText()
                .then((e) => Helper.tryImportLayout(e))
            : (console.log("Browser does not support import from clipboard."),
              (FIELD.message = "Unsupported in Current Browser!"),
              (TIMER.message = TIMER.messageMax),
              SFX.invalid.play())),
        220 === e.keyCode &&
          e.shiftKey &&
          (e.ctrlKey || e.metaKey) &&
          navigator.clipboard
            .readText()
            .then((e) => Helper.importFactory(JSON.parse(e), !0)))
      : "levelSelect" === STATE.mode &&
        86 === e.keyCode &&
        (e.ctrlKey || e.metaKey) &&
        ("function" == typeof navigator.clipboard.readText
          ? navigator.clipboard
              .readText()
              .then((e) => Helper.importSave(JSON.parse(e)))
          : (console.log("Browser does not support import from clipboard."),
            (FIELD.message = "Unsupported in Current Browser!"),
            (TIMER.message = TIMER.messageMax),
            SFX.invalid.play()));
  }
  static copyCurrentBoard(e) {
    if ("constructing" === STATE.mode) {
      if (67 === e.keyCode && (e.ctrlKey || e.metaKey)) {
        for (var t = [], i = 0; i < IBOARD._gateList.length; i++)
          t.push(IBOARD._gateList[i].pack());
        var a = [];
        for (i = 0; i < IBOARD._qubitList.length; i++)
          a.push(IBOARD._qubitList[i].pack());
        var r = [];
        for (i = 0; i < IBOARD._bitList.length; i++)
          r.push(IBOARD._bitList[i].pack());
        var s = IBOARD._tiles;
        FIELD.developerMode &&
          (console.log(JSON.stringify(s)),
          console.log(JSON.stringify(t)),
          console.log(JSON.stringify(a)),
          console.log(JSON.stringify(r)));
        const e = JSON.stringify({
          name: SCENARIO.title,
          tag: SCENARIO.whichOne,
          version: FIELD.version,
          tiles: s,
          gates: t,
        });
        return (
          console.log(e),
          (FIELD.message = "Factory Copied!"),
          (TIMER.message = TIMER.messageMax),
          e
        );
      }
    } else if (
      "levelSelect" === STATE.mode &&
      67 === e.keyCode &&
      (e.ctrlKey || e.metaKey)
    ) {
      var o = LEVELS.names.length,
        n = {},
        l = {};
      (n.generic = localStorage.getItem("generic")),
        (l.generic = Helper.makeCheckFancy(
          JSON.stringify(localStorage.getItem("generic")),
        ));
      for (var h = 0; h < o; h++) {
        var d = localStorage.getItem(LEVELS.names[h] + "0");
        d &&
          ((l[LEVELS.names[h]] = Helper.makeCheckFancy(JSON.stringify(d))),
          (n[LEVELS.names[h]] = d));
      }
      return (
        (n.generic1 = l),
        (FIELD.message = "Profile Copied!"),
        (TIMER.message = TIMER.messageMax),
        JSON.stringify(n)
      );
    }
    return 0;
  }
  static checkSubsequence(e, t) {
    for (var i = e.length, a = t.length, r = 0; r < i - a; r++) {
      for (var s = !0, o = 0; o < a; o++) t[o] !== e[r + o] && (s = !1);
      if (s) return !0;
    }
    return !1;
  }
  static genSequenceBits(e, t = !0, i = !1) {
    for (var a = 0, r = [], s = 0; s < e - 5; s++) {
      var o = Math.round(Math.random());
      0 === o ? (a = 0) : a++, 4 === a && ((o = 0), (a = 0)), r.push(o);
    }
    r.push(0), r.push(1), r.push(1), r.push(1), r.push(1);
    var n = [];
    if (t) {
      if (i) var l = e - 9;
      else l = Math.floor((e - 9) * Math.random());
      for (s = 0; s < 9; s++) n.push(r[l + s]);
    } else {
      for (s = 0; s < 9; s++) n.push(Math.round(Math.random()));
      for (var h = Helper.checkSubsequence(r, n), d = 0; h && d < 100; ) {
        var u = Math.floor(9 * Math.random());
        (n[u] = 1 - n[u]), (h = Helper.checkSubsequence(r, n)), d++;
      }
    }
    return [r, n];
  }
  static countCleanTiles(e) {
    for (var t = 0, i = 1; i < FIELD.cols - 1; i++)
      for (var a = 1; a < FIELD.rows - 1; a++) {
        var r = i + a * FIELD.cols;
        -1 === e[r] && (t += 1);
      }
    return t;
  }
  static tryImportLayout(e) {
    try {
      var t = JSON.parse(e);
      t && "object" == typeof t && Helper.importFactory(t);
    } catch (e) {
      console.log("Invalid JSON import"),
        (FIELD.message = "Invalid Import!"),
        (TIMER.message = TIMER.messageMax),
        SFX.invalid.play();
    }
  }
  static makeCheckHash(e) {
    for (var t = 0, i = 0; i < e.length; i++)
      i % 2 == 0 ? (t += e.charCodeAt(i)) : (t -= e.charCodeAt(i));
    return t;
  }
  static makeCheckFancy(e) {
    for (var t = 0, i = 0, a = 0, r = 0; r < e.length; r++)
      r % 2 == 0
        ? ((t += e.charCodeAt(r)),
          (i += 2 * e.charCodeAt(r)),
          (a += 7 * e.charCodeAt(r)))
        : ((t -= e.charCodeAt(r)),
          (i -= 3 * e.charCodeAt(r)),
          (i -= 5 * e.charCodeAt(r)));
    return [t, i, a];
  }
  static makeCheckDigit(e = SCENARIO.whichOne) {
    var t = LevelGates(e, !1, 0);
    if (!t) return [-9, -9];
    for (var i = 0, a = 0; a < FIELD.cols; a++)
      (i += t.tiles[a]), (i += t.tiles[a + (FIELD.rows - 1) * FIELD.cols]);
    for (var r = 0; r < FIELD.rows; r++)
      (i += t.tiles[0 + r * FIELD.cols]),
        (i += t.tiles[FIELD.cols - 1 + r * FIELD.cols]);
    for (var s = 0, o = 0; o < t.allGates.length; o++) {
      var n = t.allGates[o];
      s +=
        n[0] +
        n[1] -
        Helper.makeCheckHash(n[2]) +
        Math.floor(10 * n[4]) +
        Math.floor(10 * n[5]) +
        n[6] +
        n[7];
    }
    return [i, s];
  }
  static checkImportFactory(e) {
    if ("freeA" === e) return !0;
    if (e !== SCENARIO.whichOne) return !1;
    var t = LEVELS.names.indexOf(e);
    if (t < 0) return !1;
    var i = Helper.makeCheckDigit(SCENARIO.whichOne);
    return (
      console.log(i),
      console.log(LEVELS.tileHash[t]),
      console.log(LEVELS.gateHash[t]),
      i[0] === LEVELS.tileHash[t] && i[1] === LEVELS.gateHash[t]
    );
  }
  static importFactory(e, t = !1) {
    if (!t) {
      var i = Helper.checkImportFactory(e.tag);
      if (!i)
        return (
          (FIELD.message = "Invalid Import!"),
          (TIMER.message = TIMER.messageMax),
          void SFX.invalid.play()
        );
    }
    IBOARD = new Board(CANV.interface.ctx, FIELD.cols, FIELD.rows);
    var a = LevelGates(e.tag);
    IBOARD.setAllBits(a.allBits, a.allQubits, a.entGroups),
      IBOARD.setAllGates(e.gates),
      (IBOARD._tiles = e.tiles),
      LevelRefresh(SCENARIO.name, IBOARD),
      (FIELD.message = "Factory Imported!"),
      (TIMER.message = TIMER.messageMax),
      UNDOREDO.add(),
      SFX.click2.play();
  }
  static checkImport(e) {
    for (
      var t = e.generic1, i = Object.getOwnPropertyNames(t), a = 0;
      a < i.length;
      a++
    ) {
      var r = i[a],
        s = e[r];
      if (!s) return !1;
      var o = Helper.makeCheckFancy(JSON.stringify(s)),
        n = t[r],
        l = o[0] === n[0] && o[1] === n[1] && o[2] === n[2];
      if (!l) return !1;
    }
    return !0;
  }
  static importSave(e) {
    var t = Helper.checkImport(e);
    if (!t)
      return (
        (FIELD.message = "Invalid Import!"),
        void (TIMER.message = TIMER.messageMax)
      );
    for (
      var i = e.generic1, a = Object.getOwnPropertyNames(i), r = 0;
      r < a.length;
      r++
    ) {
      var s = a[r],
        o = e[s];
      "generic" === s
        ? o && localStorage.setItem(s, o)
        : o && localStorage.setItem(s + "0", o);
    }
    InitScenario.loadAll(),
      (SCENARIO.whichOne = "levelSelect"),
      (SCENARIO.solution = !1),
      InitScenario.load(SCENARIO.whichOne, SCENARIO.solution),
      (FIELD.message = "Profile Imported!"),
      (TIMER.message = TIMER.messageMax);
  }
  static findStringDifference(e, t) {
    for (var i = "", a = [], r = 0; r < Math.min(e.length, t.length); r++)
      e[r] !== t[r] && ((i += e[r]), a.push(r));
    return { diffs: i, locs: a };
  }
  static findStorageSize() {
    var e,
      t = 0;
    for (e in localStorage)
      localStorage.hasOwnProperty(e) &&
        (t += 2 * (localStorage[e].length + e.length));
    console.log("Total Storage = " + (t / 1024).toFixed(2) + " KB");
  }
  static drawToggles() {
    CANV.toggles.clear();
    var e = CANV.toggles.ctx;
    if ("title" === STATE.mode) var t = FIELD.tileWidth / 2;
    else t = FIELD.tileWidth;
    var i = [!1, !1, !1];
    "escbutton" === STATE.under.type && (i[STATE.under.i0] = !0),
      "title" === STATE.mode
        ? (PathsI.musicIcon(e, OPTS.musicOn, i[1]).draw(
            e,
            t / 3,
            (1 * t) / 3,
            0.3 * t,
            0.3 * t,
          ),
          PathsI.sfxIcon(e, OPTS.sfxOn, i[2]).draw(
            e,
            t / 3,
            (2.25 * t) / 3,
            0.3 * t,
            0.3 * t,
          ))
        : (FIELD.forceSingle ||
            PathsI.escIcon(e, i[0]).draw(e, t / 3, t / 3, 0.3 * t, 0.3 * t),
          PathsI.musicIcon(e, OPTS.musicOn, i[1]).draw(
            e,
            t / 3,
            (2.25 * t) / 3,
            0.3 * t,
            0.3 * t,
          ),
          PathsI.sfxIcon(e, OPTS.sfxOn, i[2]).draw(
            e,
            t / 3,
            (3.5 * t) / 3,
            0.3 * t,
            0.3 * t,
          ));
  }
  static generateName() {
    for (
      var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZ9", t = "0123456789", i = "", a = 0;
      a < 4;
      a++
    )
      i += e.charAt(Math.floor(Math.random() * e.length));
    for (a = 0; a < 2; a++) i += t.charAt(Math.floor(Math.random() * t.length));
    return i;
  }
  static fiberBoxPath(e, t, i, a, r, s) {
    e.save(),
      (e.fillStyle = "#2b2b2b"),
      (e.strokeStyle = "#000"),
      (e.shadowBlur = 4),
      (e.shadowOffsetX = FIELD.tileWidth / 24),
      (e.shadowOffsetY = FIELD.tileWidth / 24),
      (e.shadowColor = "#17241f"),
      e.fill(t),
      e.stroke(t),
      e.restore(),
      e.save(),
      e.clip(t, "evenodd"),
      Textures.drawFiber(e, i, a, r, s, FIELD.tileWidth / 48, 0.5),
      e.restore();
  }
  static fiberBox(e, t, i, a, r, s, o = !0, n = 48) {
    var l = [t, t, t + a, t + a],
      h = [i, i + r, i + r, i],
      d = [s, s, s, s],
      u = new Path2D(Helper.makeRoundedPath(l, h, d, 1, 0, 0));
    e.save(),
      (e.fillStyle = "#2b2b2b"),
      (e.strokeStyle = "#000"),
      o
        ? ((e.shadowBlur = 4),
          (e.shadowOffsetX = FIELD.tileWidth / 24),
          (e.shadowOffsetY = FIELD.tileWidth / 24),
          (e.shadowColor = "#17241f"))
        : (e.shadowColor = "transparent"),
      e.fill(u),
      e.stroke(u),
      e.restore(),
      e.save(),
      e.clip(u, "evenodd"),
      Textures.drawFiber(e, t, i, a, r, FIELD.tileWidth / n, 0.5),
      e.restore();
  }
  static renderOverlay(e, t) {
    var i = new Path2D(makeOverlayPattern());
    e.save(),
      (e.globalCompositeOperation = "source-over"),
      (e.globalAlpha = 1),
      (e.fillStyle = "#304347"),
      e.fill(t, "evenodd"),
      (e.lineWidth = 1),
      (e.strokeStyle = "black"),
      e.stroke(t),
      (e.fillStyle = "#523314"),
      (e.globalAlpha = 0.15),
      e.clip(t, "evenodd"),
      e.scale(1 / OVERLAY.scale, 1 / OVERLAY.scale),
      e.fill(i),
      e.translate(4040, 0),
      e.fill(i),
      e.translate(0, 4040),
      e.fill(i),
      e.translate(-4040, 0),
      e.fill(i),
      e.translate(8080, -4040),
      e.fill(i),
      e.translate(0, 4040),
      e.fill(i),
      e.restore();
  }
  static esc() {
    if ("title" !== STATE.mode)
      if ("tutorial" === STATE.mode) SFX.click.play(), TutControl.close();
      else if ("robot" === STATE.mode)
        SFX.click.play(),
          (STATE.mode = ROBOT.oldMode),
          (ROBOT.oldMode = "none"),
          (STATE.state = "free"),
          (STATE.selected = { type: "none", i0: -1, j0: -1, k0: -1 }),
          (STATE.grab = { type: "none", i0: -1, j0: -1, k0: -1 }),
          "constructing" === STATE.mode &&
            -1 !== MENU.selected &&
            (STATE.state = "placing"),
          CANV.robotBase.deactivate(),
          CANV.robotScreen.deactivate(),
          CANV.robotScreenBase.deactivate(),
          CANV.robotText.deactivate(),
          CANV.robotButton.deactivate(),
          SVG.tiledN.deactivate(),
          SVG.tiledO.deactivate(),
          SVG.tiledP.deactivate(),
          SVG.tiledQ.deactivate();
      else if ("levelSelect" === STATE.mode) {
        SFX.select2.play(), (ROBOT.oldMode = "none");
        var e = 2 * ResetConsts.resize();
        (SCENARIO.whichOne = "title"),
          InitScenario.load("title"),
          (FIELD.tileWidth = e),
          (FIELD.tileHeight = e),
          ResetConsts.title(),
          (TIMER.resize = -1);
      } else
        FIELD.forceSingle ||
          (SFX.select2.play(),
          (ROBOT.oldMode = "none"),
          (PERSIST0[SCENARIO.name].tiles[STATE.blueprint] = [...IBOARD._tiles]),
          (PERSIST0[SCENARIO.name].gates[STATE.blueprint] =
            IBOARD.getAllGates()),
          Storage.save(PERSIST0[SCENARIO.name], SCENARIO.name, 0),
          InitScenario.load("levelSelect", !1),
          (SCENARIO.whichOne = "levelSelect"),
          (STATE.state = "free"),
          (STATE.selected = { type: "none", i0: -1, j0: -1, k0: -1 }),
          (STATE.grab = { type: "none", i0: -1, j0: -1, k0: -1 }));
    else
      "options" === STATE.state
        ? (STATE.state = "free")
        : "confirming" === STATE.state &&
          ((STATE.state = "options"),
          (document.getElementById("greyoverlay").style.visibility = "hidden"),
          CANV.confirm.deactivate());
  }
  static arrowHead(e, t, i, a, r) {
    var s = [
        t + a * Math.cos(r),
        t + a * Math.cos(r + (2 * Math.PI) / 3),
        t + a * Math.cos(r + (4 * Math.PI) / 3),
      ],
      o = [
        i + a * Math.sin(r),
        i + a * Math.sin(r + (2 * Math.PI) / 3),
        i + a * Math.sin(r + (4 * Math.PI) / 3),
      ];
    e.moveTo(s[0], o[0]),
      e.lineTo(s[1], o[1]),
      e.lineTo(s[2], o[2]),
      e.lineTo(s[0], o[0]);
  }
  static squareBracket(e, t, i) {
    var a = FIELD.tileWidth,
      r = FIELD.tileHeight;
    e.moveTo((t + 0.1) * a, (i - 1.2) * r),
      e.lineTo((t - 0.1) * a, (i - 1.2) * r),
      e.lineTo((t - 0.1) * a, (i + 1.2) * r),
      e.lineTo((t + 0.1) * a, (i + 1.2) * r),
      e.moveTo((t + 0.7) * a, (i - 1.2) * r),
      e.lineTo((t + 0.9) * a, (i - 1.2) * r),
      e.lineTo((t + 0.9) * a, (i + 1.2) * r),
      e.lineTo((t + 0.7) * a, (i + 1.2) * r);
  }
  static checkFlipAlign() {
    for (var e = IBOARD.gateList, t = !0, i = 0; i < e.length; i++)
      if ("qFlip" === e[i].type && 0 === e[i].layer) {
        var a = Math.round((e[i].rot / Math.PI) * 8);
        a < 0 && (a += 16),
          a > 15 && (a -= 16),
          console.log(a),
          (0 !== a && 4 !== a && 8 !== a && 12 !== a) || (t = !1);
      }
    return t;
  }
  static countGates(e = 0) {
    for (var t = IBOARD.gateList, i = 0, a = 0; a < t.length; a++) {
      var r = !0;
      "cCreate" === t[a].type && 0 !== t[a].state
        ? (r = !1)
        : "qCreate" === t[a].type
          ? (r = !1)
          : "compare" === t[a].type || "qCompare" === t[a].type
            ? (r = !1)
            : 0 !== t[a].layer && (r = !1),
        e && e.indexOf(t[a].type) < 0 && (r = !1),
        r && (i += 1);
    }
    return i;
  }
  static boundAngle(e) {
    var t = 1e-4;
    return (
      e <= -Math.PI + t && (e += 2 * Math.PI),
      e > Math.PI + t && (e -= 2 * Math.PI),
      e
    );
  }
  static resetBackground() {
    document.getElementById("overback").style.display = "block";
  }
  static coordFromDir(e, t) {
    var i = e.i0,
      a = e.j0;
    if (0 === t) i -= 1;
    else if (1 === t) a -= 1;
    else if (2 === t) i += 1;
    else {
      if (3 !== t) return 0;
      a += 1;
    }
    return { i1: i, j1: a };
  }
  static getTileEdge(e, t, i) {
    var a = e + t * i._width,
      r = i._tiles[a];
    if (r < 0) return 0;
    var s = Math.floor(r / 20),
      o = r % 20;
    if (s < 6) var n = TILE_EDGES[s][o];
    else n = 0;
    return n;
  }
  static pathFromCoord(e, t, i = !0) {
    for (var a = "M " + e[0] + " " + t[0], r = 1; r < e.length; r++)
      a += " L " + e[r] + " " + t[r];
    return (a += i ? " Z" : " "), a;
  }
  static roundRect(e, t, i, a, r) {
    var s = [e, e, e + i, e + i],
      o = [t, t + a, t + a, t],
      n = [r, r, r, r];
    return new Path2D(Helper.makeRoundedPath(s, o, n));
  }
  static makeCurve(e, t, i, a, r) {
    var s = i - e,
      o = a - t,
      n = e + s / 2,
      l = t + o / 2,
      h = Math.atan2(o, s),
      d = n - Math.sin(h) * r,
      u = l - Math.cos(h) * r,
      c = " ";
    return (c += "Q " + d + " " + u + " " + i + " " + a), c;
  }
  static makeRoundedPath(e, t, i, a = 1, r = 0, s = 0) {
    var o = "",
      n = e.length,
      l = 0,
      h = 0,
      d = 0,
      u = 0,
      c = 0,
      I = 0,
      E = 0,
      S = 0,
      f = 0,
      p = 0,
      T = 0,
      R = 0,
      m = 0;
    if (((r *= a), (s *= a), 0 === i[0])) {
      o = o + "M " + (a * e[0] + r) + " " + (a * t[0] + s);
      var g = a * e[0] + r,
        A = a * t[0] + s;
    } else {
      (l = e[0] - e[n - 1]),
        (h = t[0] - t[n - 1]),
        (d = Math.sqrt(l ** 2 + h ** 2)),
        (u = e[0] - e[1]),
        (c = t[0] - t[1]),
        (I = Math.sqrt(u ** 2 + c ** 2)),
        (E = i[0]),
        E > d && (E = d),
        E > I && (E = I),
        (S = e[n - 1] + ((d - E) / d) * l),
        (f = t[n - 1] + ((d - E) / d) * h),
        (p = e[1] + ((I - E) / I) * u),
        (T = t[1] + ((I - E) / I) * c),
        (m = Math.atan2(c, u) - Math.atan2(h, l)),
        m < 0 && (m += 2 * Math.PI),
        (R = m > Math.PI ? 1 : 0),
        (o = o + " M " + (a * S + r) + " " + (a * f + s)),
        (o =
          o +
          " a " +
          a * E * Math.tan(m / 2) +
          " " +
          a * E * Math.tan(m / 2) +
          " 0 0 " +
          R +
          " " +
          a * (p - S) +
          " " +
          a * (T - f));
      (g = a * S + r), (A = a * f + s);
    }
    for (var C = 1; C < n - 1; C++)
      0 === i[C]
        ? (o = o + " L " + (a * e[C] + r) + " " + (a * t[C] + s))
        : ((l = e[C] - e[C - 1]),
          (h = t[C] - t[C - 1]),
          (d = Math.sqrt(l ** 2 + h ** 2)),
          (u = e[C] - e[C + 1]),
          (c = t[C] - t[C + 1]),
          (I = Math.sqrt(u ** 2 + c ** 2)),
          (E = i[C]),
          E > d && (E = d),
          E > I && (E = I),
          (S = e[C - 1] + ((d - E) / d) * l),
          (f = t[C - 1] + ((d - E) / d) * h),
          (p = e[C + 1] + ((I - E) / I) * u),
          (T = t[C + 1] + ((I - E) / I) * c),
          (m = Math.atan2(c, u) - Math.atan2(h, l)),
          m < 0 && (m += 2 * Math.PI),
          (R = m > Math.PI ? 1 : 0),
          (o = o + " L " + (a * S + r) + " " + (a * f + s)),
          (o =
            o +
            " a " +
            a * E * Math.tan(m / 2) +
            " " +
            a * E * Math.tan(m / 2) +
            " 0 0 " +
            R +
            " " +
            a * (p - S) +
            " " +
            a * (T - f)));
    return (
      0 === i[n - 1]
        ? (o = o + " L " + (a * e[n - 1] + r) + " " + (a * t[n - 1] + s))
        : ((l = e[n - 1] - e[n - 2]),
          (h = t[n - 1] - t[n - 2]),
          (d = Math.sqrt(l ** 2 + h ** 2)),
          (u = e[n - 1] - e[0]),
          (c = t[n - 1] - t[0]),
          (I = Math.sqrt(u ** 2 + c ** 2)),
          (E = i[n - 1]),
          E > d && (E = d),
          E > I && (E = I),
          (S = e[n - 2] + ((d - E) / d) * l),
          (f = t[n - 2] + ((d - E) / d) * h),
          (p = e[0] + ((I - E) / I) * u),
          (T = t[0] + ((I - E) / I) * c),
          (m = Math.atan2(c, u) - Math.atan2(h, l)),
          m < 0 && (m += 2 * Math.PI),
          (R = m > Math.PI ? 1 : 0),
          (o = o + " L " + (a * S + r) + " " + (a * f + s)),
          (o =
            o +
            " a " +
            a * E * Math.tan(m / 2) +
            " " +
            a * E * Math.tan(m / 2) +
            " 0 0 " +
            R +
            " " +
            a * (p - S) +
            " " +
            a * (T - f))),
      (o = o + " L " + g + " " + A + " "),
      o
    );
  }
  static parseTextColored(e, t, i) {
    var r = [],
      s = [],
      o = [],
      n = [],
      l = [],
      h = [];

    var d = "",
      u = "",
      c = "",
      I = "",
      E = "",
      S = "",
      m = "";

    var p = [],
      g = "w",
      w = /\$\$([rgbdpw]):/g,
      f = 0,
      x = null;
    for (; (x = w.exec(t)); ) {
      var y = t.slice(f, x.index);
      for (var C of Array.from(y)) p.push({ ch: C, color: g });
      g = x[1];
      f = w.lastIndex;
    }
    y = t.slice(f);
    for (var L of Array.from(y)) p.push({ ch: L, color: g });

    for (var y = 0; y < p.length; y++) {
      var C = p[y];
      var L = e.measureText(m + C.ch).width;
      if (L < i) {
        m += C.ch;
        d += "w" === C.color ? C.ch : " ";
        u += "r" === C.color ? C.ch : " ";
        c += "g" === C.color ? C.ch : " ";
        I += "b" === C.color ? C.ch : " ";
        E += "d" === C.color ? C.ch : " ";
        S += "p" === C.color ? C.ch : " ";
      } else {
        r.push(d);
        s.push(u);
        o.push(c);
        n.push(I);
        l.push(E);
        h.push(S);
        m = C.ch;
        d = "w" === C.color ? C.ch : " ";
        u = "r" === C.color ? C.ch : " ";
        c = "g" === C.color ? C.ch : " ";
        I = "b" === C.color ? C.ch : " ";
        E = "d" === C.color ? C.ch : " ";
        S = "p" === C.color ? C.ch : " ";
      }
    }

    r.push(d);
    s.push(u);
    o.push(c);
    n.push(I);
    l.push(E);
    h.push(S);

    return [r, s, o, n, l, h];
  }
  static parseText(e, t, i) {
    var r = [];
    if (!t) return r;
    var s = Array.from(t)[0];
    for (var o = 1, a = Array.from(t); o < a.length; o++) {
      var n = a[o],
        l = e.measureText(s + n).width;
      l < i ? (s += n) : (r.push(s), (s = n));
    }
    return r.push(s), r;
  }
  static dist(e, t) {
    return Math.sqrt(e ** 2 + t ** 2);
  }
  static distsqd(e, t) {
    return e ** 2 + t ** 2;
  }
  static inner(e, t) {
    for (var i = e.length, a = 0, r = 0; r < i; r++) a += e[r] * t[r];
    return a;
  }
  static clearCanvas(e) {
    var t = e.width,
      i = e.height;
    e.getContext("2d").clearRect(0, 0, t, i), e.getContext("2d").save();
  }
}
