exports.product = function (x, y) {
  return x * y;
};
exports.factorial = function (range) {
  let f = 1;
  for (let i = 1; i <= range; i++) {
    f = f * i;
  }
  return f;
};
