
require('dotenv').config();

const { Pool } = require('mysql');
const isProduction = process.env.NODE_ENV === 'production';

const connectionString = `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.PORT}/${process.env.DB_DATABASE}`

const pool = new Pool({
    connectionString: isProduction ?
    process.env.DATABASE_URL : connectionString,
    ssl: isProduction,
})

module.exports = { pool }