// if an array contain more than array
// then we can use flat() method to convert it into single array

const arr = [[1,2,6],[7,5,8],[5,8,0,10]];
let value = arr.flat(); 
console.log(value);

/* Now if we want to multiply each element in the array, then : 
   then we will use flatMap() method
*/
const arrNew = value.flatMap((x) => x * 2);
console.log(arrNew);