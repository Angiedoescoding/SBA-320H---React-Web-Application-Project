import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import SearchFilter from './components/SearchFilter';
import Toggle from './components/Toggle';
import NotFound from './components/NotFound';
import FavoritesList from "./components/FavoritesList";


function App() {
    // to track the list of favorite items
  const [favorites, setFavorites] = useState([]);

  return (
    <>
      <Navbar favorites={favorites} />
        <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/favorites' element={<FavoritesList favorites={favorites} setFavorites={setFavorites} />} />
        <Route path='*' element={<NotFound />} />
        </Routes>
      <SearchFilter />
      <Toggle />
    </>
  )
}

export default App
