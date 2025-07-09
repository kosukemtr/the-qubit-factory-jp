<figure style="height: 300px; margin: 10px; padding: 10px">
<img src="images/QFlogotext.png" alt="Construction Phase" height="300" align="left">
</figure>
<br clear="left">

A puzzle/construction game about manipulating **qubits** (quantum bits) to solve challenges involving quantum technology and computation. 

* Play in your browser: [www.qubitfactory.io](https://www.qubitfactory.io/)
* Learn more on the wiki: [github.com/awslabs/the-qubit-factory/wiki](https://github.com/awslabs/the-qubit-factory/wiki)
* Youtube channel: [www.youtube.com/@TheQubitFactory](https://www.youtube.com/@TheQubitFactory)

## Disclaimer: 
_The Qubit Factory_ is set within a fictional reality about robots doing robotty things in a robot factory. The character dialog contained within, written wholly by developer Glen Evenbly, is intended to be humorous and satirical. The opinions, views and practices of characters from within _The Qubit Factory_ do not reflect those of the developers or the developers' employer. 

## License:
_The Qubit Factory_ is licensed under Apache 2.0.

## TODO:
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