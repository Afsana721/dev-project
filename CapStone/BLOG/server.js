//create server to import npm modules
const express = require('express');
const mongoose = require('mongoose');
const articlesRouter = require('./routes/articles');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/articles', articlesRouter);

//view engine will convert ejs code to html
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    const articles = [{
        title: 'EASY CREAM CHEESE CHICKEN',
        createdAt: new Date(),
        description: 'test description'
    },
    {
        title: 'CREAMY LEMON CHICKEN SPAGHETTI',
        createdAt: new Date(),
        description: 'test description'
    }

]
    res.render('articles/index', {articles: articles})
})








app.listen(PORT, () => {
    console.log(`Server is running on the localhost://$(PORT)`);
})