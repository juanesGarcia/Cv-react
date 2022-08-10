
import React from 'react'
import { useState, useEffect } from "react";
import * as Apis from "./FunApi";
import imt from "../img/tareas.png";

//chakra para trabajar con componentes como heading o cards para ue sea mas sencillo 

export const Api=()=>{
    const [Api, setApi] = useState([]);
 
    useEffect(() => {
      Apis.getTask().then(setApi);
    }, []);
  return (
    <div>
      <img src={imt}/>
        <h1 className='ps-4 pt-5'>lista de tareas</h1>
        <ul className='m-4'>
          {Api.map((task)=>(
            <li key={task.id} className="mb-2">
              {task.title}
            </li>
          ))}
        
  </ul>
    </div>
  )
}
