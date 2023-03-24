const router = require("express").Router()
const usuarioControlador = require("../controllers/usuario.controller")

router.post("/", usuarioControlador.criarUsuario)

module.exports = router