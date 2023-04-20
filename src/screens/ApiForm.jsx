import React, { useContext } from "react";
import { useState } from "react";
import {TaskContext} from "../context/TaskContext";
import '../Style/ApiFormStyle.css'

export const ApiForm = () => {
  const [user, setUser] = useState("");
  const [city, setCity] = useState("");
  const {createUser}= useContext(TaskContext);

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(user);
    console.log(city);
    
      createUser(user, city);
    
    setCity("");
    setUser("");
  };
  return (
    <div className="mb-4 ms-4 pb-2 border-bottom border-Dark border- Solid">
      <form onSubmit={handlesubmit}>
        <div className="te ">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Digite el nombre de usuario:
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="escribe tu nombre"
            value={user}
            onChange={(e) => {
              setUser(e.target.value ? e.target.value:"");
            }}
            autoFocus
          />
        </div>
        <div className="te mt-4 mb-4">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Cuidad:
          </label>
          <input
            type="text"
            className="form-control "
            id="exampleFormControlTextarea1"
            placeholder="escribe tu cuidad"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          ></input>
        </div>
        <div className="bp">
           <button type="submit" className="but ms-4 btn btn-dark">
          Enviar
        </button>
        </div>
       
      </form>
    </div>
  );
};
