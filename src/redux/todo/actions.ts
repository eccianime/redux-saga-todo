import { action } from "typesafe-actions";
import { TodoTypes, Todo } from "./types";

export const getTodos = () => action(TodoTypes.GET_TODO);
export const addTodo = (text: string) => action(TodoTypes.ADD_TODO, { text });
export const updateTodo = (todoId: string, text: string) =>
  action(TodoTypes.UPDATE_TODO, { id: todoId, text });
export const deleteTodo = (id: string) => action(TodoTypes.DELETE_TODO, { id });

export const loadStart = () => action(TodoTypes.LOADING_START);
export const loadSuccess = (data: Todo[]) =>
  action(TodoTypes.LOADING_SUCCESS, data);
export const loadFailure = () => action(TodoTypes.LOADING_FAILURE);
