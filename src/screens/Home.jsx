import React from "react";
import { MyPro } from "./MyPro";
import '../Style/Home.css'

export const Home = () => {
  return (
    <div className="containermain">
     
      <div className="pro" id="pro"> 
         <MyPro></MyPro>
      </div>
      
     
    </div>
  );
};
