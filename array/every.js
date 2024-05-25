function isPositive(arr , element , index){
    return element>0;
}

function func(){
    let arr = [1,2,4,5,8,2,6,8];
    let value  = arr.every(isPositive);
    console.log(value);
}
func();