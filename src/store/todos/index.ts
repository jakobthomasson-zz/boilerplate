import { ActionType, getType } from 'typesafe-actions';
import * as actions from './actions';

export type TodosAction = ActionType<typeof actions>;

export interface State {
  todos: Payload.Todo[];
}

const initialState: Readonly<State> = {
  todos: [],
};

export default (state: Readonly<State> = initialState, action: TodosAction) => {
  action.payload;
  switch (action.type) {
    case getType(actions.add):
      const todos = [...state.todos, action.payload];
      return { ...state, todos };
    case getType(actions.toggle):
      return state;
  }
};
