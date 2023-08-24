
//subject of my testing
function doubleFunction(input) {
//validating the type of the input argument
if(typeof input !== 'number'){
    throw "not a number"
}
    return input =2
}

module.exports = doubleFunction

console.log(doubleFunction(2))
console.log(doubleFunction('Number: 2'));