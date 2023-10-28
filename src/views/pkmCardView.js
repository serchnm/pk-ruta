
import PokemonCard from "../components/pokemonCard";

const PkmViewCard = () => {
  const pokemonList = ['pikachu', 'charmander', 'squirtle', 'snorlax', 'alakazam'];

  const PokemonObject = pokemonList.map((data, index) => {
    return <PokemonCard data={data} key={index} myKey={index} />;
  })
}

export default PkmViewCard;