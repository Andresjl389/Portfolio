import React, { ImgHTMLAttributes, useState } from "react";
import "./header.css";
import { headerTexts } from "../../../domain/consts/texts";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ItemComponent } from "./components";

type Props = ImgHTMLAttributes<HTMLElement>;

const HeaderComponent = ({ src }: Props) => {
  const [status, setStatus] = useState<number | null>(null);

  const handleStatus = (index: number) => {
    if(status === index){
      setStatus(null)
    }else{
      setStatus(index)
    }
  };

  return (
    <>
      <header className="ContainerHeader">
        <img
          className="ImgHeader"
          src={src}
          onClick={() =>
            window.open("https://www.instagram.com/jaimes.andresfelipe/")
          }
        />
        <div className="ListContainer">
          <ul className="ListContainer--ul">
            {[
              headerTexts.list.home,
              headerTexts.list.about,
              headerTexts.list.stack,
              headerTexts.list.project,
              headerTexts.list.contact,
            ].map((text, index) => (
              <ItemComponent
                key={index}
                text={text}
                active={status === index}
                onClick={() => handleStatus(index)}
              />
            ))}
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
      </header>
    </>
  );
};

export default HeaderComponent;
