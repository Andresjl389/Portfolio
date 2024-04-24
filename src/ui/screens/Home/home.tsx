import React from "react";
import { HeaderComponent } from "../../components";
import logo from '../../assets/Logo.png'
import { CardInfo } from "./components/Card";


const Home: React.FC = () => {
  return (
    <>
      <HeaderComponent src={logo} />
      <div style={{display:'flex', justifyContent:'center', marginTop:100}}>
        <CardInfo  />
      </div>
    </>
  );
};

export default Home;
