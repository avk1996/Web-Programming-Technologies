//load all the libraris
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
let routes = require("./routes/router"); //this router object and the router object in routes/router.js is the same

//configure the application
//find all views in views folder and extension of the file is ejs
app.set("views", path.join(__dirname, "views")); //prefix
app.set("view engine", "ejs"); //postfix

//to add static references
// app.set(express.static(path.join(__dirname, "public")));
//css file
// app.use("/css", express.static(path.join(__dirname, "public/css")));
// app.use("/js", express.static(path.join(__dirname, "public/js")));

//define middlewares
app.use(bodyParser.urlencoded({ extended: false }));

//define roothandlers
app.use("/", routes);

//start the server
app.listen(9090, function () {
  console.log("Chale shurwat karete hai 9090");
  module.exports = app;
});
