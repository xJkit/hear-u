import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from 'reducers';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
  );
  store.runSaga = sagaMiddleware.run;
  return store;
}

export default configureStore;
