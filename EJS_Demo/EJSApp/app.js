var express = require("express");
var app = express();

app.set('view engine', 'ejs');
app.get("/", function(req, res) {
    //res.render("main.ejs", {pastry: "donuts"});
    res.render("main", {pastry:"donuts"});
});

app.listen(3000, function() {
    console.log("App is running on port 3000");
}); 