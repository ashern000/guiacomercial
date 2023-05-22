import { Router } from "express";
const router = Router();
import { autenticar } from "../controllers/auth.controller.js";

/**
 * Rota post para autenticar
 */

router.post("/", autenticar);

export default router;
