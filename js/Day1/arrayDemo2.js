arr1 = [11, 22, 33, 44, 55, 66, 77, 88, 99, 1010];
var pos = arr1.indexOf(55);
console.log("Positon: ", pos);
//find the first occurence based on condiditon
pos = arr1.findIndex((index, val) => val > 11);
console.log("Positon with value > 5: ", pos);

//find the first occurence based on condiditon
pos = arr1.findIndex((val, index) => val > 11);
console.log("Positon with index > 5: ", pos);

//find the positon of first occerence based on condition
pos = arr1.findIndex((val, index, arr) => val > 44);
console.log("Positon with index > 5: ", pos);

//find all values of first occurence based on condition
pos = arr1.find((val, index, arr) => val > 66);
console.log("Values: ", pos);

//find all values based on condition
pos = arr1.filter((val, index, arr) => val > 66);
console.log("Array which satisfies the condition: ", pos);

//To convert all values into different value based on given condition
pos = arr1.map((val, index, arr) => val + index);
console.log("New array wil be printed: ", pos);

arr2 = [1, 2, 3, 4, 5, 6, 7, 9, 8];
pos = arr2.filter((val) => val % 2 == 0);
console.log("Even number: ", pos);
pos = arr2.filter((val) => val % 2 != 0);
console.log("Odd number: ", pos);

//Reduce function demo
pos = arr2.reduce((acc, val) => acc + val);
//acc = 1 , val = 2 => reduced 3
//acc = 3 , val = 3 => reduced 6
//acc = 6 , val = 4 => reduced 10
//acc = 10 , val = 5 => reduced 15
//acc = 15 , val = 6 => reduced 21
//acc = 21 , val = 7 => reduced 28
//acc = 28 , val = 8 => reduced 36
//acc = 36 , val = 9 => reduced 45
console.log("Reduced array 2: ", pos);

pos = arr2.reduce((acc, val) => acc < val);
console.log("Ascending: ", pos);
pos = arr2.reduce((acc, val) => acc > val);
console.log("Decending: ", pos);

pos = arr2.reduce((acc, val) => acc + val, 100);
console.log("By optional INITIAL VALUE: ", pos);

//Find Largest
pos = arr1.reduce((acc, val) => (acc < val ? val : acc));
console.log("Largest: ", pos);

//Find Smallest
pos = arr1.reduce((acc, val) => (acc > val ? val : acc));
console.log("Smallest: ", pos);

arr3 = [" a,", " b,", " c,", " d,"];

strArray1 = ["MySql", "ExpressJS", "ReactJS", "NodeJS"];
console.log("Original array: ", strArray1);
pos = strArray1.reduce((acc, val) => acc + val.slice(0, 3) + " ", "");
console.log("First three letters: ", pos);

//sorting
console.log("ASCII sort: ", arr1.sort());
function compare(a, b) {
  //   if (a > b) return 1;
  //   else if (a < b) return -1;
  //   else return 0;
  //better than above
  return a - b;
}
console.log("Numeric ascending sort: ", arr1.sort(compare));
console.log(
  "Numeric ascending sort by arrow function: ",
  arr1.sort((a, b) => a - b)
);

console.log(
  "Numeric decending sort by arrow function: ",
  arr1.sort((b, a) => a - b)
);

//includes is case-sensitive
console.log(
  "Arrays where J exists : ",
  strArray1.filter((val) => val.includes("J"))
);
console.log(
  "Arrays where j exists : ",
  strArray1.filter((val) => val.includes("j"))
);

console.log(
  "Array where ExpressJS is present: ",
  strArray1.filter((val) => val.includes("ExpressJS"))
);
