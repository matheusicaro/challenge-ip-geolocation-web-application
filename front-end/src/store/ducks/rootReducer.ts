import { combineReducers } from 'redux';

import ClientIPReducer from './clientIP/clientIPReducer';

export const rootReducer = combineReducers({
  clientIp: ClientIPReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
