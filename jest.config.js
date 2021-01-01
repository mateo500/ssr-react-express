module.exports = {
  roots: ['<rootDir>/src'],

  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '^.+\\.styl$': 'jest-transform-styl',
  },

  setupFilesAfterEnv: [
    '@testing-library/react/dont-cleanup-after-each',
    '@testing-library/jest-dom/extend-expect',
  ],

  testRegex: '(/__tests__/.*|(\\.|/)(test))\\.jsx?$',

  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
};
