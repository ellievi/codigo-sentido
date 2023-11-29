import React from "react";
import Button from "../button";

const Card = () => {
  return (
    <div className="grid grid-cols-3 gap-10 p-10">
      <div className="bg-gradient-purple p-6">
        <h4 className="font-semibold text-xl text-white">Oi</h4>
        <p className="p-4 text-white">Descrição do curso</p>
        <Button title="Redirecionar ao site"/>
      </div>
      <div className="bg-gradient-purple p-6">
        <h4 className="font-semibold text-xl text-white">Oi</h4>
        <p className="p-4 text-white">Descrição do curso</p>
        <Button title="Redirecionar ao site"/>
      </div>
      <div className="bg-gradient-purple p-6">
        <h4 className="font-semibold text-xl text-white">Oi</h4>
        <p className="p-4 text-white">Descrição do curso</p>
        <Button title="Redirecionar ao site"/>
      </div>
    </div>
  );
}

export default Card;