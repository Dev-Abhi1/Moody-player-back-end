const express = require("express")
const cors = require("cors")
const app = express()
const songRoute = require("./routes/songs.route")
app.use(cors())
app.use(express.json())
app.use("/",songRoute)
module.exports = app