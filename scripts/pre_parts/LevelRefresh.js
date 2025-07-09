function LevelRefresh(e, t) {
  if (["tut1", "tut3", "tut4"].indexOf(e) >= 0) {
    for (var i = 0; i < 6; i++) {
      var a = Math.round(Math.random());
      (t.getBit(18, 8 + i).value = 1 - a), (t.getBit(0, 5 - i).value = 1 - a);
    }
    for (i = 0; i < 5; i++) {
      a = (Math.PI * Math.floor(16 * Math.random())) / 8;
      t.getQubit(0, 9 + i).setPolarize(a), t.getQubit(18, 4 - i).setPolarize(a);
    }
    a = (Math.PI * Math.floor(16 * Math.random())) / 8;
    return t.getQubit(0, 8).setPolarize(a), void (t.getGate(18, 5, 0).rot = a);
  }
  if ("tut2" === e) {
    for (i = 0; i < 6; i++) {
      a = Math.round(Math.random());
      (t.getBit(18, 8 + i).value = a), (t.getBit(0, 5 - i).value = 1 - a);
    }
    for (i = 0; i < 5; i++) {
      a = Math.floor(16 * Math.random());
      t.getQubit(0, 9 + i).setPolarize((Math.PI * a) / 8),
        t.getQubit(18, 4 - i).setPolarize((Math.PI * (a - 4)) / 8);
    }
    a = (Math.PI * Math.floor(16 * Math.random())) / 8;
    return (
      t.getQubit(0, 8).setPolarize((Math.PI * a) / 8),
      void (t.getGate(18, 5, 0).rot = (Math.PI * (a - 4)) / 8)
    );
  }
  if ("tut5" === e) {
    for (i = 0; i < 6; i++) {
      a = Math.round(Math.random());
      t.getBit(0, 5 - i).value = 1 - a;
    }
    for (i = 0; i < 5; i++) {
      a = (Math.PI * Math.floor(16 * Math.random())) / 8;
      t.getQubit(0, 9 + i).setPolarize(a);
    }
    a = (Math.PI * Math.floor(16 * Math.random())) / 8;
    t.getQubit(0, 8).setPolarize(a);
  } else if ("tut6" === e) {
    for (i = 0; i < 6; i++) {
      a = Math.round(Math.random());
      t.getBit(0, 5 - i).value = a;
    }
    for (var r = 0; r < 6; r++) {
      var s = t.getBit(0, 5 - r).value;
      (t.getBit(18, 5 - r).value = s),
        (t.getBit(18, 5 - r).value = r % 4 == 3 ? 1 - s : s),
        r % 2 == 1 &&
          1 === t.getBit(18, 5 - r).value &&
          (t.getBit(18, 6 - r).value = 1 - t.getBit(18, 6 - r).value);
    }
  } else if ("class1" === e)
    for (i = 0; i < 6; i++) {
      a = Math.round(Math.random());
      (t.getBit(18, 5 - i).value = 1), (t.getBit(0, 5 - i).value = a);
    }
  else if ("class2" === e) {
    for (a = [], i = 0; i < 6; i++)
      a.push(Math.round(Math.random())),
        (t.getBit(18, 5 - i).value = a[i]),
        (t.getBit(18, 8 + i).value = a[i]);
    (t.getBit(0, 5).value = a[0]),
      (t.getBit(0, 8).value = a[1]),
      (t.getBit(0, 1).value = a[2]),
      (t.getBit(0, 12).value = a[3]),
      (t.getBit(1, 0).value = a[4]),
      (t.getBit(1, 13).value = a[5]);
  } else if ("class3" === e) {
    for (a = [], i = 0; i < 6; i++) a.push(Math.round(Math.random()));
    var o = [0, 1, 0, 1, 0, 1].sort((e, t) => 0.5 - Math.random()),
      n = 0,
      l = 0;
    for (i = 0; i < 6; i++)
      (t.getBit(0, 5 - i).value = o[i]),
        (t.getBit(0, 8 + i).value = a[i]),
        0 === o[i]
          ? ((t.getBit(18, 5 - n).value = a[i]), (n += 1))
          : ((t.getBit(18, 8 + l).value = a[i]), (l += 1));
  } else if ("class4" === e) {
    for (a = [], i = 0; i < 6; i++)
      a.push(Math.round(Math.random())), (t.getBit(18, 5 - i).value = a[i]);
    (t.getBit(0, 4).value = a[0]),
      (t.getBit(0, 8).value = a[1]),
      (t.getBit(0, 2).value = a[2]),
      (t.getBit(0, 12).value = a[3]),
      (t.getBit(0, 0).value = a[4]),
      (t.getBit(1, 13).value = a[5]);
  } else if ("class5" === e) {
    for (a = [], o = [], i = 0; i < 6; i++)
      a.push(Math.round(Math.random())),
        o.push(Math.round(Math.random())),
        (t.getBit(18, 5 - i).value = a[i]),
        (t.getBit(0, 5 - i).value = a[i]),
        (t.getBit(0, 8 + i).value = o[i]);
    for (i = 0; i < 6; i++) SCENARIO.CINPUTS[2][6 + i] = o[i];
  } else if ("class7" === e) {
    for (i = 0; i < 6; i++) {
      a = Math.round(Math.random());
      (t.getBit(18, 5 - i).value = a), (t.getBit(0, 5 - i).value = a);
    }
    a = Math.round(Math.random());
    (t.getBit(17, 0).value = a), (t.getBit(1, 0).value = a);
    a = Math.round(Math.random());
    (t.getBit(16, 0).value = a), (t.getBit(2, 0).value = a);
    for (i = 0; i < 6; i++) {
      o = Math.round(Math.random());
      (t.getBit(18, 8 + i).value = o), (t.getBit(3 + i, 0).value = o);
    }
  } else if ("classPuzzle1" === e)
    for (i = 0; i < 6; i++) {
      (a = Math.round(Math.random())), (o = Math.round(Math.random()));
      (t.getBit(18, 5 - i).value = a),
        (t.getBit(0, 5 - i).value = a),
        i % 2 == 0 &&
          ((t.getBit(18, 8 + i).value = o), (t.getBit(0, 8 + i).value = o));
    }
  else if ("classPuzzle2" === e)
    for (i = 0; i < 6; i++) {
      (a = Math.round(Math.random())), (o = Math.round(Math.random()));
      (t.getBit(0, 5 - i).value = a),
        (t.getBit(0, 8 + i).value = o),
        (t.getBit(18, 5 - i).value = (a + o) % 2),
        (t.getBit(18, 8 + i).value = o && a);
    }
  else if ("classPuzzle3" === e)
    for (i = 0; i < 6; i++) {
      (a = Math.round(Math.random())), (o = Math.round(Math.random()));
      (t.getBit(0, 5 - i).value = a),
        (t.getBit(0, 8 + i).value = o),
        (t.getBit(18, 8 + i).value = o && a);
    }
  else if ("classPuzzle3B" === e)
    for (i = 0; i < 6; i++) {
      (a = Math.round(Math.random())), (o = Math.round(Math.random()));
      (t.getBit(0, 5 - i).value = a),
        (t.getBit(0, 8 + i).value = o),
        (t.getBit(18, 8 + i).value = (o + a) % 2);
    }
  else if ("classPuzzle4" === e) {
    var h = 0;
    for (i = 0; i < 5; i++) {
      a = Math.round(Math.random());
      (t.getBit(0, 5 - i).value = a),
        (t.getBit(18, 5 - i).value = Math.abs(a - h)),
        (h = a);
    }
    (t.getBit(0, 0).value = 0), (t.getBit(18, 0).value = a);
  } else if ("classPuzzle5" === e) {
    for (a = [], i = 0; i < 6; i++)
      a.push(Math.round(Math.random())), (t.getBit(0, 5 - i).value = a[i]);
    (t.getBit(18, 5).value = a[0]),
      (t.getBit(18, 4).value = a[1]),
      (t.getBit(18, 3).value = a[3]),
      (t.getBit(18, 2).value = a[4]),
      (t.getBit(18, 8).value = a[2]),
      (t.getBit(18, 9).value = a[5]);
  } else if ("classPuzzle6" === e)
    for (i = 0; i < 6; i++) {
      a = Math.round(Math.random());
      (t.getBit(0, 5 - i).value = a), (t.getBit(18, 5 - i).value = a);
    }
  else if ("classPuzzle7" === e)
    for (i = 0; i < 6; i++) {
      (a = Math.round(Math.random())), (o = Math.round(Math.random()));
      (t.getBit(0, 5 - i).value = a),
        (t.getBit(0, 8 + i).value = o),
        (t.getBit(18, 5 - i).value = o),
        (t.getBit(18, 8 + i).value = a);
    }
  else if ("classPuzzle8" === e) {
    for (var d = [], u = 0; u < 8; u++) d.push(Math.round(Math.random()));
    var c = [...d],
      I = Math.round(Math.random());
    if (0 === I) {
      var E = Math.floor(8 * Math.random()),
        S = Math.floor(8 * Math.random());
      Math.round(Math.random())
        ? (c[E] = 1 - c[E])
        : ((c[E] = 1 - c[E]), E !== S && (c[S] = 1 - c[S]));
    }
    (t.getBit(0, 5).value = d[0]),
      (t.getBit(0, 4).value = d[1]),
      (t.getBit(0, 3).value = d[2]),
      (t.getBit(0, 2).value = d[3]),
      (t.getBit(0, 1).value = d[4]),
      (t.getBit(0, 0).value = d[5]),
      (t.getBit(1, 0).value = d[6]),
      (t.getBit(2, 0).value = d[7]),
      (t.getBit(0, 8).value = c[0]),
      (t.getBit(0, 9).value = c[1]),
      (t.getBit(0, 10).value = c[2]),
      (t.getBit(0, 11).value = c[3]),
      (t.getBit(0, 12).value = c[4]),
      (t.getBit(0, 13).value = c[5]),
      (t.getBit(1, 13).value = c[6]),
      (t.getBit(2, 13).value = c[7]),
      (t.getBit(18, 5).value = 0 + I);
  } else if ("classPuzzle9" === e) {
    for (I = Math.round(Math.random()), d = [], u = 0; u < 10; u++)
      d.push(Math.round(Math.random()));
    if (0 === I) {
      var f = 0;
      for (r = 0; r < 10; r++)
        1 === d[r] ? (f += 1) : (f = 0), 4 === f && ((d[r] = 0), (f = 0));
    } else if (1 === I) {
      var p = Math.floor(7 * Math.random());
      (d[p] = 1), (d[p + 1] = 1), (d[p + 2] = 1), (d[p + 3] = 1);
    }
    (t.getBit(0, 5).value = d[0]),
      (t.getBit(0, 4).value = d[1]),
      (t.getBit(0, 3).value = d[2]),
      (t.getBit(0, 2).value = d[3]),
      (t.getBit(0, 1).value = d[4]),
      (t.getBit(0, 0).value = d[5]),
      (t.getBit(1, 0).value = d[6]),
      (t.getBit(2, 0).value = d[7]),
      (t.getBit(3, 0).value = d[8]),
      (t.getBit(4, 0).value = d[9]),
      (t.getBit(18, 5).value = 0 + I);
  } else if ("vaziraniClassic" === e) {
    var T = Math.round(Math.random()),
      R = Math.round(Math.random()),
      m = Math.round(Math.random());
    (t.getGate(6, 6, 1).rot = T),
      (t.getGate(9, 6, 1).rot = R),
      (t.getGate(12, 6, 1).rot = m),
      (t.getBit(18, 4).value = 1 - T),
      (t.getBit(18, 3).value = 1 - R),
      (t.getBit(18, 2).value = 1 - m);
  } else if ("quant1" === e) {
    for (i = 0; i < 5; i++) {
      a = (Math.PI * Math.floor(16 * Math.random())) / 8;
      t.getQubit(0, 4 - i).setPolarize(a), t.getQubit(18, 4 - i).setPolarize(a);
      o = (Math.PI * Math.floor(16 * Math.random())) / 8;
      t.getQubit(0, 9 + i).setPolarize(o), t.getQubit(18, 9 + i).setPolarize(o);
    }
    a = (Math.PI * Math.floor(16 * Math.random())) / 8;
    t.getQubit(0, 5).setPolarize(a), (t.getGate(18, 5, 0).rot = a);
    o = (Math.PI * Math.floor(16 * Math.random())) / 8;
    t.getQubit(0, 8).setPolarize(o), (t.getGate(18, 8, 0).rot = o);
  } else if ("quant2" === e) {
    for (i = 0; i < 6; i++) {
      a = Math.round(Math.random());
      (t.getBit(18, 5 - i).value = a), (t.getBit(0, 5 - i).value = a);
    }
    for (i = 0; i < 5; i++) {
      a = (Math.PI * (4 + 8 * Math.round(Math.random()))) / 8;
      t.getQubit(0, 9 + i).setPolarize(a), t.getQubit(18, 9 + i).setPolarize(a);
    }
    a = (Math.PI * (4 + 8 * Math.round(Math.random()))) / 8;
    t.getQubit(0, 8).setPolarize(a), (t.getGate(18, 8, 0).rot = a);
  } else if ("quant3A" === e);
  else if ("quant3" === e) {
    for (i = 0; i < 5; i++) {
      a = (Math.PI * (4 * Math.round(Math.random()))) / 8;
      t.getQubit(0, 4 - i).setPolarize(a), t.getQubit(18, 4 - i).setPolarize(a);
    }
    a = (Math.PI * (4 * Math.round(Math.random()))) / 8;
    t.getQubit(0, 5).setPolarize(a), (t.getGate(18, 5, 0).rot = a);
  } else if ("quant4" === e)
    for (i = 0; i < 6; i++) {
      a = (Math.PI * Math.floor(16 * Math.random())) / 8;
      t.getQubit(0, 5 - i).setPolarize(a);
    }
  else if ("quant5" === e || "quant6" === e) {
    for (a = [], o = [], i = 0; i < 6; i++)
      a.push(8 * Math.round(Math.random())),
        t.getQubit(0, 5 - i).setPolarize((Math.PI * a[i]) / 8),
        o.push(4 * Math.round(Math.random())),
        t.getQubit(0, 8 + i).setPolarize((Math.PI * o[i]) / 8);
    for (i = 1; i < 6; i++)
      t.getQubit(18, 5 - i).setPolarize((Math.PI * (a[i] + o[i])) / 8);
    t.getGate(18, 5, 0).rot = (Math.PI * (a[0] + o[0])) / 8;
  } else if ("quant6B" === e) {
    (SCENARIO.QINPUTS = [[], [], [], []]), (SCENARIO.CINPUTS = [[], [], []]);
    for (r = 0; r < 96; r++) {
      s = Math.floor(16 * Math.random());
      var g = Math.floor(16 * Math.random());
      SCENARIO.QINPUTS[0].push(s),
        SCENARIO.QINPUTS[1].push(g),
        SCENARIO.QINPUTS[2].push(s + 5),
        SCENARIO.QINPUTS[3].push(16 - g);
    }
    for (i = 1; i < 6; i++) {
      s = Math.floor(16 * Math.random());
      t.getQubit(0, 5 - i).setPolarize(((s + 5) * Math.PI) / 8),
        t.getQubit(18, 5 - i).setPolarize((s * Math.PI) / 8),
        t.getQubit(0, 5 - i).rotateBasis(0),
        (t.getQubit(0, 5 - i).lockedBasis = !0);
    }
    s = Math.floor(16 * Math.random());
    (t.getGate(18, 5).rot = (s * Math.PI) / 8),
      t.getQubit(0, 5).setPolarize(((s + 5) * Math.PI) / 8),
      t.getQubit(0, 5).rotateBasis(0),
      (t.getQubit(0, 5).lockedBasis = !0);
    for (i = 9; i < 14; i++) {
      g = Math.floor(16 * Math.random());
      t.getQubit(18, i).setPolarize((g * Math.PI) / 8),
        t.getQubit(0, i).setPolarize(((16 - g) * Math.PI) / 8),
        t.getQubit(0, i).rotateBasis(Math.PI / 2),
        (t.getQubit(0, i).lockedBasis = !0);
    }
    g = Math.floor(16 * Math.random());
    (t.getGate(18, 8).rot = (g * Math.PI) / 8),
      t.getQubit(0, 8).setPolarize(((16 - g) * Math.PI) / 8),
      t.getQubit(0, 8).rotateBasis(Math.PI / 2),
      (t.getQubit(0, 8).lockedBasis = !0);
  } else if ("quant7" === e)
    for (i = 0; i < 6; i++)
      t.getQubit(0, 5 - i).rotateBasis(0),
        (t.getQubit(0, 5 - i).lockedBasis = !0);
  else if ("quantChallengeA" === e) {
    for (i = 0; i < 5; i++) {
      (a = 4 + 8 * Math.round(Math.random())), (o = 16 - a);
      t.getQubit(0, 4 - i).setPolarize((Math.PI * a) / 8),
        t.getQubit(18, 4 - i).setPolarize((Math.PI * o) / 8);
    }
    (a = 4 + 8 * Math.round(Math.random())), (o = 16 - a);
    t.getQubit(0, 5).setPolarize((Math.PI * a) / 8),
      (t.getGate(18, 5, 0).rot = (Math.PI * o) / 8);
  } else if ("quantChallengeB" === e) {
    for (i = 0; i < 5; i++) {
      a = (Math.PI * Math.floor(16 * Math.random())) / 8;
      t.getQubit(0, 4 - i).setPolarize(a),
        (t.getQubit(0, 4 - i).lockedBasis = !0),
        t.getQubit(18, 4 - i).setPolarize(a);
      o = (Math.PI * Math.floor(16 * Math.random())) / 8;
      t.getQubit(0, 9 + i).setPolarize(o),
        (t.getQubit(0, 9 + i).lockedBasis = !0),
        t.getQubit(18, 9 + i).setPolarize(o);
    }
    a = (Math.PI * Math.floor(16 * Math.random())) / 8;
    t.getQubit(0, 5).setPolarize(a),
      (t.getQubit(0, 5).lockedBasis = !0),
      (t.getGate(18, 5, 0).rot = a);
    o = (Math.PI * Math.floor(16 * Math.random())) / 8;
    t.getQubit(0, 8).setPolarize(o),
      (t.getQubit(0, 8).lockedBasis = !0),
      (t.getGate(18, 8, 0).rot = o);
  } else if ("quantChallengeC" === e) {
    for (i = 0; i < 5; i++) {
      a = (Math.PI * Math.floor(16 * Math.random())) / 8;
      t.getQubit(0, 4 - i).setPolarize(a), t.getQubit(18, 4 - i).setPolarize(a);
      o = (Math.PI * Math.floor(16 * Math.random())) / 8;
      t.getQubit(0, 9 + i).setPolarize(o);
    }
    a = (Math.PI * Math.floor(16 * Math.random())) / 8;
    t.getQubit(0, 5).setPolarize(a), (t.getGate(18, 5, 0).rot = a);
    o = (Math.PI * Math.floor(16 * Math.random())) / 8;
    t.getQubit(0, 8).setPolarize(o),
      t
        .getQubit(5, 13)
        .setPolarize((Math.PI * Math.floor(16 * Math.random())) / 8),
      t
        .getQubit(4, 13)
        .setPolarize((Math.PI * Math.floor(16 * Math.random())) / 8),
      t
        .getQubit(3, 13)
        .setPolarize((Math.PI * Math.floor(16 * Math.random())) / 8),
      t
        .getQubit(2, 13)
        .setPolarize((Math.PI * Math.floor(16 * Math.random())) / 8),
      t
        .getQubit(1, 13)
        .setPolarize((Math.PI * Math.floor(16 * Math.random())) / 8);
  } else if ("quantChallengeD" === e)
    for (i = 0; i < 4; i++) {
      (o = 2 * Math.round(Math.random()) - 1),
        (a = 1 + Math.floor(3 * Math.random()));
      var A = t.entList[i];
      (A.ampsComp = [
        Math.cos((a * Math.PI) / 16),
        0,
        0,
        o * Math.sin((a * Math.PI) / 16),
      ]),
        A.computeRotAmps(),
        A.computeAllEnts();
      var C = 0;
      if (o < 0) C = 1;
      t.getBit(18, 5 - i).value = C;
    }
  else if ("quantChallengeE" === e) {
    for (i = 0; i < 5; i++) {
      a = (Math.PI * Math.floor(16 * Math.random())) / 8;
      t.getQubit(0, 4 - i).setPolarize(a), t.getQubit(18, 9 + i).setPolarize(a);
      o = (Math.PI * Math.floor(16 * Math.random())) / 8;
      t.getQubit(0, 9 + i).setPolarize(o), t.getQubit(18, 4 - i).setPolarize(o);
    }
    a = (Math.PI * Math.floor(16 * Math.random())) / 8;
    t.getQubit(0, 5).setPolarize(a), (t.getGate(18, 8, 0).rot = a);
    o = (Math.PI * Math.floor(16 * Math.random())) / 8;
    t.getQubit(0, 8).setPolarize(o), (t.getGate(18, 5, 0).rot = o);
  } else if ("quantChallengeF" === e);
  else if ("quantChallengeG" === e) {
    for (i = 0; i < 5; i++) {
      a = Math.round(Math.random());
      t.getQubit(18, 4 - i).setPolarize((Math.PI * (4 + 4 * a)) / 8),
        (t.getBit(0, 9 + i).value = 1 - a);
    }
    a = Math.round(Math.random());
    (t.getBit(0, 8).value = 1 - a),
      (t.getGate(18, 5, 0).rot = (Math.PI * (4 + 4 * a)) / 8);
  } else if ("quantErrorA" === e) {
    for (i = 0; i < 5; i++) {
      a = (Math.PI * Math.floor(16 * Math.random())) / 8;
      t.getQubit(0, 4 - i).setPolarize(a), t.getQubit(18, 4 - i).setPolarize(a);
    }
    a = (Math.PI * Math.floor(16 * Math.random())) / 8;
    t.getQubit(0, 5).setPolarize(a), (t.getGate(18, 5, 0).rot = a);
  } else if ("quantErrorB" === e) {
    for (i = 0; i < 4; i++)
      (a = Math.floor(16 * Math.random())),
        t.getQubit(0, 4 - i).setPolarize((Math.PI * a) / 8),
        t.getQubit(18, 4 - i).setPolarize((Math.PI * a) / 8);
    (a = Math.floor(16 * Math.random())),
      t.getQubit(0, 5).setPolarize((Math.PI * a) / 8),
      (t.getGate(18, 5, 0).rot = (Math.PI * a) / 8);
    for (i = 0; i < 3; i++) {
      A = t.entList[i];
      (A.ampsComp = [1 / Math.sqrt(2), 0, 0, 1 / Math.sqrt(2)]),
        A.computeRotAmps(),
        A.computeAllEnts();
    }
  } else if ("adderB" === e) {
    (a = []), (o = []);
    a.push(Math.round(Math.random())), o.push(Math.round(Math.random()));
    for (i = 1; i < 5; i++)
      a.push(Math.round(Math.random())),
        t.getQubit(0, 5 - i).setPolarize(Math.PI * a[i]),
        t.getQubit(18, 5 - i).setPolarize(Math.PI * a[i]),
        o.push(Math.round(Math.random())),
        t.getQubit(0, 8 + i).setPolarize(Math.PI * o[i]),
        t.getQubit(18, 8 + i).setPolarize(Math.PI * o[i]);
    t.getQubit(0, 5).setPolarize(Math.PI * a[0]),
      (t.getGate(18, 5, 0).rot = Math.PI * a[0]),
      t.getQubit(0, 8).setPolarize(Math.PI * o[0]),
      (t.getGate(18, 8, 0).rot = Math.PI * o[0]),
      (t.getGate(13, 13, 0).rot = Math.PI * ((a[0] + o[0]) % 2)),
      t.getQubit(14, 13).setPolarize(Math.PI * ((a[1] + o[1]) % 2)),
      t.getQubit(15, 13).setPolarize(Math.PI * ((a[2] + o[2]) % 2)),
      t.getQubit(16, 13).setPolarize(Math.PI * ((a[3] + o[3]) % 2)),
      t.getQubit(17, 13).setPolarize(Math.PI * ((a[4] + o[4]) % 2));
  } else if ("adderC" === e) {
    (a = []), (o = []);
    a.push(Math.round(Math.random())), o.push(Math.round(Math.random()));
    for (i = 1; i < 5; i++)
      a.push(Math.round(Math.random())),
        t.getQubit(0, 5 - i).setPolarize(Math.PI * a[i]),
        t.getQubit(18, 5 - i).setPolarize(Math.PI * a[i]),
        o.push(Math.round(Math.random())),
        t.getQubit(0, 8 + i).setPolarize(Math.PI * o[i]),
        t.getQubit(18, 8 + i).setPolarize(Math.PI * o[i]);
    t.getQubit(0, 5).setPolarize(Math.PI * a[0]),
      (t.getGate(18, 5, 0).rot = Math.PI * a[0]),
      t.getQubit(0, 8).setPolarize(Math.PI * o[0]),
      (t.getGate(18, 8, 0).rot = Math.PI * o[0]),
      (t.getGate(13, 13, 0).rot = Math.PI * Math.floor(0.55 * (a[0] + o[0]))),
      t
        .getQubit(14, 13)
        .setPolarize(Math.PI * Math.floor(0.55 * (a[1] + o[1]))),
      t
        .getQubit(15, 13)
        .setPolarize(Math.PI * Math.floor(0.55 * (a[2] + o[2]))),
      t
        .getQubit(16, 13)
        .setPolarize(Math.PI * Math.floor(0.55 * (a[3] + o[3]))),
      t
        .getQubit(17, 13)
        .setPolarize(Math.PI * Math.floor(0.55 * (a[4] + o[4])));
  } else if ("measure" === e)
    for (i = 0; i < 6; i++) {
      a = Math.round(Math.random());
      t.getQubit(0, 5 - i).setPolarize((Math.PI * a) / 2),
        t.getQubit(0, 8 + i).setPolarize((Math.PI * a) / 2),
        (t.getBit(18, 5 - i).value = a);
    }
  else if ("measureB" === e) {
    a = Math.round(Math.random());
    t.getQubit(0, 5).setPolarize((Math.PI * a) / 2),
      t.getQubit(0, 4).setPolarize((Math.PI * a) / 2),
      t.getQubit(0, 3).setPolarize((Math.PI * a) / 2),
      t.getQubit(0, 2).setPolarize((Math.PI * a) / 2),
      (t.getBit(18, 5).value = a);
    a = Math.round(Math.random());
    t.getQubit(0, 1).setPolarize((Math.PI * a) / 2),
      t.getQubit(0, 0).setPolarize((Math.PI * a) / 2),
      t.getQubit(1, 0).setPolarize((Math.PI * a) / 2),
      t.getQubit(2, 0).setPolarize((Math.PI * a) / 2),
      (t.getBit(18, 4).value = a);
    a = Math.round(Math.random());
    t.getQubit(3, 0).setPolarize((Math.PI * a) / 2),
      t.getQubit(4, 0).setPolarize((Math.PI * a) / 2),
      t.getQubit(5, 0).setPolarize((Math.PI * a) / 2),
      t.getQubit(6, 0).setPolarize((Math.PI * a) / 2),
      (t.getBit(18, 3).value = a);
    a = Math.round(Math.random());
    t.getQubit(7, 0).setPolarize((Math.PI * a) / 2),
      t.getQubit(8, 0).setPolarize((Math.PI * a) / 2),
      t.getQubit(9, 0).setPolarize((Math.PI * a) / 2),
      t.getQubit(10, 0).setPolarize((Math.PI * a) / 2),
      (t.getBit(18, 2).value = a);
    a = Math.round(Math.random());
    t.getQubit(11, 0).setPolarize((Math.PI * a) / 2),
      t.getQubit(12, 0).setPolarize((Math.PI * a) / 2),
      t.getQubit(13, 0).setPolarize((Math.PI * a) / 2),
      t.getQubit(14, 0).setPolarize((Math.PI * a) / 2),
      (t.getBit(18, 1).value = a);
  } else if ("preDenseB" === e)
    for (i = 0; i < 6; i++) {
      a = Math.round(Math.random());
      t.getBit(0, 5 - i).value = a;
      o = Math.round(Math.random());
      t.getBit(0, 8 + i).value = o;
      var L = Math.round(Math.random());
      (t.getBit(13 + i, 13).value = L),
        (t.getBit(18, 5 - i).value = 0 === L ? a : o);
    }
  else if ("simpleDistill" === e) {
    A = t.entList[0];
    A.setQubits([t.getQubit(4, 11), t.getQubit(4, 10), t.getQubit(4, 9)]),
      (A.ampsComp = [0.25, 0.75, 0.25, -0.25, 0.25, -0.25, -0.25, 0.25]),
      A.computeRotAmps(),
      A.computeFinalAmps(),
      A.computeAllEnts(),
      (t.getQubit(4, 11).lockedBasis = !0),
      (t.getQubit(4, 10).lockedBasis = !0),
      (t.getQubit(4, 9).lockedBasis = !0);
  } else if ("dense" === e) {
    for (i = 0; i < 6; i++) {
      a = Math.round(Math.random());
      (t.getBit(18, 5 - i).value = a), (t.getBit(0, 5 - i).value = a);
      o = Math.round(Math.random());
      (t.getBit(18, 8 + i).value = o), (t.getBit(0, 8 + i).value = o);
    }
    for (i = 0; i < 3; i++) {
      A = t.entList[i];
      (A.ampsComp = [1 / Math.sqrt(2), 0, 0, 1 / Math.sqrt(2)]),
        A.computeRotAmps(),
        A.computeAllEnts();
    }
  } else if ("teleport" === e) {
    for (i = 0; i < 4; i++)
      (a = Math.floor(16 * Math.random())),
        t.getQubit(0, 4 - i).setPolarize((Math.PI * a) / 8),
        t.getQubit(18, 4 - i).setPolarize((Math.PI * a) / 8);
    (a = Math.floor(16 * Math.random())),
      t.getQubit(0, 5).setPolarize((Math.PI * a) / 8),
      (t.getGate(18, 5, 0).rot = (Math.PI * a) / 8);
    for (i = 0; i < 3; i++) {
      A = t.entList[i];
      (A.ampsComp = [1 / Math.sqrt(2), 0, 0, 1 / Math.sqrt(2)]),
        A.computeRotAmps(),
        A.computeAllEnts();
    }
  } else if ("distill" === e) {
    for (i = 0; i < 4; i++)
      (a = Math.floor(16 * Math.random())),
        t.getQubit(0, 4 - i).setPolarize((Math.PI * a) / 8),
        t.getQubit(18, 4 - i).setPolarize((Math.PI * a) / 8);
    (a = Math.floor(16 * Math.random())),
      t.getQubit(0, 5).setPolarize((Math.PI * a) / 8),
      (t.getGate(18, 5, 0).rot = (Math.PI * a) / 8);
    for (i = 0; i < 4; i++) {
      A = t.entList[i];
      (A.ampsComp = [
        Math.cos((1 * Math.PI) / 16),
        0,
        0,
        Math.sin((1 * Math.PI) / 16),
      ]),
        A.computeRotAmps(),
        A.computeAllEnts();
    }
  } else if ("vaziraniQuantum" === e) {
    (T = Math.round(Math.random())),
      (R = Math.round(Math.random())),
      (m = Math.round(Math.random()));
    (t.getGate(6, 6, 0).state = T),
      (t.getGate(9, 6, 0).state = R),
      (t.getGate(12, 6, 0).state = m),
      (t.getBit(18, 4).value = 1 - T),
      (t.getBit(18, 3).value = 1 - R),
      (t.getBit(18, 2).value = 1 - m);
  } else if ("quantumAdv1" === e) {
    var D = Math.max(0, SCENARIO.currentRep - SCENARIO.retard - 1);
    if ("constructing" === STATE.mode) {
      a = Math.round(Math.random());
      var b = Math.floor(16 * Math.random());
    } else if (D < 17) (a = 1), (b = D);
    else (a = 0), (b = 0);
    if (((t.getBit(18, 5).value = a), 0 === a))
      var O = [1 / Math.sqrt(2), 0, 0, 1 / Math.sqrt(2)];
    else
      O = [
        Math.cos((b * Math.PI) / 16) ** 2,
        Math.cos((b * Math.PI) / 16) * Math.sin((b * Math.PI) / 16),
        Math.cos((b * Math.PI) / 16) * Math.sin((b * Math.PI) / 16),
        Math.sin((b * Math.PI) / 16) ** 2,
      ];
    for (i = 0; i < 10; i++) {
      A = t.entList[i];
      (A.ampsComp = [...O]), A.computeRotAmps(), A.computeAllEnts();
    }
    0 === a ? t.computizeQubits() : t.naturalizeQubits();
  } else if ("quantumAdv2" === e) {
    D = Math.max(0, SCENARIO.currentRep - SCENARIO.retard - 1);
    if ("constructing" === STATE.mode)
      if (Math.round(Math.random())) {
        var M = Math.round(Math.random());
        (a = 0), (b = Math.floor(8 * Math.random()));
      } else
        (a = 1),
          (M = Math.round(Math.random())),
          (b = Math.floor(16 * Math.random()));
    else if (D < 17) (a = 1), (M = 0), (b = D);
    else (a = 0), (M = D % 2), (b = 0);
    if (((t.getBit(18, 5).value = a), 0 === a))
      if (0 === M) O = [1 / Math.sqrt(2), 0, 0, 1 / Math.sqrt(2)];
      else O = [0, 1 / Math.sqrt(2), -1 / Math.sqrt(2), 0];
    else
      O = [
        Math.cos((b * Math.PI) / 16) ** 2,
        Math.cos((b * Math.PI) / 16) * Math.sin((b * Math.PI) / 16),
        Math.cos((b * Math.PI) / 16) * Math.sin((b * Math.PI) / 16),
        Math.sin((b * Math.PI) / 16) ** 2,
      ];
    for (i = 0; i < 11; i++) {
      A = t.entList[i];
      (A.ampsComp = [...O]), A.computeRotAmps(), A.computeAllEnts();
    }
    0 === a ? t.computizeQubits() : t.naturalizeQubits();
  } else if ("quantumAdv3" === e) {
    if ("constructing" === STATE.mode) {
      (M = Math.round(Math.random())),
        (a = Math.round(Math.random())),
        (b = 4 * Math.floor(4 * Math.random()));
      var v = (1 / 8) * Math.PI * Math.floor(8 * Math.random());
    } else if (SCENARIO.currentRep % 2 == 1)
      (M = 0),
        (a = 0),
        (b = Math.floor(4 * Math.random())),
        (v = (1 / 8) * Math.PI * Math.floor(8 * Math.random()));
    else
      (a = 1),
        (M = Math.round(Math.random())),
        (b = ((SCENARIO.currentRep / 2) % 4) * 4),
        (v = 2 * Math.PI * Math.random());
    if (((t.getBit(18, 5).value = a), 0 === a))
      O = [
        Math.cos(v) / Math.sqrt(2),
        Math.sin(v) / Math.sqrt(2),
        -Math.sin(v) / Math.sqrt(2),
        Math.cos(v) / Math.sqrt(2),
      ];
    else {
      var w = [Math.cos((Math.PI * b) / 16), Math.sin((Math.PI * b) / 16)];
      O = [w[0] ** 2, w[0] * w[1], w[0] * w[1], w[1] ** 2];
    }
    for (i = 0; i < 12; i++) {
      A = t.entList[i];
      (A.ampsComp = [...O]), A.computeRotAmps(), A.computeAllEnts();
    }
    0 === a ? t.computizeQubits() : t.naturalizeQubits();
  } else if ("entChallengeA" === e);
  else if ("entChallengeB" === e) {
    D = Math.max(0, SCENARIO.currentRep - SCENARIO.retard - 1);
    if ("constructing" === STATE.mode) var y = Math.floor(7 * Math.random());
    else if (D % 2 == 0) y = 0;
    else y = 1 + (((D + 1) / 2) % 6);
    var N = Math.ceil(y / 6);
    if (0 === y)
      O = [
        1 / Math.sqrt(2),
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1 / Math.sqrt(2),
      ];
    else if (1 === y) O = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    else if (2 === y)
      O = [0.5, 0, 0, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0.5, 0, 0, 0.5];
    else if (3 === y)
      O = [0.5, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0.5];
    else if (4 === y)
      O = [0.5, 0, 0, 0, 0, 0, 0.5, 0, 0, 0.5, 0, 0, 0, 0, 0, 0.5];
    else if (5 === y)
      O = [0.5, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0.5];
    else if (6 === y) O = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
    for (r = 0; r < 8; r++) {
      var P = t.entList[r];
      (P.ampsComp = [...O]), P.computeRotAmps(), P.computeAllEnts();
    }
    t.getBit(18, 5).value = N;
  } else if ("entChallengeC" === e) {
    D = Math.max(0, SCENARIO.currentRep - SCENARIO.retard - 1);
    if ("constructing" === STATE.mode) y = Math.floor(7 * Math.random());
    else if (D % 2 == 0) y = 0;
    else y = 1 + (((D + 1) / 2) % 6);
    N = Math.ceil(y / 6);
    if (0 === y)
      O = [
        1 / Math.sqrt(2),
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1 / Math.sqrt(2),
      ];
    else if (1 === y) O = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    else if (2 === y)
      O = [0.5, 0, 0, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0.5, 0, 0, 0.5];
    else if (3 === y)
      O = [0.5, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0.5];
    else if (4 === y)
      O = [0.5, 0, 0, 0, 0, 0, 0.5, 0, 0, 0.5, 0, 0, 0, 0, 0, 0.5];
    else if (5 === y)
      O = [0.5, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0.5];
    else if (6 === y) O = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
    for (r = 0; r < 8; r++) {
      P = t.entList[r];
      (P.ampsComp = [...O]), P.computeRotAmps(), P.computeAllEnts();
    }
    t.getBit(18, 5).value = N;
  } else if ("extraA" === e);
  else if ("extraB" === e)
    for (O = [1 / Math.sqrt(2), 0, 0, 1 / Math.sqrt(2)], r = 0; r < 4; r++) {
      P = t.entList[r];
      (P.ampsComp = [
        Math.cos((1 * Math.PI) / 16),
        0,
        0,
        Math.sin((1 * Math.PI) / 16),
      ]),
        P.computeRotAmps(),
        P.computeAllEnts();
    }
  else if ("extraC" === e) {
    for (s = [], g = [], r = 0; r < 4; r++)
      s.push(Math.round(Math.random())), g.push(Math.round(Math.random()));
    1 === SCENARIO.currentRep ||
      (2 === SCENARIO.currentRep
        ? ((s = [1, 1, 1, 1]), (g = [1, 1, 1, 1]))
        : 3 === SCENARIO.currentRep
          ? (s = [0, 0, 0, 0])
          : 4 === SCENARIO.currentRep && (g = [0, 0, 0, 0]));
    var F = s[0] + 2 * s[1] + 4 * s[2] + 8 * s[3],
      k = g[0] + 2 * g[1] + 4 * g[2] + 8 * g[3],
      x = (F * k).toString(2),
      B = x.length;
    H = [0, 0, 0, 0, 0, 0, 0, 0];
    for (r = 0; r < B; r++) H[r] = parseInt(x[B - r - 1]);
    for (r = 0; r < 4; r++)
      (t.getBit(0, 5 - r).value = s[r]), (t.getBit(0, 8 + r).value = g[r]);
    for (r = 0; r < 6; r++) t.getBit(18, 5 - r).value = H[r];
    (t.getBit(17, 0).value = H[6]), (t.getBit(16, 0).value = H[7]);
  } else if ("binaryencode" === e) {
    var W = 5 + Math.floor(11 * Math.random());
    s = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (r = 0; r < W; r++) s[r] = 1;
    s[W] = 0;
    for (r = 0; r < 6; r++) t.getBit(0, 5 - r).value = s[r];
    if (((SCENARIO.CINPUTS = [[], [], []]), W > 6))
      for (r = 0; r < W - 6; r++) SCENARIO.CINPUTS[0].push(1);
    W > 5 && SCENARIO.CINPUTS[0].push(0);
    (x = W.toString(2)), (B = x.length);
    H = [0, 0, 0, 0];
    for (r = 0; r < B; r++) H[r] = parseInt(x[B - r - 1]);
    for (r = 0; r < 4; r++) t.getBit(18, 5 - r).value = H[r];
  } else if ("adder" === e) {
    var q = 0;
    for (i = 0; i < 6; i++) {
      if (5 === i) {
        (s = 0), (g = 0);
        var H = (s + g + q) % 2;
      } else
        (s = Math.round(Math.random())),
          (g = Math.round(Math.random())),
          (H = (s + g + q) % 2);
      (t.getBit(0, 5 - i).value = s),
        (t.getBit(0, 8 + i).value = g),
        (t.getBit(18, 5 - i).value = H),
        (q = Math.floor((s + g + q) / 2));
    }
  } else if ("extraD" === e) {
    var U = 15 + Math.floor(20 * Math.random()),
      _ = Math.round(Math.random()),
      G = !1;
    3 === SCENARIO.currentRep && ((G = !0), (_ = 1));
    var V = Helper.genSequenceBits(U, _, G);
    t.getBit(18, 5).value = _;
    for (i = 0; i < 6; i++)
      (t.getBit(0, 5 - i).value = V[0].shift()),
        (t.getBit(0, 8 + i).value = V[1].shift());
    (SCENARIO.CINPUTS[0] = V[0]), (SCENARIO.CINPUTS[1] = V[1]);
  } else if ("chsh" === e)
    for (i = 0; i < 3; i++) {
      A = t.entList[i];
      (A.ampsComp = [1 / Math.sqrt(2), 0, 0, 1 / Math.sqrt(2)]),
        A.computeRotAmps(),
        A.computeAllEnts();
    }
  else if ("freeA" === e);
  else if ("freeB" === e)
    for (O = [1 / Math.sqrt(2), 0, 0, 1 / Math.sqrt(2)], r = 0; r < 4; r++) {
      P = t.entList[r];
      (P.ampsComp = [
        Math.cos((4 * Math.PI) / 16),
        0,
        0,
        Math.sin((4 * Math.PI) / 16),
      ]),
        P.computeRotAmps(),
        P.computeAllEnts();
    }
}
