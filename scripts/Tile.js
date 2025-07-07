class Tile {
  constructor(e, t, i) {
    (this._name = e), (this._w = t), (this._h = i), (this._paths = []);
  }
  get name() {
    return this._name;
  }
  get w() {
    return this._w;
  }
  get h() {
    return this._h;
  }
  get paths() {
    return this._paths;
  }
  set paths(e) {
    this._paths = e;
  }
  addPath(e) {
    this._paths.push(e);
  }
  addText(e, t, i, a, r, s, o = 0) {
    var n = {
      type: "text",
      text: e,
      pos: t,
      fill: i,
      size: a,
      font: r,
      weight: s,
      rot: o,
    };
    this.addPath(n);
  }
  addPathRaw(
    e,
    t,
    i,
    a,
    r,
    s,
    o = "none",
    n = "none",
    l = 2,
    h = 0,
    d = [],
    u = 1,
    c = 0,
  ) {
    o || (o = "none"), n || (n = "none");
    var I = {
      type: "raw",
      path: e,
      fill: t,
      stroke: i,
      lineWidth: a,
      rot: r,
      lineCap: s,
      customScale: h,
      shadowStroke: n,
      shadowFill: o,
      shadowY: l,
      lineDash: d,
      alpha: u,
      dashOffset: c,
    };
    this.addPath(I);
  }
  draw(e, t, i, a, r, s = 1, o = !1) {
    for (var n = t, l = i, h = [], d = 0; d < this.paths.length; d++)
      if ("text" === this.paths[d].type) h.push(d);
      else if ("raw" === this.paths[d].type) {
        e.save();
        var u = this.paths[d].alpha * s;
        if (
          (1 - u > 0.001 && (e.globalAlpha = this.paths[d].alpha * s),
          (e.lineCap = this.paths[d].lineCap),
          (e.lineWidth = this.paths[d].lineWidth),
          (e.lineJoin = "round"),
          o
            ? ((t = n + this.paths[d].shadowY * (a / 32) * 0.3),
              (i = l + this.paths[d].shadowY * (r / 32) * 0.7))
            : ((t = n),
              (i = l),
              (e.shadowBlur = 0),
              (e.shadowOffsetX = this.paths[d].shadowY * (a / 32) * 0.3),
              (e.shadowOffsetY = this.paths[d].shadowY * (r / 32) * 0.7)),
          this.paths[d].lineDash &&
            (e.setLineDash(this.paths[d].lineDash),
            (e.lineDashOffset = this.paths[d].dashOffset)),
          this.paths[d].customScale)
        ) {
          var c = this.paths[d].customScale.xScale,
            I = this.paths[d].customScale.yScale,
            E = this.paths[d].customScale.x0,
            S = this.paths[d].customScale.y0;
          e.translate(t + E * (a / c), i + S * (r / I)),
            e.scale(a / (this.w * c), r / (this.h * I));
        } else {
          var f = a / this.w,
            p = r / this.h;
          Math.abs(this.paths[d].rot) > 0.001
            ? (e.scale(f, p),
              e.translate(t / f + ((1 / f) * a) / 2, i / p + ((1 / p) * r) / 2),
              e.rotate(this.paths[d].rot),
              e.translate(
                -(t / f + ((1 / f) * a) / 2),
                -(i / p + ((1 / p) * r) / 2),
              ),
              e.translate(t / f, i / p))
            : (e.scale(f, p), e.translate(t / f, i / p));
        }
        "none" !== this.paths[d].fill &&
          ("cut" === this.paths[d].fill
            ? ((e.globalCompositeOperation = "destination-out"),
              e.fill(this.paths[d].path),
              (e.globalCompositeOperation = "source-over"))
            : "shadow" === this.paths[d].fill
              ? ((e.shadowColor = this.paths[d].shadowFill),
                e.fill(this.paths[d].path))
              : o
                ? ((e.fillStyle = this.paths[d].shadowFill),
                  e.fill(this.paths[d].path))
                : ((e.fillStyle = this.paths[d].fill),
                  "none" !== this.paths[d].shadowFill && OPTS.useShads
                    ? (e.shadowColor = this.paths[d].shadowFill)
                    : (e.shadowColor = "transparent"),
                  e.fill(this.paths[d].path))),
          "none" !== this.paths[d].stroke &&
            ("cut" === this.paths[d].stroke
              ? ((e.globalCompositeOperation = "destination-out"),
                e.stroke(this.paths[d].path),
                (e.globalCompositeOperation = "source-over"))
              : o
                ? ((e.strokeStyle = this.paths[d].shadowStroke),
                  e.stroke(this.paths[d].path))
                : ((e.strokeStyle = this.paths[d].stroke),
                  "none" !== this.paths[d].shadowStroke && OPTS.useShads
                    ? (e.shadowColor = this.paths[d].shadowStroke)
                    : (e.shadowColor = "transparent"),
                  e.stroke(this.paths[d].path))),
          e.restore();
      }
    for (const s of h) {
      e.save(), (e.textBaseline = "middle"), (e.textAlign = "center");
      var T = this.paths[s].pos.x * (a / 32),
        R = this.paths[s].pos.y * (r / 32),
        m = this.paths[s].size * (a / 32);
      (e.font = this.paths[s].weight + " " + m + "px " + this.paths[s].font),
        e.translate(t + T, i + R),
        e.rotate(this.paths[s].rot),
        OPTS.useShads || (e.shadowColor = "transparent"),
        (e.fillStyle = this.paths[s].fill),
        e.fillText(this.paths[s].text, 0, 0),
        e.restore();
    }
  }
}
