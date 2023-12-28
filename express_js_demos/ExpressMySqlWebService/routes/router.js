const express = require("express");
var router = express.Router();
var connection = require("../db/dbconnect");

router.get("/products", function (req, resp) {
  connection.query("select * from products", (err, data, fields) => {
    if (err) {
      console.log(err);
      resp.status(500).send("No data found"); //pass as json data
    } else {
      console.log(data);
      resp.send(data);
    }
  });
});

//add new prou
router.post("/products/product/:pid", function (req, resp) {
  connection.query(
    "insert into products values(?,?,?,?)",
    [req.body.pid, req.body.pname, req.body.qty, req.body.price],
    (err, result) => {
      if (err) {
        console.log(err);
        resp.status(500).send("No data found");
      } else {
        console.log(result);
        resp.status(200).send(`Data added successfully`);
      }
    }
  );
});

//delete product from the db mysql for a id which is recived from pid
router.get("/products/product/:pid", function (req, resp) {
  connection.query(
    "delete from products where pid=?",
    [req.params.pid],
    function (err, result) {
      if (err) {
        console.log(err);
        resp.status(500).send("no data found");
      } else {
        console.log(result);
        resp.status(200).send(`Data deleted successfully`);
      }
    }
  );
});

//show a product from the db mysql for a id which is recived from pid
router.get("/products/product/:pid", function (req, resp) {
  connection.query(
    "select * from products where pid=?",
    [req.params.pnum],
    function (err, data) {
      if (err) {
        console.log(err);
        resp.status(500).send("no data found");
      } else {
        console.log(data);
        resp.status(200).send(data[0]);
      }
    }
  );
});

//update a product from the db mysql for a id which is recived from pid
router.put("/products/product/:pid", function (req, resp) {
  connection.query(
    "update products set pname=?,qty=?,price=? where pid=?",
    [req.body.pname, req.body.qty, req.body.price, req.body.pid],
    function (err, result) {
      if (err) {
        console.log(err);
        resp.status(500).send("no data updated");
      } else {
        console.log(result);
        resp.status(200).send(`Data added successfully`);
      }
    }
  );
});

//this is same object rotes in app.js
module.exports = router;
