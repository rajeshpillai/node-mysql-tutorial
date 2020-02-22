/*
Creat this stored procedure in the DB.

use tododb;

DROP PROCEDURE IF EXISTS filterTodo;

DELIMITER $$
CREATE PROCEDURE `filterTodo`(IN done BOOLEAN)  
BEGIN
    SELECT * FROM todos WHERE completed = done;
END$$
 
DELIMITER ;

call filterTodo(false);

*/

let mysql = require('mysql');
let config = require('./config.js');

let connection = mysql.createConnection(config);

let sql = `CALL filterTodo(?)`;

connection.query(sql, true, (error, results, fields) => {
  if (error) {
    return console.error(error.message);
  }
  console.log(results[0].length);
  results[0].forEach(element => {
    console.log(element.title);
  });
});

connection.end();
