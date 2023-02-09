export enum TodoTypes {
  LOADING_START = "@todo/LOADING_START",
  LOADING_SUCCESS = "@todo/LOADING_SUCCESS",
  LOADING_FAILURE = "@todo/LOADING_FAILURE",
  GET_TODO = "@todo/GET_TODO",
  ADD_TODO = "@todo/ADD_TODO",
  UPDATE_TODO = "@todo/UPDATE_TODO",
  DELETE_TODO = "@todo/DELETE_TODO",
}

export interface Todo {
  id: string;
  text: string;
}

export interface TodoState {
  readonly data: Todo[];
  readonly loading: boolean;
  readonly error: boolean;
}

export interface AddTodoAction {
  type: TodoTypes.ADD_TODO;
  payload: {
    text: string;
  };
}

export interface UpdateTodoAction {
  type: TodoTypes.UPDATE_TODO;
  payload: Todo;
}

export interface DeleteTodoAction {
  type: TodoTypes.DELETE_TODO;
  payload: {
    id: string;
  };
}
