import React from 'react';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { ReduxWrapperMock } from './utils/ReduxWrapper.mock';
import { DiscoverDogs } from '../../views/DiscoverDogs';

const mockStore = configureStore([]);
const store = mockStore({
  appState: {
    dogsByBreed: [
      'https://images.dog.ceo/breeds/kuvasz/n02104029_2150.jpg',
      'https://images.dog.ceo/breeds/kuvasz/n02104029_2150.jpg',
      'https://images.dog.ceo/breeds/kuvasz/n02104029_2150.jpg',
    ],
  },
});

describe('Tests Search dogs by breed component', () => {
  render(
    <ReduxWrapperMock store={store}>
      <DiscoverDogs />
    </ReduxWrapperMock>
  );

  it('expect dog breed to renders in components', () => {
    const dogBreedsInComponent = screen.getAllByText(/kuvasz/i);
    expect(dogBreedsInComponent.length).toEqual(3);
  });

  it('expect alt img to renders in components', () => {
    const altImgButtonText = screen.getAllByAltText(/dog-random-pic/i);
    expect(altImgButtonText.length).toEqual(3);
  });

  it('expect save dog button to renders in component', () => {
    const saveDogButtonText = screen.getAllByText(/Save Doggy/i);
    expect(saveDogButtonText.length).toEqual(3);
  });
});
