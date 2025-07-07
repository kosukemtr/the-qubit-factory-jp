class PathsX {
  static boardArrow(e, t, i, a, r = 1) {
    var s = [];
    if (a > 0 && a < 1) {
      if (((a = Math.max(0, a)), (a = Math.min(1, a)), 1 === t)) {
        var o = e.createLinearGradient(-32, -32, 64, 64);
        o.addColorStop(0, "Darkred"),
          o.addColorStop(Math.max(a - 0.2, 0), "Darkred"),
          o.addColorStop(a, "tomato"),
          o.addColorStop(Math.min(a + 0.2, 1), "Darkred"),
          o.addColorStop(1, "Darkred");
      } else if (2 === t) {
        o = e.createLinearGradient(-32, -32, 64, 64);
        o.addColorStop(0, "MidnightBlue"),
          o.addColorStop(Math.max(a - 0.2, 0), "MidnightBlue"),
          o.addColorStop(a, "RoyalBlue"),
          o.addColorStop(Math.min(a + 0.2, 1), "MidnightBlue"),
          o.addColorStop(1, "MidnightBlue");
      }
    } else if (1 === t) o = "Darkred";
    else if (2 === t) o = "MidnightBlue";
    if (0 === i);
    else if (1 === i) {
      var n = "M 16 0 L 13 6 L 19 6 Z";
      s.push({ path: new Path2D(n), stroke: o, lineWidth: 3 });
    } else if (2 === i) {
      n = "M 32 16 L 26 13 L 26 19 Z";
      s.push({ path: new Path2D(n), stroke: o, lineWidth: 3 });
    }
    return s;
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
  static qWire(e, t, i) {
    if (i > 0 && i < 1) {
      (i = Math.max(0, i)), (i = Math.min(1, i));
      var a = e.createLinearGradient(-32, -32, 64, 64);
      a.addColorStop(0, "Darkred"),
        a.addColorStop(Math.max(i - 0.2, 0), "Darkred"),
        a.addColorStop(i, "tomato"),
        a.addColorStop(Math.min(i + 0.2, 1), "Darkred"),
        a.addColorStop(1, "Darkred");
      var r = e.createLinearGradient(-32, -32, 64, 64);
      r.addColorStop(0, "MidnightBlue"),
        r.addColorStop(Math.max(i - 0.2, 0), "MidnightBlue"),
        r.addColorStop(i, "RoyalBlue"),
        r.addColorStop(Math.min(i + 0.2, 1), "MidnightBlue"),
        r.addColorStop(1, "MidnightBlue");
    } else (a = "Darkred"), (r = "MidnightBlue");
    var s = [];
    return (
      12 === t
        ? (s.push({
            path: new Path2D(WIREPATHS.q[t][0]),
            stroke: a,
            strokeWidth: 2,
            shadowStroke: "#DD0000",
          }),
          s.push({
            path: new Path2D(WIREPATHS.q[t][1]),
            stroke: r,
            strokeWidth: 2,
            shadowStroke: "dodgerblue",
          }))
        : 13 === t
          ? (s.push({
              path: new Path2D(WIREPATHS.q[t][0]),
              stroke: r,
              strokeWidth: 2,
              shadowStroke: "dodgerblue",
            }),
            s.push({
              path: new Path2D(WIREPATHS.q[t][1]),
              stroke: a,
              strokeWidth: 2,
              shadowStroke: "#DD0000",
            }))
          : (s.push({
              path: new Path2D(WIREPATHS.q[t]),
              stroke: a,
              strokeWidth: 2,
              shadowStroke: "#DD0000",
            }),
            s.push({
              path: new Path2D(WIREPATHS.q[t]),
              stroke: a,
              strokeWidth: 2,
              shadowStroke: "#DD0000",
            })),
      s
    );
  }
  static cWire(e, t, i) {
    if (i > 0 && i < 1) {
      (i = Math.max(0, i)), (i = Math.min(1, i));
      var a = e.createLinearGradient(-32, -32, 64, 64);
      a.addColorStop(0, "Darkred"),
        a.addColorStop(Math.max(i - 0.2, 0), "Darkred"),
        a.addColorStop(i, "tomato"),
        a.addColorStop(Math.min(i + 0.2, 1), "Darkred"),
        a.addColorStop(1, "Darkred");
      var r = e.createLinearGradient(-32, -32, 64, 64);
      r.addColorStop(0, "MidnightBlue"),
        r.addColorStop(Math.max(i - 0.2, 0), "MidnightBlue"),
        r.addColorStop(i, "RoyalBlue"),
        r.addColorStop(Math.min(i + 0.2, 1), "MidnightBlue"),
        r.addColorStop(1, "MidnightBlue");
    } else (a = "Darkred"), (r = "MidnightBlue");
    var s = [];
    return (
      12 === t
        ? (s.push({
            path: new Path2D(WIREPATHS.c[t][0]),
            stroke: r,
            strokeWidth: 2,
            shadowStroke: "dodgerblue",
          }),
          s.push({
            path: new Path2D(WIREPATHS.c[t][1]),
            stroke: a,
            strokeWidth: 2,
            shadowStroke: "#DD0000",
          }))
        : 13 === t
          ? (s.push({
              path: new Path2D(WIREPATHS.c[t][0]),
              stroke: a,
              strokeWidth: 2,
              shadowStroke: "#DD0000",
            }),
            s.push({
              path: new Path2D(WIREPATHS.c[t][1]),
              stroke: r,
              strokeWidth: 2,
              shadowStroke: "dodgerblue",
            }))
          : s.push({
              path: new Path2D(WIREPATHS.c[t]),
              stroke: r,
              strokeWidth: 2,
              shadowStroke: "dodgerblue",
            }),
      s
    );
  }
  static mWire(e, t, i) {
    if (i > 0 && i < 1) {
      (i = Math.max(0, i)), (i = Math.min(1, i));
      var a = e.createLinearGradient(-32, -32, 64, 64);
      a.addColorStop(0, "Darkred"),
        a.addColorStop(Math.max(i - 0.2, 0), "Darkred"),
        a.addColorStop(i, "tomato"),
        a.addColorStop(Math.min(i + 0.2, 1), "Darkred"),
        a.addColorStop(1, "Darkred");
      var r = e.createLinearGradient(-32, -32, 64, 64);
      r.addColorStop(0, "MidnightBlue"),
        r.addColorStop(Math.max(i - 0.2, 0), "MidnightBlue"),
        r.addColorStop(i, "RoyalBlue"),
        r.addColorStop(Math.min(i + 0.2, 1), "MidnightBlue"),
        r.addColorStop(1, "MidnightBlue");
    } else (a = "Darkred"), (r = "MidnightBlue");
    var s = [];
    if (
      (16 === t &&
        s.push({
          path: new Path2D("M 8 16 L 24 16 L 21 13 M 24 16 L 21 19"),
          stroke: "black",
          strokeWidth: 15,
          shadowStroke: "lightslategrey",
        }),
      t <= 7)
    ) {
      if (t > 3) {
        var o = r,
          n = a,
          l = "dodgerblue",
          h = "#DD0000";
        t -= 4;
      } else (o = a), (n = r), (l = "#DD0000"), (h = "dodgerblue");
      0 === t
        ? (s.push({
            path: new Path2D("M 0 16 L 11 16 a 1 1 0 0 0 10 0 L 32 16"),
            stroke: o,
            strokeWidth: 2,
            shadowStroke: l,
          }),
          s.push({
            path: new Path2D(
              "M 16 12 l 2 2 l -2 2 l -2 -2 l 2 -2 M 16 16 L 16 0",
            ),
            stroke: n,
            strokeWidth: 2,
            shadowStroke: h,
          }))
        : 1 === t
          ? (s.push({
              path: new Path2D("M 16 0 L 16 11 a 1 1 0 0 0 0 10 L 16 32"),
              stroke: o,
              strokeWidth: 2,
              shadowStroke: l,
            }),
            s.push({
              path: new Path2D(
                "M 20 16 l -2 2 l -2 -2 l 2 -2 l 2 2 M 16 16 L 32 16",
              ),
              stroke: n,
              strokeWidth: 2,
              shadowStroke: h,
            }))
          : 2 === t
            ? (s.push({
                path: new Path2D("M 0 16 L 11 16 a 1 1 0 0 1 10 0 L 32 16"),
                stroke: o,
                strokeWidth: 2,
                shadowStroke: l,
              }),
              s.push({
                path: new Path2D(
                  "M 16 20 l -2 -2 l 2 -2 l 2 2 l -2 2 M 16 16 L 16 32",
                ),
                stroke: n,
                strokeWidth: 2,
                shadowStroke: h,
              }))
            : 3 === t &&
              (s.push({
                path: new Path2D("M 16 0 L 16 11 a 1 1 0 0 1 0 10 L 16 32"),
                stroke: o,
                strokeWidth: 2,
                shadowStroke: l,
              }),
              s.push({
                path: new Path2D(
                  "M 12 16 L 14 14 L 16 16 L 14 18 L 12 16 M 14 16 L 0 16",
                ),
                stroke: n,
                strokeWidth: 2,
                shadowStroke: h,
              }));
    } else {
      if (t > 11) {
        (o = r), (n = a), (h = "#DD0000"), (l = "dodgerblue");
        t -= 4;
      } else (o = a), (n = r), (l = "#DD0000"), (h = "dodgerblue");
      8 === t
        ? (s.push({
            path: new Path2D(
              "M 10 16 l 2 -2 l 2 2 l -2 2 l -2 -2 M 12 16 L 0 16",
            ),
            stroke: o,
            strokeWidth: 2,
            shadowStroke: l,
          }),
          s.push({
            path: new Path2D(
              "M 16 10 l 2 2 l -2 2 l -2 -2 l 2 -2 M 16 12 L 16 0",
            ),
            stroke: n,
            strokeWidth: 2,
            shadowStroke: h,
          }))
        : 9 === t
          ? (s.push({
              path: new Path2D(
                "M 16 10 l 2 2 l -2 2 l -2 -2 l 2 -2 M 16 12 L 16 0",
              ),
              stroke: o,
              strokeWidth: 2,
              shadowStroke: l,
            }),
            s.push({
              path: new Path2D(
                "M 22 16 l -2 2 l -2 -2 l 2 -2 l 2 2 M 20 16 L 32 16",
              ),
              stroke: n,
              strokeWidth: 2,
              shadowStroke: h,
            }))
          : 10 === t
            ? (s.push({
                path: new Path2D(
                  "M 22 16 l -2 2 l -2 -2 l 2 -2 l 2 2 M 20 16 L 32 16",
                ),
                stroke: o,
                strokeWidth: 2,
                shadowStroke: l,
              }),
              s.push({
                path: new Path2D(
                  "M 16 22 l -2 -2 l 2 -2 l 2 2 l -2 2 M 16 20 L 16 32",
                ),
                stroke: n,
                strokeWidth: 2,
                shadowStroke: h,
              }))
            : 11 === t &&
              (s.push({
                path: new Path2D(
                  "M 16 22 l -2 -2 l 2 -2 l 2 2 l -2 2 M 16 20 L 16 32",
                ),
                stroke: o,
                strokeWidth: 2,
                shadowStroke: l,
              }),
              s.push({
                path: new Path2D(
                  "M 10 16 l 2 -2 l 2 2 l -2 2 l -2 -2 M 12 16 L 0 16",
                ),
                stroke: n,
                strokeWidth: 2,
                shadowStroke: h,
              }));
    }
    return s;
  }
  static base(e, t, i = !0, a = 0, r = 0) {
    if (i) {
      if (0 === a || 3 === a || 4 === a) var s = "lightslategrey";
      else if (1 === a) s = "dodgerblue";
      else if (2 === a) s = "#DD0000";
    } else s = "none";
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
      e.push({ path: o, fill: t, shadowFill: s });
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
    return e.push({ path: o, fill: t, shadowFill: s }), e;
  }
  static connectors(e, t = 0, i = [0, 0, 0, 0]) {
    if ([0, 3, 4, 5].indexOf(t) >= 0) {
      var a = ["DarkRed", "DarkBlue", "DarkGreen"];
      if (
        (i[0] &&
          ((r = new Path2D("M 2 20 a 1 4 0 0 0 0 -8 a 3 4 0 0 0 0 8 Z")),
          e.push({ path: r, fill: a[i[0] - 1] })),
        i[2])
      ) {
        var r = new Path2D("M 30 20 a 3 4 0 0 0 0 -8 a 1 4 0 0 0 0 8 Z");
        e.push({ path: r, fill: a[i[2] - 1] });
      }
      if (i[1]) {
        r = new Path2D("M 20 2 a 4 3 0 0 0 -8 0 a 4 1 0 0 0 8 0 Z");
        e.push({ path: r, fill: a[i[1] - 1] });
      }
      if (i[3]) {
        r = new Path2D("M 20 30 a 4 1 0 0 0 -8 0 a 4 3 0 0 0 8 0 Z");
        e.push({ path: r, fill: a[i[3] - 1] });
      }
    }
    return e;
  }
  static targetRing(e, t) {
    var i = new Path2D(
      "M 3 20 l 0 -8 a 9 9 0 0 1 9 -9 l 8 0 a 9 9 0 0 1 9 9 l 0 8 a 9 9 0 0 1 -9 9 l -8 0 a 9 9 0 0 1 -9 -9 Z",
    );
    e.push({ path: i, stroke: t[0], lineWidth: 6, shadowStroke: t[1] });
    i = new Path2D(
      "M 2 20 l 0 -8 a 10 10 0 0 1 10 -10 l 8 0 a 10 10 0 0 1 10 10 l 0 8 a 10 10 0 0 1 -10 10 l -8 0 a 10 10 0 0 1 -10 -10 Z",
    );
    return e.push({ path: i, stroke: t[1], lineWidth: 2 }), e;
  }
  static targetBase(e, t, i = 0) {
    if (((i = Math.round(i)), 0 === i)) {
      var a = new Path2D("M 14 16 L 10 32 L 22 32 L 18 16 Z");
      e.push({ path: a, fill: t[0], lineCap: "butt", shadowFill: t[1] });
      a = new Path2D("M 14 16 L 11 32 L 21 32 L 18 16 Z");
      e.push({ path: a, fill: t[1], lineCap: "butt" });
    } else if (1 === i) {
      a = new Path2D("M 16 14 L 0 10 L 0 22 L 16 18 Z");
      e.push({ path: a, fill: t[0], lineCap: "butt", shadowFill: t[1] });
      a = new Path2D("M 16 14 L 0 11 L 0 21 L 16 18 Z");
      e.push({ path: a, fill: t[1], lineCap: "butt" });
    } else if (2 === i) {
      a = new Path2D("M 14 16 L 10 0 L 22 0 L 18 16 Z");
      e.push({ path: a, fill: t[0], lineCap: "butt", shadowFill: t[1] });
      a = new Path2D("M 14 16 L 11 0 L 21 0 L 18 16 Z");
      e.push({ path: a, fill: t[1], lineCap: "butt" });
    } else if (3 === i) {
      a = new Path2D("M 16 14 L 32 10 L 32 22 L 16 18 Z");
      e.push({ path: a, fill: t[0], lineCap: "butt", shadowFill: t[1] });
      a = new Path2D("M 16 14 L 32 11 L 32 21 L 16 18 Z");
      e.push({ path: a, fill: t[1], lineCap: "butt" });
    }
    return e;
  }
  static sync(e, t, i = 0) {
    if (((i = Math.round(i)), 0 === i)) {
      var a = new Path2D(
        "M 10 32 a 20 20 0 0 1 8 -16 M 22 32 a 20 20 0 0 0 -8 -16",
      );
      e.push({
        path: a,
        stroke: t[0],
        lineWidth: 6,
        lineCap: "butt",
        shadowStroke: t[1],
      });
      a = new Path2D(
        "M 10 32 a 20 20 0 0 1 8 -16 M 22 32 a 20 20 0 0 0 -8 -16",
      );
      e.push({ path: a, stroke: t[1], lineWidth: 2, lineCap: "round" });
    } else if (1 === i) {
      a = new Path2D("M 0 10 a 20 20 0 0 1 16 8 M 0 22 a 20 20 0 0 0 16 -8");
      e.push({
        path: a,
        stroke: t[0],
        lineWidth: 6,
        lineCap: "butt",
        shadowStroke: t[1],
      });
      a = new Path2D("M 0 10 a 20 20 0 0 1 16 8 M 0 22 a 20 20 0 0 0 16 -8");
      e.push({ path: a, stroke: t[1], lineWidth: 2, lineCap: "round" });
    } else if (2 === i) {
      a = new Path2D("M 10 0 a 20 20 0 0 0 8 16 M 22 0 a 20 20 0 0 1 -8 16");
      e.push({
        path: a,
        stroke: t[0],
        lineWidth: 6,
        lineCap: "butt",
        shadowStroke: t[1],
      });
      a = new Path2D("M 10 0 a 20 20 0 0 0 8 16 M 22 0 a 20 20 0 0 1 -8 16");
      e.push({ path: a, stroke: t[1], lineWidth: 2, lineCap: "round" });
    } else if (3 === i) {
      a = new Path2D(
        "M 32 10 a 20 20 0 0 0 -16 8 M 32 22 a 20 20 0 0 1 -16 -8",
      );
      e.push({
        path: a,
        stroke: t[0],
        lineWidth: 6,
        lineCap: "butt",
        shadowStroke: t[1],
      });
      a = new Path2D(
        "M 32 10 a 20 20 0 0 0 -16 8 M 32 22 a 20 20 0 0 1 -16 -8",
      );
      e.push({ path: a, stroke: t[1], lineWidth: 2, lineCap: "round" });
    }
    return e;
  }
  static snappersSync(e, t, i, a, r = 0, s = 0, o = 1) {
    (r += FIELD.tileWidth / 2), (s += FIELD.tileWidth / 2);
    var n = FIELD.tileWidth / 32;
    if (
      ((e.strokeStyle = "teal"),
      (e.lineCap = "round"),
      (e.lineJoin = "round"),
      (e.lineWidth = (4 * o * FIELD.tileWidth) / 32),
      (e.shadowBlur = 0),
      (e.shadowOffsetX = 2 * n * 0.3),
      (e.shadowOffsetY = 2 * n * 0.7),
      (e.shadowColor = "darkslategrey"),
      i % 2 == 0)
    )
      var l = ((i + 1) * Math.PI) / 2 + (Math.PI / 4) * t + Math.PI / 4 - 0.15,
        h = ((i + 1) * Math.PI) / 2 + (Math.PI / 4) * t + Math.PI / 4 + 0.15,
        d = 2 * n * Math.sin((a * Math.PI) / 2),
        u = 2 * n * Math.sin((a * Math.PI) / 2);
    else
      (d = -2 * n * Math.sin((a * Math.PI) / 2)),
        (u = 2 * n * Math.sin((a * Math.PI) / 2)),
        (l = ((i + 1) * Math.PI) / 2 + (Math.PI / 4) * t + Math.PI / 4 - 0.15),
        (h = ((i + 1) * Math.PI) / 2 + (Math.PI / 4) * t + Math.PI / 4 + 0.15);
    var c = 9 * n * Math.sin(l) + d,
      I = -9 * n * Math.cos(l) + u,
      E = 9 * n * Math.sin(h) + d,
      S = -9 * n * Math.cos(h) + u,
      f = (9 + 2 * o) * n * Math.sin(h + 0.05) + d,
      p = -(9 + 2 * o) * n * Math.cos(h + 0.05) + u,
      T = (9 + 2 * o) * n * Math.sin(l - 0.05) + d,
      R = -(9 + 2 * o) * n * Math.cos(l - 0.05) + u;
    e.beginPath(),
      e.moveTo(r + c, s + I),
      e.lineTo(r + E, s + S),
      e.lineTo(r + f, s + p),
      e.lineTo(r + T, s + R),
      e.lineTo(r + c, s + I),
      e.moveTo(r - c, s + I),
      e.lineTo(r - E, s + S),
      e.lineTo(r - f, s + p),
      e.lineTo(r - T, s + R),
      e.lineTo(r - c, s + I),
      e.moveTo(r + c, s - I),
      e.lineTo(r + E, s - S),
      e.lineTo(r + f, s - p),
      e.lineTo(r + T, s - R),
      e.lineTo(r + c, s - I),
      e.moveTo(r - c, s - I),
      e.lineTo(r - E, s - S),
      e.lineTo(r - f, s - p),
      e.lineTo(r - T, s - R),
      e.lineTo(r - c, s - I),
      e.closePath(),
      e.stroke();
  }
  static flare(e, t, i, a = 0, r = 0, s) {
    var o = 2 * (i - 0.5),
      n = o ** 0.25;
    (a += FIELD.tileWidth / 2), (r += FIELD.tileWidth / 2);
    var l = FIELD.tileWidth / 32;
    if (
      ((e.lineCap = "round"),
      (e.lineJoin = "round"),
      (e.shadowColor = "transparent"),
      s)
    )
      var h = FLARES.colors0;
    else h = FLARES.colors1;
    for (var d = h.length, u = (t % 10) * 10, c = 0; c < FLARES.amount; c++)
      if (o < FLARES.lifetimes[c + u]) {
        (e.strokeStyle = h[(c + u) % d]),
          (e.lineWidth = 5 * l * FLARES.dotsizes[c + u]),
          (e.globalAlpha = 1 - o / FLARES.lifetimes[c + u]);
        var I = FLARES.start[c + u] + n * FLARES.travel[c + u],
          E = 16 * l * FLARES.x0[c + u] * I + a,
          S = 16 * l * FLARES.y0[c + u] * I + r;
        e.beginPath(), e.moveTo(E, S), e.lineTo(E + 0.1, S + 0.1), e.stroke();
      }
    e.globalAlpha = 1;
  }
  static snappersDelay(e, t, i, a, r = 0, s = 0, o = 1) {
    (r += FIELD.tileWidth / 2), (s += FIELD.tileWidth / 2);
    var n = FIELD.tileWidth / 64;
    (e.strokeStyle = "teal"),
      (e.lineCap = "round"),
      (e.lineJoin = "round"),
      (e.lineWidth = (8 * o * FIELD.tileWidth) / 64),
      (e.fillStyle = "teal"),
      (e.shadowBlur = 0),
      (e.shadowOffsetX = 4 * n * 0.3),
      (e.shadowOffsetY = 4 * n * 0.7),
      (e.shadowColor = "darkslategrey");
    if (i > 0) var l = (Math.PI / 4) * t;
    else l = (Math.PI / 4) * (3 * t);
    e.beginPath();
    for (var h = 0; h < 4; h++) {
      var d = 4 * Math.sin((a * Math.PI) / 2),
        u = 4 * Math.sin((a * Math.PI) / 2);
      h > 1 && (d *= -1), (1 != h && 2 != h) || (u *= -1);
      var c = Math.PI / 4 - 0.15 + l + (h * Math.PI) / 2,
        I = Math.PI / 4 + 0.15 + l + (h * Math.PI) / 2,
        E = 20 * Math.sin(c) + d,
        S = 20 * Math.cos(c) + u,
        f = 20 * Math.sin(I) + d,
        p = 20 * Math.cos(I) + u,
        T = (20 + 4 * o) * Math.sin(I + 0.05) + d,
        R = (20 + 4 * o) * Math.cos(I + 0.05) + u,
        m = (20 + 4 * o) * Math.sin(c - 0.05) + d,
        g = (20 + 4 * o) * Math.cos(c - 0.05) + u;
      e.moveTo(r + n * E, s + n * S),
        e.lineTo(r + n * f, s + n * p),
        e.lineTo(r + n * T, s + n * R),
        e.lineTo(r + n * m, s + n * g),
        e.lineTo(r + n * E, s + n * S);
    }
    e.stroke();
  }
  static snappersSwitch(e, t, i = 0, a = 0, r = 0, s = 1, o = -1) {
    if (0 !== s) {
      o < 0 && (o = r), (i += FIELD.tileWidth / 2), (a += FIELD.tileWidth / 2);
      var n = FIELD.tileWidth / 64;
      if (
        ((e.strokeStyle = "teal"),
        (e.lineCap = "butt"),
        (e.lineJoin = "round"),
        (e.shadowBlur = 0),
        (e.shadowOffsetX = 4 * n * 0.3),
        (e.shadowOffsetY = 4 * n * 0.7),
        (e.shadowColor = "darkslategrey"),
        0 === t)
      )
        var l = i + FIELD.tileWidth,
          h = a;
      else if (1 === t) (l = i), (h = a + FIELD.tileHeight);
      else if (2 === t) (l = i - FIELD.tileWidth), (h = a);
      else if (3 === t) (l = i), (h = a - FIELD.tileHeight);
      (e.lineWidth = (4 * FIELD.tileWidth) / 48),
        e.beginPath(),
        e.arc(
          i,
          a,
          24 * n,
          r * (-Math.PI / 2 - 0.4) - Math.PI + (t * Math.PI) / 2,
          r * (Math.PI / 2 + 0.4) - Math.PI + (t * Math.PI) / 2,
        ),
        e.stroke(),
        (e.lineWidth = (6 * s * FIELD.tileWidth) / 48);
      var d = 14 + 4 * s;
      e.beginPath();
      var u = -Math.PI / 2 - 0.2 - (t * Math.PI) / 2,
        c = -Math.PI / 2 + 0.2 - (t * Math.PI) / 2,
        I = 8 * Math.sin(-Math.PI / 2 - (t * Math.PI) / 2),
        E = 8 * Math.cos(-Math.PI / 2 - (t * Math.PI) / 2);
      e.moveTo(i + n * (14 * Math.sin(u) + I), a + n * (14 * Math.cos(u) + E)),
        e.lineTo(
          i + n * (14 * Math.sin(c) + I),
          a + n * (14 * Math.cos(c) + E),
        ),
        e.lineTo(
          i + n * (d * Math.sin(c + 0.1) + I),
          a + n * (d * Math.cos(c + 0.1) + E),
        ),
        e.lineTo(
          i + n * (d * Math.sin(u - 0.1) + I),
          a + n * (d * Math.cos(u - 0.1) + E),
        ),
        e.lineTo(
          i + n * (14 * Math.sin(u) + I),
          a + n * (14 * Math.cos(u) + E),
        ),
        e.lineTo(
          i + n * (14 * Math.sin(c) + I),
          a + n * (14 * Math.cos(c) + E),
        ),
        e.stroke();
      var S = 1e-5;
      if (!(o > 1 - S)) {
        d = 14 + 4 * s * (1 - o);
        (e.lineWidth = (6 * (1 - o) * s * FIELD.tileWidth) / 48), e.beginPath();
        (u = (0 * Math.PI) / 4 - 0.2 - (t * Math.PI) / 2),
          (c = (0 * Math.PI) / 4 + 0.2 - (t * Math.PI) / 2),
          (I = 15 * Math.sin((-t * Math.PI) / 2)),
          (E = 15 * Math.cos((-t * Math.PI) / 2));
        e.moveTo(
          l + n * (14 * Math.sin(u) + I),
          h + n * (14 * Math.cos(u) + E),
        ),
          e.lineTo(
            l + n * (14 * Math.sin(c) + I),
            h + n * (14 * Math.cos(c) + E),
          ),
          e.lineTo(
            l + n * (d * Math.sin(c + 0.1) + I),
            h + n * (d * Math.cos(c + 0.1) + E),
          ),
          e.lineTo(
            l + n * (d * Math.sin(u - 0.1) + I),
            h + n * (d * Math.cos(u - 0.1) + E),
          ),
          e.lineTo(
            l + n * (14 * Math.sin(u) + I),
            h + n * (14 * Math.cos(u) + E),
          ),
          e.lineTo(
            l + n * (14 * Math.sin(c) + I),
            h + n * (14 * Math.cos(c) + E),
          ),
          e.stroke(),
          e.beginPath();
        (u = Math.PI / 2 - 0.2 - (t * Math.PI) / 2),
          (c = Math.PI / 2 + 0.2 - (t * Math.PI) / 2),
          (I = 15 * Math.sin(Math.PI / 2 - (t * Math.PI) / 2)),
          (E = 15 * Math.cos(Math.PI / 2 - (t * Math.PI) / 2));
        e.moveTo(
          l + n * (14 * Math.sin(u) + I),
          h + n * (14 * Math.cos(u) + E),
        ),
          e.lineTo(
            l + n * (14 * Math.sin(c) + I),
            h + n * (14 * Math.cos(c) + E),
          ),
          e.lineTo(
            l + n * (d * Math.sin(c + 0.1) + I),
            h + n * (d * Math.cos(c + 0.1) + E),
          ),
          e.lineTo(
            l + n * (d * Math.sin(u - 0.1) + I),
            h + n * (d * Math.cos(u - 0.1) + E),
          ),
          e.lineTo(
            l + n * (14 * Math.sin(u) + I),
            h + n * (14 * Math.cos(u) + E),
          ),
          e.lineTo(
            l + n * (14 * Math.sin(c) + I),
            h + n * (14 * Math.cos(c) + E),
          ),
          e.stroke(),
          e.beginPath();
        (u = Math.PI - 0.2 - (t * Math.PI) / 2),
          (c = Math.PI + 0.2 - (t * Math.PI) / 2),
          (I = 15 * Math.sin(Math.PI - (t * Math.PI) / 2)),
          (E = 15 * Math.cos(Math.PI - (t * Math.PI) / 2));
        e.moveTo(
          l + n * (14 * Math.sin(u) + I),
          h + n * (14 * Math.cos(u) + E),
        ),
          e.lineTo(
            l + n * (14 * Math.sin(c) + I),
            h + n * (14 * Math.cos(c) + E),
          ),
          e.lineTo(
            l + n * (d * Math.sin(c + 0.1) + I),
            h + n * (d * Math.cos(c + 0.1) + E),
          ),
          e.lineTo(
            l + n * (d * Math.sin(u - 0.1) + I),
            h + n * (d * Math.cos(u - 0.1) + E),
          ),
          e.lineTo(
            l + n * (14 * Math.sin(u) + I),
            h + n * (14 * Math.cos(u) + E),
          ),
          e.lineTo(
            l + n * (14 * Math.sin(c) + I),
            h + n * (14 * Math.cos(c) + E),
          ),
          e.stroke();
      }
    }
  }
  static snappersTarget(e, t, i = 0, a = 0, r = 0, s = 1) {
    (i += FIELD.tileWidth / 2), (a += FIELD.tileWidth / 2);
    var o = FIELD.tileWidth / 64;
    if (
      ((e.strokeStyle = "teal"),
      (e.lineCap = "butt"),
      (e.lineJoin = "round"),
      (e.shadowBlur = 0),
      (e.shadowOffsetX = 4 * o * 0.3),
      (e.shadowOffsetY = 4 * o * 0.7),
      (e.shadowColor = "darkslategrey"),
      0 === t)
    )
      var n = i - FIELD.tileWidth,
        l = a;
    else if (1 === t) (n = i), (l = a - FIELD.tileHeight);
    else if (2 === t) (n = i + FIELD.tileWidth), (l = a);
    else if (3 === t) (n = i), (l = a + FIELD.tileHeight);
    (e.lineWidth = (6 * s * FIELD.tileWidth) / 64),
      e.beginPath(),
      e.arc(
        n,
        l,
        24 * o,
        (1 - r) * (-Math.PI / 2 - 0.4) - Math.PI + (t * Math.PI) / 2,
        (1 - r) * (Math.PI / 2 + 0.4) - Math.PI + (t * Math.PI) / 2,
      ),
      e.stroke(),
      e.beginPath(),
      e.arc(
        i,
        a,
        30 * o,
        r * (-Math.PI / 4 - 0.45) - Math.PI / 4 + (t * Math.PI) / 2,
        r * (Math.PI / 4) - Math.PI / 4 + (t * Math.PI) / 2,
      ),
      e.stroke(),
      e.beginPath(),
      e.arc(
        i,
        a,
        30 * o,
        r * (-Math.PI / 4) + Math.PI / 4 + (t * Math.PI) / 2,
        r * (Math.PI / 4 + 0.45) + Math.PI / 4 + (t * Math.PI) / 2,
      ),
      e.stroke(),
      (e.lineWidth = (8 * s * FIELD.tileWidth) / 64),
      e.beginPath();
    var h = -Math.PI / 2 - 0.2 - (t * Math.PI) / 2,
      d = -Math.PI / 2 + 0.2 - (t * Math.PI) / 2,
      u = 6 * Math.sin(-Math.PI / 2 - (t * Math.PI) / 2),
      c = 6 * Math.cos(-Math.PI / 2 - (t * Math.PI) / 2);
    e.moveTo(n + o * (14 * Math.sin(h) + u), l + o * (14 * Math.cos(h) + c)),
      e.lineTo(n + o * (14 * Math.sin(d) + u), l + o * (14 * Math.cos(d) + c)),
      e.lineTo(
        n + o * (20 * Math.sin(d + 0.1) + u),
        l + o * (20 * Math.cos(d + 0.1) + c),
      ),
      e.lineTo(
        n + o * (20 * Math.sin(h - 0.1) + u),
        l + o * (20 * Math.cos(h - 0.1) + c),
      ),
      e.lineTo(n + o * (14 * Math.sin(h) + u), l + o * (14 * Math.cos(h) + c)),
      e.lineTo(n + o * (14 * Math.sin(d) + u), l + o * (14 * Math.cos(d) + c)),
      e.stroke(),
      e.beginPath();
    (h = Math.PI / 4 - 0.2 - (t * Math.PI) / 2),
      (d = Math.PI / 4 + 0.2 - (t * Math.PI) / 2),
      (u = 15 * Math.sin(Math.PI / 4 - (t * Math.PI) / 2)),
      (c = 15 * Math.cos(Math.PI / 4 - (t * Math.PI) / 2));
    e.moveTo(i + o * (14 * Math.sin(h) + u), a + o * (14 * Math.cos(h) + c)),
      e.lineTo(i + o * (14 * Math.sin(d) + u), a + o * (14 * Math.cos(d) + c)),
      e.lineTo(
        i + o * (20 * Math.sin(d + 0.1) + u),
        a + o * (20 * Math.cos(d + 0.1) + c),
      ),
      e.lineTo(
        i + o * (20 * Math.sin(h - 0.1) + u),
        a + o * (20 * Math.cos(h - 0.1) + c),
      ),
      e.lineTo(i + o * (14 * Math.sin(h) + u), a + o * (14 * Math.cos(h) + c)),
      e.lineTo(i + o * (14 * Math.sin(d) + u), a + o * (14 * Math.cos(d) + c)),
      e.stroke(),
      e.beginPath();
    (h = (3 * Math.PI) / 4 - 0.2 - (t * Math.PI) / 2),
      (d = (3 * Math.PI) / 4 + 0.2 - (t * Math.PI) / 2),
      (u = 15 * Math.sin((3 * Math.PI) / 4 - (t * Math.PI) / 2)),
      (c = 15 * Math.cos((3 * Math.PI) / 4 - (t * Math.PI) / 2));
    e.moveTo(i + o * (14 * Math.sin(h) + u), a + o * (14 * Math.cos(h) + c)),
      e.lineTo(i + o * (14 * Math.sin(d) + u), a + o * (14 * Math.cos(d) + c)),
      e.lineTo(
        i + o * (20 * Math.sin(d + 0.1) + u),
        a + o * (20 * Math.cos(d + 0.1) + c),
      ),
      e.lineTo(
        i + o * (20 * Math.sin(h - 0.1) + u),
        a + o * (20 * Math.cos(h - 0.1) + c),
      ),
      e.lineTo(i + o * (14 * Math.sin(h) + u), a + o * (14 * Math.cos(h) + c)),
      e.lineTo(i + o * (14 * Math.sin(d) + u), a + o * (14 * Math.cos(d) + c)),
      e.stroke();
  }
  static creationGate(e, t, i, a, r = 0) {
    var s = (i * Math.PI) / 2;
    if (0 === r)
      var o = "cornflowerblue",
        n = "blue";
    else (o = "#d92b2b"), (n = "#590000");
    if (t < 1) var l = (1 - t) ** 2;
    else if (t > 2) l = (2 - t) ** 2;
    else l = 0;
    var h = new Path2D(
      "M 11 16 a 5 5 0 0 1 10 0 a 5 5 0 0 1 -10 0 M 21 16 L 27 16 M 27 16 l -3 -2 l 0 4 L 27 16",
    );
    if (
      (e.push({
        path: h,
        stroke: o,
        lineWidth: 2,
        rot: s,
        lineCap: "round",
        shadowStroke: n,
        alpha: l,
      }),
      t <= 1)
    )
      var d = t ** 2;
    else if (t < 2) d = (2 - t) ** 2;
    else d = 0;
    h = new Path2D("M 11 16 a 5 5 0 0 1 10 0 M 16 16 L 13 19 M 16 16 L 19 19");
    e.push({
      path: h,
      stroke: o,
      lineWidth: 2,
      lineCap: "round",
      shadowStroke: n,
      alpha: d,
    });
    h = new Path2D("M 27 16 l -3 -2 l 0 4 L 27 16");
    if (
      (e.push({
        path: h,
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
    h = new Path2D(
      "M 13 13 L 19 19 M 19 13 L 13 19 M 11 16 a 5 5 0 0 1 10 0 a 5 5 0 0 1 -10 0 M 21 16 L 27 16 M 27 16 l -3 -2 l 0 4 L 27 16",
    );
    if (
      (e.push({
        path: h,
        stroke: o,
        lineWidth: 2,
        rot: s,
        lineCap: "round",
        shadowStroke: n,
        alpha: u,
      }),
      -2 != a)
    ) {
      if (-1 === a)
        var c = String.fromCharCode(8734),
          I = 16;
      else (c = String(a)), (I = 9);
      1 === i
        ? e.push({ text: c, x0: 16, y0: 8, fill: "lightgrey", size: I })
        : e.push({ text: c, x0: 16, y0: 26, fill: "lightgrey", size: I });
    }
    return e;
  }
}
