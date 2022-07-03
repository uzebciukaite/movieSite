import React from 'react'
import FavoriteItem from "./FavoriteItem"

function FavoriteList({setFavModal, getFavorites, getFavModal, setFavorites}) {

function removeItem(index) {
        const newFavList = getFavorites.filter((x, i) => i !== index)
        setFavorites(newFavList)
    }

  return (
    <div style={{display: getFavModal? "flex" : "none"}} className="modal">

  <div className="modal-content-FAV">
      <span onClick={() => setFavModal(false)} className="close">&times;</span>
      <div className="genrelist">
    <p>Animacijos: {getFavorites.filter(x => x.genre.includes("Animaciniai")).length}</p>
    <p>Siaubo: {getFavorites.filter(x => x.genre.includes("Siaubo")).length}</p>
    <p>Romantiniai: {getFavorites.filter(x => x.genre.includes("Romantiniai")).length}</p>
    <p>Veiksmo: {getFavorites.filter(x => x.genre.includes("Veiksmo")).length}</p>
    <p>Fantastiniai: {getFavorites.filter(x => x.genre.includes("Trileriai")).length}</p>
</div>
    <div className="fav-cont">
{getFavorites.map((x,i) => <FavoriteItem 
    item={x} 
    key={i} 
    removeItem={() => removeItem(i)}
    />
    

)}
    </div>
    
    
  </div>
  </div>
  )
}

export default FavoriteList