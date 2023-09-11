const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user:'root',
    password:'t3rm1nat0r',
    database:'crud_api',
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:2,
});

module.exports=pool.promise()