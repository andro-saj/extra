import { useState } from "react";
import { validarChave } from "./auth";

export default function Bloqueio({ liberar }) {
  const [chave, setChave] = useState("");

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "#fcd516"
    }}>
      <h2>🔒 Acesso bloqueado</h2>

      <p>Digite a chave para continuar</p>

      <input
        value={chave}
        onChange={(e) => setChave(e.target.value)}
        style={{
          padding: 10,
          borderRadius: 8,
          border: "1px solid #ccc",
          marginBottom: 10
        }}
      />

      <button
        onClick={() => {
          if (validarChave(chave)) {
            liberar();
          } else {
            alert("Chave inválida");
          }
        }}
        style={{
          padding: 10,
          borderRadius: 8,
          border: "none",
          background: "#000",
          color: "#fff"
        }}
      >
        Entrar
      </button>
    </div>
  );
}