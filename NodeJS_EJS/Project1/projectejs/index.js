
var express = require("express");
var app = express();

app.set('view engine', 'ejs');
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

app.listen(3000, function() {
    console.log("App is running on port 3000");
});