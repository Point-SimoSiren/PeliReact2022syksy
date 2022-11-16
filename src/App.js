import logo from './logo.svg'
import './App.css'
import Laskuri from './Laskuri'
import Posts from './Posts'
import GameList from './GameList'

const App = () => {
  return (
    <div className="App">
     
     <marquee>
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
      </marquee>

        <GameList />

        <Posts />

        <Laskuri ohje="Painele nappeja niin luku vaihtuu" />
       
        
    </div>
  )
}

export default App

