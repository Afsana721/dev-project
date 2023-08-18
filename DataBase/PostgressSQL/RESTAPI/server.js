//create variable to initialize modules express & create instance of express, creare PORT variable
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.send("Hello world!")
})


//implements listen funtiion with app instance to listen localhost port
app.listen(PORT, () => {
    console.log(`Server is running on the PORT ${PORT}`);
})