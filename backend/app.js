const express = require("express");
const cors = require("cors");


const app = express();

app.use(cors());

app.use(express.json())

app.use(express.urlencoded({extended:true}))

const routes = require("./routes/index")

app.use("/api",routes);

app.get("/", (req,res) => {
    res.send("Hello World");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});