//import modules
const express = require('express');

//import users get request
const { getUsers, saveUser } = require('../controllers/users.controller');
const router = express.Router();

//import users get request

//create route and use getUsers from users.controller.js file
router.get('/users', getUsers);

router.post('/users', saveUser)

module.exports = router;