function hexToRGB(e) {
  e = colourNameToHex(e);
  let t = 0,
    i = 0,
    a = 0;
  return (
    4 == e.length
      ? ((t = parseInt(e[1] + e[1], 16)),
        (i = parseInt(e[2] + e[2], 16)),
        (a = parseInt(e[3] + e[3], 16)))
      : 7 == e.length &&
        ((t = parseInt(e[1] + e[2], 16)),
        (i = parseInt(e[3] + e[4], 16)),
        (a = parseInt(e[5] + e[6], 16))),
    { r: t, g: i, b: a }
  );
}
