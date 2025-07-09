function flashColor(e, t) {
  if (0 === t) return e;
  t = Math.min(t, 1);
  var i = hexToRGB(e);
  return (
    (i.r = i.r + t * (255 - i.r)),
    (i.g = i.g + t * (255 - i.g)),
    (i.b = i.b + t * (255 - i.b)),
    RGBToHex(i.r, i.g, i.b)
  );
}
