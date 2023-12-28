const m1 = require("../MathOperation/ProductAndFactorial");

//exports is equivalent to public in java
exports.combination = function (n, r) {
  return m1.factorial(n) / m1.factorial(n - r);
};

exports.user = { uid: 12, uname: "Abhishek" };
