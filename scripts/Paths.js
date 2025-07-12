class Paths {
  static undoButton(e, t, i = !1) {
    var a = e.createRadialGradient(16, 16, 0, 16, 16, 16);
    i
      ? (a.addColorStop(0, "#00b0b0"), a.addColorStop(1, "#364f4f"))
      : (a.addColorStop(0, "darkcyan"), a.addColorStop(1, "#2a3d3d"));
    var r = "#021200",
      s = new Tile("undoButton", 32, 32),
      o = new Path2D(
        "M 0 16 l 0 -4 a 12 12 0 0 1 12 -12 l 8 0 a 12 12 0 0 1 12 12 l 0 4",
      );
    s.addPathRaw(o, a, "black", 0.5, 0, "round", "none", "none");
    o = new Path2D("M 0 16 L 32 16");
    s.addPathRaw(o, "none", "black", 1, 0, "round", "none", "none");
    o = new Path2D("M 5 10 L 10 6 L 10 14 Z");
    s.addPathRaw(o, "#003636", r, 0.5, 0, "round", "none", "none");
    o = new Path2D("M 21 10 L 26 6 L 26 14 Z");
    return (
      s.addPathRaw(o, "#003636", r, 0.5, 0, "round", "none", "none"),
      s.addText(String(t), { x: 16, y: 10 }, r, 12, "Verdana, 'Noto Sans JP'", "normal", 0),
      s
    );
  }
  static redoButton(e, t, i = !1) {
    var a = e.createRadialGradient(16, 16, 0, 16, 16, 16);
    i
      ? (a.addColorStop(0, "#00b0b0"), a.addColorStop(1, "#364f4f"))
      : (a.addColorStop(0, "darkcyan"), a.addColorStop(1, "#2a3d3d"));
    var r = "#021200",
      s = new Tile("redoButton", 32, 32),
      o = new Path2D(
        "M 0 16 l 0 -4 a 12 12 0 0 1 12 -12 l 8 0 a 12 12 0 0 1 12 12 l 0 4",
      );
    s.addPathRaw(o, a, "black", 0.5, 0, "round", "none", "none");
    o = new Path2D("M 0 16 L 32 16");
    s.addPathRaw(o, "none", "black", 1, 0, "round", "none", "none");
    o = new Path2D("M 6 6 L 6 14 L 11 10 Z");
    s.addPathRaw(o, "#003636", r, 0.5, 0, "round", "none", "none");
    o = new Path2D("M 22 6 L 22 14 L 27 10 Z");
    return (
      s.addPathRaw(o, "#003636", r, 0.5, 0, "round", "none", "none"),
      s.addText(
        String(t),
        { x: 16, y: 10 },
        "black",
        12,
        "Verdana, 'Noto Sans JP'",
        "normal",
        0,
      ),
      s
    );
  }
  static monitorKnob(e) {
    var t = e.createRadialGradient(12, 12, 0, 12, 12, 24);
    t.addColorStop(1, "#0e1818"), t.addColorStop(0, "darkslategrey");
    var i = new Tile("monitorKnob", 32, 32),
      a = new Path2D("M 4 16 a 12 12 0 0 1 24 0 a 12 12 0 0 1 -24 0");
    return i.addPathRaw(a, t, "black", 1.5, 0, "round", "none", "none"), i;
  }
  static journalButton(e, t = !1) {
    var i = e.createRadialGradient(12, 12, 0, 12, 12, 24);
    t
      ? (i.addColorStop(0, "bisque"), i.addColorStop(1, "goldenrod"))
      : (i.addColorStop(0, "#d9b14c"), i.addColorStop(1, "darkgoldenrod"));
    var a = new Tile("latterButton", 32, 32),
      r = new Path2D(
        "M 0 12 a 12 12 0 0 1 12 -12 L 20 0 a 12 12 0 0 1 12 12 L 32 20 a 12 12 0 0 1 -12 12 L 12 32 a 12 12 0 0 1 -12 -12 Z",
      );
    return (
      a.addPathRaw(r, i, "black", 1.5, 0, "round", "black", "none"),
      a.addText("J", { x: 16, y: 16 }, "black", 36, "'Courier New', 'Noto Sans Mono CJK JP'", "normal", 0),
      a
    );
  }
  static archiveButton(e, t = !1) {
    var i = e.createRadialGradient(12, 12, 0, 12, 12, 24);
    t
      ? (i.addColorStop(0, "bisque"), i.addColorStop(1, "goldenrod"))
      : (i.addColorStop(0, "#d9b14c"), i.addColorStop(1, "darkgoldenrod"));
    var a = new Tile("latterButton", 32, 32),
      r = new Path2D(
        "M 0 12 a 12 12 0 0 1 12 -12 L 20 0 a 12 12 0 0 1 12 12 L 32 20 a 12 12 0 0 1 -12 12 L 12 32 a 12 12 0 0 1 -12 -12 Z",
      );
    return (
      a.addPathRaw(r, i, "black", 1.5, 0, "round", "black", "none"),
      a.addText("A", { x: 16, y: 16 }, "black", 36, "'Courier New', 'Noto Sans Mono CJK JP'", "normal", 0),
      a
    );
  }
  static selectButtons(e, t = "", i = !1) {
    var a = e.createRadialGradient(12, 12, 0, 12, 12, 24);
    i
      ? (a.addColorStop(0, "#00d4d4"), a.addColorStop(1, "#507575"))
      : (a.addColorStop(0, "darkcyan"), a.addColorStop(1, "#2a3d3d"));
    var r = new Tile("selectButton", 32, 32),
      s = new Path2D(
        "M 0 8 a 8 8 0 0 1 8 -8 L 24 0 a 8 8 0 0 1 8 8 L 32 24 a 8 8 0 0 1 -8 8 L 8 32 a 8 8 0 0 1 -8 -8 Z",
      );
    return (
      r.addPathRaw(s, a, "none", 1.5, 0, "round", "black"),
      r.addPathRaw(s, "none", "black", 2, 0, "round"),
      r.addText(t, { x: 16, y: 16 }, "black", 32, "'Courier New', 'Noto Sans Mono CJK JP'", "normal", 0),
      r
    );
  }
  static letterButton(e, t = 0, i = !1) {
    var a = ["H", "B", "R", "C", "A"],
      r = e.createRadialGradient(12, 12, 0, 12, 12, 24);
    i
      ? (r.addColorStop(0, "#00d4d4"), r.addColorStop(1, "#507575"))
      : (r.addColorStop(0, "darkcyan"), r.addColorStop(1, "#2a3d3d"));
    var s = new Tile("letterButton", 32, 32),
      o = new Path2D(
        "M 0 8 a 8 8 0 0 1 8 -8 L 24 0 a 8 8 0 0 1 8 8 L 32 24 a 8 8 0 0 1 -8 8 L 8 32 a 8 8 0 0 1 -8 -8 Z",
      );
    return (
      s.addPathRaw(o, r, "black", 1.5, 0, "round", "black"),
      s.addText(
        a[t],
        { x: 16, y: 16 },
        "black",
        36,
        "'Courier New', 'Noto Sans Mono CJK JP'",
        "normal",
        0,
      ),
      s
    );
  }
  static blueprint(e, t = 0, i = !1, a = 0) {
    if (0 === t)
      var r = "#374a52",
        s = "#60818E",
        o = "#82b0c4",
        n = "#27353b";
    else if (1 === t)
      (r = "#4e5d7a"), (s = "#6d83ad"), (o = "#8ba9e0"), (n = "#2e384a");
    else if (2 === t)
      (r = "#4a4875"), (s = "#625f9c"), (o = "#7571bd"), (n = "#25243b");
    i && (o = flashColor(o, 0.3));
    var l = e.createLinearGradient(0, 0, 32, 0);
    l.addColorStop(0, r),
      l.addColorStop(0.25, s),
      l.addColorStop(0.75, s),
      l.addColorStop(1, r);
    var h = e.createLinearGradient(0, 0, 32, 0);
    h.addColorStop(0, s), h.addColorStop(0.5, o), h.addColorStop(1, s);
    var d = new Tile("blueprint", 32, 32),
      u = new Path2D(
        "M 4 12 L 4 24 a 4 4 0 0 0 4 4 L 24 28 a 4 4 0 0 0 4 -4 L 28 12 Z",
      );
    d.addPathRaw(u, h, n, 0.5, 0, "round");
    u = new Path2D("M 10 4 a 6 4 0 0 0 -6 4 L 4 24 a 6 4 0 0 1 6 -4 Z");
    d.addPathRaw(u, l, n, 0.5, 0, "round");
    u = new Path2D("M 22 4 a 6 4 0 0 1 6 4 L 28 24 a 6 4 0 0 0 -6 -4 Z");
    if ((d.addPathRaw(u, l, n, 0.5, 0, "round"), 0 === a)) {
      u = new Path2D(
        "M 20 24 L 8 24 M 12 24 L 20 16 M 12 16 L 20 24 M 12 16 L 20 16",
      );
      d.addPathRaw(u, "none", "#4e6d7a", 1, 0, "round");
    } else if (1 === a) {
      u = new Path2D(
        "M 20 24 L 8 24 M 12 24 L 20 16 M 12 16 L 16 20 M 20 24 L 20 20 M 12 16 L 20 16",
      );
      d.addPathRaw(u, "none", "#4e6d7a", 1, 0, "round");
    } else if (2 === a) {
      u = new Path2D(
        "M 20 24 L 8 24 M 12 24 L 20 16 M 20 24 L 20 16 M 12 16 L 20 16",
      );
      d.addPathRaw(u, "none", "#354b54", 1, 0, "round");
    } else {
      u = new Path2D("M 20 24 L 8 24 L 16 16 L 16 24 M 12 16 L 20 16");
      d.addPathRaw(u, "none", "#4e6d7a", 1, 0, "round");
    }
    return d;
  }
  static flares(e, t, i) {
    var a = new Tile("flares", 32, 32),
      r = 5 * Math.sqrt(Math.sin((Math.PI * (2 * (i - 0.5))) / 2.5)),
      s = 100;
    if (i > 0.5)
      for (var o = 0; o < s; o++) {
        var n = FLARES.colors[Math.floor(5 * FLARES.elms[t + 3 + 4 * o])],
          l = 4 * FLARES.dotsizes[t + 4 * o],
          h = l + 5 * r * FLARES.dotsizes[t + 1 + 4 * o],
          d = 2 * Math.PI * FLARES.elms[t + 2 + 4 * o],
          u = 16 + h * Math.sin(d),
          c = 16 - h * Math.cos(d);
        if (i < FLARES.lifetimes[t + 4 * o - 1]) var I = 1;
        else I = Math.exp(20 * (FLARES.lifetimes[t + 4 * o - 1] - i));
        var E = new Path2D("M " + u + " " + c + " L " + u + " " + c);
        a.addPathRaw(
          E,
          "none",
          n,
          4 * FLARES.dotsizes[t + 4 * o - 1],
          0,
          "round",
          "none",
          "none",
          0,
          0,
          [],
          I,
        );
      }
    return a;
  }
  static entryPortal(e, t, i = 0) {
    var a = e.createLinearGradient(0, 0, 32, 0);
    a.addColorStop(0, "#333"),
      a.addColorStop(0.5, "#666"),
      a.addColorStop(1, "#333");
    var r = new Tile("entryPortal", 32, 32),
      s = new Path2D("M 4 0 L 28 0 L 28 6 L 4 6 Z");
    if (
      (r.addPathRaw(s, a, "none", 1, t, "round", "none", "none", 0), 0 === i)
    ) {
      s = new Path2D(
        "M 4.5 0.5 L 9.5 5.5 M 27.5 0.5 L 22.5 5.5 M 9.5 0.5 L 14.5 5.5 M 22.5 0.5 L 17.5 5.5 M 14.5 0.5 L 17.5 0.5 L 16 3 L 14.5 0.5",
      );
      r.addPathRaw(s, "none", "#30473e", 2, t, "butt", "none", "none", 0);
    } else if (1 === i) {
      s = new Path2D(
        "M 4.5 5.5 L 9.5 0.5 M 27.5 5.5 L 22.5 0.5 M 9.5 5.5 L 14.5 0.5 M 22.5 5.5 L 17.5 0.5 M 14.5 5.5 L 17.5 5.5 L 16 3 L 14.5 5.5",
      );
      r.addPathRaw(s, "none", "#30473e", 2, t, "butt", "none", "none", 0);
    }
    s = new Path2D(
      Helper.makeRoundedPath([4, 28, 28, 4], [0, 0, 6, 6], [3, 3, 3, 3]),
    );
    return (
      r.addPathRaw(s, "none", "#1c1f1c", 1, t, "round", "none", "none", 0), r
    );
  }
  static wormholes(e, t, i = 0) {
    var a = new Tile("wormholes", 32, 32);
    if (t < 0.5) var r = 22 * t;
    else r = 11;
    if (t < 0.75) var s = 2;
    else s = 8 * (1 - t);
    if (1 === i) var o = "turquoise";
    else o = "tan";
    var n = new Path2D(
      "M 16 " +
        (16 - r) +
        " a " +
        r +
        " " +
        r +
        "  0 0 1 0 " +
        2 * r +
        " a " +
        r +
        " " +
        r +
        "  0 0 1 0 " +
        -2 * r,
    );
    return a.addPathRaw(n, "none", o, s, 2 * t, "butt", "none", "none", 0), a;
  }
  static sparkBonus(e, t, i) {
    var a = new Tile("sparkBonus", 32, 32);
    if (0 === t) {
      var r = "M 14 0 L 14 13 L 8 13 L 18 32 L 18 19 L 24 19 Z";
      a.addPathRaw(
        new Path2D(r),
        "turquoise",
        "#001e8b",
        2,
        i,
        "round",
        "none",
        "none",
        2,
      );
    } else if (1 === t) {
      r = "M 18 0 L 18 13 L 24 13 L 14 32 L 14 19 L 8 19 Z";
      a.addPathRaw(
        new Path2D(r),
        "turquoise",
        "#001e8b",
        2,
        i,
        "round",
        "none",
        "none",
        2,
      );
    }
    return a;
  }
  static starBonus(e, t, i) {
    for (
      var a = new Tile("starBonus", 32, 32), r = 16, s = "M ", o = 0;
      o < 5;
      o++
    )
      (s += 16 + r * Math.sin((2 * Math.PI * o) / 5)),
        (s += " "),
        (s += 16 - r * Math.cos((2 * Math.PI * o) / 5)),
        (s += " L "),
        (s += 16 + 0.5 * r * Math.sin((2 * Math.PI * (o + 0.5)) / 5)),
        (s += " "),
        (s += 16 - 0.5 * r * Math.cos((2 * Math.PI * (o + 0.5)) / 5)),
        (s += o < 4 ? " L " : " Z");
    return (
      0 === t
        ? a.addPathRaw(
            new Path2D(s),
            "gold",
            "darkgoldenrod",
            2,
            i,
            "round",
            "none",
            "none",
            2,
          )
        : a.addPathRaw(
            new Path2D(s),
            "none",
            "darkgoldenrod",
            2,
            i,
            "round",
            "none",
            "none",
            2,
          ),
      a
    );
  }
  static scannersFinish(e, t) {
    var i = new Tile("scannersFinish", 32, 32),
      a = 1e-5;
    if (t < a) var r = 1 / a;
    else r = 16 / t;
    var s = new Path2D("M 0 0 a " + r + " " + r + " 0 0 0 32 0 Z");
    return i.addPathRaw(s, "black", "none", 1, 0, "butt", "none", "none", 2), i;
  }
  static scannersSmall(e, t, i, a = 0) {
    var r = "black",
      s = new Tile("scannersSmall", 32, 32),
      o = 10.5;
    if (t > 0.1 && t < 0.9) {
      var n = 16,
        l = 16 - o * Math.sin((t + 0.01) * Math.PI),
        h = 16 + o * Math.sin((t + 0.01) * Math.PI),
        d = 16 - o * Math.cos((t + 0.01) * Math.PI),
        u = e.createLinearGradient(d - n / 2, 16, d + n / 2, 16);
      0 === a
        ? (u.addColorStop(0, "rgba(255,255,255,0.0)"),
          u.addColorStop(0.2, "rgba(0,0,255,0.2)"),
          u.addColorStop(0.5, "cyan"),
          u.addColorStop(0.8, "rgba(0,0,255,0.2)"),
          u.addColorStop(1, "rgba(255,255,255,0.0)"))
        : (u.addColorStop(0, "rgba(255,255,255,0.0)"),
          u.addColorStop(0.2, "rgba(0,0,255,0.2)"),
          u.addColorStop(0.5, "fuchsia"),
          u.addColorStop(0.8, "rgba(0,0,255,0.2)"),
          u.addColorStop(1, "rgba(255,255,255,0.0)"));
      var c = new Path2D(
        "M " +
          (d - n / 2) +
          " " +
          l +
          " L " +
          (d - n / 2) +
          " " +
          h +
          " L " +
          (d + n / 2) +
          " " +
          h +
          " L " +
          (d + n / 2) +
          " " +
          l +
          " Z",
      );
      s.addPathRaw(c, u, "none", 1, i, "butt", "none", "none", 2);
    }
    o = 10;
    if (t <= 0.1) {
      var I = 16 - o * Math.cos(0),
        E = 16 - o * Math.cos(0.75),
        S = 16 - o * Math.sin(0),
        f = 16 - o * Math.sin(0.75),
        p = 16 + o * Math.sin(0.75),
        T = o - 9 * Math.sqrt(10 * t);
      c = new Path2D(
        "M " +
          I +
          " " +
          S +
          " a 10 10 0 0 1 " +
          (E - I) +
          " " +
          (f - S) +
          " a " +
          T +
          " " +
          T +
          " 0 0 0 " +
          (I - E) +
          " " +
          (S - f) +
          " Z",
      );
      s.addPathRaw(c, r, "none", 1, i, "butt", "none", "none", 2);
      c = new Path2D(
        "M " +
          I +
          " " +
          S +
          " a 10 10 0 0 0 " +
          (E - I) +
          " " +
          (p - S) +
          " a " +
          T +
          " " +
          T +
          " 0 0 1 " +
          (I - E) +
          " " +
          (S - p) +
          " Z",
      );
      s.addPathRaw(c, r, "none", 1, i, "butt", "none", "none", 2);
    } else if (t >= 0.9) {
      (I = 16 + o * Math.cos(0)),
        (E = 16 + o * Math.cos(0.75)),
        (S = 16 - o * Math.sin(0)),
        (f = 16 - o * Math.sin(0.75)),
        (p = 16 + o * Math.sin(0.75)),
        (T = o - 9 * Math.sqrt(10 * (1 - t))),
        (c = new Path2D(
          "M " +
            I +
            " " +
            S +
            " a 10 10 0 0 0 " +
            (E - I) +
            " " +
            (f - S) +
            " a " +
            T +
            " " +
            T +
            " 0 0 1 " +
            (I - E) +
            " " +
            (S - f) +
            " Z",
        ));
      s.addPathRaw(c, r, "none", 1, i, "butt", "none", "none", 2);
      c = new Path2D(
        "M " +
          I +
          " " +
          S +
          " a 10 10 0 0 1 " +
          (E - I) +
          " " +
          (p - S) +
          " a " +
          T +
          " " +
          T +
          " 0 0 0 " +
          (I - E) +
          " " +
          (S - p) +
          " Z",
      );
      s.addPathRaw(c, r, "none", 1, i, "butt", "none", "none", 2);
    } else {
      (I = 16 - o * Math.cos(Math.PI * (t - 0.1))),
        (E = 16 - o * Math.cos(Math.PI * (t - 0.1) + 0.75)),
        (S = 16 - o * Math.sin(Math.PI * (t - 0.1))),
        (f = 16 - o * Math.sin(Math.PI * (t - 0.1) + 0.75)),
        (p = 16 + o * Math.sin(Math.PI * (t - 0.1)));
      var R = 16 + o * Math.sin(Math.PI * (t - 0.1) + 0.75);
      (T = 1),
        (c = new Path2D(
          "M " +
            I +
            " " +
            S +
            " a 10 10 0 0 1 " +
            (E - I) +
            " " +
            (f - S) +
            " a " +
            T +
            " " +
            T +
            " 0 0 0 " +
            (I - E) +
            " " +
            (S - f) +
            " Z",
        ));
      s.addPathRaw(c, r, "none", 1, i, "butt", "none", "none", 2);
      c = new Path2D(
        "M " +
          I +
          " " +
          p +
          " a 10 10 0 0 0 " +
          (E - I) +
          " " +
          (R - p) +
          " a " +
          T +
          " " +
          T +
          " 0 0 1 " +
          (I - E) +
          " " +
          (p - R) +
          " Z",
      );
      s.addPathRaw(c, r, "none", 1, i, "butt", "none", "none", 2);
    }
    return s;
  }
  static scanners(e, t, i) {
    var a = "black",
      r = new Tile("scanners", 32, 32),
      s = 15;
    if (t > 0.1 && t < 0.9) {
      var o = 16,
        n = 16 - s * Math.sin((t + 0.01) * Math.PI),
        l = 16 + s * Math.sin((t + 0.01) * Math.PI),
        h = 16 - s * Math.cos((t + 0.01) * Math.PI),
        d = e.createLinearGradient(h - o / 2, 16, h + o / 2, 16);
      d.addColorStop(0, "rgba(255,255,255,0.0)"),
        d.addColorStop(0.2, "rgba(255,0,0,0.2)"),
        d.addColorStop(0.5, "rgba(255,205,255,1)"),
        d.addColorStop(0.8, "rgba(255,0,0,0.2)"),
        d.addColorStop(1, "rgba(255,255,255,0.0)");
      var u = new Path2D(
        "M " +
          (h - o / 2) +
          " " +
          n +
          " L " +
          (h - o / 2) +
          " " +
          l +
          " L " +
          (h + o / 2) +
          " " +
          l +
          " L " +
          (h + o / 2) +
          " " +
          n +
          " Z",
      );
      r.addPathRaw(u, d, "none", 1, i, "butt", "none", "none", 2);
    }
    s = 13.5;
    if (t <= 0.1) {
      var c = 16 - s * Math.cos(0),
        I = 16 - s * Math.cos(0.75),
        E = 16 - s * Math.sin(0),
        S = 16 - s * Math.sin(0.75),
        f = 16 + s * Math.sin(0.75),
        p = s - 9 * Math.sqrt(10 * t);
      u = new Path2D(
        "M " +
          c +
          " " +
          E +
          " a 10 10 0 0 1 " +
          (I - c) +
          " " +
          (S - E) +
          " a " +
          p +
          " " +
          p +
          " 0 0 0 " +
          (c - I) +
          " " +
          (E - S) +
          " Z",
      );
      r.addPathRaw(u, a, "none", 1, i, "butt", "none", "none", 2);
      u = new Path2D(
        "M " +
          c +
          " " +
          E +
          " a 10 10 0 0 0 " +
          (I - c) +
          " " +
          (f - E) +
          " a " +
          p +
          " " +
          p +
          " 0 0 1 " +
          (c - I) +
          " " +
          (E - f) +
          " Z",
      );
      r.addPathRaw(u, a, "none", 1, i, "butt", "none", "none", 2);
    } else if (t >= 0.9) {
      (c = 16 + s * Math.cos(0)),
        (I = 16 + s * Math.cos(0.75)),
        (E = 16 - s * Math.sin(0)),
        (S = 16 - s * Math.sin(0.75)),
        (f = 16 + s * Math.sin(0.75)),
        (p = s - 9 * Math.sqrt(10 * (1 - t))),
        (u = new Path2D(
          "M " +
            c +
            " " +
            E +
            " a 10 10 0 0 0 " +
            (I - c) +
            " " +
            (S - E) +
            " a " +
            p +
            " " +
            p +
            " 0 0 1 " +
            (c - I) +
            " " +
            (E - S) +
            " Z",
        ));
      r.addPathRaw(u, a, "none", 1, i, "butt", "none", "none", 2);
      u = new Path2D(
        "M " +
          c +
          " " +
          E +
          " a 10 10 0 0 1 " +
          (I - c) +
          " " +
          (f - E) +
          " a " +
          p +
          " " +
          p +
          " 0 0 0 " +
          (c - I) +
          " " +
          (E - f) +
          " Z",
      );
      r.addPathRaw(u, a, "none", 1, i, "butt", "none", "none", 2);
    } else {
      (c = 16 - s * Math.cos(Math.PI * (t - 0.1))),
        (I = 16 - s * Math.cos(Math.PI * (t - 0.1) + 0.75)),
        (E = 16 - s * Math.sin(Math.PI * (t - 0.1))),
        (S = 16 - s * Math.sin(Math.PI * (t - 0.1) + 0.75)),
        (f = 16 + s * Math.sin(Math.PI * (t - 0.1)));
      var T = 16 + s * Math.sin(Math.PI * (t - 0.1) + 0.75);
      (p = 1),
        (u = new Path2D(
          "M " +
            c +
            " " +
            E +
            " a 10 10 0 0 1 " +
            (I - c) +
            " " +
            (S - E) +
            " a " +
            p +
            " " +
            p +
            " 0 0 0 " +
            (c - I) +
            " " +
            (E - S) +
            " Z",
        ));
      r.addPathRaw(u, a, "none", 1, i, "butt", "none", "none", 2);
      u = new Path2D(
        "M " +
          c +
          " " +
          f +
          " a 10 10 0 0 0 " +
          (I - c) +
          " " +
          (T - f) +
          " a " +
          p +
          " " +
          p +
          " 0 0 1 " +
          (c - I) +
          " " +
          (f - T) +
          " Z",
      );
      r.addPathRaw(u, a, "none", 1, i, "butt", "none", "none", 2);
    }
    return r;
  }
  static fireRing(e, t) {
    var i = Math.sin((t * Math.PI) / 2),
      a = 32 * i,
      r = new Tile("fireRing", 32, 32),
      s = Math.min(1, 2 * (1 - i)),
      o = e.createRadialGradient(16, 16, 0, 16, 16, a);
    o.addColorStop(0, "rgba(0,0,0,0)"),
      o.addColorStop(0.5, "rgba(0,0,0,0)"),
      o.addColorStop(0.6, "rgba(0,0,0,0.5)"),
      o.addColorStop(0.9, "darkorange"),
      o.addColorStop(1, "white");
    var n = new Path2D(
      "M 16 " +
        (16 + a) +
        " a " +
        a +
        " " +
        a +
        " 0 0 1 0 " +
        -2 * a +
        " a " +
        a +
        " " +
        a +
        " 0 0 1 0 " +
        2 * a +
        " Z",
    );
    return (
      r.addPathRaw(n, o, "none", 2, 0, "square", "none", "none", 0, 0, [], s), r
    );
  }
  static compareRing(e, t, i) {
    var a = 24 * t,
      r = new Tile("compareRing", 32, 32),
      s = Math.min(1, 4 * (1 - t));
    if (0 === i) {
      var o = e.createRadialGradient(16, 16, 0, 16, 16, a);
      o.addColorStop(0, "#d93b75"),
        o.addColorStop(0.9, "crimson"),
        o.addColorStop(1, "crimson");
    } else if (1 === i) {
      o = e.createRadialGradient(16, 16, 0, 16, 16, a);
      o.addColorStop(0, "limegreen"),
        o.addColorStop(0.8, "greenyellow"),
        o.addColorStop(0.9, "limegreen"),
        o.addColorStop(1, "#7fff00");
    }
    var n = new Path2D(
      "M 16 " +
        (16 + a) +
        " a " +
        a +
        " " +
        a +
        " 0 0 1 0 " +
        -2 * a +
        " a " +
        a +
        " " +
        a +
        " 0 0 1 0 " +
        2 * a +
        " Z",
    );
    r.addPathRaw(n, o, "none", 2, 0, "butt", "none", "none", 0, 0, [], s);
    var l = Math.max(0, a - 5),
      h = new Path2D(
        "M 16 " +
          (16 + l) +
          " a " +
          l +
          " " +
          l +
          " 0 0 1 0 " +
          -2 * l +
          " a " +
          l +
          " " +
          l +
          " 0 0 1 0 " +
          2 * l +
          " Z",
      );
    return (
      r.addPathRaw(h, "cut", "none", 2, 0, "butt"),
      r.addPathRaw(
        n,
        o,
        "none",
        2,
        0,
        "butt",
        "none",
        "none",
        0,
        0,
        [],
        0.5 * s,
      ),
      r
    );
  }
  static menuGrey(e) {
    var t = new Tile("menuGrey", 32, 32),
      i = new Path2D(
        Helper.makeRoundedPath([0, 0, 32, 32], [0, 32, 32, 0], [6, 6, 6, 6]),
      );
    return (
      t.addPathRaw(
        i,
        "#333",
        "none",
        2,
        0,
        "round",
        "none",
        "none",
        0,
        0,
        [],
        0.85,
      ),
      t
    );
  }
  static place(e, t = !0) {
    var i = new Tile("place", 32, 32),
      a = new Path2D(
        "M 0 5 a 5 5 0 0 1 5 -5 L 27 0 a 5 5 0 0 1 5 5 L 32 27 a 5 5 0 0 1 -5 5 L 5 32 a 5 5 0 0 1 -5 -5 L 0 5 Z",
      );
    return (
      t
        ? i.addPathRaw(
            a,
            "limegreen",
            "none",
            2,
            0,
            "round",
            "none",
            "none",
            0,
            0,
            [],
            0.4,
          )
        : i.addPathRaw(
            a,
            "crimson",
            "none",
            2,
            0,
            "round",
            "none",
            "none",
            0,
            0,
            [],
            0.4,
          ),
      i
    );
  }
  static eraser(e, t = !0) {
    var i = new Tile("place", 32, 32),
      a = new Path2D(
        "M 0 5 a 5 5 0 0 1 5 -5 L 27 0 a 5 5 0 0 1 5 5 L 32 27 a 5 5 0 0 1 -5 5 L 5 32 a 5 5 0 0 1 -5 -5 L 0 5 Z",
      );
    return (
      t
        ? i.addPathRaw(
            a,
            "darkorange",
            "none",
            2,
            0,
            "round",
            "none",
            "none",
            0,
            0,
            [],
            0.4,
          )
        : i.addPathRaw(
            a,
            "crimson",
            "none",
            2,
            0,
            "round",
            "none",
            "none",
            0,
            0,
            [],
            0.4,
          ),
      i
    );
  }
  static hover(e) {
    var t = new Tile("hover", 32, 32),
      i = new Path2D(
        "M 0 5 a 5 5 0 0 1 5 -5 L 27 0 a 5 5 0 0 1 5 5 L 32 27 a 5 5 0 0 1 -5 5 L 5 32 a 5 5 0 0 1 -5 -5 L 0 5 Z",
      );
    return (
      t.addPathRaw(
        i,
        "goldenrod",
        "none",
        2,
        0,
        "round",
        "none",
        "none",
        0,
        0,
        [],
        0.4,
      ),
      t
    );
  }
  static selected(e, t) {
    var i = (4 * Math.PI) / 16,
      a = (4 * Math.PI) / 16,
      r = (i + a) * t,
      s = [];
    if (r < i) s = [r, a, i - r, 0];
    else s = [0, r - i, i, a - (r - i)];
    var o = new Tile("selected", 32, 32),
      n = new Path2D("M 0 16 a 16 16 0 0 0 32 0 a 16 16 0 0 0 -32 0");
    return (
      o.addPathRaw(n, "none", "black", 1, 0, "butt", "none", "none", 2, 0, s),
      o.addPathRaw(
        n,
        "goldenrod",
        "none",
        1,
        0,
        "butt",
        "none",
        "none",
        2,
        0,
        [],
        0.5,
      ),
      o
    );
  }
  static qubitHalo(e) {
    var t = 0.4,
      i = 16 - 16 * Math.cos(t),
      a = 16 - 16 * Math.sin(t),
      r = 16 - 16 * Math.sin(t),
      s = 16 - 16 * Math.cos(t),
      o = new Tile("qubitHalo", 32, 32),
      n = new Path2D("M " + i + " " + r + " A 16 16 0 0 1 " + a + " " + s),
      l = "#694c04",
      h = "gold";
    return (
      o.addPathRaw(
        n,
        "none",
        l,
        2.5,
        0,
        "square",
        "none",
        "darkslategrey",
        2,
        0,
        [],
        1,
      ),
      o.addPathRaw(
        n,
        "none",
        l,
        2.5,
        Math.PI / 2,
        "square",
        "none",
        "darkslategrey",
        2,
        0,
        [],
        1,
      ),
      o.addPathRaw(
        n,
        "none",
        l,
        2.5,
        (2 * Math.PI) / 2,
        "square",
        "none",
        "darkslategrey",
        2,
        0,
        [],
        1,
      ),
      o.addPathRaw(
        n,
        "none",
        l,
        2.5,
        (3 * Math.PI) / 2,
        "square",
        "none",
        "darkslategrey",
        2,
        0,
        [],
        1,
      ),
      o.addPathRaw(n, "none", h, 1, 0, "square", "none", "none", 2, 0, [], 1),
      o.addPathRaw(
        n,
        "none",
        h,
        1,
        Math.PI / 2,
        "square",
        "none",
        "none",
        2,
        0,
        [],
        1,
      ),
      o.addPathRaw(
        n,
        "none",
        h,
        1,
        (2 * Math.PI) / 2,
        "square",
        "none",
        "none",
        2,
        0,
        [],
        1,
      ),
      o.addPathRaw(
        n,
        "none",
        h,
        1,
        (3 * Math.PI) / 2,
        "square",
        "none",
        "none",
        2,
        0,
        [],
        1,
      ),
      o
    );
  }
  static sphere(e, t) {
    var i = flashColor("black", t),
      a = flashColor("#444", t),
      r = flashColor("#666", t),
      s = e.createRadialGradient(8, 8, 1, 16, 16, 16);
    s.addColorStop(0, r), s.addColorStop(0.2, a), s.addColorStop(1, i);
    var o = new Tile("sphere", 32, 32),
      n = new Path2D("M 12 16 a 4 4 0 0 1 8 0 a 4 4 0 0 1 -8 0 Z");
    return (
      o.addPathRaw(
        n,
        s,
        "none",
        2,
        0,
        "butt",
        "lightslategrey",
        "none",
        2,
        0,
        [],
        1,
      ),
      o
    );
  }
  static entMass(e, t, i) {
    var a = e.createRadialGradient(10, 10, 0, 10, 10, 16);
    a.addColorStop(0, "#6edbff"), a.addColorStop(1, "deepskyblue");
    var r = t,
      s = "#666",
      o = "#131313",
      n = "#BBB",
      l = e.createRadialGradient(8, 8, 1, 16, 16, 16);
    l.addColorStop(0, n), l.addColorStop(0.2, o), l.addColorStop(1, s);
    var h = new Tile("entMass", 32, 32),
      d = new Path2D(
        "M 16 " +
          (16 + 14 * r) +
          " a " +
          14 * r +
          " " +
          14 * r +
          " 0 0 1 0 " +
          -28 * r +
          " a " +
          14 * r +
          " " +
          14 * r +
          " 0 0 1 0 " +
          28 * r +
          " Z",
      );
    h.addPathRaw(d, a, "none", 1, 0, "square");
    d = new Path2D("M 16 30 a 14 14 0 0 1 0 -28 a 14 14 0 0 1 0 28 Z");
    return (
      h.addPathRaw(d, "none", "#333", 0.5, 0, "square"),
      h.addText(
        String(Analysis.normFloat2(t)),
        { x: 16, y: 16 },
        "black",
        12,
        "Verdana, 'Noto Sans JP'",
        "normal",
        i,
      ),
      h
    );
  }
  static gear(e, t, i, a) {
    for (
      var r = 10,
        s = 16,
        o = (2 * Math.PI) / i,
        n = 0.1,
        l = 0.1,
        h = "M ",
        d = 0;
      d < i;
      d++
    )
      (h += 16 + r * Math.sin(t + d * o - l) + " "),
        (h += 16 - r * Math.cos(t + d * o - l) + " L "),
        (h += 16 + s * Math.sin(t + d * o + n) + " "),
        (h += 16 - s * Math.cos(t + d * o + n) + " L "),
        (h += 16 + s * Math.sin(t + (d + 0.5) * o - n) + " "),
        (h += 16 - s * Math.cos(t + (d + 0.5) * o - n) + " L "),
        (h += 16 + r * Math.sin(t + (d + 0.5) * o + l) + " "),
        (h += 16 - r * Math.cos(t + (d + 0.5) * o + l)),
        (h += d < i - 1 ? " " : " Z");
    var u = [];
    u.push({
      path: new Path2D(h),
      fill: a,
      stroke: "#111",
      strokeWidth: 1,
      lineCap: "round",
    });
    for (h = "", d = 0; d < i; d++)
      (h += " M " + (16 + 6 * Math.sin(t + (d + 0.25) * o)) + " "),
        (h += 16 - 6 * Math.cos(t + (d + 0.25) * o) + " L "),
        (h += 16 + 10 * Math.sin(t + (d + 0.25) * o) + " "),
        (h += 16 - 10 * Math.cos(t + (d + 0.25) * o));
    u.push({
      path: new Path2D(h),
      stroke: "#111",
      strokeWidth: 1,
      lineCap: "round",
    });
    h = new Path2D("M 16 22 a 6 6 0 0 1 0 -12 a 6 6 0 0 1 0 12 Z");
    u.push({
      path: new Path2D(h),
      stroke: "#111",
      strokeWidth: 1,
      lineCap: "round",
    }),
      u.push({
        path: new Path2D(h),
        stroke: "#777",
        strokeWidth: 0.5,
        lineCap: "round",
      });
    h = new Path2D("M 16 19 a 3 3 0 0 1 0 -6 a 3 3 0 0 1 0 6 Z");
    return (
      u.push({
        path: new Path2D(h),
        fill: "#777",
        stroke: "#111",
        strokeWidth: 0.5,
        lineCap: "round",
      }),
      u
    );
  }
  static newQubit(
    e,
    t,
    i,
    a,
    r = 0,
    s = 0,
    o = [1],
    n = [0],
    l = [1],
    h = !1,
    d = !1,
    u = 1,
  ) {
    if (h)
      var c = flashColor("LightGreen", i),
        I = flashColor("MediumSeaGreen", i),
        E = flashColor("#42c77d", i),
        S = flashColor("DarkOrchid", i),
        f = flashColor("#913191", i);
    else
      (c = flashColor("MediumSeaGreen", i)),
        (I = flashColor("#2b8051", i)),
        (S = flashColor("Indigo", i)),
        (E = flashColor("darkgreen", i)),
        (f = flashColor("#913191", i));
    if (r)
      var p = -24 * Math.cos(-r.rot) + 16,
        T = -24 * Math.sin(-r.rot) + 16,
        R = 24 * Math.cos(-r.rot) + 16,
        m = 24 * Math.sin(-r.rot) + 16;
    if (OPTS.useGrads) {
      if (r) var g = e.createLinearGradient(p, T, R, m);
      else g = e.createLinearGradient(-8, 16, 40, 16);
      g.addColorStop(0, c),
        g.addColorStop(Math.max(a / 2 - 0.2, 0), c),
        g.addColorStop(a / 2, I),
        g.addColorStop(Math.min(a / 2 + 0.2, 1), c),
        g.addColorStop(Math.max(0.5 + a / 2 - 0.2, 0), c),
        g.addColorStop(0.5 + a / 2, I),
        g.addColorStop(Math.min(0.5 + a / 2 + 0.2, 1), c),
        g.addColorStop(1, c);
    } else g = c;
    if (r) {
      var A = new Tile("qubit", 32, 32),
        C = new Path2D(
          "M 16 6 a " +
            10 * r.ratio +
            " 10 0 0 1 0 20 a " +
            10 * r.ratio +
            " 10 0 0 1 0 -20 Z",
        );
      A.addPathRaw(
        C,
        g,
        "none",
        1,
        r.rot,
        "square",
        "lightslategrey",
        "none",
        2 * r.ratio,
      );
      for (
        var L = 4 * Math.min(1 - s, 1),
          D = 4 * Math.min(s, 1),
          b = -(r.rot - t),
          O =
            ((p = [
              15,
              15,
              15 - L,
              15,
              17,
              17 + L,
              17,
              17,
              17 + D,
              17,
              15,
              15 - D,
            ]),
            (T = [18, 14, 14, 9, 9, 14, 14, 18, 18, 23, 23, 18]),
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          M = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          v = 0;
        v < p.length;
        v++
      ) {
        var w = Math.sqrt((p[v] - 16) ** 2 + (T[v] - 16) ** 2),
          y = Math.atan2(p[v] - 16, T[v] - 16);
        (O[v] = r.ratio * w * Math.sin(y - b) + 16),
          (M[v] = w * Math.cos(y - b) + 16);
      }
      C = new Path2D(
        " M " +
          O[0] +
          " " +
          M[0] +
          " L " +
          O[1] +
          " " +
          M[1] +
          " L " +
          O[2] +
          " " +
          M[2] +
          " L " +
          O[3] +
          " " +
          M[3] +
          " L " +
          O[4] +
          " " +
          M[4] +
          " L " +
          O[5] +
          " " +
          M[5] +
          " L " +
          O[6] +
          " " +
          M[6] +
          " L " +
          O[7] +
          " " +
          M[7] +
          " L " +
          O[8] +
          " " +
          M[8] +
          " L " +
          O[9] +
          " " +
          M[9] +
          " L " +
          O[10] +
          " " +
          M[10] +
          " L " +
          O[11] +
          " " +
          M[11] +
          " Z",
      );
      A.addPathRaw(C, S, "none", 1.7, r.rot, "butt", f, "none", 1 * r.ratio);
      C = new Path2D(
        "M 16 6 a " +
          10 * r.ratio +
          " 10 0 0 1 0 20 a " +
          10 * r.ratio +
          " 10 0 0 1 0 -20 Z",
      );
      if ((A.addPathRaw(C, "none", g, 1.5, r.rot, "butt"), 1 == r.ratio))
        var N = 20 * Math.PI;
      else {
        var P = (10 - 10 * r.ratio) ** 2 / (10 + 10 * r.ratio) ** 2;
        N =
          Math.PI *
          (10 + 10 * r.ratio) *
          (1 + (3 * P) / (10 + Math.sqrt(4 - 3 * P)));
      }
      var F = 0.1;
      for (v = 0; v < o.length; v++)
        if (l[v] > F) {
          var k = n[v] + TIMER.swirlRatio;
          k > 1 && (k -= 1);
          var x = o[v] ** 2,
            B = 1 - o[v] ** 2;
          k = n[v] + TIMER.swirlRatio;
          k > 1 && (k -= 1);
          (x = o[v] ** 2), (B = 1 - o[v] ** 2);
          var W = [x * (N / 3), B * (N / 3)],
            q = k * (x + B) * (N / 3);
          C = new Path2D(
            "M 16 6 a " +
              10 * r.ratio +
              " 10 0 0 1 0 20 a " +
              10 * r.ratio +
              " 10 0 0 1 0 -20 Z",
          );
          o[v] >= 0
            ? A.addPathRaw(
                C,
                "none",
                E,
                1.5,
                r.rot,
                "butt",
                0,
                0,
                1,
                0,
                W,
                l[v],
                q,
              )
            : A.addPathRaw(
                C,
                "none",
                f,
                1.5,
                r.rot,
                "butt",
                0,
                0,
                1,
                0,
                W,
                l[v],
                q,
              );
        }
    } else {
      A = new Tile("qubit", 32, 32);
      if (!d) {
        var H = new Path2D("M 16 6 a 10 10 0 0 1 0 20 a 10 10 0 0 1 0 -20 Z");
        A.addPathRaw(H, g, "none", 2, 0, "square", "lightslategrey", "none", 2);
      }
      (L = 4 * Math.min(1 - s, 1)),
        (D = 4 * Math.min(s, 1)),
        (C = new Path2D(
          "M 15 18 L 15 14 L " +
            (15 - L) +
            " 14 L 15 9 L 17 9 L " +
            (17 + L) +
            " 14 L 17 14 L 17 18 L " +
            (17 + D) +
            " 18 L 17 23 L 15 23 L " +
            (15 - D) +
            " 18 Z",
        ));
      if (
        (A.addPathRaw(C, S, "none", 1.7, t, "butt", f, "none", 1, 0, [], u), !d)
      )
        for (N = 20 * Math.PI, F = 0.1, v = 0; v < o.length; v++)
          if (l[v] > F) {
            k = n[v] + TIMER.swirlRatio;
            k > 1 && (k -= 1);
            (x = o[v] ** 2),
              (B = 1 - o[v] ** 2),
              (W = [x * (N / 3), B * (N / 3)]),
              (q = k * (x + B) * (N / 3)),
              (C = new Path2D(
                "M 16 6 a 10 10 0 0 1 0 20 a 10 10 0 0 1 0 -20 Z",
              ));
            o[v] >= 0
              ? A.addPathRaw(
                  C,
                  "none",
                  E,
                  1.5,
                  0,
                  "butt",
                  0,
                  0,
                  1,
                  0,
                  W,
                  l[v],
                  q,
                )
              : A.addPathRaw(
                  C,
                  "none",
                  f,
                  1.5,
                  0,
                  "butt",
                  0,
                  0,
                  1,
                  0,
                  W,
                  l[v],
                  q,
                );
          }
    }
    return A;
  }
  static nakedQubit(e, t, i, a = !1) {
    if (a) var r = "#dc14aa";
    else r = "none";
    var s = "Indigo",
      o = "#913191",
      n = new Tile("qubit", 32, 32),
      l = 5 * Math.min(1 - i, 1),
      h = 5 * Math.min(i, 1),
      d = new Path2D(
        "M 15 18 L 15 14 L " +
          (15 - l) +
          " 14 L 15 9 L 17 9 L " +
          (17 + l) +
          " 14 L 17 14 L 17 18 L " +
          (17 + h) +
          " 18 L 17 23 L 15 23 L " +
          (15 - h) +
          " 18 Z",
      );
    return n.addPathRaw(d, s, r, 1, t, "butt", o, "none", 1), n;
  }
  static bit(e, t, i, a = 0, r = 1, s = !1) {
    if (s)
      var o = flashColor("wheat", i),
        n = flashColor("Black", i),
        l = flashColor("SandyBrown", i);
    else
      (o = flashColor("SandyBrown", i)),
        (n = flashColor("Black", i)),
        (l = flashColor("Sienna", i));
    if (OPTS.useGrads) {
      var h = e.createLinearGradient(-8, 16, 40, 16);
      h.addColorStop(0, o),
        h.addColorStop(Math.max(a / 2 - 0.2, 0), o),
        h.addColorStop(a / 2, l),
        h.addColorStop(Math.min(a / 2 + 0.2, 1), o),
        h.addColorStop(Math.max(0.5 + a / 2 - 0.2, 0), o),
        h.addColorStop(0.5 + a / 2, l),
        h.addColorStop(Math.min(0.5 + a / 2 + 0.2, 1), o),
        h.addColorStop(1, o);
    } else h = o;
    var d = flashColor("#333333", i),
      u = new Tile("bit", 32, 32),
      c = new Path2D("M 16 6 a 10 10 0 0 1 0 20 a 10 10 0 0 1 0 -20 Z");
    u.addPathRaw(
      c,
      h,
      "none",
      2,
      0,
      "square",
      "lightslategrey",
      "none",
      2,
      0,
      [],
      r,
    );
    c = new Path2D("M 16 6 a 10 10 0 0 1 0 20 a 10 10 0 0 1 0 -20 Z");
    if (
      (u.addPathRaw(c, "none", l, 1, 0, "square", "none", "none", 0, 0, [], r),
      0 === t)
    ) {
      c = new Path2D("M 12 15 a 4 4 0 0 1 8 0 L 20 17 a 4 4 0 0 1 -8 0 Z");
      u.addPathRaw(c, "none", n, 2, 0, "round", "none", d, 1, 0, [], 1);
    } else {
      c = new Path2D("M 14 13 L 16 11 L 16 20 M 14 20 L 18 20");
      u.addPathRaw(c, "none", n, 2, 0, "butt", "none", d, 1, 0, [], 1);
    }
    return u;
  }
  static measure(e, t, i, a, r = !1) {
    if (r)
      var s = "black",
        o = "#666";
    else {
      flashColor("#d92b2b", a);
      var n = flashColor("black", a),
        l = flashColor("#444", a),
        h = flashColor("#666", a);
      o = e.createRadialGradient(8, 8, 1, 16, 16, 16);
      o.addColorStop(0, h), o.addColorStop(0.2, l), o.addColorStop(1, n);
      s = "#d92b2b";
    }
    var d = new Tile("qCombineGate", 32, 32),
      u = new Path2D("M 16 30 a 14 14 0 0 1 0 -28 a 14 14 0 0 1 0 28 Z");
    d.addPathRaw(u, o, "none", 2, 0, "square", "lightslategrey", "none");
    u = new Path2D("M 14 2 L 18 2 L 18 30 L 14 30 Z");
    d.addPathRaw(u, "grey", "none", 2, i, "butt");
    u = new Path2D("M 18 2 L 18 30 M 14 2 L 14 30");
    d.addPathRaw(u, "none", s, 2, i, "butt");
    u = new Path2D("M 30 14 a 10 10 0 0 0 -6 -7 L 23 14 Z");
    d.addPathRaw(u, s, "none", 2, i - Math.PI / 2, "round");
    u = new Path2D("M 30 18 a 10 10 0 0 1 -6 7 L 23 18 Z");
    return d.addPathRaw(u, s, "none", 2, i - Math.PI / 2, "round"), d;
  }
  static wormholesOld(e, t, i = 0) {
    var a = new Tile("wormholes", 32, 32);
    if (t < 0.5) var r = 22 * t * 0.95;
    else r = 10.45;
    if (t < 0.75) var s = 2;
    else {
      s = 8 * (1 - t);
      s < 0.5 && (s = 0.5);
    }
    if (0 === i) var o = "turquoise";
    else o = "fuchsia";
    var n = new Path2D(
      "M 16 " +
        (16 - r) +
        " a " +
        r +
        " " +
        r +
        "  0 0 1 0 " +
        2 * r +
        " a " +
        r +
        " " +
        r +
        "  0 0 1 0 " +
        -2 * r,
    );
    return (
      a.addPathRaw(n, "none", "black", s, 5 * t, "butt", "none", "none", 0),
      a.addPathRaw(n, "none", o, s, 5 * t + 1, "butt", "none", "none", 0, 0, [
        (3 * Math.PI * r) / 20,
        (2 * Math.PI * r) / 20,
      ]),
      a
    );
  }
  static qFlip(e, t, i, a) {
    var r = flashColor("black", a),
      s = flashColor("#444", a),
      o = flashColor("#666", a),
      n = e.createRadialGradient(8, 8, 1, 16, 16, 16);
    n.addColorStop(0, o),
      n.addColorStop(0.2, s),
      n.addColorStop(1, r),
      (i -= Math.PI / 2),
      i > Math.PI && (i -= 2 * Math.PI),
      i <= -Math.PI && (i += 2 * Math.PI);
    flashColor("#d92b2b", a);
    var l = new Tile("flipGate", 32, 32),
      h = new Path2D("M 16 30 a 14 14 0 0 1 0 -28 a 14 14 0 0 1 0 28 Z");
    l.addPathRaw(h, n, "none", 2, 0, "square", "lightslategrey", "none");
    h = new Path2D("M 8 16 L 25 16");
    l.addPathRaw(h, "none", "lightgrey", 3, i, "round");
    h = new Path2D("M 11 11 L 11 21 L 6 17 L 6 15 Z");
    l.addPathRaw(h, "lightgrey", "none", 1, i, "round");
    h = new Path2D("M 16 22 a 9 9 0 0 0 0 -12");
    l.addPathRaw(h, "none", "#d92b2b", 2, i, "butt");
    h = new Path2D("M 12 13 l 2 -7 l 7 4 Z");
    l.addPathRaw(h, "#d92b2b", "none", 2, i, "butt");
    h = new Path2D("M 12 19 l 2 7 l 7 -4 Z");
    return l.addPathRaw(h, "#d92b2b", "none", 2, i, "butt"), l;
  }
  static greyTile(e, t = !1) {
    if (t) {
      var i = new Tile("greyTile", 32, 32),
        a = new Path2D(
          Helper.makeRoundedPath([0, 32, 32, 0], [0, 0, 32, 32], [6, 6, 6, 6]),
        );
      i.addPathRaw(
        a,
        "black",
        "none",
        1,
        0,
        "butt",
        "none",
        "none",
        2,
        0,
        [],
        0.5,
      );
    } else {
      var r = e.createLinearGradient(0, 0, 32, 0);
      r.addColorStop(0, "grey"),
        r.addColorStop(0.25, "darkgrey"),
        r.addColorStop(0.75, "darkgrey"),
        r.addColorStop(1, "slategrey");
      (i = new Tile("greyTile", 32, 32)),
        (a = new Path2D(
          Helper.makeRoundedPath([0, 32, 32, 0], [0, 0, 32, 32], [6, 6, 6, 6]),
        ));
      i.addPathRaw(a, r, "#666", 1, 0, "butt", "none", "none");
    }
    return i;
  }
  static scannersCircular(e, t, i, a = 0) {
    var r = "black",
      s = new Tile("scannersCircular", 32, 32),
      o = 10.5;
    if (t > 0.1 && t < 0.9) {
      var n = 16,
        l = 16 - o * Math.sin((t + 0.01) * Math.PI),
        h = 16 + o * Math.sin((t + 0.01) * Math.PI),
        d = 16 - o * Math.cos((t + 0.01) * Math.PI),
        u = 16 + o * Math.cos((t + 0.01) * Math.PI),
        c = e.createLinearGradient(d - n / 2, 16, d + n / 2, 16);
      0 === a
        ? (c.addColorStop(0, "rgba(255,255,255,0.0)"),
          c.addColorStop(0.2, "rgba(0,0,255,0.2)"),
          c.addColorStop(0.5, "cyan"),
          c.addColorStop(0.8, "rgba(0,0,255,0.2)"),
          c.addColorStop(1, "rgba(255,255,255,0.0)"))
        : (c.addColorStop(0, "rgba(255,255,255,0.0)"),
          c.addColorStop(0.2, "rgba(0,0,255,0.2)"),
          c.addColorStop(0.5, "fuchsia"),
          c.addColorStop(0.8, "rgba(0,0,255,0.2)"),
          c.addColorStop(1, "rgba(255,255,255,0.0)"));
      var I = new Path2D(
        "M " +
          (d - n / 2) +
          " " +
          l +
          " L " +
          (u - n / 2) +
          " " +
          h +
          " L " +
          (u + n / 2) +
          " " +
          h +
          " L " +
          (d + n / 2) +
          " " +
          l +
          " Z",
      );
      s.addPathRaw(I, c, "none", 1, i, "butt", "none", "none", 2);
    }
    o = 10;
    if (t <= 0.1) {
      var E = 16 - o * Math.cos(0),
        S = 16 - o * Math.cos(0.75),
        f = 16 - o * Math.sin(0),
        p = 16 - o * Math.sin(0.75),
        T = 16 + o * Math.sin(0.75),
        R = o - 9 * Math.sqrt(10 * t);
      I = new Path2D(
        "M " +
          E +
          " " +
          f +
          " a 10 10 0 0 1 " +
          (S - E) +
          " " +
          (p - f) +
          " a " +
          R +
          " " +
          R +
          " 0 0 0 " +
          (E - S) +
          " " +
          (f - p) +
          " Z",
      );
      s.addPathRaw(I, r, "none", 1, i, "butt", "none", "none", 2);
      I = new Path2D(
        "M " +
          E +
          " " +
          f +
          " a 10 10 0 0 0 " +
          (S - E) +
          " " +
          (T - f) +
          " a " +
          R +
          " " +
          R +
          " 0 0 1 " +
          (E - S) +
          " " +
          (f - T) +
          " Z",
      );
      s.addPathRaw(I, r, "none", 1, i, "butt", "none", "none", 2);
    } else if (t >= 0.9) {
      (E = 16 + o * Math.cos(0)),
        (S = 16 + o * Math.cos(0.75)),
        (f = 16 - o * Math.sin(0)),
        (p = 16 - o * Math.sin(0.75)),
        (T = 16 + o * Math.sin(0.75)),
        (R = o - 9 * Math.sqrt(10 * (1 - t))),
        (I = new Path2D(
          "M " +
            E +
            " " +
            f +
            " a 10 10 0 0 0 " +
            (S - E) +
            " " +
            (p - f) +
            " a " +
            R +
            " " +
            R +
            " 0 0 1 " +
            (E - S) +
            " " +
            (f - p) +
            " Z",
        ));
      s.addPathRaw(I, r, "none", 1, i, "butt", "none", "none", 2);
      I = new Path2D(
        "M " +
          E +
          " " +
          f +
          " a 10 10 0 0 1 " +
          (S - E) +
          " " +
          (T - f) +
          " a " +
          R +
          " " +
          R +
          " 0 0 0 " +
          (E - S) +
          " " +
          (f - T) +
          " Z",
      );
      s.addPathRaw(I, r, "none", 1, i, "butt", "none", "none", 2);
    } else {
      (E = 16 - o * Math.cos(Math.PI * (t - 0.1))),
        (S = 16 - o * Math.cos(Math.PI * (t - 0.1) + 0.75)),
        (f = 16 - o * Math.sin(Math.PI * (t - 0.1))),
        (p = 16 - o * Math.sin(Math.PI * (t - 0.1) + 0.75)),
        (T = 16 + o * Math.sin(Math.PI * (t - 0.1)));
      var m = 16 + o * Math.sin(Math.PI * (t - 0.1) + 0.75);
      (R = 1),
        (I = new Path2D(
          "M " +
            E +
            " " +
            f +
            " a 10 10 0 0 1 " +
            (S - E) +
            " " +
            (p - f) +
            " a " +
            R +
            " " +
            R +
            " 0 0 0 " +
            (E - S) +
            " " +
            (f - p) +
            " Z",
        ));
      s.addPathRaw(I, r, "none", 1, i, "butt", "none", "none", 2);
      I = new Path2D(
        "M " +
          E +
          " " +
          T +
          " a 10 10 0 0 0 " +
          (S - E) +
          " " +
          (m - T) +
          " a " +
          R +
          " " +
          R +
          " 0 0 1 " +
          (E - S) +
          " " +
          (T - m) +
          " Z",
      );
      s.addPathRaw(I, r, "none", 1, i, "butt", "none", "none", 2);
    }
    return s;
  }
  static greyBit(e, t) {
    var i = new Tile("bit", 32, 32),
      a = new Path2D("M 16 6 a 10 10 0 0 1 0 20 a 10 10 0 0 1 0 -20 Z");
    i.addPathRaw(
      a,
      "#666",
      "none",
      2,
      0,
      "square",
      "lightslategrey",
      "none",
      2,
      0,
      [],
      1,
    );
    a = new Path2D("M 16 7 a 9 9 0 0 1 0 18 a 9 9 0 0 1 0 -18 Z");
    if (
      (i.addPathRaw(
        a,
        "none",
        "#333",
        2,
        0,
        "square",
        "none",
        "none",
        0,
        0,
        [],
        1,
      ),
      0 === t)
    ) {
      a = new Path2D("M 12 15 a 4 4 0 0 1 8 0 L 20 17 a 4 4 0 0 1 -8 0 Z");
      i.addPathRaw(
        a,
        "none",
        "Black",
        2,
        0,
        "round",
        "none",
        "#333333",
        1,
        0,
        [],
        1,
      );
    } else {
      a = new Path2D("M 14 13 L 16 11 L 16 20 M 14 20 L 18 20");
      i.addPathRaw(
        a,
        "none",
        "Black",
        2,
        0,
        "butt",
        "none",
        "#333333",
        1,
        0,
        [],
        1,
      );
    }
    return i;
  }
  static greyQubit(e, t, i) {
    var a = new Tile("qubit", 32, 32),
      r = new Path2D("M 16 6 a 10 10 0 0 1 0 20 a 10 10 0 0 1 0 -20 Z");
    a.addPathRaw(
      r,
      "#666",
      "none",
      2,
      0,
      "square",
      "lightslategrey",
      "none",
      2,
      0,
      [],
      1,
    );
    r = new Path2D("M 16 7 a 9 9 0 0 1 0 18 a 9 9 0 0 1 0 -18 Z");
    a.addPathRaw(
      r,
      "none",
      "#333",
      2,
      0,
      "square",
      "none",
      "none",
      0,
      0,
      [],
      1,
    );
    var s = 5 * Math.min(1 - i, 1),
      o = 5 * Math.min(i, 1);
    r = new Path2D(
      "M 15 18 L 15 14 L " +
        (15 - s) +
        " 14 L 15 9 L 17 9 L " +
        (17 + s) +
        " 14 L 17 14 L 17 18 L " +
        (17 + o) +
        " 18 L 17 23 L 15 23 L " +
        (15 - o) +
        " 18 Z",
    );
    return (
      a.addPathRaw(r, "Black", "#333", 1, t, "butt", "black", "none", 1), a
    );
  }
}
