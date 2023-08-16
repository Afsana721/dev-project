
//Create routes 
//Create variable to initialize external module express
const express = require("express");
const app = express();

//import router from user.router to use use router path
const userRouter = require("./routes/user.route");

//initialize user router to app variable
app.use("/api/user", userRouter);




//root route if user use this route.
app.use("/", (req, res) => {

    res.statusCode=200;
    res.sendFile(__dirname+"/views/index.html"); 
})

//creae a error route search handle for user
app.use((req, res) => {
    res.send("<h1> 404!!! Not a valid url, please use correct url</h1>");
    
});


//importe app.js to index.js
module.exports = app;