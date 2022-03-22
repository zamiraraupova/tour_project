import React from 'react'
import Style from './Style.css'

const Card = ( {item} ) => {
            //  ^^ this is destructoring props
// const {id, title, image, desc} =item

  return (
    <div className='card-container'>
        <div className='title'> {item.title}</div>
        <img src={item.image} />
        <div className='description'>{item.desc}</div>
    </div>
  )
}

export default Card

