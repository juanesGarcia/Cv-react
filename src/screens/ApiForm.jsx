import React, { useContext } from "react";
import { useState } from "react";
import {TaskContext} from "../context/TaskContext";

export const ApiForm = () => {
  const [user, setUser] = useState("");
  const [city, setCity] = useState("");
  const {createUser}= useContext(TaskContext);

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(user);
    
      createUser(user, city);
    
    setCity("");
    setUser("");
  };
  return (
    <div className="mb-4 pb-2 border-bottom border-Dark border- Solid">
      <form onSubmit={handlesubmit}>
        <div className=" m-4">
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
        <div className="ms-4 mp-4 mt-4 me-4">
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
        <button type="submit" className="btn btn-dark m-4">
          Enviar
        </button>
      </form>
    </div>
  );
};
