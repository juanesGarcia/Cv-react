import React from 'react'
import { ApiForm } from './ApiForm'
import { ApiList } from './ApiList'
import '../Style/ApiStyle.css'

export const Api = () => {
  
  return (
    <div className='containep'> 
      
      <div className='form mt-4 pt-4 me-4 '>
            <div className='titlea '> 
              <h1 className="">agregar usuario </h1>
            </div>
          
          <ApiForm/>
        </div>
          <ApiList/>
    </div>
  )
}
