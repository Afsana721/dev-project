// const calcArea = function(radius) {
//     return 3.14 * radius **2;
// }


//both function are same 

// const calArea = (radius) => {
//     return 3.11 * radius ** 2;
// }
// const calArea = radius => 3.11 * radius ** 2;

// const area = calArea(5);
// console.log(area);

//Arrow function practice

// const greet = function() {
//     return 'hello, world';
// }

// const greet = () => 'hello, world';
// const result = greet();
// console.log(result);


/* += is JS : addition assignment, means- x = x + y or 
let x = 5 , y = 3; , so x += y; // This is equivalent to x = x + y; */

/*const bill = function(products, tax) {
    let total = 0;
    for (let i =0; i <products.length; i ++){
        total += products[i] + products[i] * tax;
    }
    return total;
}

console.log(bill([10,15,30], 0.2));*/

//Arrow function
    const bill = (products, tax) => {
        let total = 0;
        for(let i = 0; i < products.length; i++){
            total += products[i] + products[i] * tax;
        }
        return total;
    }
    console.log(bill([10,15,30], 0.2));

   