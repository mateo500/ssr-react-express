import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DogCard } from '../components/dog-card';
import { DogsByBreed } from '../components/dogs-by-breed';
import { cleanBreedResults } from '../redux/action-creators/localOps';
import { parseDogInfo } from '../utils';
import './style/globals.styl';

export const DiscoverDogs = () => {
  const dispatch = useDispatch();
  const { dogsByBreed } = useSelector((state) => state.appState);

  useEffect(() => {
    return () => dispatch(cleanBreedResults());
  }, []);

  return (
    <div>
      <DogsByBreed />
      <div className='cards-grid'>
        {dogsByBreed.map((DogPicUrl, index) => {
          const { dogBreed, dogUrl } = parseDogInfo(DogPicUrl);
          return (
            <DogCard
              key={index}
              dogBreed={dogBreed}
              imgUrl={dogUrl}
              activeButtons
              hideLikeButton
            />
          );
        })}
      </div>
    </div>
  );
};
