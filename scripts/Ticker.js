class Ticker {
  static draw(e, t, i, a, r, s = !1) {
    var o = e.ctx;
    if ((e.clear(), s))
      var n = 0,
        l = 0,
        h = 0,
        d = 0,
        u = 0;
    else
      TIMER.ratio,
        (n = TIMER.popRatio),
        (l = TIMER.tick % 10),
        (h = Math.floor(TIMER.tick / 10) % 10),
        (d = Math.floor(TIMER.tick / 100) % 10),
        (u = Math.floor(TIMER.tick / 1e3) % 10);
    if (9 === d && 9 === h && 9 === l) var c = PathsC.tickerDynamic(o, u, n);
    else c = PathsC.tickerDynamic(o, u, 0);
    if ((c.draw(o, t, i, a, r), 9 === h && 9 === l))
      c = PathsC.tickerDynamic(o, d, n);
    else c = PathsC.tickerDynamic(o, d, 0);
    if ((c.draw(o, t + a, i, a, r), 9 === l)) c = PathsC.tickerDynamic(o, h, n);
    else c = PathsC.tickerDynamic(o, h, 0);
    c.draw(o, t + 2 * a, i, a, r);
    c = PathsC.tickerDynamic(o, l, n);
    c.draw(o, t + 3 * a, i, a, r);
  }
  static reset(e, t, i, a, r, s) {
    var o = e.ctx;
    e.clear();
    var n = (1 - Math.cos(Math.PI * s)) / 2,
      l = TIMER.tickEnd,
      h = l % 10,
      d = Math.floor(l / 10) % 10,
      u = Math.floor(l / 100) % 10,
      c = Math.floor(l / 1e3) % 10,
      I = PathsC.tickerDynamic(o, c, n, 0);
    I.draw(o, t, i, a, r);
    I = PathsC.tickerDynamic(o, u, n, 0);
    I.draw(o, t + a, i, a, r);
    I = PathsC.tickerDynamic(o, d, n, 0);
    I.draw(o, t + 2 * a, i, a, r);
    I = PathsC.tickerDynamic(o, h, n, 0);
    I.draw(o, t + 3 * a, i, a, r);
  }
}
