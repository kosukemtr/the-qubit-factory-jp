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
          "Finally! The day has arrived that I get to work with actual qubits and quantum gates; I can hardly wait! \n \n"),
        (e +=
          "My initial experimentations have already revealed some key insights: \n "),
        (e +=
          "• the action of a rotation gate is undone by an equal rotation in the opposite direction. \n "),
        (e +=
          "• the action of a flip gate is undone by an identical flip gate. \n \n"),
        (e +=
          "It should follow that the action of a *sequence* of rotation/flip gates can be undone by undoing each gate individually. However, it appears that the order in which gates are applied is important to getting the correct result...\n "))
      : "quant3" === SCENARIO.name
        ? ((e +=
            "My initial experiments with quantum flip and rotate gates proved relatively uneventful. The gates behaved much as I thought they would. I was beginning to think the differences between bits and qubits might be relatively superficial: that they are simply the differences that one might expect when switching from a discrete to a continuous medium. However, my introduction to qubit measurements has thoroughly disabused me of these notions.  \n \n"),
          (e +=
            "The problem that I am currently tasked with, which involves sorting between ▲-state and ▶-state qubits, boggles my mind. Imagine a large bag containing a number of apples and oranges, and that our goal is to pull pieces of fruit from the bag one at a time and to separate them into their two types. Sounds simple, right? What if I told you that the act of removing each fruit from the bag could transmute it into something else entirely; that an apple could become an orange (or something *between* an apple and an orange) depending on the details of how it was taken from the bag as well an element of chance. It sounds absurd, but this seems to be the reality that qubits inhabit! \n \n"),
          (e +=
            "More concretely, I have found that the act of observing a qubit, i.e. by passing it through a measurement device, will change its state to align or anti-align with the device. A qubit initially in the ▲-state could transform into a ▶-state under measurement (assuming the measurement device was horizontally aligned). In this situation it would be impossible to distinguish, based on the measurement outcome alone, whether the initial state was ▲ or ▶. Indeed, regardless of the setting of the measurement device, input states ▲ and ▶ both have a chance of producing the same measurement result and output state. However, there must exist a measurement setting that minimizes this chance, hence maximizes the likelihood of successfully distinguishing between the different input states... \n"))
        : "quant6B" === SCENARIO.name
          ? ((e +=
              "The qubits dance and change before my eyes, seeming to switch direction in fleeting moments. The truth of this illusion is disturbing to me: I know that they somehow exist simultaneously in both directions and yet are not fully in either. \n \n"),
            (e +=
              "Another realization disturbs me further: the qubits have always been this way. The only thing that has changed is my perception of them; the same reality viewed through a different lens. One thing is clear to me: to succeed further I must become fluent in the ability to view and understand qubits from different perspectives. \n"))
          : "quant7" === SCENARIO.name
            ? ((e +=
                "In my short experience with qubits and quantum gates I have observed many significant differences between them and their classical counterparts. However, it is with my current introduction to entanglement that I see a truly radically departure from anything comparable within the classical setting. \n \n"),
              (e +=
                "The concept of entanglement is fascinating! A pair of qubits, when set in an entangled state, behave as a single entity with each qubit able to exert some nebulous influence over the other. This quality can remain even when the qubits are taken a great distance apart, and even though they do not communicate nor transmit information in any way that can be fathomed. If one-half of an entangled pair is measured then the state of the partner will instantaniously adjust in state to compensate for the measurement result, even though the partner should not have any way of knowing what the measurement result was (or even that a measurement took place). \n \n"),
              (e +=
                "Although much is still beyond my comprehension, I can't help but see the enormity of the implications given rise by entanglement. A group of classical bits is no more than the sum of its parts; describing each individual bit of a group accounts for a full description of the group itself. In contrast, a group of entangled qubits can behave collectively as an single object, vastly more complex than the sum of its individual qubits would suggest. \n"))
            : "adderC" === SCENARIO.name
              ? ((e +=
                  "Previously, many of the quantum tasks that I have been assigned have been solvable via a straight-forward adaption of a corresponding classical task. One such task was reproducing the `XOR` gate using quantum components, which could be accomplished by switching from classical controlled-inversion gates to appropriate quantum controlled-flip gates. \n \n"),
                (e +=
                  "However, I am finding that some quantum tasks are instead *much* more challenging than their classical counterparts, as exemplified by my present task of producing the quantum `AND` gate. The difficulty here lies with the lack of a quantum equivalent to the classical re-zero gate. As such, I must produce a completely new design using only the quantum flip and rotate gates that I have available to me. \n \n"),
                (e +=
                  "[update] I have made a breakthrough in the design of a quantum `AND` gate based on the following sequence of 90° rotations: \n"),
                (e +=
                  "• perform +90° rotation on `α` if `A` is in state ▼. \n "),
                (e +=
                  "• perform +90° rotation on `α` if `B` is in state ▼. \n "),
                (e +=
                  "• perform -90° rotation on `α` if (`A` XOR `B`) is in state ▼. \n \n"),
                (e +=
                  "This sequence of operations does not solve the task completely, as I must still revert qubits from `A` and `B` to their original states before they are output, although I believe that a few additional gates could resolve this final issue. \n "))
              : "entChallengeA" === SCENARIO.name
                ? ((e +=
                    "From my previous tests I have seen that if two qubits are entangled together then their measurement results will be correlated; once one qubit is measured then the other will collapse into a fixed state (contingent on the measurement outcome). \n\n"),
                  (e +=
                    "In this regard, I believe that I have found an example of a maximally entangled (hence maximally correlated) state. This state is prepared as following: \n "),
                  (e +=
                    "• First I prepare two qubits, one in state ▶ and the other in state ▲. \n"),
                  (e +=
                    "• Then I enact a controlled flip between the two qubits, with the (vertically aligned) control acting on the ▶ qubit and the (horizontally aligned) flip acting on the ▲ qubit. \n\n "))
                : "quantChallengeB" === SCENARIO.name
                  ? ((e +=
                      "In the realm of quantum gates nothing is irrevocable; every action that can be done can also be undone. Thus, I am confident in my ability to solve the latest challenge presented to me. I have been tasked with figuring out how to undo the action of a pair of sealed devices, each containing a two-qubit gate whose make and design have been long forgotten. \n \n"),
                    (e +=
                      "My first call of action was to run the factory and examine the entangled output states produced by each device, which each are described by their *four* state amplitudes. By experimenting with changing the basis of each qubit in the output, I was able to find a special choice of basis in which only *two* of the amplitudes were non-zero. I believe that this is the key! \n\n"),
                    (e +=
                      "By implementing a controlled flip or rotation between the qubit pairs, with the control set to align with the special basis identified in the previous step, it should be possible to disentangle each pair. Once they are disentangled, restoring the single qubits to their original states should be relatively simple... \n"))
                  : "quantChallengeA" === SCENARIO.name
                    ? ((e +=
                        "They say that the definition is insanity is doing the same thing over and over again, but expecting different results. Yet many of the quantum tasks that I am required to solve precisely rely on doing the same thing over and over until the desired outcome is achieved. \n \n"),
                      (e +=
                        "How can I continue in an environment where insanity not only encouraged, but is necessary to succeed? \n"))
                    : "quantChallengeF" === SCENARIO.name
                      ? ((e +=
                          "Although my experience with quantum components remains limited, it is clear to me that the ability of qubits to entangle with one another is a key advantage over computation with regular bits. Entanglement is something uniquely quantum; it has no classical analogue. Entanglement, when shared between two or more parties, can potentially be utilized to achieve results that are impossible with classical components. \n \n"),
                        (e +=
                          "But therein lies the rub. Entanglement can only be created through *local* interaction between qubits; they must initially be together in the same place. So it often remains a necessary step to distribute the entangled qubits to different parties who could be geographically separated by large distances. \n \n"),
                        (e +=
                          "The goal of my current assignment is to help remedy the challenge of distributing entangled qubits by instituting a `meet in the middle` type approach. I have already discovered several steps which bring me closer to this goal: \n "),
                        (e +=
                          "• First, I create pairs of entangled qubits, using controlled-flip gates as usual, on both the top and the bottom segments of the factory. \n"),
                        (e +=
                          "• Then I send one-half of each qubit pair from the top and the bottom to the center segment, before entangling these together to create a four-qubit entangled state (i.e. between the top qubit, the two central qubits, and the bottom qubit). \n "),
                        (e +=
                          "• By then measuring the two central qubits with appropriate measurement settings, a maximally entangled state between the top and bottom qubits is realized. \n\n"),
                        (e +=
                          "However, a problem still remains. The character of the entangled states that are created via this process are not uniform; they depend on the measurement results from the final step. There must be a way the fix these states such that they are always consistant with the desired output... \n \n"))
                      : "simpleDistill" === SCENARIO.name
                        ? ((e +=
                            "Despite its esoteric nature there are many ways in which entanglement behaves as if it were some kind of chemical compound. Entanglement can be created, destroyed, shifted from one location to another, and even transferred between vessels. My current assignment extends this analogy with a task that is intimately familiar to chemists everywhere: I must `distill` some entanglement, which is initially `diluted` amongst three qubits, into a more `concentrated` form held within two qubits. \n \n"),
                          (e +=
                            "I believe that the process should be fairly straight-forward. By measuring one of the three qubits the state is reduced to an entangled state on two remaining qubits. The two-qubit states that can be generated from this process can be explored in the state analyzer (or directly by running the factory with a given measurement setting). So it only remains for me to explore different measurement options until I find one such that the remaining two qubits could be maximally entangled. \n \n"),
                          (e +=
                            "[update] I have made significant progress: by measuring the bottom qubit with a *vertically* aligned measurement I find that there is a 25% chance that the remaining two qubits will successfully form a maximally entangled state (although not in the specific form requested). Thus, several additional steps need to be taken in order to fully complete the problem: (1) separate out the successful creations of maximally entangled states from the failures and (2) manipulate final states using single qubit gates until they are in the requested form. \n"))
                        : "chsh" === SCENARIO.name
                          ? ((e +=
                              "Two coworkers, codenames `Alice` and `Bob`, face what should be an impossible task. They are required to cooperate in order to win a game, and yet each lacks some information, only possessed by the other, that is necessary to assure success. If that were the end of the story then they would simply be forced to guess, and the outcome of the game would be soley determined by luck. However, this is not the end of the story as they share between them pairs of entangled qubits, whose enigmatic nature can twist the vagaries of fortune to their benefit. \n \n"),
                            (e +=
                              "I have most of it figured out already. From my previous experiments with entanglement I know that if Alice and Bob were each perform the same measurement on their half of the entangled qubit pair then they would *always* get the same result, regardless of how the measurement angle was set. Similarly, it follows that if they were to perform oppositely aligned measurements then they would always get opposite results. By extension it stands to reason that if the difference in angle between Alice and Bobs measurement angle gate alignments is small (<90°) then they are more likely produce agreeing measurement results, while if the angle is large (>90°) then they are more likely produce disagreeing measurement results. It follows that, by choosing their measurement angles appropriately, Alice and Bob can influence how likely they are to produce matching/differing measurement results and thus increase their chances of winning the game. \n \n"),
                            (e +=
                              "If my reasoning is correct, then Alice and Bob should try to maximize the difference in their measurement angles when both receive `1` bits from the center, but minimize the difference in their measurement angles in all other cases. However, I am yet to find a configuration of the measurement devices that satisfies this criteria...\n "))
                          : "quantumAdv3" === SCENARIO.name
                            ? ((e +=
                                "I have been tasked to examine some pairs of qubits to see whether or not they are entangled. My initial reaction was to propose the following: that we should measure both qubits from each pair and then check whether the measurement outcomes are co-dependent, since this is a defining feature of entanglement. However, I was subsequently informed of a serious handicap that would prohibit me from executing this proposal; I am to have access to only *one-half* of each qubit pair. How can I possibly check for entanglement under these circumstances?!? \n \n"),
                              (e +=
                                "[update] I have made a breakthrough in my understanding! While experimenting in the state analyzer I observed the following: if a qubit is part of a maximally entangled pair then it will always return a 50/50 random measurement outcome, regardless of the measurement angle setting. Conversely, I already know that if a qubit is *not* entangled then there will always be some measurement setting that will return a deterministic (i.e. 100/0) measurement outcome. Perhaps it could be possible to implement a design that distinguishes between entangled/non-entangled qubits based on this understanding? \n"))
                            : "teleport" === SCENARIO.name
                              ? ((e +=
                                  "I have tentatively been assigned to `Project Teleport`, the goal of which is to transport the state of a source qubit such that an exact copy can be reconstructed at a destination. At first, I objected to the name. Imagine that a sculptor were to send the instructions for one of their sculptures to a far off place, and then these instructions were used to create a copy of the sculpture in that place. Would we say that the sculpture was teleported? No, that would be preposterous! However, the more that I think about it, the more that I begin to change my mind about the suitability of the name `Teleport` for the current project. What if the recreated object was perfect and utterly indistinguishable from the original in every conceivable facet? Who could say that this was not then the original? \n \n"),
                                (e +=
                                  "Initially I am allotted with a quantity of preset `resource` qubit pairs that are entangled between the source/destination. From my previous work with entangled qubit pairs I know that if I were to measure the source qubit then, regardless of the measurement result, the destination qubit will `collapse` into the same state as the (post-measurement) source qubit. The theory behind the teleportation protocol is to somehow piggy-back a data qubit, initially located at the source, onto the pre-existing entanglement of the resource qubits such that the destination qubit is `collapsed` into the same state as this data qubit. If possible, this protocol would enable the `state` of a data qubit to be transferred from source to destination *without* having to send any actual qubits. \n \n"),
                                (e +=
                                  "My preliminary attempt at implementing the teleportation protocol consist of the following steps: \n"),
                                (e +=
                                  "• I begin by entangling the data and resource qubit at the source using a controlled-flip. This creates an entangled state on three qubits (i.e. between the two qubits at the source and the qubit at the destination). \n"),
                                (e +=
                                  "• I then measure each of the two source qubits with differently configured measurement settings. This subsequently collapses the destination qubit into an unentangled state. \n\n"),
                                (e +=
                                  "By setting the measurement device of the latter step appropriately I find that if both measurements yield the `0` state then the destination qubit exactly matches the initial state of the data qubit, consistent with our goal. However, it either of the measurements yield the `1` state then I find that the destination qubit is somehow a mirrored reflection of the data qubit. Thus, it still remains for me to somehow `correct` the destination qubit for the cases that this mirroring occurs. \n "))
                              : "dense" === SCENARIO.name
                                ? ((e +=
                                    "My previous attempts to store multiple bits of classical data within a single qubit did not prove viable. But I have a new idea: given that an entangled state of multiple qubits behaves much as a singular object, could it be possible to store multiple bits of data within an *entangled* qubit state? \n\n"),
                                  (e +=
                                    "The test problem is as follows. We begin with a pair of entangled qubits, one at the source and one at the destination, and our goal is to transmit two bits of information from the source to the destination while only actually sending a single qubit. I believe that I have already made significant headway towards this goal: \n "),
                                  (e +=
                                    "• I begin by enacting a *vertical* flip of the source qubit if the first source bit is in the `1` state.  \n"),
                                  (e +=
                                    "• Then I enact a *horizontal* flip of the source qubit if the second source bit is in the `1` state.  \n"),
                                  (e +=
                                    "• The source qubit is then sent to the destination. \n\n"),
                                  (e +=
                                    "At this point I have one of four different two-qubit entangled states at the destination (depending on what the bit values were at the source). By properly manipulating and measuring the entangled state I believe that it should be possible to determine with certainty what both of the source bits were... \n"))
                                : "distill" === SCENARIO.name
                                  ? ((e +=
                                      "Recently I have been encountering a vexing problem: my proposals, although flawless at conceptual level, are sullied by the imperfections inherent to reality. In particular, protocols that rely on utilization of entangled qubit pairs are failing due to them possessing weaker than expected entanglement. \n \n"),
                                    (e +=
                                      "However, I believe that this problem can be corrected via the process of *distillation*: \n"),
                                    (e +=
                                      "• I begin by taking two pairs of weakly entangled qubits and entangle them together to create a four-qubit entangled state.  \n"),
                                    (e +=
                                      "• Then, with the proper choice of measurements (and sufficient luck), I believe that it should be possible to produce a perfectly entangled qubit pair from the four-qubit entangled state... \n"))
                                  : "quantErrorA" === SCENARIO.name
                                    ? ((e +=
                                        "In composing the laws of quantum it seems that the architects of our reality have given with one hand and taken with the other in equal measure. For, despite whatever advantages qubits may possess over regular bits, they are also shackled by inherent disadvantages. \n \n"),
                                      (e +=
                                        "A particularly vexing disadvantage of qubits comes with respect to the duplication of data. When dealing with classical data, i.e. strings of bits, the activity of duplicating data is so trivial and commonplace that it does not warrant a second thought. However, in contrast, the limitations of quantum measurements imply that it is simply not possible to duplicate an arbitrary string of qubits. Which brings me neatly to my current predicament. \n \n"),
                                      (e +=
                                        "Previously, when tasked with correcting for transmission errors occurring in bit strings, the duplication of data was key to my strategy. By generating and then later comparing multiple copies of the same data I was able to detect and correct for most errors that occurred. Presently, when faced with the task of correcting transmission errors in qubit strings, the inability to duplicate qubits implies that an entirely different strategy will be necessary. How can one prevent data loss from occurring when no more than a single copy of the data can exist?!? \n \n"),
                                      (e +=
                                        "[update] After much trial and error I believe that I am close to a conceptual breakthrough. Even though the duplication of qubits is impossible, it may still be possible to `spread-out` the information from a single qubit over a group of multiple qubits. This way, even if some of the individual qubits experience errors, so long as the majority of qubits within the group remain intact it should still be possible to recover the data held by the original qubit. My preliminary design consists of the following steps: \n"),
                                      (e +=
                                        "• [Pre-transmission] Create some `helper` qubits in a known state ▲, and then entangle these helper qubits together with the data qubit that is to be transmitted. This process effectively `encodes` the logical data within an entangled state on the larger group qubits. \n"),
                                      (e +=
                                        "• [Post-transmission] Decode the entangled state by apply the reverse of the operations used to encode the data qubit in the first step. If no errors occurred during the transmission then all of the qubits (i.e. data + helpers) should be returned to their original states. \n"),
                                      (e +=
                                        "• [Post-transmission] After the decoding step, each of the helper qubits should then be measured to determine whether or not they are in their original states. If any of the measurements indicate that a helper qubit is *not* in its original state then this in indicative that some kind of error occurred. \n \n"),
                                      (e +=
                                        "Utilizing the steps outlined above I am able, with high probability, to detect when an error occurs during transmission. However, in the cases that an error does occur, it still remains for me to implement a solution to correct the error. Perhaps the pattern of measurement results from the helper qubits, properly interpreted, may indicate how each error could be corrected? \n \n"))
                                    : "quantChallengeG" === SCENARIO.name &&
                                      ((e +=
                                        "I have stumbled across a mystery; one which defies my comprehension of quantum devices. I was experimenting with a quantum controlled-flip gate, which takes as input a control and a target qubit. In my understanding, the function of the control qubit is to configure the gate which acts on the target qubit. However, by pure chance, I happened to find a configuration of inputs such that the control qubit is transformed to a new state, but the target qubit is left in its original state. At first I thought that this must be due to a faulty control gate but, upon examination, I found that the gate is indeed working correctly. How can this be possible? \n\n"),
                                      (e +=
                                        "A configuration for a controlled-flip gate that produces this strange result is as follows: \n"),
                                      (e +=
                                        "• Set the target flip gate to be anti-aligned with input target qubit.\n"),
                                      (e +=
                                        "• Set the control part of the gate in any direction, so long as it is not aligned to the input control qubit.\n\n"),
                                      (e +=
                                        "[update] After a great deal of thought I believe that I have started to make sense of the situation. When a flip gate is anti-aligned with a qubit it only changes the *sign* of the qubit state. Usually this would not have any significant consequence. However, it the context of a controlled-flip, the sign of only *some* of the state amplitudes may be flipped (which is significant!). \n\n"),
                                      (e +=
                                        "For instance, assume that the control qubit is initially set in the superposition (▶ + ◀), which we recall is equivalent to the ▲-state. Then, during activation of thecontrol gate, it is possible for the sign on only the second part of the superposition to change, such that the state of the control qubit becomes (▶ - ◀), which is now equivalent to the ▼-state. \n\n"),
                                      (e +=
                                        "The fact that a control qubit can be modified by a quantum control gate marks a significant departure from the classical counterparts, given that a control bit is always left invariant by the action of a classical control gate. I wonder if this difference can be exploited for any practical purpose? \n\n")),
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
