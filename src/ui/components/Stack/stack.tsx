import React from "react";
import { stackText } from "../../../domain/consts/texts";

const StackComponent: React.FC = () => {
  return (
    <section style={{marginTop:'20vh'}}>
      <h2 style={{ color: "#42446E" }}>{stackText.texts.intro}</h2>
    </section>
  );
};

export default StackComponent;
