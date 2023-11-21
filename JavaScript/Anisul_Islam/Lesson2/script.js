// var num = 20.4;

// typeof(num);

/* console.log(typeof(num));
    num = toString(num);

    console.log(typeof(num));
    num = parseInt(num);
    console.log(typeof(num));
    num = parseFloat(num);
    console.log(typeof(num));*/

//toFixed()
    // var number = 2.5678;
    // console.log(number);                //output is: 2.5678
    // console.log(number.toFixed());      //output is : 3
    // console.log(number.toFixed(1));     //output is :2.6 ->asks after '.' give 1 digit

//toPrecision() -> total how many digit / character it will show by passing value inside parameter

//console.log(number.toPrecision(3));     //output is : 2.57 -- total number from the beginning

//Number method / function

console.log(Number('20'));          //convert string to number, so output - 20.
console.log(Number(20.5));
console.log(Number('hello'));       //convert string to number, so output - NaN(not a Number).
console.log(Number(false));         //true is : 1 and flase is : 0
console.log(typeof(Number('20')));  //output is: number.