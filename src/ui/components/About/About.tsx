import { useState } from "react";
import "./about.css";
import { FaCode } from "react-icons/fa";
import { ExperienceComponent } from "./components";

const AboutComponent = () => {
  return (
    <section className="About" >
      <h2 className="TitleAbout">About Me</h2>
      <p>
        Something about me 🚀 <br />I am a Software Engineering student
        passionate about programming and developing innovative solutions. With a
        specialization in databases and Big Data, I have acquired strong skills
        in various areas of computer science.
      </p>
      <p>
        My experience includes the development of web and mobile applications,
        as well as backend projects using frameworks such as Django, FastAPI,
        and Flask. On the frontend, I have experience developing user interfaces
        using HTML, CSS, React, React-Native, and Angular, including TypeScript.
        Additionally, I hold certifications in network infrastructure with Cisco
        and have a solid foundation in technologies like Java, Python, C++, and
        JavaScript. I am proactive, organized, and have excellent ability to
        work in a team and adapt to dynamic environments.
      </p>

      <h2 className="TitleAbout">Education</h2>
      <h3 className="NameUniversity">Universidad Manuela Beltrán</h3>
        <p>Software engineering<br/>
        Eighth semester</p>

      <h2 className="TitleAbout">Work experience</h2>

      <ExperienceComponent title="Freelancer in Software Development" typeProject="Frontend projects" techList={['React', 'Angular', 'JavaScript', 'TypeScript']} />
      <ExperienceComponent title="Freelancer in Software Development" typeProject="Backend projects" techList={['Django', 'FastApi', 'Java', 'Flask']} />
      <ExperienceComponent title="Freelancer in Software Development" typeProject="Mobile aplications" techList={['React-native','Expo']} />
    </section>
  );
};

export default AboutComponent;
