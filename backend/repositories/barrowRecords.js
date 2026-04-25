const pool = require("../db/index")

async function getUserBorrowRecords(userId){
    try {
        const result = await pool.query(
            'SELECT * FROM borrow_records WHERE user_id=$1',[userId]
        )
        return result;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getUserBorrowRecords
}