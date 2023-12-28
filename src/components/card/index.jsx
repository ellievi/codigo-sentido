import React from "react";
import Button from "../button";
import PropTypes from 'prop-types';

const Card = (props, onClick) => {
  return (
    <div className="grid bg-gradient-purple p-6">
      <h4 className="font-semibold text-xl text-white">{props.title}</h4>
      <p className="p-4 text-white">{props.description}</p>
      {props.buttonTitle && (
        <Button onClick={() => onClick} title={props.buttonTitle}/>
      )}
      {props.children}
    </div>
  );
}

Button.propTypes = {
  onClick: PropTypes.func
}

export default Card;