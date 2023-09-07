//import modules
const express = require('express');
const app = express();
const PORT = process.env.PORT ||3000;

//static meddileware - it is important for image or style
app.use(express.static("public"));
app.get("/", (req, res) => {
    res.sendFile(__dirname +"/index.html");
});


app.listen(PORT, ()=> {
    console.log(`Server is running on the http://localhost ${PORT}`);
});