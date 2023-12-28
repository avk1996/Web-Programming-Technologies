const fs = require("fs");
//to check weather file exists or not
fs.exists("fs_test.txt", function (flag) {
  if (flag) {
    fs.stat("fs_test.txt", function (err, status) {
      if (err) {
        console.log("Error occured: ", err);
      } else {
        console.log(status);
        console.log("is file? ", status.isFile());
        console.log("is directory? ", status.isDirectory);
        console.log("Size of file is : ", status.size);
        console.log("Size of file is : ", status.size);
      }
    });
  }
});
