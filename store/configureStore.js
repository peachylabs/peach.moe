import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import apiMiddleware from '../middleware/api';
import loggerMiddleware from 'redux-logger';
import * as reducers from '../reducers';
import { devTools, persistState } from 'redux-devtools';

const reducer = combineReducers(reducers);
// const createStoreWithMiddleware = applyMiddleware(
//   thunkMiddleware,
//   apiMiddleware,
//   loggerMiddleware
// )(createStore);

// Creates a preconfigured store for this example.
// export default function configureStore(initialState) {
//   return createStoreWithMiddleware(reducer, initialState);
// }
const finalStore = compose(
  // Enables your middleware:
  applyMiddleware(thunkMiddleware),
  // Provides support for DevTools:
  devTools(),
  // Lets you write ?debug_session=<name> in address bar to persist debug sessions
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
  createStore
)(reducer);


export default finalStore;
