const createURL = require('../utils/urlGenerator');
const conn = require('./connection');

const insertURL = ({ url }) => conn.execute(
    'INSERT INTO URL (shortURL, originalURL) VALUES (?, ?)', [createURL(4), url],
);

module.exports = {
  insertURL,
};