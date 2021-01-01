export const parseDogInfo = (url) => {
  const dogInfo = url.split('/');

  return {
    dogBreed: dogInfo[4],
    dogUrl: url,
  };
};
