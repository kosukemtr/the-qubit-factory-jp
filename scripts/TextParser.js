class TextParser {
  static box(e, t, i) {
    var a = t.split(" "),
      r = [],
      s = a[0];
    if ("$" === s[0] && "$" === s[1]) var o = s.slice(7);
    else {
      s = "$$w40r:" + s;
      o = s.slice(7);
    }
    for (
      var n = o, l = [s], h = e.measureText("| ").width, d = 0, u = 1;
      u < a.length;
      u++
    ) {
      s = a[u];
      if ("$" === s[0] && "$" === s[1]) o = s.slice(7);
      else {
        s = "$$w40r:" + s;
        o = s.slice(7);
      }
      var c = o.slice(-1);
      "|" === c && (d += 1);
      var I = e.measureText(n + " " + o + " ").width - d * h;
      I < i
        ? ((n = n + " " + o), l.push(s))
        : (r.push(l), (n = o), (l = [s]), (d = 0));
    }
    return r.push(l), r;
  }
  static process(e) {
    for (var t = [], i = [], a = 0; a < e.length; a++) {
      for (var r = 0, s = [], o = 0; o < e[a].length; o++) {
        var n = e[a][o],
          l = n.slice(-1);
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
            "|" === R ? (T = T.slice(0, -1)) : (T += " ");
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
            c = 0;
          "|" === R ? (T = T.slice(0, -1)) : (T += " "),
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
          R = T.slice(-1);
        "|" === R ? (T = T.slice(0, -1)) : (T += " "),
          e.fillText(T, m, d),
          (m += e.measureText(T).width);
      }
      (h += o[u]), 0 === l[u] ? (d += ROBOT.lineGap) : (d += ROBOT.paraGap);
    }
  }
}
