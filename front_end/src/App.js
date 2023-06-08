import React from "react";
import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./router";
import {usuarioContext} from "./contexts/usuarioContext";
import { useState } from "react";

export default function App() {
  const [token, setToken] = useState("");
  return (
    <>
    <usuarioContext.Provider value={{token, setToken}}>
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
      </usuarioContext.Provider>
    </>
  );
}
