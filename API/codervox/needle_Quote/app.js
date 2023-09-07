//create variables to get required modules
var needle = require('needle');
var express = require('express');
//initialize express module
var app = express();

//create PORT variable to run localhost
var PORT = process.env.PORT || 3001;

//initialize use function to get public folder's styles.css file 
    app.use(express.static('public'));


// create root route / root Url and render to index.ejs file to user action to initialize get method
app.get('/', function (req, res) {
    res.render('index.ejs');
})

//create quote route 
//create a random function of JS that create random number to retrive quotes data from the API
//Math.floor(Math.random() *10) - gives random integer number
//use object length to get any random number 
app.get('/quote', function (req, res) {
    needle.get('https://type.fit/api/quotes', function(error, response,body){
        if(!error && response.statusCode == 200){
            var obj = JSON.parse(body);             //convert json data

           var randomNumber = Math.floor(Math.random() * obj.length);

    //create text using randomNumber and author
            var text = obj[randomNumber].text;
            var author = obj[randomNumber].author;
    //render the data into quote.ejs file that means send to quote.ejs template
            res.render('quote.ejs', {text: text, author:author});
        }

    })
})


//initialize listen function to listen local host PORT 
app.listen(PORT, function () {
    console.log(`Server is running on the PORT ${PORT}`);

})