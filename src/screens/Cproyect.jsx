import React from 'react'
import '../Style/CproyectStyle.css'

export const Cproyect = ({...props}) => {
  
  return (
    <>
        <div className="card mb-3 ms-4">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={props.img} className="imgp img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body ">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">
               {props.info}
              </p>
              <div class="text-center">
              <a href={props.li} class="btn btn-secondary ">{props.but}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
