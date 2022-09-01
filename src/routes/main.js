const express = require('express');
const { getOriginalURL } = require('../db/main.db');

const router = express.Router();

router.get('/:shortURL', async (req, res) => {
  const { shortURL } = req.params;

  const [[url]] = await getOriginalURL(shortURL);

  if (url) {
    res.status(200).redirect(url.originalURL);
  }

  res.status(400).json({
    message: 'URL not found',
  });
});

module.exports = router;
