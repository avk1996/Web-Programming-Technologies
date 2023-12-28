const fs = require("fs");
console.log("Before readFile async");
fs.readFile("fs_test.txt", function (err, data) {
  if (err) {
    console.log("Error occured!!", err);
  }
  console.log(data.toString());
});
console.log("After readFile async");
let txt = fs.readFileSync("fs_test.txt");
console.log("From readSync: ", txt.toString());
fs.readFile("fs_test_write_again.txt", function (err, data) {
  if (err) {
    console.log("Error occured: ", err);
  } else {
    console.log(data.toString());
  }
});
console.log("After readySync");
