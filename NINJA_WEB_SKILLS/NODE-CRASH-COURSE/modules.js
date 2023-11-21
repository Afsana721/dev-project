//import people
    //const xyz = require('./people');

//destructurring import object
    const { people, ages} = require('./people');

console.log(people, ages);

//built in module
const os = require('os');
console.log(os.platform(), os.homedir());