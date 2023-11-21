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
