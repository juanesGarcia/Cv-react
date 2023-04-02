import React from 'react'
import '../Style/CproyectStyle.css'
import { Link } from 'react-router-dom';
export const Cproyect = ({img}) => {
  
  return (
    <>
        <div className="card mb-3 ms-4">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={img} className="imgp img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body ">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <Link to="#" class="btn btn-secondary ">Go somewhere</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
