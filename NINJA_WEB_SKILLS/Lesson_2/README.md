Create a server using HTTP node module

//Create a server to require HTTP node built in module and import it
const http = require('http');

//create server using http module's createServer() method
const server = http.createServer((req, res) => {
console.log("request made");
});
//console.log(server)



server.listen(3000, 'localhost', () => {
    console.log("Server is listing for request on port 3000")
})


//here, what is local host: that is a domain name on the web, like: google.com 
but is one that takes us to a very specific IP address called a loopback IP address- this IP address is : 127.0.0.1  -- it back to our own computer. That means the browser is back to our own computer to connect and our own computer acting as a host for our webste. 

-Port Number: a port number represents a specific channel gateway or port on our computer that a certain bit of softwar our server should communicate through - like a door. 


Status codes: 
    * 100 Range - informational responses 
    * 200 Range - success codes
    * 300 Range - codes for redirects
    * 400 Range - user or client error codes
    * 500 Range - Server error codes
