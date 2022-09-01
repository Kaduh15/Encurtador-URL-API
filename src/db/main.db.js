const conn = require('./connection');

const getOriginalURL = (shortURL) => {
  console.log(shortURL);
  return conn.execute(
    `SELECT originalURL FROM URL
    WHERE shortURL = ?`, [shortURL],
); 
};

const updateVisited = () => {};

module.exports = {
  getOriginalURL,
  updateVisited,
};