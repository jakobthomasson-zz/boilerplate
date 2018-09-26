import { createAction } from 'typesafe-actions';
import { TOGGLE, ADD } from './constants';

export const toggle = createAction(TOGGLE, (resolve) => {
  return (id: string) => resolve(id);
});

export const add = createAction(ADD, (resolve) => {
  return (title: string) => resolve({ title, id: 1, completed: false } as Payload.Todo);
});
