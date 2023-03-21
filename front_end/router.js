import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Categorias from "./Categorias";
import Favoritos from "./Favoritos";
import SubCategorias from "./SubCategorias";
import Comercios from "./Comercios";
import Cadastro from "./Cadastro";
import Perfil from "./PerfilCliente";
import CadastroComercio from "./CadastroComercio";
import EditarPerfil from "./EditarPerfil";

export default function MyRoutes(){
return(
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/categorias" element={<Categorias/>}/>
        <Route path="/favoritos" element={<Favoritos/>}/>
        <Route path="/subcategorias" element={<SubCategorias/>}/>
        <Route path="/comercios" element={<Comercios/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/perfil" element={<Perfil/>}/>
        <Route path="/cadastrocomercio" element={<CadastroComercio/>}/>
        <Route path="/editarperfil" element={<EditarPerfil/>}/>
    </Routes>
)
}