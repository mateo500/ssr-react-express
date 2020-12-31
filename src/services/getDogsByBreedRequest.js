import Axios from 'axios';

export const getDogsByBreedRequest = (breed) => {
  const requestConfig = {
    method: 'get',
    url: `https://dog.ceo/api/breed/${breed}/images`,
  };

  return Axios(requestConfig);
};
