//import express moduel - it is not built in node
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

//create an instance of express module
const app = express();

//connect to mongodb using mongodb url and mongoose instance with it's method
const dbURI ="mongodb+srv://afsana:afsana23@cluster0.noaoczn.mongodb.net/note-tuts?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

//const PORT = 3000;

//set view ending to read ejs files
app.set('view engine', 'ejs');

//third party middleware -morgan and pass dev option
//middleware & static files by express
app.use(express.static('public'));

//middleware to handle browser side form imput to send them as a request object
app.use(express.urlencoded( { extended: true}));

app.use(morgan('dev'));

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

    app.get('/all-blogs', (req, res) => {   
        Blog.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
    })

    app.get('/single-blog', (req, res) => {
        Blog.findById('65123a9d3c2dd1fed95fb423')
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
    })

//middleware to handle middleware function
/*app.use((req , res, next) => {
    console.log('new request made');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next();
})*/

//set root route for index.ejs file 
//create a blog const Array object variable to pass data dynamiclly into ejs file
app.get('/', (req, res) => {
    res.redirect('/blogs')
    /*const blogs = [
        { title: 'Asef finds eggs', snippet: 'Lorem ipsum dolor sit amet consecteture' },
        { title: 'Mario finds starts', snippet: 'Lorem ipsum dolor sit amet consecteture' },
        { title: 'How to defeat browser', snippet: 'Lorem ipsum dolor sit amet consecteture' },
    ];

    res.render('index', { title: 'Home' , blogs: blogs});*/
});

app.get('/about', (req, res) => {
    res.render('about', ({title : 'About'}));
});



//redirect route Url
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// })

//blog route
app.get('/blogs', (req, res) => {
    Blog.find().sort({createdAt: -1})
    .then((result) => {
        res.render('index', {title: 'All Blogs', blogs: result})
    })
    .catch((err) => {
        console.log(err);
    })
});

//post handler route to submit user data from browser site. 
    app.post('/blogs' , (req, res) => {
    //we can see what request comes from the submit form on the browser site.
        //console.log(req.body)
    // create new blogs to store user/browser site submit data and save them in database
        const blog = new Blog(req.body);
        blog.save()
            .then((result) => {
                res.redirect('/blogs');
            })
            .catch((err) => {
                console.log(err);
            })
    })

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
    })

//delete request
    app.delete('/blogs/:id', (req, res) => {
        const id = req.params.id;

        Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({redirect: '/blogs'});
        })
        .catch(err => {
            console.log(err);
        })
    })
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
/*app.listen(PORT, () => {
    console.log(`Server is running on the http://localhost${PORT}`);
})*/