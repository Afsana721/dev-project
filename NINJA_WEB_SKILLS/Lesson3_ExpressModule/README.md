Express: It is a NPM framework that helps us to easily mange our routing, request, server side logice, and responses with much more elegant way, it gives easy way to read, write, and extend our codes. 
That means, we can use raw node's objects to create server with different actions but express allows us save time, clean codes with different feature that really helps developers. 
Process: npm install express

EJS Module: 
    passing data dynamiclly usign EJS:
EJS Templates: 
    - EJS Templates are processed through the EJS view engine on the server. 
    - How does EJS works- Our views files live on the Server (app.js), and where we want to render on throught the browser that view filres is passed into the view engine the EJ SVU enging to be processed, then now the engine looks for any kind of dynamic content, variables, loops, conditionals etc, then whenever it finds those, it figures out the resulting HTML code for those parts and in the end it spits our a valid HTML page based on the template we wrote and then the HTML  page with the resulting data inside it will be returned to the browser, so this whole process is called Server-Side Rendering.

    
        - //import express moduel - it is not built in node
const express = require('express');
const app = express();
const PORT = 3000;
app.set('view engine', 'ejs');      //set view engine to read all ejs file

app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.get('/about', (req, res) => {
    res.render('about', ({title : 'About'}));
});

app.get('/blogs/create', (req, res) => {
    res.render('create.ejs', { title: 'Create a new Blog'});
})

//404 page and this should add on the bottom - if express doesn't find any route then 
// it will go to the 404.html page. 
app.use((req, res)=> {
    //res.sendFile('./views/404.html', {root: __dirname} )
    res.status(404).render('404', { title: '404'});
})

//implement lession function to listen on the port for the request
app.listen(PORT, () => {
    console.log(`Server is running on the http://localhost${PORT}`);
})


Partials: When we use views files as index.html file for EJS template, there are many things are same codes and also we can change different types of layout or title or many more. So, using same content again and again is not a proficient practice as a coding. And also think about the dynamic changes for the html template. So, we need to introduce something else- Partials folder what can store some of HTML and we could import them from our views folder/html template. Fortunately, we can do this with Express and EJS and those files that we make are called partials or partials templates. Basically, the parts of a template that can be resused in different views.
Use: <%- include('./partials/footer.ejs') %>

Middleware: Code which runs( on the server) between getting a request and sending a response -- that means: Request --> to the Server --then any Code(function)  then
---> Response comes. So use method is generally used to run some Middleware code and we've seen that already when we handled our 404 cases. app.use(function).
We don't just have to have one bit of Middleware, we could have more than one piece of Middleware that runs on the Server before made a response is sent to browser / client side. 
Now, on the get handlers are also essentially middleware- remember middleware is just functions or code which runs on the Server between the Requests coming in and the Response going back to the browser- the difference being that GET handle is right here only fire functions for get request to certain route. But use() method runs for every type of Request all routes, including POST Request. Middleware runs top to bottom in our code, and it runs that way until we exit the process or explicitly send a Response to the browser / cliet side. 
So, the order of the Middleware is very important.

Middleware Example: 
    - Logger middleware to log details of every request
    = Authentication check middleware for protected routes
    - Middleware to parse JSON data from Requests
    - Return 404 pages
* Third party Middleware: One called - Morgan -  which is a logger and it does a similar thig to our custom Middleware where we log stoffer to the console but it's better than this, and also one called  - helmet - which is a security piece of Middleware, there's Middleware for using Sessions Cookies validation, lots of different things. 

Static Files
Adding CSS: //middleware & static files by express
app.use(express.static('public'))

DataBase: 
    - SQL : Table, Rows, & Columns
    - NoSQL : Collections, Documents
We use MongoDB - NoSQL Database.

MongoDB:
Collections: 
-User Collection: 
            - User document             -Blog document
            - User document             -Blog doucment
Blog/User collection: 
    -Blog / User document -  {
                            "_id": ObjectId(1234),
                            "title": "Opening Party"
                            "snippet" : "all about the..",
                            "body" : " blah blah balh.."
                              }
            
Mongoose: We have to install mongoose (third party api module for npm )
- Mongoose is an ODM library - Object Document Mapping Library.
Like: Mongoos:  --> User Model: User.get(), User.findById()
                --> Blog Model: Blog.deleteOne()
That means, get, post, update, delete data. Database collection for us based on teh name of the model we use and then it performs the action required and returns us a response. 

How we use Mongodb in our project:  Schema & Models
Schema --
    * Schemas defines the structure of a type of data / document 
        - Properties & property types
Example
User Schema:                                Blog Schema
 - name (String), required                      - title (String), required
 - age (number)                                 - snippet (String),required
 - bio (String), required                       - body (String), required

Model --
    * Models allow us to communicate with database collections

Blog Model
    BlogSchema -->get, save, delete, etc --> Database (Blog Collection)
That means: if we create a Blog model which is based on the blog schema. The blog model will then have both static and instance methods which we can use to save, update, delete or read data from the blog's collection

Example: 

//import mongoose to create Schema and model using it's methods
const mongoose = require('mongoose');

//create Schema -> Stracture of the data model
const Schema = mongoose.Schema;

//create blog Schema
const blogSchema = new Schema({
    title: {
        type: String, 
        require: true
    },
    snippet: {
        type: String, 
        require: true
    },
    body: {
        type: String, 
        require: true
    }   
}, {timestamps: true});

/*create a model based on the Schema structure : the model is the thing that suronds that and 
    then provides us with an interface by which to communicate with a database collection for that
    document.*/

const Blog = mongoose.model('Blog', blogSchema);

//export the model file
module.exports = Blog;

Getting & Saving Data

//mongoose & mongo sandbox route
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title:'new blog2',
        snippet: 'about my new blog2',
        body: 'more about my new blog2'
    });
    blog.save()
     .then((result) => {
        res.send(result)
     })
     .catch((err) => {
        console.log(err);
     });
})

Requsest Types: GET, POST, PUT, DELETE
Like: Simple CRUD operation: ----
    - localhost:3000/blogs          GET Request
    - localhost:3000/blogs/create   GET Request
    - localhost:3000/blogs          POST Request
    - localhost:3000/blogs/:id      GET Request
    - localhost:3000/blogs/:id      PUT/Update Request
    - localhost:3000/blogs/:id      DELETE Request

MiddleWare who handle Post data to add in the request object

//middleware to handle browser side form imput to send them as a request object
app.use(express.urlencoded( { extended: true}));
NOTE: Basically, it takes all the URL encoded data that comes along for the ride and it passes that into an object that we can use on the Request Object.

Route Parameters: the variable parts of the route that may change value:
    - localhost:3000/blogs/:id ->   localhost:3000/blogs/12345
                                    localhost:3000/blogs/hello
That means, extract the ID and then we can query the database for the document with the ID and send it back to the user. So we need a way in Express to extract a ramp parameter from a URL, so it can use it.

Example: 
    app.get('/blogs/:id', (req, res )=> {
        const id = req.params.id;
        //console.log(id);
        Blog.findById(id)
            .then((result) => {
                res.render('details', { blog: result, title: 'Blog Details'})
            })
            .catch((err) => {
                console.log(err);
            });
    });

    Delete Requests:  localhose:3000/blogs/:id          DELETE Request


