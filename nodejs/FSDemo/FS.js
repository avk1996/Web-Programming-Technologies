//FS module: for file handling
const fs = require("fs"); //for pre-defined module ./ is not required
//read data synchronously
let data = fs.readFileSync("fs_test.txt");
console.log(data.toString());
//write data synchronously
fs.writeFileSync(
  "fs_test_write.txt",
  "I am wrinting a text using synchronous writer"
);
fs.writeFileSync("fs_test_write_again.txt", data);
//read data synchronously
let reading = fs.readFileSync("fs_test_write.txt");
console.log(reading.toString());
