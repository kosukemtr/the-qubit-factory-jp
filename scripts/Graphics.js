class Graphics {
  static initFlares() {
    (FLARES.max = 200),
      (FLARES.amount = 75),
      (FLARES.start = []),
      (FLARES.travel = []),
      (FLARES.lifetimes = []),
      (FLARES.dotsizes = []),
      (FLARES.x0 = []),
      (FLARES.y0 = []);
    for (var e = 0; e < FLARES.max; e++) {
      var t = 2 * Math.PI * Math.random();
      FLARES.x0.push(Math.cos(t)),
        FLARES.y0.push(Math.sin(t)),
        FLARES.start.push(0 + 0.5 * Math.random()),
        FLARES.travel.push(0.25 + 1 * Math.random()),
        FLARES.lifetimes.push(0.5 + 0.5 * Math.random()),
        FLARES.dotsizes.push(0.5 + 0.5 * Math.random());
    }
    (FLARES.colors0 = [
      "#3cd73c",
      "limegreen",
      "#007d00",
      "lime",
      "#0aff0a",
      "#00af00",
    ]),
      (FLARES.colors1 = [
        "#8c0000",
        "crimson",
        "#e61e46",
        "darkred",
        "#950a0a",
        "#8c1700",
      ]);
  }
  static init() {
    (OPTS.useShads = OPTS.fancyGraphics),
      (OPTS.useGrads = OPTS.fancyGraphics),
      (OPTS.useSnappers = OPTS.fancyGraphics),
      OPTS.useGrads
        ? ((GRADS.gears = CANV.title.ctx.createRadialGradient(
            24,
            24,
            1,
            16,
            16,
            16,
          )),
          GRADS.gears.addColorStop(0, "#666"),
          GRADS.gears.addColorStop(0.2, "#444"),
          GRADS.gears.addColorStop(1, "black"),
          (GRADS.gates = CANV.base.ctx.createRadialGradient(
            8,
            8,
            1,
            16,
            16,
            16,
          )),
          GRADS.gates.addColorStop(0, "#666"),
          GRADS.gates.addColorStop(0.2, "#444"),
          GRADS.gates.addColorStop(1, "black"),
          (GRADS.glow = CANV.base.ctx.createRadialGradient(
            8,
            8,
            1,
            16,
            16,
            16,
          )),
          GRADS.glow.addColorStop(0, flashColor("#666", 0.2)),
          GRADS.glow.addColorStop(0.2, flashColor("#444", 0.2)),
          GRADS.glow.addColorStop(1, flashColor("black", 0.2)),
          (GRADS.flame = CANV.base.ctx.createLinearGradient(0, 0, 32, 32)),
          GRADS.flame.addColorStop(0, "CornflowerBlue"),
          GRADS.flame.addColorStop(0.4, "CornflowerBlue"),
          GRADS.flame.addColorStop(0.6, "#d92b2b"),
          GRADS.flame.addColorStop(1, "#d92b2b"))
        : ((GRADS.gears = "#222"),
          (GRADS.gates = "#222"),
          (GRADS.glow = "#444"),
          (GRADS.flame = "darkmagenta"));
  }
}
