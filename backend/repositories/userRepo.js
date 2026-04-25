const pool = require("../db/index");

async function getAllUsers(){
    try {
        const users = await pool.query(
            'SELECT * FROM users'
        )
        return users;
    } catch (error) {
        throw error;
    }
}

module.exports = {getAllUsers}