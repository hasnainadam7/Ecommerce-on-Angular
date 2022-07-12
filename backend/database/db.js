const mysql = require("mysql");

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'cs123+',
  database : 'ecommerce_systemdb',
  port     : '3307',
});

connection.connect((err) => {
  if (err) console.log(err);
  else console.log("MySQL is connected...");
});

module.exports = connection;
