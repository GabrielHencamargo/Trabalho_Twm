import React,{useEffect} from "react";
import './App.css';
import Pagina_login from "./Pagina_login.js";
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import home from "./Home.js";
import {Seguro} from "./paginacadastros.js";
import visualizar_dados from "./tecnicos.js";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={Pagina_login()}></Route>
        <Route path="Home" element={home()}></Route>
        <Route path="acionar_seguro" element = {Seguro()}></Route>
        <Route path="tecnicos" element={visualizar_dados()}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
