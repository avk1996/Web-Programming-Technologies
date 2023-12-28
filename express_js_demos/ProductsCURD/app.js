//step 1:

//Load/import libraries
const express = require("express");
const app = express();//load express

const bodyParser = require("body-parser");//incoming request in the bodies
const path = require("path");//for all the directories

let routes = require("./routes/router");

//find ejs express js
//find all the views in views folder and extension
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
//__dirname is enviromental variable 
//that tells you the absolute path
//of the directory containing the current executing file

//define middleware using bodyParser
app.use(bodyParser.urlencoded({extended:false}));
//if true: any type
//if false: value can be array or string

//define route handlers
app.use("/",routes);

//start the server
app.listen(9090,function(){
    console.log("chaliye shurwat karte hai 9090")
})
