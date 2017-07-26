import { all, fork, put } from 'redux-saga/effects';
import * as Types from 'actions/types';
//---sagas ---
import auth from './auth';

export default function* rootSaga() {
  yield all([
    fork(auth),
  ]);
  yield put({ type: Types.APP_SAGA_INIT });
}
