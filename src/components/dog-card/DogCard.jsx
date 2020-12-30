import React from 'react';
import './dogCard.styl';

export const DogCard = ({ dogName, dogBreed, imgUrl }) => {
  return (
    <section>
      <section className='card'>
        <img className='card-image' src={imgUrl} alt='dog-random-pic' />
        <h3>{dogName}</h3>
        <h5 className='card-title'>{dogBreed}</h5>
      </section>
    </section>
  );
};
