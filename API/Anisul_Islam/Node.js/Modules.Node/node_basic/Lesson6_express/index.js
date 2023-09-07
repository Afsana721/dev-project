//import app.js and create PORT variable, implement listen function to listen Localhost port.
const app = require('./app')
const PORT = process.env.PORT || 3000;


app.listen(PORT, ()=>{
    console.log(`Server is running on the PORT ${PORT}`);
});


exports