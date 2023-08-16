// dependancies imported
const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()
const debug = require('debug') ('server');

// create an app object
const app = express();

// SPREAD OUT THE .env
const { MONGODB_USER, MONGODB_PASS, MONGODB, MONGODB_PORT, MONGODB_HOST, SERVER_PORT } = process.env

// port
const PORT = SERVER_PORT || 3001;

// middleware
//   logger
app.use(logger(process.env.NODE_ENV || "dev"))
//   body parsers for x-www-form-urlencoded and json
app.use(express.urlencoded({extended: true}))  // data format of key:value
                                               // e.g. description=Feed+a+gorilla&isComplete=false
app.use(express.json({
    // represents the enhanced parser library
    extended: true
}))        // e.g. '{"description": "Feed a gorilla", "isComplete: false"}'

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

const bucketListModel = require('./models/BucketlistModel')

// mockdata or mockdb
// TODO: comment it out when connecting with the db
const bucketlistArray = [
    {id: 0, description: "Learn Mocha!", isComplete: false},  // index is 0
    {id: 2, description: "Learn SQL!!!", isComplete: false},  // index is 1
    {id: 3, description: "Learn MongoDB!!", isComplete: true} // index is 2
]

var counter = 3

// root route
app.get('/', (req, res) => {
    res.json({message: "You landed your rocket on planet root route!!"})
})

// READ or GET - bucket route - send all items back
app.get('/bucket', (req, res) => {
    // res.json(bucketlistArray)
    bucketListModel.find({})
    // happy case
    .then( function(data) {
        res.json(data)
    })
    // sad case
    .catch( function(err) {
        // tell me i.e. server.js
        console.log(err)
        // tell the client
        res.json("Unable to get data at this time")
    })
}) 

// READ or GET - bucket route for sending a single item back
// TODO: Hook it up to the db
app.get('/bucket/:id', (req, res) => {
    // get the id of the item being requested
    let bucketId = parseInt(req.params.id);
    
    // did the client send me a numeric id???
    if(!bucketId || typeof bucketId !== 'number') {
        res.status(400).json("A numeric id is required in the request")
    }

    // find, findIndex, filter, forEach, for loop may be used
    // find reference to the item object in the array or db
    let foundItem1 = bucketlistArray.find(item => {
        return item.id == bucketId
    })

    // do we have an item with that id?
    // TODO: what happens if the array somehow got other stuff
    // TODO: how would it behave once we get something from a pg/mongo db
    if(foundItem1) {
        res.json(foundItem1)
    } else {
        // i need to send something back with a failure HTTP status header
        res.status(404).json("The requested id does not exist")
    }
}) 

// CREATE or POST a single item
app.post('/bucket', (req, res) => {
    // console.log('the body is: ', req.body)
    // {id = counter++, description, isComplete = false}
    let description = req.body.description;

    // inform the db
    bucketListModel.create({description: req.body.description})
    .then(function(data){
        // send the created object back to the client
        res.json(data)
    })
    .catch(function(err){
        // tell me
        console.log('Error in the post route', err)
        // tell the client
        res.json("An error occurred in the post route. Please try again later.")
    })
})


// PUT - UPDATE route for a specific id
// this toggles the isComplete property of the requested item
app.put('/bucket/:id', (req, res) => {
    // get the id of the item being requested
    let bucketId = new mongoose.Types.ObjectId(req.params.id);
    // find, findIndex, filter, forEach, for loop may be used
    bucketListModel.findById(bucketId)
    .then(function(data){
        data.isComplete = !data.isComplete;  // toggle the update on here .. not on mongo
        return data.save()                   // is a promise which needs to be passed forward
    })
    .then(function(returnedStuff){
        res.json(returnedStuff)              // promise is resolved
    })
    .catch(function(err){
        console.log(err)
        res.json("There was an error in the update on the server")
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})