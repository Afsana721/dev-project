const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/recipeSphere', { useNewUrlParser: true, useUnifiedTopology: true });

// Create a schema for the recipe
const recipeSchema = new mongoose.Schema({
  author: String,
  title: String,
  description: String,
  ingredients: String,
  cookingProcess: String,
  image: String,
  timestamp: { type: Date, default: Date.now }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/submit-recipe', (req, res) => {
  res.render('submit-recipe');
});

app.post('/submit-recipe', async (req, res) => {
  const { author, title, description, ingredients, cookingProcess, image } = req.body;

  try {
    const newRecipe = new Recipe({
      author,
      title,
      description,
      ingredients,
      cookingProcess,
      image
    });

    await newRecipe.save();
    res.send('Recipe submitted successfully!');
  } catch (error) {
    res.status(500).send('Error submitting the recipe.');
  }
});

app.get('/blog', async (req, res) => {
  try {
    const recipes = await Recipe.find().sort({ timestamp: -1 });
    res.render('blog', { recipes });
  } catch (error) {
    res.status(500).send('Error fetching recipes.');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
