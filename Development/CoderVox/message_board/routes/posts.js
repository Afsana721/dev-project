const express = require("express");
const router = express.Router();
const Post = require("./../models/post");

/* first time testing to check data is working on the home / index file*/

// router.get("/", (req, res) => {
//     const posts = [{
//         topic: "I like banana smoothies",
//         message: "Does anyone have a good recipe?",
//         name: "Linda",
//     }];

//     res.render("index", { posts: posts});
// });



router.get("/", async (req, res) => {
    try {
        const posts = await Post.find({}).exec();
        res.render("index", { posts: posts });
    } catch (error) {
        console.log(error);
    }
});


router.get("/new", (req, res) => {
    let post = {topic: "", message: "", name: ""}
    res.render("new", {post: post});
});

router.get("/edit/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).exec();
        res.render("edit", { post: post });
    } catch (error) {
        console.log(error);
        res.redirect("/");
    }
});


router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).exec();
        console.log(post);
        res.render("show", { post: post });
    } catch (error) {
        console.log(error);
        res.redirect("/");
    }
});



// router.get("/:id", (req, res) => {
//     Post.findById(req.params.id, (error, post) => {
//         if(error){
//             console.log(error);
//             res.redirect("/");
//         }else {
//             console.log(post);
//             res.render("show", {post: post});
//         }
//     })
// })

// router.post("/", (req, res) => {
//     let thePost = new Post({
//         topic:req.body.topic,
//         message:req.body.message,
//         name:req.body.name
//     });

//     thePost.save((error, post) => {
//         if(error) {
//             console.log(error);
//             res.render("new", {post: thePost});
//         }else {
//             console.log(post);
//             res.redirect(`/posts/$(post._id`);
//         }
//     })
// })

router.post("/", async (req, res) => {
    let thePost = new Post({
        topic: req.body.topic,
        message: req.body.message,
        name: req.body.name
    });

    try {
        const post = await thePost.save();
        console.log(post);
        res.redirect(`/posts/${post._id}`);
    } catch (error) {
        console.log(error);
        res.render("new", { post: thePost });
    }
});

//Update posts by user changing their contents

// router.put("/:id", (req, res) => {
//     Post.findByIdAndUpdate( {_id: req.params.id}, {
//         topic:req.body.topic,
//         name: req.body.name,
//         message: req.body.message
//     }, (error, post) => {
//         if(error) { 
//             console.log(error);
//         }else {
//             res.redirect(`/posts/${post._id}`);
//         }
//     })
// });


router.put("/:id", (req, res) => {
    Post.findByIdAndUpdate({_id: req.params.id}, {
        topic: req.body.topic,
        name: req.body.name, // Corrected property name
        message: req.body.message // Corrected property name
    }, (error, post) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect(`/posts/${post._id}`);
        }
    });
});





module.exports = router;