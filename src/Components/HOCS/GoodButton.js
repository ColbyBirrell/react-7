import React from "react";
import styleHoc from "./styleHoc";

const GoodButton = props => {
  return (
    <button onClick={props.onClick} style={props.style}>
      {props.text ? props.text : "Good Little Button"}
    </button>
  );
};

export default styleHoc(GoodButton);
