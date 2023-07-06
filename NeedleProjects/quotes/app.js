
// create required packages variables / objects for needle & express modules

var needle = require('needle');
var express = require('express');

// store express object into app variable to get it's properties

var app = express();

// adds styles.css file
    app.use(express.static('public'));

// create a route & render index.ejs file
 
app.get("/", function(req, res) {

    res.render('index.ejs');

});

// create quote route & call needle object to use it's get method to make a HTTP Get call without error, check status code
// adds a conditional statement for error and OK status code.

app.get("/quote" ,function(req, res) {

    needle.get('https://type.fit/api/quotes', function(error, response, body) {

        if(!error && response.statusCode == 200) {
// create random number using obj.lenght 

            var obj = JSON.parse(body);
            var randomNum = Math.floor(Math.random() * obj.length);

            var text =obj[randomNum].text;
            var author = obj[randomNum].author;

            res.render("quote.ejs", {text: text, author:author});

        }
    });

});

// Now listen comes from express package

app.listen(3000, function() {
    console.log("App is listening on Port:3000.");
});