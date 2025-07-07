class EntBlob {
  constructor() {
    (this._entWeights = []),
      (this._numSeg = 50),
      (this._amp = 0.05),
      (this._colors = [
        "rebeccapurple",
        "darkcyan",
        "firebrick",
        "darkgreen",
        "darkgoldenrod",
        "dodgerblue",
        "fuchsia",
        "saddlebrown",
      ]),
      (this._radius = 1),
      (this._numBlobs = 10);
  }
  get numBlobs() {
    return this._numBlobs;
  }
  makeBlobs() {
    for (var e = [], t = 0; t < this._numBlobs; t++) {
      for (var i = [], a = 0; a < 5; a++) i.push(2 * (Math.random() - 0.5));
      var r = [];
      for (a = 0; a < this._numSeg; a++) {
        var s = (2 * a * Math.PI) / this._numSeg,
          o =
            i[0] * Math.cos(1 * s + 1) +
            i[1] * Math.cos(2 * s + 2) +
            i[2] * Math.cos(3 * s + 3) +
            i[3] * Math.cos(4 * s + 4) +
            i[4] * Math.cos(5 * s + 5);
        r.push(this._radius * (1 + this._amp * o));
      }
      e.push(r);
    }
    this._entWeights = e;
  }
  getWeights(e) {
    return this._entWeights[e];
  }
  draw(e, t, i, a, r, s, o = 1) {
    if (!(o < 0.001)) {
      e.save(),
        e.beginPath(),
        e.translate(a + FIELD.tileWidth / 2, r + FIELD.tileHeight / 2),
        e.scale(
          1 + 0.1 * s * Math.cos(2 * Math.PI * TIMER.blinkRatio),
          1 - 0.1 * s * Math.cos(1 + 2.1 * Math.PI * TIMER.blinkRatio),
        ),
        e.rotate(2 * s * TIMER.blob * Math.PI),
        (e.globalAlpha = 0.2),
        (e.lineWidth = (1 * o * 2 * FIELD.tileWidth) / 4),
        (e.lineCap = "round"),
        (e.strokeStyle = this._colors[i]);
      var n = FIELD.tileWidth / 3,
        l = this._entWeights[t];
      e.moveTo(n * l[0], 0);
      for (var h = 0; h < this._numSeg; h++) {
        var d = (2 * Math.PI * h) / this._numSeg;
        e.lineTo(n * l[h] * Math.cos(d), n * l[h] * Math.sin(d));
      }
      e.lineTo(n * l[0], 0), e.stroke(), e.restore();
    }
  }
}
