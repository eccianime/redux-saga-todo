import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import { Store } from 'redux';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import { AppState } from './types';

const sagaMiddleware = createSagaMiddleware();

const store: Store<AppState> = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
