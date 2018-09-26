import { ActionType, getType } from 'typesafe-actions';
import * as actions from './actions';

export type TodosAction = ActionType<typeof actions>;

export interface TodosState {
  readonly counter: number;
  readonly todos: ReadonlyArray<Payload.Todo>;
}

const initialState: TodosState = {
  counter: 0,
  todos: [],
};

export default (state: TodosState = initialState, action: TodosAction) => {
  console.log('todos/reducer');
  switch (action.type) {
    case getType(actions.add):
      const todos = [...state.todos, action.payload];
      return { ...state, todos };
    case getType(actions.toggle):
      return state;
    default:
      return state;
  }
};
