import React, { ImgHTMLAttributes, useState } from "react";
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { headerTexts } from "../../../domain/consts";
import { ItemComponent } from "../Header/components";
import { CSSTransition } from "react-transition-group";

type Props = ImgHTMLAttributes<HTMLElement> & {
  refs: {
    homeRef: React.RefObject<HTMLDivElement>;
    stackRef: React.RefObject<HTMLDivElement>;
    aboutStack: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
    ProjectsRef: React.RefObject<HTMLDivElement>;
  };
};

const HeaderMobileComponent = ({ src, refs }: Props) => {
  const [status, setStatus] = useState<number | null>(null);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleStatus = (index: number) => {
    if (status === index) {
      setStatus(null);
    } else {
      setStatus(index);
    }
  };

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleScrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const backgoundColor = showMenu ? "#efefef" : "transparent";

  return (
    <header
    //   style={{
    //     display: "flex",
    //     justifyContent: "space-between",
    //     alignItems: "center",
    //     padding: 10,
    //   }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 20px 0px 20px",
          background: backgoundColor,
        }}
      >
        <img
          className="ImgHeader"
          src={src}
          onClick={() =>
            window.open("https://www.instagram.com/jaimes.andresfelipe/")
          }
        />
        <button
          onClick={handleMenuToggle}
          style={{ background: "transparent", border: "none" }}
        >
          {showMenu ? <FaTimes fontSize={25} /> : <FaBars fontSize={25} />}
        </button>
      </div>
      {showMenu && (
        <div
          style={{
            zIndex: 10,
            background: "#efefef",
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <ul style={{ display: "flex", flexDirection: "column", padding: 0 }}>
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
      )}
    </header>
  );
};

export default HeaderMobileComponent;
