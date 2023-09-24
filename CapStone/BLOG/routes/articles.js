//import npm modules
const express = require('express');
//import article.js mongoose schema model
const Article = require('./../models/article')
const router = express.Router();


router.get('/new', (req, res) => {
    res.render('articles/new')
})

//create a rotue
router.get(':id', (req, res) => {

})


router.post('/', async(req, res) => {
    //create a new article
    const article = new Article({
        title: req.body.title,
        description: req.body.description,
        process: req.body.process,
        image: req.body.image
    })
    try{
        article = await article.save();
        res.redirect(`/articles/${article.id}`)
    } catch(e) {
        res.render('articles/new', {article: article})
    }
    
})


//exports router to server.js 
module.exports = router;