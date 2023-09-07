const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

// body parser code. I think we only need the urlencoded
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.render("home.ejs");
});

// process the request to load the newsfeed page
app.get(
    "/newsfeed", 
    function(req, res) {
        res.render("newsfeed.ejs");
});

//add following : 
  const { auth, requireAuth } = require('express-openid-connect');
  require("dotenv").config;
  


// start the app and keep listening on port 3000
app.listen(port, function(){
    console.log(`App is running on port:${port}`);
});

