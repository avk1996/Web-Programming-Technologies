const http = require("http");
const fs = require("fs");
const url = require("url");
const mathOp = require("../MathOperation/ProductAndFactorial");
let create_server = http.createServer(function (req, resp) {
  resp.writeHeader(200, { "content-type": "texthtml" });
  //it will seprate the ? and & and give us the segregated value
  //q is a object
  //q={pathname:"/submit.data",query:{num1: value 1 passed,num2: value 2 passed}}
  let q = url.parse(req.url, true);
  console.log(`Request url: ${q}`);
  switch (q.pathname) {
    case "/math_op":
      let readStream = fs.createReadStream("MathOperation.html");
      readStream.pipe(resp);
      break;
    case "/submit_data":
      let n1 = q.query.num1;
      let n2 = q.query.num2;
      console.log(`You pressed: ${q.query.btn}`);
      if (q.query.btn == "pro") {
        let ans = mathOp.product(n1, n2);
        resp.end(`Product of number ${n2} and number ${n2} is: ${ans}`);
      } else if (q.query.btn == "fact") {
        let ans = mathOp.factorial(n1);
        resp.end(`Factorial is: ${ans}`);
      } else {
        resp.end("You were on to something but didn't succed! sorry.");
      }
      break;
    default:
      resp.write("<h1>Go back to : <a href=''>Home</a></h1>");
      resp.write("<h1>got to math_op</h1>");
      resp.end("<h1>END</h1>");
      break;
  }
});
create_server.listen(9090, function () {
  console.log("Server started listening 9090");
});
