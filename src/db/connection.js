const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: process.env.MYSQLHOST || 'database',
  port: process.env.MYSQLPORT || 3306,
  user: process.env.MYSQLUSER || 'root',
  password: process.env.MYSQLPASSWORD || 'senha',
  database: process.env.MYSQLDATABASE || 'URLs_database',
});

module.exports = connection;