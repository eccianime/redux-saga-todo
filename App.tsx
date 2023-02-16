import './src/config/dayjs';

import { NativeBaseProvider, StatusBar } from 'native-base';
import React from 'react';
import { Provider } from 'react-redux';
import theme from './src/config/theme';
import store from './src/redux/store';
import AppRoutes from './src/routes';

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <Provider store={store}>
        <StatusBar translucent={false} />
        <AppRoutes />
      </Provider>
    </NativeBaseProvider>
  );
};

export default App;
