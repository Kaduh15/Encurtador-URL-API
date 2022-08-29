const express = require("express");
const { getOriginalURL } = require("../utils/DB");

const router = express.Router();

router.get("/:shortURL", async (req, res) => {
  const { shortURL } = req.params;

  const urlOriginal = await getOriginalURL(shortURL);

  res.status(200).redirect(urlOriginal);
});

module.exports = router;
