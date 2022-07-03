import React, { useEffect } from 'react'
import { Rating } from 'react-simple-star-rating'

function Modal({setModal, getModal, getModalItem, getFavorites, setFavorites, addedtoFav, setaddedtoFav}) {


function addToFavorites(){
  const favoriteItem= {
  image: getModalItem.image,
  title: getModalItem.title,
  genre: getModalItem.genre,
  rating: getModalItem.rating,
  duration: getModalItem.duration
}

setFavorites([favoriteItem, ...getFavorites])
setaddedtoFav(true)

}



function closeModal(){
setModal(false)
setaddedtoFav(false)
}

  return (
    <div style={{display: getModal? "flex" : "none"}} id="myModal" className="modal">

  <div className="modal-content">
      <span onClick={closeModal} className="close">&times;</span>
    <div className="modal-bottom">
<div className="modalImg">
        <img src={getModalItem.image} alt="" />
    </div>
    <div className="modal-text">
        <h3>{getModalItem.title}</h3>
        <p>{getModalItem.description}</p>
        <p>{getModalItem.genre}</p>
        <Rating ratingValue={getModalItem.rating * 10} readonly={true} className="rating"/>
        
        <p>{getModalItem.duration}</p>
        <button onClick={addToFavorites} style={{display: addedtoFav? "none" : "flex"}}>ADD TO FAVORITES</button>
        {addedtoFav && <div className="addedtofavDiv">MOVIE HAS BEEN ADDED TO YOUR FAVORITES LIST</div>}
        
    </div>
    </div>
    
    
  </div>
  </div>
  )
}

export default Modal