//making our connection to MongoDB
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);


const connectDB = async () => {
    const uri = process.env.MONGODB_URI;
    console.log('MongoDB URI:', uri); // Log the URI
    
    try {
        const conn = await mongoose.connect(uri);
        console.log(`Database Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}

// const connectDB = async() => {
//     try{
//         const conn = await mongoose.connect(process.env.MONGODB_URI);
//         console.log(`Database Connected: ${conn.connection.host}`)

//     } catch(error){
//         console.log(error);
//     }
// }


module.exports = connectDB;