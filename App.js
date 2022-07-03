import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import movies from "./assets/movies.json"
import FavoriteList from './components/FavoriteList';
import Modal from './components/Modal';
import Movie from "./components/Movie"
function App() {

 const movielist = movies.slice(0, 60)
 const [getModal, setModal] = useState(false)
 const [getFavModal, setFavModal] = useState(false)
 const [addedtoFav, setaddedtoFav] = useState(false)
const [getModalItem, setModalItem] = useState({})
const [getFavorites, setFavorites] = useState([])


 
  return (

<div className="App"> 
<button onClick={() => setFavModal(true)}>SEE FAVORITES ({getFavorites.length}) </button>
<div className="cont">
{movielist.map((x, i) => <Movie 
item={x} 
index={i} 
key={i}
setModal={setModal}
setModalItem={setModalItem}

/>)}
</div>
<Modal
getModal={getModal}
setModal={setModal}
getModalItem={getModalItem}
getFavorites={getFavorites}
setFavorites={setFavorites}
addedtoFav={addedtoFav} 
setaddedtoFav={setaddedtoFav}

/>
<FavoriteList 
setFavModal={setFavModal} 
getFavModal={getFavModal}
getFavorites={getFavorites} 
setFavorites={setFavorites}
/>



</div>


    
  );
}

export default App;
