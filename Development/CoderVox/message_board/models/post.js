const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    topic: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model("Post", postSchema);