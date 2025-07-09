class ControlButton {
  constructor(e, t, i, a, r, s, o = 0) {
    (this._label = e),
      (this._i0 = t),
      (this._j0 = i),
      (this._hovered = !1),
      (this._selected = !1),
      (this._tileType = a),
      (this._tileProperties = r),
      (this._tooltip = s),
      (this._menuState = o),
      (this._animating = !1),
      (this._opening = 0),
      (this._transition = { status: !1, start: -1, stop: -1 }),
      (this._startTime = 0),
      (this._openTime = 0),
      (this._maxTime = 400);
  }
  get label() {
    return this._label;
  }
  get i0() {
    return this._i0;
  }
  get j0() {
    return this._j0;
  }
  get hovered() {
    return this._hovered;
  }
  get selected() {
    return this._selected;
  }
  get tileType() {
    return this._tileType;
  }
  get tileProperties() {
    return this._tileProperties;
  }
  get tooltip() {
    return this._tooltip;
  }
  get menuState() {
    return this._menuState;
  }
  get animating() {
    return this._animating;
  }
  get transition() {
    return this._transition;
  }
  set label(e) {
    this._label = e;
  }
  set i0(e) {
    this._i0 = e;
  }
  set j0(e) {
    this._j0 = e;
  }
  set hovered(e) {
    (this._hovered = e), (this._tileProperties.hovered = e);
  }
  set selected(e) {
    this._selected = e;
  }
  set tileType(e) {
    this._tileType = e;
  }
  set tileProperties(e) {
    this._tileProperties = e;
  }
  set tooltip(e) {
    this._tooltip = e;
  }
  set menuState(e) {
    this._menuState = e;
  }
  set animating(e) {
    this._animating = e;
  }
  set transition(e) {
    this._transition = e;
  }
  startAnimation() {
    (this._animating = !0), (this._startTime = TIMER.totalTime);
  }
  open() {
    (this._openTime = TIMER.totalTime), (this._opening = 1);
  }
  close() {
    (this._openTime = TIMER.totalTime), (this._opening = -1);
  }
  getPath(e) {
    if (this._opening)
      if (Math.abs(TIMER.totalTime - this._openTime) >= this._maxTime)
        -1 === this._opening
          ? (this._tileProperties.closure = 1)
          : (this._tileProperties.closure = 0),
          (this._opening = 0);
      else {
        var t = (TIMER.totalTime - this._openTime) / this._maxTime,
          i = (1 - Math.cos(Math.PI * t)) / 2;
        -1 === this._opening
          ? (this._tileProperties.closure = i)
          : (this._tileProperties.closure = 1 - i);
      }
    if (this._animating)
      if (Math.abs(TIMER.totalTime - this._startTime) >= this._maxTime)
        (this._animating = !1), (this._tileProperties.depth = 0);
      else {
        var a = (TIMER.totalTime - this._startTime) / this._maxTime,
          r = (1 - Math.cos(2 * Math.PI * a)) / 2;
        this._tileProperties.depth = r;
      }
    if (!0 === this._transition.status)
      if (Math.abs(TIMER.totalTime - this._startTime) >= this._maxTime)
        (this._tileProperties.type = this._transition.stop),
          (this._transition = { status: !1, start: -1, stop: -1 });
      else {
        var s = (TIMER.totalTime - this._startTime) / this._maxTime,
          o = (1 - Math.cos(2 * Math.PI * s)) / 2;
        (this._tileProperties.flash = o),
          (this._tileProperties.type =
            s <= 0.5 ? this._transition.start : this._transition.stop);
      }
    return PathsC.ctrl(e, this.tileType, this.tileProperties);
  }
  gridPos(e, t) {
    var i = this.x0 + e * this.tileWidth + (e + 1) * this.tileMargin,
      a = this.y0 + t * this.tileWidth + (t + 1) * this.tileMargin;
    return { x0: i, y0: a };
  }
}
const DESCRIPTIONS = { monologue: [], plaque0: "", plaque1: [] };
DESCRIPTIONS.plaque1.push("チュートリアル"),
  DESCRIPTIONS.plaque1.push("• 新入社員向けの標準的なオンボーディング作業。"),
  DESCRIPTIONS.plaque1.push(
    "• 基本的な工場プロトコルとユーザー操作方法を指導。",
  ),
  (DESCRIPTIONS.plaque2 = []),
  DESCRIPTIONS.plaque2.push("クラシック I"),
  DESCRIPTIONS.plaque2.push(
    "• 古典計算とビット操作の入門課題。",
  ),
  DESCRIPTIONS.plaque2.push(
    "• 新入社員がクラシックゲートの機能に慣れるための内容。",
  ),
  (DESCRIPTIONS.plaque2U = []),
  DESCRIPTIONS.plaque2U.push("アンロック:"),
  DESCRIPTIONS.plaque2U.push("`Tutorial` を完了"),
  (DESCRIPTIONS.plaque3 = []),
  DESCRIPTIONS.plaque3.push("クラシック II"),
  DESCRIPTIONS.plaque3.push(
    "• より高度な古典計算課題。",
  ),
  DESCRIPTIONS.plaque3.push(
    "• 課題の完了は回路とビット論理を十分理解している証拠。",
  ),
  (DESCRIPTIONS.plaque3U = []),
  DESCRIPTIONS.plaque3U.push("アンロック:"),
  DESCRIPTIONS.plaque3U.push("`Classic I` を 5 個達成"),
  (DESCRIPTIONS.plaque4 = []),
  DESCRIPTIONS.plaque4.push("クラシック III"),
  DESCRIPTIONS.plaque4.push("• 発展的な古典計算課題。"),
  DESCRIPTIONS.plaque4.push(
    "• 課題を達成するにはクラシックゲートを創造的に使いこなし、その機能を熟知する必要がある。",
  ),
  (DESCRIPTIONS.plaque4U = []),
  DESCRIPTIONS.plaque4U.push("アンロック:"),
  DESCRIPTIONS.plaque4U.push("`Classic II` を 4 個達成"),
  (DESCRIPTIONS.plaque5 = []),
  DESCRIPTIONS.plaque5.push("量子 I"),
  DESCRIPTIONS.plaque5.push(
    "• 量子計算と量子ビット操作の入門課題。",
  ),
  DESCRIPTIONS.plaque5.push(
    "• 新入社員が量子ゲートの機能に慣れるための内容。",
  ),
  (DESCRIPTIONS.plaque5U = []),
  DESCRIPTIONS.plaque5U.push("アンロック:"),
  DESCRIPTIONS.plaque5U.push("`Classic I` を 5 個達成"),
  (DESCRIPTIONS.plaque6 = []),
  DESCRIPTIONS.plaque6.push("量子 II"),
  DESCRIPTIONS.plaque6.push(
    "• より高度な量子計算課題。",
  ),
  DESCRIPTIONS.plaque6.push(
    "• ユニタリー回路、量子エンタングルメント、測定確率を学ぶ。",
  ),
  (DESCRIPTIONS.plaque6U = []),
  DESCRIPTIONS.plaque6U.push("アンロック:"),
  DESCRIPTIONS.plaque6U.push("`Quantum I` を 6 個達成"),
  (DESCRIPTIONS.plaque7 = []),
  DESCRIPTIONS.plaque7.push("量子 III"),
  DESCRIPTIONS.plaque7.push("• 発展的な量子計算課題。"),
  DESCRIPTIONS.plaque7.push(
    "• 課題を達成するには量子ゲートを創造的に使用し、その機能を熟知する必要がある。",
  ),
  (DESCRIPTIONS.plaque7U = []),
  DESCRIPTIONS.plaque7U.push("アンロック:"),
  DESCRIPTIONS.plaque7U.push("`Quantum II` を 5 個達成"),
  (DESCRIPTIONS.plaque8 = []),
  (DESCRIPTIONS.plaque9 = []),
  DESCRIPTIONS.plaque9.push("ハイブリッド"),
  DESCRIPTIONS.plaque9.push("• 最終的な難関。"),
  DESCRIPTIONS.plaque9.push(
    "• すべてのクラシックゲートと量子ゲートの熟知、さらに高度な量子エンタングルメント制御が必要。",
  ),
  (DESCRIPTIONS.plaque9U = []),
  DESCRIPTIONS.plaque9U.push("アンロック:"),
  DESCRIPTIONS.plaque9U.push("`Classic III` を 4 個達成"),
  DESCRIPTIONS.plaque9U.push("`Quantum III` を 4 個達成"),
  (DESCRIPTIONS.award0 = []),
  DESCRIPTIONS.award0.push("アワード"),
  DESCRIPTIONS.award0.push("• `classic` 計算レベルをすべてクリア。"),
  (DESCRIPTIONS.award1 = []),
  DESCRIPTIONS.award1.push("アワード"),
  DESCRIPTIONS.award1.push("• `classic` 計算レベルでボーナススターを全獲得。"),
  (DESCRIPTIONS.award2 = []),
  DESCRIPTIONS.award2.push("アワード"),
  DESCRIPTIONS.award2.push("• `quantum` 計算レベルをすべてクリア。"),
  (DESCRIPTIONS.award3 = []),
  DESCRIPTIONS.award3.push("アワード"),
  DESCRIPTIONS.award3.push("• `quantum` 計算レベルでボーナススターを全獲得。"),
  (DESCRIPTIONS.award4 = []),
  DESCRIPTIONS.award4.push("アワード"),
  DESCRIPTIONS.award4.push("• `hybrid` 計算レベルをすべてクリア。"),
  (DESCRIPTIONS.award5 = []),
  DESCRIPTIONS.award5.push("アワード"),
  DESCRIPTIONS.award5.push("• `hybrid` 計算レベルでボーナススターを全獲得。"),
  (DESCRIPTIONS.award6 = []),
  DESCRIPTIONS.award6.push("アワード"),
  DESCRIPTIONS.award6.push("• すべてのボーナスレベルをクリア。"),
  (DESCRIPTIONS.award7 = []),
  DESCRIPTIONS.award7.push("アワード"),
  DESCRIPTIONS.award7.push("• すべてのボーナスレベルでボーナススターを獲得。"),
  (DESCRIPTIONS.allTitles = [
    ["Boolean", "Logistician"],
    ["Boolean", "Master"],
    ["Quantum", "Adept"],
    ["Quantum", "Artificer"],
    ["Entanglement", "Maestro"],
    ["Entanglement", "Savant"],
    ["Adeptus", "Mechanicus"],
    ["The", "Omnissiah"],
  ]),
  (DESCRIPTIONS.tut1 = []),
  DESCRIPTIONS.tut1.push("ワイヤード"),
  DESCRIPTIONS.tut1.push("技能評価:"),
  DESCRIPTIONS.tut1.push("• 青(ビット)線と赤(量子ビット)線の配置。"),
  (DESCRIPTIONS.tut2 = []),
  DESCRIPTIONS.tut2.push("ゲート管理"),
  DESCRIPTIONS.tut2.push("技能評価:"),
  DESCRIPTIONS.tut2.push("• ゲートを使ったビットと量子ビットの変換。"),
  (DESCRIPTIONS.tut3 = []),
  DESCRIPTIONS.tut3.push("ザ・マニピュレーター"),
  DESCRIPTIONS.tut3.push("技能評価:"),
  DESCRIPTIONS.tut3.push("• ゲートのプロパティ設定能力。"),
  (DESCRIPTIONS.tut4 = []),
  DESCRIPTIONS.tut4.push("CTRL-Z"),
  DESCRIPTIONS.tut4.push("技能評価:"),
  DESCRIPTIONS.tut4.push("• ゲートの向きと配置。"),
  (DESCRIPTIONS.tut5 = []),
  DESCRIPTIONS.tut5.push("無駄な可能性"),
  DESCRIPTIONS.tut5.push("技能評価:"),
  DESCRIPTIONS.tut5.push("• ワイヤとゲートの削除。"),
  (DESCRIPTIONS.tut6 = []),
  DESCRIPTIONS.tut6.push("償い"),
  DESCRIPTIONS.tut6.push("技能評価:"),
  DESCRIPTIONS.tut6.push(
    "• 設計図を使った異なるデザインの保存と読み出し。",
  ),
  DESCRIPTIONS.tut6.push("• コピー/カット機能の使用。"),
  (DESCRIPTIONS.class1 = []),
  DESCRIPTIONS.class1.push("ストレートシューター"),
  DESCRIPTIONS.class1.push("技能評価:"),
  DESCRIPTIONS.class1.push(
    "• `re-zero` ゲートと `inversion` ゲートの使用。",
  ),
  (DESCRIPTIONS.class2 = []),
  DESCRIPTIONS.class2.push("ジッピディスプリット"),
  DESCRIPTIONS.class2.push("技能評価:"),
  DESCRIPTIONS.class2.push("• `combine` ゲートと `split` ゲートの使用。"),
  (DESCRIPTIONS.class3 = []),
  DESCRIPTIONS.class3.push("スイッチャルー"),
  DESCRIPTIONS.class3.push("技能評価:"),
  DESCRIPTIONS.class3.push("• 古典 `control` ゲートの使用。"),
  (DESCRIPTIONS.class4 = []),
  DESCRIPTIONS.class4.push("nSync"),
  DESCRIPTIONS.class4.push("技能評価:"),
  DESCRIPTIONS.class4.push("• `sync` ゲートの使用。"),
  (DESCRIPTIONS.class5 = []),
  DESCRIPTIONS.class5.push("待ちぼうけ"),
  DESCRIPTIONS.class5.push("技能評価:"),
  DESCRIPTIONS.class5.push("• `delay` ゲートの使用。"),
  (DESCRIPTIONS.class6 = []),
  DESCRIPTIONS.class6.push("創世"),
  DESCRIPTIONS.class6.push("技能評価:"),
  DESCRIPTIONS.class6.push("• `bit creation` ゲートの基本使用。"),
  (DESCRIPTIONS.class7 = []),
  DESCRIPTIONS.class7.push("ザ・カウント"),
  DESCRIPTIONS.class7.push("技能評価:"),
  DESCRIPTIONS.class7.push(
    "• `bit creation` ゲートを利用したカウンター作成。",
  ),
  (DESCRIPTIONS.classPuzzle1 = []),
  DESCRIPTIONS.classPuzzle1.push("帯域幅"),
  DESCRIPTIONS.classPuzzle1.push("技能評価:"),
  DESCRIPTIONS.classPuzzle1.push("• ビットストリームの結合と分離。"),
  (DESCRIPTIONS.classPuzzle2 = []),
  DESCRIPTIONS.classPuzzle2.push("ハーフアダー"),
  DESCRIPTIONS.classPuzzle2.push("技能評価:"),
  DESCRIPTIONS.classPuzzle2.push("• 初歩的なビット論理。"),
  (DESCRIPTIONS.classPuzzle4 = []),
  DESCRIPTIONS.classPuzzle4.push("メモリ"),
  DESCRIPTIONS.classPuzzle4.push("技能評価:"),
  DESCRIPTIONS.classPuzzle4.push("• ビット値の保存と読み出し。"),
  (DESCRIPTIONS.classPuzzle5 = []),
  DESCRIPTIONS.classPuzzle5.push("三進"),
  DESCRIPTIONS.classPuzzle5.push("技能評価:"),
  DESCRIPTIONS.classPuzzle5.push("• カスタムビット列の生成。"),
  (DESCRIPTIONS.classPuzzle6 = []),
  DESCRIPTIONS.classPuzzle6.push("繰り返し"),
  DESCRIPTIONS.classPuzzle6.push("技能評価:"),
  DESCRIPTIONS.classPuzzle6.push("• 古典エラー訂正。"),
  (DESCRIPTIONS.classPuzzle7 = []),
  DESCRIPTIONS.classPuzzle7.push("スワップミート"),
  DESCRIPTIONS.classPuzzle7.push("技能評価:"),
  DESCRIPTIONS.classPuzzle7.push(
    "• 古典制御ゲートの創造的な使用。",
  ),
  (DESCRIPTIONS.classPuzzle8 = []),
  DESCRIPTIONS.classPuzzle8.push("厳密な等価性"),
  DESCRIPTIONS.classPuzzle8.push("技能評価:"),
  DESCRIPTIONS.classPuzzle8.push(
    "• 高度な古典回路設計とビット論理。",
  ),
  (DESCRIPTIONS.classPuzzle3 = []),
  DESCRIPTIONS.classPuzzle3.push("AND 節約"),
  DESCRIPTIONS.classPuzzle3.push("技能評価:"),
  DESCRIPTIONS.classPuzzle3.push(
    "• 高度な古典回路設計とビット論理。",
  ),
  (DESCRIPTIONS.classPuzzle3B = []),
  DESCRIPTIONS.classPuzzle3B.push("XOR 節約"),
  DESCRIPTIONS.classPuzzle3B.push("技能評価:"),
  DESCRIPTIONS.classPuzzle3B.push(
    "• 高度な古典回路設計とビット論理。",
  ),
  (DESCRIPTIONS.classPuzzle9 = []),
  DESCRIPTIONS.classPuzzle9.push("干し草の山"),
  DESCRIPTIONS.classPuzzle9.push("技能評価:"),
  DESCRIPTIONS.classPuzzle9.push("• 古典メモリの使用。"),
  DESCRIPTIONS.classPuzzle9.push(
    "• 高度な古典回路設計とビット論理。",
  ),
  (DESCRIPTIONS.vaziraniClassic = []),
  DESCRIPTIONS.vaziraniClassic.push("品質管理"),
  DESCRIPTIONS.vaziraniClassic.push("技能評価:"),
  DESCRIPTIONS.vaziraniClassic.push("• デバイス試験手順。"),
  (DESCRIPTIONS.binaryencode = []),
  DESCRIPTIONS.binaryencode.push("Unary <<< Binary"),
  DESCRIPTIONS.binaryencode.push("技能評価:"),
  DESCRIPTIONS.binaryencode.push(
    "• 高度な古典回路設計とビット論理。",
  ),
  DESCRIPTIONS.binaryencode.push("• バイナリエンコードの理解。"),
  (DESCRIPTIONS.adder = []),
  DESCRIPTIONS.adder.push("Calculon"),
  DESCRIPTIONS.adder.push("技能評価:"),
  DESCRIPTIONS.adder.push("• 高度な古典回路設計とビット論理。"),
  DESCRIPTIONS.adder.push("• 2進加算の理解。"),
  (DESCRIPTIONS.quant1 = []),
  DESCRIPTIONS.quant1.push("反転"),
  DESCRIPTIONS.quant1.push("技能評価:"),
  DESCRIPTIONS.quant1.push("• `rotation` と `flip` 量子ゲートの使用。"),
  DESCRIPTIONS.quant1.push(
    "• 量子回路における可逆性の理解。",
  ),
  (DESCRIPTIONS.quant2 = []),
  DESCRIPTIONS.quant2.push("ワイヤ交差"),
  DESCRIPTIONS.quant2.push("技能評価:"),
  DESCRIPTIONS.quant2.push("• `measure` と `bit-to-qubit` ゲートの使用。"),
  DESCRIPTIONS.quant2.push("• ビットと量子ビットの相互変換。"),
  (DESCRIPTIONS.quant3A = []),
  DESCRIPTIONS.quant3A.push("ダイスロール"),
  DESCRIPTIONS.quant3A.push("技能評価:"),
  DESCRIPTIONS.quant3A.push(
    "• 量子ビット測定結果の確率理解。",
  ),
  (DESCRIPTIONS.quant3 = []),
  DESCRIPTIONS.quant3.push("ロッシー"),
  DESCRIPTIONS.quant3.push("技能評価:"),
  DESCRIPTIONS.quant3.push("• 未知の量子ビット状態の最適推定。"),
  (DESCRIPTIONS.quant4 = []),
  DESCRIPTIONS.quant4.push("ストレートシューター II"),
  DESCRIPTIONS.quant4.push("技能評価:"),
  DESCRIPTIONS.quant4.push(
    "• `measure` ゲートで量子ビット状態を変換。",
  ),
  (DESCRIPTIONS.quant5 = []),
  DESCRIPTIONS.quant5.push("量子制御"),
  DESCRIPTIONS.quant5.push("技能評価:"),
  DESCRIPTIONS.quant5.push(
    "• 量子 `control` ゲートと量子回転の併用。",
  ),
  (DESCRIPTIONS.quant6 = []),
  DESCRIPTIONS.quant6.push("量子制御 II"),
  DESCRIPTIONS.quant6.push("技能評価:"),
  DESCRIPTIONS.quant6.push(
    "• 量子 `control` ゲートと量子反転の併用。",
  ),
  (DESCRIPTIONS.quant6B = []),
  DESCRIPTIONS.quant6B.push("重ね合わせ"),
  DESCRIPTIONS.quant6B.push("技能評価:"),
  DESCRIPTIONS.quant6B.push(
    "• 量子ビットの基底状態と重ね合わせの理解。",
  ),
  (DESCRIPTIONS.quant7 = []),
  DESCRIPTIONS.quant7.push("一度測り二度切る"),
  DESCRIPTIONS.quant7.push("技能評価:"),
  DESCRIPTIONS.quant7.push(
    "• 量子もつれ状態の測定結果の基礎理解。",
  ),
  (DESCRIPTIONS.measure = []),
  DESCRIPTIONS.measure.push("識別"),
  DESCRIPTIONS.measure.push("技能評価:"),
  DESCRIPTIONS.measure.push(
    "• 測定結果確率の応用理解。",
  ),
  DESCRIPTIONS.measure.push("• 初歩的な量子状態トモグラフィー。"),
  (DESCRIPTIONS.adderB = []),
  DESCRIPTIONS.adderB.push("ドライブバイ XOR"),
  DESCRIPTIONS.adderB.push("技能評価:"),
  DESCRIPTIONS.adderB.push(
    "• 量子制御ゲートによる量子ビット論理の実装。",
  ),
  (DESCRIPTIONS.adderC = []),
  DESCRIPTIONS.adderC.push("ドライブバイ AND"),
  DESCRIPTIONS.adderC.push("技能評価:"),
  DESCRIPTIONS.adderC.push(
    "• 量子制御ゲートによる量子ビット論理の実装。",
  ),
  (DESCRIPTIONS.entChallengeA = []),
  DESCRIPTIONS.entChallengeA.push("ロック＆キー"),
  DESCRIPTIONS.entChallengeA.push("技能評価:"),
  DESCRIPTIONS.entChallengeA.push(
    "• もつれ量子ビット測定の相関に関する応用理解。",
  ),
  (DESCRIPTIONS.quantChallengeB = []),
  DESCRIPTIONS.quantChallengeB.push("解析"),
  DESCRIPTIONS.quantChallengeB.push("技能評価:"),
  DESCRIPTIONS.quantChallengeB.push(
    "• もつれ状態へのユニタリー変換の理解。",
  ),
  DESCRIPTIONS.quantChallengeB.push("• 状態解析ツールの使用。"),
  (DESCRIPTIONS.quantChallengeC = []),
  DESCRIPTIONS.quantChallengeC.push("マジックミラー"),
  DESCRIPTIONS.quantChallengeC.push("技能評価:"),
  DESCRIPTIONS.quantChallengeC.push(
    "• 量子回路の可逆性に関する応用理解。",
  ),
  (DESCRIPTIONS.quantChallengeD = []),
  DESCRIPTIONS.quantChallengeD.push("偶奇"),
  DESCRIPTIONS.quantChallengeD.push("技能評価:"),
  DESCRIPTIONS.quantChallengeD.push(
    "• もつれ量子ビット測定の相関に関する応用理解。",
  ),
  (DESCRIPTIONS.quantChallengeA = []),
  DESCRIPTIONS.quantChallengeA.push("何度でも挑戦"),
  DESCRIPTIONS.quantChallengeA.push("技能評価:"),
  DESCRIPTIONS.quantChallengeA.push("• 測定ゲートの創造的な使用."),
  (DESCRIPTIONS.quantChallengeE = []),
  DESCRIPTIONS.quantChallengeE.push("スワップミート II"),
  DESCRIPTIONS.quantChallengeE.push("技能評価:"),
  DESCRIPTIONS.quantChallengeE.push(
    "• 量子制御ゲートの創造的な使用。",
  ),
  (DESCRIPTIONS.quantChallengeF = []),
  DESCRIPTIONS.quantChallengeF.push("リレー"),
  DESCRIPTIONS.quantChallengeF.push("技能評価:"),
  DESCRIPTIONS.quantChallengeF.push("• 入門的なエンタングルメントスワッピング。"),
  (DESCRIPTIONS.simpleDistill = []),
  DESCRIPTIONS.simpleDistill.push("蒸留所"),
  DESCRIPTIONS.simpleDistill.push("技能評価:"),
  DESCRIPTIONS.simpleDistill.push("• 入門的なエンタングルメント蒸留。"),
  (DESCRIPTIONS.measureB = []),
  DESCRIPTIONS.measureB.push("カスケード"),
  DESCRIPTIONS.measureB.push("技能評価:"),
  DESCRIPTIONS.measureB.push("• 連続測定と状態トモグラフィー。"),
  (DESCRIPTIONS.chsh = []),
  DESCRIPTIONS.chsh.push("陽気な協力"),
  DESCRIPTIONS.chsh.push("技能評価:"),
  DESCRIPTIONS.chsh.push("• 量子エンタングルメントと相関。"),
  DESCRIPTIONS.chsh.push("• 量子ゲーム理論。"),
  (DESCRIPTIONS.quantumAdv3 = []),
  DESCRIPTIONS.quantumAdv3.push("統計"),
  DESCRIPTIONS.quantumAdv3.push("技能評価:"),
  DESCRIPTIONS.quantumAdv3.push(
    "• もつれ状態の測定確率とトモグラフィー。",
  ),
  (DESCRIPTIONS.preDenseB = []),
  DESCRIPTIONS.preDenseB.push("スーパー密？"),
  DESCRIPTIONS.preDenseB.push("技能評価:"),
  DESCRIPTIONS.preDenseB.push(
    "• 古典データの量子ビットへのエンコード/デコード。",
  ),
  (DESCRIPTIONS.teleport = []),
  DESCRIPTIONS.teleport.push("ビームアップ"),
  DESCRIPTIONS.teleport.push("技能評価:"),
  DESCRIPTIONS.teleport.push(
    "• 量子プロトコルで資源としてエンタングルメントを利用。",
  ),
  (DESCRIPTIONS.quantErrorA = []),
  DESCRIPTIONS.quantErrorA.push("訂正"),
  DESCRIPTIONS.quantErrorA.push("技能評価:"),
  DESCRIPTIONS.quantErrorA.push("• 入門的な量子誤り訂正。"),
  (DESCRIPTIONS.quantChallengeG = []),
  DESCRIPTIONS.quantChallengeG.push("後ろ前"),
  DESCRIPTIONS.quantChallengeG.push("技能評価:"),
  DESCRIPTIONS.quantChallengeG.push(
    "• 量子制御ゲートの高度な使用。",
  ),
  (DESCRIPTIONS.quantumAdv1 = []),
  DESCRIPTIONS.quantumAdv1.push("相関"),
  DESCRIPTIONS.quantumAdv1.push("技能評価:"),
  DESCRIPTIONS.quantumAdv1.push(
    "• もつれ量子状態の高度なトモグラフィー。",
  ),
  (DESCRIPTIONS.entChallengeB = []),
  DESCRIPTIONS.entChallengeB.push("GHZ"),
  DESCRIPTIONS.entChallengeB.push("技能評価:"),
  DESCRIPTIONS.entChallengeB.push(
    "• 多量子ビットエンタングル状態の操作と評価。",
  ),
  (DESCRIPTIONS.dense = []),
  DESCRIPTIONS.dense.push("超高密度！"),
  DESCRIPTIONS.dense.push("技能評価:"),
  DESCRIPTIONS.dense.push(
    "• 量子プロトコルで資源としてエンタングルメントを利用。",
  ),
  (DESCRIPTIONS.distill = []),
  DESCRIPTIONS.distill.push("ビームアップ II"),
  DESCRIPTIONS.distill.push("技能評価:"),
  DESCRIPTIONS.distill.push(
    "• 量子プロトコルにおける実践的なエンタングルメント蒸留。",
  ),
  (DESCRIPTIONS.quantErrorB = []),
  DESCRIPTIONS.quantErrorB.push("訂正 II"),
  DESCRIPTIONS.quantErrorB.push("技能評価:"),
  DESCRIPTIONS.quantErrorB.push(
    "• より高度な量子誤り訂正。",
  ),
  (DESCRIPTIONS.vaziraniQuantum = []),
  DESCRIPTIONS.vaziraniQuantum.push("品質管理 II"),
  DESCRIPTIONS.vaziraniQuantum.push("技能評価:"),
  DESCRIPTIONS.vaziraniQuantum.push(
    "• 計算上の優位性を得るための量子部品の創造的利用。",
  ),
  (DESCRIPTIONS.quantumAdv2 = []),
  DESCRIPTIONS.quantumAdv2.push("相関 II"),
  DESCRIPTIONS.quantumAdv2.push("技能評価:"),
  DESCRIPTIONS.quantumAdv2.push(
    "• もつれ量子状態の高度なトモグラフィー。",
  ),
  (DESCRIPTIONS.entChallengeC = []),
  DESCRIPTIONS.entChallengeC.push("GHZ II"),
  DESCRIPTIONS.entChallengeC.push("技能評価:"),
  DESCRIPTIONS.entChallengeC.push(
    "• 多量子ビットエンタングル状態の高度なトモグラフィー。",
  ),
  (DESCRIPTIONS.extraA = []),
  DESCRIPTIONS.extraA.push("ボーナスレベル"),
  DESCRIPTIONS.extraA.push("???"),
  (DESCRIPTIONS.extraB = []),
  DESCRIPTIONS.extraB.push("ボーナスレベル"),
  DESCRIPTIONS.extraB.push("???"),
  (DESCRIPTIONS.extraC = []),
  DESCRIPTIONS.extraC.push("ボーナスレベル"),
  DESCRIPTIONS.extraC.push("???"),
  (DESCRIPTIONS.extraD = []),
  DESCRIPTIONS.extraD.push("ボーナスレベル"),
  DESCRIPTIONS.extraD.push("???"),
  (DESCRIPTIONS.freeA = []),
  DESCRIPTIONS.freeA.push("テンプレートA"),
  DESCRIPTIONS.freeA.push("レベル設計用の空テンプレート"),
  (DESCRIPTIONS.freeB = []),
  DESCRIPTIONS.freeB.push("テンプレートB"),
  DESCRIPTIONS.freeB.push(
    "レベル設計用の空テンプレート。エンタングラー付き",
  ),
  (DESCRIPTIONS.freeC = []),
  DESCRIPTIONS.freeC.push("フリーフォーム"),
  DESCRIPTIONS.freeC.push("テストと実験用の空の工場。");
