//create app.js and where create and initialize external module express and imported app.
//export app.js from app.js using require method 

const app = require('./app');


//Create PORT varailble to use Local host 3000 post
const PORT = process.env.PORT || 3000;

//Create server listen function to listen 

app.listen(PORT, () => {
    console.log(`Server is running on the PORT of ${PORT}`);
});
