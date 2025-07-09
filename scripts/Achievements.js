class Achievements {
  static draw(e, t) {
    for (
      var i = FIELD.isActiveAward,
        a = FIELD.tileWidth,
        r = e.ctx,
        s = t.ctx,
        o = 1.5 * FIELD.tileHeight,
        n = Paths.greyTile(r),
        l = Paths.greyTile(r, !0),
        h = 0;
      h < 4;
      h++
    ) {
      var d = 17 * FIELD.tileWidth;
      n.draw(
        r,
        d + h * a + 0.05 * a,
        o + 0.05 * a,
        0.9 * FIELD.tileWidth,
        0.9 * FIELD.tileHeight,
      ),
        n.draw(
          r,
          d + h * a + 0.05 * a,
          o + 1.05 * a,
          0.9 * FIELD.tileWidth,
          0.9 * FIELD.tileHeight,
        );
    }
    t.clear(),
      "selectAward" === STATE.under.type &&
        i[STATE.under.k0] &&
        (s.save(),
        (s.font = (2 * FIELD.tileWidth) / 4 + "px Courier New"),
        (s.fillStyle = "antiquewhite"),
        (s.shadowBlur = 2),
        (s.shadowOffsetX = 2),
        (s.shadowOffsetY = 2),
        (s.textAlign = "center"),
        (s.textBaseline = "middle"),
        s.fillText(DESCRIPTIONS.allTitles[STATE.under.k0][0], 3.5 * a, 3.7 * a),
        s.fillText(DESCRIPTIONS.allTitles[STATE.under.k0][1], 3.5 * a, 4.4 * a),
        n.draw(
          s,
          2.5 * a + 0.1 * a,
          5 * a + 0.1 * a,
          1.8 * FIELD.tileWidth,
          1.8 * FIELD.tileHeight,
        ),
        (s.strokeStyle = "antiquewhite"),
        (s.lineWidth = 1),
        s.beginPath(),
        s.stroke(
          Helper.roundRect(
            Math.floor(1.2 * a) + 0.5,
            Math.floor(3 * a) + 0.5,
            Math.floor(4.6 * a),
            Math.floor(4.3 * a),
            a / 4,
          ),
        ),
        s.restore()),
      r.save(),
      (r.font = (1.2 * FIELD.tileWidth) / 4 + "px Verdana"),
      (r.fillStyle = "black"),
      (r.textAlign = "left"),
      (r.textBaseline = "middle"),
      r.fillText("業績:", 16.9 * a, 1.3 * a),
      r.beginPath(),
      (r.lineWidth = 1.5),
      (r.lineStyle = "#888"),
      r.stroke(
        Helper.roundRect(
          16.8 * a,
          1.1 * a,
          4.35 * FIELD.tileWidth,
          2.5 * FIELD.tileWidth,
          FIELD.tileWidth / 8,
        ),
      ),
      r.restore();
    (o = 1.5 * FIELD.tileHeight), (d = 17 * FIELD.tileWidth);
    if (i[0]) {
      n = Paths.bit(r, 0, 0, TIMER.glareRatio);
      n.draw(r, d, o, FIELD.tileWidth, FIELD.tileHeight);
      n = Paths.scannersSmall(r, TIMER.trigRatio, 0);
      n.draw(r, d, o, FIELD.tileWidth, FIELD.tileHeight);
    } else {
      n = Paths.greyBit(r, 0);
      n.draw(r, d, o, FIELD.tileWidth, FIELD.tileHeight),
        l.draw(
          r,
          d + 0.05 * a,
          o + 0.05 * a,
          0.9 * FIELD.tileWidth,
          0.9 * FIELD.tileHeight,
        );
    }
    if ("selectAward" === STATE.under.type && i[0] && 0 === STATE.under.k0) {
      (d = 2.5 * a), (o = 5 * a), (n = Paths.bit(r, 0, 0, TIMER.glareRatio));
      n.draw(s, d, o, 2 * FIELD.tileWidth, 2 * FIELD.tileHeight);
      n = Paths.scannersSmall(r, TIMER.trigRatio, 0);
      n.draw(s, d, o, 2 * FIELD.tileWidth, 2 * FIELD.tileHeight);
    }
    (o = 2.5 * FIELD.tileHeight), (d = 17 * FIELD.tileWidth);
    if (i[1]) {
      if (TIMER.trigRatio > 0.5) {
        n = Paths.bit(r, 0, TIMER.trigRatioDub, TIMER.glareRatio);
        n.draw(r, d, o, FIELD.tileWidth, FIELD.tileHeight);
      }
      n = Paths.wormholesOld(r, TIMER.trigRatio, 1);
      n.draw(r, d, o, FIELD.tileWidth, FIELD.tileHeight);
    } else {
      n = Paths.greyBit(r, 0);
      n.draw(r, d, o, FIELD.tileWidth, FIELD.tileHeight),
        l.draw(
          r,
          d + 0.05 * a,
          o + 0.05 * a,
          0.9 * FIELD.tileWidth,
          0.9 * FIELD.tileHeight,
        );
    }
    if ("selectAward" === STATE.under.type && i[1] && 1 === STATE.under.k0) {
      (d = 2.5 * a), (o = 5 * a);
      if (TIMER.trigRatio > 0.5) {
        n = Paths.bit(s, 0, TIMER.trigRatioDub, TIMER.glareRatio);
        n.draw(s, d, o, 2 * FIELD.tileWidth, 2 * FIELD.tileHeight);
      }
      n = Paths.wormholesOld(r, TIMER.trigRatio, 1);
      n.draw(s, d, o, 2 * FIELD.tileWidth, 2 * FIELD.tileHeight);
    }
    (o = 1.5 * FIELD.tileHeight), (d = 18 * FIELD.tileWidth);
    if (i[2]) {
      n = Paths.newQubit(r, 0, 0, TIMER.glareRatio);
      n.draw(r, d, o, FIELD.tileWidth, FIELD.tileHeight);
      n = Paths.scannersSmall(r, TIMER.trigRatio, 0, 1);
      n.draw(r, d, o, FIELD.tileWidth, FIELD.tileHeight);
    } else {
      n = Paths.greyQubit(r, 0, 0);
      n.draw(r, d, o, FIELD.tileWidth, FIELD.tileHeight),
        l.draw(
          r,
          d + 0.05 * a,
          o + 0.05 * a,
          0.9 * FIELD.tileWidth,
          0.9 * FIELD.tileHeight,
        );
    }
    if ("selectAward" === STATE.under.type && i[2] && 2 === STATE.under.k0) {
      (d = 2.5 * a),
        (o = 5 * a),
        (n = Paths.newQubit(r, 0, 0, TIMER.glareRatio));
      n.draw(s, d, o, 2 * FIELD.tileWidth, 2 * FIELD.tileHeight);
      n = Paths.scannersSmall(r, TIMER.trigRatio, 0, 1);
      n.draw(s, d, o, 2 * FIELD.tileWidth, 2 * FIELD.tileHeight);
    }
    (o = 2.5 * FIELD.tileHeight), (d = 18 * FIELD.tileWidth);
    if (i[3]) {
      if (TIMER.trigRatio > 0.5) {
        n = Paths.newQubit(r, 0, TIMER.trigRatioDub, TIMER.glareRatio);
        n.draw(r, d, o, FIELD.tileWidth, FIELD.tileHeight);
      }
      n = Paths.wormholesOld(r, TIMER.trigRatio);
      n.draw(r, d, o, FIELD.tileWidth, FIELD.tileHeight);
    } else {
      n = Paths.greyQubit(r, 0, 0);
      n.draw(r, d, o, FIELD.tileWidth, FIELD.tileHeight),
        l.draw(
          r,
          d + 0.05 * a,
          o + 0.05 * a,
          0.9 * FIELD.tileWidth,
          0.9 * FIELD.tileHeight,
        );
    }
    if ("selectAward" === STATE.under.type && i[3] && 3 === STATE.under.k0) {
      (d = 2.5 * a), (o = 5 * a);
      if (TIMER.trigRatio > 0.5) {
        n = Paths.newQubit(s, 0, TIMER.trigRatioDub, TIMER.glareRatio);
        n.draw(s, d, o, 2 * FIELD.tileWidth, 2 * FIELD.tileHeight);
      }
      n = Paths.wormholesOld(s, TIMER.trigRatio);
      n.draw(s, d, o, 2 * FIELD.tileWidth, 2 * FIELD.tileHeight);
    }
    (o = 1.5 * FIELD.tileHeight), (d = 19 * FIELD.tileWidth);
    if (i[4]) {
      var u = Math.PI / 4,
        c =
          ((n = Paths.qFlip(r, 0, u, 0)),
          (-Math.round(TIMER.ratio) * Math.PI) / 2);
      if (Math.round(TIMER.tick + TIMER.ratio) % 4 == 0) {
        n = Paths.newQubit(r, c, 0, TIMER.glareRatio, {
          ratio: TIMER.trigRatioDub,
          rot: 3 * u,
        });
        n.draw(r, d, o, FIELD.tileWidth, FIELD.tileHeight);
      } else if (Math.round(TIMER.tick + TIMER.ratio) % 4 == 1) {
        n = Paths.newQubit(r, Math.PI / 2 + c, 0, TIMER.glareRatio, {
          ratio: TIMER.trigRatioDub,
          rot: u,
        });
        n.draw(r, d, o, FIELD.tileWidth, FIELD.tileHeight);
      } else if (Math.round(TIMER.tick + TIMER.ratio) % 4 == 2) {
        n = Paths.newQubit(r, Math.PI + c, 0, TIMER.glareRatio, {
          ratio: TIMER.trigRatioDub,
          rot: 3 * u,
        });
        n.draw(r, d, o, FIELD.tileWidth, FIELD.tileHeight);
      } else if (Math.round(TIMER.tick + TIMER.ratio) % 4 == 3) {
        n = Paths.newQubit(r, (3 * Math.PI) / 2 + c, 0, TIMER.glareRatio, {
          ratio: TIMER.trigRatioDub,
          rot: u,
        });
        n.draw(r, d, o, FIELD.tileWidth, FIELD.tileHeight);
      }
    } else {
      n = Paths.greyQubit(r, 0, 0);
      n.draw(r, d, o, FIELD.tileWidth, FIELD.tileHeight),
        l.draw(
          r,
          d + 0.05 * a,
          o + 0.05 * a,
          0.9 * FIELD.tileWidth,
          0.9 * FIELD.tileHeight,
        );
    }
    if ("selectAward" === STATE.under.type && i[4] && 4 === STATE.under.k0) {
      (d = 2.5 * a),
        (o = 5 * a),
        (u = Math.PI / 4),
        (n = Paths.qFlip(s, 0, u, 0)),
        (c = (-Math.round(TIMER.ratio) * Math.PI) / 2);
      if (Math.round(TIMER.tick + TIMER.ratio) % 4 == 0) {
        n = Paths.newQubit(s, c, 0, TIMER.glareRatio, {
          ratio: TIMER.trigRatioDub,
          rot: 3 * u,
        });
        n.draw(s, d, o, 2 * FIELD.tileWidth, 2 * FIELD.tileHeight);
      } else if (Math.round(TIMER.tick + TIMER.ratio) % 4 == 1) {
        n = Paths.newQubit(s, Math.PI / 2 + c, 0, TIMER.glareRatio, {
          ratio: TIMER.trigRatioDub,
          rot: u,
        });
        n.draw(s, d, o, 2 * FIELD.tileWidth, 2 * FIELD.tileHeight);
      } else if (Math.round(TIMER.tick + TIMER.ratio) % 4 == 2) {
        n = Paths.newQubit(s, Math.PI + c, 0, TIMER.glareRatio, {
          ratio: TIMER.trigRatioDub,
          rot: 3 * u,
        });
        n.draw(s, d, o, 2 * FIELD.tileWidth, 2 * FIELD.tileHeight);
      } else if (Math.round(TIMER.tick + TIMER.ratio) % 4 == 3) {
        n = Paths.newQubit(s, (3 * Math.PI) / 2 + c, 0, TIMER.glareRatio, {
          ratio: TIMER.trigRatioDub,
          rot: u,
        });
        n.draw(s, d, o, 2 * FIELD.tileWidth, 2 * FIELD.tileHeight);
      }
    }
    (o = 2.5 * FIELD.tileHeight), (d = 19 * FIELD.tileWidth);
    if (i[5]) {
      n = Paths.measure(r, 0, Math.PI / 4, TIMER.trigRatioDub);
      n.draw(r, d + 0.1 * a, o + 0.1 * a, 0.8 * a, 0.8 * a);
      n = Paths.scanners(r, TIMER.trigRatio, Math.PI / 4);
      n.draw(r, d + 0.1 * a, o + 0.1 * a, 0.8 * a, 0.8 * a);
      n = Paths.scanners(r, TIMER.trigRatio, (5 * Math.PI) / 4);
      n.draw(r, d + 0.1 * a, o + 0.1 * a, 0.8 * a, 0.8 * a);
    } else {
      n = Paths.measure(r, 0, Math.PI / 4, TIMER.trigRatioDub, !0);
      n.draw(r, d + 0.1 * a, o + 0.1 * a, 0.8 * a, 0.8 * a),
        l.draw(
          r,
          d + 0.05 * a,
          o + 0.05 * a,
          0.9 * FIELD.tileWidth,
          0.9 * FIELD.tileHeight,
        );
    }
    if ("selectAward" === STATE.under.type && i[5] && 5 === STATE.under.k0) {
      (d = 2.5 * a),
        (o = 5 * a),
        (n = Paths.measure(s, 0, Math.PI / 4, TIMER.trigRatioDub));
      n.draw(s, d + 0.2 * a, o + 0.2 * a, 1.6 * a, 1.6 * a);
      n = Paths.scanners(s, TIMER.trigRatio, Math.PI / 4);
      n.draw(s, d + 0.2 * a, o + 0.2 * a, 1.6 * a, 1.6 * a);
      n = Paths.scanners(s, TIMER.trigRatio, (5 * Math.PI) / 4);
      n.draw(s, d + 0.2 * a, o + 0.2 * a, 1.6 * a, 1.6 * a);
    }
    (o = 1.5 * FIELD.tileHeight), (d = 20 * FIELD.tileWidth);
    if (i[6]) {
      var I = TIMER.tick % 2;
      if (TIMER.ratio < 0.5) {
        n = PathsC.ctrlStart(
          r,
          TIMER.trigRatioDub,
          TIMER.trigRatioDub,
          0,
          I,
          !0,
        );
        n.draw(
          r,
          d + 0.05 * a,
          o + 0.05 * a,
          0.9 * FIELD.tileWidth,
          0.9 * FIELD.tileHeight,
        );
      } else {
        n = PathsC.ctrlStart(
          r,
          TIMER.trigRatioDub,
          TIMER.trigRatioDub,
          0,
          1 - I,
          !0,
        );
        n.draw(
          r,
          d + 0.05 * a,
          o + 0.05 * a,
          0.9 * FIELD.tileWidth,
          0.9 * FIELD.tileHeight,
        );
      }
    } else {
      n = PathsC.ctrlGrey(r);
      n.draw(
        r,
        d + 0.05 * a,
        o + 0.05 * a,
        0.9 * FIELD.tileWidth,
        0.9 * FIELD.tileHeight,
      ),
        l.draw(
          r,
          d + 0.05 * a,
          o + 0.05 * a,
          0.9 * FIELD.tileWidth,
          0.9 * FIELD.tileHeight,
        );
    }
    if ("selectAward" === STATE.under.type && i[6] && 6 === STATE.under.k0) {
      (d = 2.5 * a), (o = 5 * a), (I = TIMER.tick % 2);
      if (TIMER.ratio < 0.5) {
        n = PathsC.ctrlStart(
          s,
          TIMER.trigRatioDub,
          TIMER.trigRatioDub,
          0,
          I,
          !0,
        );
        n.draw(
          s,
          d + 0.1 * a,
          o + 0.1 * a,
          1.8 * FIELD.tileWidth,
          1.8 * FIELD.tileHeight,
        );
      } else {
        n = PathsC.ctrlStart(
          s,
          TIMER.trigRatioDub,
          TIMER.trigRatioDub,
          0,
          1 - I,
          !0,
        );
        n.draw(
          s,
          d + 0.1 * a,
          o + 0.1 * a,
          1.8 * FIELD.tileWidth,
          1.8 * FIELD.tileHeight,
        );
      }
    }
    (o = 2.5 * FIELD.tileHeight), (d = 20 * FIELD.tileWidth);
    if (i[7]) {
      I = TIMER.tick % 2;
      if (TIMER.ratio < 0.5) {
        n = PathsC.ctrlPlay(
          r,
          TIMER.trigRatioDub,
          TIMER.trigRatioDub,
          -1,
          I,
          !0,
        );
        n.draw(
          r,
          d + 0.05 * a,
          o + 0.05 * a,
          0.9 * FIELD.tileWidth,
          0.9 * FIELD.tileHeight,
        );
      } else {
        n = PathsC.ctrlPlay(
          r,
          TIMER.trigRatioDub,
          TIMER.trigRatioDub,
          -1,
          1 - I,
          !0,
        );
        n.draw(
          r,
          d + 0.05 * a,
          o + 0.05 * a,
          0.9 * FIELD.tileWidth,
          0.9 * FIELD.tileHeight,
        );
      }
    } else {
      n = PathsC.ctrlGrey(r);
      n.draw(
        r,
        d + 0.05 * a,
        o + 0.05 * a,
        0.9 * FIELD.tileWidth,
        0.9 * FIELD.tileHeight,
      ),
        l.draw(
          r,
          d + 0.05 * a,
          o + 0.05 * a,
          0.9 * FIELD.tileWidth,
          0.9 * FIELD.tileHeight,
        );
    }
    if ("selectAward" === STATE.under.type && i[7] && 7 === STATE.under.k0) {
      (d = 2.5 * a), (o = 5 * a), (I = TIMER.tick % 2);
      if (TIMER.ratio < 0.5) {
        n = PathsC.ctrlPlay(
          s,
          TIMER.trigRatioDub,
          TIMER.trigRatioDub,
          -1,
          I,
          !0,
        );
        n.draw(
          s,
          d + 0.1 * a,
          o + 0.1 * a,
          1.8 * FIELD.tileWidth,
          1.8 * FIELD.tileHeight,
        );
      } else {
        n = PathsC.ctrlPlay(
          s,
          TIMER.trigRatioDub,
          TIMER.trigRatioDub,
          -1,
          1 - I,
          !0,
        );
        n.draw(
          s,
          d + 0.1 * a,
          o + 0.1 * a,
          1.8 * FIELD.tileWidth,
          1.8 * FIELD.tileHeight,
        );
      }
    }
  }
}
