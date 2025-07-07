class PathsI {
  static icon(e, t, i) {
    return "plusIcon" === t
      ? PathsI.plusIcon(e, i)
      : "minusIcon" === t
        ? PathsI.minusIcon(e, i)
        : "switchIcon" === t
          ? PathsI.switchIcon(e, i)
          : "lockIcon" === t
            ? PathsI.lockIcon(e, i)
            : "tagIcon" === t
              ? PathsI.tagIcon(e, i)
              : "zeroIcon" === t
                ? PathsI.zeroIcon(e, i)
                : "oneIcon" === t
                  ? PathsI.oneIcon(e, i)
                  : "leftRightIcon" === t
                    ? PathsI.leftRightIcon(e, i)
                    : "questionIcon" === t
                      ? PathsI.questionIcon(e, i)
                      : void 0;
  }
  static eraserIcon(e) {
    var t = new Tile("eraserIcon", 16, 16),
      i = new Path2D(
        "M 5 13 L 3 11 a 1.5 1.5 0 0 1 0 -2 L 9 3 a 1.5 1.5 0 0 1 2 0 L 13 5 a 1.5 1.5 0 0 1 0 2 L 7 13 Z",
      );
    t.addPathRaw(i, "antiquewhite", "#111", 1, 0, "round");
    i = new Path2D(
      "M 4 8 L 9 3 a 1.5 1.5 0 0 1 2 0 L 13 5 a 1.5 1.5 0 0 1 0 2 L 8 12 Z",
    );
    t.addPathRaw(i, "pink", "#111", 1, 0, "round");
    i = new Path2D("M 2 13 L 14 13");
    return t.addPathRaw(i, "none", "#111", 1, 0, "round"), t;
  }
  static escIcon(e, t = !1) {
    var i = new Tile("escIcon", 16, 16),
      a = new Path2D("M 1 14 L 9 14 a 4 4 0 0 0 0 -10 L 1 4 L 6 1 L 6 7 L 1 4"),
      r = "#111";
    return t && (r = "#555"), i.addPathRaw(a, "none", r, 4, 0, "round"), i;
  }
  static musicIcon(e, t = !0, i = !1) {
    var a = new Tile("musicIcon", 16, 16),
      r = "#111";
    i && (r = "#555");
    var s = new Path2D("M 4 15 L 4 6 L 14 1 L 14 10");
    a.addPathRaw(s, "none", r, 4, 0, "round");
    s = new Path2D("M 12.5 10 L 12.5 10 M 2.5 15 L 2.5 15");
    if ((a.addPathRaw(s, "none", r, 8, 0, "round"), !t)) {
      s = new Path2D("M 4 0 L 12 16");
      a.addPathRaw(s, "none", "darkred", 2.5, 0, "round");
    }
    return a;
  }
  static sfxIcon(e, t = !0, i = !1) {
    var a = new Tile("sfxIcon", 16, 16),
      r = "#111";
    i && (r = "#555");
    var s = new Path2D("M 1 4 L 1 12 L 5 12 L 5 4 Z");
    a.addPathRaw(s, r, "none", 4, 0, "round");
    s = new Path2D("M 7 4 L 7 12 L 15 16 L 15 0 Z");
    if ((a.addPathRaw(s, r, "none", 4, 0, "round"), !t)) {
      s = new Path2D("M 4 0 L 12 16");
      a.addPathRaw(s, "none", "darkred", 2.5, 0, "round");
    }
    return a;
  }
  static questionIcon(e, t) {
    var i = t.hover;
    if (i) var a = "bisque";
    else a = "goldenrod";
    var r = e.createRadialGradient(8, 8, 0, 8, 8, 16);
    r.addColorStop(0, a), r.addColorStop(1, "darkgoldenrod");
    var s = new Tile("questionIcon", 16, 16),
      o = new Path2D("M 0 8 a 8 8 0 0 1 16 0 a 8 8 0 0 1 -16 0");
    s.addPathRaw(o, r, "black", 1, 0, "round");
    o = new Path2D("M 5 6 a 3 3 0 0 1 6 0 a 3 3 0 0 1 -3 3 l 0 4");
    return s.addPathRaw(o, "none", "black", 2.5, 0, "round"), s;
  }
  static leftRightIcon(e, t) {
    var i = t.hover;
    if (i) var a = "bisque";
    else a = "goldenrod";
    var r = e.createRadialGradient(8, 8, 0, 8, 8, 16);
    r.addColorStop(0, a), r.addColorStop(1, "darkgoldenrod");
    var s = new Tile("leftRightIcon", 16, 16);
    if (0 === t.type) {
      var o = new Path2D("M 0 8 a 8 8 0 0 1 16 0 a 8 8 0 0 1 -16 0");
      s.addPathRaw(o, r, "black", 1, 0, "round");
      o = new Path2D("M 4 8 L 11 4 L 11 12 Z");
      s.addPathRaw(o, "black", "none", 2.5, 0, "round");
    } else if (1 === t.type) {
      o = new Path2D("M 0 8 a 8 8 0 0 1 16 0 a 8 8 0 0 1 -16 0");
      s.addPathRaw(o, r, "black", 1, 0, "round");
      o = new Path2D("M 12 8 L 5 4 L 5 12 Z");
      s.addPathRaw(o, "black", "none", 2.5, 0, "round");
    } else if (2 === t.type) {
      o = new Path2D("M 3 3 L 13 13 M 3 13 L 13 3");
      var n = "black";
      if (i) n = "grey";
      s.addPathRaw(o, "none", n, 2.5, 0, "round");
    }
    return s;
  }
  static oneIcon(e, t) {
    var i = t.hover;
    if (i) var a = "bisque";
    else a = "goldenrod";
    var r = e.createRadialGradient(8, 8, 0, 8, 8, 16);
    r.addColorStop(0, a), r.addColorStop(1, "darkgoldenrod");
    var s = new Tile("oneIcon", 16, 16),
      o = new Path2D("M 0 8 a 8 8 0 0 1 16 0 a 8 8 0 0 1 -16 0");
    s.addPathRaw(o, r, "black", 1, 0, "round");
    o = new Path2D("M 8 4 L 8 12");
    return s.addPathRaw(o, "none", "black", 2.5, 0, "round"), s;
  }
  static zeroIcon(e, t) {
    var i = t.hover;
    if (i) var a = "bisque";
    else a = "goldenrod";
    var r = e.createRadialGradient(8, 8, 0, 8, 8, 16);
    r.addColorStop(0, a), r.addColorStop(1, "darkgoldenrod");
    var s = new Tile("zeroIcon", 16, 16),
      o = new Path2D("M 0 8 a 8 8 0 0 1 16 0 a 8 8 0 0 1 -16 0");
    s.addPathRaw(o, r, "black", 1, 0, "round");
    o = new Path2D("M 5 6.5 a 3 3 0 0 1 6 0 L 11 9.5 a 3 3 0 0 1 -6 0 Z");
    return s.addPathRaw(o, "none", "black", 2, 0, "round"), s;
  }
  static switchIcon(e, t) {
    var i = t.hover;
    if (i) var a = "bisque";
    else a = "goldenrod";
    var r = e.createRadialGradient(8, 8, 0, 8, 8, 16);
    r.addColorStop(0, a), r.addColorStop(1, "darkgoldenrod");
    var s = new Tile("switchIcon", 16, 16),
      o = new Path2D("M 0 8 a 8 8 0 0 1 16 0 a 8 8 0 0 1 -16 0");
    s.addPathRaw(o, r, "black", 1, 0, "round");
    o = new Path2D("M 6 3 L 6 12 l -2 -2 M 10 13 L 10 4 l 2 2");
    return s.addPathRaw(o, "none", "black", 2, 0, "round"), s;
  }
  static tagIcon(e, t) {
    var i = e.createRadialGradient(8, 8, 0, 8, 8, 16);
    i.addColorStop(0, "bisque"), i.addColorStop(1, "darkgoldenrod");
    var a = new Tile("tagIcon", 16, 16),
      r = new Path2D("M 0 8 a 8 8 0 0 1 16 0 a 8 8 0 0 1 -16 0");
    a.addPathRaw(r, i, "black", 1, 0, "round");
    var s = 30,
      o = "normal";
    return (
      a.addText(String(t.counter), { x: 17, y: 17 }, "black", s, "Verdana", o),
      a
    );
  }
  static lockIcon(e, t) {
    var i = t.hover;
    if (i) var a = "bisque";
    else a = "goldenrod";
    var r = e.createRadialGradient(8, 8, 0, 8, 8, 16);
    r.addColorStop(0, a), r.addColorStop(1, "darkgoldenrod");
    var s = new Tile("lockIcon", 16, 16);
    if (t.state) {
      var o = new Path2D("M 0 8 a 8 8 0 0 1 16 0 a 8 8 0 0 1 -16 0");
      s.addPathRaw(o, r, "black", 1, 0, "round");
      o = new Path2D("M 12 8 L 12 13 L 4 13 L 4 8 Z");
      s.addPathRaw(o, "black", "none", 2, 0, "round");
      o = new Path2D("M 5 8 a 3 3 0 0 1 6 0");
      s.addPathRaw(o, "none", "black", 2, 0, "round");
    } else {
      o = new Path2D("M 0 8 a 8 8 0 0 1 16 0 a 8 8 0 0 1 -16 0");
      s.addPathRaw(o, r, "black", 1, 0, "round");
      o = new Path2D("M 12 8 L 12 13 L 4 13 L 4 8 Z");
      s.addPathRaw(o, "black", "none", 2, 0, "round");
      o = new Path2D("M 11 8 a 3 3 0 0 0 -6 -3");
      s.addPathRaw(o, "none", "black", 2, 0, "round");
    }
    return s;
  }
  static highlightIcon(e, t, i) {
    if (t) var a = "bisque";
    else a = "goldenrod";
    var r = e.createRadialGradient(8, 8, 0, 8, 8, 16);
    r.addColorStop(0, a), r.addColorStop(1, "darkgoldenrod");
    var s = new Tile("highlightIcon", 16, 16),
      o = new Path2D("M 0 8 a 8 8 0 0 1 16 0 a 8 8 0 0 1 -16 0");
    if ((s.addPathRaw(o, r, "black", 1, 0, "round"), 0 === i));
    else if (1 === i) {
      o = new Path2D("M 4 7 a 4 4 0 0 1 8 0 L 12 9 a 4 4 0 0 1 -8 0 Z");
      s.addPathRaw(o, "none", "black", 2, 0, "butt");
    } else if (2 === i) {
      o = new Path2D("M 6 5 L 8 3 L 8 13 M 6 13 L 10 13");
      s.addPathRaw(o, "none", "black", 2, 0, "butt");
    }
    return s;
  }
  static plusIcon(e, t) {
    var i = t.hover;
    if (i) var a = "bisque";
    else a = "goldenrod";
    var r = e.createRadialGradient(8, 8, 0, 8, 8, 16);
    r.addColorStop(0, a), r.addColorStop(1, "darkgoldenrod");
    var s = new Tile("plusIcon", 16, 16),
      o = new Path2D("M 0 8 a 8 8 0 0 1 16 0 a 8 8 0 0 1 -16 0");
    s.addPathRaw(o, r, "black", 1, 0, "round");
    o = new Path2D("M 4 8 L 12 8 M 8 4 L 8 12");
    return s.addPathRaw(o, "none", "black", 2, 0, "round"), s;
  }
  static minusIcon(e, t) {
    var i = t.hover;
    if (i) var a = "bisque";
    else a = "goldenrod";
    var r = e.createRadialGradient(8, 8, 0, 8, 8, 16);
    r.addColorStop(0, a), r.addColorStop(1, "darkgoldenrod");
    var s = new Tile("plusIcon", 16, 16),
      o = new Path2D("M 0 8 a 8 8 0 0 1 16 0 a 8 8 0 0 1 -16 0");
    s.addPathRaw(o, r, "black", 1, 0, "round");
    o = new Path2D("M 4 8 L 12 8");
    return s.addPathRaw(o, "none", "black", 2, 0, "round"), s;
  }
}
