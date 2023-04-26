import "./fragil.scss";
import { HashLink as Link } from "react-router-hash-link";

export default function Fragil() {
  return (
    <div className="result1-card">
      <div className="left-result1">
        <div className="title-result1">
        <span>Você está uma Mulher Frágil</span>
        </div>
        <div className="page1-info">
          <span className="result1-Info">
          O Frágil - não resiste a nada, se quebra, não consegue se reerguer a nada<br/>
          O Frágil se preocupa apenas consigo mesmo.<br/>
          O frágil apenas discursa e inventa desculpas.<br/>
          O frágil não pode ter um desvio na rotina, no planejamento, na vida.<br/>
          O frágil se prostra diante de uma crise<br/>
          O frágil está sempre desconfiando</span>
        </div>
        <Link className="button1" to="/">
          Voltar ao início
        </Link>
      </div>
      <div className="right-result1">
        <img src="assets/Mulher1.png" alt="mulher" />
      </div>
    </div>
  );
}
