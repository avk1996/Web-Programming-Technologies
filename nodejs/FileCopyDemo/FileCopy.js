const fs = require("fs");
//all function below are async function so they will be assigned with seperate stack
fs.copyFile("fs_test.txt", "copy_fs_test.txt", function (error) {
  if (error) {
    console.log("Error occured: ", error);
  } else {
    //reading file after copy is done
    fs.readFile("copy_fs_test.txt", function (error, data) {
      if (error) {
        console.log("Error occured: ", error);
      } else {
        console.log("Data from Target file: ");
        console.log(data.toString());
      }
    });
  }
});
