import React from "react";

const TextInput = (props) => {
  return (
    <div>
      <input type="text" className="w-48 text-lg bg-lightest-green rounded-md outline-0" placeholder={props.placeholder} autoComplete="off"/>
    </div>
  );
}

export default TextInput;