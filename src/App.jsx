import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { store } from './redux/store';
import { Index } from './views/Index';
import { Layout } from './views/Layout';
import { DiscoverDogs } from './views/DiscoverDogs';
import { ManageDogs } from './views/ManageDogs';
import './views/style/globals.styl';

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Switch>
          <Route exact path='/' component={Index} />
          <Route path='/discover' component={DiscoverDogs} />
          <Route path='/manage' component={ManageDogs} />
        </Switch>
      </Layout>
    </Provider>
  );
};

export default App;
