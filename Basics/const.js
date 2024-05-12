const arr = [1,5,"Joy" , "Mango" , "Summer"];
console.log(arr.toString());

// lets change the index 2: from joy to any number
arr[2] = 7;
console.log(arr.toString());

// Note : Like "Let" , const variable cannot be Hoisted.

console.log("Let's take another example : Dictionary->")

const dict1 = {
    name:"Joy",
    age:20,
    city:"Jaipur",
    About:"Software Developer"
};
console.log(dict1);

/* This is not allowed because const variable also cannot be Hoisted.
const dict1{
    name:"jaja",
    age:20,
    city:"Jaipur",
    About:"Undergraduate"
}
*/