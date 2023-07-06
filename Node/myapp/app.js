// creates an Express application. Store express function as a object,

var express = require('express');

// creates an app variable to store express object to exported express module.
var app =express();



// get() is express function, and add a callback function where send request and get response string.
// get() generate a get request to the root url: '/' or root domain address.

app.get('/', function(req, res) {
    //res.send("I would like a small snack for today's lunch");

// send http request using html element using html tag
    //res.send('<p><b>How</b> <i>are </i> you?</p');

// uses external html file 
   // res.sendFile(__dirname + "/test.html");

});

// specify the request port 3000 - server location port 3000.
    //app.listen(3000);



// making new routes based on the root route / server location / url 

app.get('/about', function(req, res) {
    res.send("You've reached the about page.");
});

app.get('/contact', function(req, res) {
    res.send("You may contact us here.");
});

app.get('/contact/form', function(req, res) {
    res.send("Use the form to listed your need.");
});


// creates a new route with parameters
app.get('/v3/users/:username/:userid', function(req, res) {
    //console.log(req);
    console.log(req.params);
    res.send("Welcome to your profile page," +req.params.username + "!!!");
});



//creates a callback function to see the message on the terminal console  

app.listen(3000, function() {
    console.log("App is running on port 3000");
});