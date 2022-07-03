import React from 'react'
import { Rating } from 'react-simple-star-rating'

function FavoriteItem({item, removeItem}) {
  return (
    <div className="modal-bottom-FAV">
<div className="modalImg-FAV">
        <img src={item.image} alt="" />
    </div>
    <div className="modal-text-FAV">
        <h3>{item.title}</h3>
        <p>{item.genre.join(", ")}</p>
        <Rating ratingValue={item.rating * 10} size={18} readonly={true} className="rating"/>
        
        <p>{item.duration}</p>
        <button onClick={() => removeItem()}>REMOVE </button>
    </div>
    </div>
  )
}

export default FavoriteItem