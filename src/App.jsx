import { useState } from "react";

import Home from "./home";
import Disponiveis from "./disponiveis";
import Confirmados from "./confirmados"; // 🔥 IMPORTANTE
import Mais from "./mais";

import {
  GeoAltFill,
  PlusSquare,
  CheckSquare,
  List
} from "react-bootstrap-icons";

export default function App() {
  const [tela, setTela] = useState("ativo");

  return (
    <div className="app-container">

      {/* CONTEÚDO */}
      <div className="screen">
        {tela === "ativo" && <Home />}
        {tela === "disponiveis" && <Disponiveis />}
        {tela === "confirmados" && <Confirmados />} {/* 🔥 FALTAVA ISSO */}
        {tela === "mais" && <Mais />}
      </div>

      {/* NAV GLOBAL */}
      <div className="bottom-nav">

        <div
          className={`nav-item ${tela === "ativo" ? "active" : ""}`}
          onClick={() => setTela("ativo")}
        >
          <GeoAltFill size={22} />
          <span>Ativo</span>
        </div>

        <div
          className={`nav-item ${tela === "disponiveis" ? "active" : ""}`}
          onClick={() => setTela("disponiveis")}
        >
          <PlusSquare size={22} />
          <span>Disponíveis</span>
        </div>

        <div
          className={`nav-item ${tela === "confirmados" ? "active" : ""}`}
          onClick={() => setTela("confirmados")}
        >
          <CheckSquare size={22} />
          <span>Confirmados</span>
        </div>

        <div
          className={`nav-item ${tela === "mais" ? "active" : ""}`}
          onClick={() => setTela("mais")}
        >
          <List size={22} />
          <span>Mais</span>
        </div>

      </div>
    </div>
  );
}