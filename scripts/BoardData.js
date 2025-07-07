class BoardData {
  static makeEditable(e = !0, t = [0, 0, 0, 0, 0, 0], i = 0, a = 0, r) {
    var s = new Array(FIELD.cols * FIELD.rows).fill(1);
    if (e)
      for (var o = 0; o < FIELD.cols; o++)
        for (var n = 0; n < FIELD.rows; n++)
          if (
            0 === o ||
            o === FIELD.cols - 1 ||
            0 === n ||
            n === FIELD.rows - 1
          ) {
            var l = o + n * FIELD.cols;
            s[l] = 0;
          }
    if (
      ((s[0 + 5 * FIELD.cols] = t[0]),
      (s[0 + 8 * FIELD.cols] = t[1]),
      (s[6 * FIELD.cols - 1] = t[2]),
      (s[9 * FIELD.cols - 1] = t[3]),
      (s[5 + (FIELD.rows - 1) * FIELD.cols] = t[4]),
      (s[FIELD.cols - 6 + (FIELD.rows - 1) * FIELD.cols] = t[5]),
      "key" === a)
    ) {
      for (o = 12; o < FIELD.cols; o++)
        for (n = 0; n < FIELD.rows; n++) {
          l = o + n * FIELD.cols;
          s[l] = 0;
        }
      (s[127] = 2), (s[146] = 2), (s[130] = 2), (s[107] = -1), (s[164] = -1);
    }
    if ("btf" === a) {
      for (n = 5, o = 0; o < FIELD.cols; o++) {
        l = o + n * FIELD.cols;
        s[l] = 0;
      }
      (s[101] = 2), (s[107] = 2);
    }
    if ("GHZ" === a) {
      for (o = 0; o < 3; o++)
        for (n = 0; n < FIELD.rows; n++) {
          l = o + n * FIELD.cols;
          s[l] = 0;
        }
      (s[78] = -1), (s[97] = -1), (s[154] = -1), (s[173] = -1);
    }
    if ("inversion" === a) {
      for (
        var h = [
            [1, 5],
            [2, 5],
            [3, 5],
            [4, 5],
            [1, 8],
            [2, 8],
            [3, 8],
            [4, 8],
          ],
          d = 0;
        d < h.length;
        d++
      ) {
        l = h[d][0] + h[d][1] * FIELD.cols;
        s[l] = 0;
      }
      l = 5 + 5 * FIELD.cols;
      s[l] = -1;
      l = 5 + 8 * FIELD.cols;
      s[l] = -1;
    }
    if ("inversion2" === a) {
      for (
        h = [
          [1, 5],
          [2, 5],
          [3, 5],
          [4, 5],
          [5, 5],
          [6, 5],
          [1, 8],
          [2, 8],
          [3, 8],
          [4, 8],
          [5, 8],
          [6, 8],
        ],
          d = 0;
        d < h.length;
        d++
      ) {
        l = h[d][0] + h[d][1] * FIELD.cols;
        s[l] = 0;
      }
      l = 7 + 5 * FIELD.cols;
      s[l] = -1;
      l = 7 + 8 * FIELD.cols;
      s[l] = -1;
    }
    if ("correctionA" === a) {
      for (o = 6; o < 10; o++)
        for (n = 0; n < FIELD.rows; n++) {
          l = o + n * FIELD.cols;
          s[l] = 0;
        }
      l = 6 + 4 * FIELD.cols;
      s[l] = -1;
      l = 6 + 7 * FIELD.cols;
      s[l] = -1;
      l = 6 + 10 * FIELD.cols;
      s[l] = -1;
      l = 9 + 4 * FIELD.cols;
      s[l] = -1;
      l = 9 + 7 * FIELD.cols;
      s[l] = -1;
      l = 9 + 10 * FIELD.cols;
      s[l] = -1;
    }
    if ("correctionB" === a)
      for (o = 4, n = 0; n < FIELD.rows; n++) {
        l = o + n * FIELD.cols;
        s[l] = -1;
      }
    if ("correctionC" === a)
      for (o = 6, n = 0; n < FIELD.rows; n++) {
        l = o + n * FIELD.cols;
        s[l] = -1;
      }
    if ("correctionD" === a)
      for (o = 7, n = 0; n < FIELD.rows; n++) {
        l = o + n * FIELD.cols;
        s[l] = -1;
      }
    if ("deviceA" === a) {
      for (o = 5; o < 14; o++)
        for (n = 2; n < 7; n++) {
          l = o + n * FIELD.cols;
          s[l] = 0;
        }
      var u = [
        [4, 2],
        [4, 3],
        [4, 4],
        [5, 6],
        [14, 2],
        [14, 3],
        [14, 4],
        [13, 6],
      ];
      for (d = 0; d < u.length; d++) {
        l = u[d][0] + u[d][1] * FIELD.cols;
        s[l] = -1;
      }
    }
    if ("simpleDistill" === a) {
      var c = [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, 0, 0];
      for (n = 0; n < FIELD.rows; n++) {
        l = 4 + n * FIELD.cols;
        s[l] = c[n];
      }
      for (o = 0; o < 4; o++)
        for (n = 0; n < FIELD.rows; n++) {
          l = o + n * FIELD.cols;
          s[l] = 0;
        }
    }
    if ("onetwo" === a) {
      for (o = 0; o < 4; o++)
        for (n = 6; n < 8; n++) {
          l = o + n * FIELD.cols;
          s[l] = 0;
        }
      l = 1 + 5 * FIELD.cols;
      s[l] = 0;
      l = 1 + 8 * FIELD.cols;
      s[l] = 0;
      l = 8 + 5 * FIELD.cols;
      (s[l] = 2), (s[118] = -1), (s[137] = -1);
    }
    if ("canal" === a) {
      s.fill(0);
      for (o = 3; o < 16; o++)
        for (n = 6; n < 8; n++) {
          l = o + n * FIELD.cols;
          s[l] = 1;
        }
      (s[116] = -1), (s[135] = -1), (s[130] = -1), (s[149] = -1);
    }
    if ("relay" === a) {
      for (o = 1; o < 16; o++) {
        l = o + 4 * FIELD.cols;
        s[l] = 0;
        l = o + 9 * FIELD.cols;
        s[l] = 0;
      }
      for (o = 15; o < 18; o++) {
        l = o + 6 * FIELD.cols;
        s[l] = 0;
        l = o + 7 * FIELD.cols;
        s[l] = 0;
      }
      (s[110] = 0),
        (s[167] = 0),
        (s[81] = -1),
        (s[86] = -1),
        (s[176] = -1),
        (s[181] = -1);
    }
    if ("fixed" === a) s = new Array(FIELD.cols * FIELD.rows).fill(-1);
    if ("partial" === a)
      for (var I = 0; I < r.length; I++) -1 !== r[I] && (s[I] = -1);
    if ("cross" === a) {
      for (o = 0; o < FIELD.cols; o++)
        for (n = 6; n < 8; n++) {
          l = o + n * FIELD.cols;
          s[l] = 0;
        }
      for (o = 9, n = 1; n < 12; n++) {
        l = o + n * FIELD.cols;
        s[l] = 0;
      }
      l = 9 + 3 * FIELD.cols;
      s[l] = -1;
      l = 9 + 10 * FIELD.cols;
      s[l] = -1;
    }
    if ("threebox" === a) {
      for (n = 0; n < FIELD.rows; n++) {
        l = 6 + n * FIELD.cols;
        s[l] = 0;
      }
      for (o = 0; o < 7; o++) {
        l = o + 6 * FIELD.cols;
        s[l] = 0;
        l = o + 7 * FIELD.cols;
        s[l] = 0;
      }
      l = 6 + 3 * FIELD.cols;
      s[l] = -1;
      l = 6 + 10 * FIELD.cols;
      s[l] = -1;
    }
    if ("cornerbox" === a)
      for (o = 0; o < 4; o++)
        for (n = 7; n < 13; n++) {
          l = o + n * FIELD.cols;
          s[l] = 0;
        }
    if ("halffrozen" === a) {
      for (o = 0; o < 10; o++)
        for (n = 0; n < FIELD.rows; n++) {
          l = o + n * FIELD.cols;
          s[l] = 0;
        }
      l = 9 + 6 * FIELD.cols;
      s[l] = -1;
      l = 9 + 7 * FIELD.cols;
      s[l] = -1;
      l = 9 + 8 * FIELD.cols;
      s[l] = -1;
    }
    if ("analysis" === a) {
      var E = [4, 5, 8, 9];
      for (o = 0; o <= 4; o++)
        for (n = 0; n < 4; n++) {
          l = o + E[n] * FIELD.cols;
          s[l] = 0;
        }
      for (
        u = [
          [4, 4],
          [4, 5],
          [4, 8],
          [4, 9],
        ],
          I = 0;
        I < u.length;
        I++
      ) {
        l = u[I][0] + u[I][1] * FIELD.cols;
        s[l] = -1;
      }
    }
    if (i) {
      var S = (FIELD.cols - 1) / 2;
      for (n = 0; n < FIELD.rows; n++) {
        l = S + n * FIELD.cols;
        s[l] = i[n];
      }
    }
    return s;
  }
}
