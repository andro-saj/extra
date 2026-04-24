/*export default function Mais() {
  const itens = [
    "Ganhos",
    "Minha identificação",
    "Notificações",
    "Tutorial",
    "Preferências",
    "Meus desafios",
    "Meu nível",
    "Ajuda",
    "Sair",
    "Excluir minha conta",
  ];

  return (
    <div style={{ flex: 1, width: "100%" }}>
      
      {/* HEADER AMARELO }*/
  /*    <div
        style={{
          background: "#FFD600",
          padding: "20px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        {/* Avatar }/*
        <div
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          👤
        </div>

        {/* Nome }
        <div>
          <strong>Nome do Usuário</strong>
        </div>
      </div>

      {/* LISTA }
      <div style={{ padding: "16px" }}>
        {itens.map((item, index) => (
          <div
            key={index}
            style={{
              padding: "14px 0",
              borderBottom: "1px solid #eee",
              cursor: "pointer",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}*/

/*
/* 23/04/2026 22:49 
export default function Mais() {
  const itens = [
    "Ganhos",
    "Minha identificação",
    "Notificações",
    "Tutorial",
    "Preferências",
    "Meus desafios",
    "Meu nível",
    "Ajuda",
    "Sair",
    "Excluir minha conta",
  ];

  return (
    <div style={{ flex: 1, width: "100%" }}>
      <div
        style={{
          background: "#FFD600",
          padding: "20px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <div
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          👤
        </div>

        <strong>Nome do Usuário</strong>
      </div>

      <div style={{ padding: "16px" }}>
        {itens.map((item, index) => (
          <div
            key={index}
            style={{
              padding: "14px 0",
              borderBottom: "1px solid #eee",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
*/

/*
import { ArrowLeft } from "react-bootstrap-icons";
import { useState } from "react";

export default function Mais() {
  const [tela, setTela] = useState("menu");

  const itens = [
    "Ganhos",
    "Minha identificação",
    "Notificações",
    "Tutorial",
    "Preferências",
    "Meus desafios",
    "Meu nível",
    "Ajuda",
    "Sair",
    "Excluir minha conta",
  ];

  // 👇 TELA IDENTIFICAÇÃO
  if (tela === "identificacao") {
    return (
      <div style={{ flex: 1, width: "100%" }}>
        
        {/* HEADER }
        <div
  style={{
    background: "#FFD600",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    fontWeight: "bold"
  }}
>
  {/* BOTÃO VOLTAR }
  <ArrowLeft
    size={22}
    style={{ cursor: "pointer" }}
    onClick={() => setTela("menu")}
  />

  <span>Minha identificação</span>
</div>

        {/* QR CODE }
        <div style={{
          background: "#fff",
          margin: "16px",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center"
        }}>
          <div style={{
            height: "150px",
            background: "#eee",
            marginBottom: "10px"
          }}>
            QR CODE
          </div>

          <p>
            Mostre este código QR para sair do centro logístico
          </p>
        </div>

        {/* CREDENCIAL }
        <div style={{
          background: "#fff",
          margin: "16px",
          padding: "20px",
          borderRadius: "10px"
        }}>
          <h4>Credencial</h4>

          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginTop: "10px"
          }}>
            <div style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              background: "#ddd",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              👤
            </div>

            <div>
              <strong>Envios Extra</strong>
              <br />
              Nome do Usuário
            </div>
          </div>
        </div>

        {/* BOTÃO VOLTAR }
        
      </div>
    );
  }

  // 👇 TELA MENU PADRÃO
  return (
    <div style={{ flex: 1, width: "100%" }}>
      
      {/* HEADER }
      <div style={{
        background: "#FFD600",
        padding: "20px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}>
        <div style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          👤
        </div>

        <strong>Leandro Souza Rbeiro</strong>
      </div>

      {/* LISTA }
      <div style={{ padding: "16px" }}>
        {itens.map((item, index) => (
          <div
            key={index}
            style={{
              padding: "14px 0",
              borderBottom: "1px solid #eee",
              cursor: "pointer",
            }}
            onClick={() => {
              if (item === "Minha identificação") {
                setTela("identificacao");
              }
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}*/

import { useState } from "react";
import {
  Person,
  Bell,
  Gear,
  QuestionCircle,
  Trophy,
  BarChart,
  BoxArrowRight,
  Trash,
  Wallet,
  PlayCircle,
  ArrowLeft
} from "react-bootstrap-icons";

export default function Mais() {
  const [tela, setTela] = useState("menu");

  const itens = [
    { label: "Ganhos", icon: Wallet },
    { label: "Minha identificação", icon: Person },
    { label: "Notificações", icon: Bell },
    { label: "Tutorial", icon: PlayCircle },
    { label: "Preferências", icon: Gear },
    { label: "Meus desafios", icon: Trophy },
    { label: "Meu nível", icon: BarChart },
    { label: "Ajuda", icon: QuestionCircle },
    { label: "Sair", icon: BoxArrowRight },
    { label: "Excluir minha conta", icon: Trash },
  ];

  // 🔹 TELA IDENTIFICAÇÃO
  if (tela === "identificacao") {
    return (
      <div style={{ flex: 1, width: "100%" }}>
        
        {/* HEADER */}
        <div
          style={{
            background: "#FFD600",
            padding: "16px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontWeight: "bold",
          }}
        >
          <ArrowLeft
            size={22}
            style={{ cursor: "pointer" }}
            onClick={() => setTela("menu")}
          />
          <span>Minha identificação</span>
        </div>

        {/* QR CODE */}
        <div
          style={{
            background: "#fff",
            margin: "16px",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              height: "150px",
              background: "#eee",
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            QR CODE
          </div>

          <p>
            Mostre este código QR para sair do centro logístico
          </p>
        </div>

        {/* CREDENCIAL */}
        <div
          style={{
            background: "#fff",
            margin: "16px",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h4>Credencial</h4>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginTop: "10px",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: "#ddd",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              👤
            </div>

            <div>
              <strong>Envios Extra</strong>
              <br />
              Nome do Usuário
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 🔹 MENU PADRÃO
  return (
    <div style={{ flex: 1, width: "100%" }}>
      
      {/* HEADER */}
      <div
        style={{
          background: "#FFD600",
          padding: "20px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <div
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          👤
        </div>

        <strong>Nome do Usuário</strong>
      </div>

      {/* LISTA COM ÍCONES */}
      <div style={{ padding: "16px" }}>
        {itens.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "14px 0",
                borderBottom: "1px solid #eee",
                cursor: "pointer",
                color: item.label.includes("Excluir") ? "red" : "#000",
              }}
              onClick={() => {
                if (item.label === "Minha identificação") {
                  setTela("identificacao");
                }
              }}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}