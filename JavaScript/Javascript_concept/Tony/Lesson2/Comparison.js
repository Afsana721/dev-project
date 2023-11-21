// console.log(1 < 2 < 4);

// console.log(3 < 2 < 1);

var a = 0; 
var b = false;  // it is Coercion false as number, it will comes 0. so retrun is true.

if (a == b){
    console.log("there are equal");     //true
}else{
    console.log("no, there are not")
}

if (a === b){
    console.log("use === there are equal");
}else{
    console.log("use === no, there are not")    //false, because check only the value, no coercion.
}