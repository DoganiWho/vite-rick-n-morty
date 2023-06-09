import React, {useState, useEffect, useContext} from 'react'
import '../styles/Pages.css'
// import './HomePage.css'
import axios from 'axios'
import CharacterCard from '../components/CharacterCard'
import Search from '../components/Search'
import { ThemeContext } from '../context/ThemeContext'

function HomePage() {

  //use global state for darkMode
  //NOTE {} not []
  const {darkMode, setDarkMode} = useContext(ThemeContext)

    const [characters, setCharacters] = useState([])

    //https://rickandmortyapi.com/api/character
    useEffect(
        ()=>{
            console.log('homepage loaded')
            axios.get("https://rickandmortyapi.com/api/character")
            .then(res =>{
                console.log(res.data.results)
                setCharacters(res.data.results)
            })
            .catch(err => console.log(err))
        }, []
    )
    


  return (
    <div className={darkMode?"home-container home-dark"  :"home-container"}>
        <Search setCharacters={setCharacters} />
        <h1>Main Characters</h1>
        <div className="characters-container">
            {
                characters.map(item=><CharacterCard key={item.id} character={item} />)
                // characters.map(item=><p>{item?.name}</p>)
                
            }
        </div>
    </div>
  )
}

export default HomePage