import React, { ImgHTMLAttributes } from "react";
import { footerText } from "../../../domain/consts";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type Props = ImgHTMLAttributes<HTMLElement> &{
  contactRef: React.RefObject<HTMLDivElement>;
};

const FooterComponent = ({ src, contactRef }: Props) => {
  return (
    <footer style={{ padding: 20, backgroundColor:'#f2f2f2' }} ref={contactRef}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
          paddingBottom:20, borderBottom:'1px solid #b4b4b4'
        }}
      >
        <img src={src} style={{ width: 40 }} />
        <div style={{display:"flex", alignItems:'center', justifyContent:'center', flexWrap:'wrap'}}>
          <a
            href={`mailto:${footerText.links.gmail}`}
            target="_blank"
            rel="noreferrer"
            style={{ marginLeft: 10, marginRight: 10, color:'#000', textDecoration:'none'}}
          >
            {footerText.links.gmail}
          </a>
          <a
            href={`tel:${footerText.links.phone}`}
            style={{ marginLeft: 10, marginRight: 10, color:'#000', textDecoration:'none'}}
          >
            3174487603
          </a>
          <a href={footerText.links.linkedin} target="_blank" style={{marginLeft:10, marginRight:10}}>
            <FaLinkedin fontSize={25} color="#000" />
          </a>
          <a href={footerText.links.github} target="_blank" style={{marginLeft:10, marginRight:10}}>
            <FaGithub fontSize={25} color="#000" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
