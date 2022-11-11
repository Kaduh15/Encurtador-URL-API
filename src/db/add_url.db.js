const createURL = require('../utils/urlGenerator');
const conn = require('./connection');


const insertURL = async ({ url }) => {
  const shortURL = createURL(5)
  await conn.execute(
    'INSERT INTO URL (shortURL, originalURL) VALUES (?, ?)', [shortURL, url],
  )
  return await conn.execute(
    'SELECT * FROM URL where shortURL = ?', [shortURL],
  )
;}

module.exports = {
  insertURL,
};