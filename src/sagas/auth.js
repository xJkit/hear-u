import { all, takeLatest, fork, put } from 'redux-saga/effects';
import * as Types from 'actions/types';

export default function* watcher() {
  yield all([
    fork(takeLatest, Types.AUTH_LOGIN.REQUEST, login),
  ]);
}

export function* login({ payload }) {
  console.log(`saga got log in request with account: ${payload.account} and password: ${payload.password}`);
  const response = { authToken: 'fakeToken hahaha' };
  yield put({ type: Types.AUTH_LOGIN.SUCCESS, response });
}
