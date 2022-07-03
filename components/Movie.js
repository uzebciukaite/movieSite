import React from 'react'
import { Rating } from 'react-simple-star-rating'

function Movie({item, setModal, setModalItem}) {
  

function showModal(){
  
setModal(true)
const modalItem= {
  image: item.image,
  title: item.titleLtu,
  genre: item.genre,
  rating: item.imdbRating,
  duration: item.duration,
  description: item.description

}
setModalItem(modalItem)
}


 
  return (
    <div onClick={showModal} className="box">
        <img src={item.image} alt="" />
        <h3>{item.titleLtu}</h3>
        <p>{item.genre.join(", ")}</p>
        <Rating ratingValue={item.imdbRating * 10} size={18}  readonly={true} className="rating"/>
        
        <p>{item.duration}</p>
    </div>
  )
}

export default Movie