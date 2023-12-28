// var : duplicate declaration is possible
// let : duplicate declaration is not possible

var x = 23;
var x = 34;

// let x = 23;
// let x = 34;

// var : is global or function scope
// let : blocked scope

var x = 23; //global

let z = 45;

for (var i = 23; i < 30; i++) {
  //   y++;
}

console.log(i);

// for (let j = 23; i < 30; i++) {
//   //   y++;
// }

// console.log(j);

function f1() {
  var g = 34; //function local scope
  let f = 50;
  if (g > 30) {
    var x = "Greater than 30";
    let v = 300;
  }
  console.log("Using var: ", g, x);
  console.log("Using let: ", f, x);
}
f1();

console.log("Variable without declaration: ", p);
var p = 23;

// console.log("Variable without declaration: ", q);
// let q = 23;

const c = 34;
// c = 33;
//ECMA6 style
const f4 = () => {
  console.log("i am in f4 arrow funtion");
};
