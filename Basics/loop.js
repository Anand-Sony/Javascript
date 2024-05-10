let arr =[2,4,6,8];
for(let i=0 ; i<arr.length ; i++){
    console.log(arr[i]);

    console.log(arr.join(" ")); // if we want to print on one single line
}

// if we want to make previous array multiple of 2 then : 
const new_arr =arr.map(val=> val*2);
console.log(new_arr);
