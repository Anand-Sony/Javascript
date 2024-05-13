const a =["hydrogen" , "lithium", "neon" , "platinum" , "Gold"];

const a2 = a.map(function (s) {
    return s.length;
});
console.log("Normal Way = "+a2);

const a3 = a.map((s) => s.length);
console.log("Using Arrow function "+a3);

// 