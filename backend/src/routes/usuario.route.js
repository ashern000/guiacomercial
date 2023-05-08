import { Router } from "express";
import usuario from "../controllers/usuario.controller.js";
import {
  idValidado,
  usuarioValidado,
} from "../middlewars/global.middlewars.js";

const router = Router();

/**
 * Rota post para listar os usuários
 */
router.post("/", usuario.listarUsuarios);

/**
 * Rota get para listar o usuário por id
 */

router.get("/:id", idValidado, usuarioValidado, usuario.listarUsuarioPorId);

/**
 * Rota post para criar o usuário
 */

router.post("/signup", usuario.criarUsuario);

/**
 * Rota patch para alterar o usuário
 */

router.patch("/:id", usuario.alterarUsuario);

export default router;
