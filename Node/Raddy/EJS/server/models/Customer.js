//import mongodb execution package library mongoose instance to create data Schema as a data modeling.
const mongoose = require('mongoose');

//create mongodb Schema instance using mongoose Schema function 
const Schema = mongoose.Schema;

//create all customer schema variable / object to pass customer data and get back to browser
//and pass the infomation about the schema that will be allowed database to store there.
const CustomerSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    tel: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()       
    }

});


//export the file, so sever can access the CustomerSchema from the model Customer js file.
module.exports = mongoose.model('customer', CustomerSchema);