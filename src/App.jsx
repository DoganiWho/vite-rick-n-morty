import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import FavoritesContextProvider from './context/FavoritesContext'
import ThemeContextProvider from './context/ThemeContext'
import About from './pages/About'
import CharacterDetails from './pages/Characters'
import Episodes from './pages/Episodes'
import Favorites from './pages/Favorites'
import HomePage from './pages/Home'



function App() {
 

  return (
    
      <BrowserRouter>
      <ThemeContextProvider>
        <FavoritesContextProvider>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/episodes' element={<Episodes />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/details/:characterId' element={<CharacterDetails />} />
        </Routes>
        
        <Footer />
        </FavoritesContextProvider>
        </ThemeContextProvider>
      </BrowserRouter>
    
  )
}

export default App