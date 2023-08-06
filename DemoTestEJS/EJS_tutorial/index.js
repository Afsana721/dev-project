//Create and initialize variables and use module methods. 

const express = require('express');
const app = express();
const PORT= process.env.PORT ||3001;

//recive user data by middle wire.
app.use(express.urlencoded({ extended: true }));

//use public static file style.css. First server access public folder, then - public/css/style.css
  app.use(express.static("public"))

//set ejs engine
app.set("view engine", "ejs");

// create an array to store user input data
let pLangauges = [];

app.get('/', (req, res) => {
  res.render("index", { plNames: pLangauges })              //pass data from pLanguage, all data inside pLanguage [].
  // plName will going to index.ejs li tag using ejs code.
})

//create contact route

app.get("/contact", (req, res) => {
  res.render("contact", {});
})


app.post("/", (req, res) => {
  //res.render("index", {});
  //store data in a variable, when data send by post from the user.
  const pLangauge = req.body.pLangauge;           //that we used inside index.ejs for name="pLangauge"
  pLangauges.push(pLangauge);                     //user array data will be push to pLanguage. We get push() from Array variable.              
  res.redirect("/");                            //redirect response as pLanguage to ejs home route inside li tag from the server. 
})

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`);
})