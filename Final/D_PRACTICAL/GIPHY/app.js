//Import required modules

const express = require('express');
const app = express();
const path = require('path'); //for working with file path
//const fetch = require('node-fetch'); // Use the 'node-fetch' library for making HTTP requests
const fetch = require('isomorphic-fetch'); // Use isomorphic-fetch instead of node-fetch

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Set up the view engine
app.set('view engine', 'ejs');

// Define Routes 
app.get('/', async (req, res) => {
    try {
        // Fetch trending gifs from Giphy API
        const apiKey = '73H9V6lKlhDik4GLmoJG2CeTj9eTRuUS';
        const trendingUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=25`;

        const trendingResponse = await fetch(trendingUrl);
        const trendingData = await trendingResponse.json();

        //render the index.ejs view with fetch data
        res.render('index.ejs', { gifs: trendingData.data });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred.');
    }
});

//define a route for handling search request
app.post('/search', async (req, res) => {
    try {
        const { query } = req.body;
        const apiKey = '73H9V6lKlhDik4GLmoJG2CeTj9eTRuUS';
        const searchUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=25`;

        const searchResponse = await fetch(searchUrl);
        const searchData = await searchResponse.json();

    //send JSON response with search results to the client
        res.json({ gifs: searchData.data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred.' });
    }
});


// Start the server to listen on the localhost:
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
