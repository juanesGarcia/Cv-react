import React from "react";
import { useState } from "react";

export const ApiForm = ({createUser}) => {

    const [user,setUser]= useState();
    const [city,setCity]= useState();

    const handlesubmit =(e)  => { 
        e.preventDefault();
        console.log(user);
      
        createUser(user,city);
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
            placeholder=""
            onChange={(e)=>{
            setUser(e.target.value);
            }}
          />
        </div>
        <div className="m-4">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Cuidad:
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={(e) => {
                setCity(e.target.value);
            }}
          ></textarea>

        </div>
        <button type="submit" className="btn btn-dark m-4">Submit</button>
      </form>
    </div>
  );
};
