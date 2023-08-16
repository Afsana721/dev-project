//here, create a router use express module
const express = require("express");
const router = express.Router();


//create http request as a route
//after make a request & specify local host port, server get two thing- request & response, then we can handle our request.
//method is provided by the Express application instance and is used to handle incoming HTTP requests.
//app.get(path, callback);

//base Url: http://localhost:3000/api/user


router.get("/login", (req, res) => {
    res.send("I am from login page with a get call");
    
})

//register route
router.get("/register", (req, res) => {
    //res.send("I am from register page with a get call");
    res.sendFile(__dirname+"/views/register.html");
})



//export router to app.js
module.exports = router;