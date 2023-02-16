import { action } from 'typesafe-actions';
import { TodoTypes, Todo } from './types';

export const getTodos = (date?: string) =>
  action(TodoTypes.GET_TODOS, { date });

export const addTodo = (text: string, icon: string, color: string) =>
  action(TodoTypes.ADD_TODO, { text, icon, color });

export const updateTodo = (
  todoId: string,
  text: string,
  icon: string,
  color: string
) => action(TodoTypes.UPDATE_TODO, { id: todoId, text, icon, color });

export const deleteTodo = (id: string) => action(TodoTypes.DELETE_TODO, { id });

export const setCurrentDate = (date: string) =>
  action(TodoTypes.SET_CURRENT_DATE, { date });

export const loadStart = () => action(TodoTypes.LOADING_START);
export const loadSuccess = (data: Todo[]) =>
  action(TodoTypes.LOADING_SUCCESS, data);

export const loadFailure = () => action(TodoTypes.LOADING_FAILURE);
