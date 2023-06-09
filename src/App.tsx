import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/Store';

import { PersistGate } from 'redux-persist/integration/react';
import { Transfer } from './Components/Transfer';
import {newStore} from "./newRedux/store/Store";

function App() {
  return (
    <Fragment>
        {/*@ts-ignore*/}
        <Provider store={newStore}>
            {/*@ts-ignore*/}
      <Provider store={store}>
        {/*@ts-ignore*/}
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Transfer />
          </Router>
        </PersistGate>
      </Provider>
        </Provider>
    </Fragment>
  );
}

export default App;
