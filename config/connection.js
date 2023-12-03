const mysql = require('mysql');

const connection = mysql.createPool({
    connectionLimit: 10,
    user: process.env.USER,
    database: process.env.DATABASE,
    host: '127.0.0.1'
})

module.exports = connection