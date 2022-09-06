import React from "react";
import "./Input.css";

function Input(props: any) {
  const { size = "medium", ...rest } = props;
  return <input className={`input ${size}`} {...rest} />;
}

export default Input;
