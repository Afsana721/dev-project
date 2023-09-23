//import modules
const express = require('express');
//to create template for website
const expressLayouts = require('express-ejs-layouts');

//initialize app to express function
const app = express();
//create port variable
const PORT = process.env.PORT || 3001;
//config dotenv module
require('dotenv').config();

//create middleware
app.use(express.urlencoded({extended: true}));

//initialize static folders - styles, images can manage
app.use(express.static('public'))

app.use(expressLayouts);

app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

const routes = require('./server/routes/recipeRoutes.js');
app.use('/', routes);



//implement listen function with app to lestion on the port
app.listen(PORT, () => {
    console.log(`Server is running on the PORT ${PORT}`);
})




