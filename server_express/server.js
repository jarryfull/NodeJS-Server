'use strict'
const db = require('./connection')
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = 8081;
const app = express();

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions));

app.listen(PORT,() => {
    console.log('El servidor esta corriendo en el puerto: ' + PORT);
});

app.route('/').get((req, res) => {
    var __dirname = '/home/jaimeale/Documents/walkthrough/Angular/app-angular/src';
    res.sendFile(__dirname + '/index.html');
});

app.route('/login').get((req, res) => {
    db.query('SELECT * FROM angular.user', function (error, results, fields) {
        if (error) throw error;
        res.setHeader('Content-Type', 'application/json');
        res.send(201, JSON.stringify({ users : results }));
    });
});

app.route('/loginReq').post((req, res) => {
    var query = 'SELECT * FROM angular.user WHERE email="' + req.body.email + '" AND password = "' + req.body.password + '";';
    db.query(query , function (error, results, fields) {
        if (error) throw error;
        console.log(results);
        res.send(200, results.length);
    });
});

app.route('/hello').get((req, res) => {
    res.send("Hola Papu");
});

app.route('/api/cats').get((req, res) => {
    res.send({
        cats: [{ name: 'lilly' }, { name: 'lucy' }]
    });
});

app.route('/api/cats/:name').get((req, res) => {
    const requestedCatName = req.params['name'];
    res.send({ name: requestedCatName });
});

app.route('/api/cats').post((req, res) => {
    res.send(201, req.body);
});  

app.route('/api/cats/:name').put((req, res) => {
    res.send(200, req.body);
});

app.route('/api/cats/:name').delete((req, res) => {
    res.sendStatus(204);
});
