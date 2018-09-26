import { createSelector } from 'reselect';

import { TodosState } from './reducer';

export const getTodoDomain = (state: TodosState) => state;

// export const getTodosFilter = (state: TodosState) => state.todosFilter;

export const getFilteredTodos = createSelector(
  getTodoDomain,
  state => state.todos,
);
