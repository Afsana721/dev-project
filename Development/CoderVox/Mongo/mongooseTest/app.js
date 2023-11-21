const { error } = require('console');
const { create } = require('domain');
const mongoose = require('mongoose');
const { it } = require('node:test');
//mongoDB connection establishment by the URL: 
mongoose.connect('mongodb+srv://afsana:afsana23@cluster0.noaoczn.mongodb.net/test?retryWrites=true&w=majority');
console.log("database is connected");

//create a schema to tell database what will be the requirement of data model with requirement & datatypes

const pizzaSchema = new mongoose.Schema( {
    name: String,
    price: Number
});

/*create a model: which is used to make a mongoDB document. The first paramater is singular name of
our mongoose.Collection. Mongoose will create a plural, lowercase versionof it. So, Pizza will
become the 'pizzas' collection in the database and the second parameter is the schema that we create to establish
our requirement and data type*/
    const Pizza = mongoose.model("Pizza", pizzaSchema);

//Save / create a document with Mongdb.

/*const thePizza = new Pizza({
    name: "Pepperoni",
    price: 10
});

thePizza.save()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });*/

// Create a document in MongoDB using promises
    /*Pizza.create({
        name: "Bacon",
        price: 12
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });*/

// Querying a document in Mongoose using promises
        /*Pizza.find()
        .then(pizza => {
            console.log(pizza);
        })
        .catch(error => {
            console.log(error);
        });*/

//We can be more specific in what we want to search.
        /*Pizza.find({name: "Bacon"})
        .then(pizza => {
            console.log(pizza);
        })
        .catch(error => {
            console.log(error);
        });*/

//Update date from MongoDB
    /*Pizza.updateOne({ name: "Pepperoni"}, {price: 12})
    .then(pizza => {
        console.log(pizza, "Update successfully");
    })
    .catch(error => {
        console.log(error);
    });*/

//How to delete existing data from MongoDB
          Pizza.deleteOne({ name: "Bacon" })
        .then(result => {
            if (result.deletedCount > 0) {
                console.log("Deleted successfully");
            } else {
                console.log("No document found to delete");
            }
        })            
        .catch(error => {
                console.log(error);
            });
