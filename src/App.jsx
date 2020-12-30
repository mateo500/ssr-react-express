import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { store } from './redux/store';
import { Index } from './views/Index';
import { Layout } from './views/Layout';
import { DiscoverDogs } from './views/DiscoverDogs';
import { ManageDogs } from './views/ManageDogs';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path='/' component={Index} />
        <Route path='/discover' component={DiscoverDogs} />
        <Route path='/manage' component={ManageDogs} />
      </Switch>
    </Layout>
  );
};

const ReduxWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default ReduxWrapper;
