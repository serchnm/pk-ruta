import './App.css';
import 'bulma/css/bulma.css';
import PokemonCard from './components/pokemonCard';
import PokemonHeader from './components/pokemonHeader';
import Menu from './components/menu';

function App() {
  const pokemonList = ['pikachu', 'charmander', 'squirtle', 'snorlax', 'alakazam'];

  const pokemonObject = pokemonList.map((data, index) => {
    return <PokemonCard data={data} index={index} myKey={index} />;
  })

  return (
    <div className="App App-background">
      <PokemonHeader />
      <div className='columns'>
        <div className='column is-one-fifth'><Menu /></div>
        <div className='column is-three-fifths'>{pokemonObject}</div>
      </div>
    </div>
  );
}

export default App;
