import * as Types from 'actions/types';
import { handleActions } from 'redux-actions';

const initialState = {
  logged: false,
  authToken: null,
  account: '',
};

const authReducer = handleActions({
  [Types.AUTH_LOGIN.FAILURE]: (state, action) => ({
    ...state,
    logged: false,
    authToken: null,
  }),
  [Types.AUTH_LOGIN.SUCCESS]: (state, action) => ({
    ...state,
    logged: true,
    authToken: action.response.authToken || null,
    account: action.response.account || '',
  }),
  [Types.AUTH_LOGOUT.SUCCESS]: (state, action) => ({
    ...state,
    logged: false,
  }),
}, initialState);

export default authReducer;
