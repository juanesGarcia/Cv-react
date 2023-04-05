import React from "react";
import par from '../img/parqueadero.jpg'
import fit from '../img/fit.jpg';
import imgapi from '../img/api.png';
import videos from '../img/images.jpg';
import { Cproyect } from "./Cproyect";
import "../Style/MyProStyle.css";
import * as pr from "./InfoProyect";

export const MyPro = () => {
  return (
    <div className="containerc" >
     <div className="pro2 d-flex ">
      <div className="conc flex-fill mb-4 mt-4 ">      
        <Cproyect img={par} info={pr.textp} but={pr.but} title={pr.titlep} li={pr.urlp}></Cproyect>
      </div>
      <div className="conc flex-fill mb-4 mt-4 ">
        <Cproyect  img={fit} info={pr.textfit} but={pr.but} title={pr.titlefit} li={pr.urlfit}></Cproyect>
      </div>
    </div>
    <div className="pro2 d-flex ">
      <div className="conc flex-fill mb-4 mt-4 pb-4">      
        <Cproyect img={imgapi} but={pr.but} info={pr.textapi} title={pr.titleapi} li={pr.urlapi} p={pr.p}></Cproyect>
      </div>
      <div className="conc flex-fill mb-4 mt-4 pb-4 ">
        <Cproyect img={videos}  but={pr.but} info={pr.textvi} title={pr.titlevi} li={pr.urlvi}></Cproyect>
      </div>
    </div>
    </div>
  
    
  );
};
