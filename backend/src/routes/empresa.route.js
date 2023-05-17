import { Router } from "express";
const route = Router();
import empresa from "../controllers/empresa.controller.js";
import {verificarToken} from "../middlewares/global.middlewares.js";

/**
 * Rota post para criar empresa
 */

route.post("/", empresa.criarEmpresa);

/**
 * Rota get para buscar todas as empresas
 */

route.get("/", empresa.buscarTodas);

/**
 * Rota get para buscar empresas por categoria
 */

route.get("/:categoria", empresa.buscarPorCategoria);

export default route;
