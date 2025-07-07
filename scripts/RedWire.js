class RedWire {
  static placeUp(e, t) {
    var i = IBOARD.getTile(e, t),
      a = IBOARD.getTile(e, t - 1),
      r = CONSTRUCTMAPS.QU0.indexOf(i),
      s = CONSTRUCTMAPS.QUG.indexOf(i),
      o = CONSTRUCTMAPS.QD0.indexOf(a),
      n = CONSTRUCTMAPS.QDG.indexOf(a),
      l = e + t * FIELD.cols,
      h = e + (t - 1) * FIELD.cols,
      d = (r >= 0 || s >= 0) && (o >= 0 || n >= 0),
      u =
        Math.abs(SCENARIO.editable[l]) > 0 &&
        Math.abs(SCENARIO.editable[h]) > 0;
    d && u
      ? (SFX.wire.play(),
        r >= 0 && IBOARD.setTile(e, t, CONSTRUCTMAPS.QU1[r]),
        o >= 0 && IBOARD.setTile(e, t - 1, CONSTRUCTMAPS.QD1[o]))
      : a < 0 && SCENARIO.editable[h] && IBOARD.setTile(e, t - 1, 0);
  }
  static placeDown(e, t) {
    var i = IBOARD.getTile(e, t),
      a = IBOARD.getTile(e, t + 1),
      r = CONSTRUCTMAPS.QD0.indexOf(i),
      s = CONSTRUCTMAPS.QDG.indexOf(i),
      o = CONSTRUCTMAPS.QU0.indexOf(a),
      n = CONSTRUCTMAPS.QUG.indexOf(a),
      l = e + t * FIELD.cols,
      h = e + (t + 1) * FIELD.cols,
      d = (r >= 0 || s >= 0) && (o >= 0 || n >= 0),
      u =
        Math.abs(SCENARIO.editable[l]) > 0 &&
        Math.abs(SCENARIO.editable[h]) > 0;
    d && u
      ? (SFX.wire.play(),
        r >= 0 && IBOARD.setTile(e, t, CONSTRUCTMAPS.QD1[r]),
        o >= 0 && IBOARD.setTile(e, t + 1, CONSTRUCTMAPS.QU1[o]))
      : a < 0 && SCENARIO.editable[h] && IBOARD.setTile(e, t + 1, 0);
  }
  static placeLeft(e, t) {
    var i = IBOARD.getTile(e, t),
      a = IBOARD.getTile(e - 1, t),
      r = CONSTRUCTMAPS.QL0.indexOf(i),
      s = CONSTRUCTMAPS.QLG.indexOf(i),
      o = CONSTRUCTMAPS.QR0.indexOf(a),
      n = CONSTRUCTMAPS.QRG.indexOf(a),
      l = e + t * FIELD.cols,
      h = e - 1 + t * FIELD.cols,
      d = (r >= 0 || s >= 0) && (o >= 0 || n >= 0),
      u =
        Math.abs(SCENARIO.editable[l]) > 0 &&
        Math.abs(SCENARIO.editable[h]) > 0;
    d && u
      ? (SFX.wire.play(),
        r >= 0 && IBOARD.setTile(e, t, CONSTRUCTMAPS.QL1[r]),
        o >= 0 && IBOARD.setTile(e - 1, t, CONSTRUCTMAPS.QR1[o]))
      : a < 0 && SCENARIO.editable[h] && IBOARD.setTile(e - 1, t, 0);
  }
  static placeRight(e, t) {
    var i = IBOARD.getTile(e, t),
      a = IBOARD.getTile(e + 1, t),
      r = CONSTRUCTMAPS.QR0.indexOf(i),
      s = CONSTRUCTMAPS.QRG.indexOf(i),
      o = CONSTRUCTMAPS.QL0.indexOf(a),
      n = CONSTRUCTMAPS.QLG.indexOf(a),
      l = e + t * FIELD.cols,
      h = e + 1 + t * FIELD.cols,
      d = (r >= 0 || s >= 0) && (o >= 0 || n >= 0),
      u =
        Math.abs(SCENARIO.editable[l]) > 0 &&
        Math.abs(SCENARIO.editable[h]) > 0;
    d && u
      ? (SFX.wire.play(),
        r >= 0 && IBOARD.setTile(e, t, CONSTRUCTMAPS.QR1[r]),
        o >= 0 && IBOARD.setTile(e + 1, t, CONSTRUCTMAPS.QL1[o]))
      : a < 0 && SCENARIO.editable[h] && IBOARD.setTile(e + 1, t, 0);
  }
  static place() {
    var e = STATE.under.i0 - STATE.grab.i0,
      t = STATE.under.j0 - STATE.grab.j0,
      i = Math.sign(e),
      a = Math.sign(t);
    if (i > 0) {
      for (
        var r = STATE.grab.j0, s = STATE.grab.i0, o = 0;
        o < Math.abs(e);
        o++
      )
        RedWire.placeRight(s + o, r);
      STATE.grab = {
        type: STATE.under.type,
        i0: s + Math.abs(e),
        j0: r,
        k0: s + Math.abs(e) + r * FIELD.cols,
      };
    } else if (i < 0) {
      for (r = STATE.grab.j0, s = STATE.grab.i0, o = 0; o < Math.abs(e); o++)
        RedWire.placeLeft(s - o, r);
      STATE.grab = {
        type: STATE.under.type,
        i0: s - Math.abs(e),
        j0: r,
        k0: s - Math.abs(e) + r * FIELD.cols,
      };
    } else if (a > 0) {
      for (r = STATE.grab.j0, s = STATE.grab.i0, o = 0; o < Math.abs(t); o++)
        RedWire.placeDown(s, r + o);
      STATE.grab = {
        type: STATE.under.type,
        i0: s,
        j0: r + Math.abs(t),
        k0: s + (r + Math.abs(t)) * FIELD.cols,
      };
    } else if (a < 0) {
      for (r = STATE.grab.j0, s = STATE.grab.i0, o = 0; o < Math.abs(t); o++)
        RedWire.placeUp(s, r - o);
      STATE.grab = {
        type: STATE.under.type,
        i0: s,
        j0: r - Math.abs(t),
        k0: s + (r - Math.abs(t)) * FIELD.cols,
      };
    } else;
  }
}
