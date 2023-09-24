const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
//app.use(express.static(__dirname + '/public'));

const recipes = [];

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/recipe', (req, res) => {
    const recipe = {
        title: req.body.title,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        image: req.body.image
    };
    recipes.push(recipe);

    // Send a response indicating success
    res.status(200).send('Recipe submitted successfully!');
});

app.get('/recipes', (req, res) => {
    res.json(recipes);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
