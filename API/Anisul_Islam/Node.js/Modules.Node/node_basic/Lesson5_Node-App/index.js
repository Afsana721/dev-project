//import require built in modules to create server & work for file system
const http = require("http");
const fs = require("fs");           //to work with file system.
//const PORT = process.env.PORT || 3000;
const PORT = process.env.PORT;

//create a function to handle read html file to use it multiple times
const handlereadfile = (fileName, statusCode, req, res) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
        if(err){
            console.log(err);
        }else{
            res.writeHead(200, {"Content-Type": "text/html"})
            res.write(data);
            res.end();
        }
    });
}

//create server 
const server =http.createServer((req, res) => {
//
    if(req.url === "/"){                        //route '/' to load index.html
      handlereadfile("index.html", 200, req, res);

    } else if (req.url === "/about"){
        handlereadfile("about.html", 200, req, res);

    } else if(req.url === "/contact") {
        handlereadfile("contact.html", 200, req, res);
    } else{
        handlereadfile("error.html", 404, req, res);
    }

});


server.listen(PORT, () => {
    console.log(`Server is running on the PORT ${PORT}`);
});