import React, { useState, useEffect } from 'react';
import pokemonData from '../utils/pokemonAPI';
import '../styles/pokemonCard.css';

const PokemonCard = ({ data }) => {
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

  return (
    loading ? <p>...</p> :(
    <div className="container pkm-card-body">
      <div className="card">
        <div className="card-content">
          <div className='pkm-img-container'>
            <img className='pkm-img' src={listData ? listData.sprites.back_default : ''} alt='pkm' />
          </div>
          <div className="media">
            <div className="media-content">
              <p className="title is-4 text-camel-case">{listData.name}</p>
              <p className="subtitle is-6 text-camel-case">{listData.types[0].type.name}</p>
            </div>
          </div>
          <div className="content">
            <br/>
            <div class="level">
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">Height</p>
                  <p class="heading">{listData.height}</p>
                </div>
              </div>
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">Weight</p>
                  <p class="heading">{listData.weight}</p>
                </div>
              </div>
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">Abilities</p>
                  <p class="heading">{listData.abilities[0].ability.name}</p>
                </div>
              </div>
            </div>
       
            {/* <p>{data ? data.data.id : ''}</p> */}
          </div>
        </div>
      </div>
    </div>
    )
  );
}

export default PokemonCard;