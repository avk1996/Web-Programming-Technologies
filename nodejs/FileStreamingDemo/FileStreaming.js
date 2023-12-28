const fs = require("fs");
//one of the event occurs is data event

//when a stream is full then data event is occured
let readStream = fs.createReadStream("fs_test.txt");
let str = "";
readStream.on("data", function (chunk) {
  str += chunk;
});
//when data is over then end event is occured
readStream.on("end", function () {
  console.log(str);
  console.log("Reached to EOF");
});
//when error comes then error event is occured
readStream.on("error", function (err) {
  console.log("Error occured", err);
});
