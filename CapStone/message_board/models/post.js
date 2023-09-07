//create our model in post.js file
const mongoose = require('mongoose');
const Schema = mongoose.Schema

//create schema to define mongoose model's data type and required field
const postSchema = new mongoose.Schema({
    topic: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    }
});



//exporte model in post.js
module.exports = mongoose.model("Post", postSchema);