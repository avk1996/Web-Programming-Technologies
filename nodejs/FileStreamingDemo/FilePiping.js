const fs = require("fs");
let readStream = fs.createReadStream("fs_test.txt");
let writeStream = fs.createWriteStream("target_fs_test.txt");
readStream.pipe(writeStream);
console.log("Reached to end");
/*
In ram the pipe for transfer of file from fs_test to target_fs_test is happening
 */
