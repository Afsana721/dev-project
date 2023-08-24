// Import the required modules
const express = require('express');
const app = express();
const port = 3000;

//Create Array of message objects
let messages = [
    { name: "Jim", message: "Hi, how are you?" },
    { name: "Jane", message: "How about pasta for dinner?" },
    { name: "Gary", message: "I like my pasta with butter" }
];

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Define a route for "/messages"
app.get('/messages', (req, res) => {
// Render the "messages.ejs" template and pass the "messages" array as data
      res.render('messages', { messages: messages });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
