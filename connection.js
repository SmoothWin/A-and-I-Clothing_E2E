require('dotenv').config();

const mysql = require('mysql2')
let con = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_SECRET,
    database: process.env.DB_DB_TEST
})

module.exports = con