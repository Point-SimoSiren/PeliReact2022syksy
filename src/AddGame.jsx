import './App.css'
import React, {useState} from 'react'
import GameService from './services/Games'

// Tätä komponenttia käytetään uuden pelin lisäämiseen
const AddGame = (props) => {

// Statet pitää reaaliaikaista kirjaa input kenttien sisällöstä
const [newNimi, setNewNimi] = useState("")
const [newGenreId, setNewGenreId] = useState(1)
const [newJulkaisuvuosi, setNewJulkaisuvuosi] = useState(1970)
const [newTekijä, setNewTekijä] = useState("")

// Lomakkeen submitointi tapahtumankäsittelijä (lähetys)
const submitted = (event) => {
    event.preventDefault()

    let newGame = {
        nimi: newNimi,
        genreId: newGenreId,
        julkaisuvuosi: parseInt(newJulkaisuvuosi),
        tekijä: newTekijä
    }
    // Debuggausta varten console.log()
    // console.log(newGame)

    GameService.addNew(newGame)
    .then(res => alert(res.data))
    .catch(error => alert(error.message))

 // Piilotetaan lisäyslomake lisäyksen jälkeen
    props.setLisäystila(false)

    // Haetaan päivitetty tilanne tietokannasta lisäyksen jälkeen
    setTimeout(() => {
        props.setReload(!props.reload)
    }, 1000);
    
}

return(
    <div className="add-page">
        <h2>Add new Game</h2>

        <form onSubmit={submitted}>
            <input type="text" placeholder="Name.." value={newNimi} 
            onChange={({target}) => setNewNimi(target.value) } />

            <input type="number" placeholder="Genre ID.." value={newGenreId} 
            onChange={({target}) => setNewGenreId(target.value) } />

            <input type="number" placeholder="Julkaisuvuosi.." value={newJulkaisuvuosi} 
            onChange={({target}) => setNewJulkaisuvuosi(target.value) } />

            <input type="text" placeholder="Tekijä.." value={newTekijä}
            onChange={({target}) => setNewTekijä(target.value) } />
            <br/>
            <input type="submit" value="Save" />

            <button onClick={() => props.setLisäystila(false)}>Back</button>
            
        </form>

    </div>
)

}

export default AddGame