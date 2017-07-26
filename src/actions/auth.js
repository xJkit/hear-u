import * as Types from './types';
import { createAction } from 'redux-actions';
export const login = createAction(Types.AUTH_LOGIN.REQUEST);
