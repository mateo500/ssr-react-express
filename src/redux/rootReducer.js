import update from 'immutability-helper';
import actionTypes from './constants';

const initialState = {
  posts: [],
  loading: false,
  error: false,
  errorMessage: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes['request/GET_POSTS']:
      return update(state, {
        loading: { $set: true },
      });

    case actionTypes['request/GET_POSTS_SUCCESS']:
      return update(state, {
        loading: { $set: false },
        error: { $set: false },
        errorMessage: { $set: '' },
        posts: { $set: action.payload },
      });

    case actionTypes['request/GET_POSTS_FAILURE']:
      return update(state, {
        posts: { $set: [] },
        error: { $set: true },
        errorMessage: { $set: action.payload },
        loading: { $set: false },
      });

    default:
      return state;
  }
};
