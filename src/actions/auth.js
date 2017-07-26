import * as Types from './types';
import { createAction } from 'redux-actions';
export const login = createAction(Types.AUTH_LOGIN.REQUEST);
export const logout = createAction(Types.AUTH_LOGOUT.REQUEST);
