let arr = [1,2,3,4,5];
// in slice() => original array is same.
let arr1 = arr.slice(0,2);
console.log("First two elements = ",arr1);
console.log("Original array = ",arr); 

// now, if we use splice() then original data will also affect
let arr2 = arr.splice(0,2);
console.log("First two elements = ",arr2);
console.log("Original array = ",arr); 