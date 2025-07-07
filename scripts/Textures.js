class Textures {
  static drawHazard(e, t, i, a, r, s, o) {
    e.save();
    var n = 40 * s,
      l = 0.9;
    (e.strokeStyle = "khaki"),
      (e.lineWidth = 15 * s),
      e.setLineDash([2 * s, 1.5 * s]),
      (e.globalAlpha = o);
    var h = i,
      d = i;
    for (e.beginPath(); d < i + r && d < i + r; )
      e.moveTo(t, h), e.lineTo(t + a, h - l * a), (d = h - l * a), (h += n);
    e.stroke(), e.restore();
  }
  static drawFiber(e, t, i, a, r, s, o) {
    e.save();
    var n = 15 * s,
      l = 1;
    (e.strokeStyle = "#152424"),
      (e.lineWidth = n),
      e.setLineDash([4 * s, 2 * s]),
      (e.globalAlpha = o);
    var h = i,
      d = i;
    for (e.beginPath(); d < i + r && d < i + r; )
      e.moveTo(t, h), e.lineTo(t + a, h - l * a), (d = h - l * a), (h += n);
    e.stroke(), e.restore();
  }
}
