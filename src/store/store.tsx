import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { inputsReducer } from './inputs';

const sagaMiddleware = createSagaMiddleware();

const reducer = {
  inputs: inputsReducer,
};

const middlewares = [
  sagaMiddleware,
];

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middlewares),
});

export type RootState = ReturnType<typeof store.getState>;
