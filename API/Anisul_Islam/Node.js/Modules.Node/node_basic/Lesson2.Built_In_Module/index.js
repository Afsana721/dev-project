const fs = require('fs');
const { json } = require('stream/consumers');
//console.log(fs);
//create a file
// fs.writeFile('demo1.txt', 'My name is Afsana', function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("successful");
//     }
// })


//append file to previous one

// fs.appendFile('demo1.txt', "Working with FS node module", (err) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log("successful")
//     }
// })


//read file
fs.readFile('demo1.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})

