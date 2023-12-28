const ex = require("express");
const app = ex();
const bodyParser = require("body-parser");
const auth = require("./AuthenticationWork");
const mathOp = require("../../nodejs/Calculator/MathFunctions");
//this is a middle ware which helps to pass url and seperates data from url, it will generate a object by name
//query in eq object if method is get, it will generate object by name body in req object if
//the method is post
app.use(bodyParser.urlencoded({ extended: false }));
//if false then data is always in text format
//writing next is implicintly written

app.get("/login", function (req, resp) {
  resp.sendFile("Login.html", { root: __dirname }); //__ dunder >> double underscore
});
app.post("/validate", function (req, resp) {
  let u = auth.validateUser(req.body.nm, req.body.pass);
  console.log(`Authentication type: ${u}`);
  if (u != null) {
    resp.send("<h1>User Verified</h1>");
  } else {
    resp.send("<h1>Invalid User</h1>");
    // resp.sendFile("Calculator.html", { root: __dirname });
  }
});
// app.get("/math_op", function (req, resp) {
//   let n1 = parseInt(req.query.num1);
//   let n2 = parseInt(req.query.num2);
//   switch (req.query.btn) {
//     case "add":
//       ans = mathOp.sum(n1, n2);
//       response.end(`Sum : ${ans}`);
//       break;
//     case "diff":
//       ans = mathOp.diff(n1, n2);
//       response.end(`Difference : ${ans}`);
//       break;
//     case "pro":
//       ans = mathOp.product(n1, n2);
//       response.end(`Product : ${ans}`);
//       break;
//     case "div":
//       ans = mathOp.divide(n1, n2);
//       response.end(`Division : ${ans}`);
//       break;
//     case "pow":
//       ans = mathOp.power(n1, n2);
//       response.end(`${n1}<sub>${n2} : ${ans}`);
//       break;
//     case "fact":
//       ans = mathOp.factorial(n1);
//       response.end(`${n1}! : ${ans}`);
//       break;
//     case "perm":
//       ans = mathOp.permutation(n1, n2);
//       response.end(`${n1}P${n2} : ${ans}`);
//       break;
//     case "comb":
//       ans = mathOp.combinaton(n1, n2);
//       response.end(`${n1}C${n2} : ${ans}`);
//       break;
//     default:
//       console.log("Inside default");
//       response.end("Inside Something wrong! Try Again");
//       resp.send("2 plus 2 is 5 that you understand");
//       break;
//   }
// });
app.listen(9090, function () {
  console.log("Chalo shurwat karte hai 9090");
});
