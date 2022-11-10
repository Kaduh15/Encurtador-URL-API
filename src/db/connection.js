const mysql = require('mysql2/promise');

console.log({
  host: process.env.DATABASE_HOST || 'database',
  port: process.env.DATABASE_PORT || 3306,
  user: process.env.DATABASE_USER || 'root',
  password: process.env.DATABASE_PASSWORD || 'senha',
  database: process.env.DATABASE_NAME || 'URLs_database',
})

const connection = mysql.createPool({
  host: process.env.DATABASE_HOST || 'database',
  port: process.env.DATABASE_PORT || 3306,
  user: process.env.DATABASE_USER || 'root',
  password: process.env.DATABASE_PASSWORD || 'senha',
  database: process.env.DATABASE_NAME || 'URLs_database',
});

module.exports = connection;