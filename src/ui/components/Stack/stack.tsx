import React from "react";
import { stackText } from "../../../domain/consts/texts";

const StackComponent: React.FC = () => {
  return (
    <section style={{marginTop:'10vh', display:'flex', flexDirection:'column', alignItems:'center'}}>
      <h2 style={{ color: "#42446E", margin:0 }}>{stackText.texts.intro}</h2>
      <p style={{color:'#666666', fontSize:16, fontWeight:600, textAlign:'center'}}>{stackText.texts.text}</p>
    </section>
  );
};

export default StackComponent;
