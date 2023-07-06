var express = require("express");
var app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    //res.render("index.ejs");
    //res.render("index.ejs", {pastry:"donuts"});
    
});

app.get("/about/:stuff", (reeq, res) => {
    res.render("about.ejs", {data: req.params.stuff});
});

app.listen(PORT, () => {
    console.log("Example app is listening on port" + PORT);
});