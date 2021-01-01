/* eslint-disable no-return-assign */
import React from 'react';
import { Provider } from 'react-redux';
import { IntersectionObserverMock } from './intersectionObserver.mock';

export const ReduxWrapperMock = ({ children, store }) => {
  global.IntersectionObserver = IntersectionObserverMock;

  return (
    <div>
      <Provider store={store}>{children}</Provider>
    </div>
  );
};
