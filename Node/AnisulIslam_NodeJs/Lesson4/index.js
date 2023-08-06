
//Create a http server using node.js http module. Create PORT variable. Use http object to create server request
const http = require("http");
const PORT = process.env.PORT ||3001

//send request and set status code & add file writehead for content type 
const myServer =http.createServer((req, res) => {
    res.writeHead(202, {'Content-Type':'text/html'});
    //res.write("Hello, How are you all!");
    res.write("<h1>Hello, How are you all!</h>");
    res.write("<h2>Second write text.</h2>")
    res.end();
});

//create listen action using http object and listen()

myServer.listen(PORT, () => {
    console.log(`Mysever is running on the PORT ${PORT}`);
});