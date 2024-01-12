import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Button = (props, onClick) => {
  return (
    <div className="flex justify-center p-4 font-sans">
      <button role="button" onClick={() => onClick} className="w-60 h-12 bg-light-green border-4 border-purple-350 rounded-full font-semibold">
        {props.isRouteLink ? <Link to="/codigo-sentido/lista_de_softwares">Lista dos softwares</Link> : <a href={props.link} target={props.samePage ? '' : "_blank"} rel="noreferrer">{props.title}</a>}
      </button>
    </div>
  );
}

Button.protoTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func
}

export default Button;