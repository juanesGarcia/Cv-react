import React from 'react'
import {useContext} from 'react'
import {TaskContext} from "../context/TaskContext";

export const UserCard = ({user}) => {
    const {deleteUser} = useContext(TaskContext);
  return (
    <>
     <tr key={user.id}>
                  <th scope={user.id}>{user.id}</th>
                  <th>{user.name}</th>
                  <td>{user.address.city}</td>
                  <td> 
                    <button type="button" className="btn btn-dark mt-3 mb-3"onClick={()=>deleteUser(user.id)}> eliminar </button>
                  </td>
                 
                </tr>
    </>
  )
}
