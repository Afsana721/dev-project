const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost:27017/testdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB successfully'))
.catch((error) => {
    console.error(error);
});

app.listen(PORT, () => {
    console.log(`Server is running on the PORT ${PORT}`);
});
