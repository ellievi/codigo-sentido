import React from "react";
import LogoCodigoSentido from '../../assets/logo_codigo_sentido.svg'
import { Link } from "react-router-dom";
import Search from "../search";

const Menu = () => {
  return (
    <div className="justify-between max-h-28 text-2xl text-white">
      <ul className="flex flex-row justify-center gap-16 py-8">
        <li>
          <Link to="/">Início</Link>    
        </li>
        <li>
          <a href="#sobre">Sobre</a>
        </li>
        <li>
          <Link to="/lista_de_softwares" onClick={window.history.pushState("", "", "/")}>Softwares</Link>          
        </li>
        <img
        className="w-72"
        src={LogoCodigoSentido} 
        alt="Logotipo da Código Sentido. À esquerda encontra-se o símbolo de colchete em azul claro; ao centro está escrito Código Sentido, 
        sendo a palavra ''código'' de cor branca e a palavra ''sentido'' da mesma cor que o colchete; 
        à direta escontra-se o símbolo de chave muito presente na matemática e possui a mesma cor da palavra ''código''."
        />
        <li>
          <a href="#conteudos">Conteúdos</a>
        </li>
        <li>
          <a href="#sites">Sites</a>
        </li>
        <li>
          <Search/>
        </li>
      </ul>
    </div>
  )
}

export default Menu;