/*
 * The Qubit Factory — unofficial Japanese adaptation by kosukemtr.
 * Modified from https://github.com/awslabs/the-qubit-factory:
 * the original scripts.min.js was reformatted and split into source files;
 * this adaptation also includes Japanese localization and related adjustments.
 * Original work: Glen Evenbly (AWS Center for Quantum Computing).
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * Licensed under Apache-2.0; see LICENSE and NOTICE in the repository root.
 */
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
