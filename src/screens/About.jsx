import React from "react";
import "../Style/About.css";
import img from '../img/WhatsApp Image 2023-04-02 at 7.16.03 PM (1).jpeg';
export const About = () => {
  return (
    <>
      <div className="containerab">
        <div className="title">
          <h3 className=" text-center text-uppercase  pt-4">Hoja de vida </h3>
        </div>
        <div className="ing text-center fst-italic pt-1 pe-4">
          <p>
            Programador Full-Stack, destacado por mi actitud servicial, por mi
            desempeño académico en la Universidad del Magdalena. Me caracterizo
            por ser una persona que aprende rápidamente y se esfuerza por poner
            en práctica el conocimiento en el área de programación, conociendo
            todas las estructuras de datos necesarias para desempeñar cualquier
            proyecto. El desarrollo de software y todos sus componentes me
            apasionan. Capacitado para desarrollo de software en lenguajes como
            JavaScript (react js), Jest js, Python, HTML, CSS y manejo de base
            de datos SQL Y NOSQL con MySQL, PostgreSQL o Mongo db, manejando el
            marco de gestión de proyectos de metodología ágil Scrum y a su vez
            siguiendo las prácticas de la cultura DevOps.
          </p>
        </div>
      </div>
      <div className="containerimg row gutter">
        <div className="col">
          <img src={img} className="imgj" alt="..." />
        </div>
        <div className="info col">
          <h2>juan esteban cubillos </h2>
          <h2>Desarrollador Full-stack</h2>
        </div>
      </div>
    </>
  );
};
