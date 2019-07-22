import React from "react";
import "./BookButton.css";

const BookButton = props => (
  <button className={`book-btn btn-success btn-${props.btntype} btn-sm`} {...props}>
    {props.children}
  </button>
);

export default BookButton;