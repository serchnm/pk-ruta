import './App.css';
import 'bulma/css/bulma.css';
import PokemonCard from './components/pokemonCard';
import PokemonHeader from './components/pokemonHeader';

function App() {
  const pokemonList = ['pikachu', 'charmander', 'squirtle', 'snorlax', 'alakazam'];

  const pokemonObject = pokemonList.map((data, index) => {
    return <PokemonCard key={index} data={data} />;
  })

  return (
    <div className="App App-background">
      <PokemonHeader />
      <div>{pokemonObject}</div>
    </div>
  );
}

export default App;
