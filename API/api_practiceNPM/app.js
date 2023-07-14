
/*var needle = require('needle');
var needel = require('needle');

needle.get("https://type.fit/api/quotes", function(error, response, body){

    if(!error && response.statusCode == 200) {
        //console.log(body);
        var data = JSON.parse(body);
        console.log(data[3].text);
    }
}); */


//creates three variables
var needle = require('needle');
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

//To serve static files such as images, CSS files, and JavaScript files, we used the express.static built-in middleware function in Express, using
// use function from express module. 
app.use(express.static('public'));

// creates route for root location to display index.ejs file
app.get("/", function(req, res) {
    res.render('index.ejs')
})

// creates route for quote route location to display quote.ejs file and add api url (endpoint) to store api required response data if there is no error
// and successfully retrieve json data. Here needle handles endpoint / api url to  send request and get response.
app.get("/quote", function(req, res) {
    needle.get("https://type.fit/api/quotes", function(error, response, body) {
        if(!error && response.statusCode == 200) {

    //to get access JSON Array objects using random number-so, using response body (JSON data) and add math function to every time a random number
     // JavaScript mathod: Math.random() - function
     // Returns a random integer from 0 to 99: Math.floor(Math.random() * JSONData );       
            
            var data = JSON.parse(body);
            var randomNum = Math.floor(Math.random() * data.length);
    // creates text & author variable to get text & author index data 
            var text = data[randomNum].text;
            var author = data[randomNum].author;

    //makes a request to render quote.es file and passing test & author value. 
    //quote.ejs file recives text * author value.
        res.render("quote.ejs", {text: text, author: author});

        }
    });
});

app.listen(PORT, function() {
    console.log("app is running on the port 3000")
})


