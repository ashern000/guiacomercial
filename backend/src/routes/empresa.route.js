const route = require("express").Router()
const controladorEmpresa = require("../controllers/empresa.controller")

route.post("/", controladorEmpresa.criarEmpresa)
route.get("/", controladorEmpresa.buscarTodas)
route.get("/:categoria", controladorEmpresa.buscarPorCategoria)

module.exports = route