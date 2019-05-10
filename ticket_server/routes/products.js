const express = require('express');
const router  = express.Router();

//const products = require("../db.json");
const { products } = require("../db.json");

router.route('/')
    .get( (req, res ) => {
        res.json({ products: products });
    })
    .post( ( req, res ) => {

    });

module.exports = router;