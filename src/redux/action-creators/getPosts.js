import actionTypes from '../constants';
import { getPostsRequest } from '../../services/getPostsRequest';

export const getPosts = () => {
  return (dispatch) => {
    dispatch(request());

    getPostsRequest()
      .then((payload) => dispatch(success(payload.data)))
      .catch((err) => dispatch(failure(err)));
  };

  function request() {
    return { type: actionTypes['request/GET_POSTS'] };
  }

  function success(data) {
    return {
      type: actionTypes['request/GET_POSTS_SUCCESS'],
      payload: data,
    };
  }

  function failure(error) {
    return {
      type: actionTypes['request/GET_POSTS_FAILURE'],
      payload: error,
    };
  }
};
