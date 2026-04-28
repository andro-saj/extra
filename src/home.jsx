/*import bg from "./assets/bg.jpg";
import {
  GeoAltFill,
  PlusSquare,
  CheckSquare,
  List
} from "react-bootstrap-icons";

/*function Home() {
  return (
    <div className="app-container">
      <div className="content">
        <div className="illustration">
                <img src={bg} alt="bg" />
        </div>

        <h5 className="title">Você não tem nenhum percurso ativo</h5>

        <p className="subtitle">
          Ao iniciar um novo percurso, você verá as informações aqui.
        </p>
      </div>

      <div className="bottom-nav">
        <div className="nav-item active">
          <GeoAltFill size={22} />
          <span>Ativo</span>
        </div>

        <div className="nav-item">
          <PlusSquare size={22} />
          <span>Disponíveis</span>
        </div>

        <div className="nav-item">
          <CheckSquare size={22} />
          <span>Confirmados</span>
        </div>

        <div className="nav-item">
          <List size={22} />
          <span>Mais</span>
        </div>
      </div>
    </div>
  );
}
*/

/**23/04/2026 22:52 */
/*
function Home() {
  return (
    <div className="content">
      <div className="illustration">
        <img src={bg} alt="bg" />
      </div>

      <h5 className="title">
        Você não tem nenhum percurso ativo
      </h5>

      <p className="subtitle">
        Ao iniciar um novo percurso, você verá as informações aqui.
      </p>
    </div>
  );
}
export default Home; 
/*
import bg from "./assets/bg.jpg"; // ajuste o caminho se necessário

export default function Home() {
  return (
    <div className="content">
      <div className="illustration">
        <img src={bg} alt="bg" />
      </div>

      <h5 className="title">
        Você não tem nenhum percurso ativo
      </h5>

      <p className="subtitle">
        Ao iniciar um novo percurso, você verá as informações aqui.
      </p>
    </div>
  );
}*/

import "./home.css";
import cone from "./assets/bg.jpg";


export default function Home() {
  return (
    <div className="home-container">

      {/* CONTEÚDO CENTRAL */}
      <div className="home-content">

        {/* ILUSTRAÇÃO */}
        <div className="home-illustration">
          <img src={cone} alt="Sem percursos" />
        </div>

        {/* TEXTO */}
        <h2 className="home-title">
          Você não tem nenhum percurso ativo
        </h2>

        <p className="home-subtitle">
          Ao iniciar um novo percurso, você verá as informações aqui.
        </p>

      </div>

    </div>
  );
}