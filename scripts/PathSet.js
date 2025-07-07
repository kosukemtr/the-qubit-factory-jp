class PathSet {
  constructor(e, t, i) {
    (this._name = e),
      (this._w = t),
      (this._h = i),
      (this._paths = []),
      (this._isFancy = !1);
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
  get isFancy() {
    return this._isFancy;
  }
  set paths(e) {
    this._paths = e;
  }
  set isFancy(e) {
    this._isFancy = e;
  }
  add(e) {
    this.paths.push(e);
  }
  draw(e, t, i, a, r, s = 1, o = !1) {
    o
      ? this.drawSelect(e, t, i, a, r)
      : this.isFancy || 1 !== s
        ? this.drawFancy(e, t, i, a, r, s)
        : this.drawSimple(e, t, i, a, r);
  }
  drawSimple(e, t, i, a, r) {
    e.save();
    var s = a / this.w,
      o = r / this.h;
    (e.shadowOffsetX = 0.6 * s), (e.shadowOffsetY = 1.4 * o);
    for (
      var n = (t + a / 2) / s,
        l = (i + r / 2) / o,
        h = -a / 2 / s,
        d = -r / 2 / o,
        u = 0;
      u < this.paths.length;
      u++
    )
      if (this.paths[u].text) {
        var c = this.paths[u].x0 * (a / this.w),
          I = this.paths[u].y0 * (r / this.h),
          E = this.paths[u].fontsize;
        (e.font = "normal " + E + "px helvetica"),
          (e.shadowColor = "transparent"),
          (e.textAlign = "center"),
          (e.textBaseline = "middle"),
          (e.fillStyle = this.paths[u].fill),
          e.setTransform(s, 0, 0, o, t + c, i + I),
          e.fillText(this.paths[u].text, 0, 0);
      } else {
        if (this.paths[u].rot)
          if (Math.abs(this.paths[u].rot) > 0.001) {
            var S = Math.sin(this.paths[u].rot),
              f = Math.cos(this.paths[u].rot),
              p = f * s,
              T = S * s,
              R = -S * o,
              m = f * o,
              g = f * s * h - S * o * d + s * n,
              A = S * s * h + f * o * d + o * l;
            e.setTransform(p, T, R, m, g, A);
          } else e.setTransform(s, 0, 0, o, t, i);
        else e.setTransform(s, 0, 0, o, t, i);
        this.paths[u].fill &&
          ((e.fillStyle = this.paths[u].fill),
          this.paths[u].shadowFill && OPTS.useShads
            ? (e.shadowColor = this.paths[u].shadowFill)
            : (e.shadowColor = "transparent"),
          e.fill(this.paths[u].path)),
          this.paths[u].stroke &&
            ((e.strokeStyle = this.paths[u].stroke),
            (e.lineWidth = this.paths[u].lineWidth),
            (e.lineCap = this.paths[u].lineCap),
            this.paths[u].shadowStroke && OPTS.useShads
              ? (e.shadowColor = this.paths[u].shadowStroke)
              : (e.shadowColor = "transparent"),
            e.stroke(this.paths[u].path));
      }
    e.restore();
  }
  drawFancy(e, t, i, a, r, s = 1) {
    e.save();
    var o = a / this.w,
      n = r / this.h;
    (e.globalAlpha = s),
      (e.shadowOffsetX = 0.6 * o),
      (e.shadowOffsetY = 1.4 * n);
    for (
      var l = (t + a / 2) / o,
        h = (i + r / 2) / n,
        d = -a / 2 / o,
        u = -r / 2 / n,
        c = 0;
      c < this.paths.length;
      c++
    )
      if (this.paths[c].text) {
        this.paths[c].alpha || 0 === this.paths[c].alpha
          ? (e.globalAlpha = this.paths[c].alpha * s)
          : (e.globalAlpha = s);
        var I = this.paths[c].x0 * (a / this.w),
          E = this.paths[c].y0 * (r / this.h),
          S = this.paths[c].fontsize;
        (e.font = "normal " + S + "px helvetica"),
          (e.shadowColor = "transparent"),
          (e.textAlign = "center"),
          (e.textBaseline = "middle"),
          (e.fillStyle = this.paths[c].fill),
          e.setTransform(o, 0, 0, n, t + I, i + E),
          e.fillText(this.paths[c].text, 0, 0);
      } else {
        if (
          (this.paths[c].alpha || 0 === this.paths[c].alpha
            ? (e.globalAlpha = this.paths[c].alpha * s)
            : (e.globalAlpha = s),
          this.paths[c].rot)
        )
          if (Math.abs(this.paths[c].rot) > 0.001) {
            var f = Math.sin(this.paths[c].rot),
              p = Math.cos(this.paths[c].rot),
              T = p * o,
              R = f * o,
              m = -f * n,
              g = p * n,
              A = p * o * d - f * n * u + o * l,
              C = f * o * d + p * n * u + n * h;
            e.setTransform(T, R, m, g, A, C);
          } else e.setTransform(o, 0, 0, n, t, i);
        else e.setTransform(o, 0, 0, n, t, i);
        this.paths[c].fill &&
          ((e.fillStyle = this.paths[c].fill),
          this.paths[c].shadowFill && OPTS.useShads
            ? ((e.shadowColor = this.paths[c].shadowFill),
              this.paths[c].shadowOffset &&
                ((e.shadowOffsetX = 0.3 * this.paths[c].shadowOffset * o),
                (e.shadowOffsetY = 0.7 * this.paths[c].shadowOffset * n)))
            : (e.shadowColor = "transparent"),
          e.fill(this.paths[c].path)),
          this.paths[c].stroke &&
            ((e.strokeStyle = this.paths[c].stroke),
            (e.lineWidth = this.paths[c].lineWidth),
            (e.lineCap = this.paths[c].lineCap),
            this.paths[c].shadowStroke && OPTS.useShads
              ? ((e.shadowColor = this.paths[c].shadowStroke),
                this.paths[c].shadowOffset &&
                  ((e.shadowOffsetX = 0.3 * this.paths[c].shadowOffset * o),
                  (e.shadowOffsetY = 0.7 * this.paths[c].shadowOffset * n)))
              : (e.shadowColor = "transparent"),
            e.stroke(this.paths[c].path));
      }
    e.restore();
  }
  drawSelect(e, t, i, a, r, s = !1) {
    var o = 1;
    e.save();
    var n = a / this.w,
      l = r / this.h;
    (e.globalAlpha = o),
      (e.shadowOffsetX = 0 * n),
      (e.shadowOffsetY = 0 * l),
      (e.shadowBlur = 20);
    for (
      var h = (t + a / 2) / n,
        d = (i + r / 2) / l,
        u = -a / 2 / n,
        c = -r / 2 / l,
        I = 0;
      I < this.paths.length;
      I++
    )
      if (this.paths[I].text) {
        this.paths[I].alpha || 0 === this.paths[I].alpha
          ? (e.globalAlpha = this.paths[I].alpha * o)
          : (e.globalAlpha = o);
        var E = this.paths[I].x0 * (a / this.w),
          S = this.paths[I].y0 * (r / this.h),
          f = this.paths[I].fontsize;
        (e.font = "normal " + f + "px helvetica"),
          (e.shadowColor = "transparent"),
          (e.textAlign = "center"),
          (e.textBaseline = "middle"),
          (e.fillStyle = this.paths[I].fill),
          e.setTransform(n, 0, 0, l, t + E, i + S),
          e.fillText(this.paths[I].text, 0, 0),
          e.restore();
      } else {
        if (
          (this.paths[I].alpha || 0 === this.paths[I].alpha
            ? (e.globalAlpha = this.paths[I].alpha * o)
            : (e.globalAlpha = o),
          this.paths[I].rot)
        )
          if (Math.abs(this.paths[I].rot) > 0.001) {
            var p = Math.sin(this.paths[I].rot),
              T = Math.cos(this.paths[I].rot),
              R = T * n,
              m = p * n,
              g = -p * l,
              A = T * l,
              C = T * n * u - p * l * c + n * h,
              L = p * n * u + T * l * c + l * d;
            e.setTransform(R, m, g, A, C, L);
          } else e.setTransform(n, 0, 0, l, t, i);
        else e.setTransform(n, 0, 0, l, t, i);
        this.paths[I].fill &&
          ((e.fillStyle = this.paths[I].fill),
          this.paths[I].shadowFill && (OPTS.useShads || s)
            ? (e.shadowColor = this.paths[I].shadowFill)
            : (e.shadowColor = "transparent"),
          e.fill(this.paths[I].path)),
          this.paths[I].stroke &&
            ((e.strokeStyle = this.paths[I].stroke),
            (e.lineWidth = this.paths[I].lineWidth),
            (e.lineCap = this.paths[I].lineCap),
            this.paths[I].shadowStroke && (OPTS.useShads || s)
              ? ((e.shadowColor = this.paths[I].shadowStroke),
                this.paths[I].shadowOffset &&
                  ((e.shadowOffsetX = 0.3 * this.paths[I].shadowOffset * n),
                  (e.shadowOffsetY = 0.7 * this.paths[I].shadowOffset * l)))
              : (e.shadowColor = "transparent"),
            e.stroke(this.paths[I].path));
      }
    e.restore();
  }
}
