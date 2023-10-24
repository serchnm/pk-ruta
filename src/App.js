import './App.css';
import 'bulma/css/bulma.css';
import PokemonCard from './components/pokemonCard';
import PokemonHeader from './components/pokemonHeader';
import pokemonData from './utils/pokemonAPI';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const result = async () => {
    const resultData = await pokemonData();
    console.log(resultData);
    if(resultData.data != undefined) {
      setLoading(false);
      setData(resultData);
    }
  }

  useEffect(() => {
    result();
  },[])

  return (
    loading ? <p>Loading ...</p> :(
    <div className="App App-background">
      <PokemonHeader />
      <PokemonCard data={data} />
    </div>
    )
  );
}

export default App;
