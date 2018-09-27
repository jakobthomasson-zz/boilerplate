import { createStore, applyMiddleware } from 'redux';
// import { createEpicMiddleware } from 'redux-observable';

import { storeHelpers } from 'helpers';
import rootReducer from './root-reducer';
// import rootEpic from './root-epic';
// import services from '../services';

// export const epicMiddleware = createEpicMiddleware(rootEpic, {
//   dependencies: services,
// });

function configureStore(initialState?: object) {
  // configure middlewares
  // const middlewares = [epicMiddleware];
  // const middlewares = [];

  // compose enhancers
  // const enhancer = composeEnhancers(applyMiddleware(...middlewares));´
  const enhancer = storeHelpers.composeEnhancers(applyMiddleware());

  // create store
  // return createStore(rootReducer, initialState!, enhancer);
  return createStore(rootReducer, initialState!, enhancer);

}

// pass an optional param to rehydrate state on app start
const store = configureStore();

// export store singleton instance
export default store;
