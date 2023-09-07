//import modules
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//middle ware: it is a function, it has three import things: request object, response 
//object and next function.
const myMiddleWare = (req, res, next) => {
    req.currentTime = new Date(Date.now());
    console.log('Middle ware function')
    next();
}

app.use(myMiddleWare);
app.get("/", myMiddleWare, (req, res) => {
    console.log("I am home. " +req.currentTime)
    res.send("Hello from root route");
})

app.get("/about",  (req, res) => {
    console.log("I am about. "+ req.currentTime);
    res.send("I am abut route")
})
//bad request / wrong url
app.use((req, res, next) => {
    res.send("404 not found !! bad url request")
})
//error handling
app.use((err, req, res, next) => {
    res.status(500).send("something broke!");
})
app.listen(PORT, () => {
    console.log(`Server is running on the http://localhost: ${PORT}`);
})