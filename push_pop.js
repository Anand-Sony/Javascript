let arr =[1,2,3,4,5,6];
console.log("old array is "+arr);
// if we want to add new number in the last then use push() method:
arr.push("hello");
console.log(arr);

// but if we want to remove last element then use pop()
arr.pop();
console.log(arr);

// if want to remove element from begining the use shift()
arr.shift();
console.log(arr);

// if we want to add new number in the begining then use unshift() method:
arr.unshift("hello");
console.log(arr);