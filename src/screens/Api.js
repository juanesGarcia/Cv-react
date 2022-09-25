import React from 'react'
import { ApiForm } from './ApiForm'
import { ApiList } from './ApiList'


export const Api = () => {
  



  return (
    <div> 
      
        <div className='ms-4 me-4 mt-4 pt-4'>
          <h1 className="m-4">agregar usuario </h1>
          <ApiForm/>
        </div>
      
      <ApiList/>
      
    </div>
  )
}
