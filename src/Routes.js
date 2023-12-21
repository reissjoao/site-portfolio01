import React from "react";
import HomePage from "./components/HomePage/HomePage";
import Habilidades from "./components/Habilidades/Habilidades";
import Projetos from "./components/Projetos/Projetos";
import Contatos from "./components/Contatos/Contatos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/Habilidades" element={<Habilidades />}></Route>
                <Route path="/Projetos" element={<Projetos />}></Route>
                <Route path="/Contatos" element={<Contatos />}></Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;