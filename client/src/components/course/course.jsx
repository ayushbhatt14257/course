import React from 'react'
import { NavLink } from 'react-router-dom'
import './course.css'


const Course = ({ products }) => {
  return (
    <>
      <div className="products_items container">
            {
              products.map((e) => {
                return (
                  <NavLink to={`/getproductsone/${e.id}`}>
                    <div className="row">

                    <div className="col-lg-3 col-md-2 col-sm-1 detailsContainer">
                    <div className="details">
                      <h1>{e.name}</h1>
                      <div className="image">
                        <img src={e.thumbnail} alt="" />
                      </div>
                      <div className="discreption">
                        <p>{e.description}</p>
                      </div>
                      <div className="instructor_time">
                        <p>{e.instructor}</p>
                        <p>{e.duration}</p>
                      </div>
                      <div className="btn">
                        <button>Explore Course</button>
                      </div>
                    </div>

          </div>
          </div>
                  </NavLink>
                )
              })
            }
      </div>
    </>
  )
}

export default Course