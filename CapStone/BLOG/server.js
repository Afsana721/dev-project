//create server to import npm modules
const express = require('express');
const mongoose = require('mongoose');
const articlesRouter = require('./routes/articles');

const app = express();

const PORT = process.env.PORT || 3000;

//database connection
//const MONGODB_URI = "MONGODB_URI=mongodb+srv://afsana:afsana23@cluster0.noaoczn.mongodb.net/blog?retryWrites=true&w=majority";
//mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
//mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const MONGODB_URI = "mongodb+srv://afsana:afsana23@cluster0.noaoczn.mongodb.net/blog?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

//view engine will convert ejs code to html
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended:false}))

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

app.use('/articles', articlesRouter);



app.listen(PORT, () => {
    console.log(`Server is running on the localhost://$(PORT)`);
})