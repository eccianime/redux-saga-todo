import { Ionicons } from "@expo/vector-icons";

export enum TodoTypes {
  LOADING_START = "@todo/LOADING_START",
  LOADING_SUCCESS = "@todo/LOADING_SUCCESS",
  LOADING_FAILURE = "@todo/LOADING_FAILURE",
  GET_TODOS = "@todo/GET_TODOS",
  ADD_TODO = "@todo/ADD_TODO",
  UPDATE_TODO = "@todo/UPDATE_TODO",
  DELETE_TODO = "@todo/DELETE_TODO",
  SET_CURRENT_DATE = "@todo/SET_CURRENT_DATE",
  TOGGLE_TODO_COMPLETE = "@todo/TOGGLE_TODO_COMPLETE",
}

export type Category = {
  icon: keyof typeof Ionicons.glyphMap;
  name: string;
  color: string;
};

export type Todo = {
  id: string;
  title: string;
  description: string;
  category: keyof typeof Ionicons.glyphMap;
  isCompleted: boolean;
  date: string;
  updated_at: number;
  created_at: number;
};

export type TodoState = {
  data: Todo[];
  loading: boolean;
  error: boolean;
  currentDate: string;
};

export type GetTodosAction = {
  type: TodoTypes.GET_TODOS;
  payload?: {
    date: string;
  };
};

export type AddTodoAction = {
  type: TodoTypes.ADD_TODO;
  payload: {
    title: string;
    description: string;
    category: keyof typeof Ionicons.glyphMap;
  };
};

export type UpdateTodoAction = {
  type: TodoTypes.UPDATE_TODO;
  payload: Todo;
};

export type DeleteTodoAction = {
  type: TodoTypes.DELETE_TODO;
  payload: {
    id: string;
  };
};
