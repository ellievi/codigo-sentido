import React from "react";
import LogoCodigoSentido from '../../assets/logo_codigo_sentido.svg'
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="max-h-28 text-2xl text-white">
      <ul role="navigation" className="flex flex-row justify-center gap-12 py-8">
        <li>
          <Link to="/codigo-sentido">Início</Link>    
        </li>
        <li>
          <Link to="/codigo-sentido/lista_de_softwares" onClick={window.history.pushState("", "", "/")}>Softwares</Link>          
        </li>
        <img
        className="w-72"
        src={LogoCodigoSentido} 
        alt="Logotipo da Código Sentido. À esquerda encontra-se o símbolo de colchete em azul claro; ao centro está escrito Código Sentido, 
        sendo a palavra ''código'' de cor branca e a palavra ''sentido'' da mesma cor que o colchete; 
        à direta escontra-se o símbolo de chave muito presente na matemática e possui a mesma cor da palavra ''código''."
        />
        <li>
          <a href="/codigo-sentido/#conteudos">Conteúdos</a>
        </li>
        <li>
          <a href="/codigo-sentido/#sites">Sites</a>
        </li>
      </ul>
    </div>
  )
}

export default Menu;