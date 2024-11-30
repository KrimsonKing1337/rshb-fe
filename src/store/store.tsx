import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { mainReducer } from './main';

const sagaMiddleware = createSagaMiddleware();

const reducer = {
  main: mainReducer,
};

const middlewares = [
  sagaMiddleware,
];

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middlewares),
});

export type RootState = ReturnType<typeof store.getState>;
