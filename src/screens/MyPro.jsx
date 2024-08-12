import React, { useEffect } from "react";
import par from '../img/parqueadero.jpg'
import fit from '../img/fit.jpg';
import imgapi from '../img/api.png';
import logofinal from '../img/logofinal.jpg';
import col from '../img/colombia.png';
import perfile from '../img/perfile.jpeg';
import practicante from '../img/practicante.jpeg';
import marca from '../img/marca.jpeg';
import { Cproyect } from "./Cproyect";
import "../Style/MyProStyle.css";
import * as pr from "./InfoProyect";
import "aos/dist/aos.css"
import AOS from "aos"

export const MyPro = () => {

  useEffect(() => {
    AOS.init({duration:1500});
  }, [])
  
  return (
    <div className="containerc" >
      <h1 className="myproyect">Mis Proyectos</h1>
     <div className="pro2 d-flex ">
      <div className="conc flex-fill mb-4 mt-4 " data-aos="zoom-in-up">      
      <Cproyect img={logofinal}  but={pr.but} info={pr.textvi} title={pr.titlevi} li={pr.urlvi} ></Cproyect>
      </div>
      <div className="conc flex-fill mb-4 mt-4 " data-aos="zoom-in-up">      
      <Cproyect img={col}  but={pr.but} info={pr.textfrontendjr} title={pr.titlefrontendjr} li={pr.urlfrontendjr} ></Cproyect>
      </div>
    </div>
    <div className="pro2 d-flex ">  
      <div className="conc flex-fill mb-4 mt-4 pb-4" data-aos="zoom-in-up">      
        <Cproyect img={perfile} but={pr.but} info={pr.textperfiles} title={pr.titleperfiles} li={pr.urlperfiles} p={pr.p}></Cproyect>
      </div>
      <div className="conc flex-fill mb-4 mt-4 pb-4" data-aos="zoom-in-up">      
        <Cproyect img={fit} but={pr.but} info={pr.textfit} title={pr.titlefit} li={pr.urlfit} p={pr.p}></Cproyect>
      </div>
    

    </div>
    <div className="pro2 d-flex ">
    <div className="conc flex-fill mb-4 mt-4 pb-4" data-aos="zoom-in-up">      
        <Cproyect img={practicante} but={pr.but} info={pr.textpracticante} title={pr.titlepracticante} li={pr.urlpracticantes} p={pr.p}></Cproyect>
      </div>
      <div className="conc flex-fill mb-4 mt-4 pb-4 " data-aos="zoom-in-up" >
        <Cproyect img={par} info={pr.textp} but={pr.but} title={pr.titlep} li={pr.urlp}></Cproyect>
      </div>
    </div>
    <div className="pro2 d-flex ">
    <div className="conc flex-fill mb-4 mt-4 pb-4" data-aos="zoom-in-up">      
        <Cproyect img={imgapi} but={pr.but} info={pr.textapi} title={pr.titleapi} li={pr.urlapi} p={pr.p}></Cproyect>
      </div>
      <div className="conc flex-fill mb-4 mt-4 pb-4" data-aos="zoom-in-up">      
        <Cproyect img={marca} but={pr.but} info={pr.textia} title={pr.titleia} li={pr.urlia} p={pr.p}></Cproyect>
      </div>
    </div>
</div>
  
    
  );
};
