//import modules
const express = require('express');
const app = express();
const PORT = process.env.PORT ||3000;

app.get('/products/:id([0-9]{3})', (req, res) => {
    res.send(`<h2>ID = ${req.params.id}</h2>`);
})

// app.get('/products/:title([a-zA-Z]+)', (req, res) => {
//     res.send(`<h2> title = ${req.params.title}`)
// })

//handle letters & digit
app.get('/products/:title([a-zA-Z0-9]+)', (req, res) => {
    res.send(`<h2> title = ${req.params.title}</h2>`)
})

app.use("*", (req, res) => {
    res.status(404).send({
        message: "not a valid route"
    })
})
app.listen(PORT, ()=> {
    console.log(`Server is running on the PORT${PORT}`);
})