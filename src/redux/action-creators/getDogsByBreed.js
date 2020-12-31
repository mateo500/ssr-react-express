import actionTypes from '../constants';
import { getDogsByBreedRequest } from '../../services';

export const getDogsByBreed = (breed) => {
  return (dispatch) => {
    dispatch(request());

    getDogsByBreedRequest(breed)
      .then((payload) =>
        dispatch(
          success(payload.data.message.filter((data, index) => index <= 50))
        )
      )
      .catch((err) => dispatch(failure(err.message)));
  };

  function request() {
    return { type: actionTypes['request/GET_DOG_BREEDS'] };
  }

  function success(data) {
    return {
      type: actionTypes['request/GET_DOG_BREEDS_SUCCESS'],
      payload: data,
    };
  }

  function failure(error) {
    return {
      type: actionTypes['request/GET_DOG_BREEDS_FAILURE'],
      payload: error,
    };
  }
};
