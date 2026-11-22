import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import Favorites from './pages/Favorites'
import Navbar from './components/Navbar'

// import 

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/movies" element={<Movies/>} />
      <Route path="/movies/:id" element={<MovieDetails/>} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
    
    
    </BrowserRouter>
  )
}

export default App