// import { TodosAction } from './todos';

// export type RootAction =
//   | TodosAction;

// import { RouterAction, LocationChangeAction } from 'react-router-redux';
// type ReactRouterAction = RouterAction | LocationChangeAction;
import { TodosAction } from './todos';
import rootReducer from './root-reducer';
import { StateType } from 'typesafe-actions';

declare module 'Types' {
  export type RootState = StateType<typeof rootReducer>;
  export type RootAction = | TodosAction;
}