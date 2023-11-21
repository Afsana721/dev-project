EJS: Embedded JavaScript (EJS). But there are other Templating language -
handlebars, pug, etc. 

    Templating Engine -: 
Like:   <h1>Name: Karim</h1>
        <p>Profession: Student</p>
above the information we add inside HTML as a static data, not possible to change from user side and not coming form database. So, if the scenario is , data : name and profession passing from webside and it will going to database and after save it will display on the browser, then we can tell that it is a dynamic data. 

Like:   <h1>name: __ </h1>
        <p>Profession: __</p>

- EJS allows us to run plain JS in HTML
- EJS simple, ligh weight, fast
- Most downloaded templating langauage on NPM (Node Package Manager) and founded 2011

Use EJS: npm install ejs 
set EJS engine: app.set('view engine', 'ejs');

views -> index.ejs 

app.render('index', {});        //passing data from {here}

Process to built a EJS template App. 
    - Create a folder and create a file named 'index.js' inside the folder.
    - Initialize NPM(node package manager) to manage: npm init -y
    - install express  - to use express server module with its methods
    - install ejs      - for the ejs templating.
    - install nodemon  - to handle server running if any changes come and add this code inside package.json:  
                "scripts": {
                "test": "echo \"Error: no test specified\" && exit 1",
                "start": "nodemon index.js"
                },
Note: Then, use : npm start  - on the console to run the server. 
        - Create a views folderr - to handle all views files that display / active on the browser side to visual for the User.
        - Create index.ejs  file inside views folder as a ejs template.

Basic setup of Server : 
    //import npm modules
            const express = require('express');
            const app = express();
            const PORT = (3000);

    app.get('/', (req, res) => {
    res.send("Hello World!")
    })

    app.listen(PORT, () => {
    console.log(`Server is running on the PORT$(PORT)`);
    })
    

Initialize NPM helps: 
    Dependency Management,
    
    Version Control for Dependencies- package.json,

    Script Definitions: You can define various scripts in the package.json file that automate common tasks. For example, starting the application, running tests, or building the project, Easy Dependency Installation: With a package.json file, anyone can clone the project and run a single command (npm install or npm ci) to install all the necessary dependencies, 

    Ease of Sharing and Collaboration: By specifying dependencies and scripts in the package.json, sharing and collaborating on projects becomes much easier. Other developers can quickly get up to speed with the project's setup and start contributing.

In summary, initializing npm and creating a package.json file is a fundamental step that helps manage dependencies, define project details, and automate common development tasks, making your project more organized, maintainable, and easily shareable with others.

Layout :
