// set up our express serveer, and implement the routes for home & contact pages as well as API call to retrieve food data

//const express = require("express");
//const fetch = require("node-fetch");

//import express from 'express';
//import fetch from 'node-fetch';
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3002;

//set static folder for CSS and images
app.use(express.static('public'));

//set up EJS as the view engine
app.set('view engine', 'ejs');

//create home route page
app.get("/", (req, res) => {
    res.render("index");
});

//create contact route page
app.get("/", (req, res) => {
    res.render("contact")
})

//food api route (replace food api usl here with the actual API Url)
app.get('/api/food', (req, res) => {


  axios.get(endpoint)
  .then(response => {
    const data = response.data;
    res.render("index", {data: data.hits});
  })
  .catch((error) => console.log(error))
});


// Start the server by listen()
    app.listen(PORT, () => {
        console.log(`Server started on PORT ${PORT}`);
    });