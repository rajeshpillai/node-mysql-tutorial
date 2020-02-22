let mysql = require('mysql');
let config = require('./config.js');
let connection = mysql.createConnection(config);

let stmt = `INSERT INTO todos(title,completed)  VALUES ?  `;
let todos = [
  [`Learning tech at ${new Date}`, false],
  [`Learning tech at ${new Date}`, true],
];

// execute the insert statment
connection.query(stmt, [todos], (err, results, fields) => {
  if (err) {
    return console.error("ERROR: ", err.message);
  }
  // Get inserted rows
  console.log("Row inserted: ", results.affectedRows);
});

// lose the connection
connection.end();