require("dotenv").config()
const express = require("express");
const app =express();

const PORT= process.env.PORT || 3001;
console.log(process.env.TMDB_API_KEY);

app.get("/", (req, res) => {
    res.redirect("/home");
});

app.get("/home", (req, rest) => {
    res.render("home.ejs");
});

const baseUrl="https://api.themoviedb.org/3";
const api_key =proce.env.TMDB_API_KEY;

app.get("nowplaying", (req, rst) => {
    //make a http request
    //console.log("I have been triggered")
   let route = "movie/mow_playing?language=en=US&page=1&api_key=${api_key}"
   let endpoint =`${baseUrl}/${route}` 

   fetch(endpoint)
   .then(respone => {
    return express.response.json()
   })
   .then(data => {
    console.log(data);
    res.render("result.ejs", {data:data.results})
   })
   .catch(err => {
    console.log("Error from now plying fetch", err);
   })
   //res.end();
})

app.listen(PORT, () => console.log("movie backend "));
