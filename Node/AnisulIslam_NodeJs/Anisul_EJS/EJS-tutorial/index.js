//import npm modules
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


//use middleware to recive data from the browser side form express
//it will recive data and encodeded and send to the server
app.use(express.urlencoded({ extended: true }));

//use static file to add our css or images as a static file - static middleware
app.use(express.static("public"));

//set ejs view engine
app.set('view engine', 'ejs');



//create a varialbe to handle user dynamic data using Array to make a sequence
let pLangauges = [];

//GET request to retrive html template
//then pass array data that got from post request by array.push, and send them to response object 
// to add on the html template on the website. pLNames get all, then use it on the html by ejs
app.get('/', (req, res) => {
    res.render('index', { pLNames: pLangauges })
});

//create Contact route
app.get('/contact', (req, res) => {
    res.render('contact', {});
})

//POST requst to recide data  from browser and send to server and get bacl to the browser html side.
app.post('/', (req, res) => {
    //after getting data from the user, store data in a variable to handle data
    //we get these data from user request object body where the data is 'pLangauge' 
    //html name properity who get these data - name='pLangauge'. 
    //use the array variable to store user data, that named is pLanguage. So after that array will get data

    const pLanguage = req.body.pLangauge
    console.log(pLanguage);
    pLangauges.push(pLanguage);
    res.redirect('/')
})

app.listen(PORT, () => {
    console.log(`Server is running on the PORT$(PORT)`);
})