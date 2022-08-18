import React from 'react'
import { ApiForm } from './ApiForm'
import { ApiList } from './ApiList'
import { useState, useEffect } from "react";
import * as Apis from "./FunApi";
export const Api = () => {
  const [Api, setApi] = useState([]);
    const [User, setUser] = useState([]);
    console.log(User);
    useEffect(() => {
      Apis.getUser().then(setUser);
    }, []);
  
    useEffect(() => {
      Apis.getTask().then(setApi);
    }, []);

    function createUser(users,citys){
      setUser([...User,{
        id:User.length+1,
        name: users,
        address:{
          city:citys
        }
      }]);

    }

  return (
    <div> 
      <h1 className="m-4">agregar usuario </h1>
      <ApiForm createUser={createUser}/>
      <ApiList Api={Api} User={User}/>
      
    </div>
  )
}
