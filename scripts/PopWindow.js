class PopWindow {
  static init() {
    (POPWINDOW.isOpen = !1),
      (POPWINDOW.isHover = !1),
      (POPWINDOW.movableWindow = document.getElementById("popmovableWindow")),
      (POPWINDOW.windowHeader =
        POPWINDOW.movableWindow.querySelector(".popwindow-header")),
      (POPWINDOW.isDragging = !1),
      (POPWINDOW.offsetX = 0),
      (POPWINDOW.offsetY = 0),
      (POPWINDOW.closeButton = document.getElementById("closeWindowBtn")),
      (POPWINDOW.resizeHandle = document.getElementById("resizeHandle")),
      (POPWINDOW.rightResizeHandle =
        document.getElementById("rightResizeHandle")),
      (POPWINDOW.bottomResizeHandle =
        document.getElementById("bottomResizeHandle")),
      (POPWINDOW.isResizing = !1),
      (POPWINDOW.startWidth = 0),
      (POPWINDOW.startHeight = 0),
      (POPWINDOW.startX = 0),
      (POPWINDOW.startY = 0),
      (POPWINDOW.text = document.querySelector(".popwindow-text")),
      POPWINDOW.windowHeader.addEventListener("mousedown", (e) => {
        (POPWINDOW.isDragging = !0),
          (POPWINDOW.offsetX =
            e.clientX - POPWINDOW.movableWindow.getBoundingClientRect().left),
          (POPWINDOW.offsetY =
            e.clientY - POPWINDOW.movableWindow.getBoundingClientRect().top);
      }),
      window.addEventListener("mouseup", () => {
        POPWINDOW.isDragging = !1;
      }),
      window.addEventListener("mousemove", (e) => {
        POPWINDOW.isDragging &&
          ((POPWINDOW.movableWindow.style.left =
            e.clientX - POPWINDOW.offsetX + "px"),
          (POPWINDOW.movableWindow.style.top =
            e.clientY - POPWINDOW.offsetY + "px"));
      }),
      POPWINDOW.closeButton.addEventListener("click", () => {
        (POPWINDOW.movableWindow.style.display = "none"),
          (POPWINDOW.isOpen = !1),
          (POPWINDOW.isHover = !1);
      }),
      POPWINDOW.resizeHandle.addEventListener("mousedown", (e) => {
        (POPWINDOW.isResizing = !0),
          (POPWINDOW.startX = e.clientX),
          (POPWINDOW.startY = e.clientY),
          (POPWINDOW.startWidth = parseInt(
            document.defaultView.getComputedStyle(POPWINDOW.movableWindow)
              .width,
            10,
          )),
          (POPWINDOW.startHeight = parseInt(
            document.defaultView.getComputedStyle(POPWINDOW.movableWindow)
              .height,
            10,
          )),
          window.addEventListener("mousemove", PopWindow.doResize),
          window.addEventListener("mouseup", PopWindow.stopResizing);
      }),
      POPWINDOW.rightResizeHandle.addEventListener("mousedown", (e) => {
        POPWINDOW.isResizing ||
          ((POPWINDOW.isResizing = !0),
          (POPWINDOW.startX = e.clientX),
          (POPWINDOW.startY = e.clientY),
          (POPWINDOW.startWidth = parseInt(
            document.defaultView.getComputedStyle(POPWINDOW.movableWindow)
              .width,
            10,
          )),
          (POPWINDOW.startHeight = parseInt(
            document.defaultView.getComputedStyle(POPWINDOW.movableWindow)
              .height,
            10,
          )),
          window.addEventListener("mousemove", PopWindow.doRightResize),
          window.addEventListener("mouseup", PopWindow.stopRightResizing));
      }),
      POPWINDOW.bottomResizeHandle.addEventListener("mousedown", (e) => {
        POPWINDOW.isResizing ||
          ((POPWINDOW.isResizing = !0),
          (POPWINDOW.startX = e.clientX),
          (POPWINDOW.startY = e.clientY),
          (POPWINDOW.startWidth = parseInt(
            document.defaultView.getComputedStyle(POPWINDOW.movableWindow)
              .width,
            10,
          )),
          (POPWINDOW.startHeight = parseInt(
            document.defaultView.getComputedStyle(POPWINDOW.movableWindow)
              .height,
            10,
          )),
          window.addEventListener("mousemove", PopWindow.doBottomResize),
          window.addEventListener("mouseup", PopWindow.stopBottomResizing));
      });
  }
  static doResize(e) {
    POPWINDOW.isResizing &&
      ((POPWINDOW.movableWindow.style.width =
        POPWINDOW.startWidth + e.clientX - POPWINDOW.startX + "px"),
      (POPWINDOW.movableWindow.style.height =
        POPWINDOW.startHeight + e.clientY - POPWINDOW.startY + "px"));
  }
  static stopResizing(e) {
    (POPWINDOW.isResizing = !1),
      window.removeEventListener("mousemove", PopWindow.doResize),
      window.removeEventListener("mouseup", PopWindow.stopResizing);
  }
  static doRightResize(e) {
    POPWINDOW.isResizing &&
      ((POPWINDOW.movableWindow.style.width =
        POPWINDOW.startWidth + e.clientX - POPWINDOW.startX + "px"),
      (POPWINDOW.movableWindow.style.height = POPWINDOW.startHeight + "px"));
  }
  static stopRightResizing(e) {
    (POPWINDOW.isResizing = !1),
      window.removeEventListener("mousemove", PopWindow.doRightResize),
      window.removeEventListener("mouseup", PopWindow.stopRightResizing);
  }
  static doBottomResize(e) {
    POPWINDOW.isResizing &&
      ((POPWINDOW.movableWindow.style.height =
        POPWINDOW.startHeight + e.clientY - POPWINDOW.startY + "px"),
      (POPWINDOW.movableWindow.style.width = POPWINDOW.startWidth + "px"));
  }
  static stopBottomResizing(e) {
    (POPWINDOW.isResizing = !1),
      window.removeEventListener("mousemove", PopWindow.doBottomResize),
      window.removeEventListener("mouseup", PopWindow.stopBottomResizing);
  }
  static reset() {
    (POPWINDOW.movableWindow.style.height = 8 * FIELD.tileWidth + "px"),
      (POPWINDOW.movableWindow.style.width = 8 * FIELD.tileWidth + "px"),
      (POPWINDOW.movableWindow.style.minHeight = 3 * FIELD.tileWidth + "px"),
      (POPWINDOW.movableWindow.style.minWidth = 5 * FIELD.tileWidth + "px"),
      (POPWINDOW.movableWindow.style.left =
        FIELD.leftPad +
        (FIELD.cols + 1) * FIELD.tileWidth +
        FIELD.midPad +
        "px"),
      (POPWINDOW.movableWindow.style.top = FIELD.midHeight + "px"),
      (POPWINDOW.text.scrollTop = 0);
  }
  static setText() {
    var e = "-------------------------------------\n";
    "quant1" === SCENARIO.name
      ? ((e +=
          "ついに！ 実際のキュービットと量子ゲートを扱える日がやって来ました。待ちきれません！ \n \n"),
        (e +=
          "最初の実験でいくつかの重要な知見が得られました:\n "),
        (e +=
          "• 回転ゲートの作用は同じ角度を逆向きに回すと打ち消せます。 \n "),
        (e +=
          "• 反転ゲートの作用は同じ反転ゲートでもう一度実行すると打ち消せます。 \n \n"),
        (e +=
          "つまり、回転や反転ゲートの*列*も各ゲートを個別に戻せば元に戻るはずです。ただし正しい結果を得るには適用順序が重要なようです…\n "))
      : "quant3" === SCENARIO.name
        ? ((e +=
            "量子反転ゲートや回転ゲートを用いた初期の実験では、ゲートは概ね予想通りに動作しました。ビットとキュービットの違いは表面的なものに過ぎないと思いかけていましたが、測定に触れた途端その考えは完全に覆されました。 \n \n"),
          (e +=
            "現在の課題は▲状態と▶状態のキュービットを振り分けることですが、これはまるで袋から果物を取り出すたびにリンゴがオレンジに変わるかもしれない状況に似ており、頭が混乱します。キュービットの世界ではそんなことが現実に起きるのです。\n \n"),
          (e +=
            "さらに、キュービットを測定装置に通すだけで装置に合わせて状態が変わってしまいます。初め▲状態だったものが、装置が水平なら測定で▶状態になることもあります。この場合、結果だけから初期状態を判断することはできません。測定角度によらず▲と▶の入力が同じ結果になる可能性があるものの、その確率を最小化して両者を見分けられる設定がきっと存在するはずです… \n"))
        : "quant6B" === SCENARIO.name
          ? ((e +=
              "キュービットが目の前で舞うように変化し、瞬く間に向きを変えているように見えます。この幻の正体を思うと恐ろしく、彼らは同時に両方向へ存在しつつどちらにも完全には属していないと知ります。 \n \n"),
            (e +=
              "さらに言えば、キュービットは初めからずっとこうだったのです。変わったのは私の認識だけ。同じ現実を別の視点で見ていただけでした。これから先へ進むには、多角的にキュービットを眺め理解する術を身につけなければなりません。 \n"))
          : "quant7" === SCENARIO.name
            ? ((e +=
                "キュービットと量子ゲートを扱い始めて間もないものの、古典的な仕組みとは異なる点が多いと感じています。特にエンタングルメントに触れた今、古典では考えられないほどの飛躍を目の当たりにしました。 \n \n"),
              (e +=
                "エンタングルメントは実に魅力的です。絡み合った二つのキュービットは一つの存在のように振る舞い、互いに不思議な影響を及ぼし合います。この性質は離れた場所にあっても保たれ、情報のやり取りがなくても片方を測定するともう片方が即座に結果に合わせて状態を調整します。 \n \n"),
              (e +=
                "まだ理解しきれてはいませんが、エンタングルメントがもたらす可能性の大きさを感じずにはいられません。古典ビットの集まりは単なる足し算に過ぎませんが、エンタングルしたキュービットの集団は、個々の和をはるかに超えた複雑さをもつ単一の存在として振る舞うのです。 \n"))
            : "adderC" === SCENARIO.name
              ? ((e +=
                  "これまで与えられてきた量子課題の多くは、古典的な課題を量子部品に置き換えるだけで解決できました。たとえば `XOR` ゲートの再現は、古典の制御反転ゲートを対応する量子制御フリップゲートに置き換えるだけで済みました。 \n \n"),
                (e +=
                  "しかし量子 `AND` ゲートのように、古典版より格段に難しい課題もあります。原因は古典の `re-zero` ゲートに相当する量子ゲートが存在しないことです。そのため手持ちの量子フリップゲートと回転ゲートだけで全く新しい設計を考えねばなりません。 \n \n"),
                (e +=
                  "【更新】次の90°回転の組み合わせで量子 `AND` ゲート設計の糸口をつかみました:\n"),
                (e +=
                  "• `A` が▼のとき `α` に +90° 回転を行う \n "),
                (e +=
                  "• `B` が▼のとき `α` に +90° 回転を行う \n "),
                (e +=
                  "• (`A` XOR `B`) が▼のとき `α` に -90° 回転を行う \n \n"),
                (e +=
                  "ただしこの操作列だけでは課題は解決せず、`A` と `B` を出力前に元の状態へ戻す必要があります。いくつかゲートを追加すれば最終的に解決できるでしょう。 \n "))
              : "entChallengeA" === SCENARIO.name
                ? ((e +=
                    "以前の実験から、二つのキュービットがエンタングルしている場合、測定結果が相関することが分かりました。一方を測定するともう一方は結果に応じて固定状態へ崩壊します。\n\n"),
                  (e +=
                    "そこで、最大にエンタングルした状態と思われる例を見つけました。準備手順は次の通りです:\n "),
                  (e +=
                    "• 一方を▶状態、もう一方を▲状態に設定する。\n"),
                  (e +=
                    "• ▶側に垂直方向の制御を、▲側に水平方向のフリップをかける制御フリップを行う。\n\n "))
                : "quantChallengeB" === SCENARIO.name
                  ? ((e +=
                      "量子ゲートの世界では元に戻せない操作はありません。どんな操作も逆操作で打ち消せます。だからこそ今回の課題も解決できると確信しています。任務は、密封された装置2つに組み込まれた二量子ビットゲートの作用を解除する方法を見つけることです。設計も製造も忘れ去られています。 \n \n"),
                    (e +=
                      "まずは工場を動かし、それぞれの装置が出力するもつれ状態を調べました。各装置は4つの振幅で表されますが、出力側の各量子ビットの基底を変えてみたところ、わずか2つの振幅だけが非ゼロになる特別な基底を見つけました。これが鍵だと思います！\n\n"),
                    (e +=
                      "前の手順で特定した基底に合わせて制御を設定した制御フリップまたは回転をペアの量子ビットに施せば、もつれをほどけるはずです。もつれが解ければ、各量子ビットを元の状態に戻すのは比較的簡単でしょう… \n"))
                  : "quantChallengeA" === SCENARIO.name
                    ? ((e +=
                        "\u300C狂気とは同じことを繰り返して違う結果を望むこと\u300Dだと言われますが、私に課される量子課題の多くはまさに望む結果が出るまで同じ作業を繰り返すことを要求しています。\n \n"),
                      (e +=
                        "狂気が奨励され、むしろ不可欠とされる環境で、私はどうやってやっていけばいいのでしょうか？\n"))
                    : "quantChallengeF" === SCENARIO.name
                      ? ((e +=
                          "量子部品の経験はまだ浅いものの、キュービット同士がエンタングルできることは通常のビット計算に対する大きな利点だと実感しています。エンタングルメントは量子特有で、古典には類似するものがありません。複数の主体で共有すれば、古典部品では不可能な結果を生み出すことも可能です。\n \n"),
                        (e +=
                          "しかし問題は、エンタングルメントはキュービット同士が*局所的に*接触しないと作れないことです。したがって離れた相手に分配するには、一旦同じ場所で生成してから運ばなければなりません。\n \n"),
                        (e +=
                          "現在の任務は、この分配の難しさを『中間地点で会う』方式で解決することです。すでに次の手順で目標に近づけると分かりました:\n "),
                        (e +=
                          "• まず工場の上段と下段で制御フリップを使い、エンタングルしたキュービット対を作る。\n"),
                        (e +=
                          "• それぞれの対から片方を中央に送り、そこで互いをエンタングルして4量子ビットのもつれ状態を作る（上段のキュービット、中央2つ、下段のキュービット）。\n "),
                        (e +=
                          "• その後、中央の2つのキュービットを適切に測定すれば、上段と下段のキュービットが最大にエンタングルした状態になる。\n\n"),
                        (e +=
                          "ただし問題は残っています。この方法でできるエンタングル状態は最後の測定結果によって形が揃わないのです。常に望んだ形に整える方法がきっとあるはずですが… \n \n"))
                        : "simpleDistill" === SCENARIO.name
                          ? ((e +=
                              "難解な性質を持ちながらも、エンタングルメントはまるで化学物質のように扱うことができます。作ったり壊したり、場所を移したり、容器を替えて移送することさえ可能です。今回の任務では、三つのキュービットに\u300C希釈\u300Dされたエンタングルメントを二つのキュービットに\u300C濃縮\u300Dする、つまり蒸留を行います。\n \n"),
                          (e +=
                              "手順は比較的単純なはずです。三つのうち一つを測定すると状態は残り二つのエンタングル状態に縮退します。このとき得られる二量子ビット状態はステートアナライザーで調べたり、工場を特定の測定設定で動かして確認できます。あとは残った二つが最大にもつれる測定方法を探すだけです。\n \n"),
                          (e +=
                              "【更新】大きな進展がありました。下側のキュービットを*垂直方向*に測定すると25%の確率で残る二つが最大エンタングルになります（ただし要求された形ではありません）。従って問題を完全に解くには、(1) 成功したケースを失敗と分けること、(2) 単一キュービットゲートで最終状態を求められる形に整えること、の追加ステップが必要です。\n"))
                        : "chsh" === SCENARIO.name
                          ? ((e +=
                              "コードネーム`Alice`と`Bob`の2人の同僚は、本来なら不可能なはずの課題に挑むことになりました。ゲームに勝つには協力が必要ですが、互いに成功に欠かせない情報を片方しか持っていません。普通なら勘に頼るしかなく、結果は運次第でしょう。しかし2人はエンタングルしたキュービットのペアを共有しており、その不思議な性質が彼らに幸運をもたらすかもしれないのです。\n \n"),
                            (e +=
                              "この点についてはほとんど理解できています。以前の実験から、アリスとボブが同じ角度で測定すれば測定角度に関わらず\uFF0A必ず\uFF0A同じ結果になることを知っています。逆に真逆の角度で測定すれば常に反対の結果になります。つまり角度差が小さいと一致しやすく、大きいと一致しにくいのです。測定角度をうまく選べば、ゲームに勝つための一致/不一致の確率を操作できます。\n \n"),
                            (e +=
                              "もしこの推論が正しいなら、2人は中央から`1`が送られてきたときに測定角度の差を最大にし、それ以外では差を最小にすべきです。しかしその条件を満たす測定設定はまだ見つかっていません…\n "))
                            : "quantumAdv3" === SCENARIO.name
                              ? ((e +=
                                  "キュービットのペアがエンタングルしているか調べる任務を受けました。最初は2つとも測定して結果の相関を確かめればよいと思ったのですが、後になって各ペアの\u300C片方しか\u300D扱えないと聞かされました。こんな状況でどうやってエンタングルを判定すればいいのでしょうか?!? \n \n"),
                                (e +=
                                  "【更新】理解が大きく進みました！ ステートアナライザーで実験したところ、最大エンタングル状態のキュービットは測定角度に関係なく必ず50/50のランダムな結果になることが分かりました。逆にエンタングルしていないなら、どこかの角度で必ず100/0の決定的な結果が得られます。この性質を利用すれば、エンタングルかどうかを判別する設計ができるかもしれません。\n"))
                              : "teleport" === SCENARIO.name
                                ? ((e +=
                                    "仮ではありますが『Project Teleport』に配属されました。目的は送信元キュービットの状態を転送し、受信側で完全なコピーを再現することです。最初はこの名称に疑問を持ちました。彫刻家が遠方に作り方を送って同じ彫刻を作ったとしても、それをテレポートとは呼ばないでしょう。しかし考えてみると、再現物が元と完璧に同じなら、それはもう元と区別がつきません。\n \n"),
                                  (e +=
                                    "まず送信元と受信先の間には、あらかじめエンタングルした『リソース』キュービット対が用意されています。以前の経験から、送信元キュービットを測定すると結果に関わらず受信側のキュービットが同じ状態に崩壊することを知っています。この既存のエンタングルメントを利用して、データキュービットの状態を送り、実際にキュービットを移動させずに転送するのがこのプロトコルです。\n \n"),
                                  (e +=
                                    "試作プロトコルは次の通りです:\n"),
                                  (e +=
                                    "• まず送信元でデータキュービットとリソースキュービットを制御フリップでエンタングルし、送信元2個と受信側1個からなる3キュービットのもつれを作る。\n"),
                                  (e +=
                                    "• 次に送信元の2つのキュービットを別々の測定設定で測定し、その結果として受信側のキュービットはもつれのない状態に崩壊する。\n\n"),
                                  (e +=
                                    "後段の測定装置を適切に設定すると、両方が`0`なら受信側キュービットはデータキュービットの初期状態と完全に一致します。しかしどちらかが`1`だと受信側はデータキュービットの鏡像のようになるため、その場合は何らかの修正が必要です。\n "))
                                : "dense" === SCENARIO.name
                                  ? ((e +=
                                      "以前、1つのキュービットに複数ビットの古典データを詰め込もうとして失敗しましたが、新しい発想が浮かびました。複数のキュービットがエンタングルしていれば、一つの物体のように振る舞います。ならばそのエンタングル状態の中に複数ビットを保存できるのではないかというのです。\n\n"),
                                    (e +=
                                      "テスト課題は次の通りです。送信元と受信先に一対のエンタングルしたキュービットがあり、実際に送るキュービットは1個だけで2ビットの情報を伝えることを目指します。次の手順でこの目標に大きく近づけたと思います:\n "),
                                    (e +=
                                      "• 1ビット目が`1`なら、送信元キュービットに*垂直方向*のフリップを行う。\n"),
                                    (e +=
                                      "• 2ビット目が`1`なら、送信元キュービットに*水平方向*のフリップを行う。\n"),
                                    (e +=
                                      "• その後、送信元キュービットを目的地へ送る。\n\n"),
                                    (e +=
                                      "この時点で受信側には4通りの二量子ビットのエンタングル状態のいずれかが存在します。これらを適切に操作・測定すれば、送信元の2ビットが何だったかを確実に判定できるはずです… \n"))
                                  : "distill" === SCENARIO.name
                                    ? ((e +=
                                        "最近、私の提案は概念上は完璧でも現実の不完全さに邪魔されるという悩ましい問題に直面しています。特にもつれたキュービット対を利用するプロトコルが、期待より弱いエンタングルメントのためにうまくいきません。\n \n"),
                                      (e +=
                                        "しかしこの問題は *蒸留* という手法で解決できると考えています:\n"),
                                      (e +=
                                        "• まず弱くエンタングルしたキュービットのペアを2組用意し、それらをさらにエンタングルして4キュービットのもつれ状態を作る。\n"),
                                      (e +=
                                        "• そして適切な測定を選び、十分な運があれば、その4キュービットから完全にもつれたキュービット対を取り出せるはずです… \n"))
                                    : "quantErrorA" === SCENARIO.name
                                      ? ((e +=
                                          "量子の法則は一方で与え、もう一方で奪うかのようです。キュービットには通常のビットにはない利点がありますが、それと同じくらい根本的な欠点にも縛られています。\n \n"),
                                        (e +=
                                          "中でも厄介なのがデータの複製ができないことです。ビット列なら複製など当たり前ですが、量子測定の制約により任意のキュービット列をコピーすることは不可能です。これが私の現在の悩みの種です。\n \n"),
                                        (e +=
                                          "以前ビット列の伝送エラーを訂正するときはデータを複製して比較する方法が鍵でした。しかしキュービットではそれができないため全く別の戦略が必要です。データが一つしか存在できない状況で損失をどう防げばよいのでしょうか?!? \n \n"),
                                        (e +=
                                          "【更新】試行錯誤の末、概念的な突破口が見えてきました。キュービットを複製できなくても、1つのキュービットの情報を複数のキュービットに\u300C拡散\u300Dさせればよいのです。こうしておけば一部が壊れても大半が残っていれば元の情報を回復できます。現時点の設計は次の通りです:\n"),
                                        (e +=
                                          "• [送信前] ▲状態のヘルパーキュービットを用意し、送信するデータキュービットとエンタングルさせて大きなグループのエンタングル状態にエンコードする。\n"),
                                        (e +=
                                          "• [送信後] 第1段階の逆操作でエンタングル状態をデコードする。エラーがなければ全てのキュービット（データ+ヘルパー）は元の状態に戻る。\n"),
                                        (e +=
                                          "• [送信後] デコード後に各ヘルパーキュービットを測定し、元の状態か確認する。もし違っていれば何らかのエラーが起きた証拠となる。\n \n"),
                                        (e +=
                                          "以上の手順で高確率にエラーの発生を検出できますが、実際にエラーが起きた際にどう修正するかはまだ課題です。ヘルパーキュービットの測定結果のパターンから、各エラーをどう訂正するか判断できるかもしれません。\n \n"))
                                      : "quantChallengeG" === SCENARIO.name &&
                                        ((e +=
                                          "量子デバイスの理解を超える謎に遭遇しました。制御フリップゲートを試していたところ、偶然にも制御キュービットだけが新しい状態に変わり、ターゲットキュービットはそのままという設定を見つけたのです。最初はゲートの故障かと思いましたが、調べてみると正常に動作しています。どうしてこんなことが起こるのでしょうか？\n\n"),
                                      (e +=
                                        "この奇妙な現象を生む設定は次の通りです:\n"),
                                      (e +=
                                        "• ターゲット側のフリップゲートを入力ターゲットキュービットと反対向きにする。\n"),
                                      (e +=
                                        "• 制御側は入力制御キュービットと同じ向きでなければどの方向でもよい。\n\n"),
                                      (e +=
                                        "【更新】熟考の末ようやく仕組みが見えてきました。フリップゲートがキュービットと反対向きだと状態の*符号*だけが変わります。通常なら大きな影響はありませんが、制御フリップでは状態振幅の*一部だけ*の符号が反転し得るため重要なのです。\n\n"),
                                      (e +=
                                        "例えば制御キュービットが初め(▶ + ◀)の重ね合わせ、つまり▲状態にあるとします。ゲートを作動させると後半だけ符号が変わり(▶ - ◀)となり、これは▼状態に相当します。\n\n"),
                                      (e +=
                                        "量子制御ゲートによって制御キュービットが変化し得るという事実は、古典制御ゲートでは制御ビットが常に不変であることを考えると大きな違いです。この違いを何か実用に生かせないでしょうか？\n\n")),
      (e += "-------------------------------------"),
      (POPWINDOW.windowHeader.style.fontSize =
        Math.round(0.33 * FIELD.tileWidth) + "px"),
      (POPWINDOW.windowHeader.style.lineHeight = "1.5"),
      (POPWINDOW.closeButton.style.fontSize =
        Math.round(0.33 * FIELD.tileWidth) + "px"),
      (POPWINDOW.closeButton.style.lineHeight = "1.5"),
      (POPWINDOW.text.style.fontSize =
        Math.round(0.3 * FIELD.tileWidth) + "px"),
      (POPWINDOW.text.style.lineHeight = "1.5"),
      (POPWINDOW.text.innerText = e);
  }
}
