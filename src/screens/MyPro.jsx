import React from "react";
import par from '../img/parqueadero.jpg'
import fit from '../img/fit.jpg';
import imgapi from '../img/api.png';
import videos from '../img/videosfera.png';
import { Cproyect } from "./Cproyect";
import "../Style/MyProStyle.css";
import * as pr from "./InfoProyect";

export const MyPro = () => {

  return (
    <>
     <div className="pro d-flex ">
      <div class="p-2 flex-fill mt-4 mb-4 ">      
        <Cproyect img={par} info={pr.textp} but={pr.but} title={pr.titlep} li={pr.urlp}></Cproyect>
      </div>
      <div class="p-2 flex-fill mt-4 mb-4 me-4">
        <Cproyect  img={fit} info={pr.textp} but={pr.but} title={pr.titlefit} li={pr.urlfit}></Cproyect>
      </div>
    </div>
    <div className="pro d-flex ">
      <div class="p-2 flex-fill mt-4 mb-4 mb-4 ">      
        <Cproyect img={imgapi} but={pr.but} info={pr.textp} title={pr.titleapi} li={pr.urlapi}></Cproyect>
      </div>
      <div class="p-2 flex-fill mt-4 mb-4 mb-4 me-4">
        <Cproyect img={videos}  but={pr.but} info={pr.textp} title={pr.titlevi} li={pr.urlvi}></Cproyect>
      </div>
    </div>
    </>
  
    
  );
};
