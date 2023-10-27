import React, { useState, useEffect } from 'react';
import pokemonData from '../utils/pokemonAPI';
import '../styles/pokemonCard.css';

const PokemonCard = ({ data, myKey }) => {
  const [loading, setLoading] = useState(true);
  const [listData, setListData] = useState([]);

  useEffect(() => {
    const pikachuData = async () => {
      const resultData = await pokemonData(data);
      return resultData;
    }

    const result = pikachuData()
    .then(res => {
      setLoading(false);
      setListData(res.data);
      console.log(res.data);
    })
    .catch(console.error);
  },[]);

  const pokemonSpriteChange = () => {
    const pkmImgSrc = document.getElementById(`${data}-img-pkm`);
    const pkmKey = document.getElementById(data).id;

    if(pkmImgSrc.src === listData.sprites.front_default && pkmKey === data) {
      pkmImgSrc.src = listData.sprites.back_default;
    }
    else {
      pkmImgSrc.src = listData.sprites.front_default;
    }
  }

  return (
    loading ? <p>...</p> :(
    <div className="container pkm-card-body" index={myKey} id={data}>
      <div className="card">
        <div className="card-content">
          <div className='pkm-img-container'>
            <img id={`${data}-img-pkm`} className='pkm-img' onClick={pokemonSpriteChange} src={listData ? listData.sprites.front_default : ''} alt='pkm' />
          </div>
          <div className="media">
            <div className="media-content">
              <p className="title is-4 text-camel-case">{listData.name}</p>
              <p className="subtitle is-6 text-camel-case">{listData.types[0].type.name}</p>
            </div>
          </div>
          <div className="content">
            <br/>
            <div className="level">
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Height</p>
                  <p className="heading">{listData.height}</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Weight</p>
                  <p className="heading">{listData.weight}</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Abilities</p>
                  <p className="heading">{listData.abilities[0].ability.name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  );
}

export default PokemonCard;