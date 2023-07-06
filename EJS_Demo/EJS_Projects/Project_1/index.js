
// store express project
var express = require("express");
var app =express();

//render ejs file - main.ejs & passing object pastry with value donuts.
// if we set - app.set('view enging', 'ejs') then not need to specify extention main.ejs/ only file name -main. 

app.set('view engine', 'ejs');

//added public css file folder 
app.use(express.static('Public'));   

//
app.use(express.urlencoded({extended:true}));

// add order list: creates a order Array variable / object

var order = ["eggs", "oatmilk", "kale"];



app.get('/', function(req, res) {
    res.render("main", {pastry: "donuts"})
});


app.get('/', function(req, res) {
    res.render("main.ejs", {pastry: "donuts"});
});


app.get("/about/:stuff" , function(req, res) {

//contains route parameter for dynamic data.
    var stuff = req.params.stuff;
    res.render("about.ejs", {stuff: stuff});
});


// creats a data Array and retrieve data from the Array using looping. 
// creates a new route

app.get("/jobs", function(req, res) {
    var data = [ 
        {name:"Angela", occupation:"software Engineer", company:"Facebook"}, 
        {name:"Paul", occupation:"web developer", company:"Twitter"}, 
        {name:"Angela", occupation:"instructor", company:"School"}, 
        {name:"Louise", occupation:"sales representative", company:"Dell"}  
        ];

    res.render("jobs.ejs", {data: data});
    
});

// makes a new POST route & add Array list. 
app.get("/order", function(req, res) {
    res.render("order.ejs", {order: order});
})

// makes a new POST route
 app.post("/finish", function(req, res) {
   //console.log("This is working fine");
   console.log(req.body);
   order.push(req.body.food);
   res.redirect("/order");
 });




//listen() method creates a listener on the specified port or path.
app.listen(3000, function() {
    console.log("App is running now on port 3000.");
})