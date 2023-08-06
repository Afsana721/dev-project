//import app.js here
const app = require("./app");


//check how process object and port works
// console.log(PORT);
// console.log(process);
const PORT = process.env.PORT || 3001


//listen server using listen method and give parameter where/local host port- it will listen - create a call back function

app.listen(PORT, () => {
    console.log(`Server is running on the PORT ${PORT}`)
})

// To make simple to index.js create app.js and switch some code to app.js then import app.js from 
// index js. Now index.js only listen for server route port
