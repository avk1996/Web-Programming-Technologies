function f1() {
  console.log("in function 1");
}

function f2() {
  console.log("in function 2");
}
function f3() {
  console.log("in function 3");
}

//dont' want to show function f1,f2 and f3
user = { uid: 12, uname: "Abhi" };
module.export = {
  function1: f1,
  function2: f2,
  function3: f3,
  user: user,
};
