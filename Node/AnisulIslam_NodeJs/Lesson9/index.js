
const express = require('express');
const app = express();

const PORT = process.env.PORT ||3003

//Middleware handle for url and json data
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post("/register", (req, res) => {
    const fullname = req.body.fullname;
    const age = req.body.age;
    res.send(`<h2>Your name is ${fullname} and age ${age}</h2>`)
})
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})