import { useState } from "react";
import "./styles.css";

export default function BarraDePesquisa() {
  const [termoPssquisa, setTermoPesquisa] = useState("");

  return (
    <input
      type="text"
      placeholder="Digite o que você procura"
      className="barra-pesquisa"
      value={termoPssquisa}
      onChange={(evento) => setTermoPesquisa(evento.target.value)}
    />
  );
}
