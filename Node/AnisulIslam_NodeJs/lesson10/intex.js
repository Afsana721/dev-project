//import express & initialize express module
const express = require("express");
const app = express();

//create PORT variable to access local host PORT using process object 
const PORT = process.env.PORT || 3005;

//create route using crud command using app variable which is initialized using express module to get express module properties
//use products route and use id as parameter and regular expression to accept number digit value from user
    app.get("/products/:id([0-9]+)", (req, res) => {
        res.send(`<h2> ID = ${req.params.id}`);
    });

    app.get("/products/:title([a-zA-Z]+)", (req, res) => {
        res.send(`<h2> Title = ${req.params.title}`);
    });

//use wild card for user route- if there is no matching then it will work for user
    app.get("*", (req, res) => {
        res.status(404).send({
            message: 'not a valid route'
        })
    });

//use listen function to listen on the PORT 3005 local host on my locat computer.
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    });






