function b(){
    console.log(myVar);
}
function c(){
    console.log(myVar);
}
function a() {
    var myVar = 2;
    b();
    c();
}

var myVar =1; 
myVar = 3;     //myVar is 1, it own variable environment
a();                /* a called with new execution context, where myVar is 2 & b called
                    and new execution context - where myVar is no declared */
