import { action } from 'typesafe-actions';

import { Types, Payload } from './types';

export const loadRequest = () => action(Types.LOAD_REQUEST);
export const loadSuccess = (data: Payload) => action(Types.LOAD_SUCCESS, data);
export const loadFailure = () => action(Types.LOAD_FAILURE);
