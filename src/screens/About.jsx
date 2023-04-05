import React from "react";
import "../Style/About.css";
import img from "../img/logo192.png";

export const About = () => {
  return (
    <>
      <div className="containerimg row gutter">
        <div className="col">
          <img src={img} className="imgj" alt="..." />
        </div>
        <div className="info col">
          <h1 className="hola">Hola</h1>
          <h2 className="li">Un poco de mí </h2>
          <h5>Juan Esteban Cubillos Garcia</h5>
          <h5>Desarrollador Full-stack</h5>
          <div className="d-flex text-center mb-4">
  
            <div className="ref ms-4 mt-4" onClick={()=> window.location.href = 'https://github.com/juanesGarcia'}>
            <h5 className="tex">Github</h5>
            </div>
            <div className="ref ms-4 mt-4" onClick={()=> window.location.href = 'https://drive.google.com/file/d/1fFjuRZ5B9Ew2KGS4zO-LEt0u-g7YgHKD/view'}>
            <h5 className="tex">Cv</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="containerab">
        <div className="title">
          <h3 className="hola2 text-center text-uppercase  pt-4">Hoja de vida </h3>
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
    </>
  );
};
