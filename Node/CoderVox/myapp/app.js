//import express module
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//create a route to listen our request
app.get('/' , (req, res) => {
    res.send("I love Kale !!!");
})

app.get('/about', (req, res) => {
    res.send("<p>I am from <b>about</b> page!!!</p>");
});

app.get('/contact', (req, res) => {
    res.send('<h1>This is contact page.</h1>')
})

app.get('/file', (req, res) => {
    res.sendFile(__dirname + '/test.html')
})

//create route with route parameter
app.get('/v3/users/:username/:userid', (req, res) => {
    console.log(req.params);
    res.send("welcome profile page," + req.params.username + "!!!!") })
//implement listen function with app
app.listen(PORT, () => {
    console.log(`Server is running on the http://localhost:$(PORT)`);
});