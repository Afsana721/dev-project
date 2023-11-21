//create server to run our apps on our local host
const express = require('express');
const needle = require('needle');
const { allowedNodeEnvironmentFlags } = require('process');
const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/quote", (req, res) => {
    needle.get("https://type.fit/api/quotes", (error, response, body) => {
        if(!error && response.statusCode == 200){
         var data = JSON.parse(response.body);
         var randomNum = Math.floor(Math.random() * data.length);
         var text = data[randomNum].text;
         var author = data[randomNum].author
         res.render("quote", {text: text, author: author});
           
        }
    });
});

app.listen(PORT, () => {
    console.log(`App is running on the PORT $(PORT)`);
})