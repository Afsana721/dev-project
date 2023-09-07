//import & initialize express module
//router() method is part of express object & helps create separate route files.

const express = require('express');
const { appendFile } = require('fs');
const router = express.Router();

//import post.js using path to find it.
const Post = require('./../models/post');

//create route using express function- root route & adj the root route to render index.html file
// router.get('/', (req, res) => {
//     res.render('index');
// })

//Array object- array containing an object.
//add some fake data: create an array containing an object
router.get('/', (req, res) => {
    const posts = [
      {
        topic: 'Banana smoothies',
        message: 'Does anyone have a good recipe with banana?',
        name: 'Ed',
        ingredients: 'Banana, sugar, salt, lemon'
      }
    ];
  
    res.render('index', { posts: posts });
  });
  
   //create new route for new.ejs file
   router.get('/new', (req, res) => {
    let post = { topic: "", message: "", name: ""}
     res.render("new",  {post: post});
   });

   //create 
   router.get('/:id', (req, res) => {
    res.send("it works!");
   });

   //create post route
   router.post('/', (req, res) => {
    let thePost = new Post({
        topic:req.body.topic,
        message: req.body.message,
        name: req.body.name
    });
    thePost.save((error, post) => {
        if(error) {
            console.log(error);
            res.render('new', {post: thePost});
        } else {
            console.log(post);
            res.redirect(`/posts/${post._id}`);
        }
    });
   });

//module.exports implemantation gives facilities to read this file when we require it in app.js
//that means send functionality to our asking files(app.js).
module.exports = router;