import React from 'react';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { DogCard } from '../../../components/dog-card';
import { ReduxWrapperMock } from '../utils/ReduxWrapper.mock';

const mockStore = configureStore([]);
const store = mockStore({
  appState: 'appstate',
});

describe('Test dog card component in edit mode', () => {
  render(
    <ReduxWrapperMock store={store}>
      <DogCard
        activeButtons
        dogBreed='labrador'
        imgUrl='https://images.dog.ceo/breeds/kuvasz/n02104029_2150.jpg'
        dogName='martin'
        isEditable
        hideLikeButton
        likesSaved={10}
      />
    </ReduxWrapperMock>
  );

  it('expect dog breed to renders in component', () => {
    const dogBreedInComponent = screen.getByText(/labrador/i);
    expect(dogBreedInComponent).toBeInTheDocument();
  });

  it('should render edit text in button', () => {
    const saveTextButtonInComponent = screen.getByText(/edit/i);
    expect(saveTextButtonInComponent).toBeInTheDocument();
  });

  it('should render likes counter text', () => {
    const likesTextinComponent = screen.getByText(/likes/i);
    expect(likesTextinComponent).toBeInTheDocument();
  });

  it('should render dog name if it is assigned', () => {
    const dogNameInComponent = screen.getByText(/martin/i);
    expect(dogNameInComponent).toBeInTheDocument();
  });

  it('should render delete text in button', () => {
    const deleteTextButtonInComponent = screen.getByText(/delete doggy/i);
    expect(deleteTextButtonInComponent).toBeInTheDocument();
  });

  it('expect alt img to renders in component', () => {
    const altImgButtonText = screen.getByAltText(/dog-random-pic/i);
    expect(altImgButtonText).toBeInTheDocument();
  });
});
