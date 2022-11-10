const createURL = require('../utils/urlGenerator');
const conn = require('./connection');


const insertURL = ({ url }) => {
  const shortURL = createURL(5)
  conn.execute(
    'INSERT INTO URL (shortURL, originalURL) VALUES (?, ?)', [shortURL, url],
  )
  return conn.execute(
    'SELECT * FROM URL where shortURL = ?', [shortURL],
  )
;}

module.exports = {
  insertURL,
};