/*
let x = 7;
{
    let x=34;
    console.log(x);
}
console.log(x);

So it will give the result as : 34
                                27
But what if we change the global x value after the function: will it work??. Let's Check.
*/

let x=7;
{
    let x=34;
    console.log(x);
}
let x=45;
console.log(x);
// So it give the error. Because "Let" do not support hoisting.