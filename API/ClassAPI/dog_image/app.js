
var express = require('express');
var app =express();
var request = require('request');

var url = "https://dog.ceo/api/breeds/image/random";

var logger = require("morgan");
app.use(logger("dev"));

var PORT = process.env.PORT || 3000 //process .env provides the PORT
//provided by the stytem this program is run on.

app.use(express.static('public'));

/*app.get("/", function(req, res) {
    res.render("index.ejs");
});*/

// request
app.get("/", function(req, res) {
    request(url, function(error, response, body) {
    // make the request and parse the JSON
        if(!error && response.statusCode ==200) {
            var data = JSON.parse(body);
           //console.log(data); 

        var newUrl = data.message;
        res.render("index.ejs", {image: newUrl});

        }
    })
})
                                    
app.listen(PORT, () => {
    console.log("Dog Image App listening on port ${PORT}");
})