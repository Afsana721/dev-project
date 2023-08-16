
//Create variables to use HTTP modules
const app = require("http");
const PORT = process.env.PORT || 3000;


//create http server

const myServer = app.createServer((req, res) => {
    res.writeHead(202, {"Content-Type": "text/html"});
    //res.write("Hello");
    res.write("<h1>Hello</h1>")
    res.end()
})

myServer.listen(PORT, () => {
    console.log(`server is running on the PORT ${PORT}`)
})

