<figure style="height: 300px; margin: 10px; padding: 10px">
<img src="images/QFlogotext.png" alt="Construction Phase" height="300" align="left">
</figure>
<br clear="left">

A puzzle/construction game about manipulating **qubits** (quantum bits) to solve challenges involving quantum technology and computation. 

* Play in your browser: [www.qubitfactory.io](https://www.qubitfactory.io/)
* Learn more on the wiki: [github.com/awslabs/the-qubit-factory/wiki](https://github.com/awslabs/the-qubit-factory/wiki)
* Youtube channel: [www.youtube.com/@TheQubitFactory](https://www.youtube.com/@TheQubitFactory)

## About this version

この README は日本語版の説明を加えるため、原作の README から変更しています。

本リポジトリは、Glen Evenbly 氏（AWS Center for Quantum Computing）が開発した
[The Qubit Factory](https://www.qubitfactory.io/) の
[公開ソースコード](https://github.com/awslabs/the-qubit-factory)をもとに、
kosukemtr が日本語化した非公式版です。原作者・AWS による公式の日本語版ではありません。
量子計算を楽しく学べる教材を開発し、ソースコードを公開してくださった原作者・開発関係者の皆様に感謝します。

- [日本語版を遊ぶ](https://mitarai.qc.ee.es.osaka-u.ac.jp/the-qubit-factory-jp/)
- 原作の基準コミット: [`42cd5958a55efc7142e74811acf6ff44f899c010`](https://github.com/awslabs/the-qubit-factory/commit/42cd5958a55efc7142e74811acf6ff44f899c010)
- 主な変更: `scripts.min.js` の整形・分割、画面表示・会話・説明文の日本語化、日本語表示に関する調整、`index.html` のスクリプト読み込み変更。
- `scripts.min.js` は原作のまま保持しています。実際の日本語版は `scripts/` 内のファイルを読み込みます。

## Credits

- Original game: Glen Evenbly, AWS Center for Quantum Computing.
- Music by Eric Matyas — [www.soundimage.org](https://soundimage.org/). 原作のゲーム内クレジットを保持しています。
- Japanese adaptation: kosukemtr.

## Disclaimer: 
_The Qubit Factory_ is set within a fictional reality about robots doing robotty things in a robot factory. The character dialog contained within, written wholly by developer Glen Evenbly, is intended to be humorous and satirical. The opinions, views and practices of characters from within _The Qubit Factory_ do not reflect those of the developers or the developers' employer. 

## License:
_The Qubit Factory_ is licensed under Apache 2.0. See [LICENSE](LICENSE).
The original copyright notice is retained in [NOTICE](NOTICE):

> Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.

原作から引き継いだ `LICENSE` と `NOTICE` は変更していません。
整形・分割・日本語化した JavaScript と変更した HTML には変更表記を付けています。
今後変更する原作由来のファイルにも変更表記を保持・追加してください。
音楽の作者表記もゲーム内に保持してください。

## Codex instructions:
scripts.min.js is the original file, which we de-minified to scripts.js, which is then separated into individual files in the scripts/ directory.

Translation work is needed in the following scripts/ files:

- Achievements.js
- Analysis.js
- ConfirmationBox.js
- ControlButton.js
- Finished.js
- Menu.js
- Overlay.js
- Placement.js
- Robot.js
- RobotSpeech.js
- Score.js
- SelectLevel.js
- Tooltip.js

These files encompass menu labels, tutorial text, level descriptions, dialogue, tooltips, and other on-screen messages. Translating the strings within them will localize the core user experience for Japanese players.

Formatting guideline: Formatting strings should be written like: "ここThe Qubit Factoryでは、 $$b40r:最高品質 $$b40r:の $$b40r:昔ながらの $$b40r:ロボット製造キュービットだけ を生産していることを誇りにしています。あなたの優れた才能とスキルで、顧客に質の高いサービスを提供し、当社ブランドの価値を高めてくれると確信しています。" where the space indicates the termination of the formatted strings. 

## For debugging:
Run on Chrome console:
```javascript
// In the level-select screen
FIELD.forceOpen = true;         // allow every stage
for (let i = 1; i < 10; i++) {
    FIELD.forceOpenRing[i] = true;  // unlock each ring of levels
}
SELECTOR.unlockCheck();
SELECTOR.initialize();
SELECTOR.drawBase(CANV.selectBase);
SELECTOR.draw(CANV.select, CANV.selectText);
SELECTOR.drawText(CANV.selectText);
```
to unlock all levels and rings in the level-select screen.
