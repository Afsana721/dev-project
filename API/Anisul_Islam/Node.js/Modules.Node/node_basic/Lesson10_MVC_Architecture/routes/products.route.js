//import modules
const express = require('express');

//import users get request
const { getProducts, saveProducts } = require('../controllers/products.controller');
const router = express.Router();

//import users get request

//create route and use getUsers from users.controller.js file
router.get('/products', getProducts);

router.post('/products', saveProducts)

module.exports = router;