//import express module & use Router method
const express =require('express');
const router = express.Router();

//create server root route for GET 
// router.get("/", (req, res)=>{
//     res.send("hello, I am here");
// });

//create register route
router.get("/register", (req, res) => {
    res.send("Regster");
});

//create login route
router.get("/login", (req, res) => {
    res.send("Login");
});


//export router variable who is implemented with different routes
module.exports = router;