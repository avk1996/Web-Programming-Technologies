const fs = require("fs");

let fName = "fs_test.txt";
fs.exists(fName, function (flag) {
  if (flag) {
    fs.stat(fName, function (err, status) {
      if (err) {
        console.log("Error occured: ", err);
      } else {
        console.log("Size: ", status.size);
        fs.open(fName, "r", function (err, fileDescriptor) {
          //fileDescriptor is file pointer pointing to file fName
          if (err) {
            console.log("Error occured: ", err);
          } else {
            var buffer = Buffer.alloc(10);
            fs.read(
              fileDescriptor,
              buffer,
              0,
              10,
              null,
              function (err, bytesRead, bufferStore) {
                if (err) {
                  console.log("Error occured: ", err);
                } else {
                  console.log(bufferStore.toString());
                }
              }
            );
          }
        });
      }
    });
  }
});
