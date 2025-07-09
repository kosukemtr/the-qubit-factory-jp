class Score {
  static drawBase(e, t = !1) {
    var i = e.ctx,
      a = e.w0;
    e.h0;
    if ("forwardTrans" === STATE.mode) {
      e.clear();
      var r = TIMER.transRatioTrig;
    } else if ("backwardTrans" === STATE.mode) {
      e.clear();
      r = TIMER.transRatioTrig;
    } else {
      if ("constructing" === STATE.mode) {
        e.clear();
        r = 0;
        return void e.clear();
      }
      r = 1;
      if (!t) return;
    }
    var s = SCENARIO.scoreWidth,
      o = SCENARIO.scoreHeight,
      n = FIELD.tileWidth / 9,
      l = [a / 2 - s / 2, a / 2 - s / 2, a / 2 + s / 2, a / 2 + s / 2],
      h = [0, r * o, r * o, 0],
      d = [n, n, n, n],
      u = new Path2D(Helper.makeRoundedPath(l, h, d, 1, 0, 0));
    i.save(),
      (i.globalAlpha = 1),
      (i.shadowBlur = 4),
      (i.shadowOffsetX = FIELD.tileWidth / 24),
      (i.shadowOffsetY = FIELD.tileWidth / 24),
      (i.shadowColor = "#17241f"),
      (i.fillStyle = "#2b2b2b"),
      i.fill(u),
      (i.strokeStyle = "#000"),
      i.stroke(u),
      i.restore(),
      i.save(),
      i.clip(u, "evenodd"),
      Textures.drawFiber(
        i,
        a / 2 - s / 2,
        0,
        s,
        r * o,
        FIELD.tileWidth / 48,
        0.5,
      ),
      i.restore();
  }
  static draw(e, t) {
    var i = e.ctx,
      a = e.w0,
      r = (e.h0, t.ctx),
      s = (t.w0, t.h0, RBOARD[TIMER.tick].success),
      o = RBOARD[TIMER.tick].failure;
    if ("forwardTrans" === STATE.mode) {
      e.clear();
      var n = TIMER.transRatioTrig;
      (s = 0), (o = 0);
    } else if ("backwardTrans" === STATE.mode) {
      e.clear();
      n = TIMER.transRatioTrig;
    } else {
      if ("constructing" === STATE.mode) {
        n = 0;
        return void e.clear();
      }
      n = 1;
      e.clear();
    }
    var l = n * SCENARIO.scoreHeight;
    if (SCENARIO.successful >= 0) {
      if (
        (i.save(),
        (i.textBaseline = "top"),
        (i.textAlign = "center"),
        (i.font = (1.2 * FIELD.tileWidth) / 3 + "px Courier New"),
        (i.fillStyle = "antiquewhite"),
        (i.shadowBlur = 2),
        (i.shadowOffsetX = 2),
        (i.shadowOffsetY = 2),
        (i.shadowColor = "black"),
        SCENARIO.repetitions > 1)
      ) {
        var h = [];
        if (
          (h.push(
            "要件: " +
              SCENARIO.successRep +
              " / " +
              SCENARIO.repetitions,
          ),
          h.push(
            "進捗: " +
              SCENARIO.correctReps +
              " / " +
              (SCENARIO.currentRep - 1),
          ),
          4 === SCENARIO.victoryCond)
        ) {
          var d = (FIELD.cols - 2) * (FIELD.rows - 2),
            u = 100 - Math.round((100 * FIELD.cleanTiles) / d);
          h.push(SCENARIO.starText + u + "%)");
        } else h.push(SCENARIO.starText);
      } else if (0 === SCENARIO.victoryCond) {
        h = [];
        h.push(
          "要件: " + SCENARIO.numCorrect + " / " + SCENARIO.maxTrials,
        ),
          h.push("進捗: " + s + " / " + (s + o)),
          h.push(SCENARIO.starText);
      } else if (1 === SCENARIO.victoryCond) {
        h = [];
        h.push("要件: すべてのビットとキュービットを焼却する"),
          h.push(SCENARIO.starText);
      } else if (2 === SCENARIO.victoryCond) {
        h = [];
        if (!RBOARD[TIMER.tick]) return;
        if ("chsh" === SCENARIO.name) {
          var c = RBOARD[TIMER.tick].getGate(10, 1);
          if (c.counterMax)
            var I = Math.round((c.counter / c.counterMax) * 100);
          else I = 0;
        } else {
          c = RBOARD[TIMER.tick].getGate(18, 5);
          var E = RBOARD[TIMER.tick].getGate(18, 8);
          if (c.counterMax) I = Math.round((c.counter / c.counterMax) * 100);
          else I = 0;
          if (E.counterMax)
            var S = Math.round((E.counter / E.counterMax) * 100);
          else S = 0;
        }
        "chsh" === SCENARIO.name
          ? (h.push("出力: " + s + " / " + SCENARIO.maxTrials),
            h.push("現在の勝率:" + I + "%"),
            h.push(SCENARIO.starText))
          : (h.push("出力: " + s + " / " + SCENARIO.maxTrials),
            h.push("状態: C=" + I + "%, D=" + S + "%"),
            h.push(SCENARIO.starText));
      } else if (3 === SCENARIO.victoryCond) {
        h = [];
        h.push("要件: " + SCENARIO.numCorrect),
          h.push("進捗: " + s),
          h.push(SCENARIO.starText);
      } else if (4 === SCENARIO.victoryCond) {
        h = [];
        h.push(
          "要件: " + SCENARIO.numCorrect + " / " + SCENARIO.maxTrials,
        ),
          h.push("進捗: " + s + " / " + (s + o));
        (d = (FIELD.cols - 2) * (FIELD.rows - 2)),
          (u = 100 - Math.round((100 * FIELD.cleanTiles) / d));
        h.push(SCENARIO.starText + u + "%)");
      }
      for (
        var f = l - SCENARIO.scoreHeight + 1.75 * SCENARIO.yPad, p = 0;
        p < h.length;
        p++
      ) {
        for (
          var T = Helper.parseText(i, h[p], SCENARIO.scoreWidth), R = 0;
          R < T.length;
          R++
        )
          i.fillText(T[R], a / 2, f), R < T.length - 1 && (f += SCENARIO.yPad2);
        f += SCENARIO.yPad;
      }
      i.restore(),
        t.clear(),
        r.save(),
        (r.textBaseline = "top"),
        (r.textAlign = "center"),
        (r.font = (1.2 * FIELD.tileWidth) / 3 + "px Courier New"),
        (r.fillStyle = "antiquewhite"),
        (r.shadowBlur = 2),
        (r.shadowOffsetX = 2),
        (r.shadowOffsetY = 2),
        (r.shadowColor = "black"),
        r.fillText(
          "レベル状況",
          a / 2 - FIELD.tileWidth / 2,
          FIELD.tileWidth / 6,
        ),
        r.restore();
    }
  }
  static check() {
    RBOARD[TIMER.tick].success + RBOARD[TIMER.tick].failure >=
      SCENARIO.maxTrials &&
      ((STATE.mode = "finished"),
      RBOARD[TIMER.tick].success >= SCENARIO.numCorrect
        ? (SCENARIO.successful = 1)
        : (SCENARIO.successful = 0));
  }
}
