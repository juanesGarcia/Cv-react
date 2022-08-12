import React from "react";
import { useState, useEffect } from "react";
import * as Apis from "./FunApi";
import imt from "../img/tareas.png";

//chakra para trabajar con componentes como heading o cards para ue sea mas sencillo

export const Api = () => {
  const [Api, setApi] = useState([]);
  const [User, setUser] = useState([]);

  useEffect(() => {
    Apis.getUser().then(setUser);
  }, []);

  useEffect(() => {
    Apis.getTask().then(setApi);
  }, []);
  return (
    <div className="pb-4">
      <h1 className="ps-4 pt-5">
        <img src={imt} width={30} className="me-2 ms-4 mb-1" />
        lista de tareas
      </h1>
      <ul className="ms-4 mt-4">
        {Api.map((task) => (
          <li key={task.id} className="mb-2 ms-4">
            {task.title}
            {task.completed ? "✅" : "❌"}
          </li>
        ))}
      </ul>
      <h1 className="ps-4 pt-5 ms-4">lista de usuarios</h1>
      <ul className="ms-4 mt-4">
        {User.map((user) => (
          <li key={user.id} className="mb-2 ms-4 ">
            {user.name}
            <div className="">
              cuidad: {user.address.city}
            </div>
            
          </li>
        ))}
      </ul>
    </div>
  );
};
