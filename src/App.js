import React from 'react';

import {Provider} from 'react-redux';

import store from './redux';
import {Home} from './screens/Home';

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
