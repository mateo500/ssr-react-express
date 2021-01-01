import React from 'react';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { DogCard } from '../../../components/dog-card';
import { ReduxWrapperMock } from '../utils/ReduxWrapper.mock';

const mockStore = configureStore([]);
const store = mockStore({
  appState: 'appstate',
});

describe('Test dog card component in show mode', () => {
  render(
    <ReduxWrapperMock store={store}>
      <DogCard
        activeButtons
        dogBreed='labrador'
        imgUrl='https://images.dog.ceo/breeds/kuvasz/n02104029_2150.jpg'
        dogName='martin'
      />
    </ReduxWrapperMock>
  );

  it('expect dog breed to renders in component', () => {
    const dogBreedInComponent = screen.getByText(/labrador/i);
    expect(dogBreedInComponent).toBeInTheDocument();
  });

  it('expect like button to renders in component', () => {
    const likeButtonText = screen.getByText(/Like Doggy/i);
    expect(likeButtonText).toBeInTheDocument();
  });

  it('expect save dog button to renders in component', () => {
    const saveDogButtonText = screen.getByText(/Save Doggy/i);
    expect(saveDogButtonText).toBeInTheDocument();
  });

  it('expect alt img to renders in component', () => {
    const altImgButtonText = screen.getByAltText(/dog-random-pic/i);
    expect(altImgButtonText).toBeInTheDocument();
  });
});
