import React, { useState } from "react";
import BadButton from "./BadButton";
import Square from "./Square";
import "../style.css";
import GoodButton from "./GoodButton";

const Hocs = props => {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <section className="advanced-react-section">
      <h1>
        HOCS
        <a
          href="https://reactjs.org/docs/higher-order-components.html"
          rel="noopener"
          target="__blank"
        >
          Docs
        </a>
      </h1>
      <BadButton />
      <BadButton darkMode />
      <GoodButton onClick={() => setIsAdmin(!isAdmin)} text="toggle admin" />
      <Square darkMode isAdmin={isAdmin} />
    </section>
  );
};
export default Hocs;
