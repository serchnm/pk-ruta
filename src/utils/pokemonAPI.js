import axios from 'axios';

const pokemonData = async () => {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon/pikachu');
  return response;
}

export default pokemonData;