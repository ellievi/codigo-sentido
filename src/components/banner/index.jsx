import React from "react";
import Button from "../button";
import BannerImage from '../../assets/banner_image.svg'

const Banner = () => {
  return (
    <div className="grid grid-cols-2 p-2 ml-12">
      <div className="flex flex-col justify-center gap-6 p-12 font-sans text-shadow">
        <h1 className="text-white	text-6xl">Compromisso com a
        <br/>
        <span className="text-light-blue">educação acessível</span>
        </h1>
        <h2 className="text-xl	text-slate-200">A Código sentido possui planos para auxiliar na expansão da educação tecnológica 
          à programação para deficientes visuais reunindo conteúdos didáticos existentes que visam contribuir com a tecnologia assistiva.
        </h2>
          <a href="#sobre">
          <Button title="Ler mais sobre o projeto"/>
          </a>
      </div>
        <img
        className="max-w-lg"
        src={BannerImage} 
        alt="Ilustração representando um celular com pop-ups de textos relacionados à programação 
        (C+, Java e tag de Html). A imagem é predominantemente roxa com elementos com destaque 
        em azul e algumas plantas verdes e roxas."
        />
    </div>
  )
}

export default Banner;