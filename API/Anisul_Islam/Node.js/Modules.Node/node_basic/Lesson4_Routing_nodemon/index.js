//initialize node built in module http and create PORT variable
const fs= require('fs');
const http = require('http');
const PORT = process.env.PORT ||3000;

//create server
const server = http.createServer((req, res) => {
    //create handle read files to use
    const handleReadFile = (statusCode, fileLocation ) => {
        fs.readFile(fileLocation, (err, data) => {
            res.writeHead(statusCode, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
        });
    }
   if(req.url == '/'){
    handleReadFile(200, "./views/index.html");

   }  else if(req.url === "/about"){
    handleReadFile(200, "./views/about.html")

    } else if(req.url === "/contact"){
    handleReadFile(200, "./views/contact.html")

    }  else{
    handleReadFile(404, "./views/error.html")
    }
   
});


//implement listen function to server
server.listen(PORT, () => {
    console.log(`Server is running on the PORT$(PORT)`);
});

