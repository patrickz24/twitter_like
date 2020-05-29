// Modules
const mysql = require('mysql');

// Connection à la DB
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'twitter_db'
  });
  
  db.connect((err) => {
      if (err) {
        return console.error('error: ' + err.message);
      }
      console.log('Connected to the MySQL server.');
    });
   
  db.end();

// Export du fichier
module.exports = db;