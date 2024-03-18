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

  
  return (
    <>
      <Navbar />
        <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/favorites' element={<FavoritesList />} />
        <Route path='*' element={<NotFound />} />
        </Routes>
      <SearchFilter />
      <Toggle />
    </>
  )
}

export default App
