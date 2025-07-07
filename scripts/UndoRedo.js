class UndoRedo {
  constructor(e) {
    (this._boardStorage = new Array(e).fill(0)),
      (this._numKept = e),
      (this._numCurr = 0),
      (this._numAvail = 0),
      (this._numFwd = 0),
      (this._leftExtend = 0),
      (this._rightExtend = 0);
  }
  get numKept() {
    return this._numKept;
  }
  get numCurr() {
    return this._numCurr;
  }
  get numAvail() {
    return this._numAvail;
  }
  get numFwd() {
    return this._numFwd;
  }
  get boardStorage() {
    return this._boardStorage;
  }
  get leftExtend() {
    return this._leftExtend;
  }
  get rightExtend() {
    return this._rightExtend;
  }
  set numKept(e) {
    this._numKept = e;
  }
  set numCurr(e) {
    this._numCurr = e;
  }
  set numAvail(e) {
    this._numAvail = e;
  }
  set numFwd(e) {
    this._numFwd = e;
  }
  set boardStorage(e) {
    this._boardStorage = e;
  }
  set leftExtend(e) {
    this._leftExtend = e;
  }
  set rightExtend(e) {
    this._rightExtend = e;
  }
  reset(e = !1) {
    (this.boardStorage = new Array(this.numKept).fill(0)),
      (this.boardStorage[0] = IBOARD.copy()),
      (this.numCurr = 0),
      (this.numAvail = 0),
      (this.numFwd = 0),
      e || ((this.leftExtend = 0), (this.rightExtend = 0), CANV.undos.clear());
  }
  add() {
    this.boardStorage[this.numCurr].serialize() !== IBOARD.serialize() &&
      (this.numCurr + 1 >= this.numKept
        ? (this.numCurr = 0)
        : (this.numCurr += 1),
      this.numAvail + 1 >= this.numKept
        ? (this.numAvail = this.numKept - 1)
        : (this.numAvail += 1),
      (this.numFwd = 0),
      (this.boardStorage[this.numCurr] = IBOARD.copy()));
  }
  replace() {
    this.boardStorage[this.numCurr] = IBOARD.copy();
  }
  advance() {
    this.numFwd > 0 &&
      (SFX.click.play(),
      this.numCurr + 1 >= this.numKept
        ? (this.numCurr = 0)
        : (this.numCurr += 1),
      (this.numFwd -= 1),
      (this.numAvail += 1),
      this.boardStorage[this.numCurr] &&
        (IBOARD = this.boardStorage[this.numCurr].copy()));
  }
  retreat() {
    ("gatemanip" !== STATE.state && "qubiting" !== STATE.state) ||
      ((STATE.grab = { type: "none", i0: -1, j0: -1, k0: -1 }),
      (STATE.state = "free")),
      this.numAvail > 0 &&
        (SFX.click.play(),
        0 === this.numCurr
          ? (this.numCurr = this.numKept - 1)
          : (this.numCurr -= 1),
        (this.numFwd += 1),
        (this.numAvail -= 1),
        this.boardStorage[this.numCurr] &&
          (IBOARD = this.boardStorage[this.numCurr].copy()));
  }
}
const STATE = new ControlState(),
  FIELD = {},
  OPTS = {},
  SCENARIO = {},
  CANV = {},
  OFFCANV = {},
  SVG = {},
  ANALYSIS = {},
  OVERLAY = {},
  SEL_STYLES = {},
  DEBUG = {},
  INPUTS = {},
  TIMER = {},
  UTIMER = {},
  RTIMER = {},
  FLARES = {},
  GRADS = {},
  PERF = {},
  TUTORIAL = {},
  ROBOT = {},
  BLUEPRINT = {},
  RBOARD = new Array(1e4).fill(0),
  UBOARD = new Array(2).fill(0),
  PERSIST0 = {},
  SFX = {},
  audioContext = new (window.AudioContext || window.webkitAudioContext)(),
  UNDOREDO = new UndoRedo(10),
  SOUNDBUFFER = {},
  COPYBUFFER = new CopyBuffer(),
  POPWINDOW = {},
  RANDS = {},
  IMGTXT = {};
