//Streams for read & write large file: read stream & write stream.
const fs = require('fs');

//Read Stream & Write Steam

  const readStream = fs.createReadStream("./docs/blog3.txt", { encoding: 'utf-8'});
  const writeStream = fs.createWriteStream("./docs/blog4.txt");
/*
  readStream.on("data", (chunkData) => {
    console.log("...... new chunk ...");
    console.log(chunkData);
    writeStream.write("\n new Chunk\n");
    writeStream.write(chunkData);
});
*/

//piping read & write

    readStream.pipe(writeStream);

  