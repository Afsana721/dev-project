
//added require dependency / library using const variable 
const express = require('express');

//instrantiate express function as app variable object to get express module functions
const app = express();

//create a PORT-The process.env property returns an object containing the user environment
const PORT = process.env.PORT || 3001;

//create root route with function to make req and get response

app.get("/", function(req, res) {
    res.render("Hello world")
})


//start a lintener function

app.listen(PORT, function() {
    console.log(`Sever is running on port ${PORT}`)
})