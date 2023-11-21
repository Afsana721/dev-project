//String is an predefine Object in Javascript, so create an String objcet instance
//let s1 = new String("Welcome");
//console.log(s1);

//method are available for JS String 
/* 
String length
String slice()
String substring()
String substr()
String replace()
String replaceAll()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String charAt()
String charCodeAt()
String split()
*/

//create Strig variable in Js
let s = "Welcome";
let count = s.charAt(0);
console.log(count);

//concat()
let joinString =s.concat("to JS programming").concat(",Sir");
console.log(joinString);

//replace()
s = "Welcome to JavaScript";
let replaceString =s.replace("JavaScript", "Java");
console.log(replaceString);

//substring();
s = "Welcome";
//s.substring(0,2);
console.log(s.substring(0,3));          //get -> Wel
console.log(s.substring(3,7));          //come