/*array which satisfy a condition set by the argument function.
*/

arr = [1,2,8,-5,-25,45,10,200];
function isPositive(x){
    return x>0;
}
console.log(arr.filter(isPositive));

// Separate the negative value of the array : 
function isNegative(y){
    return y<0;
}
console.log(arr.filter(isNegative));