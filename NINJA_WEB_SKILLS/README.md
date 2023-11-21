What is Node.js:

Front-end (browser): JavaScript run on the browser side to interact 
Back-end (server): Node.js allows JavaScript to run on the server side.

Node.js: Can share code between front and backend 
Node.js has massive community behind it 
Huge amount of third-party packages & tools to help

In using Node.js: 
    -How to install Node & use it to run JavaScriptt
    -How to read & write files on our computer
    -How to create a server using Node.js to crate a website
    -How to create an Express app / website
    -How to use MongoDB (a NoSQL database)
    -How to use template engines to easily create HTML views
    

Node.js files systems on our computer
    - read files
    - create / writing files
    - directories
    - deleting files 

//files system in Node.js : FS module which is built in node.js
const fs = require('fs');
//console.log(fs);

//reading files
    /*fs.readFile('./docs/blog1.txt', (err, data) => {
        if(err){
            console.log(err)
        }
        console.log(data.toString());
    });*/

//console.log("last line");

//writing text inside the existing file, only over write
/*fs.writeFile('./docs/blog1.txt', 'hello, world', () => {
    console.log("file was written");
});*/

//created a new file and write text
/*fs.writeFile('./docs/blog2.txt', 'hello, again from new file', () => {
    console.log("file was created & written");
});*/


//directories : here - if foldert is not exist then create it 
// if folder is exist then by the else block - delete the folder that is exist.

    /*if(!fs.existsSync('./assets')){

        fs.mkdir('./assets', (err) => {
            if(err){
                console.log(err)
            }
            console.log('folder created')
        });
    } else {
        fs.rmdir('./assets', (err)=> {
            if(err){
                console.log(err)
            }
            console.log('folder deleted');
        })
    }*/
   
    

//deletng files: when file is exist then comes to delete it.

if(fs.existsSync('./docs/deleteme.txt')) {
    //delete the file
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err) {
            console.log(err)
        }
        console.log('file deleted')
    })
};


Sometime file can be huge / a large file with huge data, so Streams is a good way to handle the data. 
-Start using data, before it has finished loading. 
-That means we can work with the data before it's fully been read. So pass the small chunk of data from the buffer we can start using it - 
Means: little bit of data send to the browser at a time the start to executon on the browser side, without waiting whole data loading time. 

There are different streams: Read Streams and Write Streams
Read data via read Streams and Write data via write Streams


//read file by fs node module

//utf-8 will encoding and make a readable formate, so no need to use toString() function
const fs = require('fs');
//read Stream 
const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf-8'} );
//write Stream
const writeStream = fs.createWriteStream('./docs/blog4.txt')

/*readStream.on('data', (chunk) => {
console.log('---new chunk')
console.log(chunk);
writeStream.write('\nnew chunk\n');
writeStream.write(chunk);
}); */


//piping
readStream.pipe(writeStream);

//duplex Streams - we can read & write through it but that is a bit beyond the scope of this lesson

Another core built in module for node.js is : HTTP module that is used to create a server which is what is used to manage the backend of website.

Here, we want to create a website whereby the server-side code is powered by node and Javascript. So our server will be the thing listening for incoming requests from a browser, but how does this whole process of communication between a browser and a server work well on a simple level, we type a website address into browser search bar (www - world wide web bar) then hit enter - that sends a request to the specific server that powering that particular website. Then the Server looks at the 
request and it(server) decides what to send back to the browser. And most cases that will be an HTML page and then that is then displayed in the browser on the client side. But it could also be images, CSS or JSON, anything comming from the server as a response. 
So, when we type in a web address or a domin name into the browser, how does the browser then know to send a request to the correct Server who is the powered for this website. Because, there is millions of servers are running for millions of websitie on the internet. But somehow the brwoser magically know to connect to the correct one--??

So, to answer that we need to know little bit about IP addresses and domains --
    - IP address is alike addresses for computer which are connected to the internet and all computers connected to the internet have a unique IP address to identify. Here, some special computer knows as hosts, meaning they host websites on the internet and if we create and pulish a website it will be hosted on a computer somewhere and that computer will have an IP address to identify it. 
    So, if we want to connect a server on that host computer we need to know its IP address to do it by typing IP address into a browser search bar. 
    And IP address is a series of numbers, but number hard to remember, instead we use domain names to mask these IP addres.

Create a Server
    - So then, in Node we acctually write code to create a serve and listen for request coming in from the browsr. Now this is totally different from a language like PHP for example where we don't have to createa the server namually, and we have other tools which manage that for is like Apache but
    in Node we manually create server which lives on the backend of our website,
    and it's this servee that then listen for requests from the browser and then decides what responses to send to the browser.


Redirects:
    case '/about': 
    path += 'about.html';
    res.statusCode = 200;
    break;

    //redirect about page if any request comes for about-me page
    case '/about-me': 
    res.statusCode = 301;
    res.setHeader('Location', '/about');
    res.end();
    break;

    NPM: Node Packages manager:
        - npm stands for Node Package Manager. It's a library and registry for JavaScript software packages. npm also has command-line tools to help you install the different packages and manage their dependencies. npm is free and relied on by over 11 million developers worldwide.