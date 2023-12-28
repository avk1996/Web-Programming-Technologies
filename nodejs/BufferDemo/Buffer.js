let buffer = Buffer.alloc(80); //80 bytes of memory is given to buffer

for (var i = 0; i < 26; i++) {
  buffer[i] = i + 97;
}
console.log("Using Ascii: " + buffer.toString("ascii")); //to string is used for readeable format using ascii
console.log("Using utf8 by default: " + buffer.toString()); //to string is used for readeable format using ascii
console.log("Using utf8 explicitly:" + buffer.toString("utf8")); //to string is used for readeable format using utf8
console.log(
  "Using utf8 explicitly for range 0 to 5:",
  buffer.toString("utf8", 0, 5)
); //range 0 to 5 th index
let portion = buffer.slice(6, 9);
console.log("Portion of buffer witing 6 to 9 range: " + buffer.toString());

//How to allocate 100 locations for a buffer
//and store all capital letters and display
let data = [];
let buffer2 = Buffer.alloc(100);
for (var i = 65; i <= 91; i++) {
  data[i] = i;
}
console.log(data);

//in olden days:
// let buffer1 = new Buffer("buffer");