(RANDS.all = Array.from({ length: 11e4 }, () => Math.random())),
  (RANDS.locs = Array(1e4).fill(0)),
  (RANDS.count = 0),
  (RANDS.tick = -1);
var IBOARD = 0,
  GLOBAL_ID = 0,
  GLOBAL_IDG = 0,
  GLOBAL_IDE = 0;
const MENU = new Menu(0, 0, 0, 0, 0, 0, 0),
  SELECTOR = new SelectLevel(0),
  CTRLMENU = CtrlMenu.initialize(),
  ENTBLOBS = new EntBlob();
ENTBLOBS.makeBlobs(),
  (TIMER.greyMax = 600),
  (TIMER.grey = -1),
  (STATE.profile = 0),
  (FIELD.isOnHarmony = !1),
  (FIELD.developerMode = !1),
  (FIELD.feedBack = "https://github.com/awslabs/the-qubit-factory/wiki"),
  (FIELD.version = "v1.1.7"),
  (FIELD.totFrames = 0),
  (FIELD.forced = !1),
  (FIELD.forceOpen = !1),
  (FIELD.forceOpenRing = [!1, !1, !1, !1, !1, !1, !1, !1, !1]),
  (FIELD.neededBrief = -1),
  (FIELD.disableBriefs = !1),
  (FIELD.defaultWidth = ResetConsts.resize(!0)),
  (FIELD.tileWidth = ResetConsts.resize(!0)),
  (FIELD.tileHeight = ResetConsts.resize(!0)),
  (FIELD.availableBriefs = [0, 0, 0, 0, 0, 0, 0]),
  (FIELD.isActiveAward = [0, 0, 0, 0, 0, 0]),
  (FIELD.showTitleMenu = !0),
  (FIELD.numBonusLevels = 4),
  (FIELD.message = ""),
  (FIELD.cleanTiles = 0),
  (FIELD.totStar = 0),
  (FIELD.totComplete = 0),
  (FIELD.hiddenStar = 0),
  (FIELD.hiddenComplete = 0),
  (FIELD.isBlur = !1),
  (FIELD.forceSingle = !1),
  "ontouchstart" in window || navigator.maxTouchPoints
    ? (FIELD.isTouch = !0)
    : (FIELD.isTouch = !1),
  (OPTS.musicOn = !0),
  (OPTS.music = 0.5),
  (OPTS.sfxOn = !0),
  (OPTS.sfx = 0.5),
  (OPTS.autoResize = !0),
  (OPTS.isScrollable = !1),
  (OPTS.showFPS = !1),
  (OPTS.fancyGraphics = !0),
  (OPTS.fancyFilters = !0),
  (OPTS.fancyGears = !0),
  (OPTS.attemptDowngrade = !0),
  (BLUEPRINT.selected = -1),
  (BLUEPRINT.lastSelected = -1),
  (BLUEPRINT.hovered = -1),
  (BLUEPRINT.lastHovered = -1),
  (ROBOT.oldMode = "none"),
  (TUTORIAL.default = 0),
  (TUTORIAL.current = 0),
  (TUTORIAL.currentMax = 16),
  (TUTORIAL.entStateQ0 = new Qubit(0, 0, 0, -1, "halt", (0 * Math.PI) / 4)),
  (TUTORIAL.entStateQ1 = new Qubit(0, 0, 0, -1, "halt", (1 * Math.PI) / 2)),
  (TUTORIAL.entState = new Entangled(2)),
  TUTORIAL.entState.setQubits([TUTORIAL.entStateQ0, TUTORIAL.entStateQ1]),
  (TUTORIAL.entState.ampsComp = [1 / Math.sqrt(2), 0, 0, 1 / Math.sqrt(2)]),
  TUTORIAL.entState.computeRotAmps(),
  TUTORIAL.entState.computeAllEnts(),
  (CANV.interface = new Canvs("canvasInterface", "interface")),
  (CANV.FPS = new Canvs("canvasFPS", "FPS")),
  (CANV.confirm = new Canvs("canvasConfirm", "confirm")),
  (CANV.undos = new Canvs("canvasUndos", "undos")),
  (CANV.controls = new Canvs("canvasControls", "controls")),
  (CANV.debug = new Canvs("canvasDebug", "debug")),
  (CANV.ticker = new Canvs("canvasTicker", "ticker")),
  (CANV.toggles = new Canvs("canvasToggles", "toggles")),
  (CANV.tooltip = new Canvs("canvasTooltip", "tooltip")),
  (CANV.letterButton = new Canvs("canvasLetterButton", "letterButton")),
  (CANV.blueprint = new Canvs("canvasBlueprint", "blueprint")),
  (CANV.overlay = new Canvs("canvasOverlay", "overlay")),
  (CANV.overlayLeft = new Canvs("canvasOverlayLeft", "overlayLeft")),
  (CANV.overlayRight = new Canvs("canvasOverlayRight", "overlayRight")),
  (CANV.overlayBottom = new Canvs("canvasOverlayBottom", "overlayBottom")),
  (CANV.victoryText = new Canvs("canvasVictoryText", "victoryText")),
  (CANV.victoryBase = new Canvs("canvasVictoryBase", "victoryBase")),
  (CANV.menu2 = new Canvs("canvasMenu2", "menu2")),
  (CANV.analysisOverlay = new Canvs(
    "canvasAnalysisOverlay",
    "analysisOverlay",
  )),
  (CANV.analysis = new Canvs("canvasAnalysis", "analysis")),
  (CANV.menuEraser = new Canvs("canvasMenuEraser", "menuEraser")),
  (CANV.menuText = new Canvs("canvasMenuText", "menuText")),
  (CANV.scenario = new Canvs("canvasScenario", "scenario")),
  (CANV.menuOverlay = new Canvs("canvasMenuOverlay", "menuOverlay")),
  (CANV.scenarioOverlay = new Canvs(
    "canvasScenarioOverlay",
    "scenarioOverlay",
  )),
  (CANV.scenarioMask = new Canvs("canvasScenarioMask", "scenarioMask")),
  (CANV.score = new Canvs("canvasScore", "score")),
  (CANV.scoreBase = new Canvs("canvasScoreBase", "scoreBase")),
  (CANV.menu = new Canvs("canvasMenu", "menu")),
  (CANV.menuBack = new Canvs("canvasMenuBack", "menuBack")),
  (CANV.titleLink = new Canvs("canvasTitleLink", "titleLink")),
  (CANV.titleLearn = new Canvs("canvasTitleLearn", "titleLearn")),
  (CANV.titleText = new Canvs("canvasTitleText", "titleText")),
  (CANV.titleAbout = new Canvs("canvasTitleAbout", "titleAbout")),
  (CANV.title = new Canvs("canvasTitle", "title")),
  (CANV.underlay = new Canvs("canvasUnderlay", "underlay")),
  (CANV.effects = new Canvs("canvasEffects", "effects")),
  (CANV.base = new Canvs("canvasBase", "base")),
  (CANV.baseWires = new Canvs("canvasBaseWires", "baseWires")),
  (CANV.selectButtons = new Canvs("canvasSelectButtons", "selectButtons")),
  (CANV.selectOverlay = new Canvs("canvasSelectOverlay", "selectOverlay")),
  (CANV.select = new Canvs("canvasSelect", "select")),
  (CANV.selectBase = new Canvs("canvasSelectBase", "selectBase")),
  (CANV.selectAward = new Canvs("canvasSelectAward", "selectAward")),
  (CANV.selectText = new Canvs("canvasSelectText", "selectText")),
  (CANV.tutorialExtra = new Canvs("canvasTutExtra", "tutorialExtra")),
  (CANV.tutorialBase = new Canvs("canvasTutBase", "tutorialBase")),
  (CANV.tutorialGates = new Canvs("canvasTutGates", "tutorialGates")),
  (CANV.tutorialEffects = new Canvs("canvasTutEffects", "tutorialEffects")),
  (CANV.tutorialControls = new Canvs("canvasTutControls", "tutorialControls")),
  (CANV.tutorialHeader = new Canvs("canvasTutHeader", "tutorialHeader")),
  (CANV.robotText = new Canvs("canvasRobText", "robotText")),
  (CANV.robotScreen = new Canvs("canvasRobScreen", "robotScreen")),
  (CANV.robotScreenBase = new Canvs("canvasRobScreenBase", "robotScreenBase")),
  (CANV.robotBase = new Canvs("canvasRobBase", "robotBase")),
  (CANV.robotButton = new Canvs("canvasRobButton", "robotButton")),
  (CANV.archive = new Canvs("canvasArchive", "archive")),
  (CANV.journal = new Canvs("canvasJournal", "journal")),
  (SVG.title = new Svgs("svgtitle", "title")),
  (SVG.board = new Svgs("svgboard", "board")),
  (SVG.menu = new Svgs("svgmenu", "menu")),
  (SVG.analysis = new Svgs("svganalysis", "analysis")),
  (SVG.select = new Svgs("svgselect", "select")),
  (SVG.tutorial = new Svgs("svgtutorial", "tutorial")),
  (SVG.tutorialB = new Svgs("svgtutorialB", "tutorialB")),
  (SVG.chromeicon = new Svgs("chromeicon", "chromeicon")),
  (SVG.edgeicon = new Svgs("edgeicon", "edgeicon")),
  (SVG.braveicon = new Svgs("braveicon", "braveicon")),
  (SVG.operaicon = new Svgs("operaicon", "operaicon")),
  (SVG.fireicon = new Svgs("fireicon", "fireicon")),
  (SVG.safariicon = new Svgs("safariicon", "safariicon")),
  (SVG.tiledA = new Svgs("tiledsectionA", "tiledA")),
  (SVG.tiledB = new Svgs("tiledsectionB", "tiledB")),
  (SVG.tiledC = new Svgs("tiledsectionC", "tiledC")),
  (SVG.tiledD = new Svgs("tiledsectionD", "tiledD")),
  (SVG.tiledE = new Svgs("tiledsectionE", "tiledE")),
  (SVG.tiledF = new Svgs("tiledsectionF", "tiledF")),
  (SVG.tiledG = new Svgs("tiledsectionG", "tiledG")),
  (SVG.tiledH = new Svgs("tiledsectionH", "tiledH")),
  (SVG.tiledI = new Svgs("tiledsectionI", "tiledI")),
  (SVG.tiledJ = new Svgs("tiledsectionJ", "tiledJ")),
  (SVG.tiledK = new Svgs("tiledsectionK", "tiledK")),
  (SVG.tiledL = new Svgs("tiledsectionL", "tiledL")),
  (SVG.tiledM = new Svgs("tiledsectionM", "tiledM")),
  (SVG.tiledN = new Svgs("tiledsectionN", "tiledN")),
  (SVG.tiledO = new Svgs("tiledsectionO", "tiledO")),
  (SVG.tiledP = new Svgs("tiledsectionP", "tiledP")),
  (SVG.tiledQ = new Svgs("tiledsectionQ", "tiledQ")),
  (SVG.tiledR = new Svgs("tiledsectionR", "tiledR")),
  window.addEventListener("mousemove", (e) => (INPUTS.mousemove = e)),
  window.addEventListener("mousedown", (e) => (INPUTS.mousedown = e)),
  window.addEventListener("dblclick", (e) => (INPUTS.dblclick = e)),
  window.addEventListener("mouseup", (e) => (INPUTS.mouseup = e)),
  window.addEventListener("contextmenu", (e) => e.preventDefault()),
  window.addEventListener("wheel", (e) => (INPUTS.wheel = e)),
  document
    .getElementById("canvasInterface")
    .addEventListener("wheel", (e) => (INPUTS.wheel = e)),
  window.addEventListener("keydown", (e) => (INPUTS.keydown = e)),
  window.addEventListener("keyup", (e) => {
    "erasing" === STATE.state && 0 === STATE.heldKey && (STATE.state = "free"),
      (STATE.heldKey = -1);
  }),
  window.addEventListener("resize", (e) => {
    (INPUTS.resize = e), (FIELD.isBlur = !1);
  }),
  window.addEventListener("keydown", async (e) => {
    var t = Helper.copyCurrentBoard(e);
    t && navigator.clipboard.writeText(t);
  }),
  window.addEventListener("keydown", async (e) => {
    Helper.pasteCurrentBoard(e);
  }),
  window.addEventListener("keydown", async (e) => {
    Helper.openExternalLink(e);
  }),
  window.addEventListener("mousedown", async (e) => {
    if (0 === e.button)
      if ("escbutton" === STATE.under.type)
        1 === STATE.under.i0 && SoundData.setMusicFull(e);
      else if ("archiveButton" === STATE.under.type)
        0 !== SCENARIO.archive && window.open(SCENARIO.archive, "_blank");
      else if ("robbutton" === STATE.under.type)
        1 === STATE.under.i0 &&
          0 !== SCENARIO.archive &&
          (SFX.click.play(), window.open(SCENARIO.archive, "_blank"));
      else if ("title" === STATE.mode) {
        if ("learnbutton" === STATE.under.type)
          return (
            window.open(
              "https://github.com/awslabs/the-qubit-factory/wiki/Walkthrough/",
              "_blank",
            ),
            void (STATE.under = { type: "none", i0: -1, j0: -1, k0: -1 })
          );
        if ("linkbutton" === STATE.under.type)
          return (
            window.open("https://www.qcoder.jp/en", "_blank"),
            void (STATE.under = { type: "none", i0: -1, j0: -1, k0: -1 })
          );
        if ("titlebutton" === STATE.under.type && 2 === STATE.under.i0)
          return SFX.select2.play(), void window.open(FIELD.feedBack, "_blank");
      }
  }),
  (SCENARIO.default = "levelSelect"),
  InitScenario.loadAll(),
  (SCENARIO.whichOne = "title"),
  (SCENARIO.retard = 0),
  InitScenario.load(SCENARIO.whichOne, !1),
  Graphics.init(),
  Graphics.initFlares(),
  Helper.findStorageSize(),
  FIELD.isOnHarmony
    ? ((SFX.background = new Audio("qubitfactory/sfx/grumpy.wav")),
      SoundData.initAll("qubitfactory/"))
    : ((SFX.background = new Audio("sfx/grumpy.mp3")), SoundData.initAll("")),
  (SFX.enabled = !1),
  window.addEventListener(
    "click",
    () => {
      (SFX.enabled = !0), OPTS.musicOn && SFX.background.play();
    },
    { once: !0 },
  ),
  window.addEventListener("beforeunload", (e) => {
    "constructing" === STATE.mode &&
      ((PERSIST0[SCENARIO.name].tiles[STATE.blueprint] = [...IBOARD._tiles]),
      (PERSIST0[SCENARIO.name].gates[STATE.blueprint] = IBOARD.getAllGates()),
      Storage.save(PERSIST0[SCENARIO.name], SCENARIO.name, 0, !1));
  }),
  PopWindow.init(),
  PopWindow.reset();
