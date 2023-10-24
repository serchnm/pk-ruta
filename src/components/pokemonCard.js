import React from 'react';
import '../styles/pokemonCard.css';

const pokemonCard = ({ data }) => {
  // const renderData = data.map((data) => {
  //   return <p>{data}</p>
  // })
  // const renderData = data.data.forEach(element => {
  //   return <p>{element}</p>
    
  // });
  // if(data && data.sprites.back_default) {
  //   dataImg = data.sprites.back_default;
  // }

  return (
    <div className="container pkm-card-body">
      <div className="card">
        <div className="card-content">
          <div className='pkm-img-container'>
            <img className='pkm-img' src={data ? data.data.sprites.back_default : ''} alt='pkm' />
          </div>
          <div className="media">
            <div className="media-content">
              <p className="title is-4">Pikachu</p>
              <p className="subtitle is-6">Electric</p>
            </div>
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris.
            <br/>
            <p>{data ? data.data.id : ''}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default pokemonCard;