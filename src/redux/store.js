import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { reducer } from './rootReducer';

const localReducers = {
  appState: reducer,
};

const middleWares = [thunk];

const reducers = combineReducers({
  ...localReducers,
});

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleWares))
);
