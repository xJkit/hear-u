import * as ActionTypes from './ActionTypes';
import { createAction } from 'redux-actions';
export const login = createAction(ActionTypes.AUTH_LOGIN.REQUEST);
