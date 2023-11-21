 
 function makeArray() {
    return [1,2,3,4,5,6];
 }
    
 //const myArray = makeArray();
 //console.log(myArray);

//  const fArray = myArray[0];
//  const sArray = myArray[1];



const [aa, bb, cc] = makeArray();
const newA = [aa, bb, cc];

console.log(aa, bb, cc);
console.log(newA);
console.log(cc);
