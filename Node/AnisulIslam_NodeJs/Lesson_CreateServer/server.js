//create a server using http module
const http = require("http");
const PORT = process.env.PORT ||3000;


/*http.createServer((req, res) => {

    res.end("Hello, first server");
}).listen(3000);*/

//create server methods and Html code
const myServer = http.createServer((req, res) => {
    res.end("<h1>Hello</h1>")
});

//server to listen
myServer.listen(PORT, () => {
    console.log(`running server on the PORT ${PORT}`);
})