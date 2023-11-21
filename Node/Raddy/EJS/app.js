//import npm modules 
const express = require('express');
require('dotenv').config();
const expressLayout = require('express-ejs-layouts');
//import method-override modules to edit our customer data.
const methodOverride = require('method-override');
//const { flash } = require('express-flash-message');
const flash = require('express-flash');
//inordered to use flash messages, we need to bring Express sesson as well.
//so we are going to be using cookies
const session = require('express-session');
const connectDB = require('./server/config/db');

const app = express();

//PORT to run the apps
const PORT = 3000 || process.env.PORT;

//connect to Database
connectDB();

//create middleware to handle request data
app.use(express.urlencoded({extended: true}));

/*Return middleware that only parses json and only looks at requests where the 
    content-type haeader matches the type option. */
app.use(express.json());

//middleware for method-override
app.use(methodOverride('_method'));

/*Express handle static folder-like images, Css */
app.use(express.static('public'));
//Express Session
    app.use(
        session({
            secret: 'secret',
            resave: false,
            saveUninitialized: true,
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 * 7,    //1 week
            }
        })
    );

    //Flash Message middleware
    //app.use(flash({ sessionKeyName: 'flashMessage'}))
    app.use(flash());


/*This middleware intercepts the response rendering process, allowing us to wrap our 
    content in a predefined layout.*/
app.use(expressLayout);

/* This sets the default layout file to be used for rendering views. In this case, 
    the layout file is specified as ./layouts/main. When a view is rendered, it will be injected into this layout file. */
app.set('layout', './layouts/main');

//setup EJS template engine views
app.set('view engine', 'ejs')

///Routers
    app.use('/', require('./server/routes/customer'))


//handle 404 error if there is no existing url
    app.get('*', (req, res) => {
        res.status(404).render('404');
    })



//implement listen funciton to listen on the PORT
app.listen(PORT, () => {
    console.log(`Server is running on the PORT ${PORT}`);
});