import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDogPictures } from '../../redux/action-creators/getDogPictures';
import { DogCard } from '../dog-card';
import { parseDogInfo, generateName } from '../../utils';

export const DogViewGeneral = () => {
  const dispatch = useDispatch();
  const appState = useSelector((state) => state.appState);

  useEffect(() => {
    appState.dogPics.length < 1 ? dispatch(getDogPictures()) : null;
  }, []);

  return (
    <div>
      {appState.dogPics.map((dogPicUrl, index) => {
        const { dogBreed, dogUrl } = parseDogInfo(dogPicUrl);
        return (
          <DogCard
            key={index}
            dogBreed={dogBreed}
            dogName={generateName()}
            imgUrl={dogUrl}
          />
        );
      })}
    </div>
  );
};
