const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(function (req, resp, next) {
  console.log(`This is middleware 1 of request ${req}, response ${resp} `);
  next();
});
app.use(function (req, resp, next) {
  console.log(`This is middleware 2 of request ${req}, response ${resp} `);
  next();
});
app.get("/hello", function (req, resp) {
  resp.sendFile("/home.html", { root: __dirname });
});
app.get("/aboutme", function (req, resp) {
  console.log(`Response is : ${resp}`);
  resp.send("<h1>Do you know 1+1 is 3</h1>");
});
app.listen(9090, function () {
  console.log("Chalo shurwat karete hai 9090");
});
