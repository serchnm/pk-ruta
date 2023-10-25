import axios from 'axios';

const pokemonData = async (data) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${data}`);
  return response;
}

export default pokemonData;