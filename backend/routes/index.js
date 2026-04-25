const express = require("express");
const router = express.Router();

const userRepo = require("../repositories/userRepo");

const booksRepo = require("../repositories/booksRepo");
const barrowRecords = require("../repositories/barrowRecords")


router.get("/all-users",async (req,res,next)=>{
    try {
        const users = await userRepo.getAllUsers()
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json(error);
    }
})

router.get("/all-books",async(req,res,next)=>{
    try {
        const books = await booksRepo.getAllBooks();
        return res.status(200).json(books);
    } catch (error) {
        return res.status(500).json(error);
    }
})

router.get('/books/:userId',async(req,res,next)=>{
    try {
        const {userId} = req.params;
        const userBooks = await barrowRecords.getUserBorrowRecords(userId);
        return res.status(200).json(userBooks);
    } catch (error) {
        return res.status(500).json(error)
    }
})

module.exports = router;