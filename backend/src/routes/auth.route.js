import {Router} from "express";
const router = Router()
import {autenticar} from "../controllers/authController.js";

router.post('/', autenticar)


export default router