//import express lib.
const express = require("express"); //creating the object of express
let app = express(); //creates express application

const bodyParser = require("body-parser");
//define middleware: are the functions which we want to execute for every request
//for common functionality for every request

app.use(function (request, response, next) {
  console.log(`this is first middle ware:`);
  console.log(`url: ${request.url}`);
  //to go to next middle ware do this following
  next();
}); //execute for all the methods then use : app.use()
app.use(function (request, response, next) {
  console.log(`this is second middle ware:`);
  console.log(`url: ${request.url}`);
  next();
}); //execute for all the methods then use : app.use()

//router function:
app.get("/home", function (req, resp) {
  let str = "String";
  resp.send(`<h1>This is home page Abhishek and this is my ${str}</h1>`);
}); //if it recives url home then execute this function
app.get("/aboutus", function (req, resp) {
  let str = "<h1> Jannee ke liye <a href='home'>contact me</a></h1>";
  resp.send(`${str}`);
}); //if it recives url home then execute this function
app.listen(9090, function () {
  console.log("Chalo shurwat karete hai 9090");
});
