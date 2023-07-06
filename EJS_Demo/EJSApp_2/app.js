
var express = require("express");
var app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('public'));

// make a route
app.get("/", function(req, res) {
    //res.render("main.ejs");
    //res.render("main.ejs", {pastry: "donuts"});
});

// create the route for Array post & looping

app.get("/posts", (req, res) => {

    let posts = [
        {title: "I love coffee", author: "Jenna"},
        {title: "Cold brew for life", author: "Kylen"},
        {title: "Extra cream and suger", author:"Gorilla"}
    ];
    res.render("posts.ejs", {posts: posts});
});


// to listen
app.listen(PORT, function() {
    console.log("App is running on port "+PORT);
});