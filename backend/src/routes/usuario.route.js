import express from "express";
import usuarioControlador from "../controllers/usuario.controller.js"
import {idValidado, usuarioValidado} from "../middlewars/global.middlewars.js";
const router = express.Router()

router.get("/", usuarioControlador.listarUsuarios)
router.get("/:id",idValidado, usuarioValidado ,usuarioControlador.listarUsuarioPorId)
router.post("/", usuarioControlador.criarUsuario)
//router.patch("/:id",idValidado, usuarioValidado, usuarioControlador.atualizar)
export default router;