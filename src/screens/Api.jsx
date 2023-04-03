import React from 'react'
import { ApiForm } from './ApiForm'
import { ApiList } from './ApiList'
import '../Style/ApiStyle.css'

export const Api = () => {
  
  return (
    <div className='containep'> 
      
      <div className='form mt-4 pt-4 me-4'>
          <h1 className="m-4">agregar usuario </h1>
          <ApiForm/>
        </div>
          <ApiList/>
    </div>
  )
}
