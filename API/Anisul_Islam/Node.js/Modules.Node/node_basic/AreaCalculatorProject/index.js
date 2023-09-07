//import modules, initialize and create PORT variable
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//create root route -GET for index.html file
app.get('/', (req, res) => {
    res.sendFile(__dirname +'/index.html');
})

//create route for circle route for circle.html
app.get('/circle', (req, res) => {
    res.sendFile(__dirname + '/circle.html');
})

//create route for triangle route for tringle.html
app.get('/triangle', (req, res) => {
    res.sendFile(__dirname + '/triangle.html');
})

//create user data handling routes for circle & triangle for POST 
app.post('/circle', (req, res) => {
    const radius = req.body.radius;
    const area = Math.PI * radius * radius;
    res.send(`<h1>Area of Circle is : ${area}`);
})


app.post('/triangle', (req, res) => {
    const height = req.body.height;
    const base = req.body.base;
    const area = 0.5 * base *height;
    res.send(`<h1>Area of Triangle is : ${area}`);
})
//implement listen funciton to app to run server on the localhost port
app.listen(PORT, () => {
    console.log(`Server is running on the http://localhost:${PORT}`);
})