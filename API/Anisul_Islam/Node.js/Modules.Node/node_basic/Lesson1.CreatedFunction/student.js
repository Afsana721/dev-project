//create functions
const getName = () => {
    return 'Afsana';
}

const getPlace = () => {
    return 'Austin';
}

const phone ="112233";

//use export directly from function or variable
exports.getLocation = () =>{
    return "Texas";
}

//to use these function from outside, need to export
// exports.getName = getName;
// exports.getPlace = getPlace;
// exports.phone = phone;

//to use my module exports - more than 
// module.exports = {
//     getName,
//     getPlace,
//     phone
// }


