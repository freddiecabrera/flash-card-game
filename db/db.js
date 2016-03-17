'use strict';

var mysql = require("mysql")
var connection = mysql.createConnection ({
  host: "localhost",
  user: "root",
  password: "",
  database: "cards"
})


module.exports = connection;
