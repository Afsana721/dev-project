//Create a server to require HTTP node built in module and import it
const http = require('http');
const fs = require('fs');
const _ = require('lodash');

//create server using http module's createServer() method
const server = http.createServer((req, res) => {
//console.log(req.url, req.method);

//lodash
const num = _.random(0, 20);
console.log(num);

const greet = _.once(() => {
    console.log('hello');
});

greet();




//set header content type
res.setHeader('Content-type', 'text/html');

let path = './views/';

switch(req.url) {
    case '/': 
    path += 'index.html';
    res.statusCode = 200;
    break;

    case '/about': 
    path += 'about.html';
    res.statusCode = 200;
    break;

    //redirect about page if any request comes for about-me page
    case '/about-blog': 
    res.statusCode = 301;
    res.setHeader('Location', '/about');
    res.end();
    break;

    default:
    path += '404.html';
    res.statusCode = 404;
    break;
}

//send a html file
const readFile = fs.readFile(path, (err, data) => {
    if(err){
        console.log(err)
        res.end();
    } else{
        //res.write(data);
         res.end(data);
    }
});

// res.write('<p>Hello, Asef</p>');
// res.write('<p>hello again, ninjas</p>');
// res.end();

});
//console.log(server)



server.listen(3000, 'localhost', () => {
    console.log("Server is listing for request on port 3000")
})