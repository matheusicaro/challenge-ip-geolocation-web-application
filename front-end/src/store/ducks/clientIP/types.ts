import { AnyAction } from 'redux';

/*
 * Action Types
 */
export enum Types {
  LOAD_REQUEST = '@clientIP/LOAD_RESQUEST',
  LOAD_SUCCESS = '@clientIP/LOAD_SUCCESS',
  LOAD_FAILURE = '@clientIP/LOAD_FAILURE',
}

export type State = {
  readonly ip: string;
  readonly loading: boolean;
  readonly error: boolean;
};

export type Payload = {
  ip: string;
};

export interface Action extends AnyAction {
  payload: Payload;
}
