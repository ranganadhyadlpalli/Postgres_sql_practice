const pool = require("../db/index")

async function getAllBooks() {
    try {
        const result = await pool.query(
            'SELECT * FROM books'
        )
        return result
    } catch (error) {
        throw error;
    }
}


module.exports= {
    getAllBooks,
    
}