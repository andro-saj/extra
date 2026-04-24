/*import Home from "./home";

function App() {
  return <Home />;
}

export default App;  
*/

/**23/04/2026 22:54 */

import { useState } from "react";
import Home from "./home";
import Mais from "./mais";
import Footer from "./components/Footer";

function App() {
  const [active, setActive] = useState("ativo");

  return (
    <div className="app-container">

      {/* CONTEÚDO QUE MUDA */}
      <div style={{ flex: 1, width: "100%" }}>
        {active === "ativo" && <Home />}
        {active === "disponiveis" && <h2>Disponíveis</h2>}
        {active === "confirmados" && <h2>Confirmados</h2>}
        {active === "mais" && <Mais />}
      </div>

      {/* FOOTER FIXO */}
      <Footer active={active} setActive={setActive} />

    </div>
  );
}

export default App;


/*


import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./home";

export default function App() {
  const [active, setActive] = useState("ativo");

  return (
    <div className="app-container">
      <Header />

      <div style={{ flex: 1 }}>
        {active === "ativo" && <Home />}
        {active === "disponiveis" && <h2>Disponíveis</h2>}
        {active === "confirmados" && <h2>Confirmados</h2>}
        {active === "mais" && <h2>Mais opções</h2>}
      </div>

      <Footer active={active} setActive={setActive} />
    </div>
  );
}*/

