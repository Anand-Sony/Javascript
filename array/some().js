function isGreaterThan4(number , index , array){
    return number>4;
}

function func(){
    let array = [1,2,3,4];
    let value = array.some(isGreaterThan4);
    console.log(value);
}
func()