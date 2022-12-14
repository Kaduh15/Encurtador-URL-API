const express = require('express');
const validateURL = require('../middlewares/validateURL');
const { insertURL } = require('../db/add_url.db');

const router = express.Router();

router.post('/', validateURL, async (req, res) => {
  const { body } = req;

  const [result] = await insertURL(body);

  res.status(201).json(result);
});

module.exports = router;
