
//creae some functions here

const getName = () => {
    return "Asef Khan";
};

const getAge = () => {
    return "11";
};
//create a variable then export it
    const cgpa = 3.92;

//use exports keywork with function

    exports.getItem = () => {
        return "food";
    }

//make them public using export keyword, so another file can access these functions
//exports.getName = getName;
        // exports.getName = getName;
        // exports.getAge = getAge;
        // exports.cgpa = cgpa;

    module.exports = {
        getName,
        getAge,
        cgpa
    }
