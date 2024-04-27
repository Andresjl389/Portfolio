import React from "react";
import "./card.css";
import { homeTexts } from "../../../../../domain/consts/texts";
import  foto  from '../../../../assets/Me.jpeg'

const CardInfo: React.FC = () => {
  return (
    <>
      <div className="CardContainer">
        <div className="CardContainer--info">
          <p>{homeTexts.info.greet}</p>
          <p>{homeTexts.info.myName}</p>
          <p>{homeTexts.info.name}</p>
          <p>{homeTexts.info.info}</p>
        </div>

        
          <div className="CardContainer--img"><img src={foto} className="foto" /></div>
      </div>
    </>
  );
};

export default CardInfo;
