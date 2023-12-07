    
    const fs = require('fs');
    //console.log(fs);
//reading file
    /*
    fs.readFile("./docs/blog1.txt", (err, data) => {
        if(err){
            console.log(err);
        }
            console.log(data.toString());
       
    });
    */
//writing file
    /*
    fs.writeFile('./docs/blog1.txt', "Hello All you!!!", () => {
            console.log("file was written");
    })

    fs.writeFile('./docs/blog2.txt', "Reading and writing", () => {
        console.log("file is created and write some text in it.")
    })
    */

//directories : if we create a folder 'assets' by fs module
   /*
    if(!fs.existsSync('./assets')){
    fs.mkdir ('./assets', (err) => {
        if(err){
            console.log(err)
        }
        console.log("folder is created");
    });
} else{
    fs.rmdir('./assets', (err) => {
        if(err){
            console.log(err)
        }
        console.log('folder deleted')
    })
}
*/

//deleting files

/*    
if(fs.existsSync("./docs/delete.txt")){
    fs.unlink("./docs/delete.txt", (err) => {
        if(err){
            console.log(err)
        }
        console.log("file is deleted.")
    })
    }*/


  

