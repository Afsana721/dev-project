//import model
let users = require("../models/users.model");
const { v4: uuid } = require("uuid");

//get users route request & response function
const getAllUser = (req, res) => {
    res.status(200).json({users})
};


//create users -Post users route request & response function
const createUser = (req, res) => {
    //new user
    const newUser = {
        id:uuid(),
    username:req.body.username,
    email:req.body.email
    };
    users.push(newUser);

    res.status(201).json(users)
};

//update user
const updateUser = (req, res) => {
//get user id by params
    const userid = req.params.id;
    const {username, email} = req.body;
    users.filter((user) => user.id === userid).map((selecteduser) => {
        selecteduser.username = username;
        selecteduser.email = email;
    })
    res.status(200).json(users);
};

//delete user
const deleteUser = (req, res) => {
//find id to delete user
    const userid = req.params.id;
    users = users.filter((user) => user.id != userid)
    res.status(200).json(users);
    };

module.exports = { getAllUser, createUser, updateUser, deleteUser };