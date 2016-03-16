'use strict';

var mysql = require("mysql")
var connection = mysql.createConnection ({
  host: "localhost",
  user: "root",
  password: "Mexico18.",
  database: "cards"
})


module.exports = connection;
