// create main server file
//create variable to get express module
const express = require("express");
const app = express();
const PORT= process.env.PORT || 3001;

//app.set("view engine", ejs);



app.get("/", function(req, res) {
    //res.render("main.ejs");
    res.render("main.ejs", {tasks})
    
});

/*app.post('/add/:task1/:task2', (req, res) => {
    const task = req.body.task; // Access the 'task' property from req.body
    tasks.push(task);
    res.redirect('/');
  });*/


  app.get('/add/:task1/:task2', (req, res) => {
    let tasks = [];
    tasks.push(req.params.task1)
    tasks.push(req.params.task2)
    res.render('add.ejs', {data:tasks})
  });
// I need to create add.ejs file to recive data
app.listen(PORT, () => {
    console.log("server is runing on PORT");
})