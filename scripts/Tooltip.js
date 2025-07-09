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
                return void (STATE.tooltip = "消しゴムを選択");
              if (
                "boardtile" === STATE.under.type &&
                ("erasing" === STATE.state || "destroying" === STATE.state)
              ) {
                var e = STATE.under.i0 + STATE.under.j0 * FIELD.cols;
                return void (1 === SCENARIO.editable[e]
                  ? (STATE.tooltip = "タイルを消去")
                  : (STATE.tooltip = "タイルを消去できません"));
              }
            }
            if ("paused" === STATE.mode || "constructing" === STATE.mode) {
              if ("qubitbasis" === STATE.state)
                return void (STATE.tooltip = "量子ビットの基底を調整");
              if ("analysisgatecontrolling" === STATE.state)
                return void (STATE.tooltip = "測定軸を調整");
              if ("qubit" === STATE.under.type)
                return void (STATE.tooltip = "量子ビットを選択");
              if ("qubiticon" === STATE.under.type)
                return void (STATE.tooltip = "基底をロック/解除");
              if ("analysisgate" === STATE.under.type)
                return void (STATE.tooltip = "解析する量子ビットを選択");
              if ("analysishighlight" === STATE.under.type)
                return void (STATE.tooltip = "基底状態をハイライト");
              if ("analysisgatecontrol" === STATE.under.type)
                return void (STATE.tooltip = "測定軸を調整");
              if ("qubitcontrol" === STATE.under.type)
                return void (STATE.tooltip = "量子ビットの基底を調整");
            }
            if ("finished" === STATE.mode) {
              if ("ctrlbutton" === STATE.under.type && 0 === STATE.under.i0)
                return void (STATE.tooltip = "工場をリセット");
              if ("nextbutton" === STATE.under.type)
                return void (STATE.tooltip = "レベル選択へ戻る");
            } else if ("paused" === STATE.mode) {
              if ("ctrlbutton" === STATE.under.type) {
                if (0 === STATE.under.i0)
                  return void (STATE.tooltip = "工場をリセット");
                if (1 === STATE.under.i0)
                  return void (STATE.tooltip = "1ステップ戻る");
                if (3 === STATE.under.i0)
                  return void (STATE.tooltip = "1ステップ進む");
                if (4 === STATE.under.i0) {
                  var t = TIMER.defaultTimePerTick / TIMER.timePerTick;
                  return void (STATE.tooltip =
                    "速度をリセット (現在 x" + t + ")");
                }
                if (2 === STATE.under.i0)
                  return void (STATE.tooltip = "再開");
              }
            } else if ("running" === STATE.mode) {
              if ("ctrlbutton" === STATE.under.type) {
                if (0 === STATE.under.i0)
                  return void (STATE.tooltip = "工場をリセット");
                if (1 === STATE.under.i0) {
                  t = TIMER.defaultTimePerTick / TIMER.timePerTick;
                  return void (STATE.tooltip =
                    "速度を下げる (現在 x" + t + ")");
                }
                if (3 === STATE.under.i0) {
                  t = TIMER.defaultTimePerTick / TIMER.timePerTick;
                  return void (STATE.tooltip = "速度を上げる (現在 x" + t + ")");
                }
                if (4 === STATE.under.i0) {
                  t = TIMER.defaultTimePerTick / TIMER.timePerTick;
                  return void (STATE.tooltip =
                    "速度をリセット (現在 x" + t + ")");
                }
                if (2 === STATE.under.i0) return void (STATE.tooltip = "一時停止");
              }
            } else if ("constructing" === STATE.mode) {
              if ("blueprint" === STATE.under.type)
                return void (0 === STATE.under.i0
                  ? (STATE.tooltip = "設計図 X に切替")
                  : 1 === STATE.under.i0
                    ? (STATE.tooltip = "設計図 Y に切替")
                    : 2 === STATE.under.i0 &&
                      (STATE.tooltip = "設計図 Z に切替"));
              if ("questionicon" === STATE.under.type)
                return void (STATE.tooltip = "ゲート機能を確認");
              if ("none" === STATE.under.type) return void (STATE.tooltip = "");
              if ("menubutton" === STATE.under.type) {
                var i = MENU.getButton(STATE.under.i0, STATE.under.j0);
                return -1 !== i
                  ? void (STATE.tooltip = "ゲートを選択")
                  : void (STATE.tooltip = "");
              }
              if ("ctrlbutton" === STATE.under.type)
                return 0 === STATE.under.i0
                  ? void (STATE.tooltip = "工場を起動")
                  : void (STATE.tooltip = "");
              if ("multiplace" === STATE.state) {
                if ("boardtile" === STATE.under.type)
                  return COPYBUFFER.placeable.includes(0)
                    ? void (STATE.tooltip = "貼り付け範囲が無効")
                    : void (STATE.tooltip = "貼り付け範囲が有効");
              } else if (
                "premultiplace" === STATE.state &&
                "boardtile" === STATE.under.type
              )
                return COPYBUFFER.placeable.includes(0)
                  ? void (STATE.tooltip = "コピー範囲が無効")
                  : void (STATE.tooltip = "コピー範囲が有効");
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
                    return void (STATE.tooltip = "制御状態を 0 に設定");
                  if (5 === STATE.under.k0)
                    return void (STATE.tooltip = "制御状態を 1 に設定");
                  a = STATE.grab.k0;
                  if (["switch", "qControl"].indexOf(a.type) >= 0)
                    return void (STATE.tooltip = "ターゲット状態を切替");
                  if (["cInvert", "qFlip"].indexOf(a.type) >= 0)
                    return void (STATE.tooltip = "ゲート機能を切替");
                  if (["trash"].indexOf(a.type) >= 0)
                    return void (STATE.tooltip = "カウンターを切替");
                  if (["cCreate", "qCreate"].indexOf(a.type) >= 0)
                    return "qCreate" === a.type && 2 === STATE.under.k0
                      ? void (STATE.tooltip = "基底ロックを切替")
                      : void (STATE.tooltip = "生産量を調整");
                } else if ("gatecontrol" === STATE.under.type) {
                  a = STATE.grab.k0;
                  return ["cCreate", "qCreate"].indexOf(a.type) >= 0
                    ? void (STATE.tooltip = "出力を調整")
                    : ["delay"].indexOf(a.type) >= 0
                      ? void (STATE.tooltip = "遅延を調整")
                      : void (STATE.tooltip = "回転を調整");
                }
              } else if ("gatedrag" === STATE.state) {
                a = STATE.grab.k0;
                if (["cCreate"].indexOf(a.type) >= 0) {
                  var r = Math.round(a.rot) % 3;
                  return void (STATE.tooltip =
                    0 === r
                      ? "固定出力: 0,0,0,0"
                      : 1 === r
                        ? "交互出力: 0,1,0,1"
                        : "ランダム出力");
                }
                if (["qCreate"].indexOf(a.type) >= 0) {
                  r = Math.round(a.rot) % 3;
                  return void (STATE.tooltip =
                    0 === r
                      ? "固定出力: +Z"
                      : 1 === r
                        ? "ランダム出力: [+Z,-Z]"
                        : "完全ランダム出力");
                }
                if (["delay"].indexOf(a.type) >= 0)
                  return void (0 === a.state
                    ? (STATE.tooltip = "遅延: " + Math.round(a.rot) + " ティック")
                    : (STATE.tooltip = "Delay: " + a.state + " ticks"));
                if (["cCombine", "cSplit", "qCombine"].indexOf(a.type) >= 0) {
                  var s = Math.round(2 * (1 + a.rot / Math.PI)) % 4,
                    o = ["West", "North", "East", "South"];
                  return void (STATE.tooltip = "回転を調整: " + o[s]);
                }
                if (
                  ["qControl", "measure", "rotate", "qFlip", "upgrade"].indexOf(
                    a.type,
                  ) >= 0
                ) {
                  var n = a.getRotRad();
                  return void (STATE.tooltip = "回転を調整: " + n);
                }
                return void (STATE.tooltip = "回転を調整");
              }
              if ("undobutton" === STATE.under.type)
                return void (STATE.tooltip = "Undo last action (`z`)");
              if ("redobutton" === STATE.under.type)
                return void (STATE.tooltip = "Redo last action (`x`)");
            }
            STATE.tooltip = "";
          } else
            0 === STATE.under.i0
              ? (STATE.tooltip = "ハンドブックを開く")
              : 1 === STATE.under.i0
                ? RobotSpeech.grab(SCENARIO.name, 0, !0)
                  ? (STATE.tooltip = "レベル説明を再確認")
                  : (STATE.tooltip = "説明はありません")
                : 2 === STATE.under.i0
                  ? (STATE.tooltip = "初期状態を更新")
                  : 3 === STATE.under.i0 && (STATE.tooltip = "ボードをクリア");
        else STATE.tooltip = "元社員の日誌";
      else STATE.tooltip = "アーカイブを見る (外部リンク)";
    else
      0 === STATE.under.i0
        ? (STATE.tooltip = "レベル選択へ戻る")
        : 1 === STATE.under.i0
          ? OPTS.musicOn
            ? (STATE.tooltip = "音楽をミュート")
            : (STATE.tooltip = "音楽のミュート解除")
          : 2 === STATE.under.i0 &&
            (OPTS.sfxOn
              ? (STATE.tooltip = "効果音をミュート")
              : (STATE.tooltip = "効果音のミュート解除"));
  }
  static identifyGate(e) {
    if ("upgrade" !== e.type)
      if ("switch" !== e.type)
        if ("cCombine" !== e.type)
          if ("cSplit" !== e.type) {
            if ("cInvert" === e.type) {
              if (0 === e.state)
                return 0 === e.rot
                  ? void (STATE.tooltip = "ビット反転")
                  : void (STATE.tooltip = "ビット恒等");
              if (1 === e.state)
                return 0 === e.rot
                  ? void (STATE.tooltip = "ビットをゼロに戻す")
                  : void (STATE.tooltip = "ビット恒等");
            } else {
              if ("cCreate" === e.type) {
                var t = Math.round(e.rot) % 3;
                return void (STATE.tooltip =
                  0 === t
                    ? "ビット生成 (0,0,0,0)"
                    : 1 === t
                      ? "ビット生成 (0,1,0,1)"
                      : "ビット生成 (ランダム)");
              }
              if ("qCreate" === e.type) {
                t = Math.round(e.rot) % 3;
                return void (STATE.tooltip =
                  0 === t
                    ? "量子ビット生成 (+Z)"
                    : 1 === t
                      ? "量子ビット生成 (+Z,-Z)"
                      : "量子ビット生成 (ランダム)");
              }
              if ("qControl" === e.type) {
                if (0 === e.state) {
                  i = e.getRotRad(!1);
                  STATE.tooltip = "量子ビット制御 (" + i + ")";
                } else {
                  i = e.getRotRad(!1);
                  STATE.tooltip = "量子ビット制御 (" + i + ")";
                }
                return;
              }
              if ("qCombine" === e.type)
                return void (STATE.tooltip = "量子ビットワイヤ結合");
              if ("measure" === e.type) {
                i = e.getRotRad(!1);
                return void (STATE.tooltip = "量子ビット測定 (" + i + ")");
              }
              if ("qFlip" === e.type) {
                if (0 === e.state) {
                  i = e.getRotRad(!1);
                  return void (STATE.tooltip = "量子ビット反転 (" + i + ")");
                }
                return void (STATE.tooltip = "量子ビット恒等");
              }
              if ("rotate" === e.type) {
                i = e.getRotRad(!1);
                return void (STATE.tooltip = "量子ビット回転 (" + i + ")");
              }
              if ("delay" === e.type)
                return void (STATE.tooltip = "遅延 (" + e.state + " ティック)");
              if ("sync" === e.type) return void (STATE.tooltip = "同期");
              if ("trash" === e.type)
                return void (STATE.tooltip = "焼却炉");
            }
            STATE.tooltip = "";
          } else STATE.tooltip = "ビットワイヤ分岐";
        else STATE.tooltip = "ビットワイヤ結合";
      else
        0 === e.rot
          ? (STATE.tooltip = "ビット制御 (状態 '0')")
          : (STATE.tooltip = "ビット制御 (状態 '1')");
    else {
      var i = e.getRotRad(!1);
      STATE.tooltip = "ビットを量子ビットへ (" + i + ")";
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
