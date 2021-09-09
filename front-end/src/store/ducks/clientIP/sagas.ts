import { put } from 'redux-saga/effects';

import StringUtils from '../../../utils/StringUtils';

import { loadSuccess, loadFailure } from './actions';

/**
 * Function designed to get the client's ip and return action to the store
 *
 *  @return  {Action} store action
 */
export function* loadClientIp() {
  try {
    const clientIp = yield getClientIp();

    if (StringUtils.isNullOrEmpty(clientIp)) {
      throw new Error('Not found client IP');
    }

    yield put(loadSuccess(clientIp));
  } catch (err) {
    yield put(loadFailure());
  }
}

const getClientIp = async () => {
  const result = await fetch('https://api.ipify.org/?format=json', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const body = await result.json();

  return body ? body.ip : '';
};
