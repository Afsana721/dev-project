//inport the express constractor function
const express = require('express');

// create th app object form he express function
const app = express();

// creae a root route to handle requests coming from 
// out; coming from clients
// if a Get request comes in on the root rounte, handle it

app.get('/', function (req, res) {
    // req is requst object
    // res is response object
    // together they allow us to control the request response cycle
    res.send("Response coming from GET call / route");
})

//const PORT= 3001;
//module.exports =app;
const PORT = process.env.PORT || 3001;

// we need to start the server and wait for a request to come in
app.listen(PORT)
app.get("/hello", function(req,res){
    res.send("hello");
})

app.get("/about", function(req, res){
    res.send("about");
})
