import React from 'react'
import {useContext} from 'react'
import {TaskContext} from "../context/TaskContext";
import { ApiCard} from './ApiCard';


export const ApiL = () => {
    const {Api} = useContext(TaskContext);

    if(Api.lenght === 0) {
        return <h1>Array vacio</h1>
    }
  return (
    <>
    <h1 className=" pt-5">
       
          lista de tareas
        </h1>
        <div className="">
          <table className="table ">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Task</th>
                <th scope="col">Complited</th>
              </tr>
            </thead>
            <tbody>
              {Api.map((task) => (
                <ApiCard key={task.id} task={task}></ApiCard>
              ))}
            </tbody>
          </table>
        </div>
        
    </>
  )
}
