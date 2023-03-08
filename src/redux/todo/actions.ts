import { action } from 'typesafe-actions';
import { TodoTypes, Todo } from './types';

export const getTodos = (date?: string) =>
  action(TodoTypes.GET_TODOS, { date });

export const addTodo = (title: string, description: string, category: string) =>
  action(TodoTypes.ADD_TODO, { title, description, category });

export const updateTodo = (
  id: string,
  title: string,
  description: string,
  category: string
) => action(TodoTypes.UPDATE_TODO, { id, title, description, category });

export const deleteTodo = (id: string) => action(TodoTypes.DELETE_TODO, { id });

export const toggleTodoComplete = (id: string, isCompleted: boolean) =>
  action(TodoTypes.TOGGLE_TODO_COMPLETE, { id, isCompleted });

export const setCurrentDate = (date: string) =>
  action(TodoTypes.SET_CURRENT_DATE, { date });

export const loadStart = () => action(TodoTypes.LOADING_START);

export const loadSuccess = (data: Todo[]) =>
  action(TodoTypes.LOADING_SUCCESS, data);

export const loadFailure = () => action(TodoTypes.LOADING_FAILURE);
