// Componente Pai
// Componente Filho
import JSXExamples from "./components/JSXExamples";
import Header from './components/Header';
import PokemonCards from "./components/PokemonCards";

function App() {

  return (
    <>
    <Header/>
    <PokemonCards/>
    </>
  );
}

// É preciso exportar para usar esse também!
export default App;

// Objetivo: criar uma Pokédex, ora pois! 
// Regras: consumir localmente, e usar cache: https://github.com/PokeAPI/pokedex-promise-v2