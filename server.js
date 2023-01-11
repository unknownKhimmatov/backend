const express = require("express")
const app = express()
const cors = require("cors")
const connect = require("./config/db")
const env = require("dotenv")
const router = require("./router/router")


// connect
connect()

env.config()

const PORT = process.env.PORT;

app.use(cors())
app.use(express.json())


//app router
app.use("/api", router)



app.listen(PORT, () => {
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$ server running on port 1111 $$$$$$$$$$$$$$$$$$$$$$$$$");
})