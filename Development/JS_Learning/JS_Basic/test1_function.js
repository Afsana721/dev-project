function greet() {
    //code block
    console.log("hello there");
}

const speak = function (name ="Masue", age =25) {
    console.log(`good day ${name} and ${age}`);
};

const calculate = function(radius){
    return 3.14 * radius ** 2;
    

}
const value = calculate(5);
console.log(value);
console.log(calculate(5));

const calVol = function(value) {
console.log(value);
};

calVol(value);