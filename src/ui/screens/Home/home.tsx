import React, { useEffect, useRef, useState } from "react";
import {
  HeaderComponent,
  StackComponent,
  CardStack,
  FooterComponent,
  HeaderMobileComponent,
  Loading,
  AboutComponent,
} from "../../components";
import logo from "../../assets/Logo.png";
import { CardInfo } from "./components/Card";
import useProjectModel from "../../../domain/models/Projects";
import { ProjectType } from "../../../domain/interfaces";
import "./index.css";
import { ProjectsComponent } from "../../components/Projects";

const Home: React.FC = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 735);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { GetProjectsInfo } = useProjectModel();

  const homeRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const aboutStack = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const ProjectsRef = useRef<HTMLDivElement>(null);

  const handleProject = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await GetProjectsInfo();
      setProjects(data || []);
    } catch (err) {
      setError("Hubo un error al cargar los proyectos. Inténtalo nuevamente.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleProject();
    const handleResize = () => setIsDesktop(window.innerWidth > 735);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div ref={homeRef}>
        {isDesktop ? (
          <HeaderComponent src={logo} refs={{ homeRef, stackRef, aboutStack, contactRef, ProjectsRef}} />
        ) : (
          <HeaderMobileComponent src={logo} refs={{ homeRef, stackRef, aboutStack, contactRef, ProjectsRef}} />
        )}
      </div>
      <div
      ref={stackRef}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 100,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CardInfo />
        <StackComponent />

        {isLoading ? (
          <Loading />
        ) : error ? (
          <div style={{ color: "red" }}>{error}</div>
        ) : projects.length > 0 ? (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              width: "80%",
            }}
          >
            {projects.map((item) => (
              <CardStack
                key={item.title}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        ) : (
          <div className="Error">No hay stack disponibles.</div>
        )}
      </div>
      <div ref={aboutStack}>
        <AboutComponent />
      </div>
      <div style={{display:'flex', justifyContent:'center'}} ref={ProjectsRef}>
        <ProjectsComponent />
      </div>


      <div>
        <FooterComponent src={logo} contactRef={contactRef} />
      </div>
    </>
  );
};

export default Home;
