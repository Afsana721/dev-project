function b() {
    var myVar;
    console.log("myVar first : "+myVar);
}

function a() {
    var myVar =2;
    console.log("myVar second : "+ myVar);
    b();
}

var myVar =1;
console.log("myVar third : "+myVar);
a();

