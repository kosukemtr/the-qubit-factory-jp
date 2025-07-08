class TextParser {
  static box(e, t, i) {
    var r = [];

    function clean(n) {
      "^" === n.slice(-1) && (n = n.slice(0, -1));
      "|" === n.slice(-1) && (n = n.slice(0, -1));
      return n;
    }

    function addWord(prefix, word) {
      var w = word;
      if (e.measureText(clean(w)).width > i) {
        var endPipe = !1;
        "|" === w.slice(-1) && ((endPipe = !0), (w = w.slice(0, -1)));
        for (var ch of Array.from(w)) processed.push(prefix + ch + "^");
        endPipe && (processed[processed.length - 1] += "|");
      } else processed.push(prefix + w);
    }

    var processed = [],
      m = 0;
    for (; m < t.length; ) {
      if (" " === t[m]) {
        m += 1;
        continue;
      }
      var prefix = "$$w40r:";
      if ("$" === t[m] && "$" === t[m + 1]) {
        prefix = t.slice(m, m + 7);
        m += 7;
      }
      for (
        var start = m;
        m < t.length &&
        " " !== t[m] &&
        !("$" === t[m] && "$" === t[m + 1]);
      )
        m += 1;
      addWord(prefix, t.slice(start, m));
      " " === t[m] && m++;
    }
    if (0 === processed.length) return r;

    function wordWidth(w) {
      var txt = clean(w.slice(7)),
        end = w.slice(7).slice(-1);
      "^" === end && (end = w.slice(7).slice(-2, -1));
      var width = e.measureText(txt).width;
      "|" !== end && "^" !== end && (width += e.measureText(" ").width);
      return width;
    }

    for (var s = processed[0], l = [s], width = wordWidth(s), u = 1; u < processed.length; u++) {
      s = processed[u];
      var wW = wordWidth(s);
      width + wW > i && (r.push(l), (l = []), (width = 0));
      l.push(s);
      width += wW;
      if ("|" === s.slice(7).slice(-1)) (r.push(l), (l = []), (width = 0));
    }
    l.length && r.push(l);
    return r;
  }
  static process(e) {
    for (var t = [], i = [], a = 0; a < e.length; a++) {
      for (var r = 0, s = [], o = 0; o < e[a].length; o++) {
        var n = e[a][o],
          l = n.slice(-1);
        "^" === l && ((n = n.slice(0, -1)), (l = n.slice(-1)));
        "|" === l && (n = n.slice(0, -1));
        var h = parseInt(n[3]),
          d = 4 * parseInt(n[4]),
          u = (4 / h) * (n.length - 6) + d;
        ("." !== n[n.length - 1] &&
          '"' !== n[n.length - 1] &&
          "?" !== n[n.length - 1] &&
          "!" !== n[n.length - 1]) ||
          (u += RTIMER.sentenceTime),
          (";" !== n[n.length - 1] &&
            ":" !== n[n.length - 1] &&
            "," !== n[n.length - 1]) ||
            (u += 0.5 * RTIMER.sentenceTime),
          (r += u),
          s.push(u);
      }
      t.push(r), i.push(s);
    }
    return { line: t, word: i };
  }
  static draw(e, t, i, a, r, s, o, n, l = 0) {
    l || (l = new Array(s.length).fill(0));
    for (var h = 0, d = i, u = 0; u < s.length; u++) {
      var c = 0;
      if (!(r > h + o[u])) {
        m = t;
        var I = h;
        for (g = 0; g < s[u].length; g++) {
          if (!(r > I + n[u][g])) {
            var E = s[u][g],
              S = parseInt(E[3]),
              f = (4 / S) * (E.length - 6);
            (T = s[u][g].slice(7)), (R = T.slice(-1));
            var N = !1;
            "^" === R && ((N = !0), (T = T.slice(0, -1)), (R = T.slice(-1)));
            "|" === R ? (T = T.slice(0, -1)) : N || (T += " ");
            var p = Math.max(0, Math.min(1, (r - I) / f));
            c = Math.floor(p * T.length);
            (e.fillStyle = "antiquewhite"),
              "r" === E[2]
                ? (e.fillStyle = "#ff4551")
                : "b" === E[2]
                  ? (e.fillStyle = "cornflowerblue")
                  : "d" === E[2]
                    ? (e.fillStyle = "goldenrod")
                    : "g" === E[2]
                      ? (e.fillStyle = "limegreen")
                      : (e.fillStyle = "antiquewhite"),
              e.fillText(T.slice(0, c), m, d);
            break;
          }
          var T = s[u][g].slice(7),
            R = T.slice(-1),
            c = 0,
            N = !1;
          "^" === R && ((N = !0), (T = T.slice(0, -1)), (R = T.slice(-1)));
          "|" === R ? (T = T.slice(0, -1)) : N || (T += " "),
            "r" === s[u][g][2]
              ? (e.fillStyle = "#ff4551")
              : "b" === s[u][g][2]
                ? (e.fillStyle = "cornflowerblue")
                : "d" === s[u][g][2]
                  ? (e.fillStyle = "goldenrod")
                  : "g" === s[u][g][2]
                    ? (e.fillStyle = "limegreen")
                    : (e.fillStyle = "antiquewhite"),
            e.fillText(T, m, d),
            (m += e.measureText(T).width),
            (I += n[u][g]);
        }
        STATE.lastLetter !== c &&
          OPTS.sfxOn &&
          ("levelSelect" === ROBOT.oldMode
            ? SFX.fbeep.play()
            : SFX.mbeep.play()),
          (STATE.lastLetter = c);
        break;
      }
      1;
      for (var m = t, g = 0; g < s[u].length; g++) {
        "r" === s[u][g][2]
          ? (e.fillStyle = "#ff4551")
          : "b" === s[u][g][2]
            ? (e.fillStyle = "cornflowerblue")
            : "d" === s[u][g][2]
              ? (e.fillStyle = "goldenrod")
              : "g" === s[u][g][2]
                ? (e.fillStyle = "limegreen")
                : (e.fillStyle = "antiquewhite");
        var T = s[u][g].slice(7),
          R = T.slice(-1),
          N = !1;
        "^" === R && ((N = !0), (T = T.slice(0, -1)), (R = T.slice(-1)));
        "|" === R ? (T = T.slice(0, -1)) : N || (T += " "),
          e.fillText(T, m, d),
          (m += e.measureText(T).width);
      }
      (h += o[u]), 0 === l[u] ? (d += ROBOT.lineGap) : (d += ROBOT.paraGap);
    }
  }
}
