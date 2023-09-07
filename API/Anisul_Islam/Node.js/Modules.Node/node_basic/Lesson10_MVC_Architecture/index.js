//import module & create port variable
const express = require('express');
//import router from users.route.js file
const userRouter = require('./routes/users.route');
const productRouter = require('./routes/products.route');

const app = express();
const PORT = process.env.PORT || 3000;

//middleware to find data after post
app.use(express.urlencoded({ extended: true }));

//to access router
app.use(userRouter);
app.use(productRouter);

//implement get function to make a root route for GET call
app.get('/', (req, res) => {
    res.send("Hello, how are you all!!")
})


app.use((req, res, next) => {
    res.status(404).json({
        message: "resource not found",
    });
})

//implement listen function to app
app.listen(PORT, () => {
    console.log(`Server is running on the http://localhost $(PORT)`);
})