const express = require("express")
const cors = require("cors")
const app = express()
const ConnectToDB = require("./src/database/conn")
const rotaUsuario = require("./src/routes/usuario.route")
const rotaEmpresa = require("./src/routes/empresa.route")

app.use(express.json())

app.use(cors())

app.use(express.urlencoded({extended: false}))

app.use("/login",rotaUsuario)

app.use("/empresas",rotaEmpresa)

ConnectToDB()

app.listen(4041,() => console.log("Rodando na porta 4041"))