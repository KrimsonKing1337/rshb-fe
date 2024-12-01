import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { inputsReducer } from './inputs';
import { mainReducer, mainWatchers } from './main';

const sagaMiddleware = createSagaMiddleware();

const reducer = {
  inputs: inputsReducer,
  main: mainReducer,
};

const middlewares = [
  sagaMiddleware,
];

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middlewares),
});

sagaMiddleware.run(mainWatchers);

export type RootState = ReturnType<typeof store.getState>;
