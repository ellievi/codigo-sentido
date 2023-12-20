import React from "react";
import PesquisaIcone from '../../assets/pesquisa_icon.svg'
import TextInput from "../textInput";

const Search = () => {
  return (
    <div className="flex flex-row">
      <TextInput placeholder="Digite sua pesquisa"/>
      <button className="bg-light-purple py-2 h-8 rounded-md">
        <img
            className="w-6"
            src={PesquisaIcone} 
            alt="Ícone de busca representado por uma lupa."
            />
      </button>
    </div>
  );
}

export default Search;