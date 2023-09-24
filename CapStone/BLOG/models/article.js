//import mongoose to create database model
const mongoose = require('mongoose');

//create user data model as Schema. To do this- use mongoose constructor with its method
const articleSchema =new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    process: {
        type: String,
        require: true
    },
    image: {
        type: String,
        required: 'This fild is required.'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


//export the Schema 
module.exports = mongoose.model('Article', articleSchema);