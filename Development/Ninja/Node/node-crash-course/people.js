const people = ['asef', 'vobash', 'masud', 'khan'];
const age = [20, 30, 40,55];
console.log(people);

//single thing to export
//module.exports = people;

//multiple things to export
    module.exports = {
        //people: people,
        //age: age          //or we can use
        people, age
    };