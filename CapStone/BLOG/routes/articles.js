//import npm modules
const express = require('express');
const router = express.Router();


router.get('/new', (req, res) => {
    res.render('articles/new')
})

router.post('/', (req, res) => {

})


//exports router to server.js 
module.exports = router;