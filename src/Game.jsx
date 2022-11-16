import React, {useState} from 'react'
import './App.css'
import GameService from './services/Games'

const Game = (props) => {

// Tila eli state
const [showDetails, setShowDetails] = useState(false)


// Deleten tapahtumankäsittelijäfunktio
const removeGame = (game) => {
    let vahvistus = window.confirm(`Haluatko poistaa pelin: ${game.nimi}`)
    if (vahvistus === false) {
        alert("Poistaminen peruutettu onnistuneesti.")
    }
    if (vahvistus === true) {
        GameService.remove(game.peliId)
        .then(res => alert(res.data))
        .catch(error => alert(error.message))
        
        // Odotetaan sekunti ja sitten päivitetään tietokannasta uusi tilanne
       setTimeout(() => {
            props.setReload(!props.reload)
       }, 1000)
    }
}


return(
    <div className='game'>

        <h3 onClick={() => setShowDetails(!showDetails)} >{props.game.nimi}</h3>
        
        {
            showDetails && 
            <>
            <button>Edit</button>
            <button onClick={() => removeGame(props.game)}>Delete</button>

            <table>
                <thead>
                    <tr>
                        <th>Tekijä</th>
                        <th>GenreID</th>
                        <th>Julkaisuvuosi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.game.tekijä}</td>
                        <td>{props.game.genreId}</td>
                        <td>{props.game.julkaisuvuosi}</td>
                    </tr>
                </tbody>

            </table>
            </>
        }
    </div>

)

}

export default Game