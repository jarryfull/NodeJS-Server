'use strict'

var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'IP_HOST',
  user     : 'USER',
  password : 'PASSWORD',
  port     : '3306',
  database : 'DATABASE',
});
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = connection;

return 0;

