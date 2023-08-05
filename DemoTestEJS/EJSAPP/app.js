//Create main server file
//Create express variable to get express module

var express = require("express");
var app = express();

//get function to render main.ejs to the root route and pass object / data to main.ejs from app.js as dynamic data
//object key and value, so inside main.ejs we can use key to pass value on our dynamic route. 
app.get("/", function(req, res) {
    //res.render("main.ejs");
    res.render("main.ejs", {pastry: "donuts"})
    
});

//listen the event
app.listen(3001, function() {
    console.log("App is running on port 3000");
});
