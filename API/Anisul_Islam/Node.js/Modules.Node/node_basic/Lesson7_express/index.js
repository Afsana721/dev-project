//import module, initialize module and create port variabe
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//bodyParser object exposes various factories to create middlewares
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//create route to handle GET request
app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

//send json data from frontend (use postman to see requst & response.)
app.post('/register', (req, res) => {
    // const name = req.body.name;
    // const age = req.body.age;
    // res.send(`Welcome ${name}, and your age is: ${age}`);

    const fullName = req.body.fullName;
    const age = req.body.age;
    res.send(`<h2>Your name is ${fullName}, and age is ${age}`);
})

//create route - home/root route
//app.get("/", (req, res) => {

//use request object to send query data

    // const id = req.query.id;
    // const name = req.query.name;
//destructure object
    // const {id, name} = req.query;
    // //res.send(`Student id is : ${id}`);
    // res.send(`<h1>Student name is: ${name}, and id is : ${id}</h1>`);
  //})

//route parameter to send params data
// app.get("/userId/:id/userAge/:age", (req, res) => {
//     // const id = req.params.id;
//     // const age = req.params.age;
//     const {id, age} = req.params;
//     res.send(`<h1>Student Id is : ${id} and age is ${age}`);
// })


//use router header to send data
// app.get("/" , (req, res) => {
//     const id = req.header('id');
//     const name = req.header('name');
//     res.send(`<h1>Studend id is : ${id} and name is : ${name}</h1>`)
// })



//implement listen function to listen localhost port
app.listen(PORT, ()=>{
    console.log(`Server is running on the PORT ${PORT}`);
})