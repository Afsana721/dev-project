//import mongoose to create Schema and model using it's methods
const mongoose = require('mongoose');

//create Schema -> Stracture of the data model
const Schema = mongoose.Schema;

//create blog Schema
const blogSchema = new Schema({
    title: {
        type: String, 
        require: true
    },
    snippet: {
        type: String, 
        require: true
    },
    body: {
        type: String, 
        require: true
    }   
}, {timestamps: true});

/*create a model based on the Schema structure : the model is the thing that suronds that and 
    then provides us with an interface by which to communicate with a database collection for that
    document.*/

const Blog = mongoose.model('Blog', blogSchema);

//export the model file
module.exports = Blog;