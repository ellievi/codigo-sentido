import React from "react";
import LogoCodigoSentido from '../../assets/logo_codigo_sentido.svg'

const Menu = () => {
  return (
    <div className="justify-between text-2xl text-white">
      <ul className="flex flex-row justify-center gap-16 py-8">
        <li>
          Início
        </li>
        <li>
          Sobre
        </li>
        <li>
          Softwares
        </li>
        <img
        className="w-72"
        src={LogoCodigoSentido} 
        alt="Logotipo da Código Sentido. À esquerda encontra-se o símbolo de colchete em azul claro; ao centro está escrito Código Sentido, 
        sendo a palavra ''código'' de cor branca e a palavra ''sentido'' da mesma cor que o colchete; 
        à direta escontra-se o símbolo de chave muito presente na matemática e possui a mesma cor da palavra ''código''."
        />
        <li>
          Cursos
        </li>
        <li>
          Sites
        </li>
        <li>
          Referências
        </li>
      </ul>
    </div>
  )
}

export default Menu;