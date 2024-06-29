import React, { useEffect }from 'react'
import { ApiForm } from './ApiForm'
import { ApiList } from './ApiList'
import '../Style/ApiStyle.css'
import "aos/dist/aos.css"
import AOS from "aos"

export const Api = () => {
  useEffect(() => {
    AOS.init({duration:1500});
  }, [])
  return (
    <div className='containep'> 
      
      <div className='form mt-4 pt-4 ' data-aos="zoom-in-up">
            <div className='titlea'> 
              <h1 className="agregar">Agregar usuario </h1>
            </div>
          
          <ApiForm/>
        </div>
        <div data-aos="zoom-in-up">
          <ApiList/>
        </div>
          
    </div>
  )
}