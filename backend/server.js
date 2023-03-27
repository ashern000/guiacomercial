import express from "express";
import cors from "cors";
import {ConnectToDB} from "./src/database/conn.js";
import rotaUsuario from "./src/routes/usuario.route.js";
import rotaEmpresa from "./src/routes/empresa.route.js";
const app = express();

// Configure Express for read JSON
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: false}))

app.use("/login",rotaUsuario)
app.use("/empresas",rotaEmpresa)


// Connection to Database
ConnectToDB()


//Server running
app.listen(4041,() => console.log("Rodando na porta 4041"))
