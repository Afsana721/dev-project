//import express & initialize, create PORT variable to handle localhost port
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3005;

//handle midware for Url encode and Json for user data
app.use(express.urlencoded({extended: false}));
app.use(express.json());



//create route for home route where send index.html file
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

//create route for circle.html 
app.get("/circle", (req, res) => {
    res.sendFile(__dirname + "/circle.html")
})

//create route for triangle.html
app.get("/triangle", (req, res) => {
    res.sendFile(__dirname + "/triangle.html")
})

//Triangle: create post route for user input date and store data in variables
app.post("/triangle", (req, res) => {
    //we get data from req.body that user input from height name variable.(used html name is height)
    const height = req.body.height;
    //we get data from req.body taht user input from base name variable.(used html name is base)
    const base = req.body.base;

    //area calculate using javascript for user output after calculate user get result as response
    const area = 0.5 * base * height;
    //so, use respons object to send the result to the user
    res.send(`<h2>Area of Traingle is : ${area}`);
})

//create circle post route to get request and send response as a result to the user. 
//calculate radius for circle user input and output
    app.post("/circle", (req, res) => {
        const radius = req.body.radius;
//calculate radius
    const area = Math.PI * radius * radius;
        res.send(`<h2> Area of Circle is : ${area}`);
    })
//implement listen function to listen on the PORT
app.listen(PORT, () => {
    console.log(`Server is running on the PORT ${PORT}`);
})