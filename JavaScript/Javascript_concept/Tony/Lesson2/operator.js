// var a = 3+4;
// console.log(a);

// var a = 3+4 *5;
// console.log(a);     //result 3+20 =23

// var a = 2, b = 3 , c = 4;
// a = b = c ;
// console.log(a);     //4
// console.log(b);     //4
// console.log(c);     //4

//Grouping precedence is higher 
// var a = (3 + 4) *5;
// console.log(a);     //return is 35, because grouping precidence 3+4 = 7 * 5 =35

//Coercion In JS
 //var a = 1+2;
 //console.log(a);
 //var b = 'hello' + 'hi';
 var b = 4 % "hello";       //retrung 8
 console.log(b);        //return is : hellohi - just join both String together. 
                        //retrun is : 12 - join two number together.