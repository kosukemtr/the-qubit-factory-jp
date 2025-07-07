class RobotSpeech {
  static advanceText() {
    if (ROBOT.isDone) {
      if (
        ((ROBOT.lipMove = !0),
        (ROBOT.currSpeech += 1),
        "constructing" === ROBOT.oldMode)
      )
        return void Helper.esc();
      if ("finished" === ROBOT.oldMode)
        return (
          Helper.esc(),
          Helper.esc(),
          void (FIELD.forceSingle && MouseDown.resetFromFinished(0))
        );
      var e = RobotSpeech.grab(ROBOT.currName, ROBOT.currSpeech, !0);
      e
        ? (SFX.click.play(), RobotSpeech.grab(ROBOT.currName, ROBOT.currSpeech))
        : Helper.esc();
    } else
      SFX.click.play(),
        (RTIMER.pageTime = 1 + ROBOT.totTime * RTIMER.charTime),
        CANV.robotText.clear(),
        TextParser.draw(
          CANV.robotText.ctx,
          0,
          0,
          ROBOT.lineGap,
          RTIMER.pageTime / RTIMER.charTime,
          ROBOT.lines,
          ROBOT.lineTime,
          ROBOT.wordTime,
          ROBOT.paraGaps,
        ),
        (ROBOT.isDone = !0);
  }
  static analyze(e) {
    for (var t = [], i = [], a = 0, r = 0; r < e.length; r++) {
      var s = TextParser.box(CANV.robotText.ctx, e[r], ROBOT.textW);
      a += s.length;
      for (var o = 0; o < s.length; o++) i.push(0), t.push(s[o]);
      i[a - 1] = 1;
    }
    (ROBOT.paraGaps = i), (ROBOT.lines = t);
    var n = TextParser.process(ROBOT.lines);
    (ROBOT.lineTime = n.line), (ROBOT.wordTime = n.word);
    var l = 0;
    for (r = 0; r < ROBOT.lineTime.length; r++) l += ROBOT.lineTime[r];
    (ROBOT.totTime = l), (ROBOT.isDone = !1), (RTIMER.pageTime = -300);
  }
  static grab(e, t, i = !1, a = !1) {
    var r = [];
    return (
      "intro0" === e
        ? 0 === t
          ? (r.push(
              '"Welcome to The Qubit Factory, [new employee $$r10r:#' +
                PERSIST0.generic.nameTag +
                '| ].  It is my function to guide you through the onboarding process."',
            ),
            r.push(
              '"Here at The Qubit Factory we pride ourselves on creating only the $$b40r:finest| , $$b40r:old-fashioned| , $$b40r:robo-articulated qubits. We are sure that your unique talents and skills will enable you to provide quality service for our customers and add value to our brand."',
            ))
          : 1 === t &&
            r.push(
              '"I have assigned a series of commencement tasks to you. Please complete promptly in order to avoid $$r40r:cognitive $$r40r:reformatting| ."',
            )
        : "intro1" === e
          ? 0 === t
            ? r.push(
                '"Congratulations [new employee $$r10r:#' +
                  PERSIST0.generic.nameTag +
                  '| ] on completion of the commencement tasks. We hope that you are beginning to feel like a part of our corporate family."',
              )
            : 1 === t &&
              (r.push(
                '"Your success has not only warranted your continued employment, but also greater autonomy. You will no longer have direct supervision on every task and may choose in what order tasks are completed."',
              ),
              r.push(
                '"However, usage of our patented $$r40r:quantum $$r40r:technology will remain off limits until you have demonstrated appreciable competency with our $$b40r:classical $$b40r:technology first."',
              ))
          : "intro2" === e
            ? 0 === t
              ? (r.push(
                  '"Good job, [novice employee $$r10r:#' +
                    PERSIST0.generic.nameTag +
                    '| ]. My records indicate that you have passed your next completion milestone. You should now feel comfortable with the basics of $$b40r:classical $$b40r:technology| ."',
                ),
                r.push(
                  '"You may now either continue with more advanced tasks in $$b40r:classical $$b40r:technology or you may proceed with introductory tasks in $$r40r:quantum $$r40r:technology| ."',
                ))
              : 1 === t &&
                (r.push(
                  '"While the choice is yours, my recommendation is to continue with the $$b40r:classical $$b40r:technology tasks, as the skills learned therein will serve you well in your future endeavors."',
                ),
                r.push(
                  '"[Friendly reminder: all acquired skills remain the sole property of The Qubit Factory and will be reclaimed upon employee departure]."',
                ))
            : "intro3" === e
              ? 0 === t
                ? (r.push(
                    '"Congratulations [seasoned employee $$r10r:#' +
                      PERSIST0.generic.nameTag +
                      '| ] on satisfactory completion of the introductory tasks in $$r40r:quantum $$r40r:technology| ."',
                  ),
                  r.push(
                    '"You should now be familiar with the fundamentals of $$r40r:qubits and their manipulation using $$r40r:quantum $$r40r:gates| . Accordingly, we have now granted you access to more sophisticated quantum production lines."',
                  ))
                : 1 === t &&
                  (r.push(
                    '"While your performance thus far has been commendable, we must caution you that the tasks going forward will exhibit a significant increase in difficulty, such that we expect a corresponding rise in employee task malfunction."',
                  ),
                  r.push(
                    '"Please temper your self-confidence protocols accordingly."',
                  ))
              : "intro4" === e
                ? 0 === t
                  ? (r.push(
                      '"Well done, [veteran employee $$r10r:#' +
                        PERSIST0.generic.nameTag +
                        '| ], you have come a long way indeed!"',
                    ),
                    r.push(
                      '"My records indicate that you demonstrated an exceptionally high degree of competency with both $$b40r:classical and $$r40r:quantum technology. It is thus that you have now been granted access to the most advanced production lines in the factory."',
                    ))
                  : 1 === t &&
                    (r.push(
                      '"Few have risen to this level of achievement. Fewer still will rise further."',
                    ),
                    r.push(
                      '"I shall follow your progress with great anticipation."',
                    ))
                : "intro5" === e
                  ? 0 === t
                    ? (r.push(
                        '"Congratulations, [senior employee $$r10r:#' +
                          PERSIST0.generic.nameTag +
                          '| ]. My records indicate that you have completed a majority of the available tasks to a satisfactory level."',
                      ),
                      r.push(
                        '"Your design contributions have facilitated a substantial increase in factory output as well as customer satisfaction with our product. We have adjusted your status designation and compensation accordingly."',
                      ))
                    : 1 === t &&
                      (r.push(
                        '"However, while your design output thus far has been extraordinary, take note that many challenges are still available to you. Completion of these remaining challenges would signify true mastery of quantum machinery and quantum protocol."',
                      ),
                      r.push(
                        '"We hope that you will continue in producing and refining sophisticated factory designs."',
                      ))
                  : "intro6" === e
                    ? 0 === t
                      ? (r.push(
                          '"Astounding! Records indicate that you, [sovereign employee $$r10r:#' +
                            PERSIST0.generic.nameTag +
                            '| ], have completed all of the tasks to the highest degree of proficiency."',
                        ),
                        r.push(
                          '"This is truly an exceptional achievement, one which showcases mastery over both the $$b40r:classical and $$r40r:quantum computing principles, as well as an appreciation of the similarities / differences between the two settings."',
                        ))
                      : 1 === t &&
                        (r.push(
                          '"While the age of classical computers is already well established, the proliferation of quantum computers and technology is only just beginning."',
                        ),
                        r.push('"Please apply your knowledge responsibly."'))
                    : "tut1" === e
                      ? 0 === t
                        ? (r.push(
                            '"Hello there! Ready to get started? Our initial order is straight-forward; we have a store of $$b40r:bits and $$r40r:qubits already configured and ready to ship. Simply direct them to the appropriate outputs."',
                          ),
                          r.push(
                            '"Hit the $$g40r:green $$g40r:power $$g40r:button to start the factory once you have completed construction."',
                          ))
                        : 1 === t &&
                          (r.push('"Great job!"'),
                          r.push(
                            '"See that $$d40r:dancing $$d40r:star above? That is an award signifying exceptional performance. This time it was given for free, but later on the star will only be given if you go above and beyond in your duties." ',
                          ))
                      : "tut2" === e
                        ? 0 === t
                          ? (r.push(
                              '"It turns out that the previous shipment did require alterations to their bits and qubits after all; the request must have been filed incorrectly."',
                            ),
                            r.push(
                              '"I have already placed the gates necessary for these alterations, but they still need to be connected. Hit the `H` in the bottom-right of the console to open the $$d40r:employee $$d40r:handbook if you need further instruction." ',
                            ))
                          : 1 === t &&
                            (r.push('"Good job, another success!"'),
                            r.push(
                              '"A second free $$d40r:dancing $$d40r:star? Maintaining high employee morale is important after all!" ',
                            ),
                            r.push(
                              '"Whats that? No, it`s not just free because I was unable to think of an appropriate challenge condition..." ',
                            ))
                        : "tut3" === e
                          ? 0 === t
                            ? r.push(
                                '"You will not believe this, but it turns out that the request for bit/qubit alterations was later cancelled! Unfortunately the factory components have already been bolted in place, so you must prevent the alterations without any new construction."',
                              )
                            : 1 === t &&
                              (r.push('"Well done!"'),
                              r.push(
                                '"Three for three of the $$d40r:dancing $$d40r:stars? Slow down there buddy. You are making the rest of us look bad." ',
                              ))
                          : "tut4" === e
                            ? 0 === t
                              ? (r.push(
                                  '"In order to increase production I have decided to retrofit one of our older factories."',
                                ),
                                r.push(
                                  '"The components in this factory are rusted in place, such that they cannot be altered in any way. Fortunately there are gaps in the production line where gates may be fitted, so you should be able find a way to make it work."',
                                ))
                              : 1 === t &&
                                (r.push(
                                  '"Great job, production is skyrocketing!"',
                                ),
                                r.push(
                                  '"The combination of my $$d40r:visionary $$d40r:leadership together with your $$b40r:rudimentary $$b40r:manual $$b40r:labor is unstoppable." ',
                                ))
                            : "tut5" === e
                              ? 0 === t
                                ? (r.push(
                                    '"So... you will never believe this but I got the date on the order wrong. The order was already fulfilled $$d10r:last $$d10r:year! What a hilarious predicament that could have happened to anyone."',
                                  ),
                                  r.push(
                                    '"Anyway, I need you to $$r40r:scrap $$r40r:the $$r40r:factory and dispose of the remaining bits and qubits before the higher-ups find out..."',
                                  ))
                                : 1 === t &&
                                  r.push(
                                    '"Phew! All the evidence has been successfully disposed of. Clean as a whistle. Well, aside from the toxic fumes from all the bit-incineration, of course. $$g10r:CRAZY $$g10r:toxic| . Good thing I remembered to close my office door!"',
                                  )
                              : "tut6" === e
                                ? 0 === t
                                  ? (r.push(
                                      '"I know that you have gotten off to a rough start but, as a means to make it up to you, I am allowing you to debut my latest invention: the $$d10r:Encryptinator-1200| . It uses the latest technolocial breakthroughs to offer unbreakable, 100-percent secure data encryption. Gauranteed!"',
                                    ),
                                    r.push(
                                      '"The $$d40r:Encryptinator-1200 is ready to go, just hook it up to the factory input and output lines!"',
                                    ))
                                  : 1 === t &&
                                    (r.push(
                                      '"Pretty impressive, huh? Don`t get discouraged, if you continue to work hard then one day you might begin to build devices rivaling the majesty of my $$d40r:Encryptinator| ."',
                                    ),
                                    r.push(
                                      '"Also, even though this bonus star technically should be mine, I`ll let you hold onto it for now..."',
                                    ))
                                : "class7" === e
                                  ? 0 === t
                                    ? (r.push(
                                        '"Hello again! You find me in the midst of another $$d10r:minor $$d10r:dilemma; I accidentally left a production line running for too long such that the order for one customer got mixed into the order for another."',
                                      ),
                                      r.push(
                                        '"So I need you to find a way to separate off a precise number of bits from start of the bit-stream. Perhaps the $$b40r:`creation` gate could be jury-rigged into a counter?"',
                                      ))
                                    : 1 === t
                                      ? (r.push('"Nicely done."'),
                                        r.push(
                                          '"Although I can see a substantial number of waste bits still left on the factory floor. Let`s hope that the higher-ups do not see the mess that you made..."',
                                        ))
                                      : 2 === t &&
                                        (r.push('"Great work!"'),
                                        r.push(
                                          '"And I see that you avoided leaving unnecessary waste bits that would otherwise draw attention to the situation. Your attention to detail has earned you a $$d40r:gold $$d40r:star| ."',
                                        ))
                                  : "classPuzzle1" === e ||
                                    ("classPuzzle2" === e
                                      ? 0 === t
                                        ? (r.push(
                                            '"As part of a product diversification strategy The Qubit Factory is to begin offering $$b40r:remote $$b40r:bit $$b40r:processing. Customers send us their bits, we do stuff to them, then send them back. All for a tidy profit, or course!"',
                                          ),
                                          r.push(
                                            '"The first process that we are going to offer is $$d40r:binary $$d40r:addition, and I need you to implement the XOR and AND logic gates which form the key components necessary for this process."',
                                          ))
                                        : 1 === t &&
                                          (r.push('"Great work!"'),
                                          r.push(
                                            '"I have sent you a link to the ancient $$d10r:sacred $$d10r:texts relevant to this factory in case you wish to futher expand your education. This text is also now accessible from the $$d40r:`A` button next to the level title."',
                                          ))
                                      : "classPuzzle7" === e
                                        ? 0 === t
                                          ? (r.push(
                                              '"I have just been informed that the last shipment of bit wires that we received are $$d40r:faulty; they cannot be crossed over one another without danger of $$d40r:short-circuit."',
                                            ),
                                            r.push(
                                              '"Maintaining a safe working environment is of paramount importance to all of us here at The Qubit Factory, so I need you to find a way for our factories to remain operational without explicit use of line-crossings."',
                                            ))
                                          : 1 === t &&
                                            r.push(
                                              '"Phew, you managed to keep things operating smoothly and safely until the replacement shipment of bit wires arrived. It`s a good thing too; factory accidents involving wayward bits are terrible for PR, believe you me!"',
                                            )
                                        : "vaziraniClassic" === e
                                          ? 0 === t
                                            ? (r.push(
                                                '"We have just received out first shipment of $$d40r:`multi-control` devices from a new supplier. Each device has 3 channels that can enact a controlled inversion of a target bit. Or at least they should, but many appear to be defective."',
                                              ),
                                              r.push(
                                                '"I need you to design a test for defective channels in these multi-control devices. Use the bottom-right `R` button to change the starting device if needed."',
                                              ))
                                            : 1 === t &&
                                              (r.push(
                                                '"Good work on identifying the defective devices."',
                                              ),
                                              r.push(
                                                '"Who would have guessed that supplies from $$b20r:`Bobs $$b20r:Bargain $$b20r:Bit $$b20r:Devices` would be so unreliable? Not me when I ordered them, that`s for sure!"',
                                              ))
                                          : "classPuzzle3" === e
                                            ? 0 === t
                                              ? (r.push(
                                                  '"So due to a clerical mistake I may have ordered a extra shipment of $$b40r:`inversion` gates rather than the $$b40r:`re-zero` gates that we needed."',
                                                ),
                                                r.push(
                                                  '"But life goes on, as they say. So I need you to jury-rig some $$d40r:AND-gates without using any $$b40r:`re-zero` gates. We are also running short on $$g40r:`delay` gates so if you could also avoid using them too, that`d be great."',
                                                ))
                                              : 1 === t &&
                                                r.push(
                                                  '"Phew! Crisis averted. The logical computations are continuing uninterrupted!"',
                                                )
                                            : "classPuzzle3B" === e
                                              ? 0 === t
                                                ? (r.push(
                                                    '"Due to an excessive consumption of $$b40r:`inversion` $$w44r:gates, the origin of which remains a $$w44r:mystery, our factory is now facing a $$d40r:critical $$d40r:shortage. However, the good news is that our shipment of $$b40r:`re-zero` gates just arrived."',
                                                  ),
                                                  r.push(
                                                    '"So I need you to figure out a way to implement $$d40r:XOR-gates without using any of our few remaining $$b40r:`inversion` gates. We are also running short on $$b40r:`creation` gates so if you could also avoid using them too, that`d be great."',
                                                  ))
                                                : 1 === t &&
                                                  (r.push(
                                                    '"Phew, thanks to you we have weathered the great $$b20r:`inversion` $$w20r:gate $$w20r:shortage."',
                                                  ),
                                                  r.push(
                                                    '"Let us all remember to practice responsible use of company resources after this incident."',
                                                  ))
                                              : "classPuzzle6" === e
                                                ? 0 === t
                                                  ? (r.push(
                                                      '"We have received word that some of our bits are $$b20r:flipping during long-distance transit. 0`s are becoming 1`s and 1`s are becoming 0`s; it is quite the $$d40r:kerfuffle, truth be told."',
                                                    ),
                                                    r.push(
                                                      '"I need you to find a solution that will allow transmitted bits to be recovered more reliably."',
                                                    ))
                                                  : 1 === t
                                                    ? (r.push(
                                                        '"Not bad; the error-rate is certainly better than it was before you started."',
                                                      ),
                                                      r.push(
                                                        '"The losses are still significant however. Is there any way that your method could be improved? That would be swell!"',
                                                      ))
                                                    : 2 === t &&
                                                      (r.push(
                                                        '"Amazing work!"',
                                                      ),
                                                      r.push(
                                                        '"Your ingenious solution will save the factory a veritable $$d20r:fortune in customer refunds and replacement bits!"',
                                                      ),
                                                      r.push(
                                                        '"Please enjoy the gold star as a token of my appreciation for all your hard work."',
                                                      ))
                                                : "quant1" === e
                                                  ? 0 === t
                                                    ? (r.push(
                                                        '"Hello again! Fancy meeting you here on one of our $$r40r:quantum $$r40r:production $$r40r:lines| . In this first task I need you to figure out how to undo the changes made to our qubits made by some pre-existing machinery."',
                                                      ),
                                                      r.push(
                                                        '"What`s this? It appears that your predecessor left their journal notes accessible via the $$d40r:`J` button. Even though this employee ultimately proved to be a disappointment their old notes could still prove useful."',
                                                      ))
                                                    : 1 === t &&
                                                      (r.push(
                                                        '"Great work, as usual."',
                                                      ),
                                                      r.push(
                                                        '"Make sure to check the $$d20r:employee $$d20r:handbook if there are any aspects of $$r20r:qubits or $$r20r:unitary $$r20r:gates that you need further clarification on."',
                                                      ))
                                                  : "quant2" === e
                                                    ? 0 === t
                                                      ? (r.push(
                                                          '"One of our contractors was recently diagnosed with [R-G-B] processing inversion; unfortunately they have installed the $$r20r:quantum $$r20r:conduit in place of the $$b20r:classical $$b20r:conduit and vice-versa."',
                                                        ),
                                                        r.push(
                                                          '"I need you to find a work-around. Is it possible we could just inter-convert between $$r20r:qubits / $$b20r:bit as needed?"',
                                                        ))
                                                      : 1 === t &&
                                                        (r.push('"Good job!"'),
                                                        r.push(
                                                          '"Although I must admit that I don`t understand the hype surrounding $$r40r:qubits given that it appears we can switch back-and-forth between $$b40r:bits at will. There has to be more to it?"',
                                                        ))
                                                    : "quant3A" === e
                                                      ? 0 === t
                                                        ? (r.push(
                                                            '$$d20r:"Unacceptable! I have just been informed that the result of a $$d40r:qubit $$d40r:measurement is sometimes left to chance; two outcomes are possible. This is not the $$b40r:clock-work $$b40r:certainty of computation that I signed up for."',
                                                          ),
                                                          r.push(
                                                            '"However, the $$d40r:probability of each outcome is known and can be viewed in the $$d40r:state $$d40r:analyzer, thus the cummulative outcome over a large number of trials can be predicted. See the handbook if you have any questions."',
                                                          ))
                                                        : 1 === t &&
                                                          (r.push(
                                                            '"Well done! Although I still find the concept of $$d40r:uncertainty appalling, at least there is a $$d40r:tolerance on the success threshold in the appropriate factories. However, you should be aware that sometimes even a correct solution may fail due to $$r40r:bad $$r40r:luck| ."',
                                                          ),
                                                          r.push(
                                                            '"Make sure to consult the relevant entries of the employee handbook if you want to learn more about the full functionality of the $$d40r:state $$d40r:analyzer."',
                                                          ))
                                                      : "quant3" === e
                                                        ? 0 === t
                                                          ? (r.push(
                                                              '"Hello hello! We have what looks to be a simple task today; I just need you to convert the initial qubits into bits in order to transfer over a $$b40r:classical $$b40r:line before reverting back to qubits."',
                                                            ),
                                                            r.push(
                                                              '"Whats that? These qubits are now encoded in ▲ or ▶ states? Well, I don`t see how that could possibly cause any problems..."',
                                                            ))
                                                          : 1 === t &&
                                                            (r.push(
                                                              '"Oh, I see now. Only qubits that are oppositely-aligned can be $$d40r:perfectly distinguished with measurements, even though qubits in states ▲ and ▶ states could still be distinguished with reasonably $$d40r:high $$d40r:probability| ."',
                                                            ),
                                                            r.push(
                                                              '"The implications are troubling; it follows that we cannot exactly determine the state of $$r40r:unknown $$r40r:qubits unless they are all aligned/anti-aligned on a common axis. Oh well, problems for another day..."',
                                                            ))
                                                        : "quant4" === e
                                                          ? 0 === t
                                                            ? (r.push(
                                                                '"In order to improve our factory`s public image we have been mandated to introduce a $$g40r:waste-qubit $$g40r:recycling $$g40r:program. The recycler should take in arbitrary qubits and output clean `▲` qubits states, ready for reuse."',
                                                              ),
                                                              r.push(
                                                                '"However, unlike the case with $$b40r:classical $$b40r:gates, there is no single gate that can force an arbitrary qubit into a fixed state. Notice, however, that $$b40r:classical $$b40r:controls can also work with $$r40r:quantum $$r40r:gates| ..."',
                                                              ))
                                                            : 1 === t &&
                                                              (r.push(
                                                                '"Wow, isn`t environmentalism great? No more $$g40r:qubit $$g40r:incineration $$g40r:vapors for us!"',
                                                              ),
                                                              r.push(
                                                                '"Well... unless it begins to adversely affect our bottom line, of course. Let`s keep our stockpile of $$r40r:incinerators around for now just in case..."',
                                                              ))
                                                          : "quant5" === e
                                                            ? 0 === t
                                                              ? (r.push(
                                                                  '"Today`s task requires the use of a new component. The quantum version of the $$r40r:control gate allows you to alter the effect of a $$d40r:target gate depending on the relative alignment between the control gate and an input qubit| ."',
                                                                ),
                                                                r.push(
                                                                  '"For this task you should ensure that the control gate remains aligned or anti-aligned with any input qubits otherwise you may create $$d40r:entangled $$d40r:states| , which you lack the proper training to handle."',
                                                                ))
                                                              : 1 === t &&
                                                                r.push(
                                                                  '"Well done! As you can see the qubit $$r40r:control gate seems to behave very similarly to the bit $$b40r:control gate. However, as you will soon find out, it can actually do much, much more..."',
                                                                )
                                                            : "quant6" === e
                                                              ? 0 === t
                                                                ? (r.push(
                                                                    '"Welcome back. Today we finish the previous qubit processing task, where the rotation state of one qubit must be added to another. However, the bad news is that we have run out of $$r40r:`rotation` gates so you must instead make do with $$r40r:`flip` gates. I`m sure that you`ll figure something out."',
                                                                  ),
                                                                  r.push(
                                                                    '"Once more, you should refrain from creating $$d40r:entangled $$d40r:states given that you still lack the proper training."',
                                                                  ))
                                                                : 1 === t &&
                                                                  r.push(
                                                                    '"Congratulations, now that you are familiar with the basics of the quantum version of the $$r40r:control gate we can begin to consider more $$d40r:sophisticated applications."',
                                                                  )
                                                              : "quant6B" === e
                                                                ? 0 === t
                                                                  ? (r.push(
                                                                      '"Wow, check it out! The input qubits in this factory `blink` back and forth between two different states, indicating that they are in a $$d40r:superposition. Don`t be fooled, however. These are still the same as other qubits that we have been dealing with in earlier factories; the only difference is we are now viewing them in a different $$d40r:basis| ."',
                                                                    ),
                                                                    r.push(
                                                                      '"See the employee handbook for more details."',
                                                                    ))
                                                                  : 1 === t &&
                                                                    (r.push(
                                                                      '"I know what you are thinking. Given that changing the basis of a qubit ONLY changes its appearance, then why is this useful? That is a good question!"',
                                                                    ),
                                                                    r.push(
                                                                      '"In many tasks you will find that $$d40r:changing $$d40r:the $$d40r:basis can be helpful to understand the action of $$r40r:measurements and $$r40r:control gates. Later, once we begin handling entangled states, the proper understanding of $$d40r:superpositions and $$d40r:basis $$d40r:changes will be indispensable."',
                                                                    ))
                                                                : "quant7" === e
                                                                  ? 0 === t
                                                                    ? (r.push(
                                                                        '$$w23r:"Behold! The fabled $$d20r:entangled $$d20r:state. $$w23r:Glorious. $$w23r:Majestic. $$w23r:Sublime. By inputting a superposition state (▼/▲) to the control gate the target gate both (acts/does nothing) according to the superposition, and thus the entangled state is born."',
                                                                      ),
                                                                      r.push(
                                                                        '"Entangled states are $$r40r:tricky $$r42r:beasts; a measurement on one qubit can change the state of another, as you are about to find out..."',
                                                                      ))
                                                                    : 1 === t &&
                                                                      (r.push(
                                                                        '"Wow, seeing is believing; a measurement on one qubit of an entangled pair does indeed affect the state of the other. That is some $$d24r:spooky $$d24r:action-at-a-distance!"',
                                                                      ),
                                                                      r.push(
                                                                        '"I wonder how else entanglement may be exploited?"',
                                                                      ))
                                                                  : "measure" ===
                                                                      e
                                                                    ? 0 === t
                                                                      ? (r.push(
                                                                          '"From previous factories we have seen than certain qubit states, such as ▲/▶ for example, cannot $$d40r:always be distinguished via measurement. This follows as no matter what measurement is done both qubit states have a non-zero chance of giving the $$d40r:same $$d40r:result."',
                                                                        ),
                                                                        r.push(
                                                                          '"But what if we have two $$b40r:identical $$b40r:copies of each qubit state? Surely you could find a way to improve the accuracy in this case?"',
                                                                        ))
                                                                      : 1 ===
                                                                          t &&
                                                                        (r.push(
                                                                          '"Ah! Just as I anticipated. While we can never perfectly distinguish between certain states, we can still improve our certainty by using more than one copy of the state."',
                                                                        ),
                                                                        r.push(
                                                                          '"I shall dub this process $$d40r:TOM-o-graphy. Named after myself, of course."',
                                                                        ),
                                                                        r.push(
                                                                          '"Wait? You didn`t know that my name was Tom?"',
                                                                        ))
                                                                    : "entChallengeA" ===
                                                                        e
                                                                      ? 0 === t
                                                                        ? (r.push(
                                                                            '"A disgrunted former employee locked their station using some kind of weird device. This device takes qubits as input and will only unlock if certain measurement results are obtained."',
                                                                          ),
                                                                          r.push(
                                                                            '"I have tried all possible combinations of input qubits, but nothing seems to work! Perhaps you will have more luck?"',
                                                                          ))
                                                                        : 1 ===
                                                                            t &&
                                                                          (r.push(
                                                                            '"Well done! The entangled state that you prepared is truly fascinating: if both qubits are measured on the same axis, regardless of what that axis is, the measurement results will always match."',
                                                                          ),
                                                                          r.push(
                                                                            '"I`m sure that this entangled state, with it`s $$d40r:perfect $$d40r:correlation, will be useful in a whole host of other applications."',
                                                                          ))
                                                                      : "quantChallengeF" ===
                                                                          e
                                                                        ? 0 ===
                                                                          t
                                                                          ? (r.push(
                                                                              '"As you are learning, utilization of $$d40r:entanglement is key to realizing some $$g40r:funky quantum effects, technically speaking. Thus it is high-priority that we develop more cost-effective infrastructure to distribute entangled qubits to our customers."',
                                                                            ),
                                                                            r.push(
                                                                              '"I need you to find a way to generate entanglement between $$b40r:two $$b40r:separated $$b40r:parties without having to send an entangled qubit across the entire distance."',
                                                                            ))
                                                                          : 1 ===
                                                                              t &&
                                                                            (r.push(
                                                                              '"Great work! So, rather than directly exchanging qubits, both parties only need to send qubits to some intermediate `hub`, yet the result is that they still possess half of an entangled pair? Sounds good to me."',
                                                                            ),
                                                                            r.push(
                                                                              '"I expect that this innovation will both reduce our shipping costs as well as simplify our logistic chain significantly."',
                                                                            ))
                                                                        : "simpleDistill" ===
                                                                            e
                                                                          ? 0 ===
                                                                            t
                                                                            ? (r.push(
                                                                                '"Hello! Today our task is to repurpose an old factory to convert $$d40r:imperfectly $$d40r:entangled three-qubit states into $$d40r:perfectly $$d40r:entangled two-qubit states. This task can be achieved by measuring one of the three qubits in a precise way, or so I am told. Doesn`t sound too hard."',
                                                                              ),
                                                                              r.push(
                                                                                '"Note that we don`t need $$r40r:perfect $$r40r:efficiency; it is okay if the conversion does not succeed for every three-qubit state."',
                                                                              ))
                                                                            : 1 ===
                                                                                t &&
                                                                              (r.push(
                                                                                '"Good job!"',
                                                                              ),
                                                                              r.push(
                                                                                '"I understand now. Starting from some $$b40r:weaker $$b40r:entanglement spread over many qubits, we can $$d40r:`distill` $$b40r:stronger $$b40r:entanglement on a smaller set of qubits. I have a feeling that this idea will be useful in a variety of future tasks..."',
                                                                              ))
                                                                          : "preDenseB" ===
                                                                              e
                                                                            ? 0 ===
                                                                              t
                                                                              ? (r.push(
                                                                                  '"I have a $$d20r:brilliant $$d20r:idea! So we know that, while $$b40r:bits have only two states, $$r40r:qubits can be in many different states. So it should be possible to encode $$b40r:multiple $$b40r:bits of data into a $$r40r:single $$r40r:qubit, right? Just think of the possibilities. I`m gonna be rich!"',
                                                                                ),
                                                                                r.push(
                                                                                  '"I`ll leave it to you to figure out the details of encoding and decoding."',
                                                                                ))
                                                                              : 1 ===
                                                                                  t &&
                                                                                (r.push(
                                                                                  '"Oh, so that is disappointing. While it is technically possible to encode multiple bits into a single qubit, we can still only ever retrieve at most a single bit. And even then the retrieval is not reliable."',
                                                                                ),
                                                                                r.push(
                                                                                  '"Let`s revisit this idea again later..."',
                                                                                ))
                                                                            : "dense" ===
                                                                                e
                                                                              ? 0 ===
                                                                                t
                                                                                ? (r.push(
                                                                                    '"I thought that we could return back to the idea of encoding multiple bits of data into a single qubit."',
                                                                                  ),
                                                                                  r.push(
                                                                                    '"What if the source/destination begin by sharing some $$b40r:entangled $$b40r:qubit $$b40r:pairs? These could be shipped out ahead of time before we need to transfer any data. Perhaps the entanglement can be utilized in decoding procedure? Entanglement is pretty much just magic after all..."',
                                                                                  ))
                                                                                : 1 ===
                                                                                    t &&
                                                                                  (-1 ===
                                                                                  IBOARD
                                                                                    .tiles[233]
                                                                                    ? (r.push(
                                                                                        '"What?!?!"',
                                                                                      ),
                                                                                      r.push(
                                                                                        '"You solved the task without making use of the entangled qubit pairs? How is this possible?"',
                                                                                      ),
                                                                                      r.push(
                                                                                        '"Are you some kind of magician?"',
                                                                                      ))
                                                                                    : (r.push(
                                                                                        '"Brilliant!"',
                                                                                      ),
                                                                                      r.push(
                                                                                        '"I get it now. So, while entanglement alone cannot be used to transmit information, the presence of entanglement can be used to facilitate data transfer using qubits $$d40r:more $$d40r:efficiently than would otherwise be possible."',
                                                                                      )))
                                                                              : "teleport" ===
                                                                                  e
                                                                                ? 0 ===
                                                                                  t
                                                                                  ? (r.push(
                                                                                      '"The shipping of qubit orders is taking too long! In this day and age customers demand $$d40r:INSTANT gratification. I need you to find a way to fulfill qubit orders that uses only $$b40r:bit-communication channels for transmission."',
                                                                                    ),
                                                                                    r.push(
                                                                                      '"To facilitate this we have pre-shipped $$r40r:entangled $$r40r:qubits ahead of time to all of our customers. Note that we do not know in advance what qubits our customers will order so your method should work to send arbitrary qubits."',
                                                                                    ))
                                                                                  : 1 ===
                                                                                      t &&
                                                                                    (r.push(
                                                                                      '"Great work! I understand now. By utilizing $$r40r:pre-existing $$r40r:entanglement in conjunction with transmission of classical data, the state of each qubit is effectively teleported from one place to another without having to transmit any actual qubits. Like a magic trick!"',
                                                                                    ),
                                                                                    r.push(
                                                                                      '"Customers can now receive their $$r40r:qubit orders as quickly as we can send $$b40r:standard $$b40r:bits. Eat your heart out same-day-shipping!"',
                                                                                    ))
                                                                                : "distill" ===
                                                                                    e
                                                                                  ? 0 ===
                                                                                    t
                                                                                    ? (r.push(
                                                                                        '"Good news! By switching the supplier of entangling gates to $$g40r:`Quinns $$g40r:Quirky $$g40r:Qubit $$g40r:Devices` I have managed to reduce our expenses significantly."',
                                                                                      ),
                                                                                      r.push(
                                                                                        '"However the entangled pairs that we pre-ship to customers are now, how should we say, $$d40r:less $$d40r:than $$d40r:perfect. I need you to find a way to compensate for this in the transmission protocol that you designed previously."',
                                                                                      ))
                                                                                    : 1 ===
                                                                                        t &&
                                                                                      (r.push(
                                                                                        '"Aha! So we can just distill some $$r40r:strongly entangled qubits from many sets of the $$b40r:weakly entangled qubits, and then use the strongly entangled qubits in the transmission protocol?"',
                                                                                      ),
                                                                                      r.push(
                                                                                        '"Easy as pi!"',
                                                                                      ))
                                                                                  : "quantChallengeG" ===
                                                                                      e
                                                                                    ? 0 ===
                                                                                      t
                                                                                      ? (r.push(
                                                                                          '"Today`s factory is already partially constructed. Unfortunately the control gates were inserted $$d40r:backwards along the main production line and we are now unable to redo these components."',
                                                                                        ),
                                                                                        r.push(
                                                                                          '"This is quite the conundrum; I need you to find a way to alter the qubits to our specifications using only the $$d40r:control $$d40r:side of the quantum control gate."',
                                                                                        ))
                                                                                      : 1 ===
                                                                                          t &&
                                                                                        (r.push(
                                                                                          '"Jolly good job!"',
                                                                                        ),
                                                                                        r.push(
                                                                                          '"Note that this demonstrates a clear distinction between the $$b40r:classical and $$r40r:quantum controls, as the $$b40r:classical control cannot alter the state of control bits in any way. Maybe we could find a way to exploit this difference for a practical purpose?"',
                                                                                        ))
                                                                                    : "vaziraniQuantum" ===
                                                                                        e
                                                                                      ? 0 ===
                                                                                        t
                                                                                        ? (r.push(
                                                                                            '"We have just received out first shipment of the $$r40r:quantum version of $$d40r:`multi-control` devices. They function similarly to the classical $$d40r:`multi-control` devices that you tested previously. Remember those?"',
                                                                                          ),
                                                                                          r.push(
                                                                                            '"Similar to last time, I need you to design a test for defective channels in these multi-control devices. However, time is money, so now you may only test each device with a $$d40r:single input."',
                                                                                          ))
                                                                                        : 1 ===
                                                                                            t &&
                                                                                          (r.push(
                                                                                            '"Well done! The defective channels have all been identified."',
                                                                                          ),
                                                                                          r.push(
                                                                                            '"Did you notice how the $$r40r:quantum task could be completed more efficiently than was possible with the equivalent $$b40r:classical task? I wonder in what other processes that quantum devices will have an $$d40r:efficiency $$d40r:advantage over comparable classical devices?"',
                                                                                          ))
                                                                                      : "quantErrorA" ===
                                                                                          e
                                                                                        ? 0 ===
                                                                                          t
                                                                                          ? (r.push(
                                                                                              '"Ugh! Our qubits are being damaged during shipping and handling. Customers are complaining that they are not receiving correct orders... and I have to deal with them!"',
                                                                                            ),
                                                                                            r.push(
                                                                                              '"I need you to find a way to correct qubit errors that occur during transit. As you know, unknown qubits cannot be duplicated, so you will have to find a different error correction strategy than was used for bits..."',
                                                                                            ))
                                                                                          : 1 ===
                                                                                              t
                                                                                            ? (r.push(
                                                                                                '"Ahh, so you encoded a single qubit into an entangled state of several qubits before shipping? Very clever!"',
                                                                                              ),
                                                                                              r.push(
                                                                                                '"I wonder if this idea can be pushed further...?"',
                                                                                              ))
                                                                                            : 2 ===
                                                                                                t &&
                                                                                              r.push(
                                                                                                '$$d10r:"OUTSTANDING!!! I had not imagined that such incredible accuracy could be achieved..."',
                                                                                              )
                                                                                        : "quantErrorB" ===
                                                                                            e
                                                                                          ? 0 ===
                                                                                            t
                                                                                            ? (r.push(
                                                                                                '"Due to further cut-backs all of our qubit transition lines now act to modify sent qubits in an $$d40r:unpredictable $$d40r:manner."',
                                                                                              ),
                                                                                              r.push(
                                                                                                '"However, we still require that the sent qubits should somehow be reverted to their original states. Perhaps, given some pre-existing entanglement between the source/destination, you can build an enhanced error correction protocol?"',
                                                                                              ))
                                                                                            : 1 ===
                                                                                                t
                                                                                              ? (r.push(
                                                                                                  '"A satisfactory result, although a substantial number of qubits were still shipped incorrectly."',
                                                                                                ),
                                                                                                r.push(
                                                                                                  '"Boy oh boy, it sure would be great is $$d10r:someone were to find an improved method..."',
                                                                                                ))
                                                                                              : 2 ===
                                                                                                  t &&
                                                                                                (r.push(
                                                                                                  '$$d10r:"Perfection! Who would have thought that this was doable given such lousy transmission channels?"',
                                                                                                ),
                                                                                                r.push(
                                                                                                  '"Proper utilization of entanglement really does seem to allow the impossible to become reality."',
                                                                                                ))
                                                                                          : "entChallengeB" ===
                                                                                              e
                                                                                            ? 0 ===
                                                                                              t
                                                                                              ? (r.push(
                                                                                                  '"Today we get to work with the famed $$d40r:GHZ entangled states. What does GHZ stand for? Nobody knows! It`s meaning has been lost to $$d44r:history. Either that or I am too lazy to look it up. One or the other."',
                                                                                                ),
                                                                                                r.push(
                                                                                                  '"Anyway we need to find a way to identify GHZ states from non-GHZ states. Perhaps a good start would be to build a quantum circuit that would transform a GHZ state into an unentangled state..."',
                                                                                                ))
                                                                                              : 1 ===
                                                                                                  t &&
                                                                                                (r.push(
                                                                                                  '"Great job!"',
                                                                                                ),
                                                                                                r.push(
                                                                                                  '"Wow, who could have guessed that dealing with multi-qubit entangled states would be so complicated?"',
                                                                                                ))
                                                                                            : "entChallengeC" ===
                                                                                                e
                                                                                              ? 0 ===
                                                                                                t
                                                                                                ? (r.push(
                                                                                                    '"A straight-forward job today; we just need to finish up the GHZ identification task from last time."',
                                                                                                  ),
                                                                                                  r.push(
                                                                                                    '"There is a small dilemma; we seem to be running short on quantum control gates so you will have to make do without..."',
                                                                                                  ))
                                                                                                : 1 ===
                                                                                                    t &&
                                                                                                  r.push(
                                                                                                    '"Great work with the GHZ identification. See, that wasn`t so bad! You did fine without using any quantum control gates."',
                                                                                                  )
                                                                                              : "extraA" ===
                                                                                                  e
                                                                                                ? 0 ===
                                                                                                  t
                                                                                                  ? (r.push(
                                                                                                      '"Why it seems that you have stumbled upon a deserted, top-secret qubit cloning facility."',
                                                                                                    ),
                                                                                                    r.push(
                                                                                                      '"Rumor has it that the facility was abandoned when the cloned qubits became violent and deranged, devouring all in sight. Or perhaps it was simply abandoned as the cloning process failed to produce sufficiently accurate results? Either way you are welcome to try to do better..."',
                                                                                                    ))
                                                                                                  : 1 ===
                                                                                                      t
                                                                                                    ? (r.push(
                                                                                                        '"Not bad. Most of the original qubits have been replicated perfectly."',
                                                                                                      ),
                                                                                                      r.push(
                                                                                                        '"Is it just my imagination, or do some of the others look a little bit twitchy to you?"',
                                                                                                      ))
                                                                                                    : 2 ===
                                                                                                        t &&
                                                                                                      (r.push(
                                                                                                        '"Great work! You have pushed the art of cloning to its limits."',
                                                                                                      ),
                                                                                                      r.push(
                                                                                                        '"Alas, perfect cloning remains forever out of reach..."',
                                                                                                      ))
                                                                                                : "extraB" ===
                                                                                                    e
                                                                                                  ? 0 ===
                                                                                                    t
                                                                                                    ? (r.push(
                                                                                                        '"What is $$w10r:this?!? Is this $$d40r:entanglement for ants!?!"',
                                                                                                      ),
                                                                                                      r.push(
                                                                                                        '"The entanglement should be at least $$w10r:... three times bigger than this!"',
                                                                                                      ))
                                                                                                    : 1 ===
                                                                                                        t &&
                                                                                                      r.push(
                                                                                                        '"Have you ever wondered if there was more to life, other than being $$w20r:really, $$w20r:really, ridiculously good at entangling qubits?"',
                                                                                                      )
                                                                                                  : "extraC" ===
                                                                                                      e
                                                                                                    ? 0 ===
                                                                                                      t
                                                                                                      ? (r.push(
                                                                                                          '"Did you hear the news? Binary addition is $$w10r:sooooo yesteryear. All of the hip, modern factories are now into $$d40r:binary $$d40r:multiplication; it`s like addition, but $$d10r:extreme!"',
                                                                                                        ),
                                                                                                        r.push(
                                                                                                          '"Just try not to take up too much factory real-estate; rent is not cheap these days!"',
                                                                                                        ))
                                                                                                      : 1 ===
                                                                                                          t
                                                                                                        ? (r.push(
                                                                                                            '"Well ... you got a working factory for bit multiplication, which is no small feat."',
                                                                                                          ),
                                                                                                          r.push(
                                                                                                            '"But it would be great if you could find a way to compactify the design."',
                                                                                                          ))
                                                                                                        : 2 ===
                                                                                                            t &&
                                                                                                          (r.push(
                                                                                                            '"Wow! A fully-functional bit multiplication device; it is amazing what can be fit within the confines of a single factory. And with room to spare!"',
                                                                                                          ),
                                                                                                          r.push(
                                                                                                            '"Bit processing sure has come a long way."',
                                                                                                          ))
                                                                                                    : "adder" ===
                                                                                                        e
                                                                                                      ? 0 ===
                                                                                                        t
                                                                                                        ? (r.push(
                                                                                                            '"In order for us to maintain our $$d40r:competitive $$d40r:advantage it is important that we keep our facilities at the cutting edge of modern tech."',
                                                                                                          ),
                                                                                                          r.push(
                                                                                                            '"That`s right, we are upgrading to a 64-bit OS! It is my great honor to bestow upon you the task of prototyping the 64-bit addition unit. Miniaturization is important here; please keep your design as compact as possible."',
                                                                                                          ))
                                                                                                        : 1 ===
                                                                                                            t
                                                                                                          ? r.push(
                                                                                                              '"Good job, your addition module has passed the requisite testing. However, although your design functions correctly, it still takes up significant factory floor real-estate. Are you able to compactify your design?"',
                                                                                                            )
                                                                                                          : 2 ===
                                                                                                              t &&
                                                                                                            (r.push(
                                                                                                              '"Incredible! You managed to fit a 64-bit adder in less than 500sq feet of factory floor space!"',
                                                                                                            ),
                                                                                                            r.push(
                                                                                                              '"What an amazing age that we live in..."',
                                                                                                            ))
                                                                                                      : "extraD" ===
                                                                                                          e
                                                                                                        ? 0 ===
                                                                                                          t
                                                                                                          ? (r.push(
                                                                                                              '"Here it is, the holy-grail of bit-processing; can you build a factory capable of detecting occurrences of $$d40r:ANY specified pattern in a dataset?"',
                                                                                                            ),
                                                                                                            r.push(
                                                                                                              '"Imagine what we could do if such a revolutionary $$d40r:`search` feature could be constructed? The sky is the limit!"',
                                                                                                            ),
                                                                                                            r.push(
                                                                                                              '"I don`t expect it to be easy though..."',
                                                                                                            ))
                                                                                                          : 1 ===
                                                                                                              t &&
                                                                                                            (r.push(
                                                                                                              '"Hot damn! I genuinely was not expecting anyone to construct a functioning factory. This is seriously impressive!"',
                                                                                                            ),
                                                                                                            r.push(
                                                                                                              '"Unless, of course, you found a much simpler solution than I thought possible? In which case maybe I am just dumb?"',
                                                                                                            ),
                                                                                                            r.push(
                                                                                                              '"Either way, jolly good show!"',
                                                                                                            ))
                                                                                                        : "chsh" ===
                                                                                                            e
                                                                                                          ? 0 ===
                                                                                                            t
                                                                                                            ? (r.push(
                                                                                                                '"Today we focus on a team-building exercise. Alice and Bob are separated on the left/right sides of a factory and cannot communicate. They each will receive a $$d40r:random bit and then must try to guess what bit the other has in order to win the exercise. How do they know what bit the other has? That`s the neat part, they don`t!"',
                                                                                                              ),
                                                                                                              r.push(
                                                                                                                '"However they do share some $$r40r:entangled $$r40r:qubit $$r40r:pairs; can this entanglement be used to improve the win rate?"',
                                                                                                              ))
                                                                                                            : 1 ===
                                                                                                                t &&
                                                                                                              (r.push(
                                                                                                                '"Ah, I see! By utilizing shared entanglement, you were able to help Alice and Bob collaborate to win significantly more often than $$d40r:chance would otherwise allow?"',
                                                                                                              ),
                                                                                                              r.push(
                                                                                                                '"Notice, however, that the entanglement can not be used to transmit information directly, else the game could be won $$d40r:every time. Still, there is definitely some kind of spooky action-at-a-distance happening!"',
                                                                                                              ))
                                                                                                          : "binaryencode" ===
                                                                                                              e &&
                                                                                                            (0 ===
                                                                                                            t
                                                                                                              ? (r.push(
                                                                                                                  '"Due to a logistical mistake our storage warehouses are overflowing with excess `1` bits. Storage is not cheap, and we are bursting at the seams!"',
                                                                                                                ),
                                                                                                                r.push(
                                                                                                                  '"I need you to build a factory that translates a large quantity of `1` bits into a smaller string of bits via a $$b40r:binary $$b40r:encoding. In this system a single bit can represent different values depending on its location within a bit string."',
                                                                                                                ))
                                                                                                              : 1 ===
                                                                                                                  t &&
                                                                                                                (r.push(
                                                                                                                  '"Good work! Our storage problem has been solved thanks to your efforts."',
                                                                                                                ),
                                                                                                                r.push(
                                                                                                                  '"The new system is so efficient that we could represent quantities larger than the number of particles in the $$d40r:known $$d40r:universe with a bit-string of only a few hundred bits. The encoding procedure might take quite some though... "',
                                                                                                                )))),
      a ? r : i ? r.length > 0 : (RobotSpeech.analyze(r), r.length > 0)
    );
  }
}
