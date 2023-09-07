var express = require("express");
var app = express();

app.set('view engine', 'ejs');
app.get("/", function(req, res) {
    //res.render("main.ejs", {pastry: "donuts"});
    let food = {pastry : "cakes"}
    //res.render("main", {pastry:"cakes"});
    res.render("main",food);
});

app.listen(3000, function() {
    console.log("App is running on port 3000");
}); 