// js file that allows to manage the sql inputs needed to create the users table in HireBud database

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "hirebud",
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    // CRIAÇÂO DA TABELA
    var sql = "CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT, name VARCHAR(255), area VARCHAR(255), email VARCHAR(255), password VARCHAR(255), PRIMARY KEY (id));";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Users table created with success.");
    });
});