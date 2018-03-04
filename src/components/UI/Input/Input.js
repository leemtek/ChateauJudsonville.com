import React from "react";
import classes from "./Input.css";

const input = (props) => {
  let inputElement = null;
  
  switch (props.inputtype) {
    case ("input"):
      inputElement = <input {...props} />;
      break;
    case ("textarea"):
      inputElement = <textarea {...props} />;
      break;
    default:
      inputElement = <input {...props} />;
  } // switch
  
  return (
    <div>
      {inputElement}
    </div>
  ); // return
};

export default input;