const express = require("express")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: false}))

const userRoute = require("./src/routes/user.route")


app.use("/sla",userRoute)

app.listen(4041, ()=>console.log("Rodando na porta 4041"))