import { action } from 'typesafe-actions';

import { Types, Payload } from './types';

/**
 * Actions change customer ip state in store
 *
 * loadRequest: request the type search the store
 * loadSuccess: feeds on the value for the customer's ip in the store
 * loadFailure: request action of failure to obtain the client's ip
 */
export const loadRequest = () => action(Types.LOAD_REQUEST);
export const loadSuccess = (data: Payload) => action(Types.LOAD_SUCCESS, data);
export const loadFailure = () => action(Types.LOAD_FAILURE);
