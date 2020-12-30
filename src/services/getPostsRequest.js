import Axios from 'axios';

export const getPostsRequest = () => {
  const requestConfig = {
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/posts',
  };

  return Axios(requestConfig);
};
