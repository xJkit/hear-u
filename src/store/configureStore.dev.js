import { createStore, compose } from 'redux';
import reducers from 'reducers';

const configureStore = () => createStore(
  reducers,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default configureStore;
