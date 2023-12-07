import React from "react";
import PropTypes from 'prop-types';
import Button from "../button";
import Card from "../card";

const Section = (props, bgColor) => {
  return (
    <section className={`flex flex-col text-center items-center p-4 ${props.bgGrey ? 'bg-light-gray' : 'bg-light-purple'}`}>
      <h3 className="p-4 text-4xl	text-light-purple font-semibold">{props.sectionTitle}</h3>
      <hr className="w-20"/>
      {props.description && (
        <p className="p-6 tracking-wider">{props.description}</p>
      )}
      {props.buttonTitle && (
        <Button title={props.buttonTitle}/>
      )}
      {props.card && (
        <Card/>
      )}
    </section>
  );
}

Section.propTypes = {
  sectionTitle: PropTypes.string,
  description: PropTypes.bool,
  buttonTitle: PropTypes.string
};

export default Section;