// check index.js file is working on console usng node 
//console.log("Hello all!")

//import fs module and create a file
const fs = require("fs");
//console.log(fs);


// fs.writeFile('demo1.txt', "Student of bootcam ACC June 2023", (err) => {
            //if(err) {
            //console.log(err);
            //} else {
            // console.log("successfull");
            // }
            // });

// if we use again writeFile then using same file, it will overwrite the file text
// so we can use appendFile to append previous text

// fs.appendFile('demo1.txt', "Hello, we are working with ACC bootcamp", (err) => {
//     if(err) {
//         console.log(err);
//     }else {
//         console.log("successful");
//     }
// })

// fs.readFile("demo1.txt", 'utf-8', (err, data) => {
//    if(err) {
//     console.log(err);
//    }else{
//     console.log(data);
//    }

// });

//file rename using fs moduce function / methos

// fs.rename("demo1.txt", 'demo2.txt', (err) => {
//     if(err) {
//      console.log(err);
//     }else{
//      console.log("successful");
//     }
 
//  });

 //delete file using fs module unlink()

 fs.unlink('demo2.txt', (err) => {
    if(err) {
     console.log(err);
    }else{
     console.log("successful");
    }
 
    });


// file is exists - using fs module with its method  exists(), exists is deprecated now. 
    
    fs.exists('demo2.txt', (result) => {
    if(result) {
     console.log("found");
    }else{
     console.log("not found");
    }
 
    });
