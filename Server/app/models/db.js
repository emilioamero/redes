const mysql = require("mysql");

/* Es incesasario leeer los datos d ela conexion en otro archivo
const dbConfig = require("../config/db.config.js");

 const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
}); */

/* CREATE TABLE IF NOT EXISTS `customers` (
    id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    NAME VARCHAR(255) NOT NULL,
    active BOOLEAN DEFAULT FALSE
  ) ENGINE=INNODB DEFAULT CHARSET=utf8;
  
 */
const connection = mysql.createConnection({
    host: "192.168.1.25",
    user: "userTP",
    password: "33309073",
    database: "TP",
    port: 3306

  });



// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Base de Datos Conectada");
});

module.exports = connection;
