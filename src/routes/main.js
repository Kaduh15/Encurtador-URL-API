const express = require('express');
const { getOriginalURL, updateVisited } = require('../utils/DB');

const router = express.Router();

router.get('/:shortURL', async (req, res) => {
  const { shortURL } = req.params;

  const urlOriginal = await getOriginalURL(shortURL);

  if (urlOriginal) {
    await updateVisited(shortURL);
    res.status(200).redirect(urlOriginal);
  }

  res.status(400).json({
    message: 'URL not found',
  });
});

module.exports = router;
