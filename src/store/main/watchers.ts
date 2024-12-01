import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

import type { User } from '@types';

import { getUsers, addUser } from 'api';

import { actions } from './slice';

export function* watchFetchUsers() {
  const { data } = yield call(getUsers);

  yield put(actions.setUsers(data));
}

export function* watchPutUser(action: PayloadAction<User>) {
  yield call(addUser, action.payload);

  yield put(actions.fetchUsers());
}

export function* watchers() {
  yield takeLatest(actions.fetchUsers, watchFetchUsers);
  yield takeLatest(actions.fetchPutUser, watchPutUser);
}
