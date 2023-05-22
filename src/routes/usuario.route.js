import { Router } from "express";
import usuario from "../controllers/usuario.controller.js";
import {
  idValidado,
  usuarioValidado,
} from "../middlewares/global.middlewares.js";
import { verificarToken } from "../middlewares/global.middlewares.js";

const router = Router();

/**
 * Rota post para listar os usuários
 */
router.post("/", verificarToken, usuario.listarUsuarios);

/**
 * Rota get para listar o usuário por id
 */

router.get("/:id", verificarToken, usuario.listarUsuarioPorId);

/**
 * Rota post para criar o usuário
 */

router.post("/signup", usuario.criarUsuario);

/**
 * Rota patch para alterar o usuário
 */

router.patch("/:id", verificarToken, usuario.alterarUsuario);

export default router;
