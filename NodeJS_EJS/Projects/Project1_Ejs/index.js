//creare variable to importe express module , and create app variable as instance of express module

var express = require("express");
var app = express();

//implement set method to get view engin for ejs

app.set('view engine', 'ejs');

//implement get function for get call and render home.ejs, about.ejs & contact.ejs
app.get("/", function(req, res) {
    //res.render("main.ejs", {pastry: "donuts"});
    res.render("home.ejs", {pizza:"pineapple"});
});

app.get("/about", function(req, res) {
    res.render("about.ejs", {cappuccino: "I like my cappuccino to be sweet"});

});

app.get("/contact", function(req, res) {
    res.render("contact.ejs", {fires: "extra salt"})
})

//implement listen function to listen post 3000

app.listen(3000, function() {
    console.log("App is running on port 3000");
});