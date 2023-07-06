var express = requires("express");
var app = express();
var PORT = process.env.PORT || 3000;

app.get("/",(req, res) => {
    res.sen("I love breakfast tacos");
});

app.listen(PORT, () => {
    console.log("Example app is listening on port 3000");
})

