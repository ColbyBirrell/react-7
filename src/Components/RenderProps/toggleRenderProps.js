import React, { useState } from "react";

const ToggleRenderProps = props => {
  const [isVisible, setVisible] = useState(false);

  return <div>{props.render(isVisible, setVisible)}</div>;
};

export default ToggleRenderProps;
