import * as Types from 'actions/ActionTypes';
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
    authToken: action.payload.authToken || null,
  }),
}, initialState);

export default authReducer;
