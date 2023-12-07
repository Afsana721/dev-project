const express = require('express');
const router = express.Router();


//blog routes

router.get("/blogs", (req, res) => {
    Blog.find().sort({ createdAt: -1}) //use sort() & createdAt timestamp mongoose automatically added for us
    .then((result) => {                // and use -1 means the descending ordest, from the newest to old one
      res.render('index', {title: 'All Blogs', blogs: result})  
    })
    .catch((error) => {
        console.log(error);
    })
});


//POST request
router.post("/blogs", (req, res) => {
    const blog = new Blog( req .body );
    blog.save()
    .then((result) => {
        res.redirect('/blogs');
    })
    .catch((error) => {
        console.log(error);
    })
});

//route parameter
router.get("/blogs/:id", (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
    .then((result) => {
      res.render('details', {blog: result, title: 'Blog Details'});
    })
    .catch((error) => {
        console.log(error);
    })
});

//delete request on the server
router.delete('/blogs/:id', (req, res) => {
        const id = req.params.id;

        Blog.findByIdAndDelete(id)
        .then(result => {
            res.json( {redirect: '/blogs' })
        })
        .catch((error) => {
            console.log(error);
        })
    })

    router.get('/blogs/create', (req, res)=> {
    res.render('create', {title: "Create"})
})


module.exports = router;