import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { DogCard } from '../dog-card';
import './manageDogsComp.styl';

const GridCards = ({ filterDogs, dogToSearch }) => {
  const { managedDogs } = useSelector((state) => state.appState);

  const dogFilteredInfo = managedDogs.filter((item) => {
    return item.dogName === dogToSearch;
  });

  return (
    <div className={managedDogs.length > 0 ? 'cards-grid' : undefined}>
      {managedDogs.length > 0 ? (
        filterDogs ? (
          dogFilteredInfo.map((item, index) => {
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
          })
        ) : (
          managedDogs.map((item, index) => {
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
          })
        )
      ) : (
        <div className='no-dogs-message-container'>
          <p className='no-dogs-message'>
            looks like you don't have dogs to manage yet
          </p>
        </div>
      )}
    </div>
  );
};

export const ManageDogsComp = () => {
  const [dogSearch, setDogSeach] = useState('');

  return (
    <div>
      <div className='container'>
        <div>
          <p className='search-title'>Serach your dogs!</p>
          <br />
          <input
            type='text'
            className='dog-search-field'
            placeholder='Dog Name...'
            onChange={(e) => setDogSeach(e.target.value)}
          />
        </div>
      </div>
      {dogSearch.length > 0 ? (
        <GridCards filterDogs dogToSearch={dogSearch} />
      ) : (
        <GridCards />
      )}
    </div>
  );
};
