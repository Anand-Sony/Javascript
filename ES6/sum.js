function fun(...input){
    let sum=0;
    for(let i of input){
        sum = sum+i;
    }
    return sum;
}
console.log(fun(1,2));
console.log(fun(1,2,3,5));
console.log(fun(-100,5,2,12,2));

// next : use of (...)
let arr = [1,2,3,4,5];
console.log(...arr);
console.log(Math.max(arr));
console.log(Math.max(...arr));