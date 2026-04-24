/*import { GeoAltFill, PlusSquare, CheckSquare, List } from "react-icons/bs";

export default function Footer({ active, setActive }) {
  const items = [
    { key: "ativo", label: "Ativo", icon: GeoAltFill },
    { key: "disponiveis", label: "Disponíveis", icon: PlusSquare },
    { key: "confirmados", label: "Confirmados", icon: CheckSquare },
    { key: "mais", label: "Mais", icon: List },
  ];

  return (
    <div className="bottom-nav">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.key}
            className={`nav-item ${active === item.key ? "active" : ""}`}
            onClick={() => setActive(item.key)}
          >
            <Icon size={22} />
            <span>{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}*/

/**23/04/2026 22:50 */


import {
  GeoAltFill,
  PlusSquare,
  CheckSquare,
  List
} from "react-bootstrap-icons";

export default function Footer({ active, setActive }) {
  const items = [
    { key: "ativo", label: "Ativo", icon: GeoAltFill },
    { key: "disponiveis", label: "Disponíveis", icon: PlusSquare },
    { key: "confirmados", label: "Confirmados", icon: CheckSquare },
    { key: "mais", label: "Mais", icon: List },
  ];

  return (
    <div className="bottom-nav">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.key}
            className={`nav-item ${active === item.key ? "active" : ""}`}
            onClick={() => setActive(item.key)}
          >
            <Icon size={22} />
            <span>{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}