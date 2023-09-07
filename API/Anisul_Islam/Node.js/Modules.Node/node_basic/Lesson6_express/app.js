//import modules
const express = require("express");
const router = express.Router();
//initialize express
const app = express();

//import router from user.route.js file
const userRouter = require("./routes/user.route");

//http://localhost:3000/ - home route
//http://localhost:3000/api/user/ -register or login route

//use user route & add '/api/user' to more readable for use api 
app.use("/api/user", userRouter);

//create home route
app.use("/", (req, res) => {
    res.send("<h1>I am a get request at home route.</h1>");
});


//use error
app.use((req, res) => {
    res.send("404!!!, not a valid route")
})



module.exports = app;