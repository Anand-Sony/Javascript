let arr = [4,9,25,1];
console.log(arr.map(Math.sqrt)); // square root without heelp of the function.

// now with help of the function.
function sq(){
    return arr.map(Math.sqrt);
}
let sub = arr.map(sq) 
console.log(sub);
