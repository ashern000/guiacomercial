import express from "express";
import usuarioControlador from "../controllers/usuario.controller.js";
import {
  idValidado,
  usuarioValidado,
} from "../middlewars/global.middlewars.js";
const router = express.Router();

router.post("/", usuarioControlador.listarUsuarios);
router.get(
  "/:id",
  idValidado,
  usuarioValidado,
  usuarioControlador.listarUsuarioPorId
);
router.post("/singup", usuarioControlador.criarUsuario);
router.patch("/:id", usuarioControlador.alterarUsuario);
export default router;
