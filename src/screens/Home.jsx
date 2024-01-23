import React from "react";
import { MyPro } from "./MyPro";
import '../Style/Home.css'

export const Home = () => {
  return (
    <>
     
      <section className="pro" id="pro"> 
          <h1 className="titlep d-flex justify-content-center pt-4 mb-4" >Mis Proyectos</h1>
         <MyPro></MyPro>
      </section>
      
     
    </>
  );
};
