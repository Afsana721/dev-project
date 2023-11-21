const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const postRoutes = require("./routes/posts");
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://afsana:afsana23@cluster0.noaoczn.mongodb.net/message_board?retryWrites=true&w=majority');
console.log("database is connected");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended: true}));
app.use("/posts", postRoutes);
app.use(methodOverride("_method"));



app.get("/", (req, res) => {
    res.redirect("/posts");
})




app.listen(PORT, () => {
    console.log(`App is listening on the PORT ${PORT}`);
})