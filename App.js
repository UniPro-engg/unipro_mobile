import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {persistor, store} from './src/redux/store';
import AppNavigation from './src/navigation/AppNavigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" hidden={false} />
      <NavigationContainer>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppNavigation />
          </PersistGate>
        </Provider>
      </NavigationContainer>
    </>
  );
};

export default App;
