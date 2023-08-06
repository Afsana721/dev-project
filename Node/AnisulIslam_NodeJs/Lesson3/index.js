//create a variable to get httpModule using require() node function
// use http const which has createServer(), and server can request & response and use our local host port 
// to display our data.

const http = require("http");

// create PORT variable using porcess object with its method and local host is : 127.0.0.1
    const PORT = process.env.PORT || 3001;

const myServer =http.createServer((req, res) => {
    //res.end("Hello, I am your first server")
    res.end("<h1>Hello</h1>")
});

//create listen function to listen and send some message on the console

    myServer.listen(PORT, () => {
        console.log(`myServer is running now on the PORT ${PORT}`);
    })