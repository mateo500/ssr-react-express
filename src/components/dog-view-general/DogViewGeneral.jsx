import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDogPictures } from '../../redux/action-creators/getDogPictures';
import { DogCard } from '../dog-card';
import { parseDogInfo, generateName } from '../../utils';
import './dogViewGeneral.styl';

export const DogViewGeneral = () => {
  const dispatch = useDispatch();
  const appState = useSelector((state) => state.appState);

  useEffect(() => {
    dispatch(getDogPictures());
  }, []);

  return (
    <div className='cards-grid'>
      {appState.dogPics.map((dogPicUrl, index) => {
        const { dogBreed, dogUrl } = parseDogInfo(dogPicUrl);
        return (
          <DogCard
            key={index}
            dogBreed={dogBreed}
            imgUrl={dogUrl}
            activeButtons
          />
        );
      })}
    </div>
  );
};
