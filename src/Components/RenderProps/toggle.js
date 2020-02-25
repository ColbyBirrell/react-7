import React, { useState } from "react";
import styleHoc from "../HOCS/styleHoc";

const Toggle = props => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      {isVisible && props.children}
      <button style={props.style} onClick={() => setIsVisible(!isVisible)}>
        Show or Hide
      </button>
    </div>
  );
};

export default styleHoc(Toggle);
