import "./intro.scss";
import { HashLink as Link } from "react-router-hash-link";

export default function Intro() {
  return (
    <div className="home-card">
      <div className="left">
        <div className="intro-title">
        <span>Teste da mulher antifrágil</span>
        </div>
        <div className="home-info">
          <span>Vamos avaliar se você é UMA MULHER FRÁGIL, RESISTENTE OU ANTIFRAGIL.</span>
        </div>
        <div className="home-info">
          <span>Reinventar-se é ter coragem para ser livre<br/>
          Dra. Priscila Rodovalho Cunha</span>
        </div>
        <Link className="intro-button" to="/questoes">
          Iniciar o teste
        </Link>
      </div>
      <div className="right">
        <img src="assets/pastora.jpg" alt="mulher" />
      </div>
    </div>
  );
}
