const express = require("express");
let router = express.Router();
let conn = require("../db/dbconnect");

router.get("/products", function (request, response) {
  //2. Now i need db connection
  conn.query("SELECT * FROM products", (error, data, fields) => {
    if (error) {
      console.log("Error occured at select: " + error);
      response.status(500).send("<h1>No Data Found</h1>");
    } else {
      console.log(data);
      //3. if there are no error and passing it to views/index.ejs
      response.render("index", { prodata: data });
    }
  });
});

router.get("/display_add_form", function (request, response) {
  response.render("add-prod");
});

router.post("/display_add_form", function (request, response) {
  conn.query(
    "INSERT INTO product VALUES(?,?,?,?)",
    [req.body.pid, req.body.pname, req.body.qty, req.body.price],
    (error, result) => {
      if (error) {
        console.log(`Error occured at insertion: ${error}`);
        response.status(500).send("<h1>No data found</h1>");
      } else {
        console.log(result);
        response.redirect("/products");
      }
    }
  );
});

router.get("/delete/:pid", function (requst, response) {
  conn.query(
    "DELETE FROM products WHERE pid=?",
    [req.params.pid],
    function (error, result) {
      if (error) {
        console.log(`Error occured at insertion: ${error}`);
        response.status(500).send("<h1>No data found</h1>");
      } else {
        console.log(result);
        response.redirect("/products");
      }
    }
  );
});

router.get("/edit/:pid", function (requst, response) {
  conn.query(
    "SELECT * FROM products WHERE pid=?",
    [req.params.pid],
    function (error, result) {
      if (error) {
        console.log(`Error occured at insertion: ${error}`);
        response.status(500).send("<h1>No data found</h1>");
      } else {
        console.log(result);
        response.redirect("/edit-product", { prod: data[0] });
      }
    }
  );
});

router.get("/edit/:pid", function (requst, response) {
  conn.query(
    "UPDATE products SET pname=?,qty=?,price=? WHERE pid=?",
    [req.params.name, req.params.qty, req.params.pricem, req.body.pid],
    function (error, result) {
      if (error) {
        console.log(`Error occured at insertion: ${error}`);
        response.status(500).send("<h1>No data updated</h1>");
      } else {
        console.log(result);
        response.redirect("/products");
      }
    }
  );
});

module.exports = router; //this router object and the router object in app.js is the same
