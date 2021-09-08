import { put } from 'redux-saga/effects';

import { loadSuccess, loadFailure } from './actions';

export function* loadClientIp() {
  try {
    yield put(loadSuccess({ ip: 'ip' }));
  } catch (err) {
    yield put(loadFailure());
  }
}
