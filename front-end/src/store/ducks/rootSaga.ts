import { all, takeLatest } from 'redux-saga/effects';

import { Types as ClientIpTypes } from './clientIP/types';
import { loadClientIp } from './clientIP/sagas';

export default function* rootSaga() {
  return yield all([takeLatest(ClientIpTypes.LOAD_REQUEST, loadClientIp)]);
}
