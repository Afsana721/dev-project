// dependancies imported
const express = require('express')
const logger = require('morgan')

// create an app object
const app = express();

// port
const PORT = process.env.PORT || 3001;

// middleware
//   logger
app.use(logger(process.env.NODE_ENV || "dev"))
//   body parsers for x-www-form-urlencoded and json
app.use(express.urlencoded({extended: true}))
app.use(express.json({extended: true}))

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

// READ or GET - bucket route
app.get('/bucket', (req, res) => {
    res.json(bucketlistArray)
}) 

// READ or GET - bucket route for a single item
app.get('/bucket/:id', (req, res) => {
    // get the id of the item being requested
    let bucketId = parseInt(req.params.id);
    
    // did the client send me a numeric id???
    if(!bucketId || typeof bucketId !== 'number') {
        res.status(400).json("A numeric id is required in the request")
    }

    // find, findIndex, filter, forEach, for loop may be used
    let foundItem1 = bucketlistArray.find(item => {
        return item.id == bucketId
    })

    // do we have an item with that id?
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
    // check for valid input, i.e. a description is sent
    if(description.length < 3) {
        res.status(400).json("Please provide a valid input")
        return false;
    }

    // compose an object and add it to our mockdb bucketListArray
    let newItem = {id: ++counter, description: req.body.description, isComplete: false}
    bucketlistArray.push(newItem)
    // send the created object back to the client
    res.json(newItem)
})

app.put('/bucket/:id', (req, res) => {
    // get the id of the item being requested
    let bucketId = parseInt(req.params.id);
    // did the client send me a numeric id???
    if(!bucketId || typeof bucketId !== 'number') {
        res.status(400).json("A numeric id is required in the request")
        return false;
    }
    // find, findIndex, filter, forEach, for loop may be used
    let foundItem1 = bucketlistArray.find(item => item.id == bucketId)
    // do we have an item with that id?
    if(!foundItem1) {
        // i need to send something back with a failure HTTP status header
        res.status(404).json("The requested id does not exist")
        return false;
    }
    // toggle the status (happens on the array, since foundItem1 is a ref to the obj in the bucketListArray)
    foundItem1.isComplete = !foundItem1.isComplete;
    // return the changed item
    res.json(foundItem1)
})


//Delete Item form bucketlistArray

// DELETE - Remove a single item
app.delete('/bucket/:id', (req, res) => {
    // get the id of the item being requested
    const bucketId = parseInt(req.params.id);

    // did the client send me a numeric id?
    if (!bucketId || typeof bucketId !== 'number') {
        res.status(400).json("A numeric id is required in the request");
        return;
    }

    // find the index of the item to delete
    const indexToRemove = bucketlistArray.findIndex(item => item.id === bucketId);

    // do we have an item with that id?
    if (indexToRemove === -1) {
        res.status(404).json("The requested id does not exist");
        return;
    }

    // remove the item from the array
    const deletedItem = bucketlistArray.splice(indexToRemove, 1)[0];

    // send the deleted item back to the client
    res.json(deletedItem);
});
