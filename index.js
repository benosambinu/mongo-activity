const express = require("express");
require("dotenv").config();
require("./db/connectDB");
const app = express();

const port = process.env.PORT;

app.use(express.json())

const studentRoute = require("./routes/studentRoute")
app.use("/student", studentRoute)

app.listen(port, () => {
    console.log("Server is running on ", port)
})