class BlueWire {
  static placeUp(e, t) {
    var i = IBOARD.getTile(e, t),
      a = IBOARD.getTile(e, t - 1),
      r = CONSTRUCTMAPS.CU0.indexOf(i),
      s = CONSTRUCTMAPS.CUG.indexOf(i),
      o = CONSTRUCTMAPS.CD0.indexOf(a),
      n = CONSTRUCTMAPS.CDG.indexOf(a),
      l = e + t * FIELD.cols,
      h = e + (t - 1) * FIELD.cols,
      d = (r >= 0 || s >= 0) && (o >= 0 || n >= 0),
      u =
        Math.abs(SCENARIO.editable[l]) > 0 &&
        Math.abs(SCENARIO.editable[h]) > 0;
    d && u
      ? (r >= 0 && IBOARD.setTile(e, t, CONSTRUCTMAPS.CU1[r]),
        o >= 0 && IBOARD.setTile(e, t - 1, CONSTRUCTMAPS.CD1[o]),
        SFX.wire.play())
      : a < 0 && SCENARIO.editable[h] && IBOARD.setTile(e, t - 1, 20);
  }
  static placeDown(e, t) {
    var i = IBOARD.getTile(e, t),
      a = IBOARD.getTile(e, t + 1),
      r = CONSTRUCTMAPS.CD0.indexOf(i),
      s = CONSTRUCTMAPS.CDG.indexOf(i),
      o = CONSTRUCTMAPS.CU0.indexOf(a),
      n = CONSTRUCTMAPS.CUG.indexOf(a),
      l = e + t * FIELD.cols,
      h = e + (t + 1) * FIELD.cols,
      d = (r >= 0 || s >= 0) && (o >= 0 || n >= 0),
      u =
        Math.abs(SCENARIO.editable[l]) > 0 &&
        Math.abs(SCENARIO.editable[h]) > 0;
    d && u
      ? (r >= 0 && IBOARD.setTile(e, t, CONSTRUCTMAPS.CD1[r]),
        o >= 0 && IBOARD.setTile(e, t + 1, CONSTRUCTMAPS.CU1[o]),
        SFX.wire.play())
      : a < 0 && SCENARIO.editable[h] && IBOARD.setTile(e, t + 1, 20);
  }
  static placeLeft(e, t) {
    var i = IBOARD.getTile(e, t),
      a = IBOARD.getTile(e - 1, t),
      r = CONSTRUCTMAPS.CL0.indexOf(i),
      s = CONSTRUCTMAPS.CLG.indexOf(i),
      o = CONSTRUCTMAPS.CR0.indexOf(a),
      n = CONSTRUCTMAPS.CRG.indexOf(a),
      l = e + t * FIELD.cols,
      h = e - 1 + t * FIELD.cols,
      d = (r >= 0 || s >= 0) && (o >= 0 || n >= 0),
      u =
        Math.abs(SCENARIO.editable[l]) > 0 &&
        Math.abs(SCENARIO.editable[h]) > 0;
    d && u
      ? (r >= 0 && IBOARD.setTile(e, t, CONSTRUCTMAPS.CL1[r]),
        o >= 0 && IBOARD.setTile(e - 1, t, CONSTRUCTMAPS.CR1[o]),
        SFX.wire.play())
      : a < 0 && SCENARIO.editable[h] && IBOARD.setTile(e - 1, t, 20);
  }
  static placeRight(e, t) {
    var i = IBOARD.getTile(e, t),
      a = IBOARD.getTile(e + 1, t),
      r = CONSTRUCTMAPS.CR0.indexOf(i),
      s = CONSTRUCTMAPS.CRG.indexOf(i),
      o = CONSTRUCTMAPS.CL0.indexOf(a),
      n = CONSTRUCTMAPS.CLG.indexOf(a),
      l = e + t * FIELD.cols,
      h = e + 1 + t * FIELD.cols,
      d = (r >= 0 || s >= 0) && (o >= 0 || n >= 0),
      u =
        Math.abs(SCENARIO.editable[l]) > 0 &&
        Math.abs(SCENARIO.editable[h]) > 0;
    d && u
      ? (r >= 0 && IBOARD.setTile(e, t, CONSTRUCTMAPS.CR1[r]),
        o >= 0 && IBOARD.setTile(e + 1, t, CONSTRUCTMAPS.CL1[o]),
        SFX.wire.play())
      : a < 0 && SCENARIO.editable[h] && IBOARD.setTile(e + 1, t, 20);
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
        BlueWire.placeRight(s + o, r);
      STATE.grab = {
        type: STATE.under.type,
        i0: s + Math.abs(e),
        j0: r,
        k0: s + Math.abs(e) + r * FIELD.cols,
      };
    } else if (i < 0) {
      for (r = STATE.grab.j0, s = STATE.grab.i0, o = 0; o < Math.abs(e); o++)
        BlueWire.placeLeft(s - o, r);
      STATE.grab = {
        type: STATE.under.type,
        i0: s - Math.abs(e),
        j0: r,
        k0: s - Math.abs(e) + r * FIELD.cols,
      };
    } else if (a > 0) {
      for (r = STATE.grab.j0, s = STATE.grab.i0, o = 0; o < Math.abs(t); o++)
        BlueWire.placeDown(s, r + o);
      STATE.grab = {
        type: STATE.under.type,
        i0: s,
        j0: r + Math.abs(t),
        k0: s + (r + Math.abs(t)) * FIELD.cols,
      };
    } else if (a < 0) {
      for (r = STATE.grab.j0, s = STATE.grab.i0, o = 0; o < Math.abs(t); o++)
        BlueWire.placeUp(s, r - o);
      STATE.grab = {
        type: STATE.under.type,
        i0: s,
        j0: r - Math.abs(t),
        k0: s + (r - Math.abs(t)) * FIELD.cols,
      };
    } else;
  }
}
