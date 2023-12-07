const http = require("http");
const fs = require("fs");
const _ = require("lodash");


//store an instance of server
const server =http.createServer((req, res) =>{
//lodash
    const num = _.random(0,20);
    console.log(num);

    const greet = _.once(() => {
        console.log("hello!!!");
    });
    greet();
    greet();

    //console.log("request made");
    //console.log(req.url, req.method);
//set header content type
    res.setHeader("Content-Type", "text/html");

//create path for different routes
    let path = "./views/";
//use switch case when user use different url for different route
    switch(req.url) {
        case '/': path += 'index.html';
        res.statusCode = 200;
        break;

        case '/about': path += 'about.html';
        res.statusCode = 200;
        break;

        case '/about-me':
        res.setHeader('Location', '/about');
        res.statusCode = 301;
        res.end();
        break;

        default: path += '404.html';
        res.statusCode = 404;
        break;
    }
//send a html file using fs module file management
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            res.end();
        } else{
            //res.write(data); // if we send one thing into response, no need to use this line. 
            //res.end();
            
            res.end(data);      // we can implement data with response then inside end() as parameter.
        }
    });
}); 

//listen method to listen 
server.listen(3000, () => {
    console.log("server is running on the port 3000");
});