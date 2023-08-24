// dependancies imported
const mongoose = require('mongoose')
require('dotenv').config()

const debug=require('debug')('mongodb')

// SPREAD OUT THE .env
const { MONGODB_USER, MONGODB_PASS, MONGODB, MONGODB_PORT, MONGODB_HOST, SERVER_PORT } = process.env

// connection object
const connectObject = {
    // properties required by new versions of mongodb
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // later we shall move the login info to keys files
    user: MONGODB_USER,
    pass: MONGODB_PASS,
    authSource: "admin"
}

debug(connectObject)

// url has the scheme, server hostname, port and database of interest
const url = `mongodb://${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB}`

// connect to MongoDB using JS Promise based structure
mongoose.connect(url, connectObject)
.then(function(){
    console.log(`Connected to Mongo database ${MONGODB} successfully`)
})
.catch(function(err){
    console.error(`Mongo connection failed with ${err}`)
})