import React from 'react';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { DogViewGeneral } from '../../../components/dog-view-general';
import { ReduxWrapperMock } from '../utils/ReduxWrapper.mock';

const mockStore = configureStore([thunk]);
const store = mockStore({
  appState: {
    dogPics: [
      'https://images.dog.ceo/breeds/kuvasz/n02104029_2150.jpg',
      'https://images.dog.ceo/breeds/kuvasz/n02104029_2150.jpg',
      'https://images.dog.ceo/breeds/kuvasz/n02104029_2150.jpg',
    ],
  },
});

describe('Test general index view of dogs', () => {
  render(
    <ReduxWrapperMock store={store}>
      <DogViewGeneral />
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

  it('expect like button to renders in component', () => {
    const likeButtonText = screen.getAllByText(/Like Doggy/i);
    expect(likeButtonText.length).toEqual(3);
  });

  it('expect save dog button to renders in component', () => {
    const saveDogButtonText = screen.getAllByText(/Save Doggy/i);
    expect(saveDogButtonText.length).toEqual(3);
  });
});
