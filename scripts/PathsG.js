class PathsG {
  static make(e, t, i = !1) {
    var a = t.type,
      r = 0,
      s = MDATA.GATEID[a] + t.orient,
      o = Math.floor(s / 20),
      n = s % 20,
      l = new PathSet(String(a), 32, 32);
    return (
      i && (l.isFancy = !0),
      "sync" === a
        ? ((l = PathsG.syncUnder(l, t.undercol, t.orient)),
          (r = (t.orient % 2) + 3))
        : "switch" === a || "qControl" === a
          ? ((l = PathsG.switchUnder(l, t.undercol, t.orient)),
            (r = 1 + ("qControl" === a)))
          : "measure" === a && (r = 5),
      "compare" !== a &&
        "qCompare" !== a &&
        "qDubCompare" !== a &&
        "cOneCompare" !== a &&
        ((l = PathsG.base(l, t.basecol, !t.isControlled, r, t.rot)),
        t.orient >= 0 &&
          (l = PathsG.connectors(l, r, TILE_EDGES[o][n], t.cdir))),
      (l = PathsG.symbol(l, t)),
      l
    );
  }
  static simpleSwitch(e) {
    var t = new PathSet("switch", 32, 32);
    if (e % 2 == 0) var i = new Path2D("M 0 16 L 32 16");
    else i = new Path2D("M 16 0 L 16 32");
    if (
      (t.add({
        path: i,
        stroke: "MidnightBlue",
        lineWidth: 2,
        lineCap: "round",
        shadowStroke: "dodgerblue",
      }),
      0 === e)
    ) {
      i = new Path2D("M 14 16 L 10 32 L 22 32 L 18 16 Z");
      t.add({
        path: i,
        fill: "Darkgoldenrod",
        lineCap: "butt",
        shadowFill: "goldenrod",
      });
      i = new Path2D("M 14 16 L 11 32 L 21 32 L 18 16 Z");
      t.add({ path: i, fill: "goldenrod", lineCap: "butt" });
    } else if (1 === e) {
      i = new Path2D("M 16 14 L 0 10 L 0 22 L 16 18 Z");
      t.add({
        path: i,
        fill: "Darkgoldenrod",
        lineCap: "butt",
        shadowFill: "goldenrod",
      });
      i = new Path2D("M 16 14 L 0 11 L 0 21 L 16 18 Z");
      t.add({ path: i, fill: "goldenrod", lineCap: "butt" });
    } else if (2 === e) {
      i = new Path2D("M 14 16 L 10 0 L 22 0 L 18 16 Z");
      t.add({
        path: i,
        fill: "Darkgoldenrod",
        lineCap: "butt",
        shadowFill: "goldenrod",
      });
      i = new Path2D("M 14 16 L 11 0 L 21 0 L 18 16 Z");
      t.add({ path: i, fill: "goldenrod", lineCap: "butt" });
    } else if (3 === e) {
      i = new Path2D("M 16 14 L 32 10 L 32 22 L 16 18 Z");
      t.add({
        path: i,
        fill: "Darkgoldenrod",
        lineCap: "butt",
        shadowFill: "goldenrod",
      });
      i = new Path2D("M 16 14 L 32 11 L 32 21 L 16 18 Z");
      t.add({ path: i, fill: "goldenrod", lineCap: "butt" });
    }
    i = new Path2D("M 8 16 a 8 8 0 0 1 16 0 a 8 8 0 0 1 -16 0");
    t.add({ path: i, fill: GRADS.gates, shadowFill: "dodgerblue" });
    i = new Path2D("M 12.5 16 a 3.5 3.5 0 0 1 7 0 a 3.5 3.5 0 0 1 -7 0 Z");
    return t.add({ path: i, fill: "CornflowerBlue", shadowFill: "blue" }), t;
  }
  static simpleControl(e, t) {
    var i = new PathSet("qControl", 32, 32);
    if (t % 2 == 0) var a = new Path2D("M 0 16 L 32 16");
    else a = new Path2D("M 16 0 L 16 32");
    if (
      (i.add({
        path: a,
        stroke: "Darkred",
        lineWidth: 2,
        lineCap: "round",
        shadowStroke: "#DD0000",
      }),
      0 === t)
    ) {
      a = new Path2D("M 14 16 L 10 32 L 22 32 L 18 16 Z");
      i.add({
        path: a,
        fill: "Darkgoldenrod",
        lineCap: "butt",
        shadowFill: "goldenrod",
      });
      a = new Path2D("M 14 16 L 11 32 L 21 32 L 18 16 Z");
      i.add({ path: a, fill: "goldenrod", lineCap: "butt" });
    } else if (1 === t) {
      a = new Path2D("M 16 14 L 0 10 L 0 22 L 16 18 Z");
      i.add({
        path: a,
        fill: "Darkgoldenrod",
        lineCap: "butt",
        shadowFill: "goldenrod",
      });
      a = new Path2D("M 16 14 L 0 11 L 0 21 L 16 18 Z");
      i.add({ path: a, fill: "goldenrod", lineCap: "butt" });
    } else if (2 === t) {
      a = new Path2D("M 14 16 L 10 0 L 22 0 L 18 16 Z");
      i.add({
        path: a,
        fill: "Darkgoldenrod",
        lineCap: "butt",
        shadowFill: "goldenrod",
      });
      a = new Path2D("M 14 16 L 11 0 L 21 0 L 18 16 Z");
      i.add({ path: a, fill: "goldenrod", lineCap: "butt" });
    } else if (3 === t) {
      a = new Path2D("M 16 14 L 32 10 L 32 22 L 16 18 Z");
      i.add({
        path: a,
        fill: "Darkgoldenrod",
        lineCap: "butt",
        shadowFill: "goldenrod",
      });
      a = new Path2D("M 16 14 L 32 11 L 32 21 L 16 18 Z");
      i.add({ path: a, fill: "goldenrod", lineCap: "butt" });
    }
    a = new Path2D("M 8 16 a 8 8 0 0 1 16 0 a 8 8 0 0 1 -16 0");
    i.add({ path: a, fill: GRADS.gates, shadowFill: "#DD0000" });
    a = new Path2D(
      "M 15 13 L 11 13 L 15 10 L 17 10 L 21 13 L 17 13 L 17 17 L 17 20 L 17 20 L 15 20 L 15 20 L 15 17 L 15 14",
    );
    return (
      i.add({ path: a, fill: "#d92b2b", rot: e, shadowFill: "#590000" }), i
    );
  }
  static switchUnder(e, t, i = 0) {
    if (((i = Math.round(i)), 0 === i)) {
      var a = new Path2D("M 14 16 L 10 32 L 22 32 L 18 16 Z");
      e.add({ path: a, fill: t[0], lineCap: "butt", shadowFill: t[1] });
      a = new Path2D("M 14 16 L 11 32 L 21 32 L 18 16 Z");
      e.add({ path: a, fill: t[1], lineCap: "butt" });
    } else if (1 === i) {
      a = new Path2D("M 16 14 L 0 10 L 0 22 L 16 18 Z");
      e.add({ path: a, fill: t[0], lineCap: "butt", shadowFill: t[1] });
      a = new Path2D("M 16 14 L 0 11 L 0 21 L 16 18 Z");
      e.add({ path: a, fill: t[1], lineCap: "butt" });
    } else if (2 === i) {
      a = new Path2D("M 14 16 L 10 0 L 22 0 L 18 16 Z");
      e.add({ path: a, fill: t[0], lineCap: "butt", shadowFill: t[1] });
      a = new Path2D("M 14 16 L 11 0 L 21 0 L 18 16 Z");
      e.add({ path: a, fill: t[1], lineCap: "butt" });
    } else if (3 === i) {
      a = new Path2D("M 16 14 L 32 10 L 32 22 L 16 18 Z");
      e.add({ path: a, fill: t[0], lineCap: "butt", shadowFill: t[1] });
      a = new Path2D("M 16 14 L 32 11 L 32 21 L 16 18 Z");
      e.add({ path: a, fill: t[1], lineCap: "butt" });
    }
    return e;
  }
  static syncUnder(e, t, i = 0) {
    if (((i = Math.round(i)), 0 === i)) {
      var a = new Path2D(
        "M 10 32 a 20 20 0 0 1 8 -16 M 22 32 a 20 20 0 0 0 -8 -16",
      );
      e.add({
        path: a,
        stroke: t[0],
        lineWidth: 6,
        lineCap: "butt",
        shadowStroke: t[1],
      });
      a = new Path2D(
        "M 10 32 a 20 20 0 0 1 8 -16 M 22 32 a 20 20 0 0 0 -8 -16",
      );
      e.add({ path: a, stroke: t[1], lineWidth: 2, lineCap: "round" });
    } else if (1 === i) {
      a = new Path2D("M 0 10 a 20 20 0 0 1 16 8 M 0 22 a 20 20 0 0 0 16 -8");
      e.add({
        path: a,
        stroke: t[0],
        lineWidth: 6,
        lineCap: "butt",
        shadowStroke: t[1],
      });
      a = new Path2D("M 0 10 a 20 20 0 0 1 16 8 M 0 22 a 20 20 0 0 0 16 -8");
      e.add({ path: a, stroke: t[1], lineWidth: 2, lineCap: "round" });
    } else if (2 === i) {
      a = new Path2D("M 10 0 a 20 20 0 0 0 8 16 M 22 0 a 20 20 0 0 1 -8 16");
      e.add({
        path: a,
        stroke: t[0],
        lineWidth: 6,
        lineCap: "butt",
        shadowStroke: t[1],
      });
      a = new Path2D("M 10 0 a 20 20 0 0 0 8 16 M 22 0 a 20 20 0 0 1 -8 16");
      e.add({ path: a, stroke: t[1], lineWidth: 2, lineCap: "round" });
    } else if (3 === i) {
      a = new Path2D(
        "M 32 10 a 20 20 0 0 0 -16 8 M 32 22 a 20 20 0 0 1 -16 -8",
      );
      e.add({
        path: a,
        stroke: t[0],
        lineWidth: 6,
        lineCap: "butt",
        shadowStroke: t[1],
      });
      a = new Path2D(
        "M 32 10 a 20 20 0 0 0 -16 8 M 32 22 a 20 20 0 0 1 -16 -8",
      );
      e.add({ path: a, stroke: t[1], lineWidth: 2, lineCap: "round" });
    }
    return e;
  }
  static targetRing(e, t) {
    var i = new Path2D(
      "M 3 20 l 0 -8 a 9 9 0 0 1 9 -9 l 8 0 a 9 9 0 0 1 9 9 l 0 8 a 9 9 0 0 1 -9 9 l -8 0 a 9 9 0 0 1 -9 -9 Z",
    );
    e.add({ path: i, stroke: t[0], lineWidth: 6, shadowStroke: t[1] });
    i = new Path2D(
      "M 2 20 l 0 -8 a 10 10 0 0 1 10 -10 l 8 0 a 10 10 0 0 1 10 10 l 0 8 a 10 10 0 0 1 -10 10 l -8 0 a 10 10 0 0 1 -10 -10 Z",
    );
    return e.add({ path: i, stroke: t[1], lineWidth: 2 }), e;
  }
  static base(e, t, i = !0, a = 0, r = 0) {
    if (i) {
      if (0 === a || 3 === a || 4 === a || 5 === a) var s = "lightslategrey";
      else if (1 === a) s = "dodgerblue";
      else if (2 === a) s = "#DD0000";
    } else s = "transparent";
    if (0 === a)
      var o = new Path2D("M 16 30 a 14 14 0 0 1 0 -28 a 14 14 0 0 1 0 28 Z");
    else if (a <= 2)
      o = new Path2D("M 8 16 a 8 8 0 0 1 16 0 a 8 8 0 0 1 -16 0");
    else if (3 === a)
      o = new Path2D("M 30 16 a 14 10 0 0 1 -28 0 a 14 10 0 0 1 28 0 Z");
    else if (4 === a)
      o = new Path2D("M 16 30 a 10 14 0 0 1 0 -28 a 10 14 0 0 1 0 28 Z");
    else if (5 === a) {
      var n = 0.2,
        l = 16 + 14 * Math.sin(r + n),
        h = 16 - 14 * Math.cos(r + n),
        d = 16 + 14 * Math.sin(Math.PI + r - n),
        u = 16 - 14 * Math.cos(Math.PI + r - n);
      o = new Path2D(
        "M " + l + " " + h + " a 14 14 0 0 1 " + (d - l) + " " + (u - h) + " Z",
      );
      e.add({ path: o, fill: t, shadowFill: s });
      (l = 16 + 14 * Math.sin(r - n)),
        (h = 16 - 14 * Math.cos(r - n)),
        (d = 16 + 14 * Math.sin(-Math.PI + r + n)),
        (u = 16 - 14 * Math.cos(-Math.PI + r + n)),
        (o = new Path2D(
          "M " +
            l +
            " " +
            h +
            " a 14 14 0 0 0 " +
            (d - l) +
            " " +
            (u - h) +
            " Z",
        ));
    }
    return e.add({ path: o, fill: t, shadowFill: s }), e;
  }
  static connectors(e, t = 0, i = [0, 0, 0, 0], a = -1) {
    if ([0, 3, 4, 5].indexOf(t) >= 0) {
      if (OPTS.fancyGraphics) var r = ["DarkRed", "DarkBlue", "DarkGreen"];
      else r = ["#DB4325", "DarkBlue", "#006164"];
      if (
        (i[0] &&
          0 !== a &&
          ((s = new Path2D("M 2 20 a 1 4 0 0 0 0 -8 a 3 4 0 0 0 0 8 Z")),
          e.add({ path: s, fill: r[i[0] - 1] })),
        i[2] && 2 !== a)
      ) {
        var s = new Path2D("M 30 20 a 3 4 0 0 0 0 -8 a 1 4 0 0 0 0 8 Z");
        e.add({ path: s, fill: r[i[2] - 1] });
      }
      if (i[1] && 1 !== a) {
        s = new Path2D("M 20 2 a 4 3 0 0 0 -8 0 a 4 1 0 0 0 8 0 Z");
        e.add({ path: s, fill: r[i[1] - 1] });
      }
      if (i[3] && 3 !== a) {
        s = new Path2D("M 20 30 a 4 1 0 0 0 -8 0 a 4 3 0 0 0 8 0 Z");
        e.add({ path: s, fill: r[i[3] - 1] });
      }
    }
    return e;
  }
  static creation(e, t, i, a, r = 0) {
    var s = (i * Math.PI) / 2;
    if (0 === r)
      var o = "cornflowerblue",
        n = "blue";
    else (o = "#d92b2b"), (n = "#590000");
    if (Number.isInteger(t)) {
      if (0 === t) {
        var l = new Path2D(
          "M 11 16 a 5 5 0 0 1 10 0 a 5 5 0 0 1 -10 0 M 21 16 L 27 16 M 27 16 l -3 -2 l 0 4 L 27 16",
        );
        e.add({
          path: l,
          stroke: o,
          lineWidth: 2,
          rot: s,
          lineCap: "round",
          shadowStroke: n,
        });
      } else if (1 === t) {
        l = new Path2D(
          "M 11 16 a 5 5 0 0 1 10 0 M 16 16 L 13 19 M 16 16 L 19 19",
        );
        e.add({
          path: l,
          stroke: o,
          lineWidth: 2,
          lineCap: "round",
          shadowStroke: n,
        });
        l = new Path2D("M 27 16 l -3 -2 l 0 4 L 27 16");
        e.add({
          path: l,
          stroke: o,
          lineWidth: 2,
          rot: s,
          lineCap: "round",
          shadowStroke: n,
        });
      } else if (2 === t) {
        l = new Path2D(
          "M 13 13 L 19 19 M 19 13 L 13 19 M 11 16 a 5 5 0 0 1 10 0 a 5 5 0 0 1 -10 0 M 21 16 L 27 16 M 27 16 l -3 -2 l 0 4 L 27 16",
        );
        e.add({
          path: l,
          stroke: o,
          lineWidth: 2,
          rot: s,
          lineCap: "round",
          shadowStroke: n,
        });
      }
    } else {
      if (((e.isFancy = !0), t < 1)) var h = (1 - t) ** 2;
      else if (t > 2) h = (2 - t) ** 2;
      else h = 0;
      l = new Path2D(
        "M 11 16 a 5 5 0 0 1 10 0 a 5 5 0 0 1 -10 0 M 21 16 L 27 16 M 27 16 l -3 -2 l 0 4 L 27 16",
      );
      if (
        (e.add({
          path: l,
          stroke: o,
          lineWidth: 2,
          rot: s,
          lineCap: "round",
          shadowStroke: n,
          alpha: h,
        }),
        t <= 1)
      )
        var d = t ** 2;
      else if (t < 2) d = (2 - t) ** 2;
      else d = 0;
      l = new Path2D(
        "M 11 16 a 5 5 0 0 1 10 0 M 16 16 L 13 19 M 16 16 L 19 19",
      );
      e.add({
        path: l,
        stroke: o,
        lineWidth: 2,
        lineCap: "round",
        shadowStroke: n,
        alpha: d,
      });
      l = new Path2D("M 27 16 l -3 -2 l 0 4 L 27 16");
      if (
        (e.add({
          path: l,
          stroke: o,
          lineWidth: 2,
          rot: s,
          lineCap: "round",
          shadowStroke: n,
          alpha: d,
        }),
        t <= 2 && t > 1)
      )
        var u = (t - 1) ** 2;
      else if (t > 2) u = (3 - t) ** 2;
      else u = 0;
      l = new Path2D(
        "M 13 13 L 19 19 M 19 13 L 13 19 M 11 16 a 5 5 0 0 1 10 0 a 5 5 0 0 1 -10 0 M 21 16 L 27 16 M 27 16 l -3 -2 l 0 4 L 27 16",
      );
      e.add({
        path: l,
        stroke: o,
        lineWidth: 2,
        rot: s,
        lineCap: "round",
        shadowStroke: n,
        alpha: u,
      });
    }
    if (-2 != a) {
      if (-1 === a)
        var c = String.fromCharCode(8734),
          I = 14;
      else (c = String(a)), (I = 10);
      1 === i
        ? e.add({ text: c, x0: 16, y0: 8, fill: "lightgrey", fontsize: I })
        : e.add({ text: c, x0: 16, y0: 25, fill: "lightgrey", fontsize: I });
    }
    return e;
  }
  static symbol(e, t) {
    const i = "CornflowerBlue",
      a = "Blue",
      r = "#d92b2b",
      s = "#590000",
      o = "lightgrey",
      n = "darkslategrey",
      l = GRADS.flame;
    if ("qCombine" === t.type) {
      var h = t.rot + (t.orient * Math.PI) / 2;
      if (0 === t.state) {
        var d = new Path2D(
          "M 4 16 L 27 16 M 16 4 a 12 12 0 0 0 10 12 M 16 28 a 12 12 0 0 1 10 -12 M 27 16 L 20 12 L 20 20 L 27 16",
        );
        e.add({
          path: d,
          stroke: r,
          lineWidth: 2,
          rot: h,
          lineCap: "square",
          shadowStroke: s,
        });
      } else if (1 === t.state) {
        d = new Path2D("M 4 16 L 28 16");
        e.add({
          path: d,
          stroke: r,
          lineWidth: 2,
          rot: h,
          lineCap: "square",
          shadowStroke: s,
        });
        d = new Path2D("M 14 22 L 14 10 L 22 16 Z");
        e.add({ path: d, fill: r, rot: h, shadowFill: s });
      } else if (2 === t.state) {
        if (t.counterMax > 0) {
          d = new Path2D("M 4 16 L 28 16");
          e.add({
            path: d,
            stroke: r,
            lineWidth: 2,
            rot: h,
            lineCap: "square",
            shadowStroke: s,
          });
          d = new Path2D("M 14 22 L 14 10 L 22 16 Z");
          e.add({ path: d, fill: r, rot: h, shadowFill: s });
        } else {
          d = new Path2D("M 4 16 L 12 16 M 20 16 L 28 16 M 14 20 L 18 12");
          e.add({
            path: d,
            stroke: r,
            lineWidth: 2,
            rot: h,
            lineCap: "square",
            shadowStroke: s,
          });
        }
        e.add({
          text: String(t.counterMax),
          x0: 16,
          y0: 24,
          fill: "lightgrey",
          size: 10,
        });
      }
    } else if ("cCombine" === t.type) {
      h = t.rot + (t.orient * Math.PI) / 2;
      if (0 === t.state) {
        d = new Path2D(
          "M 4 16 L 27 16 M 16 4 a 12 12 0 0 0 10 12 M 16 28 a 12 12 0 0 1 10 -12 M 27 16 L 20 12 L 20 20 L 27 16",
        );
        e.add({
          path: d,
          stroke: i,
          lineWidth: 2,
          rot: h,
          lineCap: "square",
          shadowStroke: a,
        });
      } else {
        d = new Path2D("M 4 16 L 28 16");
        e.add({
          path: d,
          stroke: i,
          lineWidth: 2,
          rot: h,
          lineCap: "square",
          shadowStroke: a,
        });
        d = new Path2D("M 14 22 L 14 10 L 22 16 Z");
        e.add({ path: d, fill: i, rot: h, shadowFill: a });
      }
    } else if ("cSplit" === t.type) {
      (h = t.rot + (t.orient * Math.PI) / 2),
        (d = new Path2D(
          "M 4 16 L 9 16 a 7 8 0 0 1 7 8 l -2.5 0 l 2.5 3 l 2.5 -3 L 16 24 L 16 26 M 4 16 L 9 16 a 7 8 0 0 0 7 -8 l -2.5 0 l 2.5 -3 l 2.5 3 L 16 8 L 16 6 M 4 16 L 24 16 l 0 -2.5 l 3 2.5 l -3 2.5 L 24 16 L 26 16",
        ));
      e.add({
        path: d,
        stroke: i,
        lineWidth: 2,
        rot: h,
        lineCap: "round",
        shadowStroke: a,
      });
    } else if ("rotate" === t.type)
      if (1 === t.state) {
        d = new Path2D(
          "M 12 12 a 4 4 0 0 1 8 0 a 4 4 0 0 1 -4 4 l 0 4 M 16 23 L 16 27",
        );
        e.add({
          path: d,
          stroke: r,
          lineWidth: 3,
          lineCap: "butt",
          shadowStroke: s,
        });
      } else if (2 === t.state) {
        d = new Path2D(
          "M 12 12 a 4 4 0 0 1 8 0 a 4 4 0 0 1 -4 4 l 0 4 M 16 23 L 16 27",
        );
        e.add({
          path: d,
          stroke: r,
          lineWidth: 3,
          lineCap: "butt",
          shadowStroke: s,
        });
      } else {
        var u = Helper.boundAngle(t.rot);
        if (u < 0) {
          d = new Path2D(
            "M 16 16 L 16 6 a 10 10 0 0 0 " +
              10 * Math.sin(u) +
              " " +
              (10 - 10 * Math.cos(u)),
          );
          e.add({
            path: d,
            stroke: r,
            lineWidth: 3,
            lineCap: "butt",
            shadowStroke: s,
          });
          d = new Path2D(
            "M 10 15 L 10 12 a 10 10 0 0 0 -5 4 a 10 10 0 0 0 5 4 L 10 17 L 27 17 L 27 15 L 10 15 Z",
          );
          e.add({
            path: d,
            fill: o,
            rot: u + Math.PI / 2,
            shadowFill: "darkslategrey",
          });
        } else {
          d = new Path2D(
            "M 16 16 L 16 6 a 10 10 0 0 1 " +
              10 * Math.sin(u) +
              " " +
              (10 - 10 * Math.cos(u)),
          );
          e.add({
            path: d,
            stroke: r,
            lineWidth: 3,
            lineCap: "butt",
            shadowStroke: s,
          });
          d = new Path2D(
            "M 10 15 L 10 12 a 10 10 0 0 0 -5 4 a 10 10 0 0 0 5 4 L 10 17 L 27 17 L 27 15 L 10 15 Z",
          );
          e.add({
            path: d,
            fill: o,
            rot: u + Math.PI / 2,
            shadowFill: "darkslategrey",
          });
        }
        d = new Path2D("M 12 16 a 4 4 0 0 1 8 0 a 4 4 0 0 1 -8 0");
        e.add({ path: d, fill: r, shadowFill: s });
      }
    else if ("trash" === t.type) {
      var c = new Path2D(),
        I =
          ((d = new Path2D(
            "M1006 2223 c 64 -145 88 -310 64 -439 -28 -148 -109 -335 -258 -588 -70 -119 -77 -127 -86 -105 -38 93 -151 318 -227 455 -49 89 -99 184 -109 212 -41 108 -36 202 21 371 16 47 27 86 25 88 -7 8 -103 -30 -149 -59 -108 -69 -212 -231 -259 -403 -30 -111 -33 -414 -4 -518 39 -147 103 -269 187 -361 53 -58 107 -102 115 -93 2 2 16 50 29 106 29 119 53 173 66 149 4 -8 18 -69 29 -134 37 -211 111 -562 129 -618 34 -97 105 -182 215 -256 56 -38 66 -32 66 42 0 70 28 271 51 371 28 117 103 264 263 512 227 351 241 387 241 605 -1 130 -3 153 -28 225 -55 163 -191 354 -306 427 -52 33 -87 38 -75 11z",
          )),
          new DOMMatrix());
      (I.a = 0.01),
        (I.b = 0),
        (I.c = 0),
        (I.d = 0.01),
        (I.e = 9),
        (I.f = 4),
        c.addPath(d, I),
        e.add({ path: c, fill: l, shadowFill: n }),
        1 === t.state &&
          t.counter >= 0 &&
          e.add({
            text: String(t.counter),
            x0: 16,
            y0: 25,
            fill: "lightgrey",
            fontsize: 10,
          });
    } else if ("switch" === t.type) {
      if (((e.isFancy = !0), 0 === t.rot)) {
        d = new Path2D("M 12 15 a 4 4 0 0 1 8 0 L 20 17 a 4 4 0 0 1 -8 0 Z");
        e.add({
          path: d,
          stroke: i,
          lineWidth: 2,
          lineCap: "square",
          shadowStroke: a,
          alpha: (1 - t.talpha) ** 0.25,
        });
      } else if (1 === t.rot) {
        d = new Path2D("M 14 13 L 16 11 L 16 20 M 14 20 L 18 20");
        e.add({
          path: d,
          stroke: i,
          lineWidth: 2,
          lineCap: "butt",
          shadowStroke: a,
          alpha: (1 - t.talpha) ** 0.25,
        });
      }
      d = new Path2D("M 12.5 16 a 3.5 3.5 0 0 1 7 0 a 3.5 3.5 0 0 1 -7 0 Z");
      e.add({ path: d, fill: i, shadowFill: a, alpha: t.talpha });
    } else if ("qControl" === t.type) {
      (u = Helper.boundAngle(t.rot)),
        (d = new Path2D(
          "M 15 13 L 11 13 L 15 10 L 17 10 L 21 13 L 17 13 L 17 17 L 17 20 L 17 20 L 15 20 L 15 20 L 15 17 L 15 14",
        ));
      e.add({ path: d, fill: r, rot: u, shadowFill: s });
    } else if ("measure" === t.type) {
      (u = Helper.boundAngle(t.rot)),
        (d = new Path2D("M 30 14 a 10 10 0 0 0 -6 -5 L 23 12 L 3 12 L 2 14 Z"));
      e.add({ path: d, fill: r, rot: u - Math.PI / 2, shadowFill: s });
      d = new Path2D("M 30 18 a 10 10 0 0 1 -6 5 L 23 20 L 3 20 L 2 18 Z");
      e.add({ path: d, fill: r, rot: u - Math.PI / 2, shadowFill: s });
    } else if ("cInvert" === t.type) {
      u = t.rot;
      if (0 === t.state) {
        if (u === Math.round(u)) {
          if (0 === t.orient)
            if (0 == u) {
              d = new Path2D(
                "M 5 16 L 10 16 M 24 16 L 27 16 M 10 11 L 19 16 L 10 21 L 10 11 M 20 16 a 2 2 0 0 1 4 0 a 2 2 0 0 1 -4 0",
              );
              e.add({
                path: d,
                stroke: i,
                lineWidth: 2,
                lineCap: "round",
                shadowStroke: a,
              });
            } else {
              d = new Path2D("M 5 16 L 27 16");
              e.add({
                path: d,
                stroke: i,
                lineWidth: 2,
                lineCap: "round",
                shadowStroke: a,
              });
            }
          else if (1 == t.orient)
            if (0 == u) {
              d = new Path2D(
                "M 16 27 L 16 23 M 16 5 L 16 9 M 10 11 L 19 16 L 10 21 L 10 11 M 20 16 a 2 2 0 0 1 4 0 a 2 2 0 0 1 -4 0",
              );
              e.add({
                path: d,
                stroke: i,
                lineWidth: 2,
                lineCap: "round",
                shadowStroke: a,
              });
            } else {
              d = new Path2D("M 16 5 L 16 27");
              e.add({
                path: d,
                stroke: i,
                lineWidth: 2,
                lineCap: "round",
                shadowStroke: a,
              });
            }
        } else if (((e.isFancy = !0), 0 === t.orient)) {
          d = new Path2D(
            "M 5 16 L 10 16 M 24 16 L 27 16 M 10 11 L 19 16 L 10 21 L 10 11 M 20 16 a 2 2 0 0 1 4 0 a 2 2 0 0 1 -4 0",
          );
          e.add({
            path: d,
            stroke: i,
            lineWidth: 2,
            lineCap: "round",
            shadowStroke: a,
            alpha: 1 - u,
          });
          d = new Path2D("M 5 16 L 27 16");
          e.add({
            path: d,
            stroke: i,
            lineWidth: 2,
            lineCap: "round",
            shadowStroke: a,
            alpha: u,
          });
        } else if (1 == t.orient) {
          d = new Path2D(
            "M 16 27 L 16 23 M 16 5 L 16 9 M 10 11 L 19 16 L 10 21 L 10 11 M 20 16 a 2 2 0 0 1 4 0 a 2 2 0 0 1 -4 0",
          );
          e.add({
            path: d,
            stroke: i,
            lineWidth: 2,
            lineCap: "round",
            shadowStroke: a,
            alpha: 1 - u,
          });
          d = new Path2D("M 16 5 L 16 27");
          e.add({
            path: d,
            stroke: i,
            lineWidth: 2,
            lineCap: "round",
            shadowStroke: a,
            alpha: u,
          });
        }
      } else if (1 === t.state) {
        if (((e.isFancy = !0), 0 === t.orient)) {
          d = new Path2D(
            "M 27 16 L 24 16 M 24 14 L 24 18 M 5 16 L 8 16 M 8 14 L 8 18 M 12 15 a 4 4 0 0 1 8 0 L 20 17 a 4 4 0 0 1 -8 0 Z",
          );
          e.add({
            path: d,
            stroke: i,
            lineWidth: 2,
            lineCap: "round",
            shadowStroke: a,
            alpha: 1 - u,
          });
          d = new Path2D("M 5 16 L 27 16");
          e.add({
            path: d,
            stroke: i,
            lineWidth: 2,
            lineCap: "round",
            shadowStroke: a,
            alpha: u,
          });
        } else if (1 == t.orient) {
          d = new Path2D(
            "M 16 5 L 16 8 M 14 8 L 18 8 M 16 27 L 16 24 M 14 24 L 18 24 M 12 15 a 4 4 0 0 1 8 0 L 20 17 a 4 4 0 0 1 -8 0 Z",
          );
          e.add({
            path: d,
            stroke: i,
            lineWidth: 2,
            lineCap: "round",
            shadowStroke: a,
            alpha: 1 - u,
          });
          d = new Path2D("M 16 5 L 16 27");
          e.add({
            path: d,
            stroke: i,
            lineWidth: 2,
            lineCap: "round",
            shadowStroke: a,
            alpha: u,
          });
        }
      } else if (3 === t.state) {
        d = new Path2D(
          "M 12 12 a 4 4 0 0 1 8 0 a 4 4 0 0 1 -4 4 l 0 4 M 16 23 L 16 27",
        );
        e.add({
          path: d,
          stroke: i,
          lineWidth: 3,
          lineCap: "butt",
          shadowStroke: a,
        });
      }
    } else if ("sync" === t.type) {
      d = new Path2D("M 10 16 a 6 6 0 0 1 12 0 a 6 6 0 0 1 -12 0");
      e.add({
        path: d,
        stroke: l,
        lineWidth: 2,
        lineCap: "square",
        shadowStroke: n,
      });
    } else if ("delay" === t.type) {
      var E = t.rot + t.state;
      if ((E < -0.5 && (E += 8), E > 0)) {
        d = new Path2D("M 16 10 l 0 -7");
        e.add({ path: d, stroke: o, lineWidth: 3, lineCap: "butt" });
      }
      if (E > 0)
        if (E <= 4) {
          var S = 11 * Math.sin((E * Math.PI) / 4),
            f = 11 * (1 - Math.cos((E * Math.PI) / 4));
          d = new Path2D("M 16 5 a 11 11 0 0 1 " + S + " " + f);
          e.add({
            path: d,
            stroke: o,
            lineWidth: 3,
            lineCap: "butt",
            shadowStroke: n,
          });
        } else if (E < 8) {
          (S = 11 * Math.sin((E * Math.PI) / 4)),
            (f = 11 * (Math.cos(((E - 4) * Math.PI) / 4) - 1)),
            (d = new Path2D("M 16 27 a 11 11 0 0 1 " + S + " " + f));
          e.add({
            path: d,
            stroke: o,
            lineWidth: 3,
            lineCap: "butt",
            shadowStroke: n,
          });
          d = new Path2D("M 16 5 a 11 11 0 0 1 0 22");
          e.add({
            path: d,
            stroke: o,
            lineWidth: 3,
            lineCap: "butt",
            shadowStroke: n,
          });
        } else {
          e.add({
            text: String(Math.floor((E + 1e-5) / 8)),
            x0: 16,
            y0: 16,
            fill: "lightgrey",
            fontsize: 10,
          });
          d = new Path2D("M 16 27 a 11 11 0 0 1 0 -22");
          e.add({
            path: d,
            stroke: o,
            lineWidth: 3,
            lineCap: "butt",
            shadowStroke: n,
          });
          d = new Path2D("M 16 5 a 11 11 0 0 1 0 22");
          e.add({
            path: d,
            stroke: o,
            lineWidth: 3,
            lineCap: "butt",
            shadowStroke: n,
          });
        }
      var p = 16 + 6 * Math.sin((E * Math.PI) / 4),
        T = 16 - 6 * Math.cos((E * Math.PI) / 4),
        R = 16 + 14 * Math.sin((E * Math.PI) / 4),
        m = 16 - 14 * Math.cos((E * Math.PI) / 4);
      d = new Path2D("M " + p + " " + T + "L " + R + " " + m);
      e.add({
        path: d,
        stroke: o,
        lineWidth: 3,
        lineCap: "butt",
        shadowStroke: n,
      });
      d = new Path2D("M 10 16 a 6 6 0 0 1 12 0 a 6 6 0 0 1 -12 0");
      e.add({
        path: d,
        stroke: l,
        lineWidth: 2,
        lineCap: "square",
        shadowStroke: n,
      });
    } else if ("upgrade" === t.type) {
      d = new Path2D(
        "M 28 15 L 23 15 a 15 8 0 0 0 -11 -6 L 12 15 L 4 15 L 4 17 L 12 17 L 12 23 a 15 8 0 0 0 11 -6 L 28 17 Z",
      );
      e.add({ path: d, fill: l, rot: (t.orient * Math.PI) / 2, shadowFill: n });
      d = new Path2D(
        "M 10 15 L 10 12 a 10 10 0 0 0 -5 4 a 10 10 0 0 0 5 4 L 10 17 L 27 17 L 27 15 L 10 15 Z",
      );
      e.add({ path: d, fill: o, rot: t.rot + Math.PI / 2, shadowFill: n });
    } else if ("qFlip" === t.type) {
      u = Helper.boundAngle(t.rot);
      if (t.state === Math.round(t.state)) {
        if (0 === t.state) {
          d = new Path2D(
            "M 10 15 L 10 12 a 10 10 0 0 0 -5 4 a 10 10 0 0 0 5 4 L 10 17 L 27 17 L 27 15 L 10 15 Z",
          );
          e.add({ path: d, fill: o, rot: u + Math.PI / 2, shadowFill: n });
          d = new Path2D(
            "M 16 22 l -2 -1 l 1 4 l 4 -2 L 16 22 L 16 23 a 9 9 0 0 0 0 -14 l 0 1 l -2 1 l 1 -4 l 4 2 L 16 10",
          );
          e.add({
            path: d,
            stroke: r,
            lineWidth: 2,
            rot: u + Math.PI / 2,
            lineCap: "butt",
            shadowStroke: s,
          });
        } else if (1 === t.orient) {
          d = new Path2D("M 16 5 L 16 27");
          e.add({
            path: d,
            stroke: r,
            lineWidth: 2,
            lineCap: "round",
            shadowStroke: s,
          });
        } else if (0 === t.orient) {
          d = new Path2D("M 5 16 L 27 16");
          e.add({
            path: d,
            stroke: r,
            lineWidth: 2,
            lineCap: "round",
            shadowStroke: s,
          });
        }
      } else {
        e.isFancy = !0;
        d = new Path2D(
          "M 10 15 L 10 12 a 10 10 0 0 0 -5 4 a 10 10 0 0 0 5 4 L 10 17 L 27 17 L 27 15 L 10 15 Z",
        );
        e.add({
          path: d,
          fill: o,
          rot: u + Math.PI / 2,
          shadowFill: n,
          alpha: 1 - t.state,
        });
        d = new Path2D(
          "M 16 22 l -2 -1 l 1 4 l 4 -2 L 16 22 L 16 23 a 9 9 0 0 0 0 -14 l 0 1 l -2 1 l 1 -4 l 4 2 L 16 10",
        );
        if (
          (e.add({
            path: d,
            stroke: r,
            lineWidth: 2,
            rot: u + Math.PI / 2,
            lineCap: "butt",
            shadowStroke: s,
            alpha: 1 - t.state,
          }),
          1 === t.orient)
        ) {
          d = new Path2D("M 16 5 L 16 27");
          e.add({
            path: d,
            stroke: r,
            lineWidth: 2,
            lineCap: "round",
            shadowStroke: s,
            alpha: t.state,
          });
        } else if (0 === t.orient) {
          d = new Path2D("M 5 16 L 27 16");
          e.add({
            path: d,
            stroke: r,
            lineWidth: 2,
            lineCap: "round",
            shadowStroke: s,
            alpha: t.state,
          });
        }
      }
    } else if ("cCreate" === t.type)
      e = PathsG.creation(e, t.rot, t.orient, t.remaining, 0);
    else if ("qCreate" === t.type)
      e = PathsG.creation(e, t.rot, t.orient, t.remaining, 1);
    else if ("compare" === t.type) {
      if (t.state < 5)
        var g = "Wheat",
          A = "SandyBrown";
      else (g = "SandyBrown"), (A = "Sienna");
      if (t.ctx) {
        var C = t.ctx.createLinearGradient(-8, 16, 40, 16);
        C.addColorStop(0, g),
          C.addColorStop(Math.max(TIMER.glareRatio / 2 - 0.2, 0), g),
          C.addColorStop(TIMER.glareRatio / 2, A),
          C.addColorStop(Math.min(TIMER.glareRatio / 2 + 0.2, 1), g),
          C.addColorStop(Math.max(0.5 + TIMER.glareRatio / 2 - 0.2, 0), g),
          C.addColorStop(0.5 + TIMER.glareRatio / 2, A),
          C.addColorStop(Math.min(0.5 + TIMER.glareRatio / 2 + 0.2, 1), g),
          C.addColorStop(1, g);
      } else C = g;
      d = new Path2D("M 16 6 a 10 10 0 0 1 0 20 a 10 10 0 0 1 0 -20 Z");
      e.add({ path: d, fill: C, shadowFill: "lightslategrey" });
      d = new Path2D("M 16 6 a 10 10 0 0 1 0 20 a 10 10 0 0 1 0 -20 Z");
      e.add({ path: d, stroke: A, lineWidth: 1, lineCap: "square" });
      d = new Path2D("M 10 16 l -10 -4 l 0 8 Z");
      e.add({
        path: d,
        fill: "MidnightBlue",
        rot: (t.orient * Math.PI) / 2,
        shadowFill: "lightslategrey",
      });
      d = new Path2D("M 16 10 l -4 -10 l 8 0 Z");
      e.add({
        path: d,
        fill: "MidnightBlue",
        rot: (t.orient * Math.PI) / 2,
        shadowFill: "lightslategrey",
      });
    } else if ("qCompare" === t.type) {
      if (t.state < 5) {
        (g = "lightgreen"), (A = "MediumSeaGreen");
        var L = "DarkOrchid",
          D = "purple";
      } else if (t.state >= 5)
        (g = flashColor("MediumSeaGreen", TIMER.trigRatioDub)),
          (A = flashColor("darkgreen", TIMER.trigRatioDub)),
          (L = flashColor("Indigo", TIMER.trigRatioDub)),
          (D = flashColor("purple", TIMER.trigRatioDub));
      if (t.ctx) {
        C = t.ctx.createLinearGradient(-8, 16, 40, 16);
        C.addColorStop(0, g),
          C.addColorStop(Math.max(TIMER.glareRatio / 2 - 0.2, 0), g),
          C.addColorStop(TIMER.glareRatio / 2, A),
          C.addColorStop(Math.min(TIMER.glareRatio / 2 + 0.2, 1), g),
          C.addColorStop(Math.max(0.5 + TIMER.glareRatio / 2 - 0.2, 0), g),
          C.addColorStop(0.5 + TIMER.glareRatio / 2, A),
          C.addColorStop(Math.min(0.5 + TIMER.glareRatio / 2 + 0.2, 1), g),
          C.addColorStop(1, g);
      } else C = g;
      d = new Path2D("M 16 6 a 10 10 0 0 1 0 20 a 10 10 0 0 1 0 -20 Z");
      e.add({ path: d, fill: C, shadowFill: "lightslategrey" });
      d = new Path2D("M 16 6 a 10 10 0 0 1 0 20 a 10 10 0 0 1 0 -20 Z");
      e.add({ path: d, stroke: A, lineWidth: 1, lineCap: "square" });
      d =
        "M 16 5 L 13 0 L 19 0 Z M 5 16 L 0 13 L 0 19 Z M 27 16 L 32 13 L 32 19 Z";
      if (
        (e.add({
          path: new Path2D(d),
          rot: (-t.orient * Math.PI) / 2,
          stroke: "DarkRed",
          lineWidth: 3,
        }),
        t.state > 0)
      ) {
        d = new Path2D(
          "M 15 23 L 15 14 L 11 14 L 15 9 L 17 9 L 21 14 L 17 14 L 17 23 Z",
        );
        e.add({ path: d, fill: L, rot: t.rot, shadowFill: D, shadowOffset: 1 }),
          (e.isFancy = !0);
      }
    } else if ("qDubCompare" === t.type) {
      if (t.state < 5) (g = "lightgreen"), (A = "MediumSeaGreen");
      else if (t.state >= 5)
        (g = flashColor("MediumSeaGreen", TIMER.trigRatioDub)),
          (A = flashColor("darkgreen", TIMER.trigRatioDub));
      if (t.ctx) {
        C = t.ctx.createLinearGradient(-32, 16, 64, 0);
        C.addColorStop(0, g),
          C.addColorStop(Math.max(TIMER.glareRatio / 2 - 0.2, 0), g),
          C.addColorStop(TIMER.glareRatio / 2, A),
          C.addColorStop(Math.min(TIMER.glareRatio / 2 + 0.2, 1), g),
          C.addColorStop(Math.max(0.5 + TIMER.glareRatio / 2 - 0.2, 0), g),
          C.addColorStop(0.5 + TIMER.glareRatio / 2, A),
          C.addColorStop(Math.min(0.5 + TIMER.glareRatio / 2 + 0.2, 1), g),
          C.addColorStop(1, g);
      } else C = g;
      d = new Path2D("M 16 6 a 10 10 0 0 1 0 20 a 10 10 0 0 1 0 -20 Z");
      e.add({ path: d, fill: C, shadowFill: "lightslategrey" });
      d = new Path2D("M 16 6 a 10 10 0 0 1 0 20 a 10 10 0 0 1 0 -20 Z");
      e.add({ path: d, stroke: A, lineWidth: 1, lineCap: "square" });
      d = "M 6 16 L 0 13 L 0 19 Z";
      e.add({
        path: new Path2D(d),
        stroke: "DarkRed",
        lineWidth: 3,
        rot: (t.rot * Math.PI) / 2,
      });
    } else if ("cOneCompare" === t.type) {
      (g = "Wheat"), (A = "SandyBrown");
      if (t.ctx) {
        C = t.ctx.createLinearGradient(-8, 16, 40, 16);
        C.addColorStop(0, g),
          C.addColorStop(Math.max(TIMER.glareRatio / 2 - 0.2, 0), g),
          C.addColorStop(TIMER.glareRatio / 2, A),
          C.addColorStop(Math.min(TIMER.glareRatio / 2 + 0.2, 1), g),
          C.addColorStop(Math.max(0.5 + TIMER.glareRatio / 2 - 0.2, 0), g),
          C.addColorStop(0.5 + TIMER.glareRatio / 2, A),
          C.addColorStop(Math.min(0.5 + TIMER.glareRatio / 2 + 0.2, 1), g),
          C.addColorStop(1, g);
      } else C = g;
      d = new Path2D("M 16 6 a 10 10 0 0 1 0 20 a 10 10 0 0 1 0 -20 Z");
      e.add({ path: d, fill: C, shadowFill: "lightslategrey" });
      d = new Path2D("M 16 6 a 10 10 0 0 1 0 20 a 10 10 0 0 1 0 -20 Z");
      e.add({ path: d, stroke: A, lineWidth: 1, lineCap: "square" });
      d = new Path2D("M 16 10 l -4 -10 l 8 0 Z");
      if (
        (e.add({
          path: d,
          fill: "MidnightBlue",
          rot: (3 * Math.PI) / 2,
          shadowFill: "lightslategrey",
        }),
        t.counterMax > 0)
      ) {
        var b = Math.round((t.counter / t.counterMax) * 100);
        e.add({ text: String(b), x0: 16, y0: 16, fill: "black", fontsize: 12 });
      }
    }
    return e;
  }
}
