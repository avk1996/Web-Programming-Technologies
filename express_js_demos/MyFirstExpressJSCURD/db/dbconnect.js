//step 2
const mysql = require("mysql");
let mySqlConn = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root@123",
  port: 3306,
  database: "test",
  /*
  multipleStatements: true;
   */
});

mySqlConn.connect((error) => {
  if (error) {
    console.log(`Error occured in connection: ${error}`);
  } else {
    console.log(`Connection established`);
  }
});

module.exports = mySqlConn;
