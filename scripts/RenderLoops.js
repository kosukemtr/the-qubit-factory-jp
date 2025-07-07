class RenderLoops {
  static drawWireSingle(e, t, i, a, r, s, o = 32, n = 32, l = 1) {
    e.save(),
      1 !== l && (e.globalAlpha = l),
      (e.lineCap = "round"),
      (e.lineJoin = "round"),
      (e.shadowColor = "transparent"),
      (e.lineWidth = 2),
      (e.shadowBlur = 0),
      (e.shadowOffsetX = (r / o) * 2 * 0.3),
      (e.shadowOffsetY = (s / n) * 2 * 0.7),
      e.setTransform(r / o, 0, 0, s / n, i, a);
    for (var h = 0; h < t.length; h++)
      (e.shadowColor = t[h].shadowStroke),
        (e.strokeStyle = t[h].stroke),
        e.stroke(t[h].path);
    e.restore();
  }
  static drawWires(e, t, i, a, r, s, o = 32, n = 32) {
    e.save(),
      (e.lineCap = "round"),
      (e.lineJoin = "round"),
      (e.shadowColor = "transparent"),
      (e.lineWidth = 2),
      (e.shadowBlur = 0),
      (e.shadowOffsetX = (r / o) * 2 * 0.3),
      (e.shadowOffsetY = (s / n) * 2 * 0.7);
    for (var l = 0; l < t.length; l++) {
      e.setTransform(r / o, 0, 0, s / n, i[l], a[l]);
      for (var h = t[l], d = 0; d < h.length; d++)
        e.setLineDash([]),
          (e.shadowColor = h[d].shadowStroke),
          (e.strokeStyle = h[d].stroke),
          (e.lineWidth = 2),
          e.stroke(h[d].path);
    }
    e.restore();
  }
  static drawSimple(e, t, i, a, r, s, o = 32, n = 32) {
    e.save(),
      (e.lineCap = "round"),
      (e.lineJoin = "round"),
      (e.shadowColor = "transparent"),
      (e.shadowBlur = 0),
      (e.shadowOffsetX = (r / o) * 2 * 0.3),
      (e.shadowOffsetY = (s / n) * 2 * 0.7),
      e.setTransform(r / o, 0, 0, s / n, i, a);
    for (var l = 0; l < t.length; l++)
      t[l].shadowStroke
        ? (e.shadowColor = t[l].shadowStroke)
        : (e.shadowColor = "transparent"),
        (e.lineWidth = t[l].lineWidth),
        (e.strokeStyle = t[l].stroke),
        e.stroke(t[l].path);
    e.restore();
  }
  static drawGates(e, t, i, a, r, s, o = 32, n = 32) {
    e.save(),
      (e.lineJoin = "round"),
      (e.shadowColor = "transparent"),
      (e.lineWidth = 2),
      (e.shadowBlur = 0),
      (e.shadowOffsetX = (r / o) * 2 * 0.3),
      (e.shadowOffsetY = (s / n) * 2 * 0.7),
      e.setTransform(r / o, 0, 0, r / o, i, a);
    for (var l = 0; l < t.length; l++)
      t[l].fill &&
        ((e.fillStyle = t[l].fill),
        t[l].shadowFill
          ? (e.shadowColor = t[l].shadowFill)
          : (e.shadowColor = "transparent"),
        e.fill(t[l].path)),
        t[l].stroke &&
          ((e.strokeStyle = t[l].stroke),
          (e.lineWidth = t[l].lineWidth),
          t[l].shadowStroke
            ? (e.shadowColor = t[l].shadowStroke)
            : (e.shadowColor = "transparent"),
          e.stroke(t[l].path));
    e.restore();
  }
}
