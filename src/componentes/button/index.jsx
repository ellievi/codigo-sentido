import React from "react";
import PropTypes from 'prop-types';

const Button = (props, onClick) => {
  return (
    <div className="flex justify-center p-4 font-sans">
      <button onClick={() => onClick} className="w-60 h-12 bg-light-green border-4 border-purple-350 rounded-full font-semibold">
        <a href={props.link} onClick={window.history.pushState("", "", "/")}>{props.title}</a>
      </button>
    </div>
  );
}

Button.protoTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func
}

export default Button;