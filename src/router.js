import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";


export default function MyRoutes(){
return(
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>
)
}