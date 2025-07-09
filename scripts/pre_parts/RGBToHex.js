function RGBToHex(e, t, i) {
  return (
    (e = Math.min(Math.max(Math.round(e), 0), 255).toString(16)),
    (t = Math.min(Math.max(Math.round(t), 0), 255).toString(16)),
    (i = Math.min(Math.max(Math.round(i), 0), 255).toString(16)),
    1 == e.length && (e = "0" + e),
    1 == t.length && (t = "0" + t),
    1 == i.length && (i = "0" + i),
    "#" + e + t + i
  );
}
