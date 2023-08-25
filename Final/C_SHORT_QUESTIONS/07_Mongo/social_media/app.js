//import required modules: express to handling middleware, routes, requests, responses. 
// import logger: handle debugging and monitoring incoming request
//import mongoose: handle schemas, models and data relationship.
//dotenv: handle environment varaiable
//debug: handle loging debuging in application

const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
const debug = require('debug')('server');

//create an instance of express module
const app = express();

//create PORT variable
const PORT = process.env.PORT || 3000;

//middleware logging
app.use(logger('dev'));
//middleware json body parsing
app.use(express.json());

// Debugging: Log the MongoDB URI being used
const mongoURI = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB}`;
debug('Connecting to the database with URI:', mongoURI);

// Connect to the MongoDB database
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    debug('Connected to the database');
  })
  .catch((error) => {
    debug('Database connection error:', error);
  });

// Define MongoDB schemas
const userSchema = new mongoose.Schema({
  username: String,
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }]
});

const messageSchema = new mongoose.Schema({
  title: String,
  content: String,
  timestamp: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

// Create models from schemas
const User = mongoose.model('User', userSchema);
const Message = mongoose.model('Message', messageSchema);

// Add a route handler for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Social Media Platform API');
});

// Insert a new user
app.post('/users', async (req, res) => {
  const { username } = req.body;
  try {
    const user = new User({ username });
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
});

// Insert a new message
app.post('/messages', async (req, res) => {
  const { title, content, userId } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const message = new Message({ title, content, user: user._id });
    await message.save();
    user.messages.push(message);
    await user.save();
    res.status(201).json({ message: 'Message created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create message' });
  }
});

// Retrieve all messages posted by a user
// app.get('/messages/:username', async (req, res) => {
//   const { username } = req.params;
//   try {
//     const user = await User.findOne({ username }).populate('messages').exec();
//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }
//     const messages = user.messages.sort((a, b) => b.timestamp - a.timestamp);
//     res.status(200).json(messages);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to retrieve messages' });
//   }
// });


// Retrieve user data by username, use async to handles asynchronous opearatoins. 
app.get('/users/:username', async (req, res) => {
  const { username } = req.params;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve user data' });
  }
});


// Retrieve a list of all users
// app.get('/users', async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to retrieve users' });
//   }
// });



// Start the server to listen localhost
app.listen(PORT, () => {
  debug(`Server is running on port ${PORT}`);
});
