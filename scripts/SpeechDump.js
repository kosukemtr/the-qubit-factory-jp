class SpeechDump {
  static grabAll() {
    var e = [
      "intro0",
      "intro1",
      "intro2",
      "intro3",
      "intro4",
      "intro5",
      "intro6",
    ];
    e = e.concat(LEVELS.names);
    for (var t = [], i = 0; i < e.length; i++) {
      var a = RobotSpeech.grab(e[i], 0, !1, !0),
        r = RobotSpeech.grab(e[i], 1, !1, !0),
        s = RobotSpeech.grab(e[i], 2, !1, !0);
      a && t.push(SpeechDump.clean(a)),
        r && t.push(SpeechDump.clean(r)),
        s && t.push(SpeechDump.clean(s));
    }
    return t;
  }
  static clean(e) {
    if (0 !== e.length) {
      for (var t = [], i = 0; i < e.length; i++) {
        for (var a = [], r = e[i].split(" "), s = 0; s < r.length; s++) {
          var o = r[s];
          if (o) {
            if ("$" === o[0] && "$" === o[1]) {
              o = o.slice(7);
              var n = o.length,
                l = o.slice(-1);
              "|" === l && (o = o.slice(0, n - 1));
            }
            (o = o.replace(/`/g, "'")), (a += o + " ");
          }
        }
        a && t.push(a);
      }
      return t;
    }
  }
}
