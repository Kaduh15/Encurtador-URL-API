const fs = require('fs').promises;
const { join } = require('path');
const os = require('os');
const { format } = require('date-fns');
const createURL = require('./urlGenerator');

const path = '../files/DB.json';
const readFile = async () => {
  try {
    const completePath = join(__dirname, path);
    const contentFile = await fs.readFile(completePath, 'utf-8');
    return JSON.parse(contentFile);
  } catch (e) {
    console.error('Erro ao abrir o arquivo', e.message);
    return null;
  }
};

const writeFile = async (content) => {
  try {
    const completePath = join(__dirname, path);
    await fs.writeFile(completePath, JSON.stringify(content, null, 2));
  } catch (e) {
    console.error('Erro ao salvar o arquivo', e.message);
    return null;
  }
};

const insertURL = async ({ url }) => {
  const data = await readFile();
  const newShortURL = {
    id: data.nextID,
    shortURL: createURL(5),
    originalURL: url,
    visites: [],
  };

  data.urls.push(newShortURL);
  data.nextID += 1;

  await writeFile(data);

  return newShortURL;
};

const getOriginalURL = async (shortURL) => {
  const { urls } = await readFile();

  const originalURL = urls.find((url) => url.shortURL === shortURL);
  if (originalURL) {
    return originalURL.originalURL;
  }
  return null;
};

const updateVisited = async (shortURL) => {
  const data = await readFile();

  const url = data.urls.find((currUrl) => currUrl.shortURL === shortURL);
  
  const visit = { 
    type_sys: os.type(),
    ip: os.networkInterfaces().eth0[0].address,
    date: format(new Date(), 'dd-MM-yyyy HH:mm:ss'),
  };

  url.visites.push(visit);

  await writeFile(data);

  return url;
};

module.exports = {
  readFile,
  writeFile,
  insertURL,
  getOriginalURL,
  updateVisited,
};
