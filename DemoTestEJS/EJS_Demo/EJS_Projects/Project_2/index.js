
var express = require("express");
var app = express();

app.get('/', function(res, req) {
    res.render("Hello world");
})

app.get('/about/:stuff', function(req, res) {
    var stuff = req.params.stuff;
    res.render("about.ejs", {stuff: stuff});
    
});

app.listen(3000, function() {
    console.log('index.js is running!')
})
