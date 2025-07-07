class Storage {
  static saveGeneric() {
    (PERSIST0.generic.music = OPTS.music),
      (PERSIST0.generic.musicOn = OPTS.musicOn),
      (PERSIST0.generic.sfx = OPTS.sfx),
      (PERSIST0.generic.sfxOn = OPTS.sfxOn),
      (PERSIST0.generic.disableBriefs = FIELD.disableBriefs),
      (PERSIST0.generic.fancyGraphics = OPTS.fancyGraphics),
      (PERSIST0.generic.fancyFilters = OPTS.fancyFilters),
      (PERSIST0.generic.autoResize = OPTS.autoResize),
      (PERSIST0.generic.availableBriefs = FIELD.availableBriefs),
      localStorage.setItem("generic", JSON.stringify(PERSIST0.generic));
  }
  static loadGeneric() {
    var e = localStorage.getItem("generic");
    return (
      null != e &&
      ((PERSIST0.generic = JSON.parse(e)),
      (OPTS.music = PERSIST0.generic.music),
      (OPTS.sfx = PERSIST0.generic.sfx),
      (OPTS.musicOn = PERSIST0.generic.musicOn),
      (OPTS.sfxOn = PERSIST0.generic.sfxOn),
      (FIELD.disableBriefs = PERSIST0.generic.disableBriefs),
      (OPTS.fancyGraphics = PERSIST0.generic.fancyGraphics),
      (OPTS.autoResize = PERSIST0.generic.autoResize),
      (FIELD.availableBriefs = [...PERSIST0.generic.availableBriefs]),
      void 0 !== PERSIST0.generic.fancyFilters
        ? (OPTS.fancyFilters = PERSIST0.generic.fancyFilters)
        : (PERSIST0.generic.fancyFilters = !0),
      !0)
    );
  }
  static save(e, t, i = 0, a = !0) {
    var r = t + String(i);
    localStorage.setItem(r, JSON.stringify(e)), a && Storage.saveGeneric();
  }
  static load(e, t, i = 0) {
    var a = t + String(i),
      r = localStorage.getItem(a);
    return null != r && ((e[t] = JSON.parse(r)), !0);
  }
  static loadFromAll() {
    var e = localStorage.getItem("allSavedData");
    if (e) {
      e = JSON.parse(localStorage.getItem("allSavedData"));
      for (var t = 0; t < LEVELS.names.length; t++) {
        var i = e[LEVELS.names[t]];
        null != i && (PERSIST0[LEVELS.names[t]] = i);
      }
      i = e.generic;
      null != i &&
        ((PERSIST0.generic = i),
        (OPTS.music = PERSIST0.generic.music),
        (OPTS.sfx = PERSIST0.generic.sfx),
        (OPTS.musicOn = PERSIST0.generic.musicOn),
        (OPTS.sfxOn = PERSIST0.generic.sfxOn),
        (FIELD.disableBriefs = PERSIST0.generic.disableBriefs),
        (OPTS.fancyGraphics = PERSIST0.generic.fancyGraphics),
        (OPTS.autoResize = PERSIST0.generic.autoResize),
        (FIELD.isCleanSlate = !1),
        (FIELD.availableBriefs = [...PERSIST0.generic.availableBriefs]));
    }
  }
}
