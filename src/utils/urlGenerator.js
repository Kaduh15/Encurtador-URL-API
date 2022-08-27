const createURL = (sizeURL = 16) => {
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';

  let URL = '';

  for (let index = 0; index < sizeURL; index += 1) {
    const isLetter = Math.round(Math.random());

    if (isLetter) {
      URL += letters[Math.round(Math.random() * (letters.length - 1))];
    } else {
      URL += numbers[Math.round(Math.random() * (numbers.length - 1))];
    }
  }

  return URL;
};

module.exports = createURL;