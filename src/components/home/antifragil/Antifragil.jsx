import "./antifragil.scss";
import { HashLink as Link } from "react-router-hash-link";

export default function Antifragil() {
  return (
    <div className="result2-card">
      <div className="left-result2">
        <div className="title-result2">
        <span>Voce é uma Mulher AntiFrágil</span>
        </div>
        <div className="page2-info">
        <span className="result2-Info">O antifrágil assume riscos. <br/>
        O antifrágil se permite usufruir da volatilidade de um mercado por exemplo.<br/>
        O antifrágil não é inerte, ele se permite mudar, melhorar.<br/>
        A mulher antifrágil se permite errar, ela se permite correr riscos sem medo de “quebrar” pois ela é anti frágil.<br/>
        O Antifrágil pensa no coletivo, pensa no outro.<br/>
        O Anti frágil assume riscos de fracasso, rejeição, julgamento, desrespeito, sacrifícios em prol de algo maior, são essas pessoas que assumem riscos e mudam o mundo.<br/>
        O antifrágil age, realiza.<br/>
        O Antifragil avança na vida sem medo de errar.<br/>
        O Antifrágil aprende com seus erros e os erros do próximo.<br/>
        O Antifrágil sai de uma crise aprendendo a se reinventar, melhorar.<br/>
        O Antifrágil acredita que a crise o fortalece.<br/>
        O AntiFrágil confia nas pessoas.</span>
        </div>
        <Link className="button2" to="/">
          Voltar ao início
        </Link>
      </div>
      <div className="right-result2">
        <img src="assets/Mulher3.png" alt="mulher" />
      </div>
    </div>
  );
}
