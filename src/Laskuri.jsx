import './App.css'
import React, {useState} from 'react'

const Laskuri = (props) => {
// Komponentin tila eli state on nimeltään luku ja setLuku on
// funktio jolla voidaan asettaa ko. luku niminen state
const [luku, setLuku] = useState(0)
const [showLaskuri, setShowLaskuri] = useState(false)


  return (
    <div className="App">

        {!showLaskuri && <button onClick={() => setShowLaskuri(true)  }>Näytä laskuri</button>}
        {showLaskuri && <button onClick={() => setShowLaskuri(false)  }>Piilota laskuri</button>}


{ showLaskuri &&
        <>
          <h2>Laskuri</h2>
          <h3>{luku}</h3>
          <button onClick={() => setLuku(0)}>Reset</button>
          <button onClick={() => setLuku(luku + 100)}>+100</button>
          <button onClick={() => setLuku(luku + 1)}>+</button>
          <button onClick={() => setLuku(luku - 1)}>-</button>
          <button onClick={() => setLuku(luku - 100)}>-100</button>
          <p>{props.ohje}</p>
        </>
}

    </div>
  )
}

export default Laskuri