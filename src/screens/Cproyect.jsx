import React from 'react'
import '../Style/CproyectStyle.css'

export const Cproyect = ({...props}) => {
  
  return (
    <>
        <div className="card " >
        <div className="row g-0">
          <div className="imgc col-md-4">
            <img src={props.img} className="imgp img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8" >
            <div className="card-body ">
              <h5 className="fo card-title">{props.title}</h5>
              <p className="card-text" id={props.p}>
               {props.info}
              </p>
              <div className="text-center" id={props.p}>
              <a href={props.li} className="btn btn-secondary ">{props.but}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
