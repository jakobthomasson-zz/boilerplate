import { combineReducers, Reducer } from 'redux';
import { TodosAction, TodosState, todosReducer } from './todos';

export interface State {
  readonly todosDomain: TodosState;
}

export type Action = | TodosAction;

const rootReducer: Reducer<State, Action> = combineReducers({
  todosDomain: todosReducer,
});

export default rootReducer;
