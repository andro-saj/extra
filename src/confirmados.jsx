import "./confirmados.css";

import {
  Clock,
  GeoAlt,
  CalendarCheck
} from "react-bootstrap-icons";

export default function Confirmados() {
  return (
    <div className="confirmados-container">

      {/* HEADER */}
      <div className="confirmados-header">
        <h2>Percursos confirmados</h2>
        <CalendarCheck size={28} />
      </div>

      {/* BLOCO DIA */}
      <h3 className="dia">Hoje</h3>

      <div className="card">
        <h1 className="valor">R$ 85</h1>

        <div className="info">
          <Clock size={16} />
          <span>Duración 6 hs - Inicio 12:30 hs.</span>
        </div>

        <div className="info">
          <GeoAlt size={16} />
          <span>Santo Antônio de Jesus</span>
        </div>

        <div className="prioridade">
          Prata
        </div>
      </div>

      {/* OUTRO DIA */}
      <h3 className="dia">Quinta-feira 30 de abril</h3>

      <div className="card">
        <h1 className="valor">R$ 85</h1>

        <div className="info">
          <Clock size={16} />
          <span>Duración 6 hs - Inicio 12:30 hs.</span>
        </div>

        <div className="info">
          <GeoAlt size={16} />
          <span>Santo Antônio de Jesus</span>
        </div>

        <div className="prioridade">
          Prata
        </div>
      </div>

    </div>
  );
}