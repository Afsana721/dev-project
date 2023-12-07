//get express module by require() function
const express = require("express");
const morgan = require('morgan');
const mongoose = require('mongoose');
// //import blogs model here
// const Blog = require("./models/blog");
const blogRoutes = require('./routes/blogRoutes');
const { render } = require("ejs");
const { error } = require("console");
const { result } = require("lodash");


//setup app. invoke express to app as a instance of express. To storing on the app
const app = express();

//MongoURL - connect to mongoDB
const dbURL = "mongodb+srv://netninja:test1234@cluster0.noaoczn.mongodb.net/node-tuts?retryWrites=true&w=majority";
mongoose.connect(dbURL, { useNewUrlparser:true ,useUnifiedTopology:true})
.then((result) => {
    console.log("mongodb is connected") 
    app.listen(3000, () => console.log("server is running on the port 3000"))
})
.catch((error) => console.log(error));

//register view engine
app.set('view engine', 'ejs');

//middleware & static files
app.use(express.static('public'));

//middleware comes along with express to handle URL encoded data to send as request object
app.use(express.urlencoded({extended:true}));


//middleware
app.use(morgan('dev'));  //use dev option - how it's going to be formatted log to console


app.get("/", (req, res) => {
    res.redirect('/blogs');
});

app.get("/about", (req, res) => {
    //res.send("<h1>About page</h1>");
    //res.sendFile("./views/about.html", {root: __dirname});
    res.render('about', {title: "About"});
});

//redirect route
/*app.get("/about-us", (req, res) => {
    res.redirect("/about");
});*/

//blog routes

// app.get("/blogs", (req, res) => {
//     Blog.find().sort({ createdAt: -1}) //use sort() & createdAt timestamp mongoose automatically added for us
//     .then((result) => {                // and use -1 means the descending ordest, from the newest to old one
//       res.render('index', {title: 'All Blogs', blogs: result})  
//     })
//     .catch((error) => {
//         console.log(error);
//     })
// });


// //POST request
// app.post("/blogs", (req, res) => {
//     const blog = new Blog( req .body );
//     blog.save()
//     .then((result) => {
//         res.redirect('/blogs');
//     })
//     .catch((error) => {
//         console.log(error);
//     })
// });

// //route parameter
// app.get("/blogs/:id", (req, res) => {
//     const id = req.params.id;
//     Blog.findById(id)
//     .then((result) => {
//       res.render('details', {blog: result, title: 'Blog Details'});
//     })
//     .catch((error) => {
//         console.log(error);
//     })
// });

// //delete request on the server
//     app.delete('/blogs/:id', (req, res) => {
//         const id = req.params.id;

//         Blog.findByIdAndDelete(id)
//         .then(result => {
//             res.json( {redirect: '/blogs' })
//         })
//         .catch((error) => {
//             console.log(error);
//         })
//     })

// app.get('/blogs/create', (req, res)=> {
//     res.render('create', {title: "Create"})
// })

app.use((req, res) => {
    //res.status(404).sendFile("./views/404.html", {root: __dirname});
    res.status(404).render('404', {title: "404"});
})

// app.listen(3000, () => {
//    console.log("app is running on the PORt 3000");
// });
//console.log(app.listen())