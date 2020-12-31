import actionTypes from '../constants';
import { getDogPicturesRequest } from '../../services';

export const getDogPictures = () => {
  return (dispatch) => {
    dispatch(request());

    getDogPicturesRequest()
      .then((payload) => dispatch(success(payload.data.message)))
      .catch((err) => dispatch(failure(err.message)));
  };

  function request() {
    return { type: actionTypes['request/GET_DOG_PICS'] };
  }

  function success(data) {
    return {
      type: actionTypes['request/GET_DOG_PICS_SUCCESS'],
      payload: data,
    };
  }

  function failure(error) {
    return {
      type: actionTypes['request/GET_DOG_PICS_FAILURE'],
      payload: error,
    };
  }
};
