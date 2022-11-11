const express = require('express');
const validateURL = require('../middlewares/validateURL');
const { insertURL } = require('../db/add_url.db');
require('dotenv').config();
const PORT = process.env.PORT || 3000
const PROTOCOL = process.env.PROTOCOL || 'http'
const BASE_URL = process.env.BASE_URL || `localhost:${PORT}`;

const router = express.Router();

router.post('/', validateURL, async (req, res) => {
  const { body } = req;

  const [[result]] = await insertURL(body);

  res.status(201).json({
    url: `${PROTOCOL}://${BASE_URL}/${result.shortURL}`,
    ...result
  });
});

module.exports = router;
