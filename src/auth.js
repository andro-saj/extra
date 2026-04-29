const CHAVE = "LEANDRO-2026"; // 🔥 SUA CHAVE

export function temAcesso() {
  const data = localStorage.getItem("acesso");

  if (!data) return true; // primeira vez libera

  const agora = Date.now();
  const diff = agora - parseInt(data);

  return diff < 24 * 60 * 60 * 1000; // 24h
}

export function validarChave(chave) {
  if (chave === CHAVE) {
    localStorage.setItem("acesso", Date.now());
    return true;
  }
  return false;
}