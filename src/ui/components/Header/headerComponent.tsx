import React, { ImgHTMLAttributes, useState } from "react";
import "./header.css";
import { headerTexts } from "../../../domain/consts/texts";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ItemComponent } from "./components";

type Props = ImgHTMLAttributes<HTMLElement> & {
  refs: {
    homeRef: React.RefObject<HTMLDivElement>;
    stackRef: React.RefObject<HTMLDivElement>;
    aboutStack: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
    ProjectsRef: React.RefObject<HTMLDivElement>;
  };
};

const HeaderComponent = ({ src, refs }: Props) => {
  const [status, setStatus] = useState<number | null>(null);

  const handleStatus = (index: number) => {
    if (status === index) {
      setStatus(null);
    } else {
      setStatus(index);
    }
  };

  const handleScrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
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
              { text: headerTexts.list.home, ref: refs.homeRef },
              { text: headerTexts.list.about, ref: refs.aboutStack },
              { text: headerTexts.list.stack, ref: refs.stackRef },
              { text: headerTexts.list.project, ref: refs.ProjectsRef },
              { text: headerTexts.list.contact, ref: refs.contactRef },
            ].map((item, index) => (
              <ItemComponent
                key={index}
                text={item.text}
                active={status === index}
                onClick={() => {
                  handleStatus(index);
                  handleScrollToSection(item.ref);
                }}
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
