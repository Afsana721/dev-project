//import modules
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
//const uuid = require("uuid");

const userRouter = require("./routes/users.route");


//import users from users.model.js file
    const users = require("./models/users.model");

//allow different api acceptance.
app.use(cors());

//manage middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use("/users", userRouter);
//app.use(dotenv());
//app.use(uuid());

//create users route
//app.get("/users", );

//home route
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

//setup invalid route
app.use((req, res, next) => {
    res.status(404).json({
        message: "route not found."
    })
})

//server error, if server has any error: for parameter-> error, req, res, next
app.use((error,req, res, next) => {
    res.status(500).json({
        message: "Something broke"
    });
})


module.exports = app;