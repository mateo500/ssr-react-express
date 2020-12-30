import Axios from 'axios';

export const getDogPicturesRequest = () => {
  const requestConfig = {
    method: 'get',
    url: 'https://dog.ceo/api/breeds/image/random/50',
  };

  return Axios(requestConfig);
};
