import "./identificacao.css";
import { ArrowLeft, PersonCircle } from "react-bootstrap-icons";

export default function Identificacao({ onVoltar }) {
  return (
    <div className="id-app">

      {/* HEADER FIXO */}
      <div className="id-header">
        <ArrowLeft
          size={20}
          className="id-back"
          onClick={onVoltar}
        />
        <span>Minha identificação</span>
      </div>

      {/* CONTEÚDO ROLÁVEL */}
      <div className="id-container">

        <div className="id-card id-qr-card">
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=usuario123"
            alt="QR Code"
          />
        </div>

        <p className="id-qr-text">
          Mostre este código QR para sair do centro logístico
        </p>

        <div className="id-card id-credencial">

          <div className="id-avatar">
            <PersonCircle size={50} />
          </div>

          <div className="id-company">
            <img src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.19.1/mercadolibre/logo__small.png" />
            <span>ENVIOS EXTRA</span>
          </div>

          <div className="id-name">
            Leandro Souza Ribeiro
          </div>

          <div className="id-info">
            <p><span>CPF:</span> 04700274522</p>
            <p><span>Veículo:</span> RDR1A12</p>
          </div>

          <div className="id-divider"></div>

          <p className="id-desc">
            Transportador autônomo de cargas a serviço de Mercado Livre.
          </p>

        </div>

      </div>
    </div>
  );
}