function LevelSelect() {
  (STATE.mode = "levelSelect"),
    (FIELD.tileWidth = ResetConsts.resize()),
    (FIELD.tileHeight = FIELD.tileWidth),
    ResetConsts.levelSelect();
}
