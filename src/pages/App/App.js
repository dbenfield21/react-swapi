import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom'
import NavBar from "../../components/NavBar/NavBar"
import Starships from '../Starships/Starships';
import StarshipsPage from '../StarshipsPage/StarshipsPage';

import './App.css';

function App() {
  const navTitle = "Starwars Starships"
  return (
  <>

    <NavBar navTitle={navTitle}/>
    <Routes>
      <Route path="/" element={<Starships/>}/>
      <Route path="/starship/:id" element={<StarshipsPage/>}/>
    </Routes>  

  </>
  
  );
}


export default App;
