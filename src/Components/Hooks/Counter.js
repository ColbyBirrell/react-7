import React, { useState } from "react";
import styleHoc from "../HOCS/styleHoc";

const Counter = props => {
  const [count, setCount] = useState(100000);

  return (
    <div>
      <h1>{count}</h1>
      <button style={props.style} onClick={() => setCount(count + 1000)}>
        Literally whatever you want (a.k.a. +1)
      </button>
    </div>
  );
};

export default styleHoc(Counter);
