import express from "express";
import cors from "cors";
import colors from "colors";
import { ConnectToDB } from "./src/database/conn.js";
import rotaUsuario from "./src/routes/usuario.route.js";
import rotaEmpresa from "./src/routes/empresa.route.js";
import rotaAutenticacao from "./src/routes/auth.route.js";
import dotenv from "dotenv";
import figlet from "figlet";
import cookieParser from "cookie-parser";

dotenv.config();
const PORT = process.env.PORT_SERVER || 4000;
const app = express();

/**
 * Configurações para o express trabalhar com JSON e rederizar cookie
 */

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

/**
 * Rotas da API
 */

app.use("/usuario", rotaUsuario);
app.use("/login", rotaAutenticacao);
app.use("/empresas", rotaEmpresa);

/**
 * Conexão com o banco de dados
 */

await ConnectToDB();

/**
 * Inicialização do servidor
 */

app.listen(PORT, () =>
  figlet(`Rodando na porta ${PORT}`, function (err, PORT) {
    console.log(PORT.bgBlack.green);
  })
);
