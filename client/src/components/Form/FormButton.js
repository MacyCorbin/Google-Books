import React from "react";
import "./FormButton.css";

export const FormButton = props => (
  <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn">
    {props.children}
  </button>
);