// Import required modules
const express = require('express'); // import the Express framework for building the server
const path = require('path'); // import the 'path' module for file path manipulation
const multer = require('multer'); // import the 'multer' module for handling file uploads

const app = express(); // Create an instance of the express application/ module to get functions
const port = 3000; // Specify the port number for the server to listen on our local environment 


/*Configure middleware and settings to handle - Middleware functions are functions that can be executed before 
    the final request handler (route handler) is reached*/

app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory
app.set('views', path.join(__dirname, 'views')); // Set the directory for views/templates
app.set('view engine', 'ejs'); // Set the view engine to EJS

// Configure storage for uploaded files using 'multer'
/*multer.diskStorage() function is used to configure how uploaded files will be stored on the server's disk.*/
/* Inside the multer.diskStorage() function, we can pass an object with two properties: destination and filename.*/
/* destination is a function that determines where the uploaded files will be stored. 
    It takes three arguments: req (the request object), file (the uploaded file object), 
    and cb (a callback function). Inside this function, we can call the cb callback with two arguments: */
/* null (indicating no error) and the destination path where the file should be stored. In this case,
     'public/uploads/' specifies that the files should be stored in the public/uploads directory.*/
/* filename is a function that determines the name of the uploaded file on the server. Similarly, 
    it takes three arguments: req, file, and cb. Inside this function, we call the cb callback with two arguments: 
    null and the desired filename. In this case, file.originalname retains the original name of the uploaded file.*/

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/'); // Specify the destination directory for uploaded files
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Use the original file name as the uploaded file's name
    }
});
const upload = multer({ storage: storage }); // Create an 'upload' middleware using the configured storage

// Define routes and request handlers for blogger users
app.get('/blog', (req, res) => {
    res.render('blog'); // Render the 'blog.ejs' template when the '/blog' route is accessed
});

app.post('/submit-recipe', upload.single('image'), (req, res) => {
    const title = req.body.title; // Extract the title from the request body
    const content = req.body.content; // Extract the content from the request body
    const image = req.file.filename; // Extract the uploaded file's filename

    // Perform actions like saving the recipe data to a database or other logic
    // ...

    res.send('Recipe submitted successfully!'); // Send a response indicating success
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`); // Output a message when the server starts
});
