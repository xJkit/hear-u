const createRequestTypes = (base) => {
  const requestTypes = ['REQUEST', 'SUCCESS', 'FAILURE'];
  return requestTypes.reduce((acc, type) => {
    const temp = acc;
    temp[type] = `${base}_${type}`;
    return temp;
  }, {});
}

export const APP_SAGA_INIT = 'sagas:APP_SAGA_INIT';

export const AUTH_LOGIN = createRequestTypes('auth:AUTH_LOGIN');
export const AUTH_LOGOUT = createRequestTypes('auth:AUTH_LOGOUT');
