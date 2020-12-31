import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { dogBreeds } from '../../constants';
import { getDogsByBreed } from '../../redux/action-creators/getDogsByBreed';
import './dogsByBreed.styl';

export const DogsByBreed = () => {
  const dispatch = useDispatch();
  const [optionSelected, setOptionSelected] = useState('affenpinscher');

  return (
    <div>
      <div className='search-title'>
        <h1>Dog Breeds that you may like!</h1>
      </div>
      <div className='form-container'>
        <select
          onChange={(e) => setOptionSelected(e.target.value)}
          id='dog-selector'
          name='dog-selector'
        >
          {dogBreeds.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
        <button
          onClick={() => dispatch(getDogsByBreed(optionSelected))}
          type='button'
          className='search-button'
        >
          Get Lucky! 🐕
        </button>
      </div>
    </div>
  );
};
