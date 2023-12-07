import React from "react";
import PesquisaIcone from '../../assets/pesquisa_icon.svg'

const Search = () => {
  return (
    <div>
      <input className="w-52 text-lg bg-lightest-green rounded-xl outline-0"/>
      <img
          className="w-6"
          src={PesquisaIcone} 
          alt="Ícone de busca representado por uma lupa."
          />
    </div>
  );
}

export default Search;