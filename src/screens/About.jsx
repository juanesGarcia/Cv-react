import React, { useEffect } from "react";
import "../Style/About.css";
import img from "../img/me.jpeg";
import "aos/dist/aos.css";
import AOS from "aos";

export const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <>
      <div className="containerimg row gutter" data-aos="zoom-in-up">
        <div className="col">
          <img src={img} className="imgj" alt="..." />
        </div>
        <div className="info col">
          <h1 className="hola">Hola</h1>
          <h2 className="li">Un poco de mí </h2>
          <h5>Juan Esteban Cubillos Garcia</h5>
          <h5>Desarrollador Full-stack</h5>
          <div className="d-flex text-center mb-4">
            <div
              className="ref ms-4 mt-4"
              onClick={() =>
                (window.location.href = "https://github.com/juanesGarcia")
              }
              data-aos="flip-left"
            >
              <h5 className="tex">Github</h5>
            </div>
            <div
              className="ref ms-4 mt-4"
              onClick={() =>
                (window.location.href =
                  "https://drive.google.com/file/d/19qIeh-0xv4bxvAlCTR-BEwdy1FK0n9dN/view?usp=sharing")
              }
              data-aos="flip-left"
            >
              <h5 className="tex">Cv</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="containerab" data-aos="zoom-in-up">
        <div className="ing text-center fst-italic pt-1 pe-4">
          <p>
            Desarrollador web con enfoque full-stack. Especializado en
            JavaScript (React.js), TypeScript, Redux Toolkit, Jest.js, y Python.
            Experiencia en bases de datos SQL y NoSQL (MySQL, PostgreSQL,
            MongoDB) y en la creación de API REST con Node.js (Express).
            Familiarizado con Docker, metodología ágil Scrum, y cultura DevOps.
            Destaco por mi rapidez para aprender y aplicar conocimientos en
            proyectos reales. He desarrollado diversos proyectos, como una
            página que conecta tatuadores con personas que se quieren tatuar.
            Mis desarrollos están disponibles en mi portafolio web:
            https://juan-cv27.netlify.app/ y en mi GitHub:
            https://github.com/juanesGarcia?tab=repositories
          </p>
        </div>
      </div>
    </>
  );
};
