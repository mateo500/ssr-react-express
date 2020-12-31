import ActionTypes from '../constants';

export const addDog = (dogInfo) => {
  return {
    type: ActionTypes['local/ADD_DOG'],
    payload: dogInfo,
  };
};

export const cleanBreedResults = () => {
  return {
    type: ActionTypes['local/CLEAN_BREED_RESULTS'],
  };
};
