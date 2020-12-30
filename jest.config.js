module.exports = {
  roots: ['<rootDir>/src'],

  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.styl$': 'jest-transform-styl',
  },

  setupFilesAfterEnv: [
    '@testing-library/react/dont-cleanup-after-each',
    '@testing-library/jest-dom/extend-expect',
  ],

  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$',

  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
};
