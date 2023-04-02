import React from "react";
import { CarouselHome } from "./CarouselHome";
import { MyPro } from "./MyPro";
import '../Style/Home.css'

export const Home = () => {
  return (
    <>
      <div className="carousel">
          <CarouselHome></CarouselHome>
      </div>
      <div className="pro"> 
          <h1 className="titlep d-flex justify-content-center pt-4 mb-4">My Proyects</h1>
         <MyPro></MyPro>
      </div>
      
     
    </>
  );
};
