const os = require('os');

const conn = require('./connection');

const getOriginalURL = (shortURL) => conn.execute(
  `SELECT originalURL FROM URL
  WHERE shortURL = ?`, [shortURL],
);

const addVisited = (shortURL) => conn.execute(
  `INSERT INTO access (shortURL, type_sys, ip)
  VALUES (?, ?, ?)`, [shortURL, os.type(), os.networkInterfaces().eth0[0].address],
);

module.exports = {
  getOriginalURL,
  addVisited,
};