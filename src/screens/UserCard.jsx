import React from 'react'
import {useContext} from 'react'
import {TaskContext} from "../context/TaskContext";


export const UserCard = ({user}) => {
    const {deleteUser,ModificarUser} = useContext(TaskContext);
  return (
    <>
                <tr key={user.id}>
                  <th scope={user.id}>{user.id}</th>
                  <th>{user.name}</th>
                  <th>{user.address.city}</th>
                  <th> 
                    <button type="button" className="btn btn-dark mt-3 mb-3"onClick={()=>deleteUser(user.id)}>eliminar </button>
                    <button type="button" className="btn btn-dark mt-3 mb-3 ms-4" onClick={()=>ModificarUser(user)}>modificar</button>
                  </th>
                 
                </tr>
    </>
  )
}
