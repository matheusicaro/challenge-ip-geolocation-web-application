import { all, takeLatest } from 'redux-saga/effects';

import { loadClientIp } from './clientIP/sagas';
import { Types as ClientIpTypes } from './clientIP/types';

export default function* rootSaga() {
  return yield all([takeLatest(ClientIpTypes.LOAD_REQUEST, loadClientIp)]);
}
