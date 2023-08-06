
//import express module and use router function.

const express = require("express");
const router = express.Router();

// user route base url: http://localhost:3000/api/user

//create register route
 router.get("/register", (req, res) => {
     res.send("I am a register route");
     
 });

//create login route 
//set cookies and check cookies from postman & clear cookies and header using append() - check postman/Network tab.

router.get("/login", (req, res) => {
    //res.send("I am a login route");
    res.cookie("name", "asef");
    res.cookie("time", "CST")
    res.clearCookie("name");
    res.append("id", "13000");
    res.end();
    
});

//send status code with json file on the route

router.get("/contact", (req, res) =>{
    res.status(200).json({
         message: "From register Page",
        statusCode:200,
    });

});

//export users.route.js to app.js file to import and use the properties from there.
module.exports = router;