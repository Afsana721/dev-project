//import modules and create server on the local host port
const express = require('express');
const multer = require('multer');
const app = express();
const PORT = 3001;

//connecting to DB
// const mongoose = require('mongoose');
// const connectDB = async() => {
//   try {
//     await mongoose.connect("mongodb://127.0.0.1:27017/userTestDB");
//     console.log("db is connected")

//   }catch(error){
//     console.log("db is not connected");
//     console.log(error);
//     process.exit(1);
//   }
// }

const DB_URL="mongodb+srv://afsana:afsana23@cluster0.noaoczn.mongodb.net/userDemodb";

//file upload by multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const name = Date.now() + "_" + file.originalname;
      cb(null, name);
    },
  });
  
  const upload = multer({ storage: storage })


app.get("/register", (req, res) => {
    res.status(200).sendFile(__dirname+ '/index.html');
})

app.post("/register",  upload.single("image"), (req, res) => {
    res.status(201).send("file is uploaded")
})



app.get("/test", (req, res) => {
    res.status(200).send("testing api");
})


app.listen(PORT,  () => {
    console.log(`Server is running on the PORT ${PORT}`);
   
})