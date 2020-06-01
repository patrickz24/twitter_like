const utilisateur = require('./controllers/authController')

// Modules
const mysql = require('mysql');

// Connection à la DB
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'twitter_like',
    port     : '8889'
  });
  
  db.connect((err) => {
      if (err) {
        return console.error('error: ' + err.message);
      }
      console.log('Connected to the MySQL server.');
    });
    const sql = "CREATE TABLE IF NOT EXISTS Utilisateurs(id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, nom TEXT, prenom TEXT, email TEXT, date_de_naissance TEXT, sexe TEXT, ville TEXT, password TEXT)"
    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
      });

// Export du fichier
module.exports = db;