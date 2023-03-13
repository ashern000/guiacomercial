import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Categorias from "./Categorias";
import Favoritos from "./Favoritos";
import SubCategorias from "./SubCategorias";


export default function MyRoutes(){
return(
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/categorias" element={<Categorias/>}/>
        <Route path="/favoritos" element={<Favoritos/>}/>
        <Route path="/subcategorias" element={<SubCategorias/>}/>

    </Routes>
)
}