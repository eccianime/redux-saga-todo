import { TodoState, TodoTypes } from "./types";
import { Reducer } from "redux";

const INITIAL_STATE: TodoState = {
  data: [],
  error: false,
  loading: false,
};

const todoReducer: Reducer<TodoState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TodoTypes.LOADING_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case TodoTypes.LOADING_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    }
    case TodoTypes.LOADING_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    }
    default:
      return state;
  }
};

export default todoReducer;
