const mysql = require('mysql');
const { promisify }= require('util');

const { database } = require('./keys');

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('La connexion à la base de données a été fermée.');
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has to many connections');
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('La base de données a de nombreuses connexions');
    }
  }

  if (connection) connection.release();
  console.log('Base de données est connecté');

  return;
});

//vous permet d'utiliser des promesses
pool.query = promisify(pool.query);

module.exports = pool;
