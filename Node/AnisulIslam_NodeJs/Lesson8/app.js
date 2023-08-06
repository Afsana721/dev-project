
//Create a server to send http request on the local host 
//express is external node.js package, 
//so we need to initialize node and install express to build packages and other libraries.
//Create variable, to require express module and store express function in a variable
//use the app variable, we can use express module different types of funcions

const express = require("express");
const app = express();

//import router module from here using users.route path from my project folder. So we get userroute properties.
const userRoute = require("./routes/users.route");

//use userroute with app variable. And some user comfortable path way to identify uniquely.

app.use("/api/user", userRoute);


//create routes on my local host 3001, using express app method. After getting route, server get two things - request & response
//add index.html file 

app.use("/", (req, res) => {
    res.statusCode=200;
    res.sendFile(__dirname+"/views/index.html"); 
});

//add register.html file

app.use("/user", (req, res) => {
    res.statusCode =200;
    res.send(__dirname + "/views/register.html");
});

//create user wrong path search meassage route

// app.use((req, res) => {
//     res.send("<h1>Not a valid path, please check the url.</h1>")
// })

// app.use("/login" , (req, res) => {
//     res.send("I am login page");
// });

// app.use("/register", (req, res) => {
//     res.redirect("/login");
// });


/*app.get("/about", (req, res) => {
    res.send("I am a get request at about route");
    res.end("response is ended here by the end method");
});

app.post("/", (req, res) => {
   res.send("I am post method from home route");
   res.end("response is ended here by the end method");
});

app.put("/", (req, res) => {
    res.send("I am put method from home route");
    res.end("response is ended here by the end method");
});

app.delete("/", (req, res) => {
    res.send("I am delete method from home route");
    res.end("response is ended here by the end method");
});*/






//export app.js to index.js
module.exports = app;



