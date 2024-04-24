import React, { ImgHTMLAttributes } from "react";
import "./header.css";
import { headerTexts } from "../../../domain/consts/texts";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type Props = ImgHTMLAttributes<HTMLElement>;

const HeaderComponent = ({ src }: Props) => {
  return (
    <div className="ContainerHeader">
      <img className="ImgHeader" src={src} onClick={() => window.open('https://www.instagram.com/jaimes.andresfelipe/')} />
      <div className="ListContainer">
        <ul className="ListContainer--ul">
          <li className="ListContainer--ul--li">{headerTexts.list.home}</li>
          <li className="ListContainer--ul--li">{headerTexts.list.about}</li>
          <li className="ListContainer--ul--li">{headerTexts.list.stack}</li>
          <li className="ListContainer--ul--li">{headerTexts.list.project}</li>
          <li className="ListContainer--ul--li">{headerTexts.list.contact}</li>
          <li
            className="ListContainer--ul--li"
            onClick={() => window.open(headerTexts.links.github)}
          >
            <FaGithub fontSize={25} />
          </li>
          <li
            className="ListContainer--ul--li"
            onClick={() => window.open(headerTexts.links.linkedin)}
          >
            <FaLinkedin fontSize={25} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
