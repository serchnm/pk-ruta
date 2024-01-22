import './App.css';
import 'bulma/css/bulma.css';
import PokemonCard from './components/pokemonCard';
import PokemonHeader from './components/pokemonHeader';
import Menu from './components/menu';
// import Route from './components/route';
import PokedexView from './views/pokedex';
import { createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom';

function App() {
  const pokemonList = ['pikachu', 'charmander', 'squirtle', 'snorlax', 'alakazam'];

  const pokemonObject = pokemonList.map((data, index) => {
    return <PokemonCard data={data} key={index} myKey={index} />;
  });

  const router = createBrowserRouter([
    {
      path: '/pk-ruta/build',
      element: pokemonObject
    },
    {
      path: '/pk-ruta/pokedex/build',
      element: <PokedexView/>
    }
  ])

  return (
    <div className="App App-background">
      <PokemonHeader key="headerComponent" />
      <div className='columns'>
        <div className='column is-one-fifth'><Menu key="menuComponent" /></div>
        <div className='column is-three-fifths'>
          {/* <Route path="/pk-ruta/pokedex/build"><PokedexView/></Route>
          <Route path="/pk-ruta/build">{pokemonObject}</Route> */}
          <Routes>
            <Route path="/pk-ruta/build"  element={pokemonObject} />
            <Route path="/pk-ruta/pokedex/build"  element={<PokedexView/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
