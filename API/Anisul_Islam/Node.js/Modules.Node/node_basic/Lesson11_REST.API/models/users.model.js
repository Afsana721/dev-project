//set data create Array object
const {v4: uuidv4} = require("uuid");

//create users Array object data
const users =[ {
    id: uuidv4(),
    username: "Asef Khan",
    email: "asef@gmail.com"
},
{
    id: uuidv4(),
    username: "Mohammod Khan",
    email: "moh@gmail.com"
}
];


//export module users
module.exports = users;