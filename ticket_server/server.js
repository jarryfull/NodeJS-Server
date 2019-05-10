/////////////////////////////////////////////////////////////////////////////////
//
// Title : Server Tickets
// Author: Jaime Alejandro Ochoa Valdivia
// Date  : 11/04/2019
//
// Description:
// This code is used to manage the routes in the API tickets tool
//
/////////////////////////////////////////////////////////////////////////////////

'use strict'
const morgan = require('morgan');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const port = 3000;

const productsRoutes = require('./routes/products');

/////////////////
//   Settings  //
/////////////////
app.set('json spaces', 4);
/////////////////
// Middlewares //
/////////////////
app.use( morgan( 'dev' ) );
app.use( bodyParser.json() );
// To get data across the URL (Form)
app.use( bodyParser.urlencoded({extended: false}))

/////////////////
//    Routes   //
/////////////////
app.use('/products', productsRoutes);

//////////////////
// Static Files //
//////////////////

// Main Route
//app.get( '/' , ( req, res ) => {
//    res.send('Index Page');
//});

// Randon Numbers
app.get( '/random/:numOne/:numTwo' , ( req, res ) => {
    // String to INT
    const min = parseInt( req.params.numOne );
    const max = parseInt( req.params.numTwo );

    // Check if not null
    if ( isNaN(min) || isNaN(max) ) {
        res.status(500);
        res.json({ "errormsg" : "Bad Request"});
        return;
    }
    //Get a random Number without decimals 
    const result = Math.floor( Math.random() * ( max - min ) + min );
   
    res.json({'result' : result});
});

app.listen( port , ( req, res ) => {
    console.log('Server Running On Port: ' + port);
});