import { Reducer, AnyAction } from 'redux';

import { Types, State, Action } from './types';

const INITIAL_STATE: State = {
  ip: '',
  loading: false,
  error: false,
};

/**
 * Reducer to control changes in the status of obtaining the ip client
 *
 */
const ClientIPReducer: Reducer<State, Action> = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case Types.LOAD_REQUEST:
      return loadRequest(state);
    case Types.LOAD_SUCCESS:
      return loadSuccess(state, action);
    case Types.LOAD_FAILURE:
      return loadFailure(state);
    default:
      return state;
  }
};

/*
 * Handlers
 */
const loadSuccess = (state: State, action: AnyAction): State => ({
  loading: false,
  error: false,
  ip: action.payload,
});

const loadRequest = (state: State): State => ({
  ...state,
  loading: true,
  error: false,
});

const loadFailure = (state: State): State => ({
  ...state,
  loading: false,
  error: true,
});

export default ClientIPReducer;
