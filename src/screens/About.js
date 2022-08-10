import React from "react";
import imgme from "../img/yo.jpeg";

export const About = () => {
  return (
    <div className="container">
      <h3 className="text-center text-uppercase py-4 mt-4">About me</h3>
      <div className="text-center fst-italic pt-1">
        <p>
          Estudiante de ingeniería de sistemas, destacado por mi actitud
          servicial, por mi desempeño académico en la Universidad del Magdalena,
          me caracterizo por ser una persona que aprende rápidamente y se
          esfuerza por poner en práctica el conocimiento en áreas como la
          programación conociendo todas las estructuras de datos necesarias para
          desempeñar cualquier proyecto. Me encuentro en búsqueda de mi primera
          oportunidad laboral para demostrar mis capacidades. El desarrollo de
          software y todos sus componentes me apasionan, por lo anterior quiero
          iniciar mi carrera laboral y profesional. Capacitado para desarrollo
          de software en lenguajes como Java, JavaScript, Python, C, HTML, CSS y
          manejo de base de datos con MySQL o PostgreSQL.
        </p>  
      </div>
      <div className="container-cer ms-3 pb-4">
        <h5 className="ms-4 mb-4">Certificaciones: </h5>
      <ul>
            <li>Diseño Web con HTML5 y CSS – junio 2020</li>
            <li>Bootstrap 4 - junio 2020</li>
            <li>Python 3 - junio 2022</li>
            <li>Curso profesional de GIT y GITHUB –junio 2020</li>
            <li>Comandos en Linux – junio 2022 </li>
            <li>Introducción a la seguridad cibernética –junio 2020 </li>
            <li>Fundamentos de Ingeniería de Software - mayo 2020</li>
          </ul>
      </div>

      <div className="container-card pb-4 mt-4 " width={200} height={200}>
        <div className="row  mt-4 mb-4 ">
          <div className="col-md-4 mx-auto">
            <div className="card mt-4">
              <div className="mx-auto" >
                  <img
                src={imgme}
                alt=""
                className="img-fluid rounded-circle"
                width={300}
                height={200}
              />
              </div>
            
              <div className="card-body"></div>
              <h1 className="card-title border bordert-dark">Juan Esteban Cubillos Garcia</h1>
              <p className="card-text text-secondary">
                Estudiante de la Universidad del Magdalena
                Santa Marta, Magdalena, Colombia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
