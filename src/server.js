// src/server.js
const app = require('./app');
const conn = require('./db/connection');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    console.log(`App running on port ${PORT}`);

    const [result] = await conn.execute('SELECT 1');
    if (result) {
        console.log('Mysql Up');
    }
});