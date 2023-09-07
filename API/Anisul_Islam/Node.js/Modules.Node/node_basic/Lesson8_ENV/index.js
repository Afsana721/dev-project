//import modules & initialize express
//import env variable
require('dotenv').config();
const express = require('express');
const app = express();
const PORT= process.env.PORT || 3000;

//create root route
app.get("/", (req, res) => {
    res.send("hello");
})








app.listen(PORT, () => {
    console.log(`Server is running on the http://localhost: ${PORT}`);
})