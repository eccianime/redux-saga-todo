export enum TodoTypes {
  LOADING_START = '@todo/LOADING_START',
  LOADING_SUCCESS = '@todo/LOADING_SUCCESS',
  LOADING_FAILURE = '@todo/LOADING_FAILURE',
  GET_TODOS = '@todo/GET_TODOS',
  ADD_TODO = '@todo/ADD_TODO',
  UPDATE_TODO = '@todo/UPDATE_TODO',
  DELETE_TODO = '@todo/DELETE_TODO',
  SET_CURRENT_DATE = '@todo/SET_CURRENT_DATE',
}

export interface Todo {
  id: string;
  text: string;
  date?: string;
  icon: string;
  color: string;
  created_at: number;
  updated_at: number;
}

export interface TodoState {
  data: Todo[];
  loading: boolean;
  error: boolean;
  currentDate: string;
}

export interface GetTodosAction {
  type: TodoTypes.GET_TODOS;
  payload?: {
    date: string;
  };
}

export interface AddTodoAction {
  type: TodoTypes.ADD_TODO;
  payload: {
    text: string;
    icon: string;
    color: string;
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
