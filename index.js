let mysql = require('mysql');

// Create connection
let conn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  port: 3306,
  database: 'tododb'
});

// Call the connect method
conn.connect((err) => {
  if (err) {
    console.error("ERROR: ", err.message);
    return;
  }
  console.log("Connected to the MySQL Server.");
});

// End method ensures that all remaining queries
// are always executed before the db connection is closed

conn.end((err) => {
  if (err) {
    return console.log("ERROR: ", err.message);
  }
  console.log("Connection ended!");
})
