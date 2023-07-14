
//creates three variables for express for render, app variable handle express package & request variable to request http call
// creates logger variable to generate actions log
// Foudation
var express = require('express');
var app = express();
var request = require('request');
var logger = require('morgan');
app.use(logger("dev"));

//endpoint
var url = "https://api.coindesk.com/v1/bpi/currentprice.json";

// makes the app aware of the public folder
app.use(express.static('public'));

//process env variable to provide the Location / PORT by the system to run this program

var PORT = process.env.PORT || 3000;



// Route Handles and view on your route, and res.render work for index.ejs file

app.get("/", function(req, res) {
    res.render("index.ejs", {});
});


app.get("/getPrice", function(req, res) {
    // creates url variable to send bitcon api endpoint

    request.get(url, function(error, response, body) {
        if(!error && response.statusCode == 200) {

            var data = JSON.parse(body);
        // access the bpi properties using-[req.query.country]
            var rate = data.bpi[req.query.country].rate_float.toFixed(2);
            var symbol = data.bpi[req.query.country].symbol;

            
            res.render("price.ejs", {rate, symbol});
          
      
        };

    });
});


app.listen(PORT, function() {
    console.log("Bitcon conversion App listening on the port ${PORT}");
});

