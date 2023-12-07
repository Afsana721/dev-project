const { timeStamp } = require('console');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creates a new instance of a schema object and pass object as a parameter inside 
// Schema constractor. This object can describe the structure of the documents that
//we want to store in our block collection on the mongoDB ultimately. 
//So, we can add different properties that we want our blog objects to have, 
//example: want to have a title as a property of the blog document, and then tell to the 
// schema object what data type will be the title property, like string and we also 
// like to say that blog object is required this property by add require 
// so, we added some extra validation for these data to store inside DB.
// on the Schema constractor we can pass the second argument as a option object
//Where we can set timestamp is true, and this automatically generates time stamps 
// properties for us on our blog documents. In the future, when update or create document
// it's going to auto assign values to those properties for us
//Schema is the thing that define the structure of our documents the model is the
// thing that surrounds that and then provides us with an interfact by which to 
//communicate with a database collection for that document type

//create a Schema by creating new Schema object to get Schema constructor
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
}, { timestamps: true });

//create a new const to store this model in and typically the names of the models
// are given a Capital letter, Blog with a capital letter, then set that equal to 
// mongoose and use the model() method, now this model method takes in as a first
// argument the name of this model. Now the name of this is important, the reason its
// important because it's going to look at this name and it's going to puralize it 
// then look for the collection inside the database whenever we use this model in
// the future to communicate with the database. So, we will get access different method
// on this in the future provided by the model
// And the second argument is going to be the schema we want to base this model on
// what type of objects and we're going to store inside this collection, it's going to be
// blogSchema and we just created on the blogs.js file. So, there is two steps
// then we have to export the model then we can use this model from our app.js file
// then we can use the Blog model to save some new blog documents to our database collection.


// create model
const Blog = mongoose.model('Blog', blogSchema);


module.exports = Blog;