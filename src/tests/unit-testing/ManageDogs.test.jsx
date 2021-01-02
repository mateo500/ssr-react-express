import React from 'react';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { ReduxWrapperMock } from './utils/ReduxWrapper.mock';
import { ManageDogs } from '../../views/ManageDogs';

const mockStore = configureStore([]);
const store = mockStore({
  appState: {
    managedDogs: [
      {
        dogBreed: 'beagle',
        imgUrl: 'https://images.dog.ceo/breeds/beagle/n02088364_10798.jpg',
        likes: 4,
        dogId: 'e1f93fd8-e3eb-4a6c-a100-40248d6ca625',
      },
      {
        dogBreed: 'beagle',
        imgUrl: 'https://images.dog.ceo/breeds/beagle/n02088364_10798.jpg',
        likes: 4,
        dogId: 'e1f93fd8-e3eb-4a6c-a100-40248d6ca625',
      },
      {
        dogBreed: 'beagle',
        imgUrl: 'https://images.dog.ceo/breeds/beagle/n02088364_10798.jpg',
        likes: 4,
        dogId: 'e1f93fd8-e3eb-4a6c-a100-40248d6ca625',
      },
    ],
  },
});

describe('Test manage dogs component', () => {
  render(
    <ReduxWrapperMock store={store}>
      <ManageDogs />
    </ReduxWrapperMock>
  );

  it('expect dog breed to renders in components', () => {
    const dogBreedsInComponent = screen.getAllByText(/beagle/i);
    expect(dogBreedsInComponent.length).toEqual(3);
  });

  it('expect alt img to renders in components', () => {
    const altImgButtonText = screen.getAllByAltText(/dog-random-pic/i);
    expect(altImgButtonText.length).toEqual(3);
  });

  it('expect edit button to renders in component', () => {
    const editButtonText = screen.getAllByText(/Edit/i);
    expect(editButtonText.length).toEqual(3);
  });

  it('expect delete dog button to renders in component', () => {
    const deleteDogButtonText = screen.getAllByText(/delete Doggy😔/i);
    expect(deleteDogButtonText.length).toEqual(3);
  });
});
