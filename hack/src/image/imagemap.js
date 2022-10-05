import React from 'react'
import "./image.css"

function ImageMap({val:{im}}) {
  return (
    <div>
         <img className="popo" src={require(`./${im}`)} alt="load"/>
    </div>
   
  )
}

export default ImageMap