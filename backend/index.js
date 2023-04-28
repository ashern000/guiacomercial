import express from "express";
import cors from "cors";
import colors from "colors";
import { ConnectToDB } from "./src/database/conn.js";
import rotaUsuario from "./src/routes/usuario.route.js";
import rotaEmpresa from "./src/routes/empresa.route.js";
import rotaAutenticacao from "./src/routes/auth.route.js";
import dotenv from "dotenv";
import figlet from "figlet";

dotenv.config();
const PORT = process.env.PORT_SERVER || 4000;
const app = express();

// Configure Express for read JSON
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/usuario", rotaUsuario);
app.use("/login", rotaAutenticacao)
app.use("/empresas", rotaEmpresa);

// Connection to Database

await ConnectToDB();

//Server running

 app.listen(PORT, () => figlet(`Rodando na porta ${PORT}`, function(err,PORT){console.log(PORT.bgBlack.green)}));

