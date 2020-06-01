
require('dotenv').config();

const mysql = require('mysql');


const isProduction = process.env.NODE_ENV === 'production';


const connectionString = 'mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}'


const pool = new mysql.createPool({
    connectionString: isProduction ?
    process.env.DATABASE_URL : connectionString,
    ssl: isProduction,
})

module.exports = { pool }