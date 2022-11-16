import React, {useState, useEffect} from 'react'
import './App.css'
import GameService from './services/Games'
import Game from './Game'
import AddGame from './AddGame'

const GameList = () => {

const [games, setGames] = useState([])
const [showGames, setShowGames] = useState(false)
// Tämä state määrittää näytetäänkö lisäyslomake
const [lisäystila, setLisäystila] = useState(false)
// Tällä statella saadaan aikaan uusi datanhaku halutessa
const [reload, setReload] = useState(false)
// State hakutermiä varten
const [search, setSearch] = useState("")

// useEffect ajetaan aina kun komponentti latautuu ekan kerran
// Tai kun joku 2. parametrina oleva state muuttuu (reload meillä)
useEffect(() => {
    GameService.getAll()
    .then(res => setGames(res.data))    
}
    ,[reload])

    // Returnin sisällä on kaikki se html (tai jsx oikeammin)
    // minkä komponentti palauttaa näyttöruudulle
return(
    <>
        <h2 onClick={() => setShowGames(!showGames)}>Games</h2>

        { !lisäystila &&
        <button onClick={() => {setLisäystila(true)}}>Add new game</button>
        }

        <input type="text" placeholder='Search by name...' 
        value={search} onChange={({target}) => setSearch(target.value)}
        />

        {
            lisäystila && <AddGame reload={reload} setReload={setReload}
            setLisäystila={setLisäystila} />
        }


        {games.length < 1 && <h2 style={{color: 'red'}}>Ladataan...</h2>}

        {showGames && games && games.map(g => {
            const lowerCaseName = g.nimi.toLowerCase()
            if (lowerCaseName.indexOf(search.toLowerCase()) > -1) {
                return(
                     <Game key={g.peliId} game={g} reload={reload} setReload={setReload} />
                )
            }
            })
        }
    </>
)

}

export default GameList