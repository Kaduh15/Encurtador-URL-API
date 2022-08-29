const validateURL = (req, res, next) => {
  try {
    const { url } = req.body;
    const isUrlValid = new URL(url);
    console.log(isUrlValid);
    next();
  } catch (err) {
      res.status(400).json({ message: 'url foi passada de forma invalida!' });
  }
};

module.exports = validateURL;