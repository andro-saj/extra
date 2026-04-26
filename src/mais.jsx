import { useState } from "react";
import Identificacao from "./Identificacao";
import {
  PersonCircle,
  Bell,
  Gear,
  QuestionCircle,
  Award,
  Cash,
  BoxArrowRight,
  Trash,
  CreditCard,
  PlayCircle
} from "react-bootstrap-icons";

export default function Mais() {
  const [tela, setTela] = useState("menu");

  const itens = [
    { label: "Ganhos", icon: Cash },
    { label: "Minha identificação", icon: PersonCircle },
    { label: "Meus dados", icon: PersonCircle },

    { divider: true },

    { label: "Notificações", icon: Bell },
    { label: "Tutoriais", icon: PlayCircle },
    { label: "Preferências", icon: Gear },
    { label: "Meus desafios", icon: Award },
    { label: "Meu nível", icon: Award },

    { divider: true },

    { label: "Ajuda", icon: QuestionCircle },
    { label: "Sair", icon: BoxArrowRight },

    { divider: true },

    { label: "Excluir minha conta", icon: Trash, danger: true },
  ];

  if (tela === "identificacao") {
    return <Identificacao onVoltar={() => setTela("menu")} />;
  }

  return (
    <div className="app">

      {/* HEADER */}
      <div className="header">
        <div className="user">
          <div className="avatar">
            <PersonCircle size={28} color="#777" />
          </div>

          <div>
            <div className="ola">Olá!</div>
            <div className="nome">Leandro Souza Ribeiro</div>
          </div>
        </div>

        <div className="card-mp">
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <CreditCard size={20} />
            Mercado Pago
          </div>
        </div>
      </div>

      {/* MENU */}
      <div className="menu">
        {itens.map((item, index) => {

          if (item.divider) {
            return <div key={index} className="divider" />;
          }

          const Icon = item.icon;

          return (
            <div
              key={index}
              className="menu-item"
              style={{ color: item.danger ? "#000" : "#222" }}
              onClick={() => {
                if (item.label === "Minha identificação") {
                  setTela("identificacao");
                }
              }}
            >
              <Icon className="menu-icon" />
              <span className="menu-text">{item.label}</span>
            </div>
          );
        })}
      </div>

    </div>
  );
}