var express = require('express');
var app = express();


var PORT = process.env.PORT || 3000;


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//create an order Arry.
var order = ["eggs", "oatmik", "kale"];


app.get("/", (req, res) => {
    res.render("main.ejs", {pastry: "donuts"})
});

app.get("/about/:food", (req, res) => {
   var food = req.params.food;
   res.render("about.ejs", { food: food});
})

app.get("/jobs", (req, res) => {
    //create a Array object data
var data = [
    {name: "Angela", occupation: "software engineer", company: "Facebook"},
    {name: "Paul", occupation: "web developer", company: "Twitter"},
    {name: "Matt", occupation: "Instructor", company: "School"},
    {name: "Kiyuse", occupation: "sales", company: "Dell"}
];
    res.render("jobs.ejs", {data: data})
});


app.get("/order", (req, res) => {
    res.render("order.ejs", {order: order});
});


 app.post("/finish", (req, res) => {
    console.log(req.body);
    order.push(req.body.food);
    res.redirect("/order");
 });





app.listen(PORT, () => {
    console.log(`app is running on the PORT ${PORT}`);
})
