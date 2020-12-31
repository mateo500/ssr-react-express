export const parseDogInfo = (url) => {
  const dogInfo = url.split('/');

  return {
    dogBreed: dogInfo[4],
    dogUrl: url,
    dogAge: Math.floor(Math.random() * 19 + 1),
  };
};
