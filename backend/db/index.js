const {Pool} = require("pg");

const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"Library_db_practice",
    password:"Ranga@73215321",
    port:"5432"
})

module.exports = pool;