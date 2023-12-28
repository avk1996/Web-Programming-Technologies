function function1() {
  console.log("In Function 1");
  console.log(arguments); //arguments array where all the parameters are collected
}
function1();
function1(1, 2, 3);
function1(12, 3, "abc", 2.33, 23);

function f2(x, y) {
  //   var s = x + y;
  var s = 0;
  console.log("arguments: ", x, y);
  for (var num in arguments) {
    s = s + num;
    console.log(s, ",");
  }
}
f2(1, 1);
f2(1, 2, 3, 4, 5, 6, 7);

//... are called as rest operator ECMA 6
const f3 = (x, y, ...z) => {
  console.log("in f5");
  console.log(x, y, z);
};

f3();
f3(1, 2);
f3(1, 2, 3, 4, 5);

//global function accesible every where
// function fact(n) {
//   var f = 1;
//   for (var i = 1; i < n; i++) {
//     f = f * i;
//   }
//   return f;
// }

//closure function:
function combination() {
  var ans = fact(n) / fact(n - r);
  //   limited access to this parent scope
  function fact(n) {
    var f = 1;
    for (var i = 1; i < n; i++) {
      f = f * i;
    }
    return f;
  }
}

//self calling function
function scf1() {
  console.log("In function self calling function");
}
scf1();

//alternate way
(function () {
  console.log("In function self calling function");
})();
(function (x, y) {
  console.log("Self calling function: ", x, y);
})(10, 20);
