//setup express, mongoose modules
const express = require('express');
const app = express();          //new instance of express.

app.use(express.urlencoded({extended:true}));
app.use(express.json({extended:true}));

//inport mongoose & implement mongoose module functions to create connect object and require
const mongoose = require('mongoose');
//importe routes/posts file
const postRoutes = require("./routes/posts");
const PORT = process.env.PORT || 3000;  //create PORT variable
const POST = require("./models/post")

//Rn .env file but dont store it using the const dontev
require("dotenv").config();

//Add mongodb
require("./mongodb");




//set views folder's ejs files 
app.set('view engine', 'ejs');

//tell app instance to add /post for every single route-> add '/posts' at the front all the routes that we would create
app.use('/posts', postRoutes);

//create public folder for styles.css file, and here establish those folder, and css file conneciton
app.use(express.static(__dirname + '/public'));

//handle midware 
app.use(express.urlencoded({extended: true}));

//create route using express function- root route & adj the root route to render index.html file
//change root route to redirect to '/posts':
app.get('/', (req, res) => {
    //res.send("Connected");
    //res.render('index');
    res.redirect('/posts');         //get root router from 'routes/posts' then it will be redirected
});


//implement listen function to app instance to listen on the localhost port
app.listen(PORT, () => {
    console.log(`Server App is running on the localhost:PORT ${PORT}`);
})