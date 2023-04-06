import { Router } from "express"
const route = Router()
import empresa from "../controllers/empresa.controller.js";

route.post("/", empresa.criarEmpresa)
route.get("/", empresa.buscarTodas)
route.get("/:categoria", empresa.buscarPorCategoria)


export default route