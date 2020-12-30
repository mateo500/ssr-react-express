import update from 'immutability-helper';
import actionTypes from './constants';

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  managedDogs: [],
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

    default:
      return state;
  }
};
