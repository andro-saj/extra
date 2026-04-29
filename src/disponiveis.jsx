import "./disponiveis.css";

export default function Disponiveis() {
  return (
    <div className="disp-container">

      {/* HEADER */}
      <div className="disp-header">
        <h2>Percursos disponíveis</h2>
        
      </div>

      {/* CONTEÚDO */}
      <div className="disp-content">
        <h3>Não há percursos disponíveis</h3>

        <p>
          Preste atenção nas notificações
          para não perder os próximos percursos.
        </p>
      </div>

    </div>
  );
}