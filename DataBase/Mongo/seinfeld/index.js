//Create and initialize npm modules express & mongoose
const express = require("express");
const mongoose = require("mongoose");


//create express app object instance to get express methods
var app = express();

//set local server PORT location
var PORT = process.env.PORT || 3008;

//create mongoose objece instance to get mongoose methods to interact with MongoDB database
//var mongoose = require(mongoose);

//Use use function to encoded urlencode body
app.use(express.urlencoded({ extended: true }));


/*configuring the Express application (app) to use the express.json() middleware. This middleware is responsible for parsing incoming
JSON data from HTTP request bodies and populating the req.body object with the parsed JSON data.*/
//Use use function to tell app to parse a JSON body
app.use(express.json({ extended: true }));

//Use use function to parse a JSON body
app.use(express.json({ extended: true }));

//URL: The url variable holds the URL for the MongoDB database we want to connect to. This URL includes the scheme (mongodb://), 
//the server hostname, port number, and the name of the database.



//create a connection object to connect with mongoDB, who holds some properties with user credential.
const connectObject = {

    //It's recommended to set this option to true when working with newer versions of the MongoDB driver.
    //seNewUrlParser to true in the connection options to inform the driver to use the new URL parsing logic.
    //new URL parser handles URL parsing more accurately and efficiently, especially with connection strings
    //that contain special characters or encoded components.

    // url has the scheme, server hostname, port and database of interest
    // properties required by new versions of mongodb
    useNewUrlParser: true,
    useUnifiedTopology: true,
    user: "acc",
    pass: "acc_rocks_2020",
    authSource: "admin"

}

const url = `mongodb://mongodb.accsoftwarebootcamp.com:27017/test`;
// connect to MongoDB using Javascript Promise
//mongoose.connect('<connection-string>', <options>, <callback>); - comes from mongoose library 
//mongoose.connect(url string, connection object- handle handle & parse : useNewUrlparse, useUnifiedtopoloty, user authentication)
//useNewUrlParser:This option is used to enable the use of the new URL parser provided by the MongoDB driver.

//.then() and .catch() methods are part of the JavaScript Promise API and are used for handling the outcomes of asynchronous operations
//.then() method is used to handle the successful fulfillment of a promise. It takes a callback function as its argument, 
//which will be executed when the promise is resolved (successfully fulfilled).
//.catch() method is used to handle errors that occur during the promise's execution and
//The error object that caused the Promise rejection is passed as an argument to the .catch() callback function

// Step1: make a connection to the database.
mongoose.connect(url, connectObject)
    .then(function () {
        console.log(`Connected to Mongo database test successfully`)
    })
    .catch(function (error) {
        console.error(`Mongo connection failed with ${err}`);
    });

//Setp2: create a user schema- create a user schema in the context of a database, we are defining the structure and rules 
//for how user data will be stored in that database
//new mongoose.Schema(): This creates a new instance of the Schema class provided by Mongoose.
//Schema() method's parameter is an object that defines the structure and properties of the schema for our MongoDB documents. 
//This object contains key-value pairs, where the keys represent the field names of our documents, and the values define the properties of those fields.

const userSchema = new mongoose.Schema({
    name: { type: String, requried: true },
    age: Number,
    email: String
})


//modet ()method is provided by Mongoose to create a model based on a schema. 
//It takes two main arguments: the name of the model- here is user and the schema what datatype for the user data.
//Step3: create a user model
const UserModel = mongoose.model("user", userSchema);

//Step4: create a route to add a user
app.post('/users', function(req, res) {
    console.log('body is:', req.body)

//prepared to create a user in the db
let UserObject = new UserModel({
    name: req.body.name,
        age: req.body.age,
        email: req.body.email
});

//commit the new user
    UserObject
    .save()      //return promise object of js
    .then(function(data) {
        res.json(data)
    })
    .catch(function(err) {
        console.error(err)
    })
})




//tell app express instance to listening on the PORT 3008.
app.listen(PORT, function () {
    console.log(`Server is running on PORT ${PORT}`);
});











