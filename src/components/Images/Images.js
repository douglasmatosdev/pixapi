import React from 'react'
import './Images.css'
import ImageCard from './ImageCard'

function Images(props) {
  return (
    <div className="images-list">
      {props.images.map(i => (
        <ImageCard key={i.id} image={i} />
      ))}
    </div>
  )
}

export default Images