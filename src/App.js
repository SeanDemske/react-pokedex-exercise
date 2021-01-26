import './App.css';
import Pokedex from "./Pokedex";
import pokemonData from "./data";

function App() {
  return (
    <div className="App">
      <Pokedex pokemon={ pokemonData }/>
    </div>
  );
}

export default App;
