import update from 'immutability-helper';
import actionTypes from './constants';

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  managedDogs: [],
  dogsByBreed: [],
  dogPics: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes['request/GET_DOG_PICS']: {
      return update(state, {
        loading: { $set: true },
      });
    }

    case actionTypes['request/GET_DOG_PICS_SUCCESS']:
      return update(state, {
        loading: { $set: false },
        error: { $set: false },
        errorMessage: { $set: '' },
        dogPics: { $set: action.payload },
      });

    case actionTypes['request/GET_DOG_PICS_FAILURE']:
      return update(state, {
        dogPics: { $set: [] },
        error: { $set: true },
        errorMessage: { $set: action.payload },
        loading: { $set: false },
      });

    case actionTypes['request/GET_DOG_BREEDS']: {
      return update(state, {
        loading: { $set: true },
      });
    }

    case actionTypes['request/GET_DOG_BREEDS_SUCCESS']:
      return update(state, {
        loading: { $set: false },
        error: { $set: false },
        errorMessage: { $set: '' },
        dogsByBreed: { $set: action.payload },
      });

    case actionTypes['request/GET_DOG_BREEDS_FAILURE']:
      return update(state, {
        dogsByBreed: { $set: [] },
        error: { $set: true },
        errorMessage: { $set: action.payload },
        loading: { $set: false },
      });

    //local actions
    case actionTypes['local/CLEAN_BREED_RESULTS']:
      return update(state, {
        dogsByBreed: { $set: [] },
      });

    case actionTypes['local/ADD_DOG']:
      return update(state, {
        managedDogs: { $push: [action.payload] },
      });

    case actionTypes['local/REMOVE_DOG']:
      const filterDog = state.managedDogs.filter(
        (item) => item.dogId !== action.payload
      );
      return update(state, {
        managedDogs: { $set: filterDog },
      });

    case actionTypes['local/UPDATE_DOG']:
      const targetDog = state.managedDogs.filter(
        (item) => item.dogId === action.payload.dogId
      );
      const newDogsList = state.managedDogs.filter(
        (item) => item.dogId !== action.payload.dogId
      );

      const updatedData = { ...targetDog[0], dogName: action.payload.dogName };
      newDogsList.push(updatedData);

      return update(state, {
        managedDogs: { $set: newDogsList },
      });

    default:
      return state;
  }
};
