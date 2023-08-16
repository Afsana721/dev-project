//import app.js here
const app = require("./app");
const express=require('express');

//not needed body-parse, starting from Express version 4.16.0, the express package now includes built-in middleware
// functions to parse incoming request bodies.
//use body-parser to recive data after sending to the route
//const bodyParser = require('bodyParser');

//user bodyParser to handle sending data to Urlencoded, and for older version need to use extended: false
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Parse JSON-encoded bodies, parse application/json


//check how process object and port works
// console.log(PORT);
// console.log(process);
const PORT = process.env.PORT || 3001



//create route and http call POST 
app.post("/user", (req, res) => {

//after sending data, we get data from request & request has header, cookies, body. Here we need body
    const data =req.body.name;
//send any text as a response
    res.send(`Welcome ${data}`);
   
})

//listen server using listen method and give parameter where/local host port- it will listen - create a call back function

app.listen(PORT, () => {
    console.log(`Server is running on the PORT ${PORT}`)
})


// To make simple to index.js create app.js and switch some code to app.js then import app.js from 
// index js. Now index.js only listen for server route port
