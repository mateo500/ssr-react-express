import React from 'react';
import { useSelector } from 'react-redux';
import { DogCard } from '../components/dog-card/DogCard';
import './style/globals.styl';

export const ManageDogs = () => {
  const { managedDogs } = useSelector((state) => state.appState);

  return (
    <div className='cards-grid'>
      {managedDogs.map((item, index) => {
        return (
          <DogCard
            key={index}
            dogBreed={item.dogBreed}
            dogName={item.dogName}
            imgUrl={item.imgUrl}
            dogId={item.dogId}
            likesSaved={item.likes}
            isEditable
          />
        );
      })}
    </div>
  );
};
