import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import SearchFilter from './components/SearchFilter';
import Toggle from './components/Toggle';

function App() {

  
  return (
    <>
      <Navbar />
      <MainPage />
      <SearchFilter />
      <Toggle />
    </>
  )
}

export default App
