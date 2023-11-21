HTTP Request through our application using 'Needle', it is a  NPM package module, that is going to help us with makeing HTTP requests in our Node application. 
    Needle is not the only module to help make requests. But it is a popular choice, and it does its job well. 

First, create application folder, then create app.js and run npm init -y  to initialize npm package where some npm default module are listed. 
Then - npm install needle to get needle module. 

app.js file: we used JSON placeholder API, that provides fake data. It's a good tool to use when learning how to work with APIs. 
The website: https://jsonplaceholder.typicode.com/

    var needle = require('needle');

    needle.get('http://www.google.com', function(error, response) {
        if(!error && response.statusCode ==200)
        console.log(response.body);
    })