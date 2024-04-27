import React, { useEffect, useState } from "react";
import { HeaderComponent, StackComponent } from "../../components";
import logo from '../../assets/Logo.png'
import { CardInfo } from "./components/Card";
import useProjectModel from "../../../domain/models/Projects";
import {ProjectType} from '../../../domain/interfaces'


const Home: React.FC = () => {
  const [projects, setProjects] = useState<ProjectType[]>([])
  const { GetProjectsInfo } = useProjectModel()
  console.log("UseState: ",projects)

  const handleProject = async () =>{
    const data = await GetProjectsInfo()
    setProjects(data)
  }

  useEffect(()=>{
    handleProject()
  },[])


  return (
    <>
      <HeaderComponent src={logo} />
      <div style={{display:'flex', justifyContent:'center', marginTop:100, flexDirection:'column', alignItems:'center'}}>
        <CardInfo  />
        <StackComponent />
        <p>{projects.map((item) => (
          item.title
        ))}</p>
      </div>
    </>
  );
};

export default Home;
