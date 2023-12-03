const mysql = require('mysql');

const connection = mysql.createPool({
    user: ${{ secrets.DB_USER }},
    password: ${{ secrets.DB_PASSWORD }},
    database: ${{ secrets.DB_NAME }},
    socketPath: ${{ secrets.INSTANCE_SOCKET }}
})

module.exports = connection
