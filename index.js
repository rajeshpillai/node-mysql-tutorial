let mysql = require('mysql');
let config = require('./config');

// Create connection
let conn = mysql.createConnection(config);

// Call the connect method
conn.connect((err) => {
  if (err) {
    console.error("ERROR: ", err.message);
    return;
  }

  let createTodos = `
    CREATE TABLE IF NOT EXISTS todos(
      id int PRIMARY KEY AUTO_INCREMENT,
      title varchar(255) NOT NULL,
      completed tinyint(1) not null default 0
    )`;

  conn.query(createTodos, function (err, results, fields) {
    console.log("FIELDS: ", fields);
    console.log("RESULTS: ", results);

    if (err) {
      console.log("ERROR:", err.message);
    }
    conn.end();
  });
});

