import * as Types from 'actions/types';
import { handleActions } from 'redux-actions';

const initialState = {
  logged: false,
  authToken: null,
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
  }),
}, initialState);

export default authReducer;
