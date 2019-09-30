const express = require('express');
const router  = express.Router();

//const products = require("../db.json");
const { products } = require("../db.json");

router.route('/')
    .get( (req, res ) => {
        res.json({ 
            code: 200,
            msg: "Welcome to the API for tickets"
        });
    })
    //.post( ( req, res ) => {
    //    console.log("Reciviendo datos");
    //    res.json("Datos Recividos");
    //});

module.exports = router;