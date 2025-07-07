class PathsC {
  static ctrl(e, t, i) {
    return "ctrlStart" === t
      ? PathsC.ctrlStart(e, i.flash, i.depth, i.closure, i.type, i.hovered)
      : "ctrlPlay" === t
        ? PathsC.ctrlPlay(e, i.flash, i.depth, i.closure, i.type, i.hovered)
        : "ctrlStep" === t
          ? PathsC.ctrlStep(e, i.flash, i.depth, i.closure, i.type, i.hovered)
          : "ctrlBack" === t
            ? PathsC.ctrlBack(e, i.flash, i.depth, i.closure, i.type, i.hovered)
            : "ctrlNorm" === t
              ? PathsC.ctrlNorm(
                  e,
                  i.flash,
                  i.depth,
                  i.closure,
                  i.type,
                  i.hovered,
                )
              : void 0;
  }
  static ctrlStart(e, t, i, a, r = 0, s = !1) {
    var o = new Tile("ctrlStart", 32, 32);
    if (s) var n = "white";
    else n = "#e6dfd5";
    if (0 === r) {
      var l = flashColor("forestgreen", t),
        h = e.createRadialGradient(8, 8, 1, 16, 16, 20);
      h.addColorStop(0, flashColor("#68e868", t)), h.addColorStop(1, l);
      var d = 16 + 7 * Math.sin(0.5),
        u = 16 - 7 * Math.sin(0.5),
        c = 16 - 7 * Math.cos(0.5);
      if (2 - 3 * t >= 0) var I = "darkslategrey";
      else I = "none";
      var E = new Path2D(
        Helper.makeRoundedPath([4, 28, 28, 4], [4, 4, 28, 28], [5, 5, 5, 5]),
      );
      o.addPathRaw(
        E,
        h,
        "none",
        1,
        0,
        "butt",
        "darkslategrey",
        "darkslategrey",
        3,
      );
      var S = new Path2D(
        "M 9 28 a 5 5 0 0 1 -5 -5 L 4 9 a 5 5 0 0 1 5 -5 L 23 4 a 5 5 0 0 1 5 5 ",
      );
      if (
        (i > 0
          ? o.addPathRaw(
              S,
              "none",
              l,
              1,
              0,
              "butt",
              "none",
              "darkslategrey",
              2 * i,
            )
          : o.addPathRaw(S, "none", l, 1, 0, "butt", "none", "none", 2 * i),
        o.addPathRaw(E, "none", l, 1, 0, "butt", "none", "none", 0),
        0 === i)
      ) {
        E = new Path2D(
          "M " +
            d +
            " " +
            c +
            " A 7 7 0 0 1 16 23 A 7 7 0 0 1 " +
            u +
            " " +
            c +
            "M 16 13.5 L 16 7.5",
        );
        o.addPathRaw(
          E,
          "none",
          n,
          2.5,
          0,
          "round",
          "none",
          I,
          Math.max(0, 2 - 3 * t),
        );
      } else {
        var f = 2 * i * 0.3,
          p = 2 * i * 0.7;
        E = new Path2D(
          "M " +
            (d + f) +
            " " +
            (c + p) +
            " A 7 7 0 0 1 " +
            (16 + f) +
            " " +
            (23 + p) +
            " A 7 7 0 0 1 " +
            (u + f) +
            " " +
            (c + p) +
            " M " +
            (16 + f) +
            " " +
            (13.5 + p) +
            " l 0 -6",
        );
        o.addPathRaw(
          E,
          "none",
          n,
          2.5,
          0,
          "round",
          "none",
          I,
          Math.max(0, 2 - 3 * t),
        );
      }
    } else if (1 === r) {
      (l = flashColor("crimson", t)),
        (h = e.createRadialGradient(8, 8, 1, 16, 16, 20));
      h.addColorStop(0, flashColor("#f76363", t)), h.addColorStop(1, l);
      (d = 16 + 7 * Math.sin(0.5)),
        (u = 16 - 7 * Math.sin(0.5)),
        (c = 16 - 7 * Math.cos(0.5));
      if (2 - 3 * t >= 0) I = "darkslategrey";
      else I = "none";
      E = new Path2D(
        Helper.makeRoundedPath([4, 28, 28, 4], [4, 4, 28, 28], [5, 5, 5, 5]),
      );
      o.addPathRaw(E, h, "none", 1, 0, "butt", "darkslategrey", "none", 3);
      S = new Path2D(
        "M 9 28 a 5 5 0 0 1 -5 -5 L 4 9 a 5 5 0 0 1 5 -5 L 23 4 a 5 5 0 0 1 5 5",
      );
      i > 0
        ? o.addPathRaw(
            S,
            "none",
            l,
            1,
            0,
            "butt",
            "none",
            "darkslategrey",
            2 * i,
          )
        : o.addPathRaw(S, "none", l, 1, 0, "butt", "none", "none", 2 * i),
        o.addPathRaw(E, "none", l, 1, 0, "butt", "none", "none", 0);
      (f = 2 * i * 0.3),
        (p = 2 * i * 0.7),
        (E = new Path2D(
          Helper.makeRoundedPath(
            [10 + f, 22 + f, 22 + f, 10 + f],
            [10 + p, 10 + p, 22 + p, 22 + p],
            [3, 3, 3, 3],
          ),
        ));
      o.addPathRaw(
        E,
        "none",
        n,
        2.5,
        0,
        "round",
        "none",
        I,
        Math.max(0, 2 - 3 * t),
      );
    }
    return o;
  }
  static ctrlDummy(e) {
    var t = new Tile("ctrlDummy", 32, 32),
      i = new Path2D(
        Helper.makeRoundedPath([4, 28, 28, 4], [4, 4, 28, 28], [5, 5, 5, 5]),
      );
    return t.addPathRaw(i, "black", "none", 1, 0, "butt", "none", "none", 3), t;
  }
  static ctrlPlay(e, t, i, a, r = 0, s = !1) {
    var o = new Tile("ctrlPlay", 32, 32),
      n = flashColor("steelblue", t),
      l = e.createRadialGradient(8, 8, 1, 16, 16, 20);
    if (
      (l.addColorStop(0, flashColor("powderblue", t)), l.addColorStop(1, n), s)
    )
      var h = "white";
    else h = "#e6dfd5";
    Math.sin(0.5), Math.sin(0.5), Math.cos(0.5);
    if (2 - 3 * t >= 0) var d = "darkslategrey";
    else d = "none";
    var u = new Path2D(
      Helper.makeRoundedPath([4, 28, 28, 4], [4, 4, 28, 28], [5, 5, 5, 5]),
    );
    o.addPathRaw(
      u,
      l,
      "none",
      1,
      0,
      "butt",
      "darkslategrey",
      "darkslategrey",
      3,
    );
    var c = new Path2D(
      "M 9 28 a 5 5 0 0 1 -5 -5 L 4 9 a 5 5 0 0 1 5 -5 L 23 4 a 5 5 0 0 1 5 5",
    );
    if (
      (i > 0
        ? o.addPathRaw(
            c,
            "none",
            n,
            1,
            0,
            "butt",
            "none",
            "darkslategrey",
            2 * i,
          )
        : o.addPathRaw(c, "none", n, 1, 0, "butt", "none", "none", 0),
      o.addPathRaw(u, "none", n, 1, 0, "butt", "none", "none", 0),
      0 === i)
    ) {
      if (0 === r) {
        u = new Path2D("M 13 10 l 0 12 M 19 10 l 0 12");
        o.addPathRaw(
          u,
          "none",
          h,
          3.5,
          0,
          "round",
          "none",
          d,
          Math.max(0, 2 - 3 * t),
        );
      } else if (1 === r) {
        u = new Path2D("M 12 10 l 10 6 l -10 6 l 0 -12");
        o.addPathRaw(
          u,
          "none",
          h,
          2.5,
          0,
          "round",
          "none",
          d,
          Math.max(0, 2 - 3 * t),
        );
      }
    } else {
      var I = 2 * i * 0.3,
        E = 2 * i * 0.7;
      if (0 === r) {
        u = new Path2D(
          "M " +
            (13 + I) +
            " " +
            (10 + E) +
            " l 0 12 M " +
            (19 + I) +
            " " +
            (10 + E) +
            " l 0 12",
        );
        o.addPathRaw(
          u,
          "none",
          h,
          3.5,
          0,
          "round",
          "none",
          d,
          Math.max(0, 2 - 3 * t),
        );
      } else if (1 === r) {
        u = new Path2D(
          "M " + (12 + I) + " " + (10 + E) + " l 10 6 l -10 6 l 0 -12",
        );
        o.addPathRaw(
          u,
          "none",
          h,
          2.5,
          0,
          "round",
          "none",
          d,
          Math.max(0, 2 - 3 * t),
        );
      }
    }
    if (a >= 0) {
      var S = e.createRadialGradient(8, 8, 1, 16, 16, 20);
      S.addColorStop(0, "#4e7566"), S.addColorStop(1, "#444");
      u = new Path2D(
        Helper.makeRoundedPath(
          [4, 28, 28, 4],
          [
            4 + 30 * (1 - a),
            4 + 30 * (1 - a),
            28 + 30 * (1 - a),
            28 + 30 * (1 - a),
          ],
          [5, 5, 5, 5],
        ),
      );
      o.addPathRaw(u, S, "#0e1c16", 2, 0, "butt", "none", "none", 3);
    }
    return o;
  }
  static ctrlStep(e, t, i, a, r = 0, s = !1) {
    var o = new Tile("ctrlStep", 32, 32),
      n = flashColor("steelblue", t),
      l = e.createRadialGradient(8, 8, 1, 16, 16, 20);
    if (
      (l.addColorStop(0, flashColor("powderblue", t)), l.addColorStop(1, n), s)
    )
      var h = "white";
    else h = "#e6dfd5";
    Math.sin(0.5), Math.sin(0.5), Math.cos(0.5);
    if (2 - 3 * t >= 0) var d = "darkslategrey";
    else d = "none";
    var u = new Path2D(
      Helper.makeRoundedPath([4, 28, 28, 4], [4, 4, 28, 28], [5, 5, 5, 5]),
    );
    o.addPathRaw(u, l, "none", 1, 0, "butt", "none", "none", 3);
    var c = new Path2D(
      "M 9 28 a 5 5 0 0 1 -5 -5 L 4 9 a 5 5 0 0 1 5 -5 L 23 4 a 5 5 0 0 1 5 5",
    );
    if (
      (i > 0
        ? o.addPathRaw(
            c,
            "none",
            n,
            1,
            0,
            "butt",
            "none",
            "darkslategrey",
            2 * i,
          )
        : o.addPathRaw(c, "none", n, 1, 0, "butt", "none", "none", 2 * i),
      o.addPathRaw(u, "none", n, 1, 0, "butt", "none", "none", 0),
      0 === i)
    ) {
      if (0 === r) {
        u = new Path2D(
          "M 8 11 l 5 5 l -5 5 l 0 -10 M 14 11 l 5 5 l -5 5 l 0 -10 M 20 11 l 5 5 l -5 5 l 0 -10",
        );
        o.addPathRaw(
          u,
          "none",
          h,
          2,
          0,
          "round",
          "none",
          d,
          Math.max(0, 2 - 3 * t),
        );
      } else if (1 === r) {
        u = new Path2D("M 15 10 L 22 16 L 15 22 L 15 10 M 11 10 L 11 22");
        o.addPathRaw(
          u,
          "none",
          h,
          2.5,
          0,
          "round",
          "none",
          d,
          Math.max(0, 2 - 3 * t),
        );
      }
    } else {
      var I = 2 * i * 0.3,
        E = 2 * i * 0.7;
      if (0 === r) {
        u = new Path2D(
          "M " +
            (8 + I) +
            " " +
            (11 + E) +
            " l 5 5 l -5 5 l 0 -10 M " +
            (14 + I) +
            " " +
            (11 + E) +
            " l 5 5 l -5 5 l 0 -10 M " +
            (20 + I) +
            " " +
            (11 + E) +
            " l 5 5 l -5 5 l 0 -10",
        );
        o.addPathRaw(
          u,
          "none",
          h,
          2,
          0,
          "round",
          "none",
          d,
          Math.max(0, 2 - 3 * t),
        );
      } else if (1 === r) {
        u = new Path2D(
          "M " +
            (15 + I) +
            " " +
            (10 + E) +
            " l 7 6 l -7 6 l 0 -12 M " +
            (11 + I) +
            " " +
            (10 + E) +
            " l 0 12",
        );
        o.addPathRaw(
          u,
          "none",
          h,
          2.5,
          0,
          "round",
          "none",
          d,
          Math.max(0, 2 - 3 * t),
        );
      }
    }
    if (a >= 0) {
      var S = e.createRadialGradient(8, 8, 1, 16, 16, 20);
      S.addColorStop(0, "#4e7566"), S.addColorStop(1, "#444");
      u = new Path2D(
        Helper.makeRoundedPath(
          [4, 28, 28, 4],
          [
            4 + 30 * (1 - a),
            4 + 30 * (1 - a),
            28 + 30 * (1 - a),
            28 + 30 * (1 - a),
          ],
          [5, 5, 5, 5],
        ),
      );
      o.addPathRaw(u, S, "#0e1c16", 2, 0, "butt", "none", "none", 3);
    }
    return o;
  }
  static ctrlBack(e, t, i, a, r = 0, s = !1) {
    var o = new Tile("ctrlBack", 32, 32),
      n = flashColor("steelblue", t),
      l = e.createRadialGradient(8, 8, 1, 16, 16, 20);
    if (
      (l.addColorStop(0, flashColor("powderblue", t)), l.addColorStop(1, n), s)
    )
      var h = "white";
    else h = "#e6dfd5";
    Math.sin(0.5), Math.sin(0.5), Math.cos(0.5);
    if (2 - 3 * t >= 0) var d = "darkslategrey";
    else d = "none";
    var u = new Path2D(
      Helper.makeRoundedPath([4, 28, 28, 4], [4, 4, 28, 28], [5, 5, 5, 5]),
    );
    o.addPathRaw(u, l, "none", 1, 0, "butt", "none", "none", 3);
    var c = new Path2D(
      "M 9 28 a 5 5 0 0 1 -5 -5 L 4 9 a 5 5 0 0 1 5 -5 L 23 4 a 5 5 0 0 1 5 5",
    );
    if (
      (i > 0
        ? o.addPathRaw(
            c,
            "none",
            n,
            1,
            0,
            "butt",
            "none",
            "darkslategrey",
            2 * i,
          )
        : o.addPathRaw(c, "none", n, 1, 0, "butt", "none", "none", 2 * i),
      o.addPathRaw(u, "none", n, 1, 0, "butt", "none", "none", 0),
      0 === i)
    ) {
      if (0 === r) {
        u = new Path2D(
          "M 24 11 l -5 5 l 5 5 l 0 -10 M 18 11 l -5 5 l 5 5 l 0 -10 M 12 11 l -5 5 l 5 5 l 0 -10",
        );
        o.addPathRaw(
          u,
          "none",
          h,
          2,
          0,
          "round",
          "none",
          d,
          Math.max(0, 2 - 3 * t),
        );
      } else if (1 === r) {
        u = new Path2D("M 17 10 L 10 16 L 17 22 L 17 10 M 21 10 l 0 12");
        o.addPathRaw(
          u,
          "none",
          h,
          2.5,
          0,
          "round",
          "none",
          d,
          Math.max(0, 2 - 3 * t),
        );
      }
    } else {
      var I = 2 * i * 0.3,
        E = 2 * i * 0.7;
      if (0 === r) {
        u = new Path2D(
          "M " +
            (24 + I) +
            " " +
            (11 + E) +
            " l -5 5 l 5 5 l 0 -10 M " +
            (18 + I) +
            " " +
            (11 + E) +
            " l -5 5 l 5 5 l 0 -10 M " +
            (12 + I) +
            " " +
            (11 + E) +
            " l -5 5 l 5 5 l 0 -10",
        );
        o.addPathRaw(
          u,
          "none",
          h,
          2,
          0,
          "round",
          "none",
          d,
          Math.max(0, 2 - 3 * t),
        );
      } else if (1 === r) {
        u = new Path2D(
          "M " +
            (17 + I) +
            " " +
            (10 + E) +
            " l -7 6 l 7 6 l 0 -12 M " +
            (21 + I) +
            " " +
            (10 + E) +
            " l 0 12",
        );
        o.addPathRaw(
          u,
          "none",
          h,
          2.5,
          0,
          "round",
          "none",
          d,
          Math.max(0, 2 - 3 * t),
        );
      }
    }
    if (a >= 0) {
      var S = e.createRadialGradient(8, 8, 1, 16, 16, 20);
      S.addColorStop(0, "#4e7566"), S.addColorStop(1, "#444");
      u = new Path2D(
        Helper.makeRoundedPath(
          [4, 28, 28, 4],
          [
            4 + 30 * (1 - a),
            4 + 30 * (1 - a),
            28 + 30 * (1 - a),
            28 + 30 * (1 - a),
          ],
          [5, 5, 5, 5],
        ),
      );
      o.addPathRaw(u, S, "#0e1c16", 2, 0, "butt", "none", "none", 3);
    }
    return o;
  }
  static ctrlNorm(e, t, i, a, r = 0, s = !1) {
    var o = new Tile("ctrlNorm", 32, 32),
      n = flashColor("steelblue", t),
      l = e.createRadialGradient(8, 8, 1, 16, 16, 20);
    if (
      (l.addColorStop(0, flashColor("powderblue", t)), l.addColorStop(1, n), s)
    )
      var h = "white";
    else h = "#e6dfd5";
    Math.sin(0.5), Math.sin(0.5), Math.cos(0.5);
    if (2 - 3 * t >= 0) var d = "darkslategrey";
    else d = "none";
    var u = new Path2D(
      Helper.makeRoundedPath([4, 28, 28, 4], [4, 4, 28, 28], [5, 5, 5, 5]),
    );
    o.addPathRaw(u, l, "none", 1, 0, "butt", "none", "none", 3);
    var c = new Path2D(
      "M 9 28 a 5 5 0 0 1 -5 -5 L 4 9 a 5 5 0 0 1 5 -5 L 23 4 a 5 5 0 0 1 5 5",
    );
    if (
      (i > 0
        ? o.addPathRaw(
            c,
            "none",
            n,
            1,
            0,
            "butt",
            "none",
            "darkslategrey",
            2 * i,
          )
        : o.addPathRaw(c, "none", n, 1, 0, "butt", "none", "none", 2 * i),
      o.addPathRaw(u, "none", n, 1, 0, "butt", "none", "none", 0),
      0 === i)
    ) {
      u = new Path2D("M 16 22 a 6 6 0 0 0 0 -12 a 6 6 0 0 0 -6 6");
      o.addPathRaw(
        u,
        "none",
        h,
        2.5,
        0,
        "round",
        "none",
        d,
        Math.max(0, 2 - 3 * t),
      );
      u = new Path2D("M 10 16 l -2 0 l 2 3 l 2 -3 l -2 0");
      o.addPathRaw(
        u,
        "none",
        h,
        2.5,
        0,
        "round",
        "none",
        d,
        Math.max(0, 2 - 3 * t),
      );
    } else {
      var I = 2 * i * 0.3,
        E = 2 * i * 0.7;
      u = new Path2D(
        "M " +
          (16 + I) +
          " " +
          (22 + E) +
          " a 6 6 0 0 0 0 -12 a 6 6 0 0 0 -6 6",
      );
      o.addPathRaw(
        u,
        "none",
        h,
        2.5,
        0,
        "round",
        "none",
        d,
        Math.max(0, 2 - 3 * t),
      );
      u = new Path2D(
        "M " + (10 + I) + " " + (16 + E) + " l -2 0 l 2 3 l 2 -3 l -2 0",
      );
      o.addPathRaw(
        u,
        "none",
        h,
        2.5,
        0,
        "round",
        "none",
        d,
        Math.max(0, 2 - 3 * t),
      );
    }
    if (a >= 0) {
      var S = e.createRadialGradient(8, 8, 1, 16, 16, 20);
      S.addColorStop(0, "#4e7566"), S.addColorStop(1, "#444");
      u = new Path2D(
        Helper.makeRoundedPath(
          [4, 28, 28, 4],
          [
            4 + 30 * (1 - a),
            4 + 30 * (1 - a),
            28 + 30 * (1 - a),
            28 + 30 * (1 - a),
          ],
          [5, 5, 5, 5],
        ),
      );
      o.addPathRaw(u, S, "#0e1c16", 2, 0, "butt", "none", "none", 3);
    }
    return o;
  }
  static tickerStatic(e, t) {
    var i = new Tile("ticker", 16, 32),
      a = "#858585",
      r = e.createLinearGradient(0, 16, 16, 16);
    r.addColorStop(0, a),
      r.addColorStop(0.5, "rgb(175,175,175)"),
      r.addColorStop(1, a);
    var s = new Path2D(
      Helper.makeRoundedPath([1, 15, 15, 1], [6, 6, 16, 16], [4, 4, 0, 0]),
    );
    i.addPathRaw(s, r, "black", 1, 0, "butt");
    s = new Path2D(
      Helper.makeRoundedPath([1, 15, 15, 1], [26, 26, 16, 16], [4, 4, 0, 0]),
    );
    if ((i.addPathRaw(s, r, "black", 1, 0, "butt"), 0 === t)) {
      s = new Path2D("M 4 16 a 4 7 0 0 1 8 0");
      i.addPathRaw(s, "none", "black", 2, 0, "butt");
      s = new Path2D("M 4 16 a 4 7 0 0 0 8 0");
      i.addPathRaw(s, "none", "black", 2, 0, "butt");
    } else if (1 === t) {
      s = new Path2D("M 8 16 L 8 9 l -3 3");
      i.addPathRaw(s, "none", "black", 2, 0, "butt");
      s = new Path2D("M 8 16 L 8 23 M 5 23 L 11 23");
      i.addPathRaw(s, "none", "black", 2, 0, "butt");
    } else if (2 === t) {
      s = new Path2D("M 5 13 a 3 4 0 0 1 6 0 L 9.5 16");
      i.addPathRaw(s, "none", "black", 2, 0, "butt");
      s = new Path2D("M 9.5 16 L 6 23 L 12 23");
      i.addPathRaw(s, "none", "black", 2, 0, "butt");
    } else if (3 === t) {
      s = new Path2D("M 6 16 l 3 -0.5 a 5 4 0 0 0 0 -6.5 l -4 0.5");
      i.addPathRaw(s, "none", "black", 2, 0, "butt");
      s = new Path2D("M 6 16 l 3 0.5 a 5 4 0 0 1 0 6.5 l -4 -0.5");
      i.addPathRaw(s, "none", "black", 2, 0, "butt");
    } else if (4 === t) {
      s = new Path2D("M 6 16 L 10 10 L 10 16");
      i.addPathRaw(s, "none", "black", 2, 0, "butt");
      s = new Path2D("M 6 16 L 4 19 L 12.5 19 M 10 16 L 10 23.5");
      i.addPathRaw(s, "none", "black", 2, 0, "butt");
    } else if (5 === t) {
      s = new Path2D("M 11 10 L 6 10 L 5 16 L 7 16");
      i.addPathRaw(s, "none", "black", 2, 0, "butt");
      s = new Path2D("M 5 16 L 8 16 a 6 4 0 0 1 0 6.5 l -4 -1");
      i.addPathRaw(s, "none", "black", 2, 0, "butt");
    } else if (6 === t) {
      s = new Path2D("M 5 16 a 6 6 0 0 1 5 -6");
      i.addPathRaw(s, "none", "black", 2, 0, "butt");
      s = new Path2D("M 5 19.5 a 3 3 0 0 1 6 0 a 3 3.5 0 0 1 -6 0 L 5 16");
      i.addPathRaw(s, "none", "black", 2, 0, "butt");
    } else if (7 === t) {
      s = new Path2D("M 4.5 11 L 4.5 10 L 11.5 10 L 9 16");
      i.addPathRaw(s, "none", "black", 2, 0, "butt");
      s = new Path2D("M 9 16 L 5.5 23.5");
      i.addPathRaw(s, "none", "black", 2, 0, "butt");
    } else if (8 === t) {
      s = new Path2D("M 5 12.5 a 3 3 0 0 0 6 0 a 3 3.5 0 0 0 -6 0");
      i.addPathRaw(s, "none", "black", 2, 0, "butt");
      s = new Path2D("M 5 19.5 a 3 3 0 0 1 6 0 a 3 3.5 0 0 1 -6 0");
      i.addPathRaw(s, "none", "black", 2, 0, "butt");
    } else if (9 === t) {
      s = new Path2D(
        "M 5 12.5 a 3 3 0 0 0 6 0 a 3 3.5 0 0 0 -6 0 M 11 12.5 L 11 16",
      );
      i.addPathRaw(s, "none", "black", 2, 0, "butt");
      s = new Path2D("M 11 16 a 6 6 0 0 1 -5 6");
      i.addPathRaw(s, "none", "black", 2, 0, "butt");
    }
    return i;
  }
  static tickerDynamic(e, t, i, a = -1) {
    if (0 === i) return PathsC.tickerStatic(e, t);
    var r = new Tile("ticker", 16, 32),
      s = "#858585",
      o = e.createLinearGradient(0, 16, 16, 16);
    o.addColorStop(0, s),
      o.addColorStop(0.5, "rgb(175,175,175)"),
      o.addColorStop(1, s);
    var n = new Path2D(
      Helper.makeRoundedPath([1, 15, 15, 1], [6, 6, 16, 16], [4, 4, 0, 0]),
    );
    r.addPathRaw(n, o, "black", 1, 0, "butt");
    var l = new Path2D(
      Helper.makeRoundedPath([1, 15, 15, 1], [26, 26, 16, 16], [4, 4, 0, 0]),
    );
    if (
      (r.addPathRaw(l, o, "black", 1, 0, "butt"),
      a < 0 && (a = (t + 1) % 10),
      0 === a)
    )
      var h = new Path2D("M 4 16 a 4 7 0 0 1 8 0");
    else if (1 === a) h = new Path2D("M 8 16 L 8 9 l -3 3");
    else if (2 === a) h = new Path2D("M 5 13 a 3 4 0 0 1 6 0 L 9.5 16");
    else if (3 === a)
      h = new Path2D("M 6 16 l 3 -0.5 a 5 4 0 0 0 0 -6.5 l -4 0.5");
    else if (4 === a) h = new Path2D("M 6 16 L 10 10 L 10 16");
    else if (5 === a) h = new Path2D("M 11 10 L 6 10 L 5 16 L 7 16");
    else if (6 === a) h = new Path2D("M 5 16 a 6 6 0 0 1 5 -6");
    else if (7 === a) h = new Path2D("M 4.5 11 L 4.5 10 L 11.5 10 L 9 16");
    else if (8 === a)
      h = new Path2D("M 5 12.5 a 3 3 0 0 0 6 0 a 3 3.5 0 0 0 -6 0");
    else if (9 === a)
      h = new Path2D(
        "M 5 12.5 a 3 3 0 0 0 6 0 a 3 3.5 0 0 0 -6 0 M 11 12.5 L 11 16",
      );
    if ((r.addPathRaw(h, "none", "black", 2, 0, "butt"), 0 === t))
      var d = new Path2D("M 4 16 a 4 7 0 0 0 8 0");
    else if (1 === t) d = new Path2D("M 8 16 L 8 23 M 5 23 L 11 23");
    else if (2 === t) d = new Path2D("M 9.5 16 L 6 23 L 12 23");
    else if (3 === t)
      d = new Path2D("M 6 16 l 3 0.5 a 5 4 0 0 1 0 6.5 l -4 -0.5");
    else if (4 === t)
      d = new Path2D("M 6 16 L 4 19 L 12.5 19 M 10 16 L 10 23.5");
    else if (5 === t) d = new Path2D("M 5 16 L 8 16 a 6 4 0 0 1 0 6.5 l -4 -1");
    else if (6 === t)
      d = new Path2D("M 5 19.5 a 3 3 0 0 1 6 0 a 3 3.5 0 0 1 -6 0 L 5 16");
    else if (7 === t) d = new Path2D("M 9 16 L 5.5 23.5");
    else if (8 === t)
      d = new Path2D("M 5 19.5 a 3 3 0 0 1 6 0 a 3 3.5 0 0 1 -6 0");
    else if (9 === t) d = new Path2D("M 11 16 a 6 6 0 0 1 -5 6");
    if ((r.addPathRaw(d, "none", "black", 2, 0, "butt"), i < 0.5)) {
      if (0 === t) h = new Path2D("M 4 16 a 4 7 0 0 1 8 0");
      else if (1 === t) h = new Path2D("M 8 16 L 8 9 l -3 3");
      else if (2 === t) h = new Path2D("M 5 13 a 3 4 0 0 1 6 0 L 9.5 16");
      else if (3 === t)
        h = new Path2D("M 6 16 l 3 -0.5 a 5 4 0 0 0 0 -6.5 l -4 0.5");
      else if (4 === t) h = new Path2D("M 6 16 L 10 10 L 10 16");
      else if (5 === t) h = new Path2D("M 11 10 L 6 10 L 5 16 L 7 16");
      else if (6 === t) h = new Path2D("M 5 16 a 6 6 0 0 1 5 -6");
      else if (7 === t) h = new Path2D("M 4.5 11 L 4.5 10 L 11.5 10 L 9 16");
      else if (8 === t)
        h = new Path2D("M 5 12.5 a 3 3 0 0 0 6 0 a 3 3.5 0 0 0 -6 0");
      else if (9 === t)
        h = new Path2D(
          "M 5 12.5 a 3 3 0 0 0 6 0 a 3 3.5 0 0 0 -6 0 M 11 12.5 L 11 16",
        );
      var u = 1 / (1 - 2 * i);
      o = e.createLinearGradient(0, 16, 16, 16);
      o.addColorStop(0, flashColor(s, 2 * i)),
        o.addColorStop(0.5, flashColor("#afafaf", 2 * i)),
        o.addColorStop(1, flashColor(s, 2 * i)),
        r.addPathRaw(n, o, "black", 1, 0, "butt", "none", "none", 0, {
          xScale: 1,
          yScale: u,
          x0: 0,
          y0: 0.5 * (u - 1),
        }),
        r.addPathRaw(h, "none", "black", 2, 0, "butt", "none", "none", 0, {
          xScale: 1,
          yScale: u,
          x0: 0,
          y0: 0.5 * (u - 1),
        });
    }
    if (i > 0.5) {
      if (0 === a) d = new Path2D("M 4 16 a 4 7 0 0 0 8 0");
      else if (1 === a) d = new Path2D("M 8 16 L 8 23 M 5 23 L 11 23");
      else if (2 === a) d = new Path2D("M 9.5 16 L 6 23 L 12 23");
      else if (3 === a)
        d = new Path2D("M 6 16 l 3 0.5 a 5 4 0 0 1 0 6.5 l -4 -0.5");
      else if (4 === a)
        d = new Path2D("M 6 16 L 4 19 L 12.5 19 M 10 16 L 10 23.5");
      else if (5 === a)
        d = new Path2D("M 5 16 L 8 16 a 6 4 0 0 1 0 6.5 l -4 -1");
      else if (6 === a)
        d = new Path2D("M 5 19.5 a 3 3 0 0 1 6 0 a 3 3.5 0 0 1 -6 0 L 5 16");
      else if (7 === a) d = new Path2D("M 9 16 L 5.5 23.5");
      else if (8 === a)
        d = new Path2D("M 5 19.5 a 3 3 0 0 1 6 0 a 3 3.5 0 0 1 -6 0");
      else if (9 === a) d = new Path2D("M 11 16 a 6 6 0 0 1 -5 6");
      (u = 1 / (2 * i - 1)), (o = e.createLinearGradient(0, 16, 16, 16));
      o.addColorStop(0, flashColor(s, 2 * (1 - i))),
        o.addColorStop(0.5, flashColor("#afafaf", 2 * (1 - i))),
        o.addColorStop(1, flashColor(s, 2 * (1 - i))),
        r.addPathRaw(l, o, "black", 1, 0, "butt", "none", "none", 0, {
          xScale: 1,
          yScale: u,
          x0: 0,
          y0: 0.5 * (u - 1),
        }),
        r.addPathRaw(d, "none", "black", 2, 0, "butt", "none", "none", 0, {
          xScale: 1,
          yScale: u,
          x0: 0,
          y0: 0.5 * (u - 1),
        });
    }
    return r;
  }
  static token(e, t = !1, i = !1, a = !1, r = 0, s = 0, o = !1) {
    var n = new PathSet("token", 32, 32);
    if (!a) return n;
    if (!i)
      return o
        ? n
        : (n.add({ text: e, x0: 16, y0: 16, fill: "black", fontsize: 12 }), n);
    if (t)
      var l = 10 + 6 * r,
        h = s - 0.5;
    else (l = 14), (h = 0);
    for (var d = "M ", u = 0; u < 5; u++)
      (d += 16 + l * Math.sin(h + (2 * Math.PI * u) / 5)),
        (d += " "),
        (d += 16 - l * Math.cos(h + (2 * Math.PI * u) / 5)),
        (d += " L "),
        (d += 16 + 0.6 * l * Math.sin(h + (2 * Math.PI * (u + 0.5)) / 5)),
        (d += " "),
        (d += 16 - 0.6 * l * Math.cos(h + (2 * Math.PI * (u + 0.5)) / 5)),
        (d += u < 4 ? " L " : " Z");
    if (t) {
      var c = CANV.select.ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      c.addColorStop(0, "gold"),
        c.addColorStop(1, "darkgoldenrod"),
        n.add({ path: new Path2D(d), fill: c });
    } else
      n.add({ path: new Path2D(d), stroke: "darkgoldenrod", lineWidth: 2 });
    return n.add({ text: e, x0: 16, y0: 16, fill: "black", fontsize: 12 }), n;
  }
  static tokenBase(e, t = !1, i = !1, a = !1, r = 0, s = !1) {
    var o = new PathSet("token", 32, 32);
    if (!a) return o;
    if (!i) {
      if (s) return o;
      var n = CANV.select.ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      n.addColorStop(0, "#BBB"), n.addColorStop(1, "grey");
      var l = new Path2D("M 16 32 a 16 16 0 0 1 0 -32 a 16 16 0 0 1 0 32 Z");
      return o.add({ path: l, stroke: "darkgrey", fill: n, lineWidth: 2 }), o;
    }
    if (0 === r)
      var h = "limegreen",
        d = "green",
        u = "darkgreen";
    else if (1 === r) (h = "skyblue"), (d = "royalblue"), (u = "#3355bd");
    else if (2 === r) (h = "tomato"), (d = "firebrick"), (u = "darkred");
    else if (3 === r)
      (h = "mediumorchid"), (d = "darkmagenta"), (u = "#750075");
    else if (4 === r) (h = "Gold"), (d = "#dba00d"), (u = "DarkGoldenRod");
    n = CANV.select.ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    n.addColorStop(0, h), n.addColorStop(1, d);
    l = new Path2D("M 16 32 a 16 16 0 0 1 0 -32 a 16 16 0 0 1 0 32 Z");
    return (
      o.add({ path: l, fill: n, shadowFill: d }),
      o.add({ path: l, fill: n, stroke: u, lineWidth: 2, shadowFill: d }),
      o
    );
  }
  static ctrlGrey(e) {
    var t = new Tile("ctrlGrey", 32, 32),
      i = new Path2D(
        Helper.makeRoundedPath([4, 28, 28, 4], [4, 4, 28, 28], [5, 5, 5, 5]),
      );
    return t.addPathRaw(i, "#555", "#333", 2, 0, "butt", "none", "none", 3), t;
  }
}
