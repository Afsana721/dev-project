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
}