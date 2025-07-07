class Tooltip {
  static find() {
    if ("escbutton" !== STATE.under.type)
      if ("archiveButton" !== STATE.under.type)
        if ("journalButton" !== STATE.under.type)
          if (
            "constructing" !== STATE.mode ||
            "letterButton" !== STATE.under.type
          ) {
            if ("constructing" === STATE.mode) {
              if ("eraser" === STATE.under.type)
                return void (STATE.tooltip = "Select eraser");
              if (
                "boardtile" === STATE.under.type &&
                ("erasing" === STATE.state || "destroying" === STATE.state)
              ) {
                var e = STATE.under.i0 + STATE.under.j0 * FIELD.cols;
                return void (1 === SCENARIO.editable[e]
                  ? (STATE.tooltip = "Clear tile")
                  : (STATE.tooltip = "Cannot clear tile"));
              }
            }
            if ("paused" === STATE.mode || "constructing" === STATE.mode) {
              if ("qubitbasis" === STATE.state)
                return void (STATE.tooltip = "Adjust qubit basis");
              if ("analysisgatecontrolling" === STATE.state)
                return void (STATE.tooltip = "Adjust measurement axis");
              if ("qubit" === STATE.under.type)
                return void (STATE.tooltip = "Select qubit");
              if ("qubiticon" === STATE.under.type)
                return void (STATE.tooltip = "Lock / unlock the basis");
              if ("analysisgate" === STATE.under.type)
                return void (STATE.tooltip = "Select qubit to analyze");
              if ("analysishighlight" === STATE.under.type)
                return void (STATE.tooltip = "Highlight basis states");
              if ("analysisgatecontrol" === STATE.under.type)
                return void (STATE.tooltip = "Adjust measurement axis");
              if ("qubitcontrol" === STATE.under.type)
                return void (STATE.tooltip = "Adjust qubit basis");
            }
            if ("finished" === STATE.mode) {
              if ("ctrlbutton" === STATE.under.type && 0 === STATE.under.i0)
                return void (STATE.tooltip = "Reset the factory");
              if ("nextbutton" === STATE.under.type)
                return void (STATE.tooltip = "Return to level select");
            } else if ("paused" === STATE.mode) {
              if ("ctrlbutton" === STATE.under.type) {
                if (0 === STATE.under.i0)
                  return void (STATE.tooltip = "Reset the factory");
                if (1 === STATE.under.i0)
                  return void (STATE.tooltip = "Step back");
                if (3 === STATE.under.i0)
                  return void (STATE.tooltip = "Step forward");
                if (4 === STATE.under.i0) {
                  var t = TIMER.defaultTimePerTick / TIMER.timePerTick;
                  return void (STATE.tooltip =
                    "Reset speed (current x" + t + ")");
                }
                if (2 === STATE.under.i0)
                  return void (STATE.tooltip = "Unpause");
              }
            } else if ("running" === STATE.mode) {
              if ("ctrlbutton" === STATE.under.type) {
                if (0 === STATE.under.i0)
                  return void (STATE.tooltip = "Reset the factory");
                if (1 === STATE.under.i0) {
                  t = TIMER.defaultTimePerTick / TIMER.timePerTick;
                  return void (STATE.tooltip =
                    "Slow down (current x" + t + ")");
                }
                if (3 === STATE.under.i0) {
                  t = TIMER.defaultTimePerTick / TIMER.timePerTick;
                  return void (STATE.tooltip = "Speed up (current x" + t + ")");
                }
                if (4 === STATE.under.i0) {
                  t = TIMER.defaultTimePerTick / TIMER.timePerTick;
                  return void (STATE.tooltip =
                    "Reset speed (current x" + t + ")");
                }
                if (2 === STATE.under.i0) return void (STATE.tooltip = "Pause");
              }
            } else if ("constructing" === STATE.mode) {
              if ("blueprint" === STATE.under.type)
                return void (0 === STATE.under.i0
                  ? (STATE.tooltip = "Change to blueprint X")
                  : 1 === STATE.under.i0
                    ? (STATE.tooltip = "Change to blueprint Y")
                    : 2 === STATE.under.i0 &&
                      (STATE.tooltip = "Change to blueprint Z"));
              if ("questionicon" === STATE.under.type)
                return void (STATE.tooltip = "Query gate function");
              if ("none" === STATE.under.type) return void (STATE.tooltip = "");
              if ("menubutton" === STATE.under.type) {
                var i = MENU.getButton(STATE.under.i0, STATE.under.j0);
                return -1 !== i
                  ? void (STATE.tooltip = "Select gate")
                  : void (STATE.tooltip = "");
              }
              if ("ctrlbutton" === STATE.under.type)
                return 0 === STATE.under.i0
                  ? void (STATE.tooltip = "Start the factory")
                  : void (STATE.tooltip = "");
              if ("multiplace" === STATE.state) {
                if ("boardtile" === STATE.under.type)
                  return COPYBUFFER.placeable.includes(0)
                    ? void (STATE.tooltip = "Invalid paste region")
                    : void (STATE.tooltip = "Valid paste region");
              } else if (
                "premultiplace" === STATE.state &&
                "boardtile" === STATE.under.type
              )
                return COPYBUFFER.placeable.includes(0)
                  ? void (STATE.tooltip = "Invalid copy selection")
                  : void (STATE.tooltip = "Valid copy selection");
              if (
                ["free", "gatemanip", "pregatemanip", "qubiting"].indexOf(
                  STATE.state,
                ) >= 0
              ) {
                if ("boardtile" === STATE.under.type) {
                  e = STATE.under.i0 + STATE.under.j0 * FIELD.cols;
                  if (SCENARIO.editable[e] < 1)
                    return void (STATE.tooltip = "");
                  var a = IBOARD.getGate(
                    STATE.under.i0,
                    STATE.under.j0,
                    IBOARD.state[e],
                  );
                  return (
                    a && IBOARD._tiles[e] < 0 && IBOARD.setGate(a),
                    a
                      ? (Tooltip.identifyGate(a),
                        void (
                          "sync" !== a.type &&
                          STATE.tooltip &&
                          (STATE.tooltip = STATE.tooltip)
                        ))
                      : void (STATE.tooltip = "")
                  );
                }
                if ("gateicon" === STATE.under.type) {
                  if (4 === STATE.under.k0)
                    return void (STATE.tooltip = "Set control state to '0'");
                  if (5 === STATE.under.k0)
                    return void (STATE.tooltip = "Set control state to '1'");
                  a = STATE.grab.k0;
                  if (["switch", "qControl"].indexOf(a.type) >= 0)
                    return void (STATE.tooltip = "Toggle target state");
                  if (["cInvert", "qFlip"].indexOf(a.type) >= 0)
                    return void (STATE.tooltip = "Toggle gate function");
                  if (["trash"].indexOf(a.type) >= 0)
                    return void (STATE.tooltip = "Toggle counter");
                  if (["cCreate", "qCreate"].indexOf(a.type) >= 0)
                    return "qCreate" === a.type && 2 === STATE.under.k0
                      ? void (STATE.tooltip = "Toggle basis lock")
                      : void (STATE.tooltip = "Adjust production");
                } else if ("gatecontrol" === STATE.under.type) {
                  a = STATE.grab.k0;
                  return ["cCreate", "qCreate"].indexOf(a.type) >= 0
                    ? void (STATE.tooltip = "Adjust output")
                    : ["delay"].indexOf(a.type) >= 0
                      ? void (STATE.tooltip = "Adjust delay")
                      : void (STATE.tooltip = "Adjust rotation");
                }
              } else if ("gatedrag" === STATE.state) {
                a = STATE.grab.k0;
                if (["cCreate"].indexOf(a.type) >= 0) {
                  var r = Math.round(a.rot) % 3;
                  return void (STATE.tooltip =
                    0 === r
                      ? "Fixed output: 0,0,0,0"
                      : 1 === r
                        ? "Alternating output: 0,1,0,1"
                        : "Randomized output");
                }
                if (["qCreate"].indexOf(a.type) >= 0) {
                  r = Math.round(a.rot) % 3;
                  return void (STATE.tooltip =
                    0 === r
                      ? "Fixed output: +Z"
                      : 1 === r
                        ? "Random output: [+Z,-Z]"
                        : "Fully randomized output");
                }
                if (["delay"].indexOf(a.type) >= 0)
                  return void (0 === a.state
                    ? (STATE.tooltip = "Delay: " + Math.round(a.rot) + " ticks")
                    : (STATE.tooltip = "Delay: " + a.state + " ticks"));
                if (["cCombine", "cSplit", "qCombine"].indexOf(a.type) >= 0) {
                  var s = Math.round(2 * (1 + a.rot / Math.PI)) % 4,
                    o = ["West", "North", "East", "South"];
                  return void (STATE.tooltip = "Adjust rotation: " + o[s]);
                }
                if (
                  ["qControl", "measure", "rotate", "qFlip", "upgrade"].indexOf(
                    a.type,
                  ) >= 0
                ) {
                  var n = a.getRotRad();
                  return void (STATE.tooltip = "Adjust rotation: " + n);
                }
                return void (STATE.tooltip = "Adjust rotation");
              }
              if ("undobutton" === STATE.under.type)
                return void (STATE.tooltip = "Undo last action (`z`)");
              if ("redobutton" === STATE.under.type)
                return void (STATE.tooltip = "Redo last action (`x`)");
            }
            STATE.tooltip = "";
          } else
            0 === STATE.under.i0
              ? (STATE.tooltip = "Open handbook")
              : 1 === STATE.under.i0
                ? RobotSpeech.grab(SCENARIO.name, 0, !0)
                  ? (STATE.tooltip = "Repeat level briefing")
                  : (STATE.tooltip = "No briefing unavailable")
                : 2 === STATE.under.i0
                  ? (STATE.tooltip = "Refresh starting states")
                  : 3 === STATE.under.i0 && (STATE.tooltip = "Clear the board");
        else STATE.tooltip = "Ex-employee journal";
      else STATE.tooltip = "View archive (external link)";
    else
      0 === STATE.under.i0
        ? (STATE.tooltip = "Return to Level Select")
        : 1 === STATE.under.i0
          ? OPTS.musicOn
            ? (STATE.tooltip = "Mute Music")
            : (STATE.tooltip = "Unmute Music")
          : 2 === STATE.under.i0 &&
            (OPTS.sfxOn
              ? (STATE.tooltip = "Mute Sound Effects")
              : (STATE.tooltip = "Unmute Sound Effects"));
  }
  static identifyGate(e) {
    if ("upgrade" !== e.type)
      if ("switch" !== e.type)
        if ("cCombine" !== e.type)
          if ("cSplit" !== e.type) {
            if ("cInvert" === e.type) {
              if (0 === e.state)
                return 0 === e.rot
                  ? void (STATE.tooltip = "Bit inversion")
                  : void (STATE.tooltip = "Bit identity");
              if (1 === e.state)
                return 0 === e.rot
                  ? void (STATE.tooltip = "Bit re-zero")
                  : void (STATE.tooltip = "Bit identity");
            } else {
              if ("cCreate" === e.type) {
                var t = Math.round(e.rot) % 3;
                return void (STATE.tooltip =
                  0 === t
                    ? "Bit creation (0,0,0,0)"
                    : 1 === t
                      ? "Bit creation (0,1,0,1)"
                      : "Bit creation (random)");
              }
              if ("qCreate" === e.type) {
                t = Math.round(e.rot) % 3;
                return void (STATE.tooltip =
                  0 === t
                    ? "Qubit creation (+Z)"
                    : 1 === t
                      ? "Qubit creation (+Z,-Z)"
                      : "Qubit creation (random)");
              }
              if ("qControl" === e.type) {
                if (0 === e.state) {
                  i = e.getRotRad(!1);
                  STATE.tooltip = "Qubit control (" + i + ")";
                } else {
                  i = e.getRotRad(!1);
                  STATE.tooltip = "Qubit control (" + i + ")";
                }
                return;
              }
              if ("qCombine" === e.type)
                return void (STATE.tooltip = "Qubit wire combiner");
              if ("measure" === e.type) {
                i = e.getRotRad(!1);
                return void (STATE.tooltip = "Qubit measure (" + i + ")");
              }
              if ("qFlip" === e.type) {
                if (0 === e.state) {
                  i = e.getRotRad(!1);
                  return void (STATE.tooltip = "Qubit flip (" + i + ")");
                }
                return void (STATE.tooltip = "Qubit identity");
              }
              if ("rotate" === e.type) {
                i = e.getRotRad(!1);
                return void (STATE.tooltip = "Qubit rotation (" + i + ")");
              }
              if ("delay" === e.type)
                return void (STATE.tooltip = "Delay (" + e.state + " ticks)");
              if ("sync" === e.type) return void (STATE.tooltip = "Sync");
              if ("trash" === e.type)
                return void (STATE.tooltip = "Incinerator");
            }
            STATE.tooltip = "";
          } else STATE.tooltip = "Bit wire splitter";
        else STATE.tooltip = "Bit wire combiner";
      else
        0 === e.rot
          ? (STATE.tooltip = "Bit control (state '0')")
          : (STATE.tooltip = "Bit control (state '1')");
    else {
      var i = e.getRotRad(!1);
      STATE.tooltip = "Bit-to-qubit (" + i + ")";
    }
  }
  static draw() {
    var e =
      "boardtile" === STATE.under.type &&
      "constructing" === STATE.mode &&
      "placing" === STATE.state;
    e || Tooltip.find(), CANV.tooltip.clear();
    var t =
      3.5 * FIELD.tileWidth -
      CANV.tooltip.ctx.measureText(STATE.tooltip).width / 2;
    CANV.tooltip.ctx.fillText(STATE.tooltip, t, FIELD.tileHeight / 3);
  }
}
