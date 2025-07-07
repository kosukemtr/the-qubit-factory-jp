class SoundData {
  constructor(e, t, i, a) {
    (this._url = e),
      (this._name = t),
      (this._delay = i),
      (this._lastTime = -1),
      (this._volAmp = a),
      SoundData.createBuffer(e, t);
  }
  get url() {
    return this._url;
  }
  get name() {
    return this._name;
  }
  get delay() {
    return this._delay;
  }
  get lastTime() {
    return this._lastTime;
  }
  get lastPlayed() {
    return this._lastPlayed;
  }
  get volAmp() {
    return this._volAmp;
  }
  set lastTime(e) {
    this._lastTime = e;
  }
  set lastPlayed(e) {
    this._lastPlayed = e;
  }
  load() {
    console.log("sfxloaded");
  }
  pause() {
    console.log("sfxpaused");
  }
  static createBuffer(e, t) {
    fetch(e)
      .then((e) => e.arrayBuffer())
      .then((e) => audioContext.decodeAudioData(e))
      .then((e) => (SOUNDBUFFER[t] = e))
      .catch((e) => console.error("Error loading sound:", e));
  }
  play() {
    if (
      OPTS.sfxOn &&
      SFX.enabled &&
      performance.now() - this.lastTime > this.delay
    ) {
      this.lastTime = performance.now();
      const e = audioContext.createBufferSource();
      e.buffer = SOUNDBUFFER[this.name];
      const t = audioContext.createGain();
      (t.gain.value = Math.min(1, this.volAmp * OPTS.sfx)),
        e.connect(t),
        t.connect(audioContext.destination),
        e.start();
    }
  }
  static initAll(e) {
    (SFX.rightBeeped = !0),
      (SFX.wrongBeeped = !0),
      (SFX.tickBeeped = !1),
      (SFX.laserBeeped = !0),
      (SFX.fireBeeped = !0),
      (SFX.createBeeped = !0),
      (SFX.transBeeped = !0),
      (SFX.laserBeeped = !0),
      (SFX.anyBeeped = !1),
      (SFX.title = new Array(47).fill(4)),
      (SFX.title[3] = 2),
      (SFX.title[7] = 1),
      (SFX.title[9] = 0),
      (SFX.title[14] = 2),
      (SFX.title[15] = 2),
      (SFX.title[19] = 1),
      (SFX.title[20] = 2),
      (SFX.title[22] = 1),
      (SFX.title[24] = 1),
      (SFX.title[26] = 2),
      (SFX.title[29] = 1),
      (SFX.title[31] = 1),
      (SFX.title[33] = 2),
      (SFX.title[35] = 1),
      (SFX.title[37] = 0),
      (SFX.title[38] = 1),
      (SFX.title[39] = 2),
      (SFX.title[40] = 0),
      (SFX.title[44] = 2),
      (SFX.title[46] = 1),
      (SFX.background.volume = OPTS.music),
      (SFX.background.loop = !0),
      (SFX.listAll = [
        "mbeep",
        "fbeep",
        "wire",
        "destroy",
        "right",
        "wrong",
        "ntick",
        "ttick",
        "startup",
        "stopdown",
        "create",
        "laser",
        "transform",
        "fire",
        "success",
        "loser",
        "finlaser",
        "manip2",
        "manip",
        "invalid",
        "click",
        "click2",
        "select2",
        "hover",
      ]),
      SoundData.init(e);
  }
  static init(e) {
    SFX.background.load(),
      (SFX.background.volume = OPTS.music),
      OPTS.musicOn && SFX.enabled
        ? SFX.background.play()
        : SFX.background.pause(),
      (SFX.mbeep = new SoundData(e + "sfx/fembeep4.wav", "mbeep", 50, 0.8)),
      (SFX.fbeep = new SoundData(e + "sfx/fembeep7.wav", "fbeep", 50, 0.8)),
      (SFX.wire = new SoundData(e + "sfx/wire.wav", "wire", 50, 0.7)),
      (SFX.destroy = new SoundData(e + "sfx/destroy2.wav", "destroy", 50, 0.7)),
      (SFX.right = new SoundData(e + "sfx/right6.wav", "right", 50, 0.8)),
      (SFX.wrong = new SoundData(e + "sfx/wrong4.wav", "wrong", 100, 0.8)),
      (SFX.ntick = new SoundData(e + "sfx/ntick3.wav", "ntick", 200, 0.4)),
      (SFX.ttick = new SoundData(e + "sfx/ntick3.wav", "ttick", 100, 0.3)),
      (SFX.startup = new SoundData(e + "sfx/startup.wav", "startup", 0, 1)),
      (SFX.stopdown = new SoundData(e + "sfx/startup2.wav", "stopdown", 0, 1)),
      (SFX.create = new SoundData(e + "sfx/create2.wav", "create", 80, 0.8)),
      (SFX.laser = new SoundData(e + "sfx/laser5.wav", "laser", 80, 0.8)),
      (SFX.transform = new SoundData(
        e + "sfx/transform.wav",
        "transform",
        80,
        0.7,
      )),
      (SFX.fire = new SoundData(e + "sfx/fire.wav", "fire", 80, 0.8)),
      (SFX.success = new SoundData(e + "sfx/complete.wav", "success", 0, 1)),
      (SFX.loser = new SoundData(e + "sfx/loser.wav", "loser", 0, 1)),
      (SFX.finlaser = new SoundData(e + "sfx/laser3.wav", "finlaser", 0, 0.75)),
      (SFX.manip2 = new SoundData(
        e + "sfx/transform3.wav",
        "manip2",
        350,
        1.5,
      )),
      (SFX.manip = new SoundData(e + "sfx/transform2.wav", "manip", 350, 1)),
      (SFX.invalid = new SoundData(e + "sfx/wrong5.wav", "invalid", 50, 1)),
      (SFX.click = new SoundData(e + "sfx/click1.wav", "click", 50, 0.8)),
      (SFX.click2 = new SoundData(e + "sfx/click2.wav", "click2", 50, 1)),
      (SFX.select2 = new SoundData(e + "sfx/select2.wav", "select2", 50, 0.6)),
      (SFX.hover = new SoundData(e + "sfx/hover3.wav", "hover", 50, 0.3)),
      (SFX.hover2 = new SoundData(e + "sfx/hover2.wav", "hover2", 50, 0.6));
  }
  static setMusicFull(e) {
    (OPTS.musicOn = !OPTS.musicOn),
      (SFX.background.volume = OPTS.music),
      OPTS.musicOn ? SFX.background.play() : SFX.background.pause();
  }
  static setMusic() {
    (SFX.background.volume = OPTS.music),
      OPTS.musicOn ? SFX.background.play() : SFX.background.pause();
  }
  static setSFX() {}
}
