import React from 'react'
import {useContext} from 'react'
import {TaskContext} from "../context/TaskContext";
import { UserCard } from './UserCard';

export const UserL = () => {
    const {User} = useContext(TaskContext);
    if(User.length===0){
        return <h1 className='m-4 p-4'>No hay usarios que mostar</h1>
      }
    
  return (
    <div className="table-responsive">
          <h1 className=" pt-5 ">lista de usuarios</h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">User</th>
                <th scope="col">City</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {User.map((user) => (
               <UserCard key={user.id} user={user}></UserCard>
              ))}
            </tbody>
          </table>
     
    </div>
   
  )
}
