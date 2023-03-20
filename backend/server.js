const express = require("express")
const cors = require("cors")
const app = express()
const ConnectToDB = require("./src/database/conn")
const userRoute = require("./src/routes/user.route")
const businessRoute = require("./src/routes/business.route")

app.use(express.json())

app.use(cors())

app.use(express.urlencoded({extended: false}))

app.use("/login",userRoute)

app.use("/business",businessRoute)

ConnectToDB()

app.listen(4041,() => console.log("Rodando na porta 4041"))