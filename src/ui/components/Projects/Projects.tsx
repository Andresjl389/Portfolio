import "./Projects.css";
import { CardComponent } from "./Components";
import ArqSoftApp from "../../assets/ArqSoftApp.png";
import LocalFood from "../../assets/localfood.jpeg";
import CallCenterFront from "../../assets/CallCenter.png";
import CallCenterBack from "../../assets/CallCenterBack.png";
import AgroSmartWeatherForecast from "../../assets/AgroSmartForcast.png";
import PawPalace from "../../assets/PawPalace.png";
import Threads from "../../assets/Threads.png";
import TodoApp from "../../assets/TodoApp.png";

const ProjectsComponent = () => {
  return (
    <div className="ProjectCard">
      <CardComponent
        image={ArqSoftApp}
        description="A mobile application dedicated to farmers where they can organize
        activities for specific plots of land. Users can delineate their land
        and view it on a map included in the application. Additionally, this app
        provides weather forecasts to aid farmers in decision-making."
        title="AgroSmart Weather Forecast Frontend"
        url="https://github.com/juaaaanjo/ARQSoftApp.git"
      />
      <CardComponent
        image={AgroSmartWeatherForecast}
        title="AgroSmart Weather Forecast Backend"
        description="Backend of the mobile application developed in Python using the FastAPI
        framework. The main functionalities of this code included connecting to
        the PostgreSQL database and creating endpoints that allow for each of
        the application's features, such as land delineation, activity creation,
        and more."
        url="https://github.com/GARO99/AgroSmartWeatherForecast.git"
      />
      <CardComponent
        image={CallCenterFront}
        description="Financial module for a Call Center, where transactions can be added and
        edited, the Call Center's accounting entries can be viewed, and clients
        and their financial reports can be accessed. This financial module meets
        the specific requirements of Call Centers, as it allows interaction with
        other modules of the ERP that was being developed."
        title="CallCenter Financial Module"
        url="https://github.com/Andresjl389/CallCenter.git"
      />

      <CardComponent
        image={CallCenterBack}
        title="CallCenter Financial Module Backend"
        description="Backend of the financial module of an ERP, developed in Django. The main
        objective of this backend is to connect with the PostgreSQL database and
        create endpoints that enable the development of the necessary algorithms
        for the financial module's functionality, as well as to display, edit,
        and delete module data."
        url="https://github.com/andresaredev/modulo_financiera/tree/main/financiera"
      />
      <CardComponent
        image={LocalFood}
        description='A website that provides healthy food recipes, including a list of
        ingredients and preparation instructions. In addition to offering
        recipes, the website informs users about seasonal produce based on the
        current month. It also features an inventory section accessible only to
        subscribers. The site includes support for FAQs, a "Contact Us" section,
        and a forum where community members can interact.'
        title="LocalFood"
        url="https://github.com/AndresJaimes389/LocalFood.git"
      />

      <CardComponent
        image={PawPalace}
        title="PawPalace"
        description="Ecommerce developed in Django with JavaScript. This pet products
        platform aims to bring together the most popular social media products
        on a single website. This Ecommerce provides administrators with an
        environment where they can update and add products for sale. It also
        includes a PQRS (Questions, Complaints, Claims, and Suggestions) section
        where messages are sent to the company's email and are visible in a
        dedicated section of the platform."
        url="https://github.com/Andresjl389/PawPalace.git"
      />
      <CardComponent
        image={Threads}
        title="Threads with python"
        description="A project developed to understand the functioning of Python threads.
        This project consists of two traffic lights that release two cars, which
        wait for the light to turn green to start their journey."
        url="https://github.com/andresaredev/PythonThreads.git"
      />
      <CardComponent
        image={TodoApp}
        title="ToDo App"
        description="ToDo application developed in React. In this ToDo, you can create,
        delete, or complete pending tasks. This ToDo is a PWA with a responsive
        design."
        url="https://github.com/Andresjl389/ToDoApp.git"
      />
    </div>
  );
};

export default ProjectsComponent;
