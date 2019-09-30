const mysql = require('mysql');
const { promisify } = require('util');
const { database } = require('./dbConfig');

const db = mysql.createPool( database );

db.getConnection( (error, connection ) => {
    if ( error ){
        if ( error.code == 'PROTOCOL_CONNECTION_LOST' ){
            console.log('DATABASE CONNECTION WAS CLOSED');
        }
        else if ( error.code == 'ER_CON_COUNT_ERROR' ){
            console.log('DATABASE HAS TO MANY CONNECTIONS');
        }
        else if ( error.code == '' ){
            console.log('DATABASE CONNECTION WAS REFUSED');
        }
        else{
            console.log('DATABASE CONNECTION ERROR');
            console.log(error.code);
        }
    }

    if ( connection ){
        connection.release();
        console.log('DATABASE CONNECTION SUCCESSFUL');
    }
    return;
});

// promisify db queries
db.query = promisify(db.query);

module.exports = db;