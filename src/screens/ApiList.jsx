import React from 'react'

import imt from "../img/tareas.png";


export const ApiList = (props) => {
    
  
    return (
      <div className="pb-4">
        <div className="m-4 ">
          <h1 className="ps-4 pt-5 ms-4">lista de usuarios</h1>
          <table className="table ">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">User</th>
                <th scope="col">City</th>
              </tr>
            </thead>
            <tbody>
              {props.User.map((user) => (
                <tr key={user.id}>
                  <th scope={user.id}>{user.id}</th>
                  <th>{user.name}</th>
                  <td>{user.address.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h1 className="ps-4 pt-5">
          <img src={imt} width={30} className="me-2 ms-4 mb-1" />
          lista de tareas
        </h1>
        <div className="m-4 ">
          <table className="table ">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Task</th>
                <th scope="col">Complited</th>
              </tr>
            </thead>
            <tbody>
              {props.Api.map((task) => (
                <tr key={task.id}>
                  <th scope={task.id}>{task.id}</th>
                  <td >
                    {(task.title)}</td>
                  <th>{task.completed ? "✅" : "❌"}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      </div>
    );
}
