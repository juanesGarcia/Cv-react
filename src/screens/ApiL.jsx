import React ,{useEffect}from 'react'
import {useContext} from 'react'
import {TaskContext} from "../context/TaskContext";
import { ApiCard} from './ApiCard';
import '../Style/TablesS.css'
import "aos/dist/aos.css"
import AOS from "aos"

export const ApiL = () => {
    const {Api} = useContext(TaskContext);
    useEffect(() => {
      AOS.init({duration:1500});
    }, [])
    if(Api.lenght === 0) {
        return <h1>Array vacio</h1>
    }
  return (
    <>
    <h1 className=" pt-5  pb-4 text-center" data-aos="zoom-in-up">
       
          Lista de tareas
        </h1>
        <div className="tl" data-aos="zoom-in-up">
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
