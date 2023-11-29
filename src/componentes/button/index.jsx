import React from "react";
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <div className="flex justify-center p-4 font-sans">
      <button className="w-60 h-12 bg-light-green border-4 border-purple-350 rounded-full font-semibold">{props.title}</button>
    </div>
  );
}

Button.protoTypes = {
  title: PropTypes.string
}

export default Button;