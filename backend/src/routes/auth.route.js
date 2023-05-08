import { Router } from "express";
const router = Router();
import { autenticar } from "../controllers/authController.js";

/**
 * Rota post para autenticar
 */

router.post("/", autenticar);

export default router;
