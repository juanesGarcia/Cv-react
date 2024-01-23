import React,{ useEffect } from "react";
import "../Style/About.css";
import img from "../img/me.jpeg";
import "aos/dist/aos.css"
import AOS from "aos" 

export const About = () => {
  
  useEffect(() => {

    AOS.init({duration:1500});
  }, [])
  return (
    <>
      <div className="containerimg row gutter" data-aos="zoom-in-up" >
        <div className="col">
          <img src={img} className="imgj" alt="..." />
        </div>
        <div className="info col">
          <h1 className="hola">Hola</h1>
          <h2 className="li">Un poco de mí </h2>
          <h5>Juan Esteban Cubillos Garcia</h5>
          <h5>Desarrollador Full-stack</h5>
          <div className="d-flex text-center mb-4">
  
            <div className="ref ms-4 mt-4" onClick={()=> window.location.href = 'https://github.com/juanesGarcia'} data-aos="flip-left">
            <h5 className="tex">Github</h5>
            </div>
            <div className="ref ms-4 mt-4" onClick={()=> window.location.href = 'https://drive.google.com/file/d/1fFjuRZ5B9Ew2KGS4zO-LEt0u-g7YgHKD/view?usp=sharing'}data-aos="flip-left">
            <h5 className="tex">Cv</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="containerab"data-aos="zoom-in-up" >
        <div className="ing text-center fst-italic pt-1 pe-4">
          <p>
          Desarrollador web con actitud servicial y destacado desempeño académico en la Universidad del Magdalena.
Apasionado por el desarrollo de software y capacitado en lenguajes como JavaScript (React.js), TypeScript,
Redux Toolkit, Jest.js, Python, HTML y CSS. Poseo experiencia en el manejo de bases de datos SQL y NoSQL,
como MySQL, PostgreSQL y MongoDB, así como en la extracción de información de estas. He creado API
REST con Node.js (Express) y he utilizado frameworks como React para consumir estas API REST. Además,
implemento el uso de Docker en mis proyectos. Estoy familiarizado con la metodología ágil Scrum y las prácticas
de la cultura DevOps.
Destaco por mi capacidad para aprender rápidamente y aplicar mis conocimientos en proyectos reales. He
desarrollado una variedad de proyectos, entre los que se incluyen una página web interactiva para hacer
ejercicio, un sistema de gestión de parqueadero y una aplicación para consumir API REST. Estos proyectos se
encuentran disponibles en mi portafolio web: https://juan-cv27.netlify.app/.
Mi objetivo profesional es adquirir experiencia práctica y fortalecer mis habilidades técnicas en un entorno
dinámico. Busco oportunidades que me permitan contribuir al éxito de la empresa mientras sigo desarrollando
mis habilidades en el campo del desarrollo de software.
          </p>
        </div>
      </div>
    </>
  );
};
