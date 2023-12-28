arr1 = new Array(1, 2, 3, 4, "hello", 100, 34, 22);
arr2 = [1, 2, "world", 3, 4.45];
//have conn arr1
arr3 = [10, 23, 12, arr1, 3, 4, 1];
//do not have conn of arr1
arr4 = [10, 23, 12, ...arr1]; //spread operator  will create a new copy
console.log("length of arr3: ", arr3.length); //length = 4
console.log("length of arr4: ", arr4.length); //length = 8

//To add a new value in the array
arr1.push("I have Pushed");
arr1.unshift("I am beginning");
console.log(arr1);

//To remove the value in the array
arr1.pop();
arr1.shift();
console.log(arr1);

//Splice
arr1.splice(3, 1, 11, 33, 44, 55);
console.log("delete from 3rd position", arr1);

//Splice
arr1.splice(3, 0, "x", "y", "z", "m");
console.log("insert from 3rd position", arr1);

//Splice
arr1.splice(3, 2, "three");
console.log(arr1);
