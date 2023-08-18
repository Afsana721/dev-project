Step: create folder name RESTAPI, then initialize project: npm init -y. It creates Package.json files

Step: Installl required npm modules- express - express as a frameword in the project

Step: Install pg - it is postgress database connector modules

Step: Create new folder name src, inside src create student folder

Step: Outside of src folder create new file name it server.js. In server.js file create our express server.

Step: In server.js - initialize express, creare app as instance of express, create PORT variable to handle 
locathost PORT

Step: implements listen funtiion with app instance to listen localhost port - PORT ||3001 - like. use PORT variable with callback function. 

Step: create route to create CRUD function to listen on the route - GET, POST, PUT, DELETE. 

Step: create root route, use app instance with get function -> app.get("/", callback function with request & resposnt parameter (req,res) => { and work with request body on the port - res.send("text")}).

Note 1: Response Object Initialization: When the request matches a defined route, the framework automatically creates a response (res) object and provides it to your route handler callback function as an argument.

Note 2: The send method provided by Express has a flexible parameter structure that allows you to send different types of responses based on the content you want to deliver to the client. The send method can accept a variety of data types as its parameter:

Note 3: commonly used methods available for the res (response) object in Express:
    res.send('Hello, Express!');
    res.send({ message: 'Welcome' });
    res.send(Buffer.from('binary data'));
    res.json({ key: 'value' });
    res.sendFile('/path/to/file.html');
    res.render('template', { data: 'value' });
    res.sendStatus(404); // Sends "Not Found"
    res.redirect('/new-location');
    res.set('Content-Type', 'application/json');
    res.status(404).send('Not Found');
    res.type('html');
    res.download('/path/to/file.pdf', 'my-document.pdf');




