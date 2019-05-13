const express = require('express');
const router  = express.Router();

// Calling the functions from the require() file
const {
    getProducts, 
    addProduct,
    updateProduct, 
    deleteProduct
} = require("../controllers/products");

// Route for /products/
router.route('/')
    .get( getProducts )
    .post( addProduct );

// Route for /products/:id
router.route('/:id')
    .put( updateProduct )
    .delete( deleteProduct );

module.exports = router;