import React from 'react'
import { createContext, useState,useEffect } from 'react'
import * as Apis from "../screens/FunApi";
export const TaskContext = createContext()


export function TaskContextProvider(props){
    
    const [User, setUser] = useState([]);
    const [Api, setApi] = useState([]);

  
function createUser(users,citys){
    setUser([...User,{
      id:User.length+1,
      name: users,
      address:{
        city:citys
      }
    }])}


function deleteUser(userid){
    setUser(
        User.filter(user=>user.id!==userid))
   
}

function ModificarUser(newuser,userid){
  setUser(User.map((users) => (users.id === userid ? { ...users, name:newuser.nombre , address:{
    city:newuser.correo
  }} : users))); 
}


    useEffect(() => {
        Apis.getUser().then(setUser);
      }, []);
    
      useEffect(() => {
        Apis.getTask().then(setApi);
      }, []);
     

  return (
    <TaskContext.Provider value={{
        createUser,
        User,
        Api,
        deleteUser,
        ModificarUser
        }}>
        {props.children}
    </TaskContext.Provider>
  )
}
