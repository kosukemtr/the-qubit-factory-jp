function LevelConsts(e) {
  (STATE.mode = "constructing"),
    (FIELD.tileWidth = ResetConsts.resize()),
    (FIELD.tileHeight = FIELD.tileWidth),
    (SCENARIO.journal = !1);
  var t = !1;
  if ("tut1" === e) {
    (t = !0),
      (SCENARIO.title = "T.A: 配線"),
      (SCENARIO.info = []),
      SCENARIO.info.push("・青色ワイヤーを使って A から D へビットを送ります。"),
      SCENARIO.info.push("・赤色ワイヤーを使って B から C へ量子ビットを送ります。"),
      SCENARIO.info.push(
        "・ワイヤーは右上のメニューから選択し、左クリックしながらドラッグして配置します。",
      ),
      SCENARIO.info.push(
        "・右クリックしながらドラッグするか消しゴムツール(`E`キー)でワイヤーを削除します。",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, -1, 1, 1]),
      (SCENARIO.channelsCol = [2, 1, 1, 2, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(!0, [-1, -1, -1, -1, 0, 0])),
      (SCENARIO.menuGrey = [
        [0, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (var i = 0; i < 10; i++) {
      var a = Math.round(Math.random());
      SCENARIO.CINPUTS[0].push(a);
      var r = Math.floor(16 * Math.random());
      SCENARIO.QINPUTS[0].push(r);
    }
    (SCENARIO.starCond = function () {
      return !0;
    }),
      (SCENARIO.starText = "スター ボーナス: おまけ！"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 30),
      (SCENARIO.numCorrect = 30),
      (SCENARIO.maxTicks = 9999);
  } else if ("tut2" === e) {
    (t = !0),
      (SCENARIO.title = "T.B: ゲート管理"),
      (SCENARIO.info = []),
      SCENARIO.info.push("・A のビットを反転して D に送ります。"),
      SCENARIO.info.push(
        "・B の量子ビットを -π/2（または -90°）回転させて C に送ります。",
      ),
      SCENARIO.info.push(
        "・適切な反転ゲートと回転ゲートがあらかじめ配置されています。",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, -1, 1, 1]),
      (SCENARIO.channelsCol = [2, 1, 1, 2, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(!0, [-1, -1, -1, -1, 0, 0])),
      (SCENARIO.menuGrey = [
        [0, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.editable[99] = 2),
      (SCENARIO.editable[156] = 2),
      (SCENARIO.editable[99] = 2),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 10; i++) {
      a = Math.round(Math.random());
      SCENARIO.CINPUTS[0].push(a), SCENARIO.CINPUTS[1].push(1 - a);
      r = Math.floor(16 * Math.random());
      SCENARIO.QINPUTS[0].push(r), SCENARIO.QINPUTS[1].push((r + 12) % 16);
    }
    (SCENARIO.starCond = function () {
      return !0;
    }),
      (SCENARIO.starText = "スター ボーナス: おまけ！"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 30),
      (SCENARIO.numCorrect = 30),
      (SCENARIO.maxTicks = 9999);
  } else if ("tut3" === e) {
    (t = !0),
      (SCENARIO.title = "T.C: マニピュレーター"),
      (SCENARIO.info = []),
      SCENARIO.info.push("・A から D へビットを反転せずに送ります。"),
      SCENARIO.info.push("・B から C へ量子ビットを回転させずに送ります。"),
      SCENARIO.info.push("・ゲートを左クリックするとその設定を変更できます。"),
      (SCENARIO.channelsDir = [-1, -1, -1, -1, 1, 1]),
      (SCENARIO.channelsCol = [2, 1, 1, 2, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, -1, 0, 0],
        0,
        "fixed",
      )),
      (SCENARIO.menuGrey = [
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.editable[99] = 2),
      (SCENARIO.editable[156] = 2),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 10; i++) {
      a = Math.round(Math.random());
      SCENARIO.CINPUTS[0].push(a), SCENARIO.CINPUTS[1].push(a);
      r = Math.floor(16 * Math.random());
      SCENARIO.QINPUTS[0].push(r), SCENARIO.QINPUTS[1].push(r);
    }
    (SCENARIO.starCond = function () {
      return !0;
    }),
      (SCENARIO.starText = "スター ボーナス: おまけ！"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 30),
      (SCENARIO.numCorrect = 30),
      (SCENARIO.maxTicks = 9999);
  } else if ("tut4" === e) {
    (t = !0),
      (SCENARIO.title = "T.D: CTRL-Z"),
      (SCENARIO.info = []),
      SCENARIO.info.push("・A から D へビットを反転せずに送ります。"),
      SCENARIO.info.push("・B から C へ量子ビットを回転させずに送ります。"),
      SCENARIO.info.push(
        "・このレベルでは既存のゲートを編集できません。",
      ),
      SCENARIO.info.push(
        "・ゲートを配置する前に、マウススクロールまたは左右の矢印キーで向きを変更できます。",
      );
    var s = [
      55, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      75, 21, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, 1, 21, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, 1, 21, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, 1, 21, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, 1, 23, 22, 22, 22, 22, 22, 25, -1, -1, -1, -1, -1, 4, 2, 2, 2, 2, 2,
      78, -1, -1, 4, 2, 5, -1, 53, -1, -1, -1, -1, -1, 1, -1, -1, -1, -1, -1,
      -1, -1, -1, 1, -1, 63, -1, -1, -1, -1, -1, -1, -1, 1, -1, -1, -1, -1, -1,
      -1, 4, 2, 6, -1, -1, -1, 53, 24, 22, 22, 22, 22, 12, 22, 22, 22, 22, 22,
      94, 1, -1, -1, -1, 63, -1, 23, 26, -1, -1, -1, -1, 1, -1, -1, -1, -1, -1,
      21, 1, -1, -1, -1, 3, 2, 2, 2, 2, 2, 2, 2, 6, -1, -1, -1, -1, -1, 21, 1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 21, 1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 21,
      77, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      57,
    ];
    (SCENARIO.channelsDir = [-1, -1, -1, -1, 1, 1]),
      (SCENARIO.channelsCol = [2, 1, 1, 2, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, -1, 0, 0],
        0,
        "partial",
        s,
      )),
      (SCENARIO.menuGrey = [
        [1, 1, 1, 1, 0, 1],
        [1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.editable[139] = 1),
      (SCENARIO.editable[156] = 1),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 10; i++) {
      a = Math.round(Math.random());
      SCENARIO.CINPUTS[0].push(a), SCENARIO.CINPUTS[1].push(1 - a);
      r = Math.floor(16 * Math.random());
      SCENARIO.QINPUTS[0].push(r), SCENARIO.QINPUTS[1].push((r + 12) % 16);
    }
    (SCENARIO.starCond = function () {
      return !0;
    }),
      (SCENARIO.starText = "スター ボーナス: おまけ！"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 30),
      (SCENARIO.numCorrect = 30),
      (SCENARIO.maxTicks = 9999);
  } else if ("tut5" === e) {
    (t = !0),
      (SCENARIO.title = "T.E: 無駄なポテンシャル"),
      (SCENARIO.info = []),
      SCENARIO.info.push("・すべてのビットと量子ビットを焼却します。"),
      SCENARIO.info.push(
        "・ワイヤーやゲートは右クリックしながらドラッグするか、消しゴムツール(`E`キー)で削除できます。",
      ),
      SCENARIO.info.push(
        "・緑色のタブの付いたゲートは青と赤のワイヤー両方に接続できます。",
      ),
      (SCENARIO.channelsDir = [-1, -1, 1, 1, 1, 1]),
      (SCENARIO.channelsCol = [2, 1, 1, 2, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(!0, [-1, -1, -1, -1, 0, 0])),
      (SCENARIO.menuGrey = [
        [0, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.victoryCond = 1),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 10; i++) {
      a = Math.round(Math.random());
      SCENARIO.CINPUTS[0].push(a), SCENARIO.CINPUTS[1].push(1 - a);
      r = Math.floor(16 * Math.random());
      SCENARIO.QINPUTS[0].push(r), SCENARIO.QINPUTS[1].push((r + 12) % 16);
    }
    (SCENARIO.starCond = function () {
      return Helper.countGates() < 2;
    }),
      (SCENARIO.starText =
        "スター ボーナス: 焼却炉1台だけで他のゲートを使わずにクリア"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 30),
      (SCENARIO.numCorrect = 30),
      (SCENARIO.maxTicks = 9999);
  } else if ("tut6" === e) {
    (t = !0),
      (SCENARIO.title = "T.F: 償い"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "・マネージャーが実行用の仕掛けを用意しました！コンソール左下の紫色の `blueprint-Z` ボタンを押して開きます。",
      ),
      SCENARIO.info.push(
        "・装置は間違った場所に作られているので移動が必要です！SHIFT を押しながらクリック&ドラッグで領域を複製選択（または CTRL/CMD を押しながらクリックで移動）します。",
      ),
      (SCENARIO.channelsDir = [-1, 1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [2, 0, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(!0, [-1, 0, -1, 0, 0, 0])),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 30; i++) {
      a = Math.round(Math.random());
      SCENARIO.CINPUTS[0].push(a);
    }
    for (i = 0; i < 30; i++) {
      a = SCENARIO.CINPUTS[0][i];
      i % 4 == 1
        ? SCENARIO.CINPUTS[1].push(1 - a)
        : SCENARIO.CINPUTS[1].push(a),
        i % 2 == 1 &&
          1 === SCENARIO.CINPUTS[1][i] &&
          (SCENARIO.CINPUTS[1][i - 1] = 1 - SCENARIO.CINPUTS[1][i - 1]);
    }
    (SCENARIO.starCond = function () {
      return !0;
    }),
      (SCENARIO.starText = "スター ボーナス: おまけ！"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 30),
      (SCENARIO.numCorrect = 30),
      (SCENARIO.maxTicks = 9999);
  } else if ("class1" === e) {
    (t = !0),
      (SCENARIO.title = "CI.A: ストレートシューター"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "・A のビットをすべて 1 に設定してから C に送ります。",
      ),
      SCENARIO.info.push(
        "・ゲートを選択して ? アイコンを押すと対応するハンドブックを開きます。",
      ),
      (SCENARIO.channelsDir = [-1, 1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [2, 0, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(!0, [-1, 0, -1, 0, 0, 0], 0)),
      (SCENARIO.menuGrey = [
        [0, 1, 1, 1, 0, 0],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 30; i++) {
      a = Math.round(Math.random());
      SCENARIO.CINPUTS[0].push(a), SCENARIO.CINPUTS[1].push(1);
    }
    (SCENARIO.starCond = function () {
      return TIMER.victoryTick <= 80;
    }),
      (SCENARIO.starText = "スター ボーナス: 80ティック以内でクリア"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 30),
      (SCENARIO.numCorrect = 30),
      (SCENARIO.maxTicks = 9999);
  } else if ("class2" === e) {
    (t = !0),
      (SCENARIO.title = "CI.B: 速攻スプリット"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "・A と B を交互に（最初は A から）つなげて一つの流れにします。",
      ),
      SCENARIO.info.push(
        "・結合したストリームを C に送り、同じものを D に送ります。",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, -1, 1, 1]),
      (SCENARIO.channelsCol = [2, 2, 2, 2, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, -1, 0, 0],
        0,
      )),
      (SCENARIO.menuGrey = [
        [0, 1, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 24; i++) {
      a = Math.round(Math.random());
      SCENARIO.CINPUTS[0].push(a);
      r = Math.round(Math.random());
      SCENARIO.CINPUTS[1].push(r),
        SCENARIO.CINPUTS[2].push(a),
        SCENARIO.CINPUTS[2].push(r);
    }
    (SCENARIO.starCond = function () {
      return TIMER.victoryTick <= 85;
    }),
      (SCENARIO.starText = "スター ボーナス: 85ティック以内でクリア"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 60),
      (SCENARIO.numCorrect = 60),
      (SCENARIO.maxTicks = 9999);
  } else if ("class3" === e) {
    (t = !0),
      (SCENARIO.title = "CI.C: スイッチ作戦"),
      (SCENARIO.info = []),
      SCENARIO.info.push("・A のビットが `0` のときは B のビットを C へ送ります。"),
      SCENARIO.info.push("・A のビットが `1` のときは B のビットを D へ送ります。"),
      SCENARIO.info.push(
        "・不要になった A のビットは焼却してかまいません。",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, -1, 1, 1]),
      (SCENARIO.channelsCol = [2, 2, 2, 2, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, -1, 0, 0],
        0,
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], [], []]);
    for (i = 0; i < 44; i++) {
      a = Math.round(Math.random());
      SCENARIO.CINPUTS[0].push(a);
      r = Math.round(Math.random());
      SCENARIO.CINPUTS[1].push(r),
        0 === a ? SCENARIO.CINPUTS[2].push(r) : SCENARIO.CINPUTS[3].push(r);
    }
    (SCENARIO.starCond = function () {
      return TIMER.victoryTick <= 175;
    }),
      (SCENARIO.starText = "スター ボーナス: 175ティック以内でクリア"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 50),
      (SCENARIO.numCorrect = 50),
      (SCENARIO.maxTicks = 9999);
  } else if ("class4" === e) {
    (t = !0),
      (SCENARIO.title = "CI.D: nSync"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "・A と B を交互（最初は A）につなげて一つの流れにし、C に出力します。",
      ),
      SCENARIO.info.push(
        "・B チャンネルは A よりもビット生成が遅い点に注意してください。",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [2, 2, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, 0, 0, 0],
        0,
      )),
      (SCENARIO.menuGrey = [
        [0, 1, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 1, 1],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], [], []]);
    for (i = 0; i < 44; i++) {
      a = Math.round(Math.random());
      SCENARIO.CINPUTS[0].push(a);
      r = Math.round(Math.random());
      SCENARIO.CINPUTS[1].push(r),
        SCENARIO.CINPUTS[2].push(a),
        SCENARIO.CINPUTS[2].push(r);
    }
    (SCENARIO.starCond = function () {
      return TIMER.victoryTick <= 125;
    }),
      (SCENARIO.starText = "スター ボーナス: 125ティック以内でクリア"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 50),
      (SCENARIO.numCorrect = 50),
      (SCENARIO.maxTicks = 9999);
  } else if ("class5" === e) {
    (t = !0),
      (SCENARIO.title = "CI.E: 待ちゲーム"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "・A を C に送った後（合計 12 ビット）、続けて B を C に送ります。",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [2, 2, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, 0, 0, 0],
        0,
      )),
      (SCENARIO.menuGrey = [
        [0, 1, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 0, 1, 1, 1],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], [], []]);
    for (i = 0; i < 6; i++) {
      a = Math.round(Math.random());
      SCENARIO.CINPUTS[0].push(a), SCENARIO.CINPUTS[2].push(a);
    }
    SCENARIO.CINPUTS[2].push(1),
      SCENARIO.CINPUTS[2].push(0),
      SCENARIO.CINPUTS[2].push(1),
      SCENARIO.CINPUTS[2].push(0),
      SCENARIO.CINPUTS[2].push(1),
      SCENARIO.CINPUTS[2].push(1);
    for (i = 0; i < 6; i++) {
      a = Math.round(Math.random());
      SCENARIO.CINPUTS[1].push(a), SCENARIO.CINPUTS[2].push(a);
    }
    (SCENARIO.starCond = function () {
      return 1 === Helper.countGates("delay");
    }),
      (SCENARIO.starText = "スター ボーナス: ディレイゲートを1つだけ使用"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 24),
      (SCENARIO.numCorrect = 24),
      (SCENARIO.maxTicks = 9999);
  } else if ("class6" === e) {
    (t = !0),
      (SCENARIO.title = "CI.F: ジェネシス"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "・表示された要求に合わせて C と D へビットを出力します。",
      ),
      SCENARIO.info.push(
        "・`creation` ゲートは出力パターンを設定できます。",
      ),
      (SCENARIO.channelsDir = [1, 1, -1, -1, 1, 1]),
      (SCENARIO.channelsCol = [0, 0, 2, 2, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(!0, [0, 0, -1, -1, 0, 0], 0)),
      (SCENARIO.menuGrey = [
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], [], []]);
    for (i = 0; i < 30; i++)
      SCENARIO.CINPUTS[0].push(1),
        SCENARIO.CINPUTS[1].push(1),
        SCENARIO.CINPUTS[1].push(0);
    (SCENARIO.starCond = function () {
      return Helper.countGates(["cCreate"]) <= 1;
    }),
      (SCENARIO.starText = "スター ボーナス: 作成ゲートを1つだけ使用"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 60),
      (SCENARIO.numCorrect = 60),
      (SCENARIO.maxTicks = 9999);
  } else if ("class7" === e) {
    (t = !0),
      (SCENARIO.title = "CI.G: ザ・カウント"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "・A の最初の 8 ビットを C へ送り、それ以降は D へ送ります。",
      ),
      SCENARIO.info.push(
        "・`creation` ゲートは生成数を制限できます。",
      ),
      (SCENARIO.channelsDir = [-1, 1, -1, -1, 1, 1]),
      (SCENARIO.channelsCol = [2, 0, 2, 2, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, 0, -1, -1, 0, 0],
        0,
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], [], []]);
    for (i = 0; i < 30; i++) {
      var o = Math.round(Math.random());
      SCENARIO.CINPUTS[0].push(o);
    }
    (SCENARIO.starCond = function () {
      return RBOARD[TIMER.tick].bitList.length <= 1;
    }),
      (SCENARIO.starText = "スター ボーナス: 盤面上のビットを1個以下でクリア"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 40),
      (SCENARIO.numCorrect = 40),
      (SCENARIO.maxTicks = 9999);
  } else if ("classPuzzle1" === e) {
    (t = !0),
      (SCENARIO.title = "CII.A: 帯域幅"),
      (SCENARIO.info = []),
      SCENARIO.info.push("・A のビットを C に、B のビットを D に送ります。"),
      SCENARIO.info.push(
        "・ここでは B チャンネルのビット生成が A よりもかなり遅い点に注意してください。",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, -1, 1, 1]),
      (SCENARIO.channelsCol = [2, 2, 2, 2, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, -1, -1, -1],
        [0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0],
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 1, 0],
      ]),
      (SCENARIO.division = 2),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], [], []]);
    for (i = 0; i < 100; i++) {
      (a = Math.round(Math.random())), (r = Math.round(Math.random()));
      SCENARIO.CINPUTS[0].push(a), SCENARIO.CINPUTS[1].push(r);
    }
    (SCENARIO.starCond = function () {
      return TIMER.victoryTick <= 650;
    }),
      (SCENARIO.starText = "スター ボーナス: 650ティック未満で成功"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 200),
      (SCENARIO.numCorrect = 200),
      (SCENARIO.maxTicks = 9999);
  } else if ("classPuzzle2" === e) {
    (t = !0),
      (SCENARIO.title = "CII.B: 半加算器"),
      (SCENARIO.archive =
        "https://en.wikipedia.org/wiki/Adder_(electronics)#Half_adder"),
      (SCENARIO.info = []),
      SCENARIO.info.push("(A,B) のビットペアごとに:"),
      SCENARIO.info.push("・その `XOR` を C に出力:"),
      SCENARIO.info.push(
        "   (0,0)--> 0  (0,1)--> 1        (1,0)--> 1  (1,1)--> 0",
      ),
      SCENARIO.info.push("・その `AND` を D に出力:"),
      SCENARIO.info.push(
        "   (0,0)--> 0  (0,1)--> 0        (1,0)--> 0  (1,1)--> 1",
      ),
      SCENARIO.info.push(
        "ヒント: 反転ゲートとリセットゲートを備えたビットコントロールを使用しましょう。",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, -1, 1, 1]),
      (SCENARIO.channelsCol = [2, 2, 0, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !0),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, -1, 0, 0],
        0,
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], [], []]);
    for (i = 0; i < 296; i++) {
      (a = Math.round(Math.random())), (r = Math.round(Math.random()));
      SCENARIO.CINPUTS[0].push(a),
        SCENARIO.CINPUTS[1].push(r),
        SCENARIO.CINPUTS[2].push((a + r) % 2),
        SCENARIO.CINPUTS[3].push(Math.floor((a + r) / 2));
    }
    (SCENARIO.starCond = function () {
      return Helper.countGates(["switch"]) <= 2;
    }),
      (SCENARIO.starText = "スター ボーナス: 制御ゲートを2個以内で使用"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 200),
      (SCENARIO.numCorrect = 200),
      (SCENARIO.maxTicks = 9999);
  } else if ("classPuzzle3" === e) {
    (t = !0),
      (SCENARIO.title = "CIII.B: AND 節約術"),
      (SCENARIO.info = []),
      SCENARIO.info.push("・A と B の論理 AND を D に出力:"),
      SCENARIO.info.push(
        "   (0,0)--> 0  (0,1)--> 0        (1,0)--> 0  (1,1)--> 1",
      ),
      SCENARIO.info.push(
        "・深刻な不足により、`re-zero` ゲートは現在利用できません。",
      ),
      (SCENARIO.channelsDir = [-1, -1, 1, -1, 1, 1]),
      (SCENARIO.channelsCol = [2, 2, 0, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !0),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, 0, -1, 0, 0],
        0,
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], [], []]);
    for (i = 0; i < 100; i++) {
      (a = Math.round(Math.random())), (r = Math.round(Math.random()));
      SCENARIO.CINPUTS[0].push(a),
        SCENARIO.CINPUTS[1].push(r),
        SCENARIO.CINPUTS[3].push(Math.floor((a + r) / 2));
    }
    (SCENARIO.starCond = function () {
      return 0 === Helper.countGates(["delay"]);
    }),
      (SCENARIO.starText = "スター ボーナス: ディレイゲートを使わない"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 100),
      (SCENARIO.numCorrect = 100),
      (SCENARIO.maxTicks = 9999);
  } else if ("classPuzzle3B" === e) {
    (t = !0),
      (SCENARIO.title = "CIII.C: XOR 節約術"),
      (SCENARIO.info = []),
      SCENARIO.info.push("・A と B の論理 XOR を D に出力:"),
      SCENARIO.info.push(
        "   (0,0)--> 0  (0,1)--> 1        (1,0)--> 1  (1,1)--> 0",
      ),
      SCENARIO.info.push(
        "・深刻な不足により、`invert` ゲートは現在利用できません。",
      ),
      (SCENARIO.channelsDir = [-1, -1, 1, -1, 1, 1]),
      (SCENARIO.channelsCol = [2, 2, 0, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !0),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, 0, -1, 0, 0],
        0,
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 1, 0],
        [1, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], [], []]);
    for (i = 0; i < 100; i++) {
      (a = Math.round(Math.random())), (r = Math.round(Math.random()));
      SCENARIO.CINPUTS[0].push(a),
        SCENARIO.CINPUTS[1].push(r),
        SCENARIO.CINPUTS[3].push((a + r) % 2);
    }
    (SCENARIO.starCond = function () {
      return 0 === Helper.countGates(["cCreate"]);
    }),
      (SCENARIO.starText = "スター ボーナス: 作成ゲートを使用しない"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 100),
      (SCENARIO.numCorrect = 100),
      (SCENARIO.maxTicks = 9999);
  } else if ("classPuzzle4" === e) {
    (t = !0),
      (SCENARIO.title = "CII.C: メモリ"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "・入力ストリーム A の各ビットについて、前のビットと同じなら `0` を C に、異なれば `1` を C に出力します。",
      ),
      SCENARIO.info.push(
        "・メモリは `0` 状態で初期化されていると仮定します。",
      ),
      (SCENARIO.channelsDir = [-1, 1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [2, 0, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !0),
      (SCENARIO.editable = BoardData.makeEditable(!0, [-1, 0, -1, 0, 0, 0], 0)),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]),
      SCENARIO.CINPUTS[0].push(0),
      SCENARIO.CINPUTS[1].push(0);
    for (i = 0; i < 50; i++) {
      var n = SCENARIO.CINPUTS[0].length;
      (a = SCENARIO.CINPUTS[0][n - 1]), (r = Math.round(Math.random()));
      SCENARIO.CINPUTS[0].push(r),
        a === r ? SCENARIO.CINPUTS[1].push(0) : SCENARIO.CINPUTS[1].push(1);
    }
    (SCENARIO.starCond = function () {
      return TIMER.victoryTick <= 400;
    }),
      (SCENARIO.starText = "スター ボーナス: 400ティック未満で成功"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 50),
      (SCENARIO.numCorrect = 50),
      (SCENARIO.maxTicks = 9999);
  } else if ("classPuzzle5" === e) {
    (t = !0),
      (SCENARIO.title = "CII.D: 三進法"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "・A から3番目ごとのビットを D へ送り、残りを C へ送ります。",
      ),
      (SCENARIO.channelsDir = [-1, 1, -1, -1, 1, 1]),
      (SCENARIO.channelsCol = [2, 0, 2, 2, 0, 0]),
      (SCENARIO.hasEntanglers = !0),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, 0, -1, -1, 0, 0],
        0,
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 50; i++) {
      (a = Math.round(Math.random())), (r = Math.round(Math.random()));
      var l = Math.round(Math.random());
      SCENARIO.CINPUTS[0].push(a),
        SCENARIO.CINPUTS[0].push(r),
        SCENARIO.CINPUTS[0].push(l),
        SCENARIO.CINPUTS[1].push(a),
        SCENARIO.CINPUTS[1].push(r),
        SCENARIO.CINPUTS[2].push(l);
    }
    (SCENARIO.starCond = function () {
      return 0 === Helper.countGates("trash");
    }),
      (SCENARIO.starText = "スター ボーナス: 焼却炉を使わない"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 60),
      (SCENARIO.numCorrect = 60),
      (SCENARIO.maxTicks = 9999);
  } else if ("classPuzzle6" === e) {
    (t = !0),
      (SCENARIO.title = "CII.E: 繰り返し"),
      (SCENARIO.archive = "https://en.wikipedia.org/wiki/Repetition_code"),
      (SCENARIO.info = []),
      SCENARIO.info.push("・A を C に送ります。"),
      SCENARIO.info.push(
        "・盤面上の各チャンネルは通過するビットを 20% の確率で反転させます。",
      ),
      (SCENARIO.channelsDir = [-1, 1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [2, 0, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, 0, -1, 0, 0, 0],
        0,
        "correctionC",
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.device = 8),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 500; i++) {
      a = Math.round(Math.random());
      SCENARIO.CINPUTS[0].push(a);
    }
    (SCENARIO.starCond = function () {
      return RBOARD[TIMER.tick].success >= 480;
    }),
      (SCENARIO.starText = "スター ボーナス: 480個以上正解"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 500),
      (SCENARIO.numCorrect = 440),
      (SCENARIO.maxTicks = 9999);
  } else if ("classPuzzle7" === e) {
    (t = !0),
      (SCENARIO.title = "CII.F: スワップミート"),
      (SCENARIO.info = []),
      SCENARIO.info.push("・A のビットを D へ、B のビットを C へ送ります。"),
      SCENARIO.info.push(
        "・安全規則によりワイヤーを直接交差させることはできません。",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, -1, 1, 1]),
      (SCENARIO.channelsCol = [2, 2, 2, 2, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, -1, 0, 0],
        0,
        "canal",
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 1, 0],
      ]),
      (SCENARIO.division = 8),
      (SCENARIO.scoreHeightRaw = 5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 100; i++) {
      var h = Math.floor(2 * Math.random());
      SCENARIO.CINPUTS[0].push(h);
      r = Math.floor(2 * Math.random());
      SCENARIO.CINPUTS[1].push(r);
    }
    (SCENARIO.starCond = function () {
      return Helper.countGates(["switch"]) <= 3;
    }),
      (SCENARIO.starText = "スター ボーナス: 制御ゲートを3個以下で使用"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 100),
      (SCENARIO.numCorrect = 100),
      (SCENARIO.maxTicks = 9999);
  } else if ("classPuzzle8" === e)
    (t = !0),
      (SCENARIO.title = "CIII.A: 厳密比較"),
      (SCENARIO.info = []),
      SCENARIO.info.push("・A と B にはそれぞれ 8 ビットの列が入っています。"),
      SCENARIO.info.push(
        "・A と B の列が一致していれば `1`、そうでなければ `0` を出力します。",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [2, 2, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, 0, 0, 0],
        0,
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.device = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]),
      (SCENARIO.starCond = function () {
        return 0 === Helper.countGates(["delay"]);
      }),
      (SCENARIO.starText = "スター ボーナス: ディレイゲートを使わない"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 1),
      (SCENARIO.numCorrect = 1),
      (SCENARIO.maxTicks = 9999),
      (SCENARIO.repetitions = 10),
      (SCENARIO.successRep = 10),
      (SCENARIO.currentRep = 1),
      (SCENARIO.correctReps = 0);
  else if ("classPuzzle9" === e)
    (t = !0),
      (SCENARIO.title = "CIII.D: 干し草の山"),
      (SCENARIO.info = []),
      SCENARIO.info.push("・入力 A には合計 10 ビットが含まれています。"),
      SCENARIO.info.push(
        "・入力に `1` が4連続以上含まれていれば `1` を、そうでなければ `0` を出力します。",
      ),
      (SCENARIO.channelsDir = [-1, 1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [2, 0, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(!0, [-1, 0, -1, 0, 0, 0], 0)),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.device = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]),
      (SCENARIO.starCond = function () {
        return Helper.countGates(["switch"]) <= 5;
      }),
      (SCENARIO.starText = "スター ボーナス: 制御ゲートを5個以下で使用"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 1),
      (SCENARIO.numCorrect = 1),
      (SCENARIO.maxTicks = 9999),
      (SCENARIO.repetitions = 10),
      (SCENARIO.successRep = 10),
      (SCENARIO.currentRep = 1),
      (SCENARIO.correctReps = 0);
  else if ("vaziraniClassic" === e)
    (t = !0),
      (SCENARIO.title = "CII.G: 品質管理"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "・装置は上部の 3 つの制御ビットと下部のターゲットビットを入力として受け取ります。",
      ),
      SCENARIO.info.push(
        "・下から上に向かう各制御チャンネルで、ターゲットビットを制御反転する場合は `1`、作用しない場合は `0` を出力します。",
      ),
      (SCENARIO.channelsDir = [1, 1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [0, 0, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [0, 0, -1, 0, 0, 0],
        0,
        "deviceA",
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.device = 1),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]),
      (SCENARIO.starCond = function () {
        return !0;
      }),
      (SCENARIO.starText = "スター ボーナス: おまけ！"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 3),
      (SCENARIO.numCorrect = 3),
      (SCENARIO.maxTicks = 9999),
      (SCENARIO.repetitions = 10),
      (SCENARIO.successRep = 10),
      (SCENARIO.currentRep = 1),
      (SCENARIO.correctReps = 0);
  else if ("quant1" === e) {
    (t = !0),
      (SCENARIO.title = "QI.A: 反転"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "▲ 黄色の `J` ボタンからジャーナルノートを開いて追加のヒントを確認できます。",
      ),
      SCENARIO.info.push(
        "・A を C へ、B を D へ送る前に施された変換を反転させてください。",
      ),
      (SCENARIO.journal = !0),
      (SCENARIO.channelsDir = [-1, -1, -1, -1, 1, 1]),
      (SCENARIO.channelsCol = [1, 1, 1, 1, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, -1, 0, 0],
        0,
        "inversion",
      )),
      (SCENARIO.menuGrey = [
        [1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 0, 0],
        [1, 1, 1, 1, 1, 1],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.device = 10),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 100; i++) {
      (r = Math.floor(16 * Math.random())),
        (l = Math.floor(16 * Math.random()));
      SCENARIO.QINPUTS[0].push(r), SCENARIO.QINPUTS[1].push(l);
    }
    (SCENARIO.starCond = function () {
      return Helper.countGates() <= 8;
    }),
      (SCENARIO.starText = "スター ボーナス: ゲートを2つだけ使用"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 100),
      (SCENARIO.numCorrect = 100),
      (SCENARIO.maxTicks = 9999);
  } else if ("quant2" === e) {
    (t = !0),
      (SCENARIO.title = "QI.B: ワイヤークロス"),
      (SCENARIO.info = []),
      SCENARIO.info.push("・A のビットを C へ送ります。"),
      SCENARIO.info.push(
        "・B の量子ビット（必ず ◀ または ▶ の状態）を D へ送ります。",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, -1, 1, 1]),
      (SCENARIO.channelsCol = [2, 1, 2, 1, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, -1, 0, 0],
        0,
        "cross",
      )),
      (SCENARIO.menuGrey = [
        [0, 1, 1, 1, 1, 1],
        [0, 1, 1, 0, 1, 1],
        [1, 1, 1, 1, 0, 0],
      ]),
      (SCENARIO.division = 6),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 100; i++) {
      (r = Math.round(Math.random())), (l = 4 + 8 * Math.round(Math.random()));
      SCENARIO.CINPUTS[0].push(r), SCENARIO.QINPUTS[0].push(l);
    }
    (SCENARIO.starCond = function () {
      return TIMER.victoryTick <= 130;
    }),
      (SCENARIO.starText = "スター ボーナス: 130ティック未満で成功"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 100),
      (SCENARIO.numCorrect = 100),
      (SCENARIO.maxTicks = 9999);
  } else if ("quant3A" === e)
    (t = !0),
      (SCENARIO.title = "QI.C: サイコロ"),
      (SCENARIO.archive =
        "https://en.wikipedia.org/wiki/Quantum_logic_gate#Measurement"),
      (SCENARIO.info = []),
      SCENARIO.info.push("測定ゲートを調整して次を満たしてください:"),
      SCENARIO.info.push("・C への出力の 69%(±3%) が `1` になるようにします。"),
      SCENARIO.info.push("・D への出力の 75%(±3%) が `1` になるようにします。"),
      SCENARIO.info.push(
        "ヒント: ステートアナライザー（建設中または工場停止中に量子ビットをクリック）で測定確率を確認しましょう。",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, -1, 1, 1]),
      (SCENARIO.channelsCol = [1, 1, 2, 2, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, -1, 0, 0],
        0,
        "fixed",
      )),
      (SCENARIO.menuGrey = [
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.editable[104] = 2),
      (SCENARIO.editable[161] = 2),
      (SCENARIO.editable[164] = 2),
      (SCENARIO.editable[202] = 2),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]),
      (SCENARIO.starCond = function () {
        return !0;
      }),
      (SCENARIO.starText = "スター ボーナス: おまけ！"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 2e3),
      (SCENARIO.numCorrect = 2e3),
      (SCENARIO.maxTicks = 9999),
      (SCENARIO.victoryCond = 2),
      (SCENARIO.outputC = [66, 72]),
      (SCENARIO.outputD = [72, 78]);
  else if ("quant3" === e) {
    (t = !0),
      (SCENARIO.title = "QI.D: ロスあり"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "・A を C に送ります。A の量子ビットは最初 ▲ か ▶ の状態です。",
      ),
      SCENARIO.info.push(
        "・すべての量子ビットを完全に送ることはできません。できるだけうまくやりましょう。",
      ),
      (SCENARIO.journal = !0),
      (SCENARIO.channelsDir = [-1, 1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [1, 0, 1, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, 0, -1, 0, 0, 0],
        (partition = [0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0]),
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 2),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 300; i++) {
      l = 4 * Math.round(Math.random());
      SCENARIO.QINPUTS[0].push(l);
    }
    (SCENARIO.starCond = function () {
      return 0 === Helper.countGates(["rotate", "qFlip"]);
    }),
      (SCENARIO.starText = "スター ボーナス: rotate や flip ゲートを使わない"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 300),
      (SCENARIO.numCorrect = 240),
      (SCENARIO.maxTicks = 9999);
  } else if ("quant4" === e) {
    (t = !0),
      (SCENARIO.title = "QI.E: 直進シューターII"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "・A の量子ビットをすべて ▲ 状態にしてから C へ送ります。",
      ),
      SCENARIO.info.push(
        "・ヒント: 測定すると量子ビットは測定軸と同方向か逆方向で出力されます。",
      ),
      (SCENARIO.channelsDir = [-1, 1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [1, 0, 1, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(!0, [-1, 0, -1, 0, 0, 0], 0)),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 50; i++) {
      l = Math.floor(16 * Math.random());
      SCENARIO.QINPUTS[0].push(l), SCENARIO.QINPUTS[1].push(0);
    }
    (SCENARIO.starCond = function () {
      return TIMER.victoryTick <= 250;
    }),
      (SCENARIO.starText = "スター ボーナス: 250ティック以内で成功"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 50),
      (SCENARIO.numCorrect = 50),
      (SCENARIO.maxTicks = 9999);
  } else if ("quant5" === e) {
    (t = !0),
      (SCENARIO.title = "QI.F: 量子制御"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "・A と B の回転角の合計になるよう回転した量子ビットを C に出力します(12時方向から開始)。",
      ),
      SCENARIO.info.push(
        "・入力 A は ▲ または ▼ のみ、B は ▲ または ▶ のみ含みます。",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [1, 1, 1, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, 0, 0, 0],
        0,
      )),
      (SCENARIO.menuGrey = [
        [1, 1, 1, 1, 1, 1],
        [0, 0, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 100; i++) {
      (r = 8 * Math.round(Math.random())), (l = 4 * Math.round(Math.random()));
      SCENARIO.QINPUTS[0].push(r),
        SCENARIO.QINPUTS[1].push(l),
        SCENARIO.QINPUTS[2].push(r + l);
    }
    (SCENARIO.starCond = function () {
      return !0;
    }),
      (SCENARIO.starText = "スター ボーナス: おまけ！"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 100),
      (SCENARIO.numCorrect = 100),
      (SCENARIO.maxTicks = 9999);
  } else if ("quant6" === e) {
    (t = !0),
      (SCENARIO.title = "QI.G: 量子制御 II"),
      (SCENARIO.archive = "https://en.wikipedia.org/wiki/Controlled_NOT_gate"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "・A と B の回転角の合計となるよう回転した量子ビットを C に出力します(12時方向から開始)。",
      ),
      SCENARIO.info.push(
        "・入力 A は ▲ または ▼ のみ、B は ▲ または ▶ のみ含みます。",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [1, 1, 1, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, 0, 0, 0],
        0,
      )),
      (SCENARIO.menuGrey = [
        [1, 1, 1, 1, 1, 1],
        [0, 0, 1, 1, 0, 1],
        [1, 1, 1, 1, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 100; i++) {
      (r = 8 * Math.round(Math.random())), (l = 4 * Math.round(Math.random()));
      SCENARIO.QINPUTS[0].push(r),
        SCENARIO.QINPUTS[1].push(l),
        SCENARIO.QINPUTS[2].push(r + l);
    }
    (SCENARIO.starCond = function () {
      return !0;
    }),
      (SCENARIO.starText = "スター ボーナス: おまけ！"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 100),
      (SCENARIO.numCorrect = 100),
      (SCENARIO.maxTicks = 9999);
  } else if ("quant6B" === e) {
    (t = !0),
      (SCENARIO.title = "QI.H: 重ね合わせ"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "・A の量子ビットは (▲,▼) 基底で、B の量子ビットは (◀,▶) 基底で開始します。",
      ),
      SCENARIO.info.push(
        "・A を C の期待出力に、B を D の期待出力に合わせるよう変換します。",
      ),
      SCENARIO.info.push(
        "・ヒント: 量子ビットをクリックすると基底を変更できます。",
      ),
      (SCENARIO.journal = !0),
      (SCENARIO.channelsDir = [-1, -1, -1, -1, 1, 1]),
      (SCENARIO.channelsCol = [1, 1, 1, 1, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, -1, 0, 0],
        0,
      )),
      (SCENARIO.menuGrey = [
        [1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 0, 0],
        [1, 1, 1, 1, 1, 1],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 100; i++)
      SCENARIO.QINPUTS[0].push(0), SCENARIO.QINPUTS[1].push(0);
    (SCENARIO.starCond = function () {
      return (
        Helper.countGates("qFlip") <= 3 && Helper.countGates("rotate") <= 1
      );
    }),
      (SCENARIO.starText = "スター ボーナス: 'flip'1個と'rotate'1個のみ使用"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 200),
      (SCENARIO.numCorrect = 200),
      (SCENARIO.maxTicks = 9999);
  } else if ("quant7" === e) {
    (t = !0),
      (SCENARIO.title = "QII.A: Measure x1, Cut x2"),
      (SCENARIO.archive =
        "https://en.wikipedia.org/wiki/Quantum_logic_gate#The_effect_of_measurement_on_entangled_states"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "・A と B にはそれぞれ 50 個の量子ビットがあり、ペアでエンタングルされます。",
      ),
      SCENARIO.info.push(
        "・C と D にはそれぞれ ▲ 状態の量子ビットを 50 個ずつ出力します。",
      ),
      SCENARIO.info.push(
        "・測定ゲートは事前に配置された 1 つだけです。",
      ),
      (SCENARIO.journal = !0),
      (SCENARIO.channelsDir = [-1, -1, -1, -1, 1, 1]),
      (FIELD.channelsDir = [...SCENARIO.channelsDir]),
      (SCENARIO.channelsCol = [1, 1, 1, 1, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, -1, 0, 0],
        0,
        "onetwo",
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 0],
        [1, 1, 1, 1, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.device = 6),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 100; i++) SCENARIO.QINPUTS[0].push(0);
    (SCENARIO.starCond = function () {
      return TIMER.victoryTick <= 250;
    }),
      (SCENARIO.starText = "スター ボーナス: 250ティック以内で成功"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 100),
      (SCENARIO.numCorrect = 100),
      (SCENARIO.maxTicks = 9999);
  } else if ("quantChallengeA" === e) {
    (t = !0),
      (SCENARIO.title = "QIII.A: Try,Try,Try Again"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "・A からの (◀,▶) 量子ビットを反転して C に送ります。",
      ),
      SCENARIO.info.push(
        "・新しい量子ビットの生成や回転／反転ゲートの使用は無効化されています。",
      ),
      (SCENARIO.journal = !0),
      (SCENARIO.channelsDir = [-1, 1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [1, 0, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !0),
      (SCENARIO.editable = BoardData.makeEditable(!0, [-1, 0, -1, 0, 0, 0], 0)),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 1],
        [0, 1, 0, 0, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 400; i++) {
      h = Math.round(Math.random());
      SCENARIO.QINPUTS[0].push(4 + 8 * h),
        SCENARIO.QINPUTS[1].push(4 + 8 * (1 - h));
    }
    (SCENARIO.starCond = function (e) {
      return 100 === e;
    }),
      (SCENARIO.starText = "スター ボーナス: 成功率100%達成"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 100),
      (SCENARIO.numCorrect = 70),
      (SCENARIO.maxTicks = 9999);
  } else if ("quantChallengeB" === e) {
    (t = !0),
      (SCENARIO.title = "QII.F: Analysis"),
      (SCENARIO.archive =
        "https://en.wikipedia.org/wiki/Quantum_logic_gate#Unitary_inversion_of_gates"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "・A と B の量子ビットにかけられた（隠された）ユニタリ変換を打ち消し、C と D にそれぞれ出力します。",
      ),
      SCENARIO.info.push(
        "・制御フリップや回転を使って生成された量子ビットを ▲ 状態へ戻せないか試してみましょう。",
      ),
      (SCENARIO.journal = !0),
      (SCENARIO.channelsDir = [-1, -1, -1, -1, 1, 1]),
      (SCENARIO.channelsCol = [1, 1, 1, 1, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, -1, 0, 0],
        0,
        "analysis",
      )),
      (SCENARIO.menuGrey = [
        [1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.device = 4),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 400; i++) {
      a = Math.floor(16 * Math.random());
      SCENARIO.QINPUTS[0].push(a);
      r = Math.floor(16 * Math.random());
      SCENARIO.QINPUTS[1].push(r), SCENARIO.QINPUTS[2].push(0);
    }
    (SCENARIO.starCond = function (e) {
      return !0;
    }),
      (SCENARIO.starText = "スター ボーナス: おまけ！"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 200),
      (SCENARIO.numCorrect = 200),
      (SCENARIO.maxTicks = 9999);
  } else if ("quantChallengeC" === e) {
    (t = !0),
      (SCENARIO.title = "QII.G: Magic Mirror"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "・A の最初の出力と同じ状態のまま、量子ビットを C に送り返します。",
      ),
      SCENARIO.info.push(
        "ヒント: 自由または制御付きの `rotate` や `flip` ゲートの作用は、同種のゲートでもう一度作用させれば取り消せます。",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, 1, -1, 1]),
      (SCENARIO.channelsCol = [1, 1, 1, 0, 1, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, 0, -1, 0],
        [0, 0, 0, 0, 0, 0, -1, -1, -1, 0, 0, 0, 0, 0],
        "halffrozen",
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 7),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 50; i++) {
      a = Math.floor(16 * Math.random());
      SCENARIO.QINPUTS[0].push(a);
      r = Math.floor(16 * Math.random());
      SCENARIO.QINPUTS[1].push(r);
      l = Math.floor(16 * Math.random());
      SCENARIO.QINPUTS[2].push(l);
    }
    (SCENARIO.starCond = function (e) {
      return !0;
    }),
      (SCENARIO.starText = "スター ボーナス: おまけ！"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 50),
      (SCENARIO.numCorrect = 50),
      (SCENARIO.maxTicks = 9999);
  } else if ("quantChallengeD" === e) {
    (t = !0),
      (SCENARIO.title = "QII.H: Even Odds"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "・α と β の量子ビットは EVEN (a▲▲+b▼▼) または ODD (a▲▲-b▼▼) の重ね合わせで始まります（a,b は正の数）。",
      ),
      SCENARIO.info.push(
        "・それぞれの重ね合わせに対して、EVEN なら `0`、ODD なら `1` を C に出力します。",
      ),
      SCENARIO.info.push(
        "・ヒント: (◀,▶) 基底で量子ビットを見てみましょう。",
      ),
      (SCENARIO.channelsDir = [1, 1, -1, 1, -1, -1]),
      (SCENARIO.channelsCol = [0, 0, 2, 0, 1, 1]),
      (SCENARIO.hasEntanglers = !0),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [0, 0, -1, 0, -1, -1],
        0,
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 200; i++) {
      a = Math.round(Math.random());
      SCENARIO.CINPUTS[0].push(a);
    }
    (SCENARIO.starCond = function () {
      return Helper.countGates("measure") <= 1;
    }),
      (SCENARIO.starText = "スター ボーナス: 測定ゲートを1つだけ使用"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 200),
      (SCENARIO.numCorrect = 165),
      (SCENARIO.maxTicks = 9999);
  } else if ("quantChallengeE" === e) {
    (t = !0),
      (SCENARIO.title = "QIII.B: Swap Meet II"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "・A からの量子ビットを D へ、B からの量子ビットを C へ送ります。",
      ),
      SCENARIO.info.push(
        "・安全規則によりワイヤーを直接交差させることはできません。",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, -1, 1, 1]),
      (SCENARIO.channelsCol = [1, 1, 1, 1, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, -1, 0, 0],
        0,
        "canal",
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 8),
      (SCENARIO.scoreHeightRaw = 5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 100; i++) {
      h = Math.floor(16 * Math.random());
      SCENARIO.QINPUTS[0].push(h);
      r = Math.floor(16 * Math.random());
      SCENARIO.QINPUTS[1].push(r);
    }
    (SCENARIO.starCond = function () {
      return Helper.checkFlipAlign();
    }),
      (SCENARIO.starText =
        "スター ボーナス: 垂直/水平向きのフリップゲートを使わない"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 100),
      (SCENARIO.numCorrect = 100),
      (SCENARIO.maxTicks = 9999);
  } else if ("quantChallengeF" === e)
    (t = !0),
      (SCENARIO.title = "QIII.C: Relay"),
      (SCENARIO.info = []),
      (SCENARIO.archive =
        "https://en.wikipedia.org/wiki/Quantum_network#Quantum_repeaters"),
      SCENARIO.info.push(
        "・ベルペアとは ▲▲ と ▼▼ の等しい重ね合わせです。",
      ),
      SCENARIO.info.push(
        "・ベルペアを生成し、半分ずつを C と D に出力します。",
      ),
      (SCENARIO.journal = !0),
      (SCENARIO.channelsDir = [1, 1, -1, -1, 1, 1]),
      (SCENARIO.channelsCol = [0, 0, 1, 1, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [0, 0, -1, -1, 0, 0],
        0,
        "relay",
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 9),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]),
      (SCENARIO.starCond = function () {
        return !0;
      }),
      (SCENARIO.starText = "スター ボーナス: おまけ！"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 50),
      (SCENARIO.numCorrect = 50),
      (SCENARIO.maxTicks = 9999);
  else if ("quantChallengeG" === e) {
    (t = !0),
      (SCENARIO.title = "H.D: Back-to-front"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "・B が `0` を出すたび、C に ▼ の量子ビットを出力します。",
      ),
      SCENARIO.info.push(
        "・B が `1` を出すたび、C に ▶ の量子ビットを出力します。",
      ),
      (SCENARIO.archive = "https://en.wikipedia.org/wiki/Phase_kickback"),
      (SCENARIO.journal = !0),
      (SCENARIO.channelsDir = [-1, -1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [1, 2, 1, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, 0, 0, 0],
        0,
        "btf",
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 50; i++) {
      h = Math.round(Math.random());
      SCENARIO.CINPUTS[0].push(h),
        0 === h
          ? SCENARIO.QINPUTS[0].push(8)
          : 1 === h && SCENARIO.QINPUTS[0].push(4);
    }
    (SCENARIO.starCond = function () {
      return Helper.countGates("qFlip") <= 2;
    }),
      (SCENARIO.starText = "スター ボーナス: フリップゲートを2個以内で使用"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 50),
      (SCENARIO.numCorrect = 50),
      (SCENARIO.maxTicks = 9999);
  } else if ("quantErrorA" === e) {
    (t = !0),
      (SCENARIO.title = "H.C: Correction I"),
      (SCENARIO.archive =
        "https://en.wikipedia.org/wiki/Quantum_error_correction#Bit_flip_code"),
      (SCENARIO.info = []),
      SCENARIO.info.push("・A の量子ビットを C へ送ります。"),
      SCENARIO.info.push(
        "・各チャンネルでは量子ビットが 25% の確率で（90°、180°、270°のいずれかに）回転します。",
      ),
      (SCENARIO.journal = !0),
      (SCENARIO.channelsDir = [-1, 1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [1, 0, 1, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !0),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, 0, -1, 0, 0, 0],
        0,
        "correctionB",
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.device = 5),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 1e3; i++) {
      h = Math.floor(16 * Math.random());
      SCENARIO.QINPUTS[0].push(h);
    }
    (SCENARIO.starCond = function (e) {
      return RBOARD[TIMER.tick].success >= 96;
    }),
      (SCENARIO.starText = "スター ボーナス: 正解出力96回以上"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 100),
      (SCENARIO.numCorrect = 85),
      (SCENARIO.maxTicks = 9999);
  } else if ("quantErrorB" === e) {
    (t = !0),
      (SCENARIO.title = "H.C+: Correction II"),
      (SCENARIO.info = []),
      SCENARIO.info.push("・A の量子ビットを C へ送ります。"),
      SCENARIO.info.push(
        "・盤面上のチャンネルは通過した量子ビットをランダムな角度で回転させます。",
      ),
      SCENARIO.info.push(
        "・α と β の量子ビットは完璧なベルペアの状態から始まります。",
      ),
      (SCENARIO.channelsDir = [-1, 1, -1, 1, -1, -1]),
      (SCENARIO.channelsCol = [1, 0, 0, 0, 1, 1]),
      (SCENARIO.hasEntanglers = !0),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, 0, -1, 0, -1, -1],
        0,
        "correctionD",
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.device = 9),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 96; i++) {
      h = Math.floor(16 * Math.random());
      SCENARIO.QINPUTS[0].push(h);
    }
    (SCENARIO.starCond = function (e) {
      return RBOARD[TIMER.tick].success >= 100;
    }),
      (SCENARIO.starText = "スター ボーナス: 完璧な成功率"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 100),
      (SCENARIO.numCorrect = 80),
      (SCENARIO.maxTicks = 9999);
  } else if ("adderB" === e) {
    (t = !0),
      (SCENARIO.title = "QII.C: Drive-by XOR"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "・A を C へ、B を D へ送り、(A,B) の排他的 OR を β へ送ります:",
      ),
      SCENARIO.info.push(
        "   (▲,▲)--> ▲  (▲,▼)--> ▼        (▼,▲)--> ▼  (▼,▼)--> ▲",
      ),
      SCENARIO.info.push(
        "・チャンネル α には ▲ 状態で初期化された補助量子ビットがあります。",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, -1, -1, -1]),
      (SCENARIO.channelsCol = [1, 1, 1, 1, 1, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, -1, -1, -1],
        0,
      )),
      (SCENARIO.menuGrey = [
        [1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 96; i++) {
      (a = Math.round(Math.random())), (r = Math.round(Math.random()));
      SCENARIO.QINPUTS[0].push(8 * a),
        SCENARIO.QINPUTS[1].push(8 * r),
        SCENARIO.QINPUTS[2].push(((a + r) % 2) * 8);
    }
    (SCENARIO.starCond = function () {
      return Helper.countGates("qControl") < 3;
    }),
      (SCENARIO.starText = "スター ボーナス: 制御ゲートを2個以下で使用"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 300),
      (SCENARIO.numCorrect = 300),
      (SCENARIO.maxTicks = 9999);
  } else if ("adderC" === e) {
    (t = !0),
      (SCENARIO.title = "QII.D: Drive-by AND"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "・A を C へ、B を D へ送り、(A,B) の論理 AND を β へ送ります:",
      ),
      SCENARIO.info.push(
        "   (▲,▲)--> ▲  (▲,▼)--> ▲        (▼,▲)--> ▲  (▼,▼)--> ▼",
      ),
      SCENARIO.info.push(
        "・チャンネル α には ▲ 状態で初期化された補助量子ビットがあります。",
      ),
      (SCENARIO.journal = !0),
      (SCENARIO.channelsDir = [-1, -1, -1, -1, -1, -1]),
      (SCENARIO.channelsCol = [1, 1, 1, 1, 1, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, -1, -1, -1],
        0,
      )),
      (SCENARIO.menuGrey = [
        [1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 96; i++) {
      (a = Math.round(Math.random())), (r = Math.round(Math.random()));
      SCENARIO.QINPUTS[0].push(8 * a),
        SCENARIO.QINPUTS[1].push(8 * r),
        SCENARIO.QINPUTS[2].push(8 * (a + r > 1.5));
    }
    (SCENARIO.starCond = function () {
      return 0 === Helper.countGates("qFlip");
    }),
      (SCENARIO.starText = "スター ボーナス: 量子ビット反転ゲートを使わない"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 300),
      (SCENARIO.numCorrect = 300),
      (SCENARIO.maxTicks = 9999);
  } else if ("measure" === e) {
    (t = !0),
      (SCENARIO.title = "QII.B: Discernment"),
      (SCENARIO.archive = "https://en.wikipedia.org/wiki/Quantum_tomography"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "・入力 A と B には同じ量子ビット列が入っています。",
      ),
      SCENARIO.info.push(
        "・A/B の各量子ビットが ▲ なら `0`、▶ なら `1` を C に出力します。",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [1, 1, 0, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !0),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, 0, 0, 0],
        0,
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 296; i++) {
      h = Math.round(Math.random());
      SCENARIO.QINPUTS[0].push(4 * h), SCENARIO.CINPUTS[0].push(h);
    }
    (SCENARIO.starCond = function () {
      return Helper.countGates("measure") <= 1;
    }),
      (SCENARIO.starText = "スター ボーナス: 測定ゲートを1つだけ使用"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 300),
      (SCENARIO.numCorrect = 270),
      (SCENARIO.maxTicks = 9999);
  } else if ("measureB" === e) {
    (t = !0),
      (SCENARIO.title = "QIII.E: Cascade"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "・入力 A は同じ量子ビット4個からなるグループの列です。",
      ),
      SCENARIO.info.push(
        "・各グループが ▲ の場合は `0`、▶ の場合は `1` を C に出力します。",
      ),
      (SCENARIO.channelsDir = [-1, 1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [1, 0, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !0),
      (SCENARIO.editable = BoardData.makeEditable(!0, [-1, 0, -1, 0, 0, 0], 0)),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 400; i++) {
      h = Math.round(Math.random());
      SCENARIO.QINPUTS[0].push(4 * h),
        SCENARIO.QINPUTS[0].push(4 * h),
        SCENARIO.QINPUTS[0].push(4 * h),
        SCENARIO.QINPUTS[0].push(4 * h),
        SCENARIO.CINPUTS[0].push(h);
    }
    (SCENARIO.starCond = function () {
      return RBOARD[TIMER.tick].success >= 390;
    }),
      (SCENARIO.starText = "スター ボーナス: 390回以上正解"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 400),
      (SCENARIO.numCorrect = 370),
      (SCENARIO.maxTicks = 9999);
  } else if ("preDenseB" === e) {
    (t = !0),
      (SCENARIO.title = "H.A: Superdense?"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "β には 400 個のランダムビットが入っています。各ビット `i` について:",
      ),
      SCENARIO.info.push(
        "・i=0 のときは A から1ビットを C へ送り、B のビットを捨てます。",
      ),
      SCENARIO.info.push(
        "・i=1 のときは B から1ビットを C へ送り、A のビットを捨てます。",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, 1, 1, -1]),
      (SCENARIO.channelsCol = [2, 2, 2, 0, 0, 2]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, -1, 0, -1],
        [0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0],
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 2),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], [], []]);
    for (i = 0; i < 400; i++) {
      (a = Math.round(Math.random())),
        (r = Math.round(Math.random())),
        (l = Math.round(Math.random()));
      SCENARIO.CINPUTS[0].push(a),
        SCENARIO.CINPUTS[1].push(r),
        SCENARIO.CINPUTS[2].push(l),
        0 === l ? SCENARIO.CINPUTS[3].push(a) : SCENARIO.CINPUTS[3].push(r);
    }
    (SCENARIO.starCond = function (e) {
      return e >= 340;
    }),
      (SCENARIO.starText = "スター ボーナス: 340回以上正解"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 400),
      (SCENARIO.numCorrect = 325),
      (SCENARIO.maxTicks = 9999);
  } else if ("simpleDistill" === e)
    (t = !0),
      (SCENARIO.title = "QIII.D: Distillary"),
      (SCENARIO.info = []),
      (SCENARIO.archive =
        "https://en.wikipedia.org/wiki/Entanglement_distillation"),
      SCENARIO.info.push(
        "・ベルペアとは ▲▲ と ▼▼ の等しい重ね合わせです。",
      ),
      SCENARIO.info.push(
        "・3 量子ビットのエンタングル状態を 2 量子ビットのベルペアに変換します。",
      ),
      SCENARIO.info.push(
        "・各ベルペアの片方を C に、もう片方を D に出力します。",
      ),
      (SCENARIO.journal = !0),
      (SCENARIO.channelsDir = [1, 1, -1, -1, 1, 1]),
      (SCENARIO.channelsCol = [0, 0, 0, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, 0, -1, -1, 0, 0],
        0,
        "simpleDistill",
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 3),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]),
      (SCENARIO.starCond = function () {
        return !0;
      }),
      (SCENARIO.starText = "スター ボーナス: おまけ！"),
      (SCENARIO.overlayType = "standard"),
      (SCENARIO.maxTrials = 50),
      (SCENARIO.numCorrect = 50),
      (SCENARIO.maxTicks = 9999);
  else if ("dense" === e) {
    (t = !0),
      (SCENARIO.title = "H.A+: Super-dense!"),
      (SCENARIO.info = []),
      (SCENARIO.archive = "https://en.wikipedia.org/wiki/Superdense_coding"),
      SCENARIO.info.push(
        "・A の完全なコピーを C に送ります（合計100ビット）。",
      ),
      SCENARIO.info.push(
        "・B の完全なコピーを D に送ります（合計100ビット）。",
      ),
      SCENARIO.info.push(
        "・境界を越えて送れる量子ビットは合計100個までです。",
      ),
      SCENARIO.info.push(
        "・α と β の量子ビットは完全なベルペアから始まります。",
      ),
      (SCENARIO.journal = !0),
      (SCENARIO.channelsDir = [-1, -1, -1, -1, -1, -1]),
      (SCENARIO.channelsCol = [2, 2, 2, 2, 1, 1]),
      (SCENARIO.hasEntanglers = !0),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, -1, -1, -1],
        [0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0],
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 2),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], [], []]);
    for (i = 0; i < 296; i++) {
      (a = Math.round(Math.random())), (r = Math.round(Math.random()));
      SCENARIO.CINPUTS[0].push(a),
        SCENARIO.CINPUTS[1].push(r),
        SCENARIO.CINPUTS[0].push(a),
        SCENARIO.CINPUTS[1].push(r);
    }
    (SCENARIO.starCond = function () {
      return TIMER.victoryTick <= 1e3;
    }),
      (SCENARIO.starText = "スター ボーナス: 1000ティック未満で成功"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 200),
      (SCENARIO.numCorrect = 200),
      (SCENARIO.maxTicks = 9999);
  } else if ("teleport" === e) {
    (t = !0),
      (SCENARIO.title = "H.B: Beam me up"),
      (SCENARIO.info = []),
      (SCENARIO.archive =
        "https://en.wikipedia.org/wiki/Quantum_teleportation"),
      SCENARIO.info.push("・A の完全なコピーを C に出力します。"),
      SCENARIO.info.push(
        "・境界を越えて送れるのは古典ビットのみです。",
      ),
      SCENARIO.info.push(
        "・α と β の量子ビットは完全なベルペアとして開始します。",
      ),
      (SCENARIO.journal = !0),
      (SCENARIO.channelsDir = [-1, 1, -1, 1, -1, -1]),
      (SCENARIO.channelsCol = [1, 0, 0, 0, 1, 1]),
      (SCENARIO.hasEntanglers = !0),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, 0, -1, 0, -1, -1],
        [0, 0, 0, 0, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0],
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 1),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 96; i++) {
      h = Math.floor(16 * Math.random());
      SCENARIO.QINPUTS[0].push(h);
    }
    (SCENARIO.starCond = function () {
      return TIMER.victoryTick <= 500;
    }),
      (SCENARIO.starText = "スター ボーナス: 500ティック未満で成功"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 100),
      (SCENARIO.numCorrect = 100),
      (SCENARIO.maxTicks = 9999);
  } else if ("distill" === e) {
    (t = !0),
      (SCENARIO.title = "H.B+: Beam me up II"),
      (SCENARIO.info = []),
      SCENARIO.info.push("・A の完全なコピーを C に出力します。"),
      SCENARIO.info.push(
        "・境界を越えて送れるのは古典ビットのみです。",
      ),
      SCENARIO.info.push(
        "・α と β の量子ビットは（弱い）エンタングル状態のペアから始まります。",
      ),
      (SCENARIO.journal = !0),
      (SCENARIO.channelsDir = [-1, 1, -1, 1, -1, -1]),
      (SCENARIO.channelsCol = [1, 0, 0, 0, 1, 1]),
      (SCENARIO.hasEntanglers = !0),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, 0, -1, 0, -1, -1],
        [0, 0, 0, 0, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0],
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 1),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 96; i++) {
      h = Math.floor(16 * Math.random());
      SCENARIO.QINPUTS[0].push(h);
    }
    (SCENARIO.starCond = function () {
      return 20 == RBOARD[TIMER.tick].success;
    }),
      (SCENARIO.starText = "スター ボーナス: 成功率100%達成"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 20),
      (SCENARIO.numCorrect = 15),
      (SCENARIO.maxTicks = 9999);
  } else if ("vaziraniQuantum" === e)
    (t = !0),
      (SCENARIO.title = "H.D+: Quality Control II"),
      (SCENARIO.archive =
        "https://en.wikipedia.org/wiki/Bernstein%E2%80%93Vazirani_algorithm"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "・下から上へ並ぶ制御チャンネルで、ターゲットへの制御フリップがある場合は `1`、ない場合は `0` を出力します。",
      ),
      SCENARIO.info.push(
        "・各装置は 1 つの入力でのみテストできます。",
      ),
      (SCENARIO.channelsDir = [1, 1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [0, 0, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [0, 0, -1, 0, 0, 0],
        0,
        "deviceA",
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.device = 1),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]),
      (SCENARIO.starCond = function () {
        return !0;
      }),
      (SCENARIO.starText = "スター ボーナス: おまけ！"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 3),
      (SCENARIO.numCorrect = 3),
      (SCENARIO.maxTicks = 9999),
      (SCENARIO.repetitions = 10),
      (SCENARIO.successRep = 10),
      (SCENARIO.currentRep = 1),
      (SCENARIO.correctReps = 0);
  else if ("quantumAdv1" === e)
    (t = !0),
      (SCENARIO.title = "H.E: Correlation"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "・A/B からの入力はエンタングル状態 (▲▲+▼▼) または非エンタングル状態のどちらかです。",
      ),
      SCENARIO.info.push(
        "・エンタングル状態には `0`、非エンタングル状態には `1` を出力します。",
      ),
      SCENARIO.info.push(
        "・各入力状態は同じものが 10 個ずつ与えられます。",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [1, 1, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, 0, 0, 0],
        0,
        "threebox",
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 10),
      (SCENARIO.device = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]),
      (SCENARIO.starCond = function () {
        return SCENARIO.correctReps >= 30;
      }),
      (SCENARIO.starText = "スター ボーナス: 30回以上正解"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 1),
      (SCENARIO.numCorrect = 1),
      (SCENARIO.maxTicks = 9999),
      (SCENARIO.repetitions = 32),
      (SCENARIO.successRep = 26),
      (SCENARIO.currentRep = 1),
      (SCENARIO.correctReps = 0);
  else if ("quantumAdv2" === e)
    (t = !0),
      (SCENARIO.title = "H.E+: Correlation II"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "・A/B の入力はエンタングル状態 (▲▲+▼▼ または ▲▼-▼▲) か、未知の積状態です。",
      ),
      SCENARIO.info.push(
        "・エンタングル状態なら `0`、積状態なら `1` を出力します。",
      ),
      SCENARIO.info.push(
        "・各入力状態は同じものが 11 個与えられます。",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [1, 1, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, 0, 0, 0],
        0,
        "threebox",
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 10),
      (SCENARIO.device = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]),
      (SCENARIO.starCond = function () {
        return SCENARIO.correctReps >= 30;
      }),
      (SCENARIO.starText = "スター ボーナス: 30回以上正解"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 1),
      (SCENARIO.numCorrect = 1),
      (SCENARIO.maxTicks = 9999),
      (SCENARIO.repetitions = 32),
      (SCENARIO.successRep = 26),
      (SCENARIO.currentRep = 1),
      (SCENARIO.correctReps = 0);
  else if ("quantumAdv3" === e)
    (t = !0),
      (SCENARIO.title = "QIII.G: Statistics"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "・A/B の入力は未知の最大エンタングル状態か、▲▲、▶▶、▼▼、◀◀ のいずれかの積状態です。",
      ),
      SCENARIO.info.push(
        "・エンタングル状態なら `0`、積状態なら `1` を出力します。",
      ),
      SCENARIO.info.push(
        "・各入力状態は同じものが 12 個与えられます。",
      ),
      (SCENARIO.journal = !0),
      (SCENARIO.channelsDir = [-1, -1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [1, 1, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, 0, 0, 0],
        0,
        "cornerbox",
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 11),
      (SCENARIO.device = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]),
      (SCENARIO.starCond = function () {
        return SCENARIO.correctReps >= 46;
      }),
      (SCENARIO.starText = "スター ボーナス: 46回以上正解"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 1),
      (SCENARIO.numCorrect = 1),
      (SCENARIO.maxTicks = 9999),
      (SCENARIO.repetitions = 50),
      (SCENARIO.successRep = 38),
      (SCENARIO.currentRep = 1),
      (SCENARIO.correctReps = 0);
  else if ("entChallengeA" === e) {
    (t = !0),
      (SCENARIO.title = "QII.E: Lock and Key"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "・装置は水平または垂直軸（ランダム）で 2 量子ビットを測定し、結果が同じなら `0` を返します。",
      ),
      SCENARIO.info.push(
        "・常に `0` が返るような 2 量子ビット入力を作りましょう。",
      ),
      (SCENARIO.journal = !0),
      (SCENARIO.channelsDir = [1, 1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [0, 0, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [0, 0, 0, 0, 0, 0],
        0,
        "key",
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 12),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 400; i++) SCENARIO.CINPUTS[0].push(0);
    (SCENARIO.starCond = function (e) {
      return 0 === Helper.countGates(["rotate"]);
    }),
      (SCENARIO.starText = "スター ボーナス: rotate ゲートを使わない"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 100),
      (SCENARIO.numCorrect = 100),
      (SCENARIO.maxTicks = 9999);
  } else if ("entChallengeB" === e)
    (t = !0),
      (SCENARIO.title = "H.F: GHZ"),
      (SCENARIO.info = []),
      (SCENARIO.archive =
        "https://en.wikipedia.org/wiki/Greenberger%E2%80%93Horne%E2%80%93Zeilinger_state"),
      SCENARIO.info.push("・初めに次のいずれか（8セット）を渡されます:"),
      SCENARIO.info.push("　・GHZ 状態 (▲▲▲▲+▼▼▼▼)"),
      SCENARIO.info.push("　・2 つのベルペアの積状態"),
      SCENARIO.info.push("　・4 量子ビットの積状態"),
      SCENARIO.info.push(
        "・状態が GHZ なら `0`、それ以外なら `1` を出力します。",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [1, 1, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, 0, 0, 0],
        0,
        "GHZ",
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 13),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]),
      (SCENARIO.starCond = function () {
        return SCENARIO.correctReps >= 30;
      }),
      (SCENARIO.starText = "スター ボーナス: 成功率100%達成"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 1),
      (SCENARIO.numCorrect = 1),
      (SCENARIO.maxTicks = 9999),
      (SCENARIO.repetitions = 30),
      (SCENARIO.successRep = 25),
      (SCENARIO.currentRep = 1),
      (SCENARIO.correctReps = 0);
  else if ("entChallengeC" === e)
    (t = !0),
      (SCENARIO.title = "H.F+: GHZ II"),
      (SCENARIO.info = []),
      SCENARIO.info.push("・初めに次のいずれか（8セット）を渡されます:"),
      SCENARIO.info.push("　・GHZ 状態 (▲▲▲▲+▼▼▼▼)"),
      SCENARIO.info.push(
        "　・2 つのベルペアの積状態または 4 量子ビットの積状態",
      ),
      SCENARIO.info.push(
        "・状態が GHZ なら `0`、それ以外なら `1` を出力します。",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [1, 1, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, 0, 0, 0],
        0,
        "GHZ",
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 13),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]),
      (SCENARIO.starCond = function () {
        return SCENARIO.correctReps >= 45;
      }),
      (SCENARIO.starText = "スター ボーナス: 45回以上正解！"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 1),
      (SCENARIO.numCorrect = 1),
      (SCENARIO.maxTicks = 9999),
      (SCENARIO.repetitions = 50),
      (SCENARIO.successRep = 42),
      (SCENARIO.currentRep = 1),
      (SCENARIO.correctReps = 0);
  else if ("extraA" === e) {
    (t = !0),
      (SCENARIO.title = "Clone-a-saurus"),
      (SCENARIO.info = []),
      (SCENARIO.archive = "https://en.wikipedia.org/wiki/No-cloning_theorem"),
      SCENARIO.info.push(
        "・入力 A は ▲、▶、▼、◀ のいずれか同じ状態の量子ビット4個からなるグループの列です。",
      ),
      SCENARIO.info.push(
        "・A の入力をそのまま C と D に複製して出力します。",
      ),
      (SCENARIO.channelsDir = [-1, 1, -1, -1, 1, 1]),
      (SCENARIO.channelsCol = [1, 0, 1, 1, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, 0, -1, -1, 0, 0],
        0,
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 500; i++) {
      h = Math.floor(4 * Math.random());
      SCENARIO.QINPUTS[0].push(4 * h),
        SCENARIO.QINPUTS[0].push(4 * h),
        SCENARIO.QINPUTS[0].push(4 * h),
        SCENARIO.QINPUTS[0].push(4 * h);
    }
    (SCENARIO.starCond = function (e) {
      return e >= 900;
    }),
      (SCENARIO.starText = "スター ボーナス: 900回以上正解"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 1e3),
      (SCENARIO.numCorrect = 750),
      (SCENARIO.maxTicks = 9999);
  } else if ("extraB" === e)
    (t = !0),
      (SCENARIO.title = "Refinery"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "・α と β のチャンネルには 500 組の弱くエンタングルした量子ビットが入っています。",
      ),
      SCENARIO.info.push(
        "・A/C にはエンタングル度が 0.85 を超える強いベルペアを出力してください。",
      ),
      SCENARIO.info.push(
        "・盤面上の量子ビットが 2 個以下になるとシナリオ終了です。",
      ),
      (SCENARIO.channelsDir = [-1, 1, -1, 1, -1, -11]),
      (SCENARIO.channelsCol = [0, 0, 0, 0, 1, 1]),
      (SCENARIO.hasEntanglers = !0),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, 0, -1, 0, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.device = 11),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.victoryCond = 3),
      (SCENARIO.starCond = function (e) {
        return e >= 50;
      }),
      (SCENARIO.starText = "スター ボーナス: エンタングルペア50組以上"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 9999),
      (SCENARIO.numCorrect = 30),
      (SCENARIO.maxTicks = 9999);
  else if ("extraC" === e) {
    (t = !0),
      (SCENARIO.title = "Addition++"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "・入力 A と B はそれぞれ 0〜15 の整数を表し、下位ビットから上位ビットへ並んだ 4 ビットの2進表現になっています。",
      ),
      SCENARIO.info.push(
        "・A と B の積を 8 ビットの2進数（下位ビットから）として C に出力します。",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [2, 2, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, 0, 0, 0],
        0,
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (a = [], r = [], i = 0; i < 4; i++)
      a.push(Math.round(Math.random())),
        r.push(Math.round(Math.random())),
        SCENARIO.CINPUTS[0].push(a[i]),
        SCENARIO.CINPUTS[1].push(r[i]);
    var d = a[0] + 2 * a[1] + 4 * a[2] + 8 * a[3],
      u = r[0] + 2 * r[1] + 4 * r[2] + 8 * r[3],
      c = (d * u).toString(2),
      I = c.length;
    SCENARIO.CINPUTS[2] = [0, 0, 0, 0, 0, 0, 0, 0];
    for (i = 0; i < I; i++) SCENARIO.CINPUTS[2][i] = parseInt(c[I - i - 1]);
    (SCENARIO.starCond = function () {
      return FIELD.cleanTiles >= (FIELD.cols - 2) * (FIELD.rows - 2) * 0.4;
    }),
      (SCENARIO.starText = "スター ボーナス: 床面積を60%未満使用 (現在:"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 8),
      (SCENARIO.numCorrect = 8),
      (SCENARIO.maxTicks = 9999),
      (SCENARIO.repetitions = 16),
      (SCENARIO.successRep = 16),
      (SCENARIO.currentRep = 1),
      (SCENARIO.correctReps = 0),
      (SCENARIO.victoryCond = 4);
  } else if ("binaryencode" === e)
    (t = !0),
      (SCENARIO.title = "CIII.E: Unary <<< Binary"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "・入力 A には N 個(4<N<16)の `1` が並び、その後に `0` が続いています。",
      ),
      SCENARIO.info.push(
        "・C には N を 4 ビットの2進数（下位ビットから）で出力します。",
      ),
      (SCENARIO.channelsDir = [-1, 1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [2, 0, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, 0, 0, 0],
        0,
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]),
      (SCENARIO.starCond = function () {
        return FIELD.cleanTiles >= (FIELD.cols - 2) * (FIELD.rows - 2) * 0.6;
      }),
      (SCENARIO.starText = "スター ボーナス: 床面積を40%未満使用 (現在:"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 4),
      (SCENARIO.numCorrect = 4),
      (SCENARIO.maxTicks = 9999),
      (SCENARIO.repetitions = 10),
      (SCENARIO.successRep = 10),
      (SCENARIO.currentRep = 1),
      (SCENARIO.correctReps = 0),
      (SCENARIO.victoryCond = 4);
  else if ("adder" === e) {
    (t = !0),
      (SCENARIO.title = "CIII.F: Calculon"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "・入力 A と B にはそれぞれ 64 ビットの2進数が入り、下位ビットから上位ビットへ並んでいます。",
      ),
      SCENARIO.info.push(
        "・2 つの整数の和を 64 ビットの2進数（下位ビットから）として C に出力します。",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [2, 2, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, 0, 0, 0],
        0,
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    var E = 0;
    for (i = 0; i < 58; i++) {
      if (57 === i) (a = 0), (r = 0), (l = (a + r + E) % 2);
      else
        (a = Math.round(Math.random())),
          (r = Math.round(Math.random())),
          (l = (a + r + E) % 2);
      SCENARIO.CINPUTS[0].push(a),
        SCENARIO.CINPUTS[1].push(r),
        SCENARIO.CINPUTS[2].push(l),
        (E = Math.floor((a + r + E) / 2));
    }
    (SCENARIO.starCond = function () {
      return FIELD.cleanTiles >= (FIELD.cols - 2) * (FIELD.rows - 2) * 0.6;
    }),
      (SCENARIO.starText = "スター ボーナス: 床面積を40%未満使用 (現在:"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 64),
      (SCENARIO.numCorrect = 64),
      (SCENARIO.maxTicks = 9999),
      (SCENARIO.victoryCond = 4);
  } else if ("extraD" === e)
    (t = !0),
      (SCENARIO.title = "Magnum Opus"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "・入力 A は 15 ビット以上の列、入力 B はちょうど 9 ビットの列を含みます。",
      ),
      SCENARIO.info.push(
        "・A の部分列が B と完全一致する場合は `1` を、そうでなければ `0` を C に出力します。",
      ),
      SCENARIO.info.push(
        "・`1` が4連続で現れた位置が A の列の終端を示します。",
      ),
      (SCENARIO.channelsDir = [-1, -1, -1, 1, 1, 1]),
      (SCENARIO.channelsCol = [2, 2, 2, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [-1, -1, -1, 0, 0, 0],
        0,
      )),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 1, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]),
      (SCENARIO.starCond = function () {
        return !0;
      }),
      (SCENARIO.starText = "スター ボーナス: おまけ！ご褒美です…"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 1),
      (SCENARIO.numCorrect = 1),
      (SCENARIO.maxTicks = 9999),
      (SCENARIO.repetitions = 25),
      (SCENARIO.successRep = 25),
      (SCENARIO.currentRep = 1),
      (SCENARIO.correctReps = 0);
  else if ("chsh" === e)
    (t = !0),
      (SCENARIO.title = "QIII.F: Jolly Cooperation"),
      (SCENARIO.archive =
        "https://en.wikipedia.org/wiki/CHSH_inequality#CHSH_game"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "・測定ゲートを調整して 84% 以上の勝率を目指します。",
      ),
      SCENARIO.info.push(
        "・毎ラウンド、アリスとボブは中央からランダムなビットを受け取り、別のビットを送り返します。",
      ),
      SCENARIO.info.push(
        "・受け取ったビットが共に '1' のときは異なるビットを、それ以外では同じビットを送ると勝利です。",
      ),
      (SCENARIO.journal = !0),
      (SCENARIO.channelsDir = [1, 1, 1, 1, -1, -1]),
      (SCENARIO.channelsCol = [0, 0, 0, 0, 1, 1]),
      (SCENARIO.hasEntanglers = !0),
      (SCENARIO.editable = BoardData.makeEditable(
        !0,
        [0, 0, 0, 0, 0, 0],
        0,
        "fixed",
      )),
      (SCENARIO.menuGrey = [
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]),
      (SCENARIO.editable[138] = 2),
      (SCENARIO.editable[174] = 2),
      (SCENARIO.editable[146] = 2),
      (SCENARIO.editable[186] = 2),
      (SCENARIO.editable[177] = 2),
      (SCENARIO.editable[183] = 2),
      (SCENARIO.starCond = function () {
        return !0;
      }),
      (SCENARIO.starText = "スター ボーナス: おまけ！"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 1800),
      (SCENARIO.numCorrect = 1800),
      (SCENARIO.maxTicks = 9999),
      (SCENARIO.victoryCond = 2),
      (SCENARIO.outputC = [84, 100]),
      (SCENARIO.outputD = [0, 100]),
      (SCENARIO.device = 12);
  else if ("freeA" === e) {
    (t = !0),
      (SCENARIO.disableOverlay = !0),
      (SCENARIO.title = "Free-form"),
      (SCENARIO.info = []),
      SCENARIO.info.push("・レベル設計用のテンプレートです。"),
      SCENARIO.info.push(
        "・隠し要素の配置をしやすいようオーバーレイは半透明になっています。",
      ),
      (SCENARIO.channelsDir = [0, 0, 0, 0, 0, 0]),
      (SCENARIO.channelsCol = [0, 0, 0, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(!1, [1, 1, 1, 1, 1, 1], 0)),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.device = 10),
      (SCENARIO.QINPUTS = [[], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 400; i++) {
      h = Math.floor(4 * Math.random());
      SCENARIO.QINPUTS[0].push(4 * h),
        SCENARIO.QINPUTS[0].push(4 * h),
        SCENARIO.QINPUTS[0].push(4 * h),
        SCENARIO.QINPUTS[0].push(4 * h),
        SCENARIO.CINPUTS[0].push(h);
    }
    (SCENARIO.starCond = function () {
      return RBOARD[TIMER.tick].success >= 390;
    }),
      (SCENARIO.starText = "スター ボーナス: 390回以上正解"),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 1e3),
      (SCENARIO.numCorrect = 1e3),
      (SCENARIO.maxTicks = 9999),
      (SCENARIO.starCond = function () {
        return !0;
      }),
      (SCENARIO.starText = ""),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 200),
      (SCENARIO.numCorrect = 200),
      (SCENARIO.maxTicks = 9999);
  } else if ("freeB" === e) {
    (t = !0),
      (SCENARIO.disableOverlay = !0),
      (SCENARIO.title = "Free-form"),
      (SCENARIO.info = []),
      SCENARIO.info.push(
        "・各ラウンドでアリスとボブは中央からランダムなビットを受け取り、別のビットを中央へ返送します。",
      ),
      SCENARIO.info.push(
        "・受け取ったビットが両方とも '1' の場合は異なるビットを、それ以外は同じビットを送ると勝利です。",
      ),
      SCENARIO.info.push(
        "・勝率を最大化するよう測定ゲートを調整してください。",
      ),
      (SCENARIO.channelsDir = [0, 0, 0, 0, 0, 0]),
      (SCENARIO.channelsCol = [1, 1, 1, 1, 1, 1]),
      (SCENARIO.hasEntanglers = !0),
      (SCENARIO.editable = BoardData.makeEditable(!1, [1, 1, 1, 1, 1, 1], 0)),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 96; i++) {
      (a = Math.round(Math.random())), (r = Math.round(Math.random()));
      SCENARIO.QINPUTS[0].push(8 * a),
        SCENARIO.QINPUTS[1].push(8 * r),
        SCENARIO.QINPUTS[2].push(8 * (a + r));
      var S = Math.round(Math.random()),
        f = Math.round(Math.random());
      SCENARIO.CINPUTS[0].push(S),
        SCENARIO.CINPUTS[1].push(f),
        SCENARIO.CINPUTS[2].push((S + f) % 2);
    }
    (SCENARIO.starCond = function () {
      return !0;
    }),
      (SCENARIO.starText = ""),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 20),
      (SCENARIO.numCorrect = 15),
      (SCENARIO.maxTicks = 9999);
  } else if ("freeC" === e) {
    (t = !0),
      (SCENARIO.disableOverlay = !1),
      (SCENARIO.title = "Free-form"),
      (SCENARIO.info = []),
      SCENARIO.info.push("・テストや実験用に空の工場を提供します。"),
      (SCENARIO.channelsDir = [1, 1, 1, 1, 1, 1]),
      (SCENARIO.channelsCol = [0, 0, 0, 0, 0, 0]),
      (SCENARIO.hasEntanglers = !1),
      (SCENARIO.editable = BoardData.makeEditable(!0, [1, 1, 1, 1, 1, 1], 0)),
      (SCENARIO.menuGrey = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]),
      (SCENARIO.division = 0),
      (SCENARIO.scoreHeightRaw = 4.5),
      (SCENARIO.scoreHeight = SCENARIO.scoreHeightRaw * FIELD.tileHeight),
      (SCENARIO.QINPUTS = [[], [], [], []]),
      (SCENARIO.CINPUTS = [[], [], []]);
    for (i = 0; i < 96; i++) {
      (a = Math.round(Math.random())), (r = Math.round(Math.random()));
      SCENARIO.QINPUTS[0].push(8 * a),
        SCENARIO.QINPUTS[1].push(8 * r),
        SCENARIO.QINPUTS[2].push(8 * (a + r));
      (S = Math.round(Math.random())), (f = Math.round(Math.random()));
      SCENARIO.CINPUTS[0].push(S),
        SCENARIO.CINPUTS[1].push(f),
        SCENARIO.CINPUTS[2].push((S + f) % 2);
    }
    (SCENARIO.starCond = function () {
      return !0;
    }),
      (SCENARIO.starText = ""),
      SCENARIO.overlayType,
      (SCENARIO.maxTrials = 1),
      (SCENARIO.numCorrect = 1),
      (SCENARIO.maxTicks = 9999);
  }
  return (
    !!t &&
    (ResetConsts.all(),
    Menu.initialize(),
    Timer.initialize(),
    ResetConsts.refresh(),
    CTRLMENU.reset(CANV.menu2),
    !0)
  );
}
