import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/Store';
import { PersistGate } from 'redux-persist/integration/react';
import { Transfer } from './Components/Transfer';

function App() {
  return (
    <Fragment>
      {/*@ts-ignore*/}
      <Provider store={store}>
        {/*@ts-ignore*/}
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Transfer />
          </Router>
        </PersistGate>
      </Provider>
    </Fragment>
  );
}

export default App;
