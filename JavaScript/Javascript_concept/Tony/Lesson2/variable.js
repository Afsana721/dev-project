function b() {
    var myVar;
    console.log("from b " +myVar);
}

function a() {
    var myVar =2;
    console.log("from a " +myVar)
    b();
}

var myVar =1;
console.log("from outside " +myVar);
a();
console.log(myVar);