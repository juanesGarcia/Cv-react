import React from "react";
import cod from "../img/cod.jpg";
import { Cproyect } from "./Cproyect";
import "../Style/MyProStyle.css";
export const MyPro = () => {
  return (
    <>
     <div className="pro d-flex ">
      <div class="p-2 flex-fill mt-4 mb-4 me-4 ms-4">      
        <Cproyect img={cod}></Cproyect>
      </div>
      <div class="p-2 flex-fill mt-4 mb-4 me-4 ms-4">
        <Cproyect img={cod}></Cproyect>
      </div>
    </div>
    <div className="pro d-flex ">
      <div class="p-2 flex-fill mt-4 mb-4 mb-4 me-4 ms-4">      
        <Cproyect img={cod}></Cproyect>
      </div>
      <div class="p-2 flex-fill mt-4 mb-4 mb-4 me-4 ms-4">
        <Cproyect img={cod}></Cproyect>
      </div>
    </div>
    </>
  
    
  );
};
