import ActionTypes from '../constants';

export const addDog = (dogInfo) => {
  return {
    type: ActionTypes['local/ADD_DOG'],
    payload: dogInfo,
  };
};

export const editDog = (dogId, dogName) => {
  return {
    type: ActionTypes['local/UPDATE_DOG'],
    payload: { dogId, dogName },
  };
};

export const deleteDog = (dogId) => {
  return {
    type: ActionTypes['local/REMOVE_DOG'],
    payload: dogId,
  };
};

export const cleanBreedResults = () => {
  return {
    type: ActionTypes['local/CLEAN_BREED_RESULTS'],
  };
};
