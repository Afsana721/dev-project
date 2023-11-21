EJS : 
    - <%=  %> use to output values in a template
    - <%  %> use for control flow, conditionals, include statement, etc. But NOT output.

From EJS web site: 
    <% 'Scriptlet' tag, for control-flow, no output
    <%_ ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
    <%= Outputs the value into the template (HTML escaped)
    <%- Outputs the unescaped value into the template
    <%# Comment tag, no execution, no output
    <%% Outputs a literal '<%'
    %> Plain ending tag
    -%> Trim-mode ('newline slurp') tag, trims following newline
    _%> ‘Whitespace Slurping’ ending tag, removes all whitespace after it

We have the option to set the view engine with ejs, so that we not need to add ejs extention when we add html file to rendering: 
                    app.set("view engine", "ejs");
after using app.set - view enging, now we can write: 
    app.get("/", (req, res) => {
        res.render("main");
    });

EJS - Conditional Statements with JavaScript. 
    - We can incorporate if/else statements into our templates. 
    - Thei means EJS allows us to insert content depending on articular
        condition.
    - <%=  %> this set of EJS tags are used for " injecting some data" or   assign some data.
    - <%   %> this set of EJS tags are used for JavaScript logic to fetch / passing data - " Control flow, Conditionals, Include Statements, etc, but NOT output.         

Example: 
    app.js to make route and add param on the route URL as food as variable 
    - app.get("/about/:food", (req, res) => {
   var food = req.params.food;
   res.render("about.ejs", { food: food});
})

about.ejs - only if condition
    <% if( food === "cookie") { %>
    <h2><strong><%= food %></strong></h2>
    <% } %>

about.ejs: if & else condition
    <% if( food === "cookie") { %>
    <h2><strong><%= food %></strong></h2>
    <% } else { %>
     <p> I only eat <strong>salads!</strong></p>
    <% } %>

JavaScript Looping with EJS 
    - If we are working a real application, we would probably wiant it connected to a 
    database. we have different type data that we need to pass into the html page 
    which can be object or array of object. 
    So, we can use forEach loop for these object with EJS: 

app.js : Create a rount to render our Array Object: 
    app.get("/jobs", (req, res) => {
    //create a Array object data
    var data = [
        {name: "Angela", occupation: "software engineer", company: "Facebook"},
        {name: "Paul", occupation: "web developer", company: "Twitter"},
        {name: "Matt", occupation: "Instructor", company: "School"},
        {name: "Kiyuse", occupation: "sales", company: "Dell"}
    ];
        res.render("jobs.ejs", {data: data})
    })

jobs.ejs file: 
    ForEach loop: 
        <h1>Employees Data :</h1>

        <ul>
        <% data.forEach((person) => { %>
            <li><%= person.name %> is a <%= person.occupation %> at <%= person.company %></li>
        <% }); %>
        </ul>

for CSS / images, etc as static file, we need to create a public folder. where we add css/ image file.
And inside the app.js as server, we need to add code to connects our express application to the public folder. That means, Express knows public folder is exsist and to look inside of public folder if any file in there. 

    -  app.use(express.static('public'));
Inside public folder, we can create css file and link with the ejs file where it will work for the styling. 

Partials : We can take code that will be reused and turn them into templates. 
    Templates containing reusable code are called Partials.
So, we are going to create a folder inside the views folder which called partials - and inside the partials - we are going to create - header.ejs and footer.ejs.

POST Route: 

The data coming form the form will be contained in an object called 'req.body'.
To properly pull the dat out of 'req.body' we need to initialize app to use URL encoded method, like on the below. 
    -app.use(express.urlencoded({extended: true}));

