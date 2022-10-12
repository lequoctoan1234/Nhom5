import React from "react"
import "./heading.css"

const Heading = ({ id, title }) => {
  return (
    <>
      <div className='heading' key={id}>
        <h6>{title}</h6>
      </div>
    </>
  )
}

export default Heading
