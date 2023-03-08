import { TodoState, TodoTypes } from './types';
import { Reducer } from 'redux';
import dayjs from 'dayjs';

const INITIAL_STATE: TodoState = {
  data: [],
  error: false,
  loading: false,
  currentDate: dayjs().format('DD/MM/YY'),
};

const todoReducer: Reducer<TodoState> = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
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
        data: payload,
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
    case TodoTypes.SET_CURRENT_DATE: {
      return {
        ...state,
        currentDate: payload.date,
      };
    }
    default:
      return state;
  }
};

export default todoReducer;
