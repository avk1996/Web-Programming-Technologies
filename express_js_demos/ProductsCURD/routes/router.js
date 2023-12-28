//step 1 is at app.js
//step 2: create router instance to handle request

const express = require("express");
let router = express.Router();
//this router instance is a complete middleware and routing system refered to as mini-app
//when we want to create new router object to handle requests

//step 3: do mysql connection in db directory
let mySqlConn = require("../db/dbconnect");

router.get("/products", function (request, response) {
  //query is a aysnc function so call back is necessary
  mySqlConn.query("SELECT * FROM products", (error, queryData) => {
    if (error) {
      console.log(error);
      response.status(500).send("<h3>No Data Found</h3>");
    } else {
      console.log(queryData);
      response.render("index", { prod_data: queryData });
    }
  });
});

router.get("/add_product_form", (request, response) => {
  response.render("/add_product");
});

router.post("/add_product", (request, response) => {
  mySqlConn.query("INSERT INTO products SET pname=?,qty=?,");
});

module.exports = router;
