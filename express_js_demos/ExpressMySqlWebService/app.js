//step 1:

//Load/import libraries
const express = require("express");
const app = express(); //load express

const bodyParser = require("body-parser"); //incoming request in the bodies
const path = require("path"); //for all the directories

let routes = require("./routes/router");

//configure to the application

//define middleware using bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//if true: any type
//if false: value can be array or string

//define route handlers
app.use("/", routes);

//start the server
app.listen(9090, function () {
  console.log("chaliye shurwat karte hai 9090");
});
